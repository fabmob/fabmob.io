# fabmob.io


Le nouveau site Web de la FabMob France.

## Comment modifier le contenu

1) se connecter ou créer un compte github

### Ajouter ou modifier un article de blog

Les articles sont dans le dossier [`/articles`](https://github.com/fabmob/fabmob.io/tree/master/contenu/articles). Ce sont des fichiers .md dits "markdown", qui est une alternative 10x plus simple au .doc. 

Pas de panique, ça s'[apprend en 5 minutes](https://learnxinyminutes.com/docs/fr-fr/markdown-fr/) puis ça se pratique ;). 

▶️ Concrètement : 
- si vous avez les droits sur fabmob (donc par exemple vous êtes membres de l'équipe), alors vous allez travailler directement *dans le dépôt principal de code*. Sinon, github vous proposera de créer un "fork", une copie qui vous appartient, et à partir de ce fork une "pull request", qui constiste à dire : "eh, fabmob, j'ai fait cette modification chez moi, et j'aimerais que vous l'appliquiez au dépôt principal :)".
- pour créer un fichier, une fois connecté à votre compte github, cliquez sur `Add file` > `Create a new file`, remplissez son nom en haut (par exemple 2019-tu-me-manques.md). Le .md est à ajouter impérativement à la fin de votre nom d'article. 
- pour modifier un fichier, cliquez sur l'icône crayon 🖋 en haut à droite, puis modifiez-le. 

En début de fichier, vous devez respecter un peu de formalisme dans un deuxième format très intéressant et simple qu'on appelle le YAML. Si vous voulez, vous pouvez suivre le tuto ["le YAML pour les nuls"](https://velolib.re/documentation/introduction-yaml). 

```yaml
---
title: Bouger, un phénomène culturel intégral
date: 2000-04-26
image: https://i.imgur.com/OZEwzs5.jpg
résumé: Le résumé est important pour la liste des articles qui s'affiche sur le site, sinon le premier paragraphe sera extrait.
categories: 
  - articles
  - innovation
tags: 
  - imaginaire
author: Gabriel Plassat
---

Blabla

## Mon sous-titre

Blabla2

```

> Au sujet du titre : il faut s'efforcer de mettre des titres courts, moins de 10 mots (par exemple "Vers un bloc opératoire décarboné et open source"), d'une pour que le titre ne dépasse pas sur la page d'accueil du blog, et de deux parce qu'un article de blog avec un titre trop long sera beaucoup moins lu ! Le `résumé` est là pour en dire plus ;) 

Pour le contenu principal, c'est au format `markdown`. Sur github, l'éditeur ne propose pas de boutons (par exemple mettre un paragraphe en gras). Si vous préférez, vous pouvez créer votre contenu dans pad.fabmob.io ou un autre outil et copier coller cela dans l'éditeur github une fois terminé. Ctrl-a (sélectionner tout), Ctrl-c, Ctrl-v, modifier le contenu, puis pareil en sens inverse ;)

Pour les images, à la fois l'image de couverture (`image: xxx` dans l'en-tête) et les images du corps de l'article, vous avez le choix : 
- soit mettre des images via l'interface de github dans le dossier de l'année de l'article [contenu/articles/2021/images](https://github.com/fabmob/fabmob.io/tree/master/contenu/articles/2021/images), puis référencer l'image avec un lien relatif comme ceci : `image: /contenu/articles/2021/images/monimage.jpg` ou dans le corps de l'article comme ceci : `![description de l'image](contenu/articles/2021/images/monimage.jpg)`
- soit utiliser un service externe comme imgur.com ou piquer une belle image libre de droit sur unsplash.com et référencer l'URL complète 

Avec le contenu juste au-dessus (et si possible, un texte un peu plus intéressant de votre création), il vous suffit alors de cliquer tout en bas de la page sur le bouton vert "Commit changes". 

Vous arrivez sur un écran qui vous permet de visualiser vos changements qui est surtout intéressant quand vous modifiez quelque chose car vous verrez des lignes rouges (supprimées) et des vertes (ajoutées). 

Cliquez sur "Create pull request". Les membres de l'équipe qui suivent ce site auront une notification et pourront discuter / valider vos changements. N'ayez pas peur de tenter quelque chose : tout se corrige, tout s'améliore, github est fait pour discuter des changements 🙂

Bravo 👏 !

### Modifier le contenu d'une page de texte

Certaines pages du site, celles de la section à-propos, sont dans le dossier [/contenu](https://github.com/fabmob/fabmob.io/tree/master/contenu).

Par exemple, la page d'accueil "à-propos" [ici](https://github.com/fabmob/fabmob.io/blob/master/contenu/à-propos.md). C'est du markdown. Pour les modifier, voir la section au-dessus à propos des pages de blog, c'est le même procédé mais sans l'en-tête entre les `---`, juste du markdown.

D'autres contenus sont des fichiers .yaml. Ils nous permettent de [lister les membres](https://github.com/fabmob/fabmob.io/blob/master/contenu/ecosystème.yaml) et de [lister les communs](https://github.com/fabmob/fabmob.io/blob/master/contenu/communs-fabmob.yaml) que l'on veut mettre en avant. Ils sont lus par les pages Ecosystème.js et Communs.js, des pages qui mélangent du Javascript (le langage de programmation du Web) et du HTML (le langage d'affichage des pages Web) pour afficher les pages dans le navigateur.


## Infos techniques 

C'est un site écrit en Javascript/React, comme une `single page application` très simple, sans dépendance à un framework comme create-react-app, Gatsby ou Nextjs. 

> Rappelons-nous les objectifs de ce nouveau site en 2020 : remplacer un Wordpress pas à jour, lent, usine à gaz qui sert surtout pour le blog et comme mauvais site vitrine, pas dispo en https, et qui de toute façons nécessitait régulièrement de faire appel à un développeur.

> Nous avons estimé que les gains du server-side-rendering ne sont aujourd'hui plus aussi important qu'à l'époque. D'après les dernières infos, le moteur de Google (le moteur utilisé en écrasante majorité par les Français) indexe très bien les pages générées côté client, la grosse différence étant le temps de traitement qui peut être allongé de quelques jours, qui ne nous touche ici que très peu.

Le site utilise un mini-moteur de blog intégré, `Article.js`, développé pour github.com/laem/blog pas encore assez complexe pour mériter d'être externalisé dans son propre dépot, qui lit les articles présents dans `articles/xx/x.md`, .md étant le format markdown utilisé notamment ici sur Github, sur pad.fabmob.io (Codimd), ou encore forum.fabmob.io (Discourse).

Du point de vue CSS, on a commencé à styler les éléments HTML "nativement", sur le même principe que l'excellent https://andybrewer.github.io/mvp/, puis à utiliser style-components en mode attribut `css` parce que c'est vraiment pratique pour itérer, avant de construire notre propre bibliothèque de composants.

Le site est hébergé par Netlify, pour sa simplicité d'utilisation, sa gratuité et sa performance. N'en déduisez pas qu'il est servi depuis Silicon Valley à l'autre bout du monde : le code de ce dépôt est compilé en un site statique qui est déposé par Netlify sur un CDN, content delivery network. Autrement dit, quand vous tapez lafabriquedesmobilites.fr depuis Rennes, il sera servi par des serveurs à Rennes, Paris ou Berlin, mais pas San Francisco. 

⚙️ Pour le lancer sur votre machine, installez node, yarn puis faites `yarn && yarn start`. 

