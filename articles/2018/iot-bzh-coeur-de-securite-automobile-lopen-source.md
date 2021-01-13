---
title: "IOT.BZH, au coeur de la sécurité Automobile avec l'Open Source"
date: "2018-05-22T16:24:26.000Z"
categories: 
  - "articles"
  - "innovation"
  - "innovation-fr"
tags: 
author: "Gabriel Plassat"
---

La société a été crée en juillet 2015 suite au désengagement des efforts de R&D d’Intel en France. La moitié des collaborateurs de **[IoT.bzh](https://iot.bzh/en/publications)** proviennent soit directement du projet Tizen de développement d’un Linux dédié à la télévision porté par Intel/Samsung, soit du projet WindRiver/Intel dont les équipes de recherche étaient basées à Vannes. Les travaux pour Intel/Samsung et tout particulièrement le modèle de sécurité applicatif des télévisions Tizen développé sur Vannes avec du code Open Source servent actuellement de base au modèle applicatif proposé par IoT.bzh.

Ceci a permis à IoT.bzh de se faire accepter comme un acteur de référence dans le cercle restreint de l'automobile connectée. Le modèle de sécurité porté par IoT.bzh a été choisi par le consortium **[Automobile Grade Linux](https://www.automotivelinux.org/)** et les grands constructeurs comme : Fiat/Chrysler, PSA, Renault ou Toyota avec en conséquence l'intégration de ce modèle de sécurité dans les prochaines générations de véhicules. L'Open Source est bien synonyme de sécurité et de robustesse des systèmes.

# **Le marché visé**

Les analystes prévoient que d’ici à 2020 tous les véhicules seront sous une forme ou une autre connectés à Internet. Si le concept de « véhicule connecté » est déjà une réalité pour la majorité des voitures haut de gamme, le Gartner group prédit que d’ici à 2020, plus de 250 millions de véhicules seront connectés. Le groupe d’analystes PWC rapporte que les constructeurs Allemands prévoient de 2015 à 2020 un quadruplement du chiffre d’affaires induit par les véhicules connectés, ajoutant près de 150 milliards de Dollars au revenu du marché existant de l’automobile.

Les récents incidents de Fiat-Chrisler qui a dépensé 150M$ pour faire une mise à jour de sécurité en urgence de ses Jeeps ou BMW qui a dû rappeler 2.2M de véhicules, ont mis à nu les modèles de sécurité actuels et révélés leur fragilité. Avec la généralisation des véhicules connectés, la cybercriminalité des voitures va devenir un business extrêmement viable. Tous les acteurs de ce marché sont donc en mesure de confirmer que :

> _Tous les véhicules seront connectés, et tout véhicule connecté sera attaqué_

Si l’impact de l’interconnexion des objets varie en fonction des secteurs industriels, tous les secteurs sont concernés par cette évolution : automobile, TV, téléphonie, domotique, nautisme, agriculture, etc. L’IoT devrait avoir un impact sur notre vie de tous les jours comparables à celui que nous avons connu dans les années 2000 avec l’explosion de la téléphonie mobile ou de la généralisation d’Internet.

# **Le modèle de cybersécurité applicatif d’IoT.bzh**

Le modèle proposé par IoT.bzh permet de fournir de manière native un modèle de sécurité de bout en bout à l'ensemble des applications exécutées sur la plate-forme. La sécurité n'est plus une option ajoutée après coup, mais une fonctionnalité intrinsèque native au système. Ce modèle représente une avancée majeure. Il permet de certifier qu'une application ne peut pas outre passer ses droits sans avoir à vérifier son code source. Cette avancée simplifie de manière significative les relations entre les donneurs d'ordre et les sous-traitants. Le système de développement lui est basé sur un modèle de virtualisation qui s'affranchit des dépendances attachées à l’environnement d'exécution. Ceci permet non seulement de simplifier et donc d'accélérer le démarrage des projets mais permet aussi de garantir la maintenance sur le très long terme. Il est en effet possible de stocker puis de reproduire un environnement de développement même 10 ou 20 ans après afin de faire des correctifs sur un système très ancien mais toujours en production. Enfin, le modèle d'exposition des APIs de manière sécurisée et indépendante du transport permet de concevoir des briques logicielles fonctionnelles indépendamment du modèle final d'intégration. Ce point est particulièrement important en Automobile où un même composant peut être déployé de manière très différente en fonction de la classe de prix du véhicule.

> _Ce mécanisme introduit donc de nouvelles opportunités de réutilisation des briques logicielles qui jusqu’à présent devaient être réécrites pour chaque nouvelle voiture._

IoT.bzh conçoit les composants techniques nécessaires à la sécurisation des applications sur l’ensemble de leurs cycles de vie, et développe un ensemble d’outils de développement pour rendre acceptable le coût et la complexité attachés à la mise en oeuvre et à la maintenance d’un projet industriel en environnement connecté & sécurisé. Le modèle de sécurité d'IoT.bzh a été retenu par le consortium AGL et notre objectif est d'atteindre les autres segments de marché ayant des problématiques comparables (Militaire, Maritime, Agricole, Industrie, Énergie, …). L’objectif technique est de simplifier et d’accélérer le développement des applications nécessaires au fonctionnement des objets connectés industriels.

Les succès d’adoption de ses composants techniques les plus visibles :

- La mise en production de la **[Toyota Camry début 2018 aux États Unis avec AGL](https://www.automotivelinux.org/announcements/2017/05/30/automotive-grade-linux-platform-debuts-on-the-2018-toyota-camry)**, dont IoT.bzh est le fournisseur du modèle de cybersécurité applicative.
- L’annonce par Amazon de la version 2 de son service « **[AWS Connected Véhicule Solution](https://aws.amazon.com/fr/about-aws/whats-new/2017/11/introducing-the-aws-connected-vehicle-solution/)** » basée sur le composant IoT.bzh d’acquisition des données CAN.
- La sélection par Nuance et Amazon pour leur service de reconnaissance vocale Alexa de l’architecture « **[AGL Advanced Audio Architecture](https://www.automotivelinux.org/announcements/2018/02/28/automotive-grade-linux-kicks-off-open-source-speech-recognition-vehicle-cloud-connectivity)** » dont IoT.bzh est mainteneur officiel (architecture & code source).

L'année 2018 s'annonce bien remplie avec la reconnaissance d'Amazon, le changement du siège à Lorient et l'ouverture d'un Garage dédié au Hacking des voitures :-) et l'ouverture de [**plusieurs postes**](http://wiki.lafabriquedesmobilites.fr/wiki/Automotive_Grade_Linux_IOT_BZH) !
