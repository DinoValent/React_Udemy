package com.dino.backend.usersapp.backendusersapp.services;

import java.util.List;
import java.util.Optional;

import com.dino.backend.usersapp.backendusersapp.models.entities.User;

public interface UserService {
    
    List<User> findAll();

    Optional<User> findById(Long id);

    User save(User user);

    Optional<User> update(User user, Long id);

    void remove(Long id);
}
