import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FileListComponent } from './file-list/file-list.component';
import { FileSizePipePipe } from './pipe/file-size-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FileListComponent,
    FileSizePipePipe
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
