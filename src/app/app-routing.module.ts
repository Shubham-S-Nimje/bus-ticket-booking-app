import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusesComponent } from './pages/buses/buses.component';
import { TrainsComponent } from './pages/trains/trains.component';
import { FlightsComponent } from './pages/flights/flights.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { OffersComponent } from './pages/offers/offers.component';
import { TrackComponent } from './pages/track/track.component';
import { HelpComponent } from './pages/help/help.component';
import { AuthComponent } from './pages/auth/auth.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'buses', component: BusesComponent },
  { path: 'trains', component: TrainsComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'track', component: TrackComponent },
  { path: 'help', component: HelpComponent },
  { path: 'auth', component: AuthComponent },
  { path: '**', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
