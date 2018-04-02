import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { EditToolComponent } from "./tools/edit/editTool.component";
import {TutorialComponent} from "./tutorial/tutorial.component"

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detalles/home', component: HomeComponent },
  { path: 'herramienta/:id/tutorial', component: TutorialComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: 'edit', component: EditToolComponent },
];

export const app_rountig = RouterModule.forRoot(routes);
