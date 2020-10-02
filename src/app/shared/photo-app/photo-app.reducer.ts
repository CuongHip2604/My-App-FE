import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { PhotoApp } from './photo-app.model';
import * as PhotoAppActions from './photo-app.actions';

export const photoAppsFeatureKey = 'photoApps';

export interface PhotoState extends EntityState<PhotoApp> {
  // additional entities state properties
  error: any;
}

export const adapter: EntityAdapter<PhotoApp> = createEntityAdapter<PhotoApp>();

export const initialState: PhotoState = adapter.getInitialState({
  // additional entity state properties
  error: null
});


export const reducer = createReducer(
  initialState,
  on(PhotoAppActions.addPhotoSuccess,
    (state, action) => adapter.addOne(action.photo, state)
  ),
  on(PhotoAppActions.addPhotoError,
    (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }
  ),
  on(PhotoAppActions.upsertPhotoApp,
    (state, action) => adapter.upsertOne(action.photoApp, state)
  ),
  on(PhotoAppActions.addPhotoApps,
    (state, action) => adapter.addMany(action.photoApps, state)
  ),
  on(PhotoAppActions.upsertPhotoApps,
    (state, action) => adapter.upsertMany(action.photoApps, state)
  ),
  on(PhotoAppActions.updatePhotoApp,
    (state, action) => adapter.updateOne(action.photoApp, state)
  ),
  on(PhotoAppActions.updatePhotoApps,
    (state, action) => adapter.updateMany(action.photoApps, state)
  ),
  on(PhotoAppActions.deletePhotoApp,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(PhotoAppActions.deletePhotoApps,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(PhotoAppActions.loadPhotosSuccess,
    (state, action) => adapter.setAll(action.photos, state)
  ),
  on(PhotoAppActions.loadPhotosError,
    (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }
  ),
  on(PhotoAppActions.clearPhotoApps,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
