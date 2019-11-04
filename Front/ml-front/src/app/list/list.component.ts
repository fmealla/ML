import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../service/api.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public items: any = [];
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private listService: ApiService) {

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const search = params['search'];
      this.listService.getItems(search).subscribe((items) => {
        this.items = items;
      });
    });
  }

  watchDetails(productId) {
    this.router.navigate(['detail'], { queryParams: { id: productId } });
  }

}
