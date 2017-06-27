/**
 * People's service unit tests
 *
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 *
 */

import {TestBed, inject} from '@angular/core/testing';
import {PeopleService} from './people.service';

describe('PeopleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [PeopleService]});
  });

  it('should be created', inject([PeopleService], (service : PeopleService) => {
    expect(service).toBeTruthy();
  }));
});
