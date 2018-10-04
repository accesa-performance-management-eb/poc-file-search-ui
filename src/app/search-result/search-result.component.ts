import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {File} from '../model/File';
import {FileSearchService} from '../service/file-search.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  fileList: File[];
  fileFilter: File = new File();
  @Output() search: EventEmitter<any> = new EventEmitter();

  constructor(private fileSearchService: FileSearchService) {

  }

  ngOnInit() {

  }

  doSearch($event) {
    this.fileFilter = $event;
    this.fileSearchService.findFiles(this.fileFilter).subscribe(files => this.fileList = files.files);
  }

  onItemClick(file: File) {
    this.fileFilter.parentDirectory = file.parentDirectory + '\\' + file.fileName;
    this.doSearch(this.fileFilter);
  }

}
