var FirstUser = /** @class */ (function () {
    function FirstUser(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    // Le classi FirstUser-SecondUser-ThirdUser devono implementare l'interfaccia 
    // con i seguenti metodi: un metodo definito come public void ricarica(double unaRicarica), che ricarica il
    // telefonino.
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    // Un metodo definito come public void chiamata(double minutiDurata), che
    // effettua una chiamata di durata in minuti specificata dal parametro esplicito.
    // Tale metodo dovra' aggiornare la carica disponibile ed incrementare la variabile
    // contenente il numero di chiamate effettuate dal telefonino (si assuma un costo
    // di 0.20 euro per ogni minuto di chiamata)
    FirstUser.prototype.chiamata = function (minutiDurata) {
        this.carica -= minutiDurata * 0.20;
        this.numeroChiamate++;
    };
    // un metodo public number numero404(),
    // che restituisce il valore della carica disponibile.
    FirstUser.prototype.numero404 = function () {
        return this.carica;
    };
    // Un metodo public number
    // getNumeroChiamate(), che restituisce il valore della variabile d'istanza
    // numeroChiamate
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    // Infine, un metodo public void azzeraChiamate(), che azzera la
    // variabile contenente il numero di chiamate effettuate dal telefonino.
    // Verificare il saldo residuo di ogni utente e quante chiamate sono state effettuate.
    FirstUser.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return FirstUser;
}());
//VARIABILI GLOBALI
var Utente1 = new FirstUser(20, 2);
var valoreCaricaDisponibile = document.getElementById('valoreCaricaDisponibile');
var secondoValoreCaricaDisponibile = document.getElementById('secondoValoreCaricaDisponibile');
var numeroChiamareEffettuate = document.getElementById('numeroChiamareEffettuate');
var numeroChiamateFinale = document.getElementById('numeroChiamateFinale');
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
var SecondUser = /** @class */ (function () {
    function SecondUser(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    SecondUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    SecondUser.prototype.chiamata = function (minutiDurata) {
        this.carica -= minutiDurata * 0.20;
        this.numeroChiamate++;
    };
    SecondUser.prototype.numero404 = function () {
        return this.carica;
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return SecondUser;
}());
var Utente2 = new SecondUser(30, 4);
var valoreCaricaDisponibile2 = document.getElementById('valoreCaricaDisponibile2');
var secondoValoreCaricaDisponibile2 = document.getElementById('secondoValoreCaricaDisponibile2');
var numeroChiamareEffettuate2 = document.getElementById('numeroChiamareEffettuate2');
var numeroChiamateFinale2 = document.getElementById('numeroChiamateFinale2');
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
var ThirdUser = /** @class */ (function () {
    function ThirdUser(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    ThirdUser.prototype.chiamata = function (minutiDurata) {
        this.carica -= minutiDurata * 0.20;
        this.numeroChiamate++;
    };
    ThirdUser.prototype.numero404 = function () {
        return this.carica;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
var Utente3 = new ThirdUser(40, 5);
var valoreCaricaDisponibile3 = document.getElementById('valoreCaricaDisponibile3');
var secondoValoreCaricaDisponibile3 = document.getElementById('secondoValoreCaricaDisponibile3');
var numeroChiamareEffettuate3 = document.getElementById('numeroChiamareEffettuate3');
var numeroChiamateFinale3 = document.getElementById('numeroChiamateFinale3');
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
