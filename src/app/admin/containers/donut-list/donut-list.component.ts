import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';
import { RouterModule } from '@angular/router';
import { DonutCardComponent } from '../../components/donut-card/donut-card.component';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'donut-list',
  imports: [RouterModule, DonutCardComponent, NgIf, NgForOf],
  standalone: true,
  providers: [DonutService],
  template: `
    <div>
      <div class="donut-list-actions">
        <a routerLink="new" class="btn btn--green">
          New Donut
          <img src="/assets/img/icon/plus.svg" />
        </a>
      </div>

      <ng-container *ngIf="donuts?.length; else nothing">
        <donut-card
          *ngFor="let donut of donuts; index as i; trackBy: trackById"
          [donut]="donut"
        >
        </donut-card>
      </ng-container>

      <ng-template #nothing>
        <p>No Donuts here...</p>
      </ng-template>
    </div>
  `,
  styles: [
    `
      .donut-list {
        &-actions {
          margin-bottom: 10px;
        }
      }
    `,
  ],
})
export class DonutListComponent {
  donuts!: Donut[];

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    this.donutService.read().subscribe((donuts: Donut[]) => {
      this.donuts = donuts;
    });
  }

  trackById(index: number, value: Donut) {
    return value.id;
  }
}
