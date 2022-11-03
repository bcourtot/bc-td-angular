import { Injectable } from '@angular/core';
import { Column } from '../column';

@Injectable({
  providedIn: 'root'
})
export class KanbanService
{

  columns: Column[] = [
    {
      title: 'test',
      tasks: [ {
        title: 'test2'
      } ]
    }
  ]

  constructor() { }

  getColumns()
  {
    return this.columns;
  }

  addColumn(title: string)
  {
    this.columns.push({ title, tasks: [] })
  }

  addTask(i: number, title: string)
  {
    this.columns[ i ].tasks.push({ title })
  }


}
