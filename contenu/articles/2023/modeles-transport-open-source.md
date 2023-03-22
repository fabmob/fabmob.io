---
titre: "Modèles de transport open source"
date: 2023-02-21
image: /contenu/articles/2023/images/aequilibrae.jpeg

résumé: Introduction aux modèles de transports et de l'interêt de leur ouverture pour le citoyen.

categories: 
  - articles
tags: 
  - Aequilibrae
  - OpenSource
author: Alex Bourreau, avec l'aide d'Arthur Evrard
---

Un modèle de transport est un outil de travail qui permet par exemple d’évaluer les conséquences des projets d’infrastructure, de calculer le volume du trafic, de prévoir les modifications des liaisons de transport, les flux de trafic, la répartition modale et les éventuels goulets d’étranglement.

Il peut prendre plusieurs formes, en fonction de la représentation des modes de transports:

* **Monomodal** : Un seul mode de transport est représenté
* **Polymodal** : Plusieurs modes sont superposés, sans interactions
* **Multimodal** : Plusieurs modes sont intégrés, les interactions en fonction de la demande sont pris en comptes

Il est aussi caractérisé par sa portée géographique:

* **Macroscopique** (modèle statique) : Échelle de représentation la plus agrégée et représentant le trafic comme un flux. Les résultats indiquent principales caractéristiques de flux sur chaque tronçon du réseau : débits, concentrations, vitesses, etc.
* **Microscopique** (modèle dynamique) : Échelle de représentation la plus fine et modélisant les interactions entre les véhicules. Les résultats sont les trajectoires individuelles des véhicules : positions, vitesses, accélérations, temps inter véhiculaires, etc.
* **Mésoscopique** : Échelle de représentation intermédiaire, par exemple en regroupant les véhicules par paquet homogène et en modélisant les interactions entre chaque paquet de véhicules.

