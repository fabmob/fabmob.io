---
title: 'des traces aux déplacements'
date: '20-03-2019 10:33'
publish_date: '20-03-2019 10:33'
taxonomy:
    tag:
        - e-mission
        - traces
        - openestreetmap
---

cf. la [présentation de e-mission](https://docs.google.com/document/d/1Bc8grBoDX9Co8IjGtyFPuTjURt5jwRGK_xv1IhoVFJ0/edit#heading=h.wz3dqbm24da9)

Le capteur GPS du smartphone produit des informations de position et vitesse, donc des traces brutes. Pour en faire des informations de déplacement, il faut ensuite nettoyer les données, en extraire des trajets, découpés en sections en détectant le mode de déplacement. A partir de là, on peut produire des indicateurs, des cartes, permettre à l'utilisateur de corriger ou compléter l'information (en indiquant le motif par exemple), et faire des analyses (notamment en utilisant des techniques d'apprentissage ou de "machine learning" pour par exemple corriger le mode ou compléter le motif, etc.). 

Les informations de déplacement pourraient aussi tirer parti d'autres capteurs (antenne wifi ou bluetooth pour vérifier qu'on est dans un transport public, capteur de pression pour préciser la dénivelée ou la profondeur en sous-terrain dans un metro quand), accélération, micro...) et d'informations issues d'autres sources (validation, paiement...). L'extraction d'information de déplacement pour un individu et pour une population sur un territoire est un sujet de recherche depuis des années avec de nombreuses solutions et de nombreux algorithmes testés. De même pour l'optimisation du recueil du smartphone, prenant en compte des problèmes techniques comme la consommation électrique ou l'accès au réseau mobile pour communiquer avec le serveur. Ce n'est pas l'objet du projet. Nous partons d'une solution existante, e-mission, qui a montré qu'elle fonctionnait à peu près correctement dans plusieurs cas d'usage. Avant d'envisager d'améliorer ces solutions, ce qui pourra impliquer des développements pointus, nous commençons par faire fonctionner e-mission tel qu'il est.

Voici notre compréhension actuelle de la transformation des traces en déplacements:
1. e-mission utilise uniquement les informations de position et de vitesse du GPS
2. les données sont créées dans l'app (côté téléphone), puis envoyées (de manière asynchrone) pour être traitées par le serveur, dans un "pipeline" de traitement  ; dans le code on trouve en fait 2 pipelines, mais seul le premier - [intake](https://github.com/shankari/e-mission-server/blob/ground_truth_matching/emission/pipeline/intake_stage.py) - est opérationnel (le second, qiu vise à modéliser les déplacements à plus haut niveau, est encore en développement)
3. nous avons utilisé une branche du code qui permet de mieux identifier les sections en Transport Collectif ; cette branche n'est pas encore "mergée" avec la branche principale (master) : https://github.com/shankari/e-mission-server/tree/ground_truth_matching
4. les étapes du pipeline sont les suivantes:
- récupération des données de l'app déjà enregistrées en base
- découpage en trajets (trips): après 5' d'immobilité (seuil paramétrable), on considère qu'il s'agit d'un autre trajet
- découpages en sections : 
- lissage des sections
- nettoyage / rééchantillonage temporel des échantillons
- détection du mode de déplacement : le mode est détecté en fonction de la vitesse, et, pour le TC, du fait que la section commence et termine à proximité d'un arrêt de TC (les arrêts de TC sont trouvés sur la base openstreetmap interrogée par l'API overpass)
- vérification des modes actifs
Ces traitements ne s'appuient pas que sur les données GPS (positions, vitesses), mais largement aussi sur le MOTION ACTIVITY détecté par l'OS (android ou ios) qui déjà distingue marche, vélo, véhicule à moteur : c'est dommage, car cela fait que le pipeline de traitement ne pourrait pas traiter des fichiers GPX (il manquerait l'info Motion Activity)
L'appli mobile permet à l'utilisateur d'informer sur un incident et de corriger le mode, ou compléter le motif d'un déplacement.

Le découpage des traces entre déplacements indépendants, et des déplacements en trajets empruntant un seul mode est déterminant : il y a énormément de recherche sur la détection de mode mais elle ne peut fonctionner correctement que si, en amont, les déplacements ont été découpés correctement. C'est souvent une lacune dans les travaux de recherche trop pointus.
Autre point essentiel en pratique, les algorithmes de détection de mode qui s'appuient sur des données très riches (un relevé GPS par seconde par ex.) peuvent ne pas correspondre à ce qu'on sait faire actuellement avec les smartphones, notamment en termes de consommation électrique.
Enfin, dans des déplacements multimodaux en environnement urbain dense, il ne faut pas espérer des taux de détection de 100%; 75% est déjà un bon taux.

Les résultats intermédiaires sont enregistrés au fur et à mesure des étapes du pipeline (dans des [types de données appropriés](https://github.com/e-mission/e-mission-server/blob/master/emission/core/wrapper/entry.py)).