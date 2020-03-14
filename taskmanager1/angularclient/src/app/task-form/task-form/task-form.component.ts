import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../service/task.service';
import { Task } from '../model/Task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

    user: User;

    constructor(
      private route: ActivatedRoute,
        private router: Router,
          private taskService: TaskService) {
      this.task = new Task();
    }

    onSubmit() {
      this.taskService.save(this.task).subscribe(result => this.gotoTaskList());
    }

    gotoUserList() {
      this.router.navigate(['/tasks']);
    }

}
