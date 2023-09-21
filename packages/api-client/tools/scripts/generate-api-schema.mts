import { OpenAPI3 } from 'openapi-typescript';
import { readFileSync, writeFile, writeFileSync } from 'fs';
import { JSON_SCHEMA, load } from 'js-yaml';
import fetch from 'node-fetch';
import { Liquid } from 'liquidjs';
import { resolve } from 'path';
import * as openApiCodegen from 'openapi-typescript-codegen';


const engine = new Liquid({
  root: resolve('.', 'templates/'),
  extname: '.liquid'
});

const createOpenApiGenerator =async (isRemote =true) => {

  let openApiYaml;
  if (isRemote) {
    openApiYaml = await fetch('https://api.stoplight.io/projects/cHJqOjIwMTc4Nw/branches/main/export/core_v1.yaml')
      .then((res) => res.text());
  } else {
    openApiYaml = readFileSync('./tools/scripts/core_v1.yaml');
  }

  const spec = load(openApiYaml, {
    schema: JSON_SCHEMA
  }) as OpenAPI3;

  await openApiCodegen.generate({
    input: spec,
    httpClient: 'axios',
    output: './src/lib/v1',
    clientName: 'ClientV1',
    indent: '2',
  });
  const clientCodeTemplate: string = await engine.renderFileSync('client-v1');
  const AxiosHttpRequestCodeTemplate: string = await engine.renderFileSync('axios-http-request');
  writeFileSync('./src/lib/v1/ClientV1.ts', clientCodeTemplate);
  writeFileSync('./src/lib/v1/core/AxiosHttpRequest.ts', AxiosHttpRequestCodeTemplate)


};


createOpenApiGenerator();