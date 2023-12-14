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
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
