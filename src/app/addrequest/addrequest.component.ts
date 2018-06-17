import { Component, OnInit, Input } from '@angular/core';
import { Requirement } from '../requirement';
import { NgModule  } from '@angular/core';

@Component({
  selector: 'app-addrequest',
  templateUrl: './addrequest.component.html',
  styleUrls: ['./addrequest.component.css']
})
export class AddrequestComponent implements OnInit {
message="hi0";
experience=[0,1,2,3,4,5,6,7,8,9,10,11];
linemanager=['abc','pqr','tyu','tui'];
/*req: Requirement={
  DEPARTMENT: '',
  SKILLSET: '',
  NOOFRESOURCES: '',
  BRASSRINGID: '',
  DESIGNATION: '',
  MININMUMEXPERIENCE:-5 ,
  LINEMANAGER: '',
  DEADLINE: ''
};*/
req: Requirement=new Requirement();
submit(event,value)
{
  console.log(event);
  console.log(value);
if(typeof this.req.DEPARTMENT == 'undefined'||typeof this.req.SKILLSET == 'undefined'||typeof this.req.NOOFRESOURCES == 'undefined'||typeof this.req.DESIGNATION == 'undefined'||typeof this.req.MININMUMEXPERIENCE == 'undefined'||typeof this.req.LINEMANAGER == 'undefined'||typeof this.req.DEADLINE == 'undefined')
{alert("err");}
else{
  alert('trt');
}
  /*if(this.req.DEADLINE==''||this.req.DEPARTMENT==''||this.req.SKILLSET==''||this.req.NOOFRESOURCES==''||this.req.BRASSRINGID==''||this.req.DESIGNATION==''||this.req.MININMUMEXPERIENCE==-5||this.req.LINEMANAGER=='')
  {alert("error");}
  else
  {
    alert("true"+this.req.DEADLINE);
  }*/
}

constructor () {
 }
  ngOnInit() {
  }
}