Plus de détails, y compris avantages et inconvénients : [https://www.cerema.fr/fr/activites/mobilites/systemes-transports-intelligents-trafics-regulation/bases#modeles-microscopiques](https://www.cerema.fr/fr/activites/mobilites/systemes-transports-intelligents-trafics-regulation/bases#modeles-microscopiques)

*Cet article porte sur les modèles multimodaux et mésoscopiques.*

**La démarche classique de modélisation se déroule en [4 étapes]((http://www.morelli.fr/4%20étapes.html)):**
![](https://wiki.lafabriquedesmobilites.fr/images/fabmob/5/59/4etapes.png)

* La première étape : **Génération**
    * Dans cette étape, l’objectif sera de calculer la demande pour chaque zone du modèle, les émissions et réceptions de déplacement.
    * Ex: La zone A génère 5000 voyages par jour
* La deuxième étape : **Distribution**
    * Dans cette étape, l’objectif sera de distribuer la demande des déplacements générés.
    * Ex: 200 voyages partent de la zone A vers la zone B
* La troisième étape : **Le choix modal**
    * Dans cette étape, l’objectif sera de déterminer le mode de déplacement.
    * Ex: 90% des voyages entre zones A et B sont en voiture, 10% en train…
* La quatrième étape : **Affectation**
    * Dans cette étape, l’objectif sera de calculer pour chaque mode de déplacement l’itinéraire choisi. On obtiendra autant d’affectation de trafic au plus court chemin calculé sur une offre par mode.
    * Ex: La route 1 est empruntée par 90 voyages à moto, 200 voyages en voiture etc…

A l’issue de cette dernière étape, un taux d’occupation et une congestion des voies peuvent être calculées. Cette nouvelle information sert d’entrée aux étapes précédente, et le trafic est redistribué plusieurs fois, jusqu’à convergence des résultats.

Les données d’entrées pour ces étapes proviennent en général de données socio-économiques diverses (population, emplois, commerces, écoles, équipements publics, etc) dont les algorithmes de traitement sont calibrés à partir des resultats locaux d’**Enquêtes Ménage Déplacement (EMD)** (aussi appelées Enquêtes Mobilité Certifiées Cerema, EMC2) ou d'enquêtes terrain comme les cordons/enquêtes origine destination (OD). Ces enquêtes divisent un territoire en zones, et fournissent les informations de déplacements d’un échantillon réduit de voyageurs, redressé à la population totale. Ces premières données d’entrée sont complétées par une cartographie des routes (souvent via ressource ouverte [OpenStreetMap](openstreetmap.org/)) et de l’offre de transport en communs (souvient via une publication aux formats standards ([GTFS](https://gtfs.org/fr/)…) par les opérateurs de mobilité)

# Quelques cas d’application des modèles

* Mise en place et ajustement de transports en commun en général, avec, par exemple, les effets de l’ajout d’une ligne sur l’engorgement des voies
* Secteur Autoroutier, par exemple l’effet d’un péage sur le trafic ou comment justifier le positionnement de ce dernier
* Optimisation tarifaire de vols
* Effets de la mise en place d’une ZFE, en particulier sur la périphérie
* Réseau express vélo, un sujet qui concerne Bordeaux, Montpellier ou encore Toulouse
* Outillage des voies de covoiturage (VR2+)
* Mouvements événementiels autour des stades (Jeux Olympiques)
* etc… En pratique, chaque décision qui altère une infrastructure de transport bénéficie de cette étape de modélisation.

# Le problème des modèles de transports

Tout outil de traitement informatique est limité par la qualité de la donnée en entrée. Si elle est de mauvaise qualité, le résultat le sera aussi, l’adage souvent utilisé est “Garbage in, garbage out”. **Les données de transports et de déplacement sont complexes**, et donc fortement sujettes aux approximations, et donc une qualité plus faible.

De part de leur complexité, et de leurs coûts, **ces modèles sont assez élitistes**. Ils sont ainsi implicitement réservés aux cabinets de conseils spécialisés qui peuvent justifier un investissement humain et financier.

Alors que la recherche sur les sujets d’algorithmie associée à ces modèles est assez ouverte, l'implémentation pratique est opaque, résultant en des cas de bug qui ont persisté pendant des années. Quand il s’agit de modéliser des décisions d’infrastructure avec des coûts entre millions et milliards, l’impact de ce genre d'erreur de calcul est loin d’être négligeable.

Ces problèmes sont amplifiés à l’international, alors que la France dispose de méthodes standards et de budgets pour ses enquêtes de mobilités, c’est assez rare dans d’autres pays, en particulier ceux en voie de développement. Cela résulte en une qualité de donnée faible, et **une expertise inaccessible par manque de financements**.

# Une solution: l’open sourcing.

Comme souvent sur les logiciels à haute valeur ajoutée, une alternative libre existe. Pour les modèles de transports, c’est [**Aequilibrae**](http://www.aequilibrae.com).

**Aequilibrae** étant logiciel libre, il est aussi gratuit, libérant le blocage principal à la démocratisation de la modélisation des transports. Il est aussi [open source](https://github.com/AequilibraE/), permettant une participation collective à son développement, et une promesse de transparence sur ses méthodes de calculs.

Un logiciel ouvert facilite aussi l’interaction avec d’autres logiciels, la Fabrique des Mobilités porte par exemple un autre commun, le [calculateur d’émission MYC](https://wiki.lafabriquedesmobilites.fr/wiki/MYC_GHG_Emissions_Calculator), dont la donnée source provient justement de ces outils de modélisation des transports. Ces interactions entre logiciels ouvrent des portes à leurs usages, généralement ignorées lors de la conception.

La réduction des couts et l’ouverture des modèles fonctionnent aussi en conjonction avec l’ouverture des données associées. Avec des initiatives comme OpenStreetMap ou le Point d'Accès National, la France dispose déjà d’un grand nombre de sources d’informations sur ses infrastructures. Les modèles de transports en sont une réutilisation comme une autre qu’il faut valoriser.

# Ce qu'il manque à Aequilibrae

Alors que l’outil trouve assez bien ses cas d’usage à l’international, par exemple par [Egis en Indonésie](https://www.mobiliseyourcity.net/how-medan-metropolitan-area-indonesia-uses-mobile-phone-data-shape-mobility#_ftn1), il ne perce que peu en France. En effet, dans les pays européens, on peut diviser en deux les utilisateurs potentiels: les grandes collectivités qui ont peu de problème pour financer des solutions propriétaires et l’accompagnement nécessaire, et les petites collectivités qui ne bénéficient très peu de ce genre d’outils. Pour ces petites collectivités, l’intérêt principal d’un modèle de transport, et ce qui justifie un potentiel financement, passe par l’impact écologique, et donc le report modal (passage de la mobilité carbonée vers une mobilité durable).

Voici alors le challenge d’Aequilibrae en 2023, **le logiciel ne contenant pas à ce jour de modélisation des transports en commun**, ses usages se retrouvent grandement limités. Ce développement est prévu cette année, et c’est **une des raisons pour laquelle la fabrique a choisi de participer financièrement au projet cette année**.

# Les modèles de transports comme outil de participation citoyenne

L’affectation de ressources dans un outil de modélisation de transport open source ouvre aussi un sujet radical: l’opportunité de la participation citoyenne. En effet, **la démocratisation de ce type d’outil permet au citoyen de construire un argumentaire fort derrière ses opinions et revendications**. C’est le principe de la [technologie civique](https://fr.wikipedia.org/wiki/Technologie_civique).

Par exemple, un citoyen pourrait assister à un débat public sur la mise en place d’une rue aux écoles ou l’opposition manifeste un impact important sur la circulation dans le quartier. Un modèle de transport peut alors être utilisé pour comparer les flux avant et après fermeture de la voie, et donc juger rationnellement des conséquences.

Le défi principal à adresser est la mise en place de modèles publiques en open data. Afin de faciliter la participation citoyenne, il est nécessaire de les accompagner dans l’utilisation des outils. La mise en place et configuration du premier modèle reste une expertise. La bonne nouvelle est que cette expertise est déjà financée par l’argent public lors du traitement des données des enquêtes de mobilités. Il suffirait alors de **partager aussi les modèles, sous un format ouvert**, et donc open source. Ces modèles pourront ensuite servir de base aux citoyens, qui n’auront plus qu’à ajuster quelques paramètres (fermeture d’un axe, réduction de la vitesse de circulation…) pour extraire des résultats tangibles.

# Exemple d’un cas d’usage à Chicago

[Des données publiques pour tester les modèles de transports sont disponibles](https://github.com/bstabler/TransportationNetworks), c’est le cas de la région de Chicago.

Après ajout des données dans Aequilibrae, le modèle de transport est prêt à calculer la répartition des flux de voyageurs sur chaque route, *nous allons ici nous concentrer sur un échangeur en particulier*.

Deux simulations sont calculées sur la région, la **première (violet) sans modification du réseau**, la **seconde (vert/bleu) avec une fermeture d’un tronçon de la voie rapide**.
![](https://wiki.lafabriquedesmobilites.fr/images/fabmob/e/e5/Aequilibrae1.png)


Les visualisations affichent le nombre de trajets prévus sur chaque route, plus le trait est épais, plus la route est empruntée. Il est assez simple de remarquer une déportation des trajets sur les axes parallèles, qui se retrouvent saturés.

Le modèle permet de calculer le temps moyen pour traverser ces axes, avec prise en compte de la congestion
<p style="display: flex">
  <img src="https://wiki.lafabriquedesmobilites.fr/images/fabmob/2/22/Aequilibrae2.png" width="45%">
  <img src="https://wiki.lafabriquedesmobilites.fr/images/fabmob/8/84/Aequilibrae3.png" width="45%">
</p>


Il permet aussi de calculer l’impact sur l’ensemble du réseau, avec, par exemple, un calcul du nombre de km totaux parcourus par an (estimation prudente):

* 27 616 millions de km dans le premier scénario
* 27 656 millions de km dans le second
* Cette différence de 40 millions de km est tout de même assez significative, en rappelant qu’elle résulte de la fermeture d’un seul axe.
* Avec 250gCO2 émis par km ([404gCO2/mile](https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle#driving)) en moyenne aux USA, notre décision de fermer un axe dépasse les **10 000 tonnes** supplémentaires d’émissions de CO2e par an ! À cette échelle, la conséquence est d’intérêt public.

Pour mieux comprendre ce que représente ces 10 000 000 kg de CO2, consultez le [calculateur d'impact co2 proposé par Datagir](https://impactco2.fr).
