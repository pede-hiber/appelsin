
const fs = require('fs');

const runTests = () => {
    let dd = "";
    dd += 'some result\n';
    fs.writeFileSync('./testresult.txt', dd, 'utf-8');
}

module.exports = ({tag}) => {
    runTests();
    console.log(`This example is different! tag=${tag}`);
    console.log('The result is displayed in the Command Line Interface');
    return 'another test result';
}
