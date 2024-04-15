package main

import (
	"github.com/gofiber/fiber/v2"
	"gitlab.com/PoowadolDev/Ecommerce.git/adapters/api"
	"gitlab.com/PoowadolDev/Ecommerce.git/adapters/db"
	"gitlab.com/PoowadolDev/Ecommerce.git/domain/service"
	"gorm.io/gorm"
)

func Setup(app *fiber.App, database *gorm.DB) {
	app.Get("/auth", api.CheckAuth)

	userRepo := db.NewGormUserRepository(database)
	userService := service.NewUserService(userRepo)
	userHandler := api.NewUserHandler(userService)

	app.Post("/register", userHandler.CreateUser)
	app.Post("/login", userHandler.LoginUser)
	app.Get("/signout", userHandler.SignOutUser)
}
