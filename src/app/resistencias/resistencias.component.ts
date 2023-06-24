import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  resultado!:number;
  valorTolerancia:string = '';
  banda1:string ='';
  banda2:string ='';
  multi:string ='';
  operacionSeleccionada:string='black';
  coloresBanda = [
    'black',
    'brown',
    'red',
    'oranje',
    'yellow',
    'green',
    'blue',
    'purple',
    'gray',
    'white'
  ];

  opcionBanda = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  ];

  toleranciaColor = [
    'gold',
    'silver'
  ];

  valueb1:number=0;
  valueb2:number=0;
  valuemulti:number=0;
  valorResistencia:number=0;
  valorMax:number=0;
  valorMin:number=0;
  calcularResistencia(){
    this.valueb1 = this.calcularbanda(this.banda1)
    this.valueb2 = this.calcularbanda(this.banda2)
    this.valuemulti = this.calcularbanda(this.multi)

    this.valorResistencia = parseInt(this.valueb1.toString() + '' + this.valueb2.toString()) * 10**this.valuemulti
    this.valorMax = this.valorResistencia * (1 + parseFloat(this.valorTolerancia))
    this.valorMin = this.valorResistencia * (1 - parseFloat(this.valorTolerancia))
    
  }
  
  calcularbanda(banda:string){
    switch(banda){
      case 'black': return 0;
          break;
      case 'brown': return 1;
          break;
      case 'red': return 2;
          break;
      case 'oranje': return 3;
          break;
      case 'yellow': return 4;
          break;
      case 'green': return 5;
          break;
      case 'blue': return 6;
          break;
      case 'purple': return 7;
          break;
      case 'gray': return 8;
          break;
      case 'white': return 9;
          break;
          default: return 0;
      }
  }
}
