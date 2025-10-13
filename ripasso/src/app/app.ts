import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  variabile = 'Ciao mondo'
  messaggio = ''
  evento(){
    this.messaggio = 'Evento andato a buon fine'
  }
}
