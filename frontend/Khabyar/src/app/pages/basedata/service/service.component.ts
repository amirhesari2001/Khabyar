import { Component } from '@angular/core';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, ContainerComponent, FooterComponent, FormControlDirective, FormDirective, FormLabelDirective, HeaderNavComponent, NavItemComponent, RowComponent } from '@coreui/angular';
import { IconComponent, IconModule } from '@coreui/icons-angular';
import { DefaultFooterComponent } from '../../../layout';

@Component({
  selector: 'app-service',
   imports: [
    IconModule,
    HeaderNavComponent,
    CardHeaderComponent,
    FooterComponent,
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
    ContainerComponent,
    NavItemComponent
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
})
export class ServiceComponent {

}
