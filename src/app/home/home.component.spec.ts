/**
 * Home's component unit tests
 *
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 *
 */

// Core importations
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
// Component's importation
import {HomeComponent} from './home.component';

describe('HomeComponent', () => {
  let component : HomeComponent;
  let fixture : ComponentFixture < HomeComponent >;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({declarations: [HomeComponent]})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
