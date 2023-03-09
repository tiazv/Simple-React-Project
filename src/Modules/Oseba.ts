interface Oseba {
    ime: string;
    priimek: string;
    letoRojstva: number;
    krajRojstva?: string;
    id: number;
    }
    
export interface Igralec extends Oseba{
    visina: number;
    teza: number;
    poskodovan: boolean;    
    }

export interface Funkcionar extends Oseba{
    vloga: string;
    veljavnost: number;
}
