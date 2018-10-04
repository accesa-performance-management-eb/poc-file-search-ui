import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {File} from '../model/File';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent implements OnInit {

  fileFilter: File = new File();
  @Output() searchFiltersSubmit: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  doSearch() {
    this.searchFiltersSubmit.emit(this.fileFilter);
  }

}
