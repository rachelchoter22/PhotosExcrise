import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosTableComponent } from './photos-table.component';

describe('PhotosTableComponent', () => {
  let component: PhotosTableComponent;
  let fixture: ComponentFixture<PhotosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
