import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component(
{
  selector: 'app-tablamultiplicar.component',
  standalone: false,
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css',
})
export class TablamultiplicarComponent implements OnInit
{
  public num!: number;
  public resultados!:Array<number>;

  constructor(private _activateRoute: ActivatedRoute)
  {
    
  }

  ngOnInit(): void 
  {
    this._activateRoute.params.subscribe((params:Params)=>
      {
        if (params['num'] != null)
        {
          this.num = parseInt(params['num']);
          this.multiplicar();
        }
      })   
  }

  multiplicar(): void
  {
    this.resultados = [];

    for (let i = 1; i <= 10; ++i)
    {
      this.resultados.push(this.num*i);
    }
  }
}
