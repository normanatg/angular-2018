import { Directive, HostListener, HostBinding } from "@angular/core";
@Directive({
    selector: 'li[contar-clicks]'
})

export class ContarClicks{
    clackN = 0;
    /**
     * 
     * Recibe como parametro el atributo que queremos estar editando
     */
    @HostBinding('style.opacity') opacity: number = .1;

    /**
     * @HostListener recive dos paramentros
     * El primero es el evento en este caso es click (MouseHover, todos los eventos de html).
     * Se pasa un arreglo
     */
    @HostListener('click', ['$event.target']) onclick(btn){
        console.log('a', btn, 'Numero de clicks:', this.clackN++);
        this.opacity += .1;
    }
}