import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-animalpage',
  templateUrl: './animalpage.component.html',
  styleUrls: ['./animalpage.component.css']
})
export class AnimalpageComponent implements OnInit, OnDestroy{
  public id: number = 0;
  private sub: any;
  constructor(private route: ActivatedRoute){

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];

      let animalImage = <HTMLImageElement>document.getElementById("animal-image");
      if (this.id===1){
        animalImage.src = "./../../assets/red-robin.jpg";
      }
      else if (this.id===2){
        animalImage.src = "./../../assets/raven.jpg";
      }
      else if (this.id===3){
        animalImage.src = "./../../assets/Pigeon.jpg";
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
