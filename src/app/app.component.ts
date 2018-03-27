import { Component } from '@angular/core';
import { AppService } from './app.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstNumber: string;
  secondNumber: string;
  result: number;
  response: any;
  selectedValue: string;
  displayObj: any;
  errorMessage: string;

  constructor(private appService: AppService) {

  }
  add() {
    this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber);
  }

  subtract() {
    this.result = parseInt(this.firstNumber) - parseInt(this.secondNumber);
  }

  multiply() {
    this.result = parseInt(this.firstNumber) * parseInt(this.secondNumber);
  }

  divide() {
    this.result = parseInt(this.firstNumber) / parseInt(this.secondNumber);
  }
  
  searchRepos(key) {
    console.log(key);
    if (key.length > 2) {
      this.appService.getSearchData(key).subscribe(
        response => this.response = response,
        error => this.errorMessage = error
      )
    }
  }
  selectedText(res) {
    this.selectedValue = res.name;
    this.response = null;
    this.displayObj = res;
  }

  
}
