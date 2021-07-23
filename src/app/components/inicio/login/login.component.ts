import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import{Usuario} from '../../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  nombre_acceso ='';

  constructor(private fb: FormBuilder, 
              private toastr: ToastrService,
              private router:Router) {
    this.login = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {}

  log(): void{
    console.log(this.login)

    const usuario: Usuario={
      nombreUsuario: this.login.value.usuario,

      password: this.login.value.password
      
    }

    this.nombre_acceso=usuario.nombreUsuario;

    if(usuario.nombreUsuario==='Gabriel' && usuario.password==='yambri12'){
      console.log('IF')
      this.login.reset();
      this.toastr.warning('Acceso exitoso:' + this.nombre_acceso,'Well!');
      this.router.navigate(['/dashboard']);
    }
    else{
      console.log('ELSE')
      this.toastr.error('Usuario o contraseña incorrectos', 'Error');
      this.login.reset();
    }

    console.log(usuario);
  }
}
