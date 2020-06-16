import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ofering',
  templateUrl: './ofering.component.html',
  styleUrls: ['./ofering.component.scss']
})
export class OferingComponent {

  @Input()
  public ofering: string;

}
