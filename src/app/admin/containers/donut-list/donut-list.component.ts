import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'donut-list',
  template: `
    <div>
      <ng-container *ngIf="donuts.length; else nothing">

      <donut-card *ngFor="let donut of donuts; index as i; trackBy: trackById"
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

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    this.donuts = this.donutService.read();
  }

  trackById(index: number, value: Donut) {
    return value.id;
  }
}
