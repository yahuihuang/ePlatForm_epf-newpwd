import { Component, OnInit } from '@angular/core';
import { EplatformlibService } from '@ddggroup/angular-lib';
@Component({
  selector: 'pmo-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  myVal: string = 'test'

  constructor(private eplatformlibService: EplatformlibService) { }

  ngOnInit(): void {
  }

  setDataFun() {
    console.log('in order-history setDataFun()')
    this.eplatformlibService.setData('myName', this.myVal);
  }

  getDataFun() {
    console.log('in order-history getDataFun()')
    this.eplatformlibService.getData('myName')
  }
}
