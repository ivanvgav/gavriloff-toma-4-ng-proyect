import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  course: string;
  position: number;
  year: number;
  availability: boolean;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, course: 'Bioethics', year: 1, availability: true },
  { position: 2, course: 'Microbiology', year: 4, availability: false },
  { position: 3, course: 'Pedagogy 101', year: 1, availability: false },
  {
    position: 4,
    course: 'Institutional education',
    year: 2,
    availability: true,
  },
  { position: 5, course: 'Anatomy', year: 1, availability: true },
  { position: 6, course: 'Learning Methods', year: 1, availability: true },
  {
    position: 7,
    course: 'Psychology of perception',
    year: 2,
    availability: true,
  },
  {
    position: 8,
    course: 'Philosophy of science',
    year: 2,
    availability: false,
  },
  { position: 9, course: 'Final practice', year: 4, availability: false },
  { position: 10, course: 'Animal biology', year: 2, availability: true },
];

/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-courses',
  styleUrls: ['courses.component.scss'],
  templateUrl: 'courses.component.html',
})
export class CoursesComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'course', 'year', 'availability'];

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
