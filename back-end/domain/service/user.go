package service

import (
	"gitlab.com/PoowadolDev/Ecommerce.git/domain/entity"
	"gitlab.com/PoowadolDev/Ecommerce.git/domain/repository"
	"golang.org/x/crypto/bcrypt"
)

type UserService interface {
	CreateUser(user entity.User) error
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
