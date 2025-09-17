package com.example.taskmanagement.model;

import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Repository;

import java.util.Date;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Project {

    @Id
    String id;
    String name;
    String priority;
    Date startDate;
    Date dueDate;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }
}
