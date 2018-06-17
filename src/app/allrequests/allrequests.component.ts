import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allrequests',
  templateUrl: './allrequests.component.html',
  styleUrls: ['./allrequests.component.css']
})
export class AllrequestsComponent implements OnInit {
  private fieldArray: Array<any> = [];
     private newAttribute: any = {};

     addFieldValue() {
         this.fieldArray.push(this.newAttribute)
         this.newAttribute = {};
     }

     deleteFieldValue(index) {
         this.fieldArray.splice(index, 1);
     }
  constructor() { }

  ngOnInit() {
  }

}
