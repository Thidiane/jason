"use script";

let charac = ["blonde","nerd","otaku","geek","sportif"];// tableau pour définir le nom des survivants


class Personnage {
    constructor(nom, pointsdevie, probbilitéDemort, contreAttack,degats) { //constructeur initialise l'attribut des joueurs
        this.nom= nom //défini le nom du personnage
        this.pointsdevie= pointsdevie //défini les points de vie du joueur
        this.probbilitéDattack= probbilitéDemort //défini la probabilité de mort
        this.contreAttack= contreAttack //défini la probabilité de contre-attaque
        this.degats= degats//défini les dégats
    }

    attaquer(cible) { // Méthode pour attaquer un autre joueur
        if (Math.random() < this.probbilitéDattack) {  //verifie la probabilité de mourir
            console.log(`${this.nom} attaque ${cible.nom} et inflige ${this.degat} point de dégats`);// affiche le message d'attaque dans la console
            cible.encaisserDégats(this.degats);
        }else {
            console.log(`${this.nom} rate son attaque contre ${cible.nom}.`); // affiche le message que l'attaque a echoué
        }
    }

    encaisserDégats(degats){ //methode pour encaisser degat de l'adversaire
        if(Math.random() < this.contreAttack) { //verifie la probabilité de contre-attaquer
            console.log(`${this.nom} contre-attaque et encaisse ${degats} point de dégats`);// affiche le message de la contre-attaque dans la console
            this.pointsdevie -= degats;
        }else {
            console.log(`${this.nom} encaisse ${degats} points de dégats`)// affiche le message que le joueur a reçu les dégats
        }

        if (this.pointsdevie <=0) { //indique que si le personnage a ses pv a 0 alors il meurt
            console.log(`${this.nom} est mort.`)
        }
    }
}

let survivants = new Personnage(charac, 100, 0.7, 15, 10); // création des survivants (le nom était censé être aléatoire,pv,probademort,contreatk,degat)

let jason = new Personnage("jason", 100,0.4,10,30); //création de jason notre tueur

let tour = 1; //crée une boucle de combat entre les survivant et jason
while (survivants.pointsdevie > 0 && jason.pointsdevie > 0) {
    console.log(`Tour ${tour}:`);

    survivants.attaquer(jason); // le survivant attaque jason

    if (jason.pointsdevie <= 0) { //si les pv de jason sont = ou en-dessous de 0 alors le message s'affichera
        console.log(`${survivants.nom} a tue jason`)
        break;
    }

    jason.attaquer(survivants); // jason attaque le survivant

    if (survivants.pointsdevie <=0) {
        console.log(`${jason.nom} a tué les survivants`);//si les pv des survivant sont = ou en-dessous de 0 alors le message s'affichera
        break;
    }
    console.log(`${survivants.nom} : ${survivants.pointsdevie} point de vie.`) // Affiche les point de restant des joueurs à la fin du tour
    console.log(`${jason.nom} : ${jason.pointsdevie} point de vie`);
    tour++;
}

if (survivants.pointsdevie <=0){ //affiche le résultat de la partie
    console.log("les survivants ont été tué par jason");
} else if (jason.pointsdevie <=0) {
    console.log("jason a été arrêté par les surviavnts");
} 