import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo.model';
import { PhotosService } from '../photos.service';
import {
  faChevronLeft,
  faChevronRight,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
const ITEMS_PER_PAGE = 10;
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
  faSearch = faSearch;
  currentPage = 1;
  fromNumber!: number;
  toNumber!: number;
  totalCount!: number;
  searchText: string = '';
  constructor(private photosService: PhotosService) {}

  ngOnInit() {
    this.photosService.Photos$.subscribe((photos) => {
      this.photosList = photos;
      this.totalCount = this.photosList.length;
      this.currentPage = 1;
      this.showTable();
    });
  }
  switchItems(isToPrevPage: boolean) {
    if (isToPrevPage && this.currentPage == 1) return;
    if (
      this.currentPage ==
      (this.totalCount) /
        Math.min(this.totalCount, ITEMS_PER_PAGE)
    )
      return;
    isToPrevPage ? this.currentPage-- : this.currentPage++;

    this.showTable();
  }

  showTable() {
    this.fromNumber = this.currentPage * ITEMS_PER_PAGE - ITEMS_PER_PAGE;
    this.toNumber =
      this.currentPage * Math.min(this.totalCount, ITEMS_PER_PAGE);

    this.photosToDisplay = this.photosList.slice(
      this.fromNumber,
      this.toNumber
    );
  }
  search() {
    this.photosService.searchByIdOrTitle(this.searchText);
  }
}
