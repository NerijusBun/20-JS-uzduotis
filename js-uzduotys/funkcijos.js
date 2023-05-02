// Funkcijos

// Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus

/*  
1.Funkcija pavadinimu “tusciaFunkcija”:
    a. nepriima jokių kintamųjų
    b. neatlieka jokios vidinės logikos
    c. gražina boolean tipo reikšmę “false”
    d. TESTAS:
        i. console.log( tusciaFunkcija() );
        ii. rezultatas: false
*/

console.log('--1.--')

function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());

/*  
2. Funkcija pavadinimu “daugyba”:
    a. priima du skaičiaus tipo kintamuosius
    b. atskirame kintamajame įsimena sandaugos reikšmę
    c. gražina saudaugos rezultatą
    d. TESTAI:
        i. console.log( daugyba( skaicius1, skaicius2 ) );
        ii. console.log( daugyba( skaicius3, skaicius2 ) );
        iii. console.log( daugyba( skaicius1, skaicius3 ) );
        iv. rezultatas: teisingos reikšmės;
*/

console.log('--2.--')

function daugyba (a, b) {
    const sandauga = a * b;
    return sandauga;
}

const skaicius1 = 15;
const skaicius2 = 2;
const skaicius3 = 109;

console.log(daugyba(skaicius1, skaicius2));
console.log(daugyba(skaicius3, skaicius2));
console.log(daugyba(skaicius1, skaicius3));


/* 3. Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
    a. priima vieną kintamąjį
    b. jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta
    netinkamo tipo reikšmė.”
    c. priešingu atveju, funkcija tęsia darbą
    d. į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
    e. gražina skaitmenų kiekį
    f. TESTAI:
        i. console.log( skaitmenuKiekisSkaiciuje( 5 ) );
            1. rezultatas: 1
        ii. console.log( skaitmenuKiekisSkaiciuje( 781 ) );
            1. rezultatas: 3
        iii. console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
            1. rezultatas: 11
        iv. console.log( skaitmenuKiekisSkaiciuje( true ) );
            1. rezultatas: “Pateikta netinkamo tipo reikšmė.”
        v. console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
            1. rezultatas: “Pateikta netinkamo tipo reikšmė.”
        vi. console.log( skaitmenuKiekisSkaiciuje( NaN ) );
            1. rezultatas: “Pateikta netinkamo tipo reikšmė.”
*/ 

console.log('--3.--')

let c = 0;
let d = 0;

function skaitmenuKiekisSkaiciuje (c) {
    if (typeof c === 'number' && isFinite(c)) {
        d = ('' + c).length; // Skaiciu paverciam stringu
        return d;
        } else {
        return `Pateikta netinkamo tipo reikšmė.`;
        }
}

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(NaN));

// Kitas būdas

function skaitmenuKiekisSkaiciuje (number) {
    if (typeof number === 'number' && isFinite(number)) {
    const numLength = ('' + number).length;
    return numLength;
       
    } else {
    return 'Pateikta netinkamo tipo reikšmė.';
        }
}
console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(NaN));

/*
4. Funkcija pavadinimu “didziausiasSkaiciusSarase”:
    a. priima vieną kintamąjį
    b. jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta
    netinkamo tipo reikšmė.”
    c. jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti
    tuščias.”
    d. priešingu atveju, funkcija tęsia darbą
    e. pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo
    metu yra didžiausias
    f. gražina didžiausią surastą skaičių
    g. TESTAI:
        i. console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
            1. rezultatas: 1
        ii. console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
            1. rezultatas: 3
        iii. console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
            1. rezultatas: 78
        iv. console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
            1. rezultatas: 69
        v. console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
            1. rezultatas: -1
        vi. console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
            1. rezultatas: “Pateikta netinkamo tipo reikšmė.”
        vii. console.log( didziausiasSkaiciusSarase( [] ) );
            1. rezultatas: “Pateiktas sąrašas negali būti tuščias.”
*/

console.log('--4.--')

function didziausiasSkaiciusSarase (sarasas) {
    if (Array.isArray(sarasas) && sarasas.length !== 0) { // kintamasis saraso tipo ir sarasas nera tuscias
        const max = Math.max(...sarasas); // atrenka didžiausią skaičių
        return max;
    } else if (sarasas.length === 0) { // sarasas yra tuscias, netinka -> sarasas = []
            return 'Pateiktas sąrašas negali būti tuščias.';
        } else {
            return 'Pateikta netinkamo tipo reikšmė.';
        }
    }

