import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-exemple',
  templateUrl: './pipes-exemple.component.html',
  styleUrls: ['./pipes-exemple.component.css']
})
export class PipesExempleComponent implements OnInit {
  number = 0;
  text = 'hello World!';
  date = new Date;
  pessoa = {
    nome: 'Amanda',
    idade: '29',
    profissao: 'Nutricionista'
  };
  nomes = ['Amanda'];

  constructor(private upperCasePipe: UpperCasePipe) { }

  ngOnInit(): void {
    this.text = this.upperCasePipe.transform(this.text)
  }

  mudaValor() {
    this.text = 'novo texto';
  }

  add(text: string) {
    this.nomes.push(text);
  }

}
