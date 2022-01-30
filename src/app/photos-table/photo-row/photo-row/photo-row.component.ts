import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../photo.model';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { PhotosService } from '../../photos.service';

@Component({
  selector: 'photo-row',
  templateUrl: './photo-row.component.html',
  styleUrls: ['./photo-row.component.scss'],
})
export class PhotoRowComponent implements OnInit {
  @Input()
  photo!: Photo;
  faPen = faPen;
  faTrashAlt = faTrashAlt;
  newTitle!: string;
  isEditMode: boolean = false;
  constructor(private photosService: PhotosService) {}

  ngOnInit(): void {}
  removePhoto() {
    this.photosService.removePhoto(this.photo);
  }
  editPhotoTitle() {
    this.isEditMode = true;
    this.newTitle = this.photo.title;
  }

  saveTitle() {
    this.isEditMode = false;
    let title = this.photosService.changePhotoTitle(this.photo, this.newTitle);
  }
}
