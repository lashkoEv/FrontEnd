import { TableService } from './../table.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  constructor(private tableService: TableService) {}

  addRow() {
    this.tableService.addRow();
  }

  addColumn() {
    this.tableService.addColumn();
  }

  getTable() {
    return this.tableService.getTable();
  }
}
