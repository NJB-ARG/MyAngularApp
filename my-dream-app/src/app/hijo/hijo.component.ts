import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit, OnChanges{

  @Input()
  public tituloHijo: string = 'HijoComponent titulo';
  @Input()
  public titleHijo: string = 'HijoComponent title';
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('HijoComponent.ngOnChanges', changes);

  }

  public OnClick(event : any):void {
    console.log('HijoComponent.OnClick - 1', event);

  }

  public OnClick2(event : MouseEvent):void {
    console.log('HijoComponent.OnClick - 2', event);

  }

}
