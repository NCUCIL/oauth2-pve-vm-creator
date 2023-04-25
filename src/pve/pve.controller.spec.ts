import { Test, TestingModule } from '@nestjs/testing';
import { PveController } from './pve.controller';
import { PveService } from './pve.service';

describe('PveController', () => {
  let controller: PveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PveController],
      providers: [PveService],
    }).compile();

    controller = module.get<PveController>(PveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
