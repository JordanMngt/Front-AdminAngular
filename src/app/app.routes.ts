import { Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { administrateurGuard } from './administrateur.guard';
import { RetardComponent } from './retard/retard.component';
import { AddAbsComponent } from './add-abs/add-abs.component';



export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'add-user', component: EditUserComponent, canActivate: [administrateurGuard]},
  {path: 'edit-user/:id', component: EditUserComponent, canActivate: [administrateurGuard]},
  {path: 'manage-user', component: ManageUserComponent},
  {path: 'retard', component: RetardComponent, canActivate: [administrateurGuard]},
  {path: 'add-abs/:id', component: AddAbsComponent, canActivate: [administrateurGuard]},
  {path: 'connexion', component: ConnexionComponent},
  {path: '', redirectTo : 'home', pathMatch : 'full'},
  {path: '**',component: NotFoundComponent },
];

