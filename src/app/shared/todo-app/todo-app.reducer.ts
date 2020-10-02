import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Task } from './todo-app.model';
import * as TodoAppActions from './todo-app.actions';

export const todoAppsFeatureKey = 'todoApps';

export interface TodoAppState extends EntityState<Task> {
  // additional entities state properties
  error: any;
  taskSelected: Task;
}

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialState: TodoAppState = adapter.getInitialState({
  // additional entity state properties
  error: null,
  taskSelected: null
});


export const taskReducer = createReducer(
  initialState,
  on(TodoAppActions.addTaskSuccess,
    (state, action) => adapter.addOne(action.task, state)
  ),
  on(TodoAppActions.addTaskError,
    (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }
  ),

  on(TodoAppActions.loadTaskSuccess,
    (state, action) => {
      return {
        ...state,
        taskSelected: action.taskSelected
      };
    }
  ),
  on(TodoAppActions.loadTasksError,
    (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }
  ),

  on(TodoAppActions.updateTask,
    (state, action) => adapter.updateOne(action.task, state)
  ),
  on(TodoAppActions.loadTasksSuccess,
    (state, action) => adapter.setAll(action.tasks, state)
  ),
  on(TodoAppActions.loadTasksError,
    (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }
  ),

  on(TodoAppActions.deleteTaskSuccess, (state, action) => adapter.removeOne(action.id, state)),
  on(TodoAppActions.deleteTaskError,
    (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }
  ),
);

export function reducer(state: TodoAppState | undefined, action: Action) {
  return taskReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
