import { Component, computed, effect, inject, Signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Router, RouterLink } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { PopoverModule } from 'primeng/popover';
import { LoginEventService } from '../../services/application/login-event-service';
import { HeaderTopBarService } from './service/header-top-bar-service';

@Component({
  selector: 'app-header-top-bar',
  imports: [AvatarModule, RouterLink, PopoverModule, DividerModule],
  templateUrl: './header-top-bar.html',
  styleUrl: './header-top-bar.css',
})
export class HeaderTopBar {
  currentUser = rxResource({
    stream: () => this.headerTopBarService.getCurrentUser(),
  });

  username: Signal<string> = computed(() => this.currentUser.value()?.username ?? '');

  private readonly headerTopBarService = inject(HeaderTopBarService);
  private readonly loginEventService = inject(LoginEventService);
  private readonly router = inject(Router);

  constructor() {
    effect(() => {
      this.loginEventService.loginAction();
      this._refresh();
    });
  }

  logout(): void {
    this.headerTopBarService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
        this.loginEventService.triggerLoginAction();
      },
      error: () => {
        this.router.navigate(['/login']);
        this.loginEventService.triggerLoginAction();
      },
    });
  }

  private _refresh(): void {
    this.currentUser.reload();
  }
}
