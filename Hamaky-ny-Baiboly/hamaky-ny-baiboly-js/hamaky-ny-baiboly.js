//import fetch from 'node-fetch';
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const genesisy = "genesisy", gen = ["genesisy", "gen"],
        eksodosy = "eksodosy", eks = ["eksodosy", "eks"],
        levitikosy = "levitikosy", lev = ["levitikosy", "lev"],
        nomery = "nomery", nom = ["nomery", "nom"],
        deoteronomia = "deoteronomia", deo = ["deoteronomia", "deo"],
        josoa = "josoa", jos = ["josoa", "jos"],
        mpitsara = "mpitsara", mpits = ["mpitsara", "mpits"],
        rota = "rota", rot = ["rota", "rot"],
        samoela_1 = "1-samoela", sam_1 = ["samoela 1", "1 samoela", "1 sam", "sam 1", "1sam", "sam1"],
        samoela_2 = "2-samoela", sam_2 = ["samoela 2", "2 samoela", "2 sam", "sam 2", "2sam", "sam2"],
        mpanjaka_1 = "1-mpanjaka", mpa_1 = ["mpanjaka 1", "1 mpanjaka", "1 mpa", "mpa 1", "1mpa", "mpa1"],
        mpanjaka_2 = "2-mpanjaka",  mpa_2 = ["mpanjaka 2", "2 mpanjaka", "2 mpa", "mpa 2", "2mpa", "mpa2"],
        tantara_1 = "1-tantara",  tan_1 = ["tantara 1", "1 tantara", "1 tan", "tan 1", "1tan", "tan1"],
        tantara_2 = "2-tantara", tan_2 = ["tantara 2", "2 tantara", "2 tan", "tan 2", "2tan", "tan1"],
        ezra = "ezra", ezr = ["ezra", "ezr"],
        nehemia = "nehemia", neh = ["nehemia", "neh"],
        estera = "estera", est = ["estera", "est"],
        joba = "joba", job = ["joba", "job"],
        salamo = "salamo", sal = ["salamo", "sal"],
        ohabolana = "ohabolana", oha = ["ohabolana", "oha"],
        mpitoriteny = "mpitoriteny", mpi = ["mpitoriteny", "mpi"],
        tononkiran_i_solomona = "tononkiran-i-solomona", sol = ["tononkiran'i solomona", "sol"],
        isaia = "isaia", isa = ["isaia", "isa"],
        jeremia = "jeremia", jer = ["jeremia", "jer"],
        fitomaniana = "fitomaniana", fit = ["fitomaniana", "fit"],
        ezekiela = "ezekiela", eze = ["ezekiela", "eze"],
        daniela = "daniela", dan = ["daniela", "dan"],
        hosea = "hosea", hos = ["hosea", "hos"],
        joela = "joela", joe = ["joela", "joe"],
        amosa = "amosa", amo = ["amosa", "amo"],
        obadia = "obadia", oba = ["obadia", "oba"],
        jona = "jona", jon = ["jona", "jon"],
        mika = "mika", mik = ["mika", "mik"],
        nahoma = "nahoma", nah = ["nahoma", "nah"],
        habakoka = "habakoka", hab = ["habakoka", "hab"],
        zefania = "zefania", zef = ["zefania", "zef"],
        hagay = "hagay", hag = ["hagay", "hag"],
        zakaria = "zakaria", zak = ["zakaria", "zak"],
        malakia = "malakia", mal = ["malakia", "mal"],
        matio = "matio", mat = ["matio", "mat"],
        marka = "marka", mar = ["marka", "mar"],
        lioka = "lioka", lio = ["lioka", "lio"],
        jaona = "jaona", jao = ["jaona", "jao"],
        asan_ny_apostoly = "asan-ny-apostoly", asa = ["asan'ny apostoly", "asa"],
        romana = "romana", rom = ["romana", "rom"],
        korintiana_1 = "1-korintiana", kor_1 = ["korintiana 1", "1 korintiana", "1 kor", "kor 1", "1kor", "kor1"],
        korintiana_2 = "2-korintiana", kor_2 = ["korintiana 2", "2 korintiana", "2 kor", "kor 2", "2kor", "kor2"],
        galatiana = "galatiana", gal = ["galatiana", "gal"],
        efesiana = "efesiana", efe = ["efesiana", "efe"],
        filipiana = "filipiana", fili = ["filipiana", "fili"],
        kolosiana = "kolosiana", kol = ["kolosiana", "kol"],
        tesaloniana_1 = "1-tesaloniana", tes_1 = ["tesaloniana 1", "1 tesaloniana", "1 tes", "tes 1", "1tes", "tes1"],
        tesaloniana_2 = "2-tesaloniana", tes_2 = ["tesaloniana 2", "2 tesaloniana", "2 tes", "tes 2", "2tes", "tes2"],
        timoty_1 = "1-timoty", tim_1 =["timoty 1", "1 timoty", "1 tim", "tim 1", "1tim", "tim1"],
        timoty_2 = "2-timoty", tim_2 =["timoty 2", "2 timoty", "2 tim", "tim 2", "2tim", "tim2"],
        titosy = "titosy", tit = ["titosy", "tit"],
        filemona = "filemona", file = ["filemona", "file"],
        hebreo = "hebreo", heb = ["hebreo", "heb"],
        jakoba = "jakoba", jak = ["jakoba", "jak"],
        petera_1 = "1-petera", pet_1 =["petera 1", "1 petera", "1 pet", "pet 1", "1pet", "pet1"],
        petera_2 = "2-petera", pet_2 =["petera 2", "2 petera", "2 pet", "pet 2", "2pet", "pet2"],
        jaona_1 = "1-jaona", jao_1 =["jaona 1", "1 jaona", "1 jao", "jao 1", "1jao", "jao1"],
        jaona_2 = "2-jaona", jao_2 =["jaona 2", "2 jaona", "2 jao", "jao 2", "2jao", "jao2"],
        jaona_3 = "3-jaona", jao_3 =["jaona 3", "3 jaona", "3 jao", "jao 3", "3jao", "jao3"],
        joda = "joda", jod = ["joda", "jod"],
        apokalypsy = "apokalypsy", apo = ["apokalypsy", "apo"];


