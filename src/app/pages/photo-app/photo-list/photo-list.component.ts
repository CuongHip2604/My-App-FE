import { photos } from './../../../shared/photo-app/photo-app.selectors';

import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { PhotoState } from 'src/app/shared/photo-app/photo-app.reducer';
import { loadPhotos } from 'src/app/shared/photo-app/photo-app.actions';
import { PhotoApp } from 'src/app/shared/photo-app/photo-app.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos$: Observable<PhotoApp[]>;
  constructor(private store: Store<PhotoState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadPhotos());
    this.photos$ = this.store.pipe(select(photos));
  }

}
