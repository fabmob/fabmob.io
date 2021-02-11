---
title: "Le MaaS est mort, vive le MaaS"
date: "2018-06-21T08:36:50.000Z"
categories: 
  - "innovation"
  - "la-fabrique-fr"
tags: 
  - "compte-mobilite"
  - "connect"
  - "maas"
author: "Gabriel Plassat"
---

Le MaaS est un mot nouveau pour un concept ancien développé dans [**plusieurs articles**](http://transportsdufutur.ademe.fr/2009/11/autorite-des-transports-vers-une-revolution.html?hilite=%27collectivit%C3%A9s%27) du blog Transports du futur et Ateliers de la FabMob (**[autre article](http://transportsdufutur.ademe.fr/2011/03/lapport-des-tic-dans-les-transports-vers-le-citoyen-mais-egalement-vers-lautorite.html?hilite=%27vers%27%2C%27citoyen%27)**). Il ressort essentiellement que désormais le liant entre les services se fait à la fois en physique (les panneaux indiquant le bus dans le métro, le ticket compatible ou pas, les horaires correspondants ou pas) et en numérique.

Jusqu’à présent, parmi les 4 ingrédients d’une mobilité (infrastructure, énergie, véhicule et information), le 4ème joue désormais un rôle central et re-questionne les 3 autres. Par exemple, la hauteur d’un trottoir est déterminée pour être à la fois compatible aux humains, incompatibles aux véhicules à faible vitesse tout en permettant aux véhicules de s’y approcher (nous reviendrons sur les trottoirs) pour assurer le « transfert » d’un mode à l’autre. Qui a l'information interrogeable par des algorithmes sur chaque mètre de trottoir ?

Ces 4 ingrédients, jusqu’à présent menés en silos dans les entreprises et les collectivités, s’appuient sur des dynamiques industrielles spécifiques avec leur temporalité, leur type de contrat, leur ontologie. Les analyses dans d’autres domaines comme le e-commerce montrent que certains acteurs comme Amazon sont capables en moins de 10 ans de construire l’infrastructure numérique (AWS) sur laquelle peut venir s’appuyer une multitude d’acteurs. Dans la mobilité, Google est très près de reproduire cela avec GMap et les actions en cours de Sidewalk labs dont [**http://coord.co**](http://coord.co) et **[curb](https://coord.co/docs/searchcurbs)** (les trottoirs). Une fois positionné, il devient impossible à déloger ni à concurrencer. Dans ce cas, les développeurs des opérateurs de services de mobilité viendront se connecter sur les API de Coord.co parce que :

- Ça marche
- C’est simple
- C’est gratuit ou pas cher

Coord se développe aux USA et démarche **aujourd’hui** les entreprises et territoires français. Qui en France ou en Europe fait ça ? Personne. Chaque consortium construit son MaaS local en espérant ensuite le « répliquer » ailleurs. C’est une impasse à plusieurs titres :

- C’est (beaucoup) trop lent,
- Chaque consortium est persuadé de créer la référence, donc personne ne la crée,
- C’est (beaucoup) trop cher à maintenir et faire évoluer.
- Il s’agit de portails et non de plateformes.

Dans un autre domaine, celui de la voiture autonome, Baidu avec **[http://apollo.auto](http://apollo.auto)** a choisit il y a 2 ans l’open source pour rattraper son retard vis à vis de Google et positionner la Chine au premier plan. C’est désormais chose faite. **L’open source est devenu un moyen d’amener un grand nombre d’acteurs hétérogènes à contribuer sur sa plateforme, pour qu’elle devienne une référence mondiale** :

- plus de 80 industriels dont des européens utilisent donc contribuent sur Apollo,
- le gouvernement chinois en a fait le programme national de la voiture autonome,
- des applications industrielles sont déjà disponibles à la fois sur des véhicules légers et lourds.

A la Fabrique, nous sommes convaincus que l’open source est le seul moyen pour l’Europe de résoudre (en partie) sa dette numérique. Nous sommes passés de filières industrielles alignées avec des donneurs d’ordre et des sous-traitants à un écosystème à perpétuelle recomposition. Il n’y a pas d’autres solutions pour avancer. L’open source présente notamment les avantages suivant :

- Plus besoin de construire la méga-plateforme à 10 milliards, fonctionnons par brique élémentaire. Hiérarchisons et décomposons le problème pour distribuer les tâches et construisons des API ouvertes et documentées. IDF Mobilités a ouvert la voie sur le covoiturage. Il s’agit de passer à l’échelle et d’industrialiser la démarche avec les mêmes moyens financiers,
- Chaque brique pourra évoluer plus facilement, de façon distribuée,
- Tous les acteurs volontaires pourront à la fois utiliser et contribuer,
- Les licences permettront de maîtriser l’exploitation des ressources produites pour qu’elles ne soient pas réappropriées par les GAFA sans contrepartie.

Notons que Coord.co s’appuie lui aussi sur des briques open source comme [**Open Trip Planner**](https://medium.com/coord/the-open-source-ecosystem-powering-coords-router-af6f9ccbeb69) et [**SUMO**](https://github.com/sidewalklabs/sumo-web3d/) pour la simulation urbaine et y contribue !

## Commençons par l'authentification

Un premier composant est essentiel à produire au plus vite sur le modèle de France Connect : un système d'authentification unique pour tous les services de mobilités. Ceci permettra de :

- Simplifier l’accès en un clic pour bénéficier des tarifs adaptés à son cas,
- fonctionner pour tous les modes de déplacements sur tous les réseaux (_roaming_)
- Permettre à chacun de conserver et retrouver ses données de mobilités.

Là aussi Sidewalk labs vient d'annoncer le 12 juin (voir [**article**](https://medium.com/coord/the-future-of-identity-in-the-mobility-market-c6f2b032b3a4)) qu'il développe une solution d'authentification unique pour tous les modes. Notons encore que Sidewalk labs utilise des bases open source pour ne pas partir de zéro comme [**Open ID Connect**](http://openid.net/connect/). Après Google Connect pour s'inscrire, Mobility Connect (by Google)... Si Sidewalk labs réussit le développement puis amène 30% des opérateurs, ce standard va s'imposer. Ce n'est pas un détail car ce module permet à Google d'accéder aux données, de connaitre les pratiques. Nous savons maintenant l'importance stratégique de l'authentification.

Depuis quasiment un an, la FabMob travaille sur cette idée appelée « **[Compte Mobilité](http://wiki.lafabriquedesmobilites.fr/wiki/Compte_Mobilit%C3%A9)** » avec des industriels et des territoires. **La Fabrique pourra, comme nous le faisons sur deux communs actuellement, rassembler les compétences et une partie du budget pour garantir sa production. Là aussi nous pensons que l'open source est le seul moyen pour rassembler un maximum d'acteur pour produire une première solution.**

## Capitalisons sur les mêmes outils

Les outils de la FabMob sont à disposition pour documenter, capitaliser et ainsi faciliter la production de ressources ouvertes opérationnelles : **[wiki](http://wiki.lafabriquedesmobilites.fr)**, **[chat](https://chat.fabmob.io/home)**. Nous vous invitons dans chaque projet, chaque consortium, à documenter, renseigner les Acteurs impliqués, les personnes, les ressources produites, les besoins de formation, les thèses, etc…

Tous les communs indexés sur le wiki sont à exploiter en priorité et toutes les productions ouvertes pourront être ajoutées.

## Mondial by Design

N’attendons pas de finaliser une solution locale pour regarder comment la répliquer. Impliquons dès le départ des acteurs étrangers pour mettre en tension et révéler la volonté réelle de produire des livrables utilisables au niveau européen et international. La FabMob est maintenant implantée au [**Québec**](http://wiki.lafabriquedesmobilites.fr/wiki/Centre_d%E2%80%99excellence_des_communs_technologiques_pour_la_mobilit%C3%A9), bientôt en Afrique avec des contacts en Europe. Ce réseau va à la fois renforcer les outils mutualisés et produire de nouvelles ressources. Impliquons les dès le départ.

## Tribune

Le temps est compté pour rassembler les compétences, les financements, aligner les différentes parties prenantes et produire une base technique mutualisée pour l'Europe. Si vous adhérez au constat et à la démarche, souhaitez y prendre part : relayer ce message et [**co-signer cette tribune**](https://docs.google.com/forms/d/e/1FAIpQLSfRCfltm9fPg3OMepb_k3GiSB3jaf0Irsfa281bIZGJ57Vlvg/viewform?usp=sf_link) !
