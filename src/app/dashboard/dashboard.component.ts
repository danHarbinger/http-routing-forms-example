import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Employee {
  first_name: string;
  last_name: string;
  profile_image: string;
}

const ELEMENT_DATA: Employee[] = [
  {first_name: "Dan", last_name: 'Shinde', profile_image:""},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  displayedColumns: string[] = ['first_name', 'last_name', 'profile_image', 'action'];
  dataSource = ELEMENT_DATA;

}
