import * as migration_20250702_093121 from './20250702_093121';
import * as migration_20250703_115059 from './20250703_115059';

export const migrations = [
  {
    up: migration_20250702_093121.up,
    down: migration_20250702_093121.down,
    name: '20250702_093121',
  },
  {
    up: migration_20250703_115059.up,
    down: migration_20250703_115059.down,
    name: '20250703_115059'
  },
];
