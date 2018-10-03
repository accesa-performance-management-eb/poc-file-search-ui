import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {File} from '../model/File';
import {HttpClient} from '@angular/common/http';
import {SearchResult} from '../model/SearchResult';

@Injectable({
  providedIn: 'root'
})
export class FileSearchService {

  constructor(private httpClient: HttpClient) {
  }

  findFiles(fileFilter: File): Observable<SearchResult> {

    const url = 'http://localhost:8080/api/rest/v1/file/search?pageSize=100&pageNumber=1'
      + '&fileName=' + fileFilter.fileName
      + '&parentDirectory=' + fileFilter.parentDirectory;

    return this.httpClient.get<SearchResult>(url);

  }
}
