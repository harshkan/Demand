import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
   selected: string;
   data :any=[];
   continents = [{
      id: 1,
      name: 'Asia',
      population: '4,157,300,000'
    }, {
      id: 2,
      name: 'Africa',
      population: '1,030,400,000'
    }, {
      id: 3,
      name: 'Europe',
      population: '738,600, 000'
    }, {
      id: 4,
      name: 'North America',
      population: '461,114,000'
    }, {
      id: 5,
      name: 'South America',
      population: '390,700,000'
    }, {
      id: 6,
      name: 'Australia',
      population: '36,700,000'
    }, {
      id: 7,
      name: 'Antartica',
      population: 0
    }
    ];
    autocompleListFormatter = (data: any) : SafeHtml => {
       let html = `<span>${data.name}</span>`;
       return this._sanitizer.bypassSecurityTrustHtml(html);
     }
  constructor(public http: Http,private _sanitizer: DomSanitizer) {


  }
    ngOnInit() {

        this.getdata();

    }
getdata()
{
  let url: string = './assets/data.json'
  this.http.get(url)
    .map(res => {
      let json = res.json();
      console.log(json);
      this.data=json;
      return json;
    })
  
}
  observableSource = (keyword: any): Observable<any[]> => {



      return Observable.of(this.data);

  }

}
