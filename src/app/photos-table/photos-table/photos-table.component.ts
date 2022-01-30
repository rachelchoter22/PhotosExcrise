import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo.model';
import { PhotosService } from '../photos.service';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'photos-table',
  templateUrl: './photos-table.component.html',
  styleUrls: ['./photos-table.component.scss'],
})
export class PhotosTableComponent implements OnInit {
  photosList!: Photo[];
  photosToDisplay!: Photo[];
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  currentPage = 1;
  fromNumber!: number;
  toNumber!: number;
  totalCount!: number;
  constructor(private photosService: PhotosService) {}

  ngOnInit() {
    this.photosService.Photos$.subscribe((photos) => {
      this.photosList = photos;
      this.totalCount = this.photosList.length - 1;
      this.showTable();
    });
  }
  switchItems(isToPrevPage: boolean) {
    if (isToPrevPage && this.currentPage > 1) {
      this.currentPage -= 1;
      this.showTable();
    } else {
      this.currentPage += 1;
      this.showTable();
    }
  }

  showTable() {

    this.fromNumber = this.currentPage * 10;
    this.toNumber = this.currentPage * 10 + 10;
    
    if (this.currentPage < this.photosList.length / 10 + 1)
      this.photosToDisplay = this.photosList.slice(
        this.fromNumber,
        this.toNumber
      );

 
  }
}
