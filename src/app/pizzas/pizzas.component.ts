import { Component } from '@angular/core';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {
  nombre!:string;
  direccion!:string;
  telefono!:string;
  npizza!:number;
  tamanio!:number;
  jamon!:number;
  pinia!:number;
  champi!:number;
  total!:number;
  valorTamaño!:number;
  valorIngrediente!:number;
  valorTotal!:number;
  ventasTotal!:number;

  datosVenta:any = [];
  datosTabla:any = [];

  agregar(){
    let nombrePizza = '';
    let ingedienteN = '';
    if (this.tamanio == 1)
    {
        nombrePizza = 'Chica';
        this.valorTamaño = 40;
        this.valorIngrediente = (this.jamon ? 10 : 0) + (this.pinia ? 10 : 0) + (this.champi ? 10 : 0);
        ingedienteN = (this.jamon ? 'Jamón' : '') + ',' + (this.pinia ? 'Piña' : '') + ',' + (this.champi ? 'Champiñones' : '');
        this.valorTotal = ((this.valorTamaño + this.valorIngrediente)* (this.npizza));
        this.datosTabla.push({'nombre': this.nombre,
                              'tamanio': nombrePizza,
                              'ingredientes': ingedienteN,
                              'npizzas': this.npizza,
                              'subtotal': this.valorTotal});
    }
    if (this.tamanio == 2)
    {
      nombrePizza = 'Mediana';
      this.valorTamaño = 80;
      this.valorIngrediente = (this.jamon ? 10 : 0) + (this.pinia ? 10 : 0) + (this.champi ? 10 : 0);
      ingedienteN = (this.jamon ? 'Jamón' : '') + ',' + (this.pinia ? 'Piña' : '') + ',' + (this.champi ? 'Champiñones' : '');
      this.valorTotal = ((this.valorTamaño + this.valorIngrediente)* (this.npizza));
      this.datosTabla.push({'nombre': this.nombre,
                            'tamanio': nombrePizza,
                            'ingredientes': ingedienteN,
                            'npizzas': this.npizza,
                            'subtotal': this.valorTotal});
    }
    if (this.tamanio == 3)
    {
      nombrePizza = 'Grande';
      this.valorTamaño = 120;
      this.valorIngrediente = (this.jamon ? 10 : 0) + (this.pinia ? 10 : 0) + (this.champi ? 10 : 0);
      ingedienteN = (this.jamon ? 'Jamón' : '') + ',' + (this.pinia ? 'Piña' : '') + ',' + (this.champi ? 'Champiñones' : '');
      this.valorTotal = ((this.valorTamaño + this.valorIngrediente)* (this.npizza));
      this.datosTabla.push({'nombre': this.nombre,
                            'tamanio': nombrePizza,
                            'ingredientes': ingedienteN,
                            'npizzas': this.npizza,
                            'subtotal': this.valorTotal});
    }
  }
  terminar(){
    let valorTotalPedido = 0;
    for (let index = 0; index < this.datosTabla.length; index++) {
      valorTotalPedido += this.datosTabla[index].subtotal;
    }
    this.datosVenta.push({'nombre': this.nombre,'subtotal': valorTotalPedido});
    this.datosTabla = [];
  }


  totalVenta(){
    let valorVenta = 0;
    for (let index = 0; index < this.datosVenta.length; index++) {
      valorVenta += this.datosVenta[index].subtotal;
    }
    this.ventasTotal = valorVenta;
  }
}
