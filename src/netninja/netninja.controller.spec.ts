import { Test, TestingModule } from '@nestjs/testing';
import { NetninjaController } from './netninja.controller';

describe('NetninjaController', () => {
  let controller: NetninjaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NetninjaController],
    }).compile();

    controller = module.get<NetninjaController>(NetninjaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
