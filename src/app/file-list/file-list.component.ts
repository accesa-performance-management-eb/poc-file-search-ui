import {Component, OnInit} from '@angular/core';
import {File} from '../model/File';
import {FileSearchService} from '../service/file-search.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {

  fileList: File[];
  fileFilter: File = new File();


  constructor(private fileSearchService: FileSearchService) {

  }

  ngOnInit() {


  }

  doSearch() {
    this.fileSearchService.findFiles(this.fileFilter).subscribe(files => this.fileList = files.files);
  }

  onItemClick(file: File) {
    this.fileFilter.parentDirectory = file.parentDirectory + '/' + file.fileName;
    this.doSearch();
  }
}
