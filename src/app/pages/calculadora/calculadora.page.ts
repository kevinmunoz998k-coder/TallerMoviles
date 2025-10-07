import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})

export class CalculadoraPage {
  num1: string = '';
  num2: string = '';
 
  result: number | null = null;
  operation: string = '';

  calculate(op: 'sum' | 'sub' | 'mult' | 'div') {
    const a = Number(this.num1);
    const b = Number(this.num2);

    if (isNaN(a) || isNaN(b)) {
      this.result = null;
      this.operation = 'Error: valores inválidos';
      return;
    }

    switch (op) {
      case 'sum':
        this.result = a + b;
        this.operation = 'Suma'
        break;
      case 'sub':
        this.result = a - b;
        this.operation = 'Resta'
        break;
      case 'mult':
        this.result = a * b;
        this.operation = 'Multiplicacion'
        break;
      case 'div':
        this.result = a / b;
        this.operation = 'Division'
        break;
      default:
        break;
    }
  }
}
