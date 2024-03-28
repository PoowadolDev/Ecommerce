package main

import (
	"fmt"
	"log"
	"os"
	"strconv"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
	"gitlab.com/PoowadolDev/Ecommerce.git/adapters/api"
	"gitlab.com/PoowadolDev/Ecommerce.git/adapters/db"
	"gitlab.com/PoowadolDev/Ecommerce.git/domain/entity"
	"gitlab.com/PoowadolDev/Ecommerce.git/domain/service"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

func main() {
	app := fiber.New()

	err := godotenv.Load()
	if err != nil {
		fmt.Println("Error loading .env file:", err)
		return
	}
	// Database Config
	dbhost := os.Getenv("host")
	dbport := os.Getenv("port")
	dbuser := os.Getenv("user")
	dbpassword := os.Getenv("password")
	dbname := os.Getenv("dbname")

	port, err := strconv.Atoi(dbport)
	if err != nil {
		fmt.Println("Error converting string to int:", err)
	}

	dsn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s  sslmode=disable", dbhost, port, dbuser, dbpassword, dbname)

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
	app.Post("/login", userHandler.LoginUser)

	app.Listen(":8000")
}
