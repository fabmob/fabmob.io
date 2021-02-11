---
title: "Pourquoi nous avons (tous) besoin d’un Compte Personnel Mobilité ?"
date: "2019-01-11T17:47:51.000Z"
categories: 
  - "innovation"
tags: 
author: "Gabriel Plassat"
---

Nous avons à résoudre plusieurs paradoxes.

Dans un monde numérique, les principaux décideurs en matière de transport et mobilité que sont les collectivités et l’état ne disposent pas de données de qualité suffisantes pour en extraire les connaissances nécessaires aux bonnes prises de décisions.

> Il faut se rendre à l’évidence, les autorités (organisatrice de mobilité) n’ont plus “autorité” au sens étymologique du terme, c'est à dire un “savoir augmenté”. Google ou Uber ont désormais ce “savoir augmenté”.

En même temps, les citoyens auto-produisent de grandes quantités de données grâce à des plateformes privées étrangères, mais ils ne sont pas acteurs dans la gestion de ces données qu’ils considèrent comme un sous-produit lié à l’utilisation de la plateforme. En conséquence, plusieurs problèmes se renforcent chez toutes les parties prenantes rendant trop faibles et lents les changements de mobilité des citoyens au quotidien.

# Le tour des acteurs

Du côté de l’**Etat**, les aides et incitatifs deviennent illisibles, mal connus et difficiles à cibler. Certains donnent des avantages totalement asymétriques comme la voiture de fonction, le parking réservé, les SUV peu taxés. Les taxes, impôts et prélèvements sont également trop généraux et mal ciblés, conduisant à des situations insoutenables pour certains.

Pour le **particulier**, il est très difficile de connaître dans sa situation particulière la ou les solutions alternatives à la voiture et de recevoir les meilleures offres de mobilités ciblées correspondant à son besoin. Par ailleurs, ses propres données de mobilités sont éparpillés, détenues par divers organismes publics et privés, rendant complexes et lents l’inscription à un service de mobilité : permis de conduire valide (ou pas), nombre de point sur le permis, bonus/malus l’assurance, mais également facture d’abonnement de transport public. Pour chaque inscription dans un service de mobilité, il faut fournir les mêmes informations. Alors que Google vous propose de consulter vos traces de mobilité et envoie une fois par an, une partie de vos données, partiellement manipulables.

