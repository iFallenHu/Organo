import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  standalone: false,
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  alternarFavorito(){
    this.livro.favorito = !this.livro.favorito
  }

  livro = {
    titulo: "As ondas",
    favorito: false,
    autoria: "Virginia Woolf",
    imagem: "https://m.media-amazon.com/images/I/81D2d6LqZdS._AC_UF1000,1000_QL80_.jpg"
  }
}
