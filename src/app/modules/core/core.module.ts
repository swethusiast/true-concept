import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './containers/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceDetailsComponent } from './components/services/service-details/service-details.component';
import { ServiceListComponent } from './components/services/service-list/service-list.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './services/service.service';
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ServicesComponent,
    ServiceDetailsComponent,
    ServiceListComponent,
  ],
  providers: [ServiceService],
  imports: [CommonModule, CoreRoutingModule, HttpClientModule, FormsModule],
})
export class CoreModule {}
