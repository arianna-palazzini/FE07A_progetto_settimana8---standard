// Progettare un interfaccia di nome Smartphone, per rappresentare un telefono cellulare
// con contratto a ricarica.
interface Smartphone {
    // Tale interfaccia prevede due variabili d'istanza. La prima variabile d'istanza e'
    // definita come number carica, e rappresenta il quantitativo di euro
    // disponibile per le chiamate. La seconda variabile d'istanza e' definita come
    // number numeroChiamate, e rappresenta il numero di chiamate effettuate con
    // il cellulare.
    carica: number;
    numeroChiamate: number;

    ricarica(unaRicarica: number): void;
    chiamata(minutiDurata: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;
}

class FirstUser implements Smartphone {
    public carica: number;
    public numeroChiamate: number;

    constructor(carica: number, numeroChiamate: number) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }

    // Le classi FirstUser-SecondUser-ThirdUser devono implementare l'interfaccia 
    // con i seguenti metodi: un metodo definito come public void ricarica(double unaRicarica), che ricarica il
    // telefonino.
    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }

    // Un metodo definito come public void chiamata(double minutiDurata), che
    // effettua una chiamata di durata in minuti specificata dal parametro esplicito.
    // Tale metodo dovra' aggiornare la carica disponibile ed incrementare la variabile
    // contenente il numero di chiamate effettuate dal telefonino (si assuma un costo
    // di 0.20 euro per ogni minuto di chiamata)
    public chiamata(minutiDurata: number): void {
        this.carica -= minutiDurata * 0.20
        this.numeroChiamate++;
    }

    // un metodo public number numero404(),
    // che restituisce il valore della carica disponibile.
    public numero404(): number {
        return this.carica;
    }

    // Un metodo public number
    // getNumeroChiamate(), che restituisce il valore della variabile d'istanza
    // numeroChiamate
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    // Infine, un metodo public void azzeraChiamate(), che azzera la
    // variabile contenente il numero di chiamate effettuate dal telefonino.
    // Verificare il saldo residuo di ogni utente e quante chiamate sono state effettuate.
    public azzeraChiamate() {
        return this.numeroChiamate = 0;
    }
}

//VARIABILI GLOBALI
let Utente1 = new FirstUser(20, 2);
let valoreCaricaDisponibile = (<HTMLElement>document.getElementById('valoreCaricaDisponibile'));
let secondoValoreCaricaDisponibile = (<HTMLElement>document.getElementById('secondoValoreCaricaDisponibile'));
let numeroChiamareEffettuate = (<HTMLElement>document.getElementById('numeroChiamareEffettuate'));
let numeroChiamateFinale = (<HTMLElement>document.getElementById('numeroChiamateFinale'));
console.log('UTENTE 1');
console.log('Valore della carica disponibile: ' + Utente1.numero404());
valoreCaricaDisponibile.innerHTML = String(Utente1.numero404());
console.log('Numero chiamate: ' + Utente1.numeroChiamate);
numeroChiamareEffettuate.innerHTML = String(Utente1.numeroChiamate);
Utente1.chiamata(10);
console.log('Valore della carica disponibile: ' + Utente1.numero404());
secondoValoreCaricaDisponibile.innerHTML = String(Utente1.numero404());
console.log('dopo l\'azzeramento delle chiamate:');
console.log('Numero chiamate: ' + Utente1.azzeraChiamate());
numeroChiamateFinale.innerHTML = String(Utente1.azzeraChiamate());


class SecondUser implements Smartphone {
    public carica: number;
    public numeroChiamate: number;

    constructor(carica: number, numeroChiamate: number) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }

    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }

    public chiamata(minutiDurata: number): void {
        this.carica -= minutiDurata * 0.20
        this.numeroChiamate++;
    }

    public numero404(): number {
        return this.carica;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public azzeraChiamate() {
        return this.numeroChiamate = 0;
    }
}

let Utente2 = new SecondUser(30, 4);
let valoreCaricaDisponibile2 = (<HTMLElement>document.getElementById('valoreCaricaDisponibile2'));
let secondoValoreCaricaDisponibile2 = (<HTMLElement>document.getElementById('secondoValoreCaricaDisponibile2'));
let numeroChiamareEffettuate2 = (<HTMLElement>document.getElementById('numeroChiamareEffettuate2'));
let numeroChiamateFinale2 = (<HTMLElement>document.getElementById('numeroChiamateFinale2'));
console.log('UTENTE 2');
console.log('Valore della carica disponibile: ' + Utente2.numero404());
valoreCaricaDisponibile2.innerHTML = String(Utente2.numero404());
console.log('Numero chiamate: ' + Utente2.numeroChiamate);
numeroChiamareEffettuate2.innerHTML = String(Utente2.numeroChiamate);
Utente2.chiamata(15);
console.log('Valore della carica disponibile: ' + Utente2.numero404());
secondoValoreCaricaDisponibile2.innerHTML = String(Utente2.numero404());
console.log('dopo l\'azzeramento delle chiamate:');
console.log('Numero chiamate: ' + Utente2.azzeraChiamate());
numeroChiamateFinale2.innerHTML = String(Utente2.azzeraChiamate());

class ThirdUser implements Smartphone {
    public carica: number;
    public numeroChiamate: number;

    constructor(carica: number, numeroChiamate: number) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }

    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }

    public chiamata(minutiDurata: number): void {
        this.carica -= minutiDurata * 0.20
        this.numeroChiamate++;
    }

    public numero404(): number {
        return this.carica;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public azzeraChiamate() {
        return this.numeroChiamate = 0;
    }
}

let Utente3 = new ThirdUser(40, 5);
let valoreCaricaDisponibile3 = (<HTMLElement>document.getElementById('valoreCaricaDisponibile3'));
let secondoValoreCaricaDisponibile3 = (<HTMLElement>document.getElementById('secondoValoreCaricaDisponibile3'));
let numeroChiamareEffettuate3 = (<HTMLElement>document.getElementById('numeroChiamareEffettuate3'));
let numeroChiamateFinale3 = (<HTMLElement>document.getElementById('numeroChiamateFinale3'));
console.log('UTENTE 3');
console.log('Valore della carica disponibile: ' + Utente3.numero404());
valoreCaricaDisponibile3.innerHTML = String(Utente3.numero404());
console.log('Numero chiamate: ' + Utente3.numeroChiamate);
numeroChiamareEffettuate3.innerHTML = String(Utente3.numeroChiamate);
Utente3.chiamata(20);
console.log('Valore della carica disponibile: ' + Utente3.numero404());
secondoValoreCaricaDisponibile3.innerHTML = String(Utente3.numero404());
console.log('dopo l\'azzeramento delle chiamate:');
console.log('Numero chiamate: ' + Utente3.azzeraChiamate());
numeroChiamateFinale3.innerHTML = String(Utente3.azzeraChiamate());