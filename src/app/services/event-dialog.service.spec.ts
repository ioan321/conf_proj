import { TestBed, inject } from '@angular/core/testing';

import { EventDialogService } from './event-dialog.service';

describe('EventDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventDialogService]
    });
  });

  it('should be created', inject([EventDialogService], (service: EventDialogService) => {
    expect(service).toBeTruthy();
  }));
});
