package com.example.taskmanagement.controller;

import com.example.taskmanagement.model.Project;
import com.example.taskmanagement.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin

@RestController
public class ProjectController {

    @Autowired
    ProjectService service;
    @PostMapping
    public Project assignProject(@RequestBody Project project)
    {
        return service.assignProject(project);
    }

}
