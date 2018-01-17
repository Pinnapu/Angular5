import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([

{ path: 'component',
component: MyComponentComponent
},  

{  path:'product',
component: ProductComponent
}    

    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
