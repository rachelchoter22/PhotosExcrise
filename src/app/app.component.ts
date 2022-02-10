import { Component, Renderer2 } from '@angular/core';
import { PhotosService } from './photos-table/photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Photos';
  constructor(
    private renderer: Renderer2,
    private photosService: PhotosService
  ) {}

  ngOnInit() {
    // this.photosService.srcChanged$.subscribe((src) => {
    //   this.renderer.setStyle(document.body, 'background-image', `url(${src})`);
    // });
  }
}
