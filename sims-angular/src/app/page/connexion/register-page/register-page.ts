import { Component, computed, inject, OnInit, Signal, signal } from '@angular/core';
import { TitreSection } from '../../../component/titre-section/titre-section';
import { Section } from '../../../component/section/section';
import { CardModule } from 'primeng/card';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { RegisterFormGroup } from '../../../models/forms/register-form';
import { RegisterPageService } from '../services/register-page-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'sims-register-page',
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
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage implements OnInit {
  errorMessage = signal<string>('');
  successMessage = signal<string>('');
  isLoading = signal<boolean>(false);
  isPasswordShown = signal<boolean>(false);
  isConfirmationPasswordShown = signal<boolean>(false);

  showPasswordButtonIcon: Signal<string> = computed(() =>
    this.isPasswordShown() ? 'pi pi-eye-slash' : 'pi pi-eye',
  );
  showPasswordButtonLabel: Signal<string> = computed(() =>
    this.isPasswordShown() ? 'Masquer' : 'Afficher',
  );
  passwordInputType: Signal<string> = computed(() =>
    this.isPasswordShown() ? 'text' : 'password',
  );
  showConfirmationPasswordButtonIcon: Signal<string> = computed(() =>
    this.isConfirmationPasswordShown() ? 'pi pi-eye-slash' : 'pi pi-eye',
  );
  showConfirmationPasswordButtonLabel: Signal<string> = computed(() =>
    this.isConfirmationPasswordShown() ? 'Masquer' : 'Afficher',
  );
  confirmationPasswordInputType: Signal<string> = computed(() =>
    this.isConfirmationPasswordShown() ? 'text' : 'password',
  );

  formGroup!: RegisterFormGroup;

  private readonly registerPageService = inject(RegisterPageService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.formGroup = this.registerPageService.buildFormGroup();
  }

  get usernameControl(): FormControl<string | null> {
    return this.formGroup.controls.username;
  }

  get passwordControl(): FormControl<string | null> {
    return this.formGroup.controls.password;
  }

  get confirmationPasswordControl(): FormControl<string | null> {
    return this.formGroup.controls.confirmationPassword;
  }

  changeIsPasswordShownValue(): void {
    this.isPasswordShown.update((val) => !val);
  }

  changeIsConfirmationPasswordShownValue(): void {
    this.isConfirmationPasswordShown.update((val) => !val);
  }

  onRegister(): void {
    this.isLoading.set(true);

    this.registerPageService.register(this.formGroup).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.successMessage.set('Compte créé avec succès ! Redirection vers la connexion...');

        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.isLoading.set(false);
        this.errorMessage.set(
          error.error?.message ??
            'Impossible de créer le compte. Vérifie les informations saisies.',
        );
      },
    });
  }
}
