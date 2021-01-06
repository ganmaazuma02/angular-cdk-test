import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatDividerModule } from "@angular/material/divider";
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { ReactiveFormsModule } from '@angular/forms';

import { DropDownSearchComponent } from './drop-down-search/drop-down-search.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [DropDownSearchComponent, DialogComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    OverlayModule,
    MatSlideToggleModule,
    MatDividerModule,
    A11yModule,
    ReactiveFormsModule
  ],
  exports: [DropDownSearchComponent, DialogComponent]
})
export class OverlayExampleModule { }
