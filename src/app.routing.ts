import { HomeComponent } from "./components/home.component/home.component";
import { CineComponent } from "./components/cine.component/cine.component";
import { MusicaComponent } from "./components/musica.component/musica.component";

//necesitamos modulos que estan dentro de angular
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { NotfoundComponent } from "./components/notfound.component/notfound.component";
import { NumerodobleComponent } from "./components/numerodoble.component/numerodoble.component";
import { TablamultiplicarComponent } from "./components/tablamultiplicar.component/tablamultiplicar.component";

//necesitamos un array de tipo routes con las rutas
const appRoutes:Routes=
[
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"cine",
        component:CineComponent
    },
    {
        path:"musica",
        component:MusicaComponent
    },
    {
        path:"numerodoble",
        component:NumerodobleComponent
    },
    {
        path:"numerodoble/:num",
        component:NumerodobleComponent
    },
    {
        path:"tablamultiplicar/:num",
        component:TablamultiplicarComponent
    },
    {
        path:"**",
        component:NotfoundComponent
    }
]

//desde esta clase exportamos el array de routes como provider
export const appRoutingProvider: any[] = [];
//las propias rutas a exportar
export const routing:ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);