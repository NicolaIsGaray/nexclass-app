import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private router = inject(Router);

  testAlumno = {
    name: 'José Sanchez',
    role: 'student',
    dni: '49582811',
    password: 'jose123',
  };

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

    if (dni != this.testAlumno.dni) {
      this.showError('dniNotFound');
      this.hideError('dniFormat');
      this.hideError('dniLength');
      return;
    }

    if (password != this.testAlumno.password) {
      this.showError('wrongPassword');
      return;
    }

    alert("Inicio de sesión exitoso.")

    this.router.navigate(['/home']);
  }
}
