import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { CommonModule } from '@angular/common';
import { AuthorsAddressComponent } from './components/authors-address/authors-address.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbarComponent,
    FooterComponent,
    AuthorsComponent,
    AuthorsAddressComponent,
  ],
  imports: [RouterModule, MaterialModule, CommonModule,HttpClientModule],
  exports: [
    ToolbarComponent,
    FooterComponent,
    MaterialModule,
    AuthorsComponent,
    AuthorsAddressComponent,
    HttpClientModule
  ],
})
export class SharedModule {}
