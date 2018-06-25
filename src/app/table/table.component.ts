import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import 'rxjs/add/observable/of';
import { DemoService } from '../demo.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
    providers: [DemoService]
})
export class TableComponent implements OnInit {
  characters: any=[];
  selected: string;
  tdata :any=[];
  settings = {
      columns: {
        id: {
          title: 'ID'
        },
        name: {
          title: 'Name'
        },
        age: {
          title: 'Age'
        },
        brass:{
          title: 'brass'
        },

      },
      defaultStyle: 'false',
      attr:{
        class : 'table table-bordered'
      }
    };

    autocompleListFormatter = (data: any) : SafeHtml => {
       let html = `<span>${data.name}</span>`;
       return this._sanitizer.bypassSecurityTrustHtml(html);
     }
  constructor(public http: Http,private _sanitizer: DomSanitizer,private _demoService:DemoService) {


  }

  ngOnInit() {
    this.characters=[{'id':1,'name':'har','age':20,'brass':'inr4556'},
{'id':2,'name':'hu','age':25,'brass':'pnr4556'},
{'id':3,'name':'hnmmr','age':9,'brass':'pnr456'},
{'id':4,'name':'opar','age':2,'brass':'ir4556'},
{'id':5,'name':'ar','age':220,'brass':'nr4556'}  ];
console.log(this.characters);
this.getallrequests();

  }

    /*observableSource = (keyword: any): Observable<any[]> => {
  return Observable.of(this.tdata);

}*/
    getallrequests()
{
  this._demoService.getallrequests().subscribe(
    // the first argument is a function which runs on success
    data => { this.tdata = data;
console.log(this.tdata);
  },
    // the second argument is a function which runs on error
    err => console.error(err),
    // the third argument is a function which runs on completion
    () => console.log('done loading table')
  );
}

}
