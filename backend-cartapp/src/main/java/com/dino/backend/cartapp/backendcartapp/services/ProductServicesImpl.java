package com.dino.backend.cartapp.backendcartapp.services;
import java.lang.annotation.Annotation;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dino.backend.cartapp.backendcartapp.models.entities.Product;
import com.dino.backend.cartapp.backendcartapp.repositories.ProductRepository;


@Service
public class ProductServicesImpl implements ProductService {

    @Autowired
    private ProductRepository repository;
    @Override
    @Transactional(readOnly = true)
    public List<Product> findAll() {
        // TODO Auto-generated method stub
        return (List<Product>)repository.findAll();
    }

    @Override
    public Class<? extends Annotation> annotationType() {
        // TODO Auto-generated method stub
        return null;
    }
    
}
