import { Component, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  locations: Observable<any> = new Observable<any[]>();
  masterSrv = inject(MasterService);
  searchData = {
    from: 'nagpur',
    to: 'pune',
    date: new Date().toLocaleDateString(),
  };
  isDisplay: boolean = false;

  onClick() {
    if (this.isDisplay) {
      this.isDisplay = false;
    } else {
      this.isDisplay = true;
    }
  }

  ngOnInit(): void {
    this.getAllLocations();
  }

  getAllLocations() {
    this.locations = this.masterSrv.fetchAllLocations();
    this.locations.subscribe((data) => {
      console.log('Locations fetched:', data);
    });
  }

  searchBus() {
    const { from, to, date } = this.searchData;
    console.log('Searching for buses from', from, 'to', to);
    this.masterSrv.searchBus(from, to, date).subscribe((data) => {
      console.log('Search results:', data);
    });
  }
}
