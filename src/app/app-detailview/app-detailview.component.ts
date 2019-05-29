import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detailview',
  templateUrl: './app-detailview.component.html',
  styleUrls: ['./app-detailview.component.less']
})
export class AppDetailviewComponent{
  @Input() _DetailsView: any;
  @Input() _Id: string;
  constructor() { }
}
