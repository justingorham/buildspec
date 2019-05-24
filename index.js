const { exec } = require('child_process');

const theThing = async () => {
    const result = await exec.__promisify__('git branch')
    console.log(result);
}

theThing();