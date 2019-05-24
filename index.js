const { exec } = require('child_process');
const execp = (...args) => new Promise((res, rej) => {
    exec(...args, (err, stdout, stderr) => {
        return err ? rej(err) : res({ stdout, stderr });
    })
});

const theThing = async () => {
    const { CODEBUILD_RESOLVED_SOURCE_VERSION } = process.env;
    const result = await execp(`git branch -a --contains ${CODEBUILD_RESOLVED_SOURCE_VERSION}`)
    console.log(result);
}

theThing();