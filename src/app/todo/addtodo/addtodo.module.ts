import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddtodoPageRoutingModule } from './addtodo-routing.module';

import { AddtodoPage } from './addtodo.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    AddtodoPageRoutingModule
  ],
  declarations: [AddtodoPage]
})
export class AddtodoPageModule {}
