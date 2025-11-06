import { Component } from '@angular/core';

@Component(
  {
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent 
{
  public nums:Array<number>

  constructor()
  {
    this.nums = [];
    this.crearNums();
  }

  crearNums(): void
  {
    for (let i = 0; i < 5; ++i)
    {
      let num = Math.floor(Math.random()*100)+1;
      this.nums.push(num);
    }
  }
}
