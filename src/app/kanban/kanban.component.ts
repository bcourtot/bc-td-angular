import { Component, OnInit } from '@angular/core';
import { KanbanService } from '../service/kanban.service';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: [ './kanban.component.scss' ]
})
export class KanbanComponent implements OnInit
{
  constructor(private kanbanService: KanbanService) { }

  ngOnInit(): void
  {
  }

  getColumns()
  {
    return this.kanbanService.getColumns();
  }

}
