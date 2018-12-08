/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { BackendService } from './backend.service';

describe('BackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        BackendService
      ]
    });
  });

  it('should ...', inject([BackendService], (service: BackendService) => {
    expect(service).toBeTruthy();
  }));
});
