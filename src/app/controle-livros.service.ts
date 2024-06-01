import { Injectable } from '@angular/core';
import { Livro }  from "./livro";

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Use a Cabeça: Java',
      resumo: 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java',
      autores: ['Bert Bates', 'Kathy Sierra']
    },
    
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Java, como Programar',
      resumo: 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livors Deitel',
      autores: ['Paul Deitel', 'Harvey Deitel']
    },
    
    {
      codigo: 1,
      codEditora: 3,
      titulo: 'Lógica de Programação e Algoritmos com JavaScript',
      resumo: 'Os conteúdos abordados em Lógica de Programação e Algoritmos são fundamentais a todos aqueles que desejam ingressar no universo da Programação de Computadores.',
      autores: ['Edécio Fernando']
    },
  ];

  constructor() { }

  obterLivros(): Array<Livro>{
    return this.livros;
  }

  incluir(livro: Livro): void {
    let maxCodigo = Math.max(...this.livros.map(l => l.codigo));
    livro.codigo = maxCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    let index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
