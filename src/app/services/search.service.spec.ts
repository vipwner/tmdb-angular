/**
 * Search's service unit tests
 *
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 *
 */

import {TestBed, inject} from '@angular/core/testing';
import {SearchService} from './search.service';

describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [SearchService]});
  });

  it('should be created', inject([SearchService], (service : SearchService) => {
    expect(service).toBeTruthy();
  }));
});
