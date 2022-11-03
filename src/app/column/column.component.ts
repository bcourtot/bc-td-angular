import { Component, Input, OnInit } from '@angular/core';
import { Column } from '../column';
import { KanbanService } from '../service/kanban.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: [ './column.component.scss' ]
})
export class ColumnComponent implements OnInit
{
  @Input() column!: Column;
  @Input() columnIndex!: number;
  newTaskName: string = '';


  constructor(private kanbanService: KanbanService) { }

  ngOnInit(): void
  {
  }

  addTask()
  {
    this.kanbanService.addTask(this.columnIndex, this.newTaskName);
  }

}
