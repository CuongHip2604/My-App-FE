import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Task } from './todo-app.model';
const LOAD_TASKS = '[Task Component] Load Tasks';
const LOAD_TASKS_SUCCESS = '[Task Effect] Load Tasks Success';
const LOAD_TASKS_ERROR = '[Task Effect] Load Tasks Error';

const LOAD_TASK = '[Task Component] Load Task Component';
const LOAD_TASK_SUCCESS = '[Task Effect] Load Task Success';
const LOAD_TASK_ERROR = '[Task Effect] Load Task Error';

const ADD_TASK = '[Task Component] Add Task Component';
const ADD_TASK_SUCCESS = '[Task Effect] Add Task Success';
const ADD_TASK_ERROR = '[Task Effect] Add Task Error';

const UPDATE_TASK = '[Task Component] Update Task Component';
const DELETE_TASK = '[Task Component] Delete Task Component';
const DELETE_TASK_SUCCESS = '[Task Component] Delete Task Effect';
const DELETE_TASK_ERROR = '[Task Component] Delete Task Effect';


export const loadTasks = createAction(
  LOAD_TASKS
);
export const loadTasksSuccess = createAction(
  LOAD_TASKS_SUCCESS,
  props<{ tasks: Task[] }>()
);
export const loadTasksError = createAction(
  LOAD_TASKS_ERROR,
  props<{ error: any }>()
);

export const loadTask = createAction(
  LOAD_TASK,
  props<{ id: number }>()
);
export const loadTaskSuccess = createAction(
  LOAD_TASK_SUCCESS,
  props<{ taskSelected: Task }>()
);
export const loadTaskError = createAction(
  LOAD_TASK_ERROR,
  props<{ error: any }>()
);

export const addTask = createAction(
  ADD_TASK,
  props<{ task: Task }>()
);
export const addTaskSuccess = createAction(
  ADD_TASK_SUCCESS,
  props<{ task: Task }>()
);
export const addTaskError = createAction(
  ADD_TASK_ERROR,
  props<{ error: any }>()
);


export const updateTask = createAction(
  UPDATE_TASK,
  props<{ task: Update<Task> }>()
);


export const deleteTask = createAction(
  DELETE_TASK,
  props<{ id: number }>()
);
export const deleteTaskSuccess = createAction(
  DELETE_TASK_SUCCESS,
  props<{ id: number }>()
);
export const deleteTaskError = createAction(
  DELETE_TASK_ERROR,
  props<{ error: any }>()
);