console.log(didziausiasSkaiciusSarase([1]));
console.log(didziausiasSkaiciusSarase([1, 2, 3]));
console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
console.log(didziausiasSkaiciusSarase('pomidoras'));
console.log(didziausiasSkaiciusSarase([]));

/*
5. Funkcija pavadinimu “isrinktiRaides”:
    a. priima du kintamuosius:
        i. pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
        ii. antrasis nurodo kas kelintą raidę išrinkti
    b. patikrinti, ar pirmasis kintamasis yra teksto tipo:
        i. jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
        ii. priešingu atveju tęsiame darbą
    c. patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
        i. jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
        ii. priešingu atveju tęsiame darbą
    d. patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
        i. jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
        ii. priešingu atveju tęsiame darbą
    e. patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
        i. jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
        ii. priešingu atveju tęsiame darbą
    f. patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
        i. jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
        ii. priešingu atveju tęsiame darbą
    g. išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
    h. išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
    i. gražina rezultatą
    j. TESTAI:
        i. console.log( isrinktiRaides( “abcdefg”, 2 ) );
            1. rezultatas: “bdf”
        ii. console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
            1. rezultatas: “cfil”
        iii. console.log( isrinktiRaides( “abc”, 0 ) );
            1. rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
        iv. console.log( isrinktiRaides( “abc”, 4 ) );
            1. rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
        v. console.log( isrinktiRaides( 1561, 2 ) );
            1. rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”
*/

console.log('--5.--')

function isrinktiRaides(tekstas, raide) {
    if (typeof tekstas !== 'string') {      // b. patikrinti, ar pirmasis kintamasis yra teksto tipo, jei ne...
        return 'Pirmasis kintamasis yra netinkamo tipo.';
    } else if (tekstas.length === 0 && tekstas.length < 100) {     // c. patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių, jei ne...
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.';
    } else if (typeof raide !== 'number' && !isFinite(raide)) {      // d. patikrinti, ar antrasis kintamasis yra skaičiaus tipo, jei ne...
        return 'Antrasis kintamasis yra netinkamo tipo.'; 
    } else if (raide <= 0) {     // e. patikriname, ar antrojo kintamojo vertė yra didesnė už nulį, jei ne...
        return 'Antrasis kintamasis turi būti didesnis už nulį.';
    } else if (raide > tekstas.length) { //     f. patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';
    } else {        // g. išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
        let raides = '';
        for (i = raide - 1; i < tekstas.length; i = i + raide) {
            raides = raides + tekstas[i]; // h. išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
        }
        return raides;
    }
}

console.log(isrinktiRaides('abcdefg', 2)); // rezultatas: “bdf”
console.log(isrinktiRaides('abcdefghijkl', 3)); // rezultatas: “cfil”
console.log(isrinktiRaides('abc', 0)); // “Antrasis kintamasis turi būti didesnis už nulį.”
console.log(isrinktiRaides('abc', 4)); // “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log(isrinktiRaides(1561, 2)); // “Pirmasis kintamasis yra netinkamo tipo.”

/*
Funkcija pavadinimu “dalyba”:
    a. turi priimti du kintamuosius
    b. reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų
apsaugoti funkciją nuo neteisingo panaudojimo
        i. esant blogoms sąlygoms, išvesti atitinkamą pranešimą
        ii. esant geroms - tęsti darbą
    c. į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
        i. daliname pirmąjį skaičių iš antrojo
d. grąžinti suskaičiuotą reikšmę
e. TESTAI:
    i. sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos
veikimą
*/

function dalyba (a, b) {
    if (typeof a !== 'number' || !isFinite (a) || typeof b !== 'number' || !isFinite (b)) {
        if (typeof a !== 'number' || !isFinite (a)) {
            console.log('Pirmasis kintamasis yra netinkamo tipo');
        }
        if (typeof b !== 'number' || !isFinite (b)) {
            console.log('Antrasis kintamasis yra netinkamo tipo');
        }
        return;
    }
    const sum = a / b;
    return sum;
}
console.log(dalyba(6, 'ggg'));