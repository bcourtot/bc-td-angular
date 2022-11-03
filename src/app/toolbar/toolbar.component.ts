import { Component, OnInit } from '@angular/core';
import { KanbanService } from '../service/kanban.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: [ './toolbar.component.scss' ]
})
export class ToolbarComponent implements OnInit
{
  newColumnName: string = '';

  constructor(private kanbanService: KanbanService) { }

  ngOnInit(): void
  {
  }

  addColumn()
  {
    this.kanbanService.addColumn(this.newColumnName);
  }

}
