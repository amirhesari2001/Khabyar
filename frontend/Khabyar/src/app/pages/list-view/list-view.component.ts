import { cilList, cilPlus, cilShieldAlt } from '@coreui/icons';
import { AgGridAngular } from 'ag-grid-angular';
import { Component } from '@angular/core';
import {
  ColDef,
  ColGroupDef,
  GridOptions,
  themeQuartz,
} from 'ag-grid-community';
import {
  ButtonDirective,
  ContainerComponent,
  FooterComponent,
  HeaderNavComponent,
} from '@coreui/angular';
import { IconDirective, IconModule, IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'app-list-view',
  imports: [
    AgGridAngular,
    FooterComponent,
    HeaderNavComponent,
    IconDirective,
    IconModule,
    ButtonDirective,
    ContainerComponent,
  ],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss',
})
export class ListViewComponent {
  columnDefs: (
    | ColDef<{ name: string; age: number; country: string }, any>
    | ColGroupDef<{ name: string; age: number; country: string }>
  )[] = [
    { field: 'name', headerName: "نام" },
    { field: 'age', headerName: "سن"},
    { field: 'country' },
    {
      headerName: 'Actions',
      cellRenderer: () => {
        return `
        <button data-action="edit" class="btn-edit">Edit</button>
        <button data-action="remove" class="btn-remove">Remove</button>
      `;
      },
      width: 150,
    },
  ];

  icons = { cilList, cilPlus, cilShieldAlt };

  gridTheme = themeQuartz;

  rowData = [
    { name: 'John', age: 24, country: 'USA' },
    { name: 'Ali', age: 32, country: 'Iran' },
    { name: 'Sara', age: 27, country: 'Turkey' },
  ];
}
