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

export const prviT: Funkcionar = {
    ime: "Marko",
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



const ekipa1: Ekipa = new Ekipa("Prva", 2020, prviD, prviT);

ekipa1.dodajIgralca(miha);
ekipa1.dodajIgralca(nika);
ekipa1.dodajIgralca(luka);

luka.teza = 80;
ekipa1.posodobiIgralca(luka);
ekipa1.odstraniIgralca(2);
ekipa1.dodajIgralca(zan);

console.log(ekipa1.izpisiPodatke());

export { Ekipa };
