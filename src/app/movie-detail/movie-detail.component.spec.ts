/**
 * Movie-detail's component unit tests
 *
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 *
 */

// Core's importations
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
// Component's importation
import {MovieDetailComponent} from './movie-detail.component';

describe('MovieDetailComponent', () => {
  let component : MovieDetailComponent;
  let fixture : ComponentFixture < MovieDetailComponent >;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({declarations: [MovieDetailComponent]})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
