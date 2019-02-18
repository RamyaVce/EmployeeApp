import { Component } from '@angular/core';
import { ApiService } from '../app/api.service';

import *  as _  from 'lodash'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeList = [];
  salaryList = [];
  employeeSalary = [];
  employeeById : any; 
  employeeSal = [];
  idNumber: string;
  constructor(private api: ApiService) { }

  //INITIAL FUNCTION TO CALL
  ngOnInit() {
    this.getEmployee(function(data){
      this.employeeList = data;
    });
  }

//GET EMPLOYEE DETAILS
  getEmployee (callback) : void {
    this.salaryList = [];
    this.employeeSal = [];
    this.api.getEmployees()
      .subscribe(res => {
        console.log(res);
        if(!callback){
          this.employeeList = res.result;
        }
        callback(res.result);
      }, err => {
        console.log(err);
      });
  }
//GET SALARY DETAILS
  getSalary (callback) : void {
    this.employeeList = [];
    this.employeeSal = [];
    this.api.getSalary()
      .subscribe(res => {
        console.log(res);
        if(!callback){
          this.salaryList = res.result;
        }
        callback(res.result)
      }, err => {
        console.log(err);
      });
  }
//GET BOTH SALARY AND EMPLOYEE DETAIL
  getEmployeeAndSalary () : void {
    this.employeeList = [];
    this.salaryList = [];
    this.api.getEmployees()
    .subscribe(res => {
      this.employeeById = _.keyBy(res.result, 'employeeId')
    }, err => {
      console.log(err);
    });
    this.api.getSalary()
      .subscribe(res => {
          this.employeeSal = res.result;
      }, err => {
        console.log(err);
      });
  }
  

}
