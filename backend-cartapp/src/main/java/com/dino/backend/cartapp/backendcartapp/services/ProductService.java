package com.dino.backend.cartapp.backendcartapp.services;

import java.util.List;

import com.dino.backend.cartapp.backendcartapp.models.entities.Product;

public @interface ProductService {
    List<Product> findAll();
}
