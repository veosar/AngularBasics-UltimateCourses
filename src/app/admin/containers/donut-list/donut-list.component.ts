import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-list',
  template: `
    <div>
      <ng-container *ngIf="donuts.length; else nothing">

      <donut-card *ngFor="let donut of donuts"
      [donut]="donut">
    </donut-card>  
      </ng-container>
      
      <ng-template #nothing>
        <p>No Donuts here...</p>
      </ng-template>
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
