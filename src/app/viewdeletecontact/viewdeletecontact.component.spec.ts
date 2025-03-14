import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdeletecontactComponent } from './viewdeletecontact.component';

describe('ViewdeletecontactComponent', () => {
  let component: ViewdeletecontactComponent;
  let fixture: ComponentFixture<ViewdeletecontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewdeletecontactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewdeletecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
