package service

import (
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
	"gitlab.com/PoowadolDev/Ecommerce.git/domain/repository"
)

type AuthServiceImpl struct {
	repo *fiber.Ctx
}

func AuthService(repo *fiber.Ctx) repository.AuthRepo {
	return &AuthServiceImpl{repo: repo}
}

func (c AuthServiceImpl) AuthRequired(C *fiber.Ctx) *fiber.Ctx {
	cookie := C.Cookies("jwt")

	jwtSecretKey := os.Getenv("JWT_SECRET")
	token, err := jwt.ParseWithClaims(cookie, jwt.MapClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(jwtSecretKey), nil
	})

	if err != nil || !token.Valid {
		return C
	}

	return C
}
