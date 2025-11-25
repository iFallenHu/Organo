import { Component } from '@angular/core';
import { livros } from '../../mock-livros';

@Component({
  selector: 'app-genero-literario',
  standalone: false,
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css'
})
export class GeneroLiterarioComponent {
  livro = livros[0]
}
