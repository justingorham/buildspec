const { exec } = require('child_process');
const execp = (...args) => new Promise((res, rej) => {
    exec(...args, (err, stdout, stderr) => {
        return err ? rej(err) : res({ stdout, stderr });
    })
});

const theThing = async () => {
    const result = await execp('git branch')
    console.log(result);
}

theThing();