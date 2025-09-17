//SPDX-License_Identifier: MIT
pragma solidity ^0.8.20;

contract TaskManagement{
    struct Task{
        uint id;
        string name;
        address assignedTo;
        bool completed;
    }

    uint public taskCount;
    mapping(uint => Task) public tasks;

    event TaskCreated(uint id,string name,address assignedTo);
    event TaskCompleted(uint id,bool completed);

    function createTask(string memory _name,address _assignedTo) public {
        taskCount++;
        tasks[taskCount]=Task(taskCount, _name, _assignedTo, false);
        emit TaskCreated(taskCount,_name,_assignedTo);
    }

    function completeTask(uint _id) public {
        Task storage task=tasks[_id];
        require(msg.sender==task.assignedTo,"Not authorized");
        task.completed=true;
        emit TaskCompleted(_id,true);

    }
}