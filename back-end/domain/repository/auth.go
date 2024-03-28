package repository

import (
	"github.com/gofiber/fiber/v2"
)

type AuthRepo interface {
	AuthRequired(c *fiber.Ctx) *fiber.Ctx
}
