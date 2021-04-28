import { TestBed } from '@angular/core/testing';

import { MessagingRoomService } from './messaging-room.service';

describe('MessagingRoomService', () => {
  let service: MessagingRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagingRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
