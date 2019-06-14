import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PayloadService } from '../services/payload.services';
import { DataTableItem } from '../models/table.model';

@Component({
  selector: 'app-new-table',
  templateUrl: './new-table.component.html',
  styleUrls: ['./new-table.component.scss']
})
export class NewTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'cover', 'name'];
  dataSource: MatTableDataSource<DataTableItem>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private payloadService: PayloadService) {}

  ngAfterViewInit() {
    this.payloadService.getData().subscribe(payloadItems => {
      this.dataSource = new MatTableDataSource(payloadItems);
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = (
        data: DataTableItem,
        filter: string
      ) => {
        return data.attributes.content.toLowerCase().includes(filter);
      };
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource);
  }

  // applyFilter(filterValue: string) {
  //   const t = this.data.filter(d => {
  //     const match = d.attributes.content
  //       .toLowerCase()
  //       .includes(filterValue.trim().toLowerCase());
  //     if (match) {
  //       return d.attributes.content;
  //     }
  //   });
  // }
}
