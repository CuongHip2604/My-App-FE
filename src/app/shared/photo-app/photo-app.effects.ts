import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PhotoAppService } from 'src/app/pages/photo-app/photo-app.service';
import * as photoActions from './photo-app.actions';
import { of } from 'rxjs';
import { PhotoState } from './photo-app.reducer';
import { Store } from '@ngrx/store';
import { NavigationEnd, Router } from '@angular/router';



@Injectable()
export class PhotoAppEffects {

  loadPhotos$ = createEffect(() => this.actions$.pipe(
    ofType(photoActions.loadPhotos),
    mergeMap(() => this.photoService.getPhtos$().pipe(
      map((rs: any) => {
        const photos = rs.data;
        photos.sort((a: any, b: any) => {
          return new Date(b.created).getTime() - new Date(a.created).getTime();
        });
        return photoActions.loadPhotosSuccess({ photos });
      }),
    catchError(error => of(photoActions.loadPhotosError({error}))
    )),
  )));

  addPhoto$ = createEffect(() => this.actions$.pipe(
    ofType(photoActions.addPhoto),
    mergeMap((action) => this.photoService.addNew$(action.photo).pipe(
      map((rs: any) => {
        this.store.dispatch(photoActions.loadPhotos());
        this.router.navigate(['/photo-app'], { queryParams: { returnUrl: this.returnUrl } });
        return photoActions.addPhotoSuccess({ photo: rs.data });
      }),
      catchError(error => of(photoActions.addPhotoError({error}))
    ))
  )));


  private returnUrl: string;
  constructor(private actions$: Actions, private photoService: PhotoAppService, private store: Store<PhotoState>, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          this.returnUrl = event.url;
      }
    });
  }

}
