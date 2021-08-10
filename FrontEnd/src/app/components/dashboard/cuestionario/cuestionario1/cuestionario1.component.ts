import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuestionarioService } from 'src/app/services/cuestionario.service';

@Component({
  selector: 'app-cuestionario1',
  templateUrl: './cuestionario1.component.html',
  styleUrls: ['./cuestionario1.component.css']
})
export class Cuestionario1Component implements OnInit {
idCuestionario: number;
loading = false;
cuestionario: any={};
  constructor(private cuestionarioService: CuestionarioService,
              private aRoute: ActivatedRoute ) {
                this.idCuestionario = Number(this.aRoute.snapshot.paramMap.get('id'));

  }

  ngOnInit(): void {
    this.getCuestionario();
  }

  getCuestionario(): void{
    this.loading=true;
    this.cuestionarioService.getCuestionario(this.idCuestionario).subscribe(data =>{
     this.loading=false;
     this.cuestionario=data;
     console.log(data);
    });
  }
}
