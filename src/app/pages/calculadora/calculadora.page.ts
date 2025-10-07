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
  expression: string = ''
  result: number | null = null
  operation: string = ''

  calculate(op: 'sum' | 'sub' | 'mult' | 'div' | 'pow' | 'sin' | 'cos' | 'tan' | 'eval') {
    const parts = this.expression.trim().split(' ');
    const a = Number(parts[0])
    const b = Number(parts[1])

    if (['sum', 'sub', 'mult', 'div', 'pow'].includes(op)) {
      if (isNaN(a) || isNaN(b)) {
        this.result = null;
        this.operation = 'Error, usa el formato: (5 3)'
        return;
      }

      switch (op) {
        case 'sum':
          this.result = a + b;
          this.operation = 'Suma';
          break;
        case 'sub':
          this.result = a - b;
          this.operation = 'Resta';
          break;
        case 'mult':
          this.result = a * b;
          this.operation = 'Multiplicación';
          break;
        case 'div':
          if (b === 0) {
            this.result = null;
            this.operation = 'Error: división por cero';
          } else {
            this.result = a / b;
            this.operation = 'División';
          }
          break;
        case 'pow':
          this.result = Math.pow(a, b);
          this.operation = 'Potencia';
          break;
      }
    }

    else if (['sin', 'cos', 'tan'].includes(op)) {
      const num = Number(this.expression);
      if (isNaN(num)) {
        this.result = null;
        this.operation = 'Error: valor inválido';
        return;
      }

      const radians = this.toRadians(num);
      switch (op) {
        case 'sin':
          this.result = Math.sin(radians)
          this.operation = 'Seno';
          break
        case 'cos':
          this.result = Math.cos(radians)
          this.operation = 'Coseno';
          break
        case 'tan':
          this.result = Math.tan(radians)
          this.operation = 'Tangente';
          break
      }
    }

    else if (op === 'eval') {
      try {
        const parsedExpr = this.expression.replace(/(\d+(\.\d+)?)\^(\d+(\.\d+)?)/g, 'Math.pow($1,$3)');
        const value = eval(parsedExpr);
        this.result = value;
        this.operation = 'Resultado';
      } catch {
        this.result = null;
        this.operation = 'Error en la expresión';
      }
    }
  }

  toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  clear() {
    this.expression = '';
    this.result = null;
    this.operation = '';
  }
}