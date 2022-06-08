import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheAuctionPageComponent } from './the-auction-page.component';

describe('TheAuctionPageComponent', () => {
  let component: TheAuctionPageComponent;
  let fixture: ComponentFixture<TheAuctionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheAuctionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheAuctionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
