import {Component, OnInit} from '@angular/core';
import {ServerDataService} from "./server-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private serverDataService: ServerDataService) {
  }

  title: any;
  categories: any;
  currentItem = {show: false};
  categoryList = [];
  categoryItemsInRow = 4;

  showCategoryDetails(category : any){
    this.currentItem.show = false;
    if (this.currentItem === category) {
      this.currentItem = {show: false};
    } else {
      this.currentItem = category;
      this.currentItem.show = true;
    }
  }

  getServerData(): void {
    this.serverDataService
      .getData()
      .then(title => this.showData(title));
  }

  getCategories(): void {
    this.serverDataService
      .getCategories()
      .then(categories => this.showCategories(categories));
  }


  showData(data : any): void {
    this.title = data.json()[0].description;
  }

  showCategories(data : any) : void {
    this.categories = data.json();

    this.categories.forEach(function(elem){
      elem.show = false;
    });

    let tempCategoryItems = [];

    for(let i = 1; i <= this.categories.length; i++) {
      tempCategoryItems.push(this.categories[i - 1]);
      if (i % this.categoryItemsInRow === 0) {
        this.categoryList.push({"items": tempCategoryItems});
        tempCategoryItems = [];
      }
    }

    let km = 9;

  }

  ngOnInit(): void {
    this.getServerData();
    this.getCategories();
  }
}
