---
title: 'Initialisation du projet, 1ère installation'
date: '30-01-2019 17:34'
taxonomy:
    category:
        - projet
    tag:
        - e-mission
---

Les discussions autour du projet ont commencé fin 2018, il est en fait état [dans ce journal](http://wiki.lafabriquedesmobilites.fr/wiki/Journal_du_montage_projet_de_commun_Kit_Traces).
Le projet démarre vraiment en janvier 2019, le chef de projet désigné est Patrick Gendre
Janvier a permis de cadrer le projet en se donnant pour objectif dans un 1er temps d'évaluer [e-mission](https://github.com/e-mission/e-mission-docs/tree/master/docs), et de recruter le développeur : la société ICIA Technologies, avec Fouad Khodja développeur principal pour la partie back-office (serveur), et Yann Prime pour la partie front (apps).

Le projet est une preuve de concept sur un territoire pilote, sur 6 mois, avec un budget limité apporté par la Fabrique des Mobilités.
Le projet est encore en phase de définition, est [décrit dans le wiki de la FabMob](http://wiki.lafabriquedesmobilites.fr/wiki/Kit_Minimal_pour_cr%C3%A9er_g%C3%A9rer_partager_des_traces_de_Mobilit%C3%A9). :  

##le choix d'un "framework" : e-mission

Après une première recherche de briques libres existantes, le logiciel e-mission développé par l’université de Berkeley semble bien répondre aux besoins. Néanmoins **avant de se lancer dans le projet PoC, un premier travail est d’installer et évaluer e-mission** . L'évaluation se déroulera jusque fin février sur 5 semaines. 
Si l’évaluation est concluante, le oroijet devrait être prolongé par un développement de 3 à 4 mois pour adapter et utiliser l’application sur un site réel au moins.

Le projet e-mission : https://e-mission.eecs.berkeley.edu/ 
Le code (et la doc) : https://github.com/e-mission
L’application mobile sur les stores Iphone et Android fonctionne mais le serveur tourne au ralenti (d’où le besoin de commencer par l’installer)
Les logiciels comprennent une partie mobile en javascript / cordova et une partie serveur en python / mongodb (scripts jupyter noteboook) qui récupère les traces, les traite, et calcule divers indicateurs.
La chercheuse qui développe e-mission, [K. Shankari](https://people.eecs.berkeley.edu/~shankari/), termine sa thèse dans un labo d'ingénierie logicielle à Berkeley et pourra faire un point chaque semaine avec nous au début du projet.

##première installation
Après 2 jours de tâtonnements au début, l'application a pu être installée vendredi 25/01 (y compris installation manuelle complète du serveur et compilation de l'application mobile se connectant à notre serveur). Les tests peuvent commencer, l'application fonctionne à 1ère vue, mais il faut en priorité comprendre le fonctionnement de l'application, plutôt complexe! Puis il s'agira de l'adapter un peu et de la publier, d'ici fin février...

##Livrables attendus:
- Application hébergée opérationnelle (hébergement à définir)
- [Evaluation de l’application](https://docs.google.com/document/d/1Bc8grBoDX9Co8IjGtyFPuTjURt5jwRGK_xv1IhoVFJ0/) : points forts / faibles / à améliorer
- Documentation / support de formation expliquant comment installer / configurer / adapter, prolongeant [la doc du workshop e-mission](https://github.com/e-mission/e-mission-docs/blob/master/docs/workshops/fall_2018/hands-on-overview.md ) 
