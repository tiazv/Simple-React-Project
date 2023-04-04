import { Igralec, Funkcionar } from "./Oseba";
import { Ekipa } from "./Ekipa";

export const miha: Igralec = {
	ime: "Miha",
    priimek: "Novak",
    letoRojstva: 2000,
    krajRojstva: "Maribor",
    id: 1,
    visina: 184,
    teza: 72,
    poskodovan: true
}

export const nika: Igralec = {
	ime: "Nika",
    priimek: "Horvat",
    letoRojstva: 2001,
    krajRojstva: "Ptuj",
    id: 2,
    visina: 171,
    teza: 58,
    poskodovan: false
}

export const luka: Igralec = {
	ime: "Luka",
    priimek: "Simonič",
    letoRojstva: 1999,
    krajRojstva: "Maribor",
    id: 3,
    visina: 180,
    teza: 78,
    poskodovan: false
}

export const zan: Igralec = {
	ime: "Žan",
    priimek: "Serčič",
    letoRojstva: 1998,
    krajRojstva: "Maribor",
    id: 4,
    visina: 178,
    teza: 71,
    poskodovan: true
}

export const alen: Igralec = {
	ime: "Alen",
    priimek: "Bobinski",
    letoRojstva: 1994,
    krajRojstva: "Maribor",
    id: 9,
    visina: 188,
    teza: 78,
    poskodovan: true
}

export const grega: Igralec = {
	ime: "Grega",
    priimek: "Simonič",
    letoRojstva: 1999,
    krajRojstva: "Celje",
    id: 10,
    visina: 192,
    teza: 83,
    poskodovan: false
}

export const marko: Igralec = {
	ime: "Marko",
    priimek: "Ugwoegbulam",
    letoRojstva: 2000,
    krajRojstva: "Maribor",
    id: 11,
    visina: 171,
    teza: 98,
    poskodovan: true
}

export const prviT: Funkcionar = {
    ime: "Miha",
    priimek: "Zadravec",
    letoRojstva: 1985,
    krajRojstva: "Celje",
    id: 5,
    vloga: "trener",
    veljavnost: 50
}

export const prviD: Funkcionar = {
    ime: "Nik",
    priimek: "Mlinarič",
    letoRojstva: 1979,
    krajRojstva: "Maribor",
    id: 6,
    vloga: "direktor",
    veljavnost: 30
}

export const drugiT: Funkcionar = {
    ime: "Klara",
    priimek: "Krepek",
    letoRojstva: 1990,
    krajRojstva: "Ptuj",
    id: 7,
    vloga: "trener",
    veljavnost: 40
}

export const drugiD: Funkcionar = {
    ime: "Maja",
    priimek: "Marčič",
    letoRojstva: 1979,
    krajRojstva: "Maribor",
    id: 8,
    vloga: "direktor",
    veljavnost: 30
}


const ekipa1: Ekipa = new Ekipa("Prva", 2020, prviD, prviT, 1);
const ekipa2: Ekipa = new Ekipa("Druga", 2021, drugiD, drugiT, 2);

ekipa1.dodajIgralca(miha);
ekipa1.dodajIgralca(nika);
ekipa1.dodajIgralca(luka);

ekipa2.dodajIgralca(alen);
ekipa2.dodajIgralca(grega);
ekipa2.dodajIgralca(marko);

luka.teza = 80;
ekipa1.posodobiIgralca(luka);
ekipa1.odstraniIgralca(2);
ekipa1.dodajIgralca(zan);

console.log(ekipa1.izpisiPodatke());
console.log(ekipa2.izpisiPodatke());

export { ekipa1, ekipa2 };
