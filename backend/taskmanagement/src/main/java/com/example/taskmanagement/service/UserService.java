package com.example.taskmanagement.service;

import com.example.taskmanagement.model.User;
import com.example.taskmanagement.model.UserLogin;
import com.example.taskmanagement.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo repo;
    @Autowired
    AuthenticationManager authManager;
    @Autowired
    private JWTService jwtService;
    private BCryptPasswordEncoder encoder=new BCryptPasswordEncoder(12);

    public User signin(User user) {
        user.setPassword(this.encoder.encode(user.getPassword()));
        return (User)this.repo.save(user);
    }

    public String verify(UserLogin user) {
        Authentication authentication=this.authManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUserName(),user.getPassword()));
        return authentication.isAuthenticated() ? this.jwtService.generateToken(user.getUserName()): "fail";
    }

}
