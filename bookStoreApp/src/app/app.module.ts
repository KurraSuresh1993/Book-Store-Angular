import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './public/components/about-us/about-us.component';
import { HowItWorksComponent } from './public/components/how-it-works/how-it-works.component';
import { HomeComponent } from './public/components/home/home.component';
import { CounterService } from './shared/services/counter.service';
import { Counter2Service } from './shared/services/counter2.service';
import { TestService } from './shared/services/test.service';
import { counterFactory } from './shared/services/counter.factory';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HowItWorksComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    //counterFactory,
    CounterService,
    Counter2Service,
    {
      provide: 'appTitle',
      useValue: {
        title: 'this is app title',
        description: 'this is title description',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
