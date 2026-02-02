import * as migration_20241226_154624 from './20241226_154624';
import * as migration_20250827_153358 from './20250827_153358';
import * as migration_20251101_180529 from './20251101_180529';
import * as migration_20251116_213507 from './20251116_213507';
import * as migration_20260202_233758_blocks_as_json from './20260202_233758_blocks_as_json';

export const migrations = [
  {
    up: migration_20241226_154624.up,
    down: migration_20241226_154624.down,
    name: '20241226_154624',
  },
  {
    up: migration_20250827_153358.up,
    down: migration_20250827_153358.down,
    name: '20250827_153358',
  },
  {
    up: migration_20251101_180529.up,
    down: migration_20251101_180529.down,
    name: '20251101_180529',
  },
  {
    up: migration_20251116_213507.up,
    down: migration_20251116_213507.down,
    name: '20251116_213507',
  },
  {
    up: migration_20260202_233758_blocks_as_json.up,
    down: migration_20260202_233758_blocks_as_json.down,
    name: '20260202_233758_blocks_as_json'
  },
];
