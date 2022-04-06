import { ClientAdapter, FixedContext } from '@vodyani/core';

import { IoRedis, RedisOptions } from '../common';

export class RedisAdapter implements ClientAdapter {
  public instance: any;

  constructor(options: RedisOptions) {
    this.instance = new IoRedis(options);
  }

  @FixedContext
  public close() {
    return this.instance.disconnect();
  }
}
