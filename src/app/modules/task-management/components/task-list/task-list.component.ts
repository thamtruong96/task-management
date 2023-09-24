import { Component, OnInit, ViewChild } from '@angular/core';
import { Router  } from "@angular/router";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import {TaskService} from "../../services/task.service";
import {User} from "../../../../backend.service";
import {MatDialog} from "@angular/material/dialog";
import {AssignUserModalComponent} from "../assign-user-modal/assign-user-modal.component";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  users;
  userIdToNameMap = {}
  tasks;
  displayedColumns: string[] = [ 'id', 'description', 'assignee', 'status', 'actions'];

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor 
  (
    private router : Router,
    private service: TaskService,
    private dialog: MatDialog
  ) { }

  goToAddPage()
  {
    this.router.navigate(['/TaskManagement/AddTask']);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  goToEditPage(taskId : number){
    const url = "TaskManagement/EditTask/" + taskId;
    this.router.navigate([url]);
  }

  assignTask(taskId : number){
    const dialogRef = this.dialog.open(AssignUserModalComponent, {
      width: '500px',
      data: this.users
    });

    dialogRef.afterClosed().subscribe(user_id => {
      if (user_id) {
        this.service.assignTask(user_id, taskId, undefined, undefined)
      }
    });
    
  }

  closeTask(taskId : string){
    this.service.closeTask(taskId,undefined, undefined)
  }

  refreshTasks() {
    this.service.getDataList();
  }

  getTasks()
  {
    this.service.getCurrentTableList$().subscribe(
      (res) => {
        this.tasks = res;
        this.dataSource = new MatTableDataSource(this.tasks);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (err) => {
        // Handle error
        console.error(err);
      }
  );
  }

  ngOnInit() 
  {
    this.service.getUserList$().subscribe(res => {
      this.users = res;
      res.forEach((user: User) => {
        this.userIdToNameMap[user.id] = user.name;
      });
    });
    this.getTasks();
  }
  getUserName(user_id) {
    return this.userIdToNameMap[user_id] ? this.userIdToNameMap[user_id]: user_id;
  }
}
