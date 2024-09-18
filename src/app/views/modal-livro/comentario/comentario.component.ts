import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {


  comentario = {
    id: '1',
    conteudo: 'Comentando',
    book: 'book'
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarComentario(){
    alert("Novo pensamento criado ")
  }

  cancelar(){

  }

}
