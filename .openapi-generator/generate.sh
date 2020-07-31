#!/bin/bash

npx @openapitools/openapi-generator-cli generate \
  -i https://api.pollination.cloud/sdk_openapi.json \
  -t .openapi-generator/templates/typescript-axios \
  -g typescript-axios \
  -o . \
  --skip-validate-spec \
  -c .openapi-generator/config.json