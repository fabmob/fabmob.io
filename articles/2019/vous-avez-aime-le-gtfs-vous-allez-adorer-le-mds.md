---
title: "Vous avez aimé le GTFS, vous allez adorer le MDS"
date: "2019-08-28T07:04:21.000Z"
categories: 
  - "innovation"
tags: 
author: "Gabriel Plassat"
---

Wikipédia nous dit que General Transit Feed Specification (GTFS, traduction littérale : spécification générale pour les flux relatifs aux transports en commun) est un format informatique standardisé pour communiquer des horaires de transports en commun et les informations géographiques associées (topographie d’un réseau : emplacement des arrêts, tracé des lignes). GTFS, originellement conçu par Bibiana McHugh, une responsable des systèmes d’information chez TriMet, l’autorité organisatrice des transports urbains de l’agglomération de Portland (Oregon), a été développé par Google et TriMet, et initialement dénommé Google Transit Feed Specification. Google a donc structuré le format des données des transports en commun dans la plupart des villes dans le monde (France compris). Le MDS arrive de Los Angeles …

Le MDS (Mobility Data Standard) est un ensemble de spécifications de données et d’exigences de partage de données pour les trottinettes et bicyclettes électriques sans station. Inspirés de GTFS et de GBFS, les objectifs du MDS sont de fournir aux municipalités des normes de données relatives aux API et aux données afin de les aider à intégrer, comparer et analyser la mobilité sur leur territoire. Le MDS aide ainsi la ville à connaître et analyser les informations provenant d’entreprises qui exploitent des trottinettes et vélos sans station dans l’espace public. MDS est également un élément clé de l’infrastructure numérique qui aide les villes et les régulateurs tels que le ministère des Transports de Los Angeles (LADOT) à mieux comprendre les pratiques de mobilités. Les opérateurs de services de mobilité sont tenus de partager leurs données avec LADOT dans le cadre du permis d’exploitation avec la ville de Los Angeles. La normalisation de la collecte de données entre différents fournisseurs améliore la coopération, l’innovation et l’efficacité du réseau de transport de la ville.

MDS est actuellement composé de deux composants distincts:

- L’API (Application Program Interface) de l’opérateur a été publié pour la première fois en mai. Lorsqu’une municipalité interroge des informations auprès d’un opérateur de mobilité, l’API dispose d’une vue historique des opérations dans un format standard.
- L’API de l’agence a été publié pour la première fois en avril 2019 pour être mis en œuvre par les agences de régulation. Les opérateurs interrogent l’API de l’agence lorsqu’un événement se produit, comme un voyage commençant ou finissant.

La spécification de données de mobilité MDS est un projet Open Source entièrement accessible sur [**GitHub**](https://github.com/CityOfLosAngeles/mobility-data-specification). À Los Angeles, les opérateurs de mobilité de trottinettes et bicyclettes électriques sans station doivent fournir des informations en temps réel sur le nombre de véhicules en circulation à un moment donné, où sont les véhicules et sur l’état des véhicules. Les informations supplémentaires comprennent:

- Positionnement du stationnement
- Coût d’exploitation
- Coût client
- Utilisation du véhicule
- Pourcentage de charge de la batterie
- Données de départ et d’arrivée

Le MDS est régit par plusieurs principes :

- Open-Source: permet à toute ville ou entreprise d’utiliser MDS et les produits associés en tant que service au sein de leur ville, exempt de redevances ou de droits de licence.
- Concurrence: favorise un marché concurrentiel pour le développement de produits par les entreprises en tant que service en créant une plate-forme unique où tout le monde est invité à participer et construire.
- Données et confidentialité: adhère aux meilleures pratiques en matière de normes de confidentialité, s’engage à la transparence de la collecte de données et, avant tout, la protection de la vie privée des citoyens.
- Harmonie: encourage une réglementation cohérente afin que les prestataires puissent proposer des services à faible coût.
- Durabilité: prépare les villes à réglementer les services de transport de faible émission, résilient et, finalement, meilleur pour l’environnement.

Initié à Los Angeles, MDS a déjà conquis de nombreuses villes américaines et au-delà. En s’appuyant sur ce standard, les acteurs se sont fédérés au sein d’une fondation : [**Open Mobility Foundation**](https://www.openmobilityfoundation.org/about/).

Open Mobility Foundation (OMF) est une fondation pour développer des logiciels open source dédiés à la mobilité, en commençant par se concentrer sur la spécification des données de mobilité (MDS). En créant une fondation open source, OMF est en mesure d’offrir un environnement sûr et efficace aux parties prenantes, notamment aux municipalités, entreprises, experts techniques, tout en garantissant la protection de la vie privée. Il s’agit ainsi de mettre au point des outils de gestion de la mobilité urbaine aidant les agences publiques à atteindre leurs objectifs.

Cette initiative américaine souligne l’importance des standards de données et le rôle clé des logiciels open source pour mutualiser les efforts et aider les autorités organisatrices à se concentrer sur leurs missions de planification et régulation. Finalement une autorité organisatrice doit absolument garder la main sur :

- La gestion de l’espace public : où, quand, comment les opérateurs et leurs véhicules peuvent se déployer et sous quelles conditions,
- La hiérarchie dans l’utilisation des voiries pour piloter l’usage en fonction des modes, des temporalités et du territoire : à cette heure, passer plutôt par cette voirie,
- La hiérarchie dans les modes de transport proposés pour aller de A à B : choisir plutôt le vélo ou le bus pour tel trajet,
- L’accès aux données des flux de véhicule et de personnes pour mieux comprendre, prévoir sur le moyen/long terme, réagir sur le court terme aux événements, incidents.

En conséquence, tout doit être mis en œuvre pour que les opérateurs respectent ces conditions et les plateformes numériques intègrent ces mesures dans les algorithmes.
