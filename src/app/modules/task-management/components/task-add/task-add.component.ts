import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Task, User} from '../../../../backend.service';
import {TaskService} from "../../services/task.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  public addTaskForm : FormGroup;
  public taskStatuses : string[];
  targetDateConfig : any = { min : new Date()};
  addingInProgress : boolean = false;
  isAddTask : boolean = true;
  userIdToNameMap = {};
  id;


  constructor
  (
    private fb : FormBuilder,
    private service: TaskService,
    private router : Router,
  )
  {
    this.addTaskForm = this.generateForm({description: ''});
  }

  handleSuccess() {
    this.router.navigate(['/TaskManagement/Task']);
  }
  
  addTask()
  {
    let taskToAdd = this.addTaskForm.value.description;
    this.addingInProgress = true;
    if (taskToAdd) {
      this.service.addTask(taskToAdd, this.handleSuccess(), undefined);
    }
  }

  updateTask()
  {
    let taskToAdd = this.addTaskForm.value.description;
    this.addingInProgress = true;
    if (taskToAdd) {
      this.service.editTask({id: this.id, description: taskToAdd}, this.handleSuccess(), undefined);
    }

  }

  generateForm(taskViewmodel) : FormGroup
  {
    let form = this.fb.group
    ({
      description : [taskViewmodel.description, Validators.required],
    });
    return form;
  }

  getTaskData(taskId) {
    this.service.getTaskById(taskId);

    this.service.getTaskById$().subscribe(res => {
      this.addTaskForm = this.generateForm(res);
    });
  }

  ngOnInit() 
  {
    const currentUrl = this.router.url
    const segments = currentUrl.split('/');
    let taskId = segments[segments.length - 1]
    if(!isNaN(parseInt(taskId))) {
      this.id = parseInt(taskId);
      this.isAddTask = false;
      this.service.getUserList$().subscribe(res => {
        res.forEach((user: User) => {
          this.userIdToNameMap[user.id] = user;
        });
      });
      this.getTaskData(taskId);
    }
    else
    {
      this.isAddTask = true;
      let model = {description: ''};
      this.addTaskForm = this.generateForm(model);
    }
  }

}
