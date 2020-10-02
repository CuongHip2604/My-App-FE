import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { PhotoApp } from './photo-app.model';

const ADD_PHOTO = '[Photo Component] Add Photo Component';
const ADD_PHOTO_SUCCESS = '[Photo Effect] Add Photo Success';
const ADD_PHOTO_ERROR = '[Photo Effect] Add Photo Error';
const LOAD_PHOTOS = '[Photo Component] Load Photos';
const LOAD_PHOTOS_SUCCESS = '[Photo Effect] Load Photos Success';
const LOAD_PHOTOS_ERROR = '[Photo Effect] Load Photos Error';

export const loadPhotosSuccess = createAction(
  LOAD_PHOTOS_SUCCESS,
  props<{ photos: PhotoApp[] }>()
);
export const loadPhotosError = createAction(
  LOAD_PHOTOS_ERROR,
  props<{ error: any }>()
);

export const loadPhotos = createAction(
  LOAD_PHOTOS
);

export const addPhoto = createAction(
  ADD_PHOTO,
  props<{ photo: PhotoApp }>()
);
export const addPhotoSuccess = createAction(
  ADD_PHOTO_SUCCESS,
  props<{ photo: PhotoApp }>()
);
export const addPhotoError = createAction(
  ADD_PHOTO_ERROR,
  props<{ error: any }>()
);

export const upsertPhotoApp = createAction(
  '[PhotoApp/API] Upsert PhotoApp',
  props<{ photoApp: PhotoApp }>()
);

export const addPhotoApps = createAction(
  '[PhotoApp/API] Add PhotoApps',
  props<{ photoApps: PhotoApp[] }>()
);

export const upsertPhotoApps = createAction(
  '[PhotoApp/API] Upsert PhotoApps',
  props<{ photoApps: PhotoApp[] }>()
);

export const updatePhotoApp = createAction(
  '[PhotoApp/API] Update PhotoApp',
  props<{ photoApp: Update<PhotoApp> }>()
);

export const updatePhotoApps = createAction(
  '[PhotoApp/API] Update PhotoApps',
  props<{ photoApps: Update<PhotoApp>[] }>()
);

export const deletePhotoApp = createAction(
  '[PhotoApp/API] Delete PhotoApp',
  props<{ id: string }>()
);

export const deletePhotoApps = createAction(
  '[PhotoApp/API] Delete PhotoApps',
  props<{ ids: string[] }>()
);

export const clearPhotoApps = createAction(
  '[PhotoApp/API] Clear PhotoApps'
);
