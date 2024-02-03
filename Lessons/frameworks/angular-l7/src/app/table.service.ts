import { Injectable } from '@angular/core';

interface data {
  data: string;
}

@Injectable({
  providedIn: 'root',
})
export class TableService {
  private matrix = [];

  constructor() {
    this.matrix.push([{ data: '' }]);
  }

  addRow() {
    const newRow = [];

    for (let i = 0; i < this.matrix[0].length; i++) {
      newRow.push({ data: '' });
    }

    this.matrix.push(newRow);
  }

  addColumn() {
    for (const row of this.matrix) {
      row.push({ data: '' });
    }
  }

  getTable() {
    return this.matrix;
  }
}
