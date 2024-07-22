import { CounterService } from './counter.service';
import { Counter2Service } from './counter2.service';
import { TestService } from './test.service';

export const counterFactory = {
  provide: Counter2Service,
  useFactory: (testSerivce: TestService) =>
    testSerivce.status ? new CounterService() : new Counter2Service(),
};
