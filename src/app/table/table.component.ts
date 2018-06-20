import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';
import { Table } from './Table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  characters: Table[];
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

      }
    };

    constructor(private tservice: TableService) { }

  ngOnInit() {
    this.characters=[{'id':1,'name':'har','age':20,'brass':'inr4556'},
{'id':2,'name':'hu','age':25,'brass':'pnr4556'},
{'id':3,'name':'hnmmr','age':9,'brass':'pnr456'},
{'id':4,'name':'opar','age':2,'brass':'ir4556'},
{'id':5,'name':'ar','age':220,'brass':'nr4556'}  ];

  }

}
