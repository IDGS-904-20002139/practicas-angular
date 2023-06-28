import { Component } from '@angular/core';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent {
  nombre!:string;
  ccompradores!:number;
  cboletos!:number;
  valorTarjeta:string = '';
  presioBoleto: number = 0;
  canBolxPer: number = 0;
  valPago!:number;
  aviso: string ='';
  valPagoTotal: number = 0;

  calcular(){
    this.presioBoleto = 12*this.cboletos;
    this.canBolxPer = 7*this.ccompradores;

    if (this.cboletos > this.canBolxPer)
    {
        this.aviso = "Por persona se puede comprar un maximo de 7 boletos.";
        this.valPagoTotal = 0;
    }
    else if (this.cboletos > 5)
    {
        if (this.valorTarjeta == '1')
        {
            this.valPago = this.presioBoleto - (this.presioBoleto * 0.15);
            this.valPagoTotal = this.valPago - (this.valPago*0.10);                
            this.aviso = "Cada boleta tiene un costo de $12.00,\n además se asigno un descuento del 15% por comprar más de 5 boletas, \n y un descuento del 10% por usar la tarjeta CINECO"
        }
        else{
            this.valPagoTotal = this.presioBoleto - (this.presioBoleto*0.15);
            this.aviso = "Cada boleta tiene un costo de $12.00,\n además se asigno un descuento del 15% por comprar más de 5 boletas.";
        }
    }
    else if (this.cboletos == 3 || this.cboletos == 4 || this.cboletos == 5){
            
        if (this.valorTarjeta == "1")
        {
            this.valPago = this.presioBoleto-(this.presioBoleto*0.10);
            this.valPagoTotal = this.valPago - (this.valPago*0.10);
            this.aviso = "Cada boleta tiene un costo de $12.00,\n además se asigno un descuento del 10% por comprar entre 3 y 5 boletas, \n y un descuento del 10% por usar la tarjeta CINECO";
        }
        else
        {
            this.valPagoTotal = this.presioBoleto-(this.presioBoleto*0.10);
            this.aviso = "Cada boleta tiene un costo de $12.00,\n además se asigno un descuento del 10% por comprar entre 3 y 5 boletas.";
        }
    }
    else if (this.cboletos <= 2)
    {
        if (this.valorTarjeta == "1")
        {
            this.valPagoTotal = this.presioBoleto - (this.presioBoleto*0.10);
            this.aviso = "Cada boleta tiene un costo de $12.00,\n además se asigno un descuento del 10% por usar la tarjeta CINECO";
        }
        else
        {
            this.valPagoTotal = this.presioBoleto;
            this.aviso = "Cada boleta tiene un costo de $12.00";
        }
    }
  }

	refrescar(){
		window.location.reload()
	}


}
