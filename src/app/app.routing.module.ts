import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CineComponent } from "./cine/cine.component";
import { ResistenciasComponent } from "./resistencias/resistencias.component";
import { DistanciasComponent } from "./distancias/distancias.component";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'cineComponent', component: CineComponent},
    {path: 'resistenciasComponent', component: ResistenciasComponent},
    {path: 'distanciasComponent', component: DistanciasComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}