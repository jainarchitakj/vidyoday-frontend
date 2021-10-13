import { Component, OnInit } from '@angular/core';
import { SchemesService } from 'src/app/services/schemes.service';
import { Gallery } from 'src/app/models/schemes';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public images: Gallery[] = [
    {
      galleryImg:'https://dl.dropboxusercontent.com/s/cqmuif1wdsqd475/WhatsApp%20Image%202021-08-11%20at%2010.15.20.jpeg?dl=0'
  },
  {
      galleryImg:'https://dl.dropboxusercontent.com/s/2tvgjeponpf31vp/WhatsApp%20Image%202021-08-11%20at%2010.15.20%20%281%29.jpeg?dl=0'
  },
  {
      galleryImg:'https://dl.dropboxusercontent.com/s/qw2lbsv6d1rym9w/WhatsApp%20Image%202021-08-10%20at%2016.27.29.jpeg?dl=0'
  },
  {
      galleryImg:'https://dl.dropboxusercontent.com/s/uuuu3irc29ibwtd/WhatsApp%20Image%202021-08-10%20at%2016.27.30%20%281%29.jpeg?dl=0'
  },
  {
      galleryImg:'https://dl.dropboxusercontent.com/s/ez92p3au5pquq9b/WhatsApp%20Image%202021-08-10%20at%2016.27.30%20%282%29.jpeg?dl=0'
  },
  {
      galleryImg:'https://dl.dropboxusercontent.com/s/q70579nmvrze5ix/WhatsApp%20Image%202021-08-10%20at%2016.27.30%20%289%29.jpeg?dl=0'
  },
  {
      galleryImg:'https://dl.dropboxusercontent.com/s/kqndc8f1z5ycx52/WhatsApp%20Image%202021-08-10%20at%2016.27.30%20%287%29.jpeg?dl=0'
  },
  {
      galleryImg:'https://dl.dropboxusercontent.com/s/047wzgj7jw9rjxk/WhatsApp%20Image%202021-08-10%20at%2016.27.30%20%288%29.jpeg?dl=0'
  },
  {
      galleryImg:'https://dl.dropboxusercontent.com/s/zazno6p343xme5s/WhatsApp%20Image%202021-08-10%20at%2016.27.30%20%2810%29.jpeg?dl=0'
  },
  ];

  constructor(private schemesService: SchemesService) { }

  ngOnInit(): void {
    console.log(this.images);
  }

 
}
