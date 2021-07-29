import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
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
    private router: Router,
    private loginService: LoginService
  ) {
    this.login = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  log(): void {
    const usuario: Usuario = {
      NombreUsuario: this.login.value.usuario,
      Password: this.login.value.password

    };
    this.loading=true;
    this.loginService.login(usuario).subscribe(data =>{
      
      this.loading=false;
      this.loginService.setGuardarName(data.token);
      this.router.navigate(['/dashboard']);
    },error => {
      console.log(error);
      this.loading=false;
      this.toastr.error(error.error.message, 'Error');
      this.login.reset();
     
    })



    // setTimeout(() => {
    //   if (
    //     usuario.NombreUsuario === 'Gabriel' &&
    //     usuario.Password === '123456'
    //   ) {
    //     this.login.reset();
    //     this.toastr.success('Acceso exitoso: ' + this.nombre_acceso, 'Well!');
    //     this.router.navigate(['/dashboard']);
    //   } else {
    //     this.toastr.error('Usuario o contraseña incorrectos', 'Error');
    //     this.login.reset();
    //   }
    //   this.loading=false;
    // }, 3000);
  }
}
