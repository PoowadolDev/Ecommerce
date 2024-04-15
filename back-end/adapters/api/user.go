package api

import (
	"time"

	"github.com/gofiber/fiber/v2"
	"gitlab.com/PoowadolDev/Ecommerce.git/domain/entity"
	"gitlab.com/PoowadolDev/Ecommerce.git/domain/service"
)

type UserHandler struct {
	userService service.UserService
}

func NewUserHandler(userService service.UserService) *UserHandler {
	return &UserHandler{
		userService: userService,
	}
}

func (h *UserHandler) CreateUser(c *fiber.Ctx) error {

	var user entity.User

	if err := c.BodyParser(&user); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid Request",
		})
	}

	if user.Name == "" || user.Email == "" || user.Password == "" {
		return c.JSON(fiber.Map{
			"message": "All fields are required",
		})
	}

	if err := h.userService.CreateUser(user); err != nil {
		return c.JSON(fiber.Map{
			"message": "Already exists",
		})
	}

	return c.JSON(fiber.Map{
		"message": "Create Success",
	})
}

func (h *UserHandler) LoginUser(c *fiber.Ctx) error {
	var user entity.User

	if err := c.BodyParser(&user); err != nil {
		return c.SendStatus(fiber.StatusBadRequest)
	}

	token, status, err := h.userService.LoginUser(user)

	if status != "Login Success" {
		c.JSON(fiber.Map{
			"message": status,
		})
	}

	if err != nil {
		return c.JSON(fiber.Map{
			"message": status,
		})
	}

	c.Cookie(&fiber.Cookie{
		Name:     "jwt_token",
		Value:    token,
		Expires:  time.Now().Add(time.Hour * 72),
		HTTPOnly: true,
		Secure:   false,
		SameSite: "Lax",
	})

	return c.JSON(fiber.Map{
		"message": status,
	})
}

func (h *UserHandler) SignOutUser(c *fiber.Ctx) error {
	c.ClearCookie("jwt_token")

	return c.JSON(fiber.Map{
		"message": "Logout Success",
	})
}
