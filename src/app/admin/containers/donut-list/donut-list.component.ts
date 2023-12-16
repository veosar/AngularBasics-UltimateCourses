import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-list',
  template: `
    <div>
      <donut-card [donut]="donuts[0]"></donut-card>      
      <donut-card [donut]="donuts[1]"></donut-card>  
      <donut-card [donut]="donuts[2]"></donut-card>  
    </div>
  `,
  styles: [  ]
})
export class DonutListComponent {
  donuts!: Donut[];

  constructor() {}

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'y8z0As',
        name: 'Just chocolate',
        icon: 'just-chocolate',
        price: 119,        
        description: 'For the pure chocoholic.'
      },
      {
        id: '3u98Kl',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        promo: true,
        description: 'Sticky perfection.'
      },
      {
        id: 'a3098s',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 129,
        description: 'Chocolate drizzled with caramel.'
      }
    ];
  }
}
