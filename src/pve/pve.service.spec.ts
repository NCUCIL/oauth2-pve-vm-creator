import { Test, TestingModule } from '@nestjs/testing';
import { PveService } from './pve.service';

describe('PveService', () => {
  let service: PveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PveService],
    }).compile();

    service = module.get<PveService>(PveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
