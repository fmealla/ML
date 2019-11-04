import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../service/api.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private item:any;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const id = params['id'];
      this.apiService.getItemById(id).subscribe((item) => {
        this.item = item;
      });
    });
  }

}
