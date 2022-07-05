import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  
   _images:any[]=[];
   picture:string="";

   constructor() { }

  ngOnInit(): void {
    
    this._images = [
      { "title": "Image 1", "url": "/assets/angular2.jpg" },
      { "title": "Image 2", "url": "assets/Angular1.png" },
      { "title": "Image 3", "url": "assets/angular3.jpg" },
      { "title": "Image 4", "url": "assets/watch.jpg" }
  ]
  }

  onChange(event:any){
this.picture=event.target.value;
  }

}
