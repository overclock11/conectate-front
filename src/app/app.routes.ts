import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { EditToolComponent } from "./tools/edit/editTool.component";
import {TutorialComponent} from "./tutorial/tutorial.component";
import {AddToolComponent} from "./add-tool/add-tool.component";
import {DetailToolComponent} from "./detail-tool/detail-tool.component";
import {ApproveToolComponent} from './approve-tool/approve-tool.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detalles/home', component: HomeComponent },
  { path: 'herramienta/:id/tutorial', component: TutorialComponent},
  { path: 'herramienta/:id/edit', component: EditToolComponent },
  { path: 'tool', component:AddToolComponent},
  { path: 'tool/lista', component: HomeComponent},
  { path: 'tool/aprobar', component: ApproveToolComponent},
  { path: 'tool/:id/detail', component: DetailToolComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

export const app_rountig = RouterModule.forRoot(routes);
