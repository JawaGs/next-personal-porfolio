import { readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const COLORS =
  'slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose';

const RAW_PALETTE = new RegExp(
  `\\b(?:bg|text|border|ring|outline|shadow|from|via|to|fill|stroke|decoration|caret|divide)-(?:white|black|(?:${COLORS})-\\d{2,3})\\b`,
);
const HEX_VALUE = /#[0-9a-fA-F]{3,8}\b/;

const componentsDir = resolve('src/components');
const components = readdirSync(componentsDir, { recursive: true, encoding: 'utf8' }).filter(
  (file) => /\.tsx?$/.test(file) && !/\.test\.tsx?$/.test(file),
);

describe('design tokens', () => {
  it('finds the components to check', () => {
    expect(components.length).toBeGreaterThan(0);
  });

  it.each(components)('%s only uses tokens', (file) => {
    const source = readFileSync(join(componentsDir, file), 'utf8');

    expect(source).not.toMatch(RAW_PALETTE);
    expect(source).not.toMatch(HEX_VALUE);
  });
});
