import { Component, OnInit } from '@angular/core';
import { Product } from './Producto';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productos: Product[];
  productosFiltrados = this.productos;
  busqueda = '';

  existentes = false;
  ordenados = false;
  resaltados = false;

  constructor() {
    this.productos = [new Product(12, 'Smartphone', 'LG', 'Quadcore 3GHZ', 12018.5, 5),
    new Product(123, 'Smartwatch', 'Sony', '3GB Ram', 4999.9, 0),
    new Product(34, 'SmartTV', 'Sony', '52 pulgadas Conexión wifi', 8999.9, 3)]

    this.productosFiltrados = this.productos.slice();
  }

  existencia() {
    this.existentes = !this.existentes;
    this.buscar();
  }

  ordenar() {
    this.ordenados = !this.ordenados;
    this.buscar();
  }

  resaltar() {
    this.resaltados = !this.resaltados;
  }

  buscar() {
    if (this.existentes) {
      this.productosFiltrados = this.productos.filter((product) => product.existencia > 0);
    } else if (this.ordenados) {
      this.productosFiltrados = this.productosFiltrados.sort((a, b) => (a.precio - b.precio));
    } else {
      this.productosFiltrados = this.productos.filter( (product) => {
        return product.nombre.toUpperCase().includes(this.busqueda.toUpperCase()) ||
               product.descripcion.toUpperCase().includes(this.busqueda.toUpperCase()) ||
               product.marca.toUpperCase().includes(this.busqueda.toUpperCase()); //Incluyo tambien buscar por marca
              });
    }
  }

  ngOnInit(): void {
  }
}
