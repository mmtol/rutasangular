import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { Router } from '@angular/router';

@Component(
{
  selector: 'app-numerodoble',
  standalone: false,
  templateUrl: './numerodoble.component.html',
  styleUrl: './numerodoble.component.css',
})
export class NumerodobleComponent implements OnInit 
{
  public doble: number;
  public num!: number;

  constructor(private _activateRoute: ActivatedRoute, private _router:Router)
  {
    this.doble = 0;
  }

  ngOnInit(): void 
  {
    //aqui nos suscribimos
    this._activateRoute.params.subscribe((params:Params)=>
      {
        //dentro de params es donde recibimos los parametros por su :name
        //la sintaxis para recuperarlos es params['NOMBRE']
        //en este ejemplo es opcional
        if (params['num'] != null)
        {
          this.num = parseInt(params['num']);
          this.doble = this.num * 2;
        }
      })  
  }

  goToHome(): void
  {
    this._router.navigate(["/"]);
  }
}
