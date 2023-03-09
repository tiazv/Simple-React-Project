import { Funkcionar, Igralec } from "./Oseba";

export class Ekipa {
    private ime: string;
    private letoUstanovitve: number;
    private direktor: Funkcionar;
    private trener: Funkcionar;
    private igralci: Igralec[];

    constructor(ime: string, letoUstanovitve: number, direktor: Funkcionar, trener: Funkcionar){
        this.ime = ime;
        this.letoUstanovitve = letoUstanovitve;
        this.direktor = direktor;
        this.trener = trener;
        this.igralci = [];
    }

    dodajIgralca(igralec: Igralec): void {
        this.igralci.push(igralec); 
    }

    posodobiIgralca(igralec: Igralec): void {
        for(let i = 0; i < this.igralci.length; i++){
            if(igralec.id == this.igralci[i].id){
                this.igralci[i] = igralec;
                break;
            }
        }
    }

    odstraniIgralca(id: number): void {
        for(let i = 0; i < this.igralci.length; i++){
            if(id == this.igralci[i].id){
                this.igralci = this.igralci.filter(igralec => igralec.id != id)
            }
        }
    }

    izpisiPodatke(): string {
        const izpis = [];
        for (let i = 0; i < this.igralci.length; i++) {
            var neki = `Igralec: ${this.igralci[i].ime} ${this.igralci[i].priimek}, rojen ${this.igralci[i].letoRojstva} v ${this.igralci[i].krajRojstva} z id ${this.igralci[i].id}, je visok ${this.igralci[i].visina} cm, tehta ${this.igralci[i].teza} kg in je poskodovan: ${this.igralci[i].poskodovan}. `;
            izpis.push(neki);
        }

        return `Ime ekipe: ${this.ime},
            Leto ustanovitve: ${this.letoUstanovitve}, 
            ${this.direktor.ime} ${this.direktor.priimek}, z vlogo ${this.direktor.vloga}, rojen ${this.direktor.letoRojstva} v ${this.direktor.krajRojstva} z id ${this.direktor.id} in veljavnostjo ${this.direktor.veljavnost}
            ${this.trener.ime} ${this.trener.priimek}, z vlogo ${this.trener.vloga}, rojen ${this.trener.letoRojstva} v ${this.trener.krajRojstva} z id ${this.trener.id} in veljavnostjo ${this.trener.veljavnost}
            ${izpis}`
            //Igralci: ` + this.igralci.map(igralec => Object.values(igralec));
        }

        

}   