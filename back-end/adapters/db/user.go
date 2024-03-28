package db

import (
	"gitlab.com/PoowadolDev/Ecommerce.git/domain/entity"
	"gitlab.com/PoowadolDev/Ecommerce.git/domain/repository"
	"gorm.io/gorm"
)

type GormUserRepo struct {
	db *gorm.DB
}

func NewGormUserRepository(db *gorm.DB) repository.UserRepo {
	return &GormUserRepo{db: db}
}

func (g *GormUserRepo) Save(user entity.User) error {
	if result := g.db.Create(&user); result.Error != nil {
		return result.Error
	}
	return nil
}

func (g *GormUserRepo) GetByEmail(user entity.User) (entity.User, error) {
	var result entity.User
	if err := g.db.Where("email = ?", user.Email).First(&result).Error; err != nil {
		return entity.User{}, err
	}
	return result, nil
}
