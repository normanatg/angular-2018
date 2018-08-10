//Injectamos lo que requerimos
import { Directive, OnInit, ElementRef, Renderer2, Input } from "@angular/core";
//Usamos el decorardor para declarar la directiva 
//Codigo TypeScript
@Directive({
    //Lo unico que requerimos es el selector que sera el nombre que usemos en nuestro html
    selector:'[resaltar]'
})
//Exportamos la clase para poder usarla fuera del archivo
//En esta clase implementaremos la función OnInit
export class ResaltarDirective implements OnInit{
    //ElementRef

    /*Como vamos a estar manipulando el DOM de html vamos a ocupar un modulo de angular que se llama
    ElementRef, nos permite crear una referencia de html pero que podemos manipular en codigo TypeScript*/

    /*Vamos a implementar un renderer nos permite manipular los elementos del html pero mas orientado a los atrivutos
    de css, esto es porque angular no solo corre en el cliente lo podemos correr en el servidor o ni siquiera en un
    naveador */
    constructor(private elRef:ElementRef, private renderer:Renderer2){}
    //Se declara la variable plan de tipo input, lo que vamos a obtner es la variable resaltar
    @Input('resaltar') plan: string = '';
    //Para implemetar la clase sola mente la declaramos como cualquier funcion
    ngOnInit(){
        if (this.plan === 'pay') {
            //El setStyle tiene tres elementos el primero es el elemento nativo,el segundo 
            //es el atrivuto de css que queremos modificar y el tercero es el valor para ese
            //atrivuto
            this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
            this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
        }
    }
};