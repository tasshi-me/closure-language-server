#!/usr/bin/env node

import {
  createConnection,
  InitializeParams,
  InitializeResult,
  ProposedFeatures,
} from "vscode-languageserver/node.js";

const connection = createConnection(ProposedFeatures.all);

connection.onInitialize((_params: InitializeParams): InitializeResult => {
  return {
    capabilities: {},
  };
});

connection.listen();
