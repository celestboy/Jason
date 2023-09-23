tueur_vies = 100

compteur_morts = 0

liste_survivants = ["Eric", "Etienne", "Vanessa", "Emilie", "Jean", "Marie", "Pierre", "Valentine", "Mathis", "Benjamin", "Eva", "Catherine", "Mike", "Alysson", "Mélanie", "Mark", "Henri", "Lucas", "Maxime", "Laure"]
liste_caracteristiques = ["gigachad", "kawaii", "athlétique", "bg", "grand", "rapide", "lent", "robuste", "discret", "intello", "débrouillard", "malin", "nerd"]



variable_survivants = liste_survivants.length - 1
variable_caracteristiques = liste_caracteristiques.length - 1

survivants = []
for (i=0 ; i < 5 ; i++) {
    choix_survivants = Math.floor(Math.random() * variable_survivants)
    choix_caracteristique = Math.floor(Math.random() * variable_caracteristiques)
    

    liste_survivants.splice(choix_survivants, 1)
    liste_caracteristiques.splice(choix_caracteristique, 1)
    variable_survivants--
    variable_caracteristiques--


    

    let survivant = {
        nom: liste_survivants[choix_survivants],
        caracteristique: liste_caracteristiques[choix_caracteristique]
    }
    survivants.push(survivant)

    index = 0
}


morts = []
while (compteur_morts < 5 && tueur_vies > 0) {

    
    random = Math.floor(Math.random() * 9)

    num_perso_attacked = 5 - compteur_morts

    perso_attacked = Math.floor(Math.random() * num_perso_attacked)
       
    if (random <= 2) {
        
        // mourir
        

        compteur_morts++
        
        
        console.log(survivants[perso_attacked].nom + " est mort, c'était un(e) " + survivants[perso_attacked].caracteristique + ".")
        console.log("Il y a actuellement " + compteur_morts + " mort(s).")
        morts.push(survivants[perso_attacked].nom)
        survivants.splice(perso_attacked, 1)

           
    }
    else if (random >= 3 && random <= 7) {
        // esquive

        tueur_vies -= 10
        console.log("Esquive de " + survivants[perso_attacked].nom + " ! Le tueur a perdu 10pv, il lui en reste " + tueur_vies + ".")
    }
    else {
        // both

        compteur_morts++
        tueur_vies -= 15

        console.log(survivants[perso_attacked].nom + " a été tué mais a réussi à infliger 15 de dégâts à l'agresseur en se débattant, il reste donc " + tueur_vies + " pv au tueur en série...")
    
        morts.push(survivants[perso_attacked].nom)
        survivants.splice(perso_attacked, 1)
    }
    
    if (compteur_morts == 5) {
        alert("C'est perdu, tous les survivants sont morts... \n \n RIP " + morts + " \n \n Il restait " + tueur_vies + " pv au tueur.")
    }
    if (tueur_vies <= 0) {
        alert("Félicitations ! Le tueur en série a été vaincu ! \n \n RIP " + morts)
    } 
}