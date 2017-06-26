/**
 * Tv-detail's service unit tests
 *
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 *
 */

import {TestBed, inject} from '@angular/core/testing';
import {TvDetailService} from './tv-detail.service';

describe('TvDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [TvDetailService]});
  });

  it('should be created', inject([TvDetailService], (service : TvDetailService) => {
    expect(service).toBeTruthy();
  }));
});
