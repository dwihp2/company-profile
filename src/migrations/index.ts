import * as migration_20250702_093121 from './20250702_093121';

export const migrations = [
  {
    up: migration_20250702_093121.up,
    down: migration_20250702_093121.down,
    name: '20250702_093121'
  },
];
