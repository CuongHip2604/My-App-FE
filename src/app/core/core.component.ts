import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NzModalService } from 'ng-zorro-antd/modal';
import { environment } from 'src/environments/environment';
import { logout } from '../shared/auth/auth.actions';
import { AuthState } from '../shared/auth/auth.reducer';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  isCollapsed = false;
  constructor(private router: Router, private modal: NzModalService, private store: Store<AuthState>) { }

  ngOnInit(): void {
  }

  logout() {
    this.store.dispatch(new logout({ authToken: null }));
  }

  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Are you sure logout?',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => this.logout(),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }
}
