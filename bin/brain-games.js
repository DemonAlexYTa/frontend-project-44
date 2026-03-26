#!/usr/bin/env node
import { greet } from '../src/cli.js'

function app() {
  console.log('Welcome to the Brain Games!')

  greet()
}

app()
