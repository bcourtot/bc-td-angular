import { Component, Input, OnInit } from '@angular/core';
import { KanbanService } from '../service/kanban.service';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: [ './task.component.scss' ]
})
export class TaskComponent implements OnInit
{
  @Input() task!: Task;
  @Input() taskIndex!: number;
  @Input() columnIndex!: number;


  constructor(private kanbanService: KanbanService) { }

  ngOnInit(): void
  {
  }

  deleteTask()
  {
    console.log(this.columnIndex, this.taskIndex);
    this.kanbanService.deleteTask(this.columnIndex, this.taskIndex);
  }

}
