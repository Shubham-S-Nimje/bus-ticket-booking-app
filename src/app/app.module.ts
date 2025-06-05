import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { provideHttpClient } from '@angular/common/http';
import { BusesComponent } from './pages/buses/buses.component';
import { TrainsComponent } from './pages/trains/trains.component';
import { FlightsComponent } from './pages/flights/flights.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { OffersComponent } from './pages/offers/offers.component';
import { TrackComponent } from './pages/track/track.component';
import { HelpComponent } from './pages/help/help.component';
import { AuthComponent } from './pages/auth/auth.component';
import { FooterComponent } from './components/footer/footer.component';
import { SampleProviderComponent } from './components/sample-provider/sample-provider.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, SearchComponent, BusesComponent, TrainsComponent, FlightsComponent, HotelsComponent, OffersComponent, TrackComponent, HelpComponent, AuthComponent, FooterComponent, SampleProviderComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
