const fs = require('fs');
const prompts = require('prompts');
const zip = require('bestzip');
const uuid = require('uuid');
const axios = require('axios');
const pack = require('./package.json');

const MIS_BASE_URL = 'https://lajward-mis.dev:3002/developer/module/deploy_frontend';

const entry = async () => {
    const { buildDir } = await prompts({
        type: 'text',
        name: 'buildDir',
        message: 'Enter the build directory',
        initial: 'dist',
    });

    const { devKey } = await prompts({
        type: 'text',
        name: 'devKey',
        message: 'Enter your dev key',
        initial: 'XXX-XXX',
    });

    const projectName = pack.name;

    const zipFileName = `${projectName}-${uuid.v4()}.zip`;

    process.chdir(buildDir);
    await zip({
        source: "./*",
        destination: "../" + zipFileName,
    });
    process.chdir('..');

    const formData = new FormData();
    const binaryFile = new Blob([fs.readFileSync(zipFileName)], { type: 'application/zip' });
    formData.append("file", binaryFile, {
        filename: "file.zip",
        contentType: "application/octet-stream"
    });
    formData.set('dev_key', devKey);
    formData.set('module_name', projectName);
    const response = await axios.post(MIS_BASE_URL, formData, {
        'Content-Type': 'multipart/form-data',
    });

    if ( response.status !== 200 ) {
        console.log('Error deploying the module');
        console.log(response.data);
    } else console.log('Module deployed successfully');

    fs.unlinkSync(`./${zipFileName}`);
};

entry();

