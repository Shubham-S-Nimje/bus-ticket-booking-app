import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleProviderComponent } from './sample-provider.component';

describe('SampleProviderComponent', () => {
  let component: SampleProviderComponent;
  let fixture: ComponentFixture<SampleProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SampleProviderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
