/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

const personnes = [
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

console.log(formulaire,txtNom,tableBody);


//ecouter l'envoie du formulaire
formulaire.addEventListener('submit', function envoyer(event) {
    event.preventDefault();

    let nouvelleLigne = `
        <tr>
            <td>${txtPrenom.value}</td>
            <td>${txtNom.value}</td>
            <td>${txtAge.value}</td>
            <td>${txtLocalite.value}</td>
        </tr>`;

    tableBody.innerHTML += nouvelleLigne;

    console.log(txtNom.value,tableBody);
});