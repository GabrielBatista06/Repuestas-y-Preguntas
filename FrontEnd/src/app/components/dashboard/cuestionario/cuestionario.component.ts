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
  loading =false;

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
    this.loading= true;
    this.cuestionarioService.getLisCuestionarioByUser().subscribe(data =>{
      this.listCuestionarios=data;
      this.loading=false;
    },error => {
      console.log(error);
      this.loading=false;
     // this.toastr.error('Uuups!!! Ocurrio un error', 'Error');
    });
  }
  eliminarCuestionario(idCuestionario: number):void{
    if(confirm('Estas seguro que deseas eliminar el cuestionario?')){
      this.loading=true;
      this.cuestionarioService.deleteCuestionario(idCuestionario).subscribe(data =>{
        this.loading=false;
        this.toastr.success('El cuestionario fue eliminado con exito', 'Cuestionario Eliminado');
        this.getCuestionarios();

      }, error =>{
          this.loading= false;
          this.toastr.error('Uuups!!! Ocurrio un error', 'Error');
      });
    }

}
}


