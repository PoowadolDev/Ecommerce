package main

import (
	"fmt"
	"log"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"gitlab.com/PoowadolDev/Ecommerce.git/adapters/api"
	"gitlab.com/PoowadolDev/Ecommerce.git/adapters/db"
	"gitlab.com/PoowadolDev/Ecommerce.git/domain/entity"
	"gitlab.com/PoowadolDev/Ecommerce.git/domain/service"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

const (
	host     = "192.168.1.40"
	port     = 5432
	user     = "myuser"
	password = "mypassword"
	dbname   = "mydatabase"
)

func main() {
	app := fiber.New()

	dsn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s  sslmode=disable", host, port, user, password, dbname)

	newLogger := logger.New(
		log.New(os.Stdout, "\r\n", log.LstdFlags),
		logger.Config{
			SlowThreshold: time.Second,
			LogLevel:      logger.Info,
			Colorful:      true,
		},
	)

	database, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		Logger: newLogger,
	})

	if err != nil {
		panic("failed to connect database")
	}

	database.AutoMigrate(&entity.User{})

	userRepo := db.NewGormUserRepository(database)
	userService := service.NewUserService(userRepo)
	userHandler := api.NewUserHandler(userService)

	app.Post("/register", userHandler.CreateUser)

	app.Listen(":8000")
}
