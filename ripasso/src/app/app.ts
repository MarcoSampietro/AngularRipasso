import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  variabile = 'Ciao mondo'
  messaggio = ''
  evento(){
    this.messaggio = 'Evento andato a buon fine'
  }
  messaggiobool = true;
  mostramessaggio(){
    this.messaggiobool = !this.messaggiobool;
  }
  frutti = ['Mela', 'Pera', 'Banana', 'Arancia', 'Ananas'];
  rimuoviFrutto(index:number){//rimuove un elemento dalla lista
    this.frutti.splice(index, 1)
  }
  aggiungiFrutto(nuovo: string) {
    const nome = nuovo.trim();
    if (nome) {
    this.frutti.push(nome);
    }
  }

  evidenzia = false;
  toggleEvidenzia() {
    this.evidenzia = !this.evidenzia;
  }

  dimensione = 16;
  colore = 'black';

  aumenta() {
    this.dimensione += 2;
  }
  diminuisci() {
    if (this.dimensione > 8) {
    this.dimensione -= 2;
  }
  }
  cambiaColore(nuovoColore: string) {
    this.colore = nuovoColore;
  }
  }
