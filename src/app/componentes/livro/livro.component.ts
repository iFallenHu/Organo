import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  standalone: false,
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  livro = {
    titulo: "As ondas",
    autoria: "Virginia Woolf"
  }
}
