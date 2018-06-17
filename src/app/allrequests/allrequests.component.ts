import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allrequests',
  templateUrl: './allrequests.component.html',
  styleUrls: ['./allrequests.component.css']
})
export class AllrequestsComponent implements OnInit {

Tabledata : any = [];
showedittable : boolean =false;
editrowid : any='';
  constructor() {
    this.Tabledata=[{id:1,BRASSRINGID:'123TYY',STATUS:'inprogress',SKILLSET:'java',NOOFRESOURCES:10,DEADLINE:'29/6/18',LINEMANAGER:'AS',DESIGNATION:'AO',PROFILESOURCED:'NAMES',PROFILESHORTLISTED:'NAMES',INTERVIEW:'TIME',OFFERSROLLED:'NAMES',DATEOFJOIN:'4/6/18'},
                    {id:2,BRASSRINGID:'123TYY',STATUS:'inprogress',SKILLSET:'java',NOOFRESOURCES:10,DEADLINE:'29/6/18',LINEMANAGER:'AS',DESIGNATION:'AO',PROFILESOURCED:'NAMES',PROFILESHORTLISTED:'NAMES',INTERVIEW:'TIME',OFFERSROLLED:'NAMES',DATEOFJOIN:'4/6/18'},
                    {id:3,BRASSRINGID:'123TYY',STATUS:'inprogress',SKILLSET:'java',NOOFRESOURCES:10,DEADLINE:'29/6/18',LINEMANAGER:'AS',DESIGNATION:'AO',PROFILESOURCED:'NAMES',PROFILESHORTLISTED:'NAMES',INTERVIEW:'TIME',OFFERSROLLED:'NAMES',DATEOFJOIN:'4/6/18'},
                    {id:4,BRASSRINGID:'123TYY',STATUS:'inprogress',SKILLSET:'java',NOOFRESOURCES:10,DEADLINE:'29/6/18',LINEMANAGER:'AS',DESIGNATION:'AO',PROFILESOURCED:'NAMES',PROFILESHORTLISTED:'NAMES',INTERVIEW:'TIME',OFFERSROLLED:'NAMES',DATEOFJOIN:'4/6/18'}
  ];
   }
   Edit(value)
   {
     this.editrowid=value;

   }

  ngOnInit() {
  }

}
