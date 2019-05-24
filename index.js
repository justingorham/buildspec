const { exec } = require('child_process');
const { EOL } = require('os')
const execp = (...args) => new Promise((res, rej) => {
    exec(...args, (err, stdout, stderr) => {
        return err ? rej(err) : res({ stdout, stderr });
    })
});

const theThing = async () => {
    const { CODEBUILD_RESOLVED_SOURCE_VERSION } = process.env;
    const { stdout } = await execp(`git branch -a --contains ${CODEBUILD_RESOLVED_SOURCE_VERSION}`)
    const lines = stdout.split(EOL);
    console.log(lines);
}

theThing();