package com.example.taskmanagement.repo;

import com.example.taskmanagement.model.Project;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProjectRepo extends MongoRepository<Project,String> {
}
