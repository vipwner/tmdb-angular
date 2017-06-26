/**
 * Tv shows' service unit tests
 *
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 *
 */

import {TestBed, inject} from '@angular/core/testing';
import {TvService} from './tv.service';

describe('TvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [TvService]});
  });

  it('should be created', inject([TvService], (service : TvService) => {
    expect(service).toBeTruthy();
  }));
});
