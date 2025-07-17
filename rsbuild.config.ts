import { defineConfig } from '@rsbuild/core';

try {
  console.log(import.meta.env.PUBLIC_TEST);
  console.log(import.meta.env.TEST);
} catch {}

export default defineConfig({});
