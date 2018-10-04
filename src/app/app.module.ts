import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FileSizePipePipe } from './pipe/file-size-pipe.pipe';
import { SearchFiltersComponent } from './search-filters/search-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    FileSizePipePipe,
    SearchFiltersComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
