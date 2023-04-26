import { Test, TestingModule } from '@nestjs/testing';
import { VmController } from './vm.controller';
import { VmService } from './vm.service';

describe('VmController', () => {
  let controller: VmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VmController],
      providers: [VmService],
    }).compile();

    controller = module.get<VmController>(VmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
