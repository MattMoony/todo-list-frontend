import { Component } from '@angular/core';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Matthias\' To-Do List';
  subtitle = 'by Matthias';
  
  faCalendarCheck = faCalendarCheck;
}
