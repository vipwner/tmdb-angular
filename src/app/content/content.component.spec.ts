/**
 * Content's component unit tests
 *
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 *
 */
// Core imports
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
// Component import
import {ContentComponent} from './content.component';

describe('ContentComponent', () => {
  let component : ContentComponent;
  let fixture : ComponentFixture < ContentComponent >;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({declarations: [ContentComponent]})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
