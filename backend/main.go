package main

import (
	"cors-example/handlers"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.Use(cors.New(cors.Config{
		AllowOrigins: []string{
			"http://localhost:3000",
		},
	}))

	corsGroupRouter := router.Group("/cors")
	corsGroupRouter.GET("/hello", handlers.GetHello)
	router.Run(":1991")
}
