import { Component } from '@angular/core';

@Component({
  selector: 'donut-form',
  template: `
    <form class="donut-form" #form="ngForm"> 
      <pre>{{ form.value | json }}</pre>
    </form>
  `,
  styles: [
  ]
})
export class DonutFormComponent {

}
