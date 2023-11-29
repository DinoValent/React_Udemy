package com.dino.backend.usersapp.backendusersapp.repositories;

import org.springframework.data.repository.CrudRepository;

import com.dino.backend.usersapp.backendusersapp.models.entities.User;

public interface UserRepository extends CrudRepository<User, Long>{
    
}
