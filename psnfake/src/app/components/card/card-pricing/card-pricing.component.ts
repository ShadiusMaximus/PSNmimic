import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent {

  @Input()
  gameType:string="Muito Massa"
  @Input()
  gamePrice:string="$$$"

  constructor() {}
  ngOnInit(): void {
    }

}
