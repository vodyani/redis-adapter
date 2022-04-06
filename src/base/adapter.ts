import { ClientAdapter, FixedContext } from '@vodyani/core';

import { BaseRedis, RedisOptions } from '../common';

export class RedisAdapter implements ClientAdapter {
  public instance: any;

  constructor(options: RedisOptions) {
    this.instance = new BaseRedis(options);
  }

  @FixedContext
  public close() {
    return this.instance.disconnect();
  }
}
