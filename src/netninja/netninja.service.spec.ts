import { Test, TestingModule } from '@nestjs/testing';
import { NetninjaService } from './netninja.service';

describe('NetninjaService', () => {
  let service: NetninjaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NetninjaService],
    }).compile();

    service = module.get<NetninjaService>(NetninjaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
