import { TestBed, inject } from '@angular/core/testing';

import { PedagogicStrategyService } from './pedagogic-strategy.service';

describe('PedagogicStrategyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PedagogicStrategyService]
    });
  });

  it('should be created', inject([PedagogicStrategyService], (service: PedagogicStrategyService) => {
    expect(service).toBeTruthy();
  }));
});
