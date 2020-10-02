import { createFeatureSelector, createSelector } from '@ngrx/store';
import { photoAppsFeatureKey, selectAll } from './photo-app.reducer';
const photoAppSelector = createFeatureSelector(photoAppsFeatureKey);
export const photos = createSelector(photoAppSelector, selectAll);
