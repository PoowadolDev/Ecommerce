package api

import (
	"github.com/gofiber/fiber/v2"
	"gitlab.com/PoowadolDev/Ecommerce.git/domain/service"
)

type AuthHandler struct {
	authService service.AuthServiceImpl
}

func NewAuthHandler(authService service.AuthServiceImpl) *AuthHandler {
	return &AuthHandler{
		authService: authService,
	}
}

func (h *AuthHandler) authRequired(c *fiber.Ctx) error {
	// cookie := c.Cookies("jwt")

	// jwtSecretKey := os.Getenv("JWT_SECRET")
	// token, err := jwt.ParseWithClaims(cookie, jwt.MapClaims{}, func(token *jwt.Token) (interface{}, error) {
	// 	return []byte(jwtSecretKey), nil
	// })

	// if err != nil || !token.Valid {
	// 	return c.SendStatus(fiber.StatusUnauthorized)
	// }
	err := h.authService.AuthRequired(c)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err,
		})
	}

	return err.Next()
}
