class Reader {
    static readJsonFile(path){
        const fs = require("fs");
        const rawdata = fs.readFileSync(path);
        const visualpartners = JSON.parse(rawdata);
        return visualpartners;
    }

}
module.exports = Reader;
