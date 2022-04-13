import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardTitle!: string;
  @Input() cardBody!: string;
  @Input() cardFooter?: string;
  @Input() cardImg?: {alt: string, src: string};

  constructor() { }

  ngOnInit(): void {
  }

}
