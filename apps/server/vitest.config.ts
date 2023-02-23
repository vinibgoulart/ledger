import { defineConfig } from 'vitest/config'

export default defineConfig({
  test:{
    testNamePattern: /\.test.ts$/,
    passWithNoTests: true,
    environment: 'node'
  }
})