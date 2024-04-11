package main

import (
	"time"

	"github.com/gofiber/fiber/v2"
	"gitlab.com/PoowadolDev/Ecommerce.git/adapters/api"
	"gitlab.com/PoowadolDev/Ecommerce.git/adapters/db"
	"gitlab.com/PoowadolDev/Ecommerce.git/domain/service"
	"gorm.io/gorm"
)

func Setup(app *fiber.App, database *gorm.DB) {
	app.Get("/auth", api.CheckAuth)

	app.Get("/", func(c *fiber.Ctx) error {

		cookie := fiber.Cookie{
			Name:     "jwt_token",
			Value:    "1234",
			Expires:  time.Now().Add(time.Hour * 24),
			HTTPOnly: true,
			Domain:   "192.168.1.40",
			SameSite: "Lax",
		}

		c.Cookie(&cookie)

		return c.SendString("Hello, World!")
	})

	userRepo := db.NewGormUserRepository(database)
	userService := service.NewUserService(userRepo)
	userHandler := api.NewUserHandler(userService)

	app.Post("/register", userHandler.CreateUser)
	app.Post("/login", LoginUser)
}
