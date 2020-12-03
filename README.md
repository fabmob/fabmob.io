# fabmob.io


Expérimentations sur un nouveau site Web pour les FabMobs : présentation générale et page pour chaque FabMob.

Un site écrit en React, comme une `single page application` très simple, avec une gestion de la traduction des plus simples possibles : de nouvelles pages partageant entièrement le style.

J'ai pensé à Next et à Gatsby, mais je préfère pour l'instant une plus grande simplicité, ayant déjà implémenté un système de blog super simple sur https://github.com/laem/blog. Rappelons-nous de l'objectif : remplacer au plus vite le site actuel, un Wordpress pas à jour, lent, usine à gaz qui sert surtout pour le blog et comme mauvais site vitrine, pas dispo en https.

On a commencé à styler les éléments HTML "nativement", sur le même principe que l'excellent https://andybrewer.github.io/mvp/, puis à utiliser style-components en mode attribut `css` parce que c'est vraiment pratique pour itérer, avant de construire notre propre bibliothèque de composants.