const baiboly = {};
baiboly["Testamenta-Taloha"] = [genesisy, eksodosy, levitikosy, nomery, deoteronomia, josoa, mpitsara, rota, samoela_1, samoela_2, mpanjaka_1, mpanjaka_2, tantara_1, tantara_2, ezra, nehemia, estera, joba, salamo, ohabolana, mpitoriteny, tononkiran_i_solomona, isaia, jeremia, fitomaniana, ezekiela, daniela, hosea, joela, amosa, obadia, jona, mika, nahoma, habakoka, zefania, hagay, zakaria, malakia];
baiboly["Testamenta-Vaovao"] = [matio, marka, lioka, jaona, asan_ny_apostoly, romana, korintiana_1, korintiana_2, galatiana, efesiana, filipiana, kolosiana, tesaloniana_1, tesaloniana_2, timoty_1, timoty_2, titosy, filemona, hebreo, jakoba, petera_1, petera_2, jaona_1, jaona_2, jaona_3, joda, apokalypsy];

// Mamerina ny anaran'ny format json mifandraika amin'ny paramètre mitondra ny lohatenin'ilay boky nomena
function hakaNyBoky(boky){
    boky = boky.toLowerCase();
    //console.log(boky);
    if (gen.includes(boky)) {
        return genesisy;
    } else if(eks.includes(boky)) {
        return eksodosy;
    } else if(lev.includes(boky)) {
        return levitikosy;
    } else if(nom.includes(boky)) {
        return nomery;
    } else if(deo.includes(boky)) {
        return deoteronomia;
    } else if(jos.includes(boky)) {
        return josoa;
    } else if(mpits.includes(boky)) {
        return mpitsara;
    } else if(rot.includes(boky)) {
        return rota;
    } else if(sam_1.includes(boky)) {
        return samoela_1;
    } else if(sam_2.includes(boky)) {
        return samoela_2;
    } else if(mpa_1.includes(boky)) {
        return mpanjaka_1;
    } else if(mpa_2.includes(boky)) {
        return mpanjaka_2;
    } else if(tan_1.includes(boky)) {
        return tantara_1;
    } else if(tan_2.includes(boky)) {
        return tantara_2;
    } else if(ezr.includes(boky)) {
        return ezra;
    } else if(neh.includes(boky)) {
        return nehemia;
    } else if(est.includes(boky)) {
        return estera;
    } else if(job.includes(boky)) {
        return joba;
    } else if(sal.includes(boky)) {
        return salamo;
    } else if(oha.includes(boky)) {
        return ohabolana;
    } else if(mpi.includes(boky)) {
        return mpitoriteny;
    } else if(sol.includes(boky)) {
        return tononkiran_i_solomona;
    } else if(isa.includes(boky)) {
        return isaia;
    } else if(jer.includes(boky)) {
        return jeremia;
    } else if(fit.includes(boky)) {
        return fitomaniana;
    } else if(eze.includes(boky)) {
        return ezekiela;
    } else if(dan.includes(boky)) {
        return daniela;
    } else if(hos.includes(boky)) {
        return hosea;
    } else if(joe.includes(boky)) {
        return joela;
    } else if(amo.includes(boky)) {
        return amosa;
    } else if(oba.includes(boky)) {
        return joba;
    } else if(jon.includes(boky)) {
        return jona;
    } else if(mik.includes(boky)) {
        return mika;
    } else if(nah.includes(boky)) {
        return nahoma;
    } else if(hab.includes(boky)) {
        return habakoka;
    } else if(zef.includes(boky)) {
        return zefania;
    } else if(hag.includes(boky)) {
        return hagay;
    } else if(zak.includes(boky)) {
        return zakaria;
    } else if(mal.includes(boky)) {
        return malakia;
    } else if(mat.includes(boky)) {
        return matio;
    } else if(mar.includes(boky)) {
        return marka;
    } else if(lio.includes(boky)) {
        return lioka;
    } else if(jao.includes(boky)) {
        return jaona;
    } else if(asa.includes(boky)) {
        return asan_ny_apostoly;
    } else if(rom.includes(boky)) {
        return romana;
    } else if(kor_1.includes(boky)) {
        return korintiana_1;
    } else if(kor_2.includes(boky)) {
        return korintiana_2;
    } else if(gal.includes(boky)) {
        return galatiana;
    } else if(efe.includes(boky)) {
        return efesiana;
    } else if(fili.includes(boky)) {
        return filipiana;
    } else if(kol.includes(boky)) {
        return kolosiana;
    } else if(tes_1.includes(boky)) {
        return tesaloniana_1;
    } else if(tes_2.includes(boky)) {
        return tesaloniana_2;
    } else if(tim_1.includes(boky)) {
        return timoty_1;
    } else if(tim_2.includes(boky)) {
        return timoty_2;
    } else if(tit.includes(boky)) {
        return titosy;
    } else if(file.includes(boky)) {
        return filemona;
    } else if(heb.includes(boky)) {
        return hebreo;
    } else if(jak.includes(boky)) {
        return jakoba;
    } else if(pet_1.includes(boky)) {
        return petera_1;
    } else if(pet_2.includes(boky)) {
        return petera_2;
    } else if(jao_1.includes(boky)) {
        return jaona_1;
    } else if(jao_2.includes(boky)) {
        return jaona_2;
    } else if(jao_3.includes(boky)) {
        return jaona_3;
    } else if(jod.includes(boky)) {
        return joda;
    } else if(apo.includes(boky)) {
        return apokalypsy;
    }
}

// Mamerina ny tena anaran'ilay boky
function hakaNyAnaranBoky(boky){
    if (boky===genesisy) {
        return "Genesisy";
    } else if(boky===eksodosy) {
        return "Eksodosy";
    } else if(boky===levitikosy) {
        return "Levitikosy";
    } else if(boky===nomery) {
        return "Nomery";
    } else if(boky===deoteronomia) {
        return "Deoteronomia";
    } else if(boky===josoa) {
        return "Josoa";
    } else if(boky===mpitsara) {
        return "Mpitsara";
    } else if(boky===rota) {
        return "Rota";
    } else if(boky===samoela_1) {
        return "1 Samoela";
    } else if(boky===samoela_2) {
        return "2 Samoela";
    } else if(boky===mpanjaka_1) {
        return "1 Mpanjaka";
    } else if(boky===mpanjaka_2) {
        return "2 Mpanjaka";
    } else if(boky===tantara_1) {
        return "1 Tantara";
    } else if(boky===tantara_2) {
        return "2 Tantara";
    } else if(boky===ezra) {
        return "Ezra";
    } else if(boky===nehemia) {
        return "Nehemia";
    } else if(boky===estera) {
        return "Estera";
    } else if(boky===joba) {
        return "Joba";
    } else if(boky===salamo) {
        return "Salamo";
    } else if(boky===ohabolana) {
        return "Ohabolana";
    } else if(boky===mpitoriteny) {
        return "Mpitoriteny";
    } else if(boky===tononkiran_i_solomona) {
        return "Tononkiran'i Solomona";
    } else if(boky===isaia) {
        return "Isaia";
    } else if(boky===jeremia) {
        return "Jeremia";
    } else if(boky===fitomaniana) {
        return "Fitomaniana";
    } else if(boky===ezekiela) {
        return "Ezekiela";
    } else if(boky===daniela) {
        return "Daniela";
    } else if(boky===hosea) {
        return "Hosea";
    } else if(boky===joela) {
        return "Joela";
    } else if(boky===amosa) {
        return "Amosa";
    } else if(boky===joba) {
        return "Joba";
    } else if(boky===jona) {
        return "Jona";
    } else if(boky===mika) {
        return "Mika";
    } else if(boky===nahoma) {
        return "Nahoma";
    } else if(boky===habakoka) {
        return "Habakoka";
    } else if(boky===zefania) {
        return "Zefania";
    } else if(boky===hagay) {
        return "Hagay";
    } else if(boky===zakaria) {
        return "Zakaria";
    } else if(boky===malakia) {
        return "Malakia";
    } else if(boky===matio) {
        return "Matio";
    } else if(boky===marka) {
        return "Marka";
    } else if(boky===lioka) {
        return "Lioka";
    } else if(boky===jaona) {
        return "Jaona";
    } else if(boky===asan_ny_apostoly) {
        return "Asan'ny Apostoly";
    } else if(boky===romana) {
        return "Romana";
    } else if(boky===korintiana_1) {
        return "1 Korintiana";
    } else if(boky===korintiana_2) {
        return "2 Korintiana";
    } else if(boky===galatiana) {
        return "Galatiana";
    } else if(boky===efesiana) {
        return "Efesiana";
    } else if(boky===filipiana) {
        return "Filipiana";
    } else if(boky===kolosiana) {
        return "Kolosiana";
    } else if(boky===tesaloniana_1) {
        return "1 Tesaloniana";
    } else if(boky===tesaloniana_2) {
        return "2 Tesaloniana";
    } else if(boky===timoty_1) {
        return "1 Timoty";
    } else if(boky===timoty_2) {
        return "2 Timoty";
    } else if(boky===titosy) {
        return "Titosy";
    } else if(boky===filemona) {
        return "Filemona";
    } else if(boky===hebreo) {
        return "Hebreo";
    } else if(boky===jakoba) {
        return "Jakoba";
    } else if(boky===petera_1) {
        return "1 Petera";
    } else if(boky===petera_2) {
        return "2 Petera";
    } else if(boky===jaona_1) {
        return "1 Jaona";
    } else if(boky===jaona_2) {
        return "2 Jaona";
    } else if(boky===jaona_3) {
        return "3 Jaona";
    } else if(boky===joda) {
        return "Joda";
    } else if(boky===apokalypsy) {
        return "Apokalypsy";
    }else {
        return null;
    }
}

