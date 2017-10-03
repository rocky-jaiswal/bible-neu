'use strict';

const FS     = require('fs');
const Util   = require('util');
const Xml2JS = require('xml2js');

const Parser = new Xml2JS.Parser();

const xmlFileTOJSON = async (filename = 'bible-de') => {
  const readFile = Util.promisify(FS.readFile);
  const fileContents = await readFile(`${__dirname}/xml/${filename}.xml`);

  const parseString = Util.promisify(Parser.parseString);
  const result = await parseString(fileContents);

  const finalVerses = [];
  result['osis']['osisText'].map((raw) => {
    const divs = raw['div'];
    divs.forEach((d) => {
      const chapters = d['chapter'];
      chapters.forEach((c) => {
        const verses = c['verse'];
        verses.forEach((v) => {
          const info = v['$']['osisID'].split('.');
          finalVerses.push({ text: v['_'], book: info[0], chapter: info[1], verse: info[2] });
        });
      });
    });
  });

  console.log(finalVerses.length);
  const writeFile = Util.promisify(FS.writeFile);
  await writeFile(`${__dirname}/json/${filename}.json`, JSON.stringify(finalVerses));
  console.log('done!');
};

xmlFileTOJSON();

module.exports = {
  xmlFileTOJSON
}
