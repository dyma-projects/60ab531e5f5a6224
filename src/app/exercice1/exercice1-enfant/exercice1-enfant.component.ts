import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  public cpt: number = 0;
  @Output() private eventcompteur: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  increment() {
    this.eventcompteur.emit(++this.cpt);
  }
  decrement() {
    this.eventcompteur.emit(--this.cpt);
  }
}
