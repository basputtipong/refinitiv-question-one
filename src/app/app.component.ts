import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  input: any;
  output = false;

  filteredNum: any;

  chosenOption: any;
  options = [
    { value: 0, name: 'isPrime' },
    { value: 1, name: 'isFibonacci' },
  ];

  onEnter(event: any) {
    this.input = event.target.value;
    this.filterNumber(this.input);
    if (this.selectType() === 0) {
      this.calculateFirstChange();
    }
    if (this.selectType() === 1) {
      this.calculateSecondChange();
    }
  }

  filterNumber(num: number) {
    this.filteredNum = Math.round(num);
    if (this.filteredNum < 0) {
      this.filteredNum = 1;
      return this.filteredNum;
    }
    return this.filteredNum;
  }

  selectType() {
    return this.chosenOption;
  }

  isPrime(num: number) {
    if (num < 2) {
      return false;
    }
    if (num % 2 == 0) {
      return num == 2;
    }
    if (num % 3 == 0) {
      return num == 3;
    }

    var sqrtNum = Math.sqrt(num);

    for (var i = 5; i <= sqrtNum; i += 6) {
      if (num % i == 0) {
        return false;
      }
      if (num % (i + 2) == 0) {
        return false;
      }
    }
    return true;
  }

  isFibonacci(num: number) {
    var first = 0;
    var second = 1;
    if (num == first || num == second) {
      return true;
    }
    var sum = first + second;
    while (sum <= num) {
      if (sum == num) {
        return true;
      }
      first = second;
      second = sum;
      sum = first + second;
    }
    return false;
  }

  calculateFirstChange() {
    this.output = this.isPrime(this.filteredNum);
  }

  calculateSecondChange() {
    this.output = this.isFibonacci(this.filteredNum);
  }
}
