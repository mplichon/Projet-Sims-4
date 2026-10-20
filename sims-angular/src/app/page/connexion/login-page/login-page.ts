import { Component, computed, inject, OnInit, Signal, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { LoginFormGroup } from '../../../models/forms/login-form';
import { LoginPageService } from '../services/login-page-service';
import { ButtonModule } from 'primeng/button';
import { TitreSection } from '../../../component/titre-section/titre-section';
import { Section } from '../../../component/section/section';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { LoginEventService } from '../../../services/application/login-event-service';

@Component({
  selector: 'sims-login-page',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    TitreSection,
    Section,
    CardModule,
    ImageModule,
    RouterLink,
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage implements OnInit {
  errorMessage = signal<string>('');
  isLoading = signal<boolean>(false);
  isShown = signal<boolean>(false);

  showButtonIcon: Signal<string> = computed(() =>
    this.isShown() ? 'pi pi-eye-slash' : 'pi pi-eye',
  );
  showButtonLabel: Signal<string> = computed(() => (this.isShown() ? 'Masquer' : 'Afficher'));
  passwordInputType: Signal<string> = computed(() => (this.isShown() ? 'text' : 'password'));

  formGroup!: LoginFormGroup;

  private readonly loginPageService = inject(LoginPageService);
  private readonly loginEventService = inject(LoginEventService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.loginPageService.removeToken();
    this.formGroup = this.loginPageService.buildFormGroup();
  }

  changeIsShownValue(): void {
    this.isShown.update((val) => !val);
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
        this.loginEventService.triggerLoginAction();
        this.router.navigateByUrl(destination);
      },
      error: () => {
        this.isLoading.set(false);
        this.errorMessage.set('Identifiants incorrects ou serveur indisponible.');
      },
    });
  }
}
