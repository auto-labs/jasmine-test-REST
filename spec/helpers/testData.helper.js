global.getData = function (fileName) {
    let fs = require('fs');
    let env = JSON.parse(fs.readFileSync('env.json')).environment;
    let data = fs.readFileSync('./config/data/' + env + '/' + fileName);
    data = JSON.parse(data);
    global.jsonData = data;
}
