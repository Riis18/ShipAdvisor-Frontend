import { TestBed } from '@angular/core/testing';

import { AuthloggedInGuard } from './authlogged-in.guard';

describe('AuthloggedInGuard', () => {
  let guard: AuthloggedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthloggedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