Du côté des **opérateurs de mobilité** (comme une société d'autopartage) il faut, par exemple, vérifier des permis de conduire scannés avec des risques, lenteurs et coûts; les procédures d’inscriptions sont longues conduisant à perdre des futurs clients en chemin. Les opérateurs de transports publics gèrent des tarifications d’une grande complexité pour satisfaire les différents publics rendant l’offre illisible pour tous.

Les **collectivités** et agglomérations sont obligés d’acheter des données temps réel soit à des sociétés type Coyote, soit à faire des deals avec Google/Waze. Une fois tous les 10 ans en moyenne, certaines lancent des enquêtes ménage déplacement coûtant plusieurs centaines de milliers d’euro, voire millions pour questionner quelques milliers de citoyens par téléphone. Cette asymétrie de connaissance entre des acteurs privés et publics est inédite, dangereuse. Les collectivités accèdent à des données d’usage des transports publics grâce aux DSP passées avec les opérateurs mais ces données sont partielles (uniquement les transports publics) et difficilement manipulables.

Pour **les entreprises et leurs salariés**, au niveau des RH, la prise en compte des coûts liés aux transports publics, à l’IKV et demain au forfait mobilité ne sont pas simples et fluides. Ces informations sont en général difficile d’accès pour optimiser les plans de déplacements des salariés. Ainsi environ 25% des salariés ont un établissement de la même entreprise plus près de chez eux (source [**1km à pied**](https://www.1kmapied.com/)).

# Le Compte Personnel de Mobilité

Le Compte Mobilité peut résoudre toutes ses frictions et apporter une réelle valeur ajoutée à toutes les parties prenantes. Paradoxalement ce n’est une “solution” de mobilité exprimée car elle ne se voit pas, ce n’est pas un service de mobilité, ce n’est pas une nouvelle offre.

Il existe déjà des Comptes dans d’autres domaines. Le plus proche serait [**le compte personnel de formation**](https://www.moncompteactivite.gouv.fr/cpa-public/) : individuel, géré par une structure neutre, il n’est pas attaché à votre employeur et vous suit tout au long de votre vie. La carte vitale pourrait s’en rapprocher même si vous n’avez pas accès dans votre compte santé à l’ensemble de vos consultations, médicaments achetés, analyses de sang, etc… Le Compte Personnel de Mobilité va plus loin que les comptes mentionnés puisqu'il jouera un rôle, plusieurs fois par jour.

La mise en œuvre d’un Compte Mobilité individuel ne nécessite aucune innovation, “juste” la coordination d’un ensemble d’acteur à aligner sur cet objectif et le leadership d’une structure “tiers de confiance”. il peut être développé en 6 à 12 mois avec un budget raisonnable au regard des bénéfices. La Fabrique a commencé à constituer des briques essentiels avec les moyens dont disposent une association. Voilà un résumé de ces briques :

- **Le** [**compte Mobilité**](http://wiki.lafabriquedesmobilites.fr/wiki/Compte_Mobilit%C3%A9) :
    - login / mdp pour accéder à son espace
    - “se connecter avec” : permet de se connecter à des services de mobilité avec son Compte Mobilité comme Facebook, Google connect ou encore France Connect.
    - accès à mes données de mobilité individuelle issues du traceur (voir plus bas), mais aussi les données issues de mes trajets achetés à des opérateurs (sncf, uber, blablacar, VLS…) soient revenant par le connecteur, soit demandé grâce au RGPD (voir plus bas)
        - possibilité de les visualiser
        - possibilité de les rendre accessibles (sans les partager)
        - possibilité de les partager avec des acteurs non marchands : “mes données pour la science”
    - accès à mon profil : famille, chômeur, étudiant, tranche revenus imposables pour bénéficier des meilleurs tarifs adaptés à ma situation.
    - gestion de l’accès à mes données à des tiers publics et privés.
    - API

- **Le** [**traceur**](http://wiki.lafabriquedesmobilites.fr/wiki/Kit_Minimal_pour_cr%C3%A9er_g%C3%A9rer_partager_des_traces_de_Mobilit%C3%A9) : il s’agit d’une application qui permet de générer ses propres données de mobilités (parcours, mode de transport, horaires) et de les verser automatiquement dans son compte en les hébergeant dans un Cloud Personnel. Cette application est open source, en cours de développement. Elle sera utilisable seule et également proposée à des applications tierces pour y être intégrée. Elle sera utilisable par des particuliers, des collectivités qui voudraient lancer des campagnes de création de données, des entreprises pour réaliser des PDE.
- **Un Cloud Personnel (de type Cozy Cloud)** : Il s’agit d’un espace de stockage de données personnel. Il assure également grâce à une autre appllication à développer des fonctions de visualisation de données et de gestion de l’accès à ses données  à des tiers publics ou privés.
- [**“Mes données grâce au RGPD”**](http://wiki.lafabriquedesmobilites.fr/wiki/R%C3%A9cup%C3%A9rer_vos_donn%C3%A9es_personnelles_de_mobilit%C3%A9) : le RGPD permet à chaque personne de demander à des acteurs marchands de vous restituer les données vous concernant. Ainsi, il est possible d’envoyer un mail à la SNCF, Uber, BBC, … pour leur demander une copie de vos données. Cette possibilité reste aujourd’hui réservée à des personnes compétentes en gestion de données et motivées. Il est possible de créer un dispositif pour simplifier cette demande et automatiser la gestion des fichiers reçus. Les mails seront envoyés automatiquement aux opérateurs et les données automatiquement versées dans son cloud.
- **et la livraison** : le compte Mobilité pourrait aussi intégrer vos préférences de livraison, celles que vous rentrez à chaque commande.

# Et demain ?

_Amandine a validé les nouvelles conditions de son app de transport public local qui intègre désormais le traceur. Ses traces seront donc créées et versées dans son cloud personnel. Son Compte Mobilité contient son profil étudiant, son permis, ses points et le bonus de son assurance. Les premières données commencent à arriver chaque jour, ainsi que son dernier voyage en train le week end dernier. Son profil, pour l’instant privé, affiche la répartition des modes utilisés en temps/km/nombre de trajet._

_Elle s’inscrit dans un nouveau service de vélos partagés uniquement via son Compte Mobilité en un clic. Ce soir elle verra ses trajets._

_Plusieurs mois plus tard, elle fait parti du groupe citoyen local et la collectivité leur propose un programme d’expérimentation sur une année. La collectivité souhaite (beaucoup) mieux connaitre les pratiques de mobilités des citoyens pour prévoir et organiser l’évolution des offres de transport et des infrastructures. En accédant aux profils des membres de l’association, la collectivité améliore ses connaissances tout en protégeant la vie privée. Il est même possible grâce à Cozy cloud et ses fonctions de big data distribué d’exploiter les données des citoyens sans les dévoiler. Ce nouveau type de contrat social entre des citoyens et la collectivité intéresse de plus en plus de monde._

_Sur la base de son profil public et en ayant activé “J’accepte de recevoir 2 offres par mois”, Amandine reçoit des offres de mobilité ciblées correspondantes à ses pratiques et des incitatifs de sa collectivité compte tenu de sa mobilité._

Ces briques en construction sont essentielles pour explorer de nouveaux champs de recherche à la fois techniques et sociales. Il s’agit d’étudier les différentes formes possibles de “contrat social” entre les citoyens et leur collectivités. Il est impossible d’attaquer de front un GAFA bien que qu’il dispose des données essentielles, ni de vouloir faire le Google français ou européen. Mais il est essentiel de pouvoir faire levier des formidables possibilités du numérique pour re-donner des connaissances et des outils aux décideurs. Le meilleur compromis sur ces sujets ne pourra se trouver qu’en expérimentant avec des outils modernes et adaptés.

Nous pourrons, par exemple, étudier les sujets suivants :

- Quel profil public de mobilité minimal utile et acceptable ?
- Quelle possibilités pour gérer / protéger les données de mobilité des citoyens ? les citoyens directement, une association de citoyen, une fondation, …
- Big data distribué : peut-on donner accès aux données à des algorithmes pour identifier des opportunités de covoiturage par exemple.

[**Nous cherchons**](mailto:lafabriquedesmobilites@gmail.com) des soutiens financiers et des partenaires intéressés et volontaires (collectivité, opérateurs de transport public, opérateurs de mobilité) pour itérer durant les phases de prototype et développement.
