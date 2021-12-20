const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const pdfkit = require("pdfkit");

function getPdf(url){
    request(url,cb);
    function cb(err,response,html){
        if(err){
            console.log(err);
        }else{
            let $=cheerio.load(html);

            let ParaSelectorArray=$("div~p");
            let liSelectorArray=$("h3~ul");
            
            let History="History :  ";
            let Ws="\n Use in Writing System  :  ";
            let Rc="\n Related Characters :  ";

            for(let i=2;i<10;i++)
            {
                History=History+$(ParaSelectorArray[i]).text();
            }

            for(let i=10;i<14;i++)
            {
                Ws=Ws+$(ParaSelectorArray[i]).text();
            }
            for(let i=0;i<4;i++)
            {
                Rc=Rc+$(liSelectorArray[i]).text();
            }

            // console.log(History);
            // console.log(Ws);
            // console.log(Rc);
            
            let txt=History+Ws+Rc;

            console.log(txt);

        let pdfDoc = new pdfkit();
        pdfDoc.pipe(fs.createWriteStream("Wikipedia 'S'.pdf"));
        pdfDoc.text(txt);
        pdfDoc.end();

        }
    }
}
module.exports = getPdf; 

        