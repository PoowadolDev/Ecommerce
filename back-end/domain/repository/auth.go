package repository

import (
	"github.com/gofiber/fiber/v3"
)

type AuthRepo interface {
	AuthRequired(c *fiber.Ctx) *fiber.Ctx
}
