import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CineComponent } from "./cine/cine.component";
import { ResistenciasComponent } from "./resistencias/resistencias.component";
import { DistanciasComponent } from "./distancias/distancias.component";
import { PizzasComponent } from "./pizzas/pizzas.component";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'CineComponent', component: CineComponent},
    {path: 'ResistenciasComponent', component: ResistenciasComponent},
    {path: 'DistanciasComponent', component: DistanciasComponent},
    {path: 'PizzasComponent', component: PizzasComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}