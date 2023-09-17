
import openapiTS from 'openapi-typescript';
import { writeFileSync } from "fs";
// import jaYaml from 'js-yaml';


const createGen = async ()=> {
    const url = new URL('https://api.stoplight.io/projects/cHJqOjIwMTc4Nw/branches/main/export/core_v1.yaml');
    const output = await openapiTS(url);
    writeFileSync('./src/lib/api.model.ts',output)
}


createGen();
