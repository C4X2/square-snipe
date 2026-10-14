import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Locate package.json in the project root
const packageJsonPath = path.resolve(__dirname, '../package.json');

try {
  const rawData = fs.readFileSync(packageJsonPath, 'utf8');
  const pkg = JSON.parse(rawData);

  const currentVersion = pkg.version || '0.0.0';
  const parts = currentVersion.split('.').map((num) => parseInt(num, 10) || 0);

  const major = parts[0] ?? 0;
  const minor = (parts[1] ?? 0) + 1;
  const patch = 0;

  const nextVersion = `${major}.${minor}.${patch}`;
  pkg.version = nextVersion;

  fs.writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
  console.log(`Successfully bumped version from ${currentVersion} to ${nextVersion} in package.json`);
} catch (error) {
  console.error('Failed to bump package.json version:', error);
  process.exit(1);
}