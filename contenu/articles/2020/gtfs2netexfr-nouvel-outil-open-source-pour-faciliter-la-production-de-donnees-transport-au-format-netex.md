---
title: 'Gtfs2NetexFr, nouvel outil open source pour produire des données transport'
date: '2020-06-08T06:16:19.000Z'
categories:
  - 'articles'
  - 'innovation'
  - 'innovation-fr'
  - 'territoires'
tags:
author: 'bertrand Billoud'
---

**A la demande de la Mission Innovation Numérique et Territoires (MINT), au ministère de la transition  écologique et solidaire, les équipes de Kisio Digital viennent de réaliser le Convertisseur de données** [**Gtfs2NetexFr**](https://wiki.lafabriquedesmobilites.fr/wiki/Gtfs2NetexFr)**, un programme informatique en open source qui permet aux équipes de** [**BetaGouv**](https://beta.gouv.fr/) **(concepteur de services  numériques pour les différents ministères) de convertir les 260 jeux de données de Transport public du format GTFS au format NeTEx (profil France). Ces données transport sont mises à disposition des réutilisateurs en open data sur le PAN (Point d’Accès National)** **que BetaGouv développe dans le cadre d’une convention conclue avec la MINT.**

Chez Kisio Digital, le format NeTEx fait partie des nombreux formats de données transport (Neptune, Trident, TransXChange, NaPTAN, KV1, GTFS, NTFS, GTFS RT, Siri… et NeTEx) que nous sommes amenés à manipuler, produire ou enrichir pour le compte de nos clients (Autorités Organisatrices de Mobilité et Opérateurs de transport principalement) et pour les réutilisateurs de données open data, qui les téléchargent sur le PAN [**https://transport.data.gouv.fr/**](https://transport.data.gouv.fr/) ou les consomment sur l’API de transport public **[www.navitia.io.](http://www.navitia.io)**

**Pour pouvoir utiliser ces nombreux formats, les rendre interopérables dans notre logiciel d’information-voyageurs Navitia ou sur une plateforme de services numérique de type MaaS,** **Kisio Digital investit depuis de nombreuses années dans sa _Data factory_, une usine numérique constituée de logiciels de traitement de données transport.**

En parallèle de cet investissement notre équipe a également développé une solide expertise, en lien étroit avec les producteurs de données transport et d’autres parties prenantes partenaires comme **[l’association Mobility Data.](https://mobilitydata.org/)** Dans cet écosystème de la données transport, le format NeTEx (Network Exchange) est aujourd’hui un passage obligé en la matière. Il est par ailleurs au centre des réflexions des acteurs européens, dans le cadre de [**Data4PT**,](https://www.uitp.org/news/data-heart-public-transport-uitp-launches-new-project-data4pt) le programme de partage de données entre acteurs de la mobilité initié par l’UITP.

**\_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_**

**Comment développer la production de données transport au format NeTEx ?**

Pourtant, force est de constater que le format **[GTFS](https://en.wikipedia.org/wiki/General_Transit_Feed_Specification)** reste le plus développé actuellement, même si le standard européen [**NeTEx**](https://en.wikipedia.org/wiki/NeTEx) est amené à prendre de plus en plus d’importance. Les producteurs de données sont aujourd’hui plus enclins à produire des données au format GTFS, et les réutilisateurs à les consommer, principalement pour des raisons de facilité d’usage. Ces deux formats ont leurs avantages, leurs limites et sont donc nécessaires pour améliorer la diffusion et la qualité de l’information-voyageurs. Pour démarrer et développer rapidement le nombre de jeux de données au format NeTEx, le plus simple est de convertir les nombreux jeux de données GTFS qui sont déjà disponibles. Pour cela, les équipes de Kisio Digital ont développé pour le compte des services de l’Etat français le Convertisseur de données Gtfs2NetexFr, qui prend en entrée les données de transport public au format GTFS et fournit en sortie les mêmes données au format NeTEx France.

**\_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_**

**Convertir les données transport du format GTFS au format NeTEx**

Concrètement, à chaque fois qu’un nouveau jeu de données transport au format GTFS sera produit ou mis à jour sur le PAN, un programme automatique déclenchera le convertisseur Gtfs2Netex pour obtenir les mêmes données au format NeTEx France. Dans ce cas précis, le Convertisseur Gtfs2NetexFr ne concerne que le profil France. Il existe d’autres profils NeTEx, en fonction du producteur de données, du contexte, du pays. D’autres outils de traitement de données de ce type seront développés par la suite. Et la façon dont nous avons réalisé Gtfs2NetexFr permet facilement à n’importe qui de forker le programme pour en faire un NetexFr2Gtfs ou Gtfs2NetexNL pour la Hollande, un Gtfs2NetexUK pour la Grande Bretagne ou un Gtfs2NetexBrz pour la Bretagne… les combinaisons en termes de connecteurs sont multiples.

**_« En dotant la plateforme transport.data.gouv.fr de ce service de conversion, nous souhaitons faciliter la réutilisation de données au format NeTEx, qui a été choisi au niveau européen, notamment dans le cadre du règlement délégué n° 2017-1926 sur la fourniture de services d’information multimodale »,_ explique Bernard Schwob, adjoint à la directrice de la MINT.**

**\_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_**

**Le choix de l’open source, dans une logique de service public, d’intérêt général et de bien commun**

Quoi de plus logique de réaliser des outils open source quand on travaille pour le compte de l’Etat ou d’une collectivité, dans une logique de Service public, d’intérêt général et de bien commun ? Cette idée petit à petit fait son chemin et s’impose progressivement dans le domaine de la mobilité et du numérique. **C’est cette logique de coproduction de communs que la** [**Fabrique des mobilités**](http://lafabriquedesmobilites.fr/communs/) **a initiée dès 2015 et qui regroupe aujourd’hui des acteurs publics et privés, dont Kisio, Transport Data Gouv ou Mobility Data par exemple, avec des projets concrets, des réalisations au service de l’innovation, dans une logique de mutualisation des ressources, de coopération et d’intelligence collective.**

Le code source de ce Convertisseur Gtfs2NetexFr est donc naturellement sous **[licence libre AGPL V3,](https://fr.wikipedia.org/wiki/GNU_Affero_General_Public_License)** exécutable sous un système d’exploitation GNU Linux. Cela signifie que n’importe quel développeur peut voir le code source du logiciel, le comprendre en lisant la documentation, le télécharger pour l’installer, proposer une amélioration s’il souhaite contribuer. La maintenance et la gouvernance concernant d’éventuelles contributions au logiciel Gtfs2NetexFr sera gérée par Kisio Digital. Le repository (dépôt du code source) est disponible sur la plateforme Github, les contributions sont les bienvenues : [**https://github.com/CanalTP/transit_model/tree/master/gtfs2netexfr**](https://github.com/CanalTP/transit_model/tree/master/gtfs2netexfr)

Et dans cette même logique d’open source, le logiciel Gtfs2NetexFr est développé en **[langage Rust](https://www.rust-lang.org/)** (langage informatique poussé par la Fondation Mozilla, très utilisé chez Kisio Digital, apprécié et reconnu par les développeurs pour ses performances techniques).

**\_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_**

**Et l’importance de l’humain pour diffuser des données transport de qualité**

Cet outil facilitera la vie, on l’espère, des personnes qui, comme nous, manipulent les données transport au quotidien. Et au-delà de l’outil, des technologies gardons en tête que **l’humain (et sa bonne intelligence non artificielle) reste aujourd’hui le maillon fort durant toute la durée de vie de la donnée transport,** des producteurs aux réutilisateurs finaux, en passant par les raffineurs (comme Kisio Digital) et parfois même les voyageurs quand on a recours au crowdsourcing via **[OpenStreetMap](https://www.openstreetmap.fr/)** dans le cadre de projets comme [**Jungle Bus**](https://junglebus.io/) ou les réseaux sociaux par exemple. Bravo à toutes celles et ceux qui participent aux mises à jour et mise en qualité régulières de données transport pour diffuser l’information-voyageurs la plus fiable. Et si jamais la donnée transport ou l’information-voyageurs vous intéressent c’est le moment de **[rejoindre Kisio Digital, plusieurs postes sont actuellement ouverts.](https://www.welcometothejungle.com/fr/companies/kisio-digital)** Et si vous avez des questions ou si vous voulez en savoir plus, contactez-nous par mail : [**info@kisio.com**](mailto:info@kisio.com)
