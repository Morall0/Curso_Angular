import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ɵSWITCH_CHANGE_DETECTOR_REF_FACTORY__POST_R3__ } from '@angular/core';

@Directive({
  selector: '[errorMsj]'
})
export class ErrorMsjDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>; 

  @Input() set valido( valor: boolean ) {
    if( valor ) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  @Input() set color( valor: string ) {
    this._color = valor;
    this.setColor();
  }

  @Input() set mensaje ( valor: string ) {      
    this._mensaje = valor;
    this.setMensaje();
  } 

  // @Input() mensaje: string = 'Este campo es obligatorio';

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {

    // if( changes.mensaje ){

    //   const mensaje = changes.mensaje.currentValue;
      
    //   this.htmlElement.nativeElement.innerText = mensaje;
      
    // }
    
    // if( changes.color ){

    //   const color = changes.color.currentValue;
      
    //   this.htmlElement.nativeElement.style.color = color;
      
    // }

    // console.log(changes);
    
  }

  ngOnInit(): void {
    this.setEstilo();
    this.setColor();
    this.setMensaje();  
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje( ): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}