/*
=====================================
   KÄTKÖN NIMI
   GC: GCBTB56
   Arkistoversio 1.4
=====================================
*/

// Arkiston tietoja
const archive = {
    version: "1.4",
    author: "Webmaster",
    lastUpdate: "17.04.2001",
    visitors: 1337
};

// Muutama turha muuttuja
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

// Vilkkuva otsikko selaimen välilehdessä
const titles = [
    "KÄTKÖN NIMI",
    "*** TERVETULOA ***"
];

let i = 0;

setInterval(() => {
    document.title = titles[i];
    i = (i + 1) % titles.length;
}, 1500);
