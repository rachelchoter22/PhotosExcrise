import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Photo } from './photo.model';
@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  photosList: Photo[] = [];
  Photos$: Subject<Photo[]> = new Subject();
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/photos')
      .subscribe((res) => {
        this.photosList = <Photo[]>res;
        this.Photos$.next(this.photosList);
      });
  }

  getPhotos(): Observable<Photo[]> {
    let url = 'https://jsonplaceholder.typicode.com/photos';
    return this.httpClient.get<Photo[]>(url);
  }

  removePhoto(photo: Photo) {
    let index = this.photosList.findIndex((x) => x.id == photo.id);

    this.photosList.splice(index, 1);
    this.Photos$.next(this.photosList);
  }
  changePhotoTitle(photo: Photo, newTitle: string) {
    let photoToChange = this.photosList.find((x) => x.id == photo.id);
    if (photoToChange) photo.title = newTitle;
  }
}
