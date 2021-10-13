import { Injectable } from '@angular/core';
import { Schemes,Gallery } from '../models/schemes';
import { Observable, of } from 'rxjs';
import { SCHEMES } from 'src/app/data/mock-schemes';
import { GALLERY } from '../data/mock-images';


@Injectable({
  providedIn: 'root'
})
export class SchemesService {

  constructor() { }

  getSchemes(): Observable<Schemes[]> {
    const schemess = of(SCHEMES);
    return schemess;
  }

  getImages(): Observable<Gallery[]> {
    const gallerys = of(GALLERY);
    return gallerys;
  }

  getSchemesById(id: number): Observable<Schemes> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const scheme = SCHEMES.find(h => h.id === id)!;
    return of(scheme);
  }



}
