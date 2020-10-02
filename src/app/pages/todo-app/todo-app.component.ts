import { TasksSelected } from './../../shared/todo-app/todo-app.selectors';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTask, deleteTask, loadTask, loadTasks, updateTask } from 'src/app/shared/todo-app/todo-app.actions';
import { Task } from 'src/app/shared/todo-app/todo-app.model';
import { TodoAppState } from '../../shared/todo-app/todo-app.reducer';
import { Update } from '@ngrx/entity';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {
  isChecked: false;
  inputTask = '';
  isOpen = true;
  taskSelected: Task;
  tasks$: Observable<Task[]>;
  isVisible = false;
  constructor( private store: Store<TodoAppState>, private modal: NzModalService ) { }

  ngOnInit() {
    this.store.dispatch(loadTasks());
    this.tasks$ = this.store.pipe(select(TasksSelected));
  }

  edit(task) {
    this.isOpen = !this.isOpen;
    this.taskSelected = task;
    this.inputTask = task.taskName;
    this.store.dispatch(loadTask({ id: task.id }));
  }

  addTask() {
    const data: Task = {
      taskName: this.inputTask,
      isActive: false
    };
    this.store.dispatch(addTask({ task: data }));
    this.inputTask = '';
  }

  updateTask() {
    const update: Task = {
      isActive: false,
      taskName: this.inputTask
    };
    const data: Update<Task> = {
      id: this.taskSelected.id,
      changes: update
    };
    this.store.dispatch(updateTask({ task: data }));
    this.inputTask = '';
    this.isOpen = true;
  }

  deleteTask(id: number) {
    this.store.dispatch(deleteTask({ id }));
  }
  handleChange(task) {
    const update: Task = {
      isActive: !task.isActive,
      taskName: task.taskName
    };
    const data: Update<Task> = {
      id: task.id,
      changes: update
    };
    this.store.dispatch(updateTask({ task: data }));
  }

  showDeleteConfirm(task): void {
    this.modal.confirm({
      nzTitle: 'Are you sure delete this task?',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => this.deleteTask(task.id),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }


}
