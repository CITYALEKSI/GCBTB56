/*
=====================================
   GC: GCBTDFH
   Arkistoversio 1.4
=====================================
*/


const archive = {
    version: "1.4",
    author: "Webmaster",
    lastUpdate: "17.04.2001",
    visitors: 1337
};

const links = [
    "index.html",
    "kuvat.html",
    "vieraskirja.html",
    "linkit.html"
];

const browser = "Internet Explorer 5.5";
const resolution = "800x600";


const code = {};
code.ABBGH10 = true;

// ----------------------------------

console.log("Arkisto ladattu...");
console.log("Version:", archive.version);


const titles = [
    
    "*** TERVETULOA ***"
];

let i = 0;

setInterval(() => {
    document.title = titles[i];
    i = (i + 1) % titles.length;
}, 1500);
