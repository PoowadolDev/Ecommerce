package repository

import (
	"gitlab.com/PoowadolDev/Ecommerce.git/domain/entity"
)

type UserRepo interface {
	Save(user entity.User) error
}
