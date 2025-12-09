import { Component } from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  ContainerComponent,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  RowComponent,
} from '@coreui/angular';
import { DefaultFooterComponent } from '../../../layout';
import { IconComponent } from '@coreui/icons-angular';

@Component({
  selector: 'app-party',
  imports: [
    CardHeaderComponent,
    IconComponent,
    ButtonDirective,
    CardComponent,
    CardBodyComponent,
    ColComponent,
    RowComponent,
    FormDirective,
    DefaultFooterComponent,
    FormControlDirective,
    FormLabelDirective,
    ContainerComponent
    // FormSelectDirective,
    // FormCheckComponent,
    // FormCheckInputDirective,
    // FormCheckLabelDirective,
    // ButtonDirective,
    // ColDirective,
    // InputGroupComponent,
    // InputGroupTextDirective,
  ],
  templateUrl: './party.component.html',
  styleUrl: './party.component.scss',
})
export class PartyComponent {}
