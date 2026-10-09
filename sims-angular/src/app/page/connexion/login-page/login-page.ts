import { Component, inject, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { LoginFormGroup } from '../../../models/forms/login-form';
import { LoginPageService } from '../services/login-page-service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'sims-login-page',
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage implements OnInit {
  errorMessage = signal<string>('');
  isLoading = signal<boolean>(false);

  formGroup!: LoginFormGroup;

  private readonly loginPageService = inject(LoginPageService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.formGroup = this.loginPageService.buildFormGroup();
  }

  onLogin(): void {
    this.isLoading.set(true);

    this.loginPageService.login(this.formGroup).subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');

        // N'autoriser qu'une URL de navigation locale.
        const destination =
          returnUrl?.startsWith('/') && !returnUrl.startsWith('//') ? returnUrl : '/';

        this.isLoading.set(false);
        this.router.navigateByUrl(destination);
      },
      error: () => {
        this.isLoading.set(false);
        this.errorMessage.set('Identifiants incorrects ou serveur indisponible.');
      },
    });
  }
}
