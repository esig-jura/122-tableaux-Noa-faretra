/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

const tabPersonnes = [
    {
        nom: 'Doe',
        prenom: 'John',
        age: 25,
        localite: 'New York',
    },
    {
        nom: 'Doe',
        prenom: 'Jane',
        age: 30,
        localite: 'Los Angeles',
    },
    {
        nom: 'Doe',
        prenom: 'Jack',
        age: 28,
        localite: 'Chicago',
    },
    {
        nom: 'Doe',
        prenom: 'Jill',
        age: 35,
        localite: 'Miami',
    },
    {
        nom: 'Doe',
        prenom: 'Jim',
        age: 40,
        localite: 'San Francisco',
    }

];

const formulaire = document.querySelector('form');
const txtNom = document.querySelector('#nom');
const txtPrenom = document.querySelector('#prenom');
const txtAge = document.querySelector('#age');
const txtLocalite = document.querySelector('#localite');
const tableBody = document.querySelector('tbody');

//console.log(formulaire,txtNom,tableBody);


// Fonction qui créer un tableau HTML à partir d'un tableau JS des personnes :

function construireTableau()
    {
        //vide le tableau
        tableBody.innerHTML='';
        // Parcours le tableau d'objets tabPersonnes
        for(let personne of tabPersonnes){
            tableBody.innerHTML += `<tr>
            <td>${personne.prenom}</td>
            <td>${personne.nom}</td>
            <td>${personne.age}</td>
            <td>${personne.localite}</td>
        </tr>`;
        }
    }



//écouter l'envoie du formulaire
formulaire.addEventListener('submit', function envoyer(event) {
    //stopper l'envoie du formulaire
    event.preventDefault();
    // ajouter un objet à tabPersonne
    tabPersonnes.push({
       nom: txtNom.value,
        prenom: txtPrenom.value,
        age: txtAge.value,
        localite: txtLocalite.value,

    });
    construireTableau();
    console.log(txtNom.value,tableBody);
    //reset du formulaire
    formulaire.reset();
    txtPrenom.focus();
});

// execute quand la page a charger
window.addEventListener('load', construireTableau);
