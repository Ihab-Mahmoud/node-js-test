const { readFile, writeFile, readFileSync, writeFileSync } = require('fs');


const firstText = readFileSync("./build-in-modules/texts/for-sync/first-text.txt", "utf8")
const secondText = readFileSync("./build-in-modules/texts/for-sync/second-text.txt", "utf8")


writeFileSync("./build-in-modules/texts/newText.txt", `here is the result ${ firstText } + ${ secondText }`, { flag: 'a' })

console.log(firstText, secondText)

const { readFile, writeFile } = require('fs');

readFile("./build-in-modules/texts/for-async/first-text.txt", "utf8", (err, data) =>
{
    if (err)
    {
        console.error(err);;
        return
    }
    var firstText = data

    readFile("./build-in-modules/texts/for-async/second-text.txt", "utf8", (err, data) =>
    {
        if (err)
        {
            console.error(err);;
            return
        }
        var secondText = data

        writeFile("./build-in-modules/texts/for-async/second-text.txt", `here we go again ${ firstText }+++++++${ secondText }`, (err, data) =>
        {

            if (err)
            {
                console.error(err);;
                return
            }
        })
    })
});