// Mamerina ny sokajy (Testament Taloha ve sa Testamenta Vaovao ?) mifandraika amin'ny boky nomena
function hakaNySokajin(boky) {
    for (const sokajy in baiboly) {
      if (baiboly.hasOwnProperty(sokajy)) {
        const ireo_boky = baiboly[sokajy];
        if (ireo_boky.includes(boky)) {
          return sokajy;
        }
      }
    }
    return null;
}


// Ohatra amin'ny initialisation ny paramètre
// const boky = "1Pet";
// const manomboka = { toko_faha: 5, andininy: 8 };
// const hatramin = { toko_faha: 5, andininy: 9 };
async function hamaky_baiboly(boky, manomboka, hatramin) {
    boky = hakaNyBoky(boky);
    const anaran_boky = hakaNyAnaranBoky(boky);
    const sokajy = hakaNySokajin(boky);
    const url = `https://raw.githubusercontent.com/Sambatra-Andriamihaja/FJKM/main/Baiboly-sy-Fihirana/Baiboly/${sokajy}/${boky}.json`;
    // console.log("URL :"+url);
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        let vakiteny = "";

        const toko_anombohana = manomboka.toko_faha,
                andininy_toko_anombohana = manomboka.andininy,
                toko_amaranana = hatramin.toko_faha,
                andininy_toko_amaranana = hatramin.andininy;
        
        // maka ireo andalana ao amin'ny baiboly manomboka toko_faha..., andininy ... hatramin toko_faha..., andininy ...
        let teny_vakiana = [],
            isan_toko_manelanelana = toko_amaranana - toko_anombohana;
        // Tafiditra ato amin'ity condition ity raha toa ka misy elanelany be eo amin'ireo toko anombohana sy toko amaranana
        if(isan_toko_manelanelana>1){
            // mitahiry ireo andalana rehetra manomboko amin'ny andininy anombohana ao amin'ny toko anombohana
            vakiteny = anaran_boky + " " + toko_anombohana + "\n"; 
            let isan_andininy_amin_toko_anombohana = Object.keys(data[""+toko_anombohana]).length;
            for(let i = andininy_toko_anombohana; i<= isan_andininy_amin_toko_anombohana; i++){
                teny_vakiana.push(""+i+ ". "+ data[""+toko_anombohana][""+i]);
            }
            vakiteny = vakiteny + teny_vakiana.join(" ");
            teny_vakiana = [];

            // mitahiry ireo andalana rehetra ao amin'ireo/ny toko manelanelana ny toko anombohana sy ny toko amaranana
            let toko_manaraka = toko_anombohana + 1;
            vakiteny += "\n" + anaran_boky + " " + toko_manaraka + "\n"; 
            while(toko_manaraka<toko_amaranana){
                let isan_andininy_amin_toko = Object.keys(data[""+toko_manaraka]).length;
                for(let i = 1; i<= isan_andininy_amin_toko; i++){
                    teny_vakiana.push(""+i+ ". "+ data[""+toko_manaraka][""+i]);
                }
                toko_manaraka++;
            }
            vakiteny = vakiteny + teny_vakiana.join(" ");
            teny_vakiana = [];       

            // mitahiry ireo andalana rehetra ka hatramin'ny andininy amaranana azy ao amin'ny toko amaranana
            vakiteny += "\n" + anaran_boky + " " + toko_amaranana + "\n"; 
            for(let i = 1; i<= andininy_toko_amaranana; i++){
                teny_vakiana.push(""+i+ ". "+ data[""+toko_amaranana][""+i]);
            }
            vakiteny = vakiteny + teny_vakiana.join(" ");
            teny_vakiana = [];
        } 
        // Raha toa ka mifanaraka ny toko anombohana sy toko amaranana
        else if(isan_toko_manelanelana==1){
            // mitahiry ireo andalana rehetra manomboko amin'ny andininy anombohana ao amin'ny toko anombohana
            vakiteny = anaran_boky + " " + toko_anombohana + "\n"; 
            let isan_andininy_amin_toko_anombohana = Object.keys(data[""+toko_anombohana]).length;
            for(let i = andininy_toko_anombohana; i<= isan_andininy_amin_toko_anombohana; i++){
                teny_vakiana.push(""+i+ ". "+ data[""+toko_anombohana][""+i]);
            }
            vakiteny = vakiteny + teny_vakiana.join(" ");
            teny_vakiana = [];

            // mitahiry ireo andalana rehetra ka hatramin'ny andininy amaranana azy ao amin'ny toko amaranana
            vakiteny += "\n" + anaran_boky + " " + toko_amaranana + "\n"; 
            for(let i = 1; i<= andininy_toko_amaranana; i++){
                teny_vakiana.push(""+i+ ". "+ data[""+toko_amaranana][""+i]);
            }
            vakiteny = vakiteny + teny_vakiana.join(" ");
            teny_vakiana = [];
        } 
        // Raha mitovy ny toko anombohana sy amaranana
        else {
            vakiteny = anaran_boky + " " + toko_anombohana + "\n";
            for(let i = andininy_toko_anombohana; i<= andininy_toko_amaranana; i++){
                teny_vakiana.push(""+i+ ". "+ data[""+toko_anombohana][""+i]);
            }
            vakiteny = vakiteny + teny_vakiana.join(" ");
        }

        // Mamerina ny teny ho vakiana
        return vakiteny;
      } catch (error) {
        console.error("Error:", error);
    }
}

/*
module.exports = {
    hakaNyBoky,
    hakaNyAnaranBoky,
    hakaNySokajin,
    hamaky_baiboly
};
*/

module.exports = {
    hamaky_baiboly
}