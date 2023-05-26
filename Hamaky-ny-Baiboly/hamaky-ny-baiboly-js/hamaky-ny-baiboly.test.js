const { hamaky_baiboly } = require("./hamaky-ny-baiboly");
// To lunch hamaky-ny-baiboly.test.js -> node hamaky-ny-baiboly.intern.test.js or npm run test

/*
// TOKO iray ihany
const boky = "1Pet";
const manomboka = { toko_faha: 5, andininy: 8 };
const hatramin = { toko_faha: 5, andininy: 9 };
*/
/*
// TOKO 2 mifanaraka
const boky = "gen";
const manomboka = { toko_faha: 1, andininy: 12 };
const hatramin = { toko_faha: 2, andininy: 6 };
*/
/*
// TOKO 3 mifanesy
const boky = "MALAKIA";
const manomboka = { toko_faha: 1, andininy: 1 };
const hatramin = { toko_faha: 3, andininy: 24 };
*/
// TOKO sy ANDALANA iray mitovy
const boky = "oha";
const manomboka = { toko_faha: 1, andininy: 5 };
const hatramin = { toko_faha: 1, andininy: 5 };

// Fomba fampiasa ny "hamaky_baiboly" voalohany
async function main() {
    try {
      const result = await hamaky_baiboly(boky, manomboka, hatramin);
      const vakiteny = result;
      console.log(vakiteny);
    } catch (error) {
      console.error(error);
    }
}
main();

/*
// Fomba fampiasa ny "hamaky_baiboly" faharoa
hamaky_baiboly(boky, manomboka, hatramin)
  .then(result => console.log(result))
  .catch(error => console.error(error));
*/