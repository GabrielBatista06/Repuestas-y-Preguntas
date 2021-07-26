import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loading = false;
  login: FormGroup;
  nombre_acceso = '';

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.login = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  log(): void {
    console.log(this.login);

    const usuario: Usuario = {
      nombreUsuario: this.login.value.usuario,

      password: this.login.value.password,
    };

    this.nombre_acceso = usuario.nombreUsuario;
    this.loading=true;
    setTimeout(() => {
      if (
        usuario.nombreUsuario === 'Gabriel' &&
        usuario.password === '123456'
      ) {
        this.login.reset();
        this.toastr.success('Acceso exitoso: ' + this.nombre_acceso, 'Well!');
        this.router.navigate(['/dashboard']);
      } else {
        this.toastr.error('Usuario o contraseña incorrectos', 'Error');
        this.login.reset();
      }
      this.loading=false;
    }, 3000);

    console.log(usuario);
  }
}
