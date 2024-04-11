package main

import (
	"fmt"
	"log"
	"os"
	"strconv"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
	"gitlab.com/PoowadolDev/Ecommerce.git/domain/entity"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

func main() {
	app := fiber.New()

	app.Use(checkMiddleware)

	app.Use(cors.New(cors.Config{
		AllowOrigins:     "http://192.168.1.40:3000, http://0.0.0.0:8888/",
		AllowMethods:     "GET,POST,HEAD,PUT,DELETE,PATCH",
		AllowHeaders:     "Origin, Content-Type, Accept",
		AllowCredentials: true,
	}))

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

	Setup(app, database)

	app.Listen(":8888")
}

func checkMiddleware(c *fiber.Ctx) error {
	start := time.Now()

	fmt.Printf(
		"URL = %s, Method = %s, Time = %s\n",
		c.OriginalURL(), c.Method(), start,
	)
	return c.Next()
}

// func Setup(app *fiber.App, database *gorm.DB) {
// 	app.Get("/auth", api.CheckAuth)

// 	app.Get("/", func(c *fiber.Ctx) error {

// 		return c.SendString("Hello, World!")
// 	})

// 	userRepo := db.NewGormUserRepository(database)
// 	userService := service.NewUserService(userRepo)
// 	userHandler := api.NewUserHandler(userService)

// 	app.Post("/register", userHandler.CreateUser)
// 	app.Post("/login", LoginUser)
// }

func LoginUser(c *fiber.Ctx) error {
	// var user entity.User

	// if err := c.BodyParser(&user); err != nil {
	// 	return c.SendStatus(fiber.StatusBadRequest)
	// }

	// token, err := h.userService.LoginUser(user)

	// if err != nil {
	// 	return c.SendStatus(fiber.StatusUnauthorized)
	// }
	fmt.Println("Login Success")

	token := "1234"

	cookie := fiber.Cookie{
		Name:     "jwt_token",
		Value:    token,
		Expires:  time.Now().Add(time.Hour * 24),
		HTTPOnly: true,
		Domain:   "192.168.1.40",
		SameSite: "Lax",
	}

	c.Cookie(&cookie)

	fmt.Println(c.Cookies("jwt_token"))

	return c.JSON(fiber.Map{
		"message": "Login Success",
		"token":   token,
	})
}
