import { Component, input } from '@angular/core';
import { GeneroLiterario } from '../livro/livro';

@Component({
  selector: 'app-genero-literario',
  standalone: false,
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css'
})
export class GeneroLiterarioComponent {
  
  genero = input.required<GeneroLiterario>();

}
