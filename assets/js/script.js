//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.
//Creare un array di oggetti di studenti.
//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

//oggetto

var stud = {
    nome : 'Antonio',
    cognome : 'Lorenzon',
    anni : 35
};


document.getElementById('stud_uno').innerHTML = 'Nome: ' + stud.nome + '<br> Cognome: ' + stud.cognome + '<br> Età: ' + stud.anni;


//array di oggetti

var classe = [
{
    nome : 'Mario',
    cognome : 'Rossi',
    anni : 20
},
{
    nome : 'Fabrizio',
    cognome : 'Verdi',
    anni : 21
},
{
    nome : 'Simone',
    cognome : 'Cavalli',
    anni : 19
},
{
    nome : 'Giuseppe',
    cognome : 'Marchi',
    anni : 22
},
{
    nome : 'Andrea',
    cognome : 'Santi',
    anni : 20
},

]

//push del primo studente
classe.push(stud);

//creo un ciclo "for in" in modo tale da stampare in html tutti gli studenti
for (var i in classe){
    var studenti = classe[i];
    document.getElementById('stud').innerHTML += 'Nome: ' + studenti.nome + '<br>Cognome: ' + studenti.cognome + '<br>Età: ' + studenti.anni + ' anni <br><br>';
};






/* 
function miaClasse() */

//tramite un prompt chiede i dati: nome, cognome, anni

var inserisciNome = prompt('Inserisci il nome dello studente');
var inserisciCognome = prompt('Inserisci il cognome dello studente');
var inserisciAnni = prompt('Inserisci gli anni dello studente');

//utilizzo la funzione per pushare lo studente 

miaClasse(inserisciNome, inserisciCognome, inserisciAnni);

//oggetto che deve essere pushato

//stampo su su html la lista aggiornata
for (var c in classe){
    var nuovaClasse = classe[c];
    document.getElementById('new_class').innerHTML += 'Nome: ' + nuovaClasse.nome + '<br>Cognome: ' + nuovaClasse.cognome + '<br>Età: ' + nuovaClasse.anni + ' anni <br><br>';
}



//Funzione push studenti

function miaClasse(nomeStudente, cognomeStudente, anniStudente){
    classe.push({
        nome : nomeStudente,
        cognome : cognomeStudente,
        anni : parseInt(anniStudente)
    })
}
