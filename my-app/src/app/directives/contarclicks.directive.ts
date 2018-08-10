import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: 'li[contar-clicks]'
})

export class ContarClicks{
    clackN = 0;
    @HostBinding('style.opacity') opacity: number = .1;
    @HostListener('click',['$event.target']) onclick(btn){
        console.log('Numero de clicks:', ++this.clackN);
        this.opacity += .1;
    }
}