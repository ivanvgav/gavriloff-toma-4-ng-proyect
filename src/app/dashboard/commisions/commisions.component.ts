import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  subject: string;
  year: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Gavriloff, Ivan V.', subject: 'Philosophy', year: 2},
  {position: 2, name: 'García, Ana', subject: 'Biology', year: 1},
  {position: 3, name: 'López, José', subject: 'Biology', year: 3},
  {position: 4, name: 'Betanqur, Ingrid', subject: 'Education', year: 4},
  {position: 5, name: 'Boron, Atílio', subject: 'Philosophy', year: 1},
];
/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-commisions',
  styleUrls: ['commisions.component.scss'],
  templateUrl: 'commisions.component.html',
})
export class CommisionsComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'subject', 'year'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
