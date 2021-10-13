import { Component, OnInit } from '@angular/core';
import { SchemesService } from 'src/app/services/schemes.service';
import { Schemes } from 'src/app/models/schemes';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.scss']
})
export class PriceTableComponent implements OnInit {
  public yojna: Schemes[] = [];
  yojnaData!: any;

  constructor(private schemesService: SchemesService, private ApiService: ApiService) { }

  ngOnInit(): void {
    this.getYojna();
  }

  getYojna() {
    this.ApiService.getYojnaList()
      .subscribe(res => {
        this.yojnaData = res;
      })
  }
}
