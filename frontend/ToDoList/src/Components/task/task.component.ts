import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TaskServiceService } from 'src/Services/task-service.service';
import {Task} from 'src/Models/TaskModel'
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
TasksList:any=[
  {TaskID: 1, TaskDescriptiion: "Do Full-Stack Task" ,IsDone:false ,DueDate:"17 Aug 2023"} ,
  {TaskID: 2, TaskDescriptiion: "Finish Assigments" ,IsDone:false ,DueDate:"15 Aug 2023"} ,
  {TaskID: 3, TaskDescriptiion: "Group Books together" ,IsDone:false ,DueDate:"20 Aug 2023"} ,
]
tasks: Task[] | undefined;
  Checked: boolean = false;
  onChange() {
      this.Checked = !this.Checked;
    console.log(this.Checked);
    
  }
  // getTasks() {
  //   this.TaskServiceService.getTasks().subscribe(tasks => {
  //   this.tasks = tasks;
  //   });
  //   }
    
  //   markAsCompleted(task: Task) {
  //   task.isDone = true;
  //   this.TaskServiceService.updateTask(task).subscribe();
  //   }
}
