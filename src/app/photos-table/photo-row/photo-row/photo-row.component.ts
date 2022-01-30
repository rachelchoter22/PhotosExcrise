import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../photo.model';
import { faPen , faTrashAlt , faCheck} from '@fortawesome/free-solid-svg-icons';
import { PhotosService } from '../../photos.service';

@Component({
  selector: 'photo-row',
  templateUrl: './photo-row.component.html',
  styleUrls: ['./photo-row.component.scss'],
})
export class PhotoRowComponent  {
  @Input()
  photo!: Photo;
  faPen = faPen; 
  faTrashAlt = faTrashAlt;
  faCheck = faCheck;
  newTitle!: string;
  isEditMode: boolean = false;
  constructor(private photosService: PhotosService) {}

  removePhoto() {
    this.photosService.removePhoto(this.photo);
  }
  editPhotoTitle() {
    this.isEditMode = true;
    this.newTitle = this.photo.title;
  }

  saveTitle() {
    let title = this.photosService.changePhotoTitle(this.photo, this.newTitle);
  }
  changeMode() {
    this.isEditMode = false;
  }
}
