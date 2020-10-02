import { TodoAppState } from './todo-app.reducer';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as taskActions from './todo-app.actions';

import { map, mergeMap, catchError, concatMap, tap } from 'rxjs/operators';
import { TodoAppService } from 'src/app/pages/todo-app/todo-app.service';
import { of } from 'rxjs';
import { TaskSelected } from './todo-app.selectors';
import { Store } from '@ngrx/store';


@Injectable()
export class TodoAppEffects {

  loadTasks$ = createEffect(() => this.actions$.pipe(
    ofType(taskActions.loadTasks),
    mergeMap(() => this.todoAppService.getTasks$().pipe(
      map((rs: any) => {
        const tasks = rs.data;
        tasks.sort((a: any, b: any) => {
          return new Date(b.created).getTime() - new Date(a.created).getTime();
        });
        return taskActions.loadTasksSuccess({ tasks });
      }),
      catchError(error => of(taskActions.loadTasksError({error}))
    ))
  )));

  loadTask$ = createEffect(() => this.actions$.pipe(
    ofType(taskActions.loadTask),
    mergeMap(action => this.todoAppService.getTaskById$(action.id).pipe(
      map((rs: any) => taskActions.loadTaskSuccess({ taskSelected: rs.data })),
      catchError(error => of(taskActions.loadTasksError({error}))
    ))
  )));


  addTask$ = createEffect(() => this.actions$.pipe(
    ofType(taskActions.addTask),
    mergeMap((action) => this.todoAppService.addNew$(action.task).pipe(
      map((rs: any) => {
        this.store.dispatch(taskActions.loadTasks());
        return taskActions.addTaskSuccess({ task: rs.data });
      }),
      catchError(error => of(taskActions.addTaskError({error}))
    ))
  )));

  updateTask$ = createEffect(() => this.actions$.pipe(
    ofType(taskActions.updateTask),
    concatMap((action) => this.todoAppService.updateTask$(action.task.id, action.task.changes)),
  ), {dispatch: false});

  deleteTask$ = createEffect(() => this.actions$.pipe(
    ofType(taskActions.deleteTask),
    mergeMap((action) => this.todoAppService.deleteTask$(action.id).pipe(
      map(() => taskActions.deleteTaskSuccess({id: action.id})),
      catchError(error => of(taskActions.deleteTaskError({error})))
    ))
  ));

  constructor(private actions$: Actions, private todoAppService: TodoAppService, private store: Store<TodoAppState>) {}

}
