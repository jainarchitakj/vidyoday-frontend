import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchemesService } from 'src/app/services/schemes.service';
import { Schemes } from 'src/app/models/schemes';


@Component({
  selector: 'app-view-scheme-by-id',
  templateUrl: './view-scheme-by-id.component.html',
  styleUrls: ['./view-scheme-by-id.component.scss']
})
export class ViewSchemeByIdComponent implements OnInit {
  scheme: Schemes | undefined;


  constructor(private route: ActivatedRoute, private schemesService: SchemesService) { }

  ngOnInit():void {
    this.getSchemes();

  }

  getSchemes(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.schemesService.getSchemesById(id)
      .subscribe(scheme => this.scheme = scheme);
      console.log(id);
  }

}
