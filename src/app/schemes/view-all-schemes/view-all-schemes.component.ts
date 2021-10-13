import { Component, OnInit } from '@angular/core';
import { SchemesService } from 'src/app/services/schemes.service';
import { Schemes } from 'src/app/models/schemes';

@Component({
  selector: 'app-view-all-schemes',
  templateUrl: './view-all-schemes.component.html',
  styleUrls: ['./view-all-schemes.component.scss']
})
export class ViewAllSchemesComponent implements OnInit {
  public schemes: Schemes[] = [];

  constructor(private schemesService: SchemesService) { }

  ngOnInit(): void {
    this.getSchemes();
  }

  getSchemes(): void {
    this.schemesService.getSchemes()
    .subscribe(schemes => this.schemes = schemes);
  }
}


