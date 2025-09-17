package com.example.taskmanagement.service;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import io.jsonwebtoken.Claims;

@Service
public class JWTService {
    private String secretKey="";
    @PostConstruct
    public void init() {
        try{
            KeyGenerator keyGen= KeyGenerator.getInstance("HmacSHA256");
            SecretKey sk=keyGen.generateKey();
            this.secretKey= Base64.getEncoder().encodeToString(sk.getEncoded());

        } catch(NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
    }

    public String generateToken(String username) {
        Map<String,Object> claims=new HashMap();
        return ((JwtBuilder)((JwtBuilder)((JwtBuilder) Jwts.builder().setClaims(claims).setSubject(username)).setIssuedAt(new Date(System.currentTimeMillis()))).setExpiration(new Date(System.currentTimeMillis()+36000000L))).signWith(this.getKey()).compact();
    }

    private SecretKey getKey() {
        byte[] KeyBytes=(byte[]) Decoders.BASE64.decode(this.secretKey);
        return Keys.hmacShaKeyFor(KeyBytes);
    }

    public String extractUserName(String token) {
        return (String)this.extractClaim(token,Claims::getSubject);
    }

    private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        Claims claims=this.extractAllClaims(token);
        return (T)claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return (Claims)Jwts.parser().verifyWith(this.getKey()).build().parseSignedClaims(token).getPayload();
    }

    public boolean validateToken(String token, UserDetails userDetails) {
        String userName=this.extractUserName(token);
        return userName.equals(userDetails.getUsername()) && !this.isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return this.extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token){
        return (Date)this.extractClaim(token,Claims::getExpiration);
    }
}
