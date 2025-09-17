package com.example.taskmanagement.repo;

import com.example.taskmanagement.model.User;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends MongoRepository<User,String> {
    User findByUserName(String userName);
}
