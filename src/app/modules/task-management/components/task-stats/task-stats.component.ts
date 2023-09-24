import { Component, OnInit, Input, DoCheck } from '@angular/core';
import {Task} from '../../../../backend.service';

@Component({
  selector: 'app-task-stats',
  templateUrl: './task-stats.component.html',
  styleUrls: ['./task-stats.component.css']
})
export class TaskStatsComponent implements OnInit, DoCheck {

  ngDoCheck(): void {
    this.getStats()
  }
  @Input()
  tasks : Task[]= [];
  closedTasksCount : number = 0;
  constructor() { }

  getStats()
  {
    this.closedTasksCount = 0
    this.tasks.forEach(task => {
      if (task.completed) {
        this.closedTasksCount += 1
      }
    })
  }


  ngOnInit() {
    this.getStats()
  }

}
