import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-abs',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatDatepickerModule
  ],
  templateUrl: './add-abs.component.html',
  styleUrls: ['./add-abs.component.scss']
})
export class AddAbsComponent {
  formBuilder : FormBuilder = inject(FormBuilder);
  formulaire: FormGroup = inject(FormGroup);
  http: HttpClient = inject(HttpClient);

  addAbs() {
    const absenceDate = this.formulaire.value.absence_date;
    this.http.post('http://localhost/back-adminng/connexion.php', { abs: absenceDate }).subscribe(
      response => {
        console.log('Absence envoyé', response);
      },
      error => {
        console.error('Echec envoi absence', error);
      }
    );
  }
}
