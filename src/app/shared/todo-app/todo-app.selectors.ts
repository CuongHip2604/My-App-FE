import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAll, todoAppsFeatureKey, TodoAppState } from './todo-app.reducer';

const TodoAppSelector = createFeatureSelector(todoAppsFeatureKey);
export const TasksSelected = createSelector(TodoAppSelector, selectAll);
export const TaskSelected = createSelector(TodoAppSelector, (state: TodoAppState) => state.taskSelected);
