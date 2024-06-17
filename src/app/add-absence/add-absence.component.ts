import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; 
import { RouterLink } from '@angular/router';
import { Utilisateur } from '../models/Utilisateur.type';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatTableModule} from '@angular/material/table'; 
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-add-absence',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule, MatIconModule],
  templateUrl: './add-absence.component.html',
  styleUrl: './add-absence.component.scss'
})
export class AddAbsenceComponent {
  http: HttpClient = inject(HttpClient);
  authentification: AuthentificationService = inject(AuthentificationService);

    listeUtilisateur:Utilisateur[] = [];
  
  ngOnInit()
  {
    this.refresh();
  }

  refresh()
  {
    this.http
    .get<Utilisateur[]>('http://localhost/back-adminng/list-user.php')
    .subscribe((resultat) => this.listeUtilisateur = resultat);
    
  }
}
