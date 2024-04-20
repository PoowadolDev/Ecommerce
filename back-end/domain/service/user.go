package service

import (
	"errors"
	"os"
	"time"

	"github.com/golang-jwt/jwt/v4"
	"gitlab.com/PoowadolDev/Ecommerce.git/domain/entity"
	"gitlab.com/PoowadolDev/Ecommerce.git/domain/repository"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type UserService interface {
	CreateUser(user entity.User) error
	LoginUser(user entity.User) (string, string, error)
}

type UserServiceImpl struct {
	repo repository.UserRepo
}

func NewUserService(repo repository.UserRepo) UserService {
	return &UserServiceImpl{repo: repo}
}

func (s *UserServiceImpl) CreateUser(user entity.User) error {

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)

	if err != nil {
		return err
	}

	user.Password = string(hashedPassword)

	if err := s.repo.Save(user); err != nil {
		return err
	}
	return nil
}

func (s *UserServiceImpl) LoginUser(user entity.User) (string, string, error) {

	UserFound, err := s.repo.GetByEmail(user)

	if errors.Is(err, gorm.ErrRecordNotFound) {
		return "", "No account exists for the email you entered.", err
	}

	if err != nil {
		return "", "", err
	}

	errs := bcrypt.CompareHashAndPassword([]byte(UserFound.Password), []byte(user.Password))

	if errs != nil {
		return "", "The passwords you entered do not match", errs
	}

	jwtSecretKey := os.Getenv("JWT_SECRET")
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)
	claims["user_id"] = user.ID
	claims["exp"] = time.Now().Add(time.Hour * 72).Unix()

	t, err := token.SignedString([]byte(jwtSecretKey))
	if err != nil {
		return "", "", err
	}

	return t, "Login Success", nil
}
