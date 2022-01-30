import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotosTableComponent } from './photos-table/photos-table/photos-table.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoRowComponent } from './photos-table/photo-row/photo-row/photo-row.component';
import { PhotosService } from './photos-table/photos.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PhotosTableComponent,
    PhotoRowComponent      
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
