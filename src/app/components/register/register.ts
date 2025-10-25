import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  private router = inject(Router);

showError(error: string) {
    const messageP = document.getElementById(error) as HTMLElement;
    messageP.style.display = 'block';
  }

  hideError(error: string) {
    const messageP = document.getElementById(error) as HTMLElement;
    messageP.style.display = 'none';
  }

  validateDNI(dni: string) {
    const re = /^\d{7,8}$/;
    return re.test(dni);
  }

  getFormData(e: Event) {
    e.preventDefault();

    const dniInput = document.getElementById('dni') as HTMLInputElement;
    const dni = dniInput.value;

    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const password = passwordInput.value;

    if (dni.length < 8) {
      this.showError('dniLength');
      this.hideError('dniFormat');
      this.hideError('dniNotFound');
      return;
    }

    if (!this.validateDNI(dni)) {
      this.showError('dniFormat');
      this.hideError('dniNotFound');
      this.hideError('dniLength');
      return;
    }

    alert("Registro de usuario exitoso.")

    this.router.navigate(['/home']);
  }
}
