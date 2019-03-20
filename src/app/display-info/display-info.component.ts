import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-info',
  templateUrl: './display-info.component.html',
  styleUrls: ['./display-info.component.css']
})
export class DisplayInfoComponent {
  public _data = {};

  ngOnInit() {}

  @Input() set Data(Data: any) {
    this._data = Data;
  }

  get Data() : any {
    return this._data;
  }
}
