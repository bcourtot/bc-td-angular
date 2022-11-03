import { Injectable } from '@angular/core';
import { Column } from '../column';

@Injectable({
  providedIn: 'root'
})
export class KanbanService
{

  columns: Column[] = [];

  constructor() { }

  getColumns()
  {
    return this.columns;
  }

  addColumn(title: string)
  {
    this.columns.push({ title, tasks: [] })
  }

  deleteColumn(i: number)
  {
    this.columns.splice(i, 1);
  }

  addTask(i: number, title: string)
  {
    this.columns[ i ].tasks.push({ title })
  }

  deleteTask(i: number, j: number)
  {
    this.columns[ i ].tasks.splice(j, 1);
  }

}
