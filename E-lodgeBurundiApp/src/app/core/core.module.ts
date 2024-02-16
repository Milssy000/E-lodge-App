import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';


import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [],
    imports: [CommonModule, CoreRoutingModule, HttpClientModule],
    providers: [

        DatePipe,
    ],
})
export class CoreModule {}
