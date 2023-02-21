import fs from 'node:fs/promises';
import path from 'path';
import { printSchema } from 'graphql';

import { schema } from '../src/schema/schema';

(async () => {
  const cwd = process.cwd();
  const compiledSchemaPath = path.join(cwd, 'graphql', 'schema.graphql');

  await fs.writeFile(compiledSchemaPath, printSchema(schema));

  process.exit(0);
})();