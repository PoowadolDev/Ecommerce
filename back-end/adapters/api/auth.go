package api

import (
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt"
)

func CheckAuth(c *fiber.Ctx) error {
	cookie := c.Cookies("jwt_token")

	jwtSecretKey := os.Getenv("JWT_SECRET")
	token, err := jwt.ParseWithClaims(cookie, jwt.MapClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(jwtSecretKey), nil
	})

	if err != nil || !token.Valid {
		return c.JSON(fiber.Map{
			"message": false,
		})
	}

	return c.JSON(fiber.Map{
		"message": true,
	})
}
