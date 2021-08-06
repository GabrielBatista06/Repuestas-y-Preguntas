import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cuestionario } from 'src/app/models/cuestionario';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {

  nombreUsuario: any='';
  listCuestionarios:any[] =[];
  constructor(private loginService: LoginService,
              private cuestionarioService: CuestionarioService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getNombreUsuario();
    this.getCuestionarios();
  }

  getNombreUsuario():void{
    console.log(this.loginService.getToken());
    this.nombreUsuario=this.loginService.getToken().sub;
  }

  getCuestionarios():void{
    this.cuestionarioService.getLisCuestionario().subscribe(data =>{
      console.log(data);
      this.listCuestionarios=data;
    },error => {
      console.log(error);
    });
  }
}
