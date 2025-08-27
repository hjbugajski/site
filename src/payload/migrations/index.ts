import * as migration_20241226_154624 from './20241226_154624';
import * as migration_20250827_153358 from './20250827_153358';

export const migrations = [
  {
    up: migration_20241226_154624.up,
    down: migration_20241226_154624.down,
    name: '20241226_154624',
  },
  {
    up: migration_20250827_153358.up,
    down: migration_20250827_153358.down,
    name: '20250827_153358'
  },
];
