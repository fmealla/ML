import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  search: string = "";

  constructor(private router: Router) { }

  find(searchKey: string) {
    this.router.navigate(['list'], { queryParams: { search: searchKey } });
  }



}
