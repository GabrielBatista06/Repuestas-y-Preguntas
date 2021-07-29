import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastRef, ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  register: FormGroup;
  loadin= false;

  constructor(private fb: FormBuilder,
               private usuarioService:UsuarioService,
               private router:Router,
               private toastr:ToastrService) { 
    this.register = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(6)]],
      confirmPassword: ['']

    }, {validators: this.checkPassword });
  }

  ngOnInit(): void {
  }

  registrarUsuario():void{

    if(!this.register.valid){
      return 
    }
    console.log(this.register);

    const usuario: Usuario={
      NombreUsuario: this.register.value.usuario,
      Password: this.register.value.password
    };
    this.loadin=true;
   
    this.usuarioService.saveUser(usuario).subscribe(data => {
      console.log(data);
      this.toastr.success('El usuario ' + usuario.NombreUsuario + ' fue registrado con exito','Usuario Registrado');
      this.router.navigate(['/inicio/login']);
      this.loadin=false;
    }, error =>{
      this.loadin=false;
      console.log(error);
      this.toastr.error(error.error.message, 'Error!');
      this.register.reset();
    });
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : {notSame: true};

  }

}
