const Reader = require("./../../lib/utils/Reader");
describe("Unit Test for Reader Class", () => {

    test("Create a Reader -> readJsonFile(filePath)", () =>{
        const path = "explorers.json";
        const result = Reader.readJsonFile(path);
        expect(result).not.toBeUndefined();
    });
});
