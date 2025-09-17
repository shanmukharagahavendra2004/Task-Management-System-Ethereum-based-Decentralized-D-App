package com.example.taskmanagement.controller;

import com.example.taskmanagement.model.User;
import com.example.taskmanagement.model.UserLogin;
import com.example.taskmanagement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class UserController {

    @Autowired
    UserService service;
    @PostMapping("/register")
    public User signIn(@RequestBody User user)
    {
        System.out.println("hello world");
        service.signin(user);
        return user;

    }

    @PostMapping("/login")
    public String login(@RequestBody UserLogin user)
    {

        return this.service.verify(user);
    }

}
