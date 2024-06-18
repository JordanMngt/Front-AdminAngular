import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';




@Component({
  selector: 'app-add-retard',
  standalone: true,
  imports: [
    MatInputModule,
    MatDatepickerModule
  ],
  templateUrl: './add-retard.component.html',
  styleUrl: './add-retard.component.scss'
})
export class AddRetardComponent {

}
