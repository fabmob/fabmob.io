---
titre: "Tracemob, sur les traces d'un commun de la mobilité ?"
date: 2023-03-22
image: /contenu/articles/2023/images/tracemob.png

résumé: Tracemob permet de collecter vos traces de mobilité. Comment ce commun, co-construit avec les collectivités, peut les aider à mieux concevoir leurs services de transport ?

categories: 
  - articles
tags: 
  - tracemob
  - coachCO2
  - mobicoach
  - selfdata
author: Alex Bourreau & Yann Bergamaschi
---

[Tracemob](https://lafabriquedesmobilites.fr/tracemob) est une application mobile développée par la Fabrique des Mobilités. Elle permet de collecter vos traces de mobilité et donc de disposer de votre historique de déplacements.

Jusqu'à présent, ce sont surtout Google, Apple ou votre opérateur téléphonique qui disposent de vos traces de déplacements, et la clef de cet entrepôt privé reste dans leur main.

Cette privatisation empêche l’utilisation des données pour un objectif plus noble: aider les collectivités à mieux planifier les infrastructures et les services de transport, tout en respectant la vie privée des utilisateurs.

## Où en est le projet ?

Jusqu’ici, le projet était développé avec le soutien de la communauté d'agglomération de la Rochelle qui expérimente [dans le cadre du projet Agremob](https://agremob.com/self-data-accueil/) un dispositif numérique unique permettant aux citoyens de mieux connaître leurs habitudes de déplacement et d’agir pour réduire leurs émissions de CO2.

Tracemob est l'application de recueil des traces de mobilité, associée au cloud personnel CozyCloud vers lequel les utilisateurs peuvent, sur la base du volontariat, envoyer les données pour alimenter [une application "CoachCO2"](https://agremob.com/self-data-les-outils/).

> **Participez à l'expérimentation Agremob !**
> Que vous soyez Rochelais ou non, des places sont encore disponibles pour participer à l’expérimentation, inscrivez-vous gratuitement [ici](https://framaforms.org/inscription-cozy-cloud-self-data-territorial-1679421806)


En 2023, cette co-conception tripartite continue avec le soutien d’une collectivité supplémentaire : le département des Alpes-Maritimes. Dans une logique de communs, ces administrations publiques ont établi ensemble une liste de futurs cas d’usages et fonctionnalités pour cette ressource partagée.

Le premier cas d’usage, implémenté par les équipes de CozyCloud au sein du coachCO2, porte sur la distribution du [forfait mobilité durable (FMD) aux fonctionnaires et agents du département](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000041858525/) se déplaçant à vélo, communément appelé "100 jours vélos". L’utilisation du traceur permet la génération automatique d’une attestation basée sur des trajets réels. Cette attestation, basée sur l'honneur, répond à [l'obligation de fournir un justificatif](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000046735483). Sa mise en place est prévue courant 2023.


![](/contenu/articles/2023/images/coachCO2_100j_velo.png)




## Sociologie et données de mobilité : qui tracer ?

Le programme Agremob accueille aussi des travaux du CNAM-GRICO sur une mise en perspective des enjeux et des difficultés liés à la "myriadisation" (ou crowdsourcing) des données de mobilité. La dernière publication, datant de fin janvier 2023, questionne les participants sur leur usage de Tracemob et du CoachCO2. Les rapports sont très complets et [accessibles ici](https://agremob.com/self-data-documentation-et-divers/#recherche). Voici quelques points intéressants à noter.

- Le programme Rochelais porte un discours très engagé sur le self data et la protection des données personnelles. Les données récoltées appartiennent à l’utilisateur, sont stockées dans son espace personnel, et ne sont partagés à personne. Cette approche noble séduit les utilisateurs "concernés" ou initiés, mais elle entre en conflit avec la volonté d’utiliser une partie de ces données pour alimenter des politiques de mobilités. Concrètement, alors même que la communication et le recrutement de participants était toujours centré sur le self data, les utilisateurs sont assez ouverts à partager leurs traces si elles sont effectivement utilisées par la collectivité. Pour certain, c’est même indispensable pour continuer d’utiliser l’application, la dimension d’auto-mesure ([Quantified self](https://fr.wikipedia.org/wiki/Quantified_self)) n’étant pas une motivation suffisante, entraînant désintéressement et désinstallation de l’application. Cet effort individuel est perçu comme acceptable uniquement en contrepartie d'un effet positif sur le collectif.

- Les retours utilisateurs nous confirment aussi que la division en deux applications, Tracemob et le CoachCO2, combiné à l’inscription au formulaire de participation, ont créé un embarquement utilisateur complexe. Ce dernier représente un frein à l’usage, assez classique pour des applications en cours de développement.

Ces deux points d’engagement citoyen accru et d’embarquement utilisateur simplifié sont centraux à la suite des travaux sur Tracemob, ils sont adressés dans la nouvelle expérimentation dans les Alpes-Maritimes. Il reste toutefois complexe de trouver des administrations publiques ouvertes à l’usage des données myriadisées comme élément alimentant la décision politique. Un travail d’acculturation est probablement nécessaire à ce sujet.

L’acculturation, des citoyens cette fois-ci, est une des suggestions d’évolution proposée par les chercheurs. Elle prendrait la forme d’un “tiers-lieux” de type [EduLAB numérique](https://pedagogie.ac-toulouse.fr/dane/edul-b) (à la croisée d’un dispositif de type Fablab, d’un LivingLab) avec, notamment, comme objectif de concevoir des activités impliquant des "littératies numériques" (aptitudes à comprendre le numérique) à fort impact territorial (environnemental, social, culturel...).

## **Infrastructures numériques et standardisation des données de traçage : le besoin de mutualiser les efforts**

Là où collectivités et citoyens se sensibilisent progressivement, les "innovateurs", eux, se sont déjà bien appropriés ces nouveaux outils de traçage. Notre [référencement de 2021](https://docs.google.com/document/d/1SiRNe51Ha24H7Gga2138Mw0k2o01YjSksHw__qj3MvA) en faisait déjà état, et les solutions sur étagère continuent d’apparaître. Tracemob demeure la seule alternative open source, mais n’est pas toujours le choix privilégié.

Face à cette multitude de solutions, nous voyons une opportunité de travail en commun sur les problématiques qui les rassemblent. Par exemple, en abordant le thème de la standardisation des données de mobilité. En effet, alors qu’il existe des formats comme le [GPX](https://www.topografix.com/gpx.asp) et des infrastructures numériques comme [Open Street Map (ou OSM)](https://www.openstreetmap.org), la donnée de trajet de mobilité est assez peu normalisée. Chaque traceur doit définir les caractéristiques d'un trajet, le libellé des différents modes de transport, les motifs de déplacement, etc. Un ensemble d’informations qui sera à son tour utilisé par d’autres outils. Sans standards, chaque intégration répète la même charge de travail liée à la labellisation et la conversion. Une charge qui limite le développement d’un écosystème d’outils de visualisation et de communication inter-compatibles qui pourrait agir comme une ressource “boite-à-outils” partagée par différentes collectivités.


## Infrastructures numériques et multiplicité des sources de données : le besoin d'interopérabilité

Mis au service des collectivités, le sujet dépasse les données de traces de mobilités. En effet, pourquoi se limiter à une seule source ? La multiplicité des entrées permet la fiabilisation de ces dernières et la construction de résultants plus complets. Ce sujet de fusion de données se paire assez naturellement avec la mobilité, comme en témoigne l’exemple proposé sur la page Wikipédia [Fusion de données](https://fr.wikipedia.org/wiki/Fusion_de_donn%C3%A9es).

En pratique, rassembler différentes sources de données nécessite tout de même un agrégateur. Le travail de ce dernier est grandement simplifié par les processus de standardisation, mais cet acteur agrégateur demeure indispensable. Lorsque l'échelle de l'ensemble de données dépasse un seuil critique, on parle d’infrastructure numérique.

Pour illustrer, voici deux types d’infrastructures numériques au service des collectivités:

- Les agrégateurs de données, qui homogénéisent les visualisations. Cela peut par exemple prendre la forme d’une plateforme centralisatrice comme [terriStory](https://terristory.fr/), qui aide à visualiser des données publiques. Ces derniers ne s'occupent généralement pas de la récolte et travaillent donc sur des données pré-construites, agrégées, simplifiées et anonymisées ;
- Les acteurs du self data, ou l’approche est plus centrée sur les données d’un utilisateur. Par exemple sous la forme d’un entrepôt de données personnelles comme [CozyCloud](https://cozy.io/). Cette fois-ci, la récolte est réalisée main dans la main avec l'utilisateur. La précision étant beaucoup plus fine et protégée, des informations plus sensibles peuvent être agrégées. Un exemple concret serait de combiner relevés bancaires (preuves d’achats de titre de transport) avec trace de mobilités pour identifier plus précisément le mode de transport utilisé. Cette approche offre des outils citoyens de self-data qui pourrait avoir des conséquences pour les collectivités, un effet de bord vertueux pour l’usage, comme indiqué par les chercheurs du CNAM-GRICO.

Peu importe le type d’infrastructure, elles ne doivent pas, de part leur définition même, se mettre en place en silos. Ces dernières doivent impérativement s’intégrer avec les outils déjà existants et activement utilisés par les administrations publiques. Un exemple d’outil, significatif dans la donnée de mobilité, est [l'enquête ménage-déplacement (EMD)](https://www.cerema.fr/fr/mots-cles/enquete-menage-deplacement-emd).

## **Les traces de mobilité, avenir des EMD ?**

Autour de ces enquêtes, la question est bien [posée par le Cerema lui-même](https://www.cerema.fr/fr/actualites/enquetes-mobilite-certifiees-cerema-emc2-principes): pourquoi continuer à faire des enquêtes de ce type, relativement longues et complexes à mettre en place, quand notre société regorge de données numériques accessibles en quelques clics ? En pratique, comme c’est souvent le cas sur les sujets écologiques, l’innovation intervient en complément additionnel, et non pas en remplacement de l’existant.

Un traceur de mobilité est une source pertinente pour enrichir ces enquêtes. Il permet théoriquement de simplifier une partie de la récolte, mais aussi de maintenir ces informations à jour. Cette actualisation répond en partie au problème d’obsolescence des enquêtes après quelques années, alors que les nouvelles éditions sont réalisées tous les dix ans en général.

Pour autant, un outil numérique basé sur un smartphone s’adresse nécessaire à un public bien plus limité qu’une enquête classique. Avec ce genre solutions, il est en effet difficilement envisageable de suivre les déplacements d’enfants à partir de quatre ans, ou plus spécifiquement de personnes financièrement vulnérables.

Une question reste aussi ouverte sur la précision de ces outils de traçage. La technologie de localisation GPS est très efficace, mais est-il vraiment nécessaire de suivre l’ensemble des positions d’un utilisateur pour compléter une enquête qui n’exploite finalement que l’origine, la destination et le mode de transport utilisé ? (le chemin emprunté pouvant être déduit par l’utilisation d’un modèle de transport comme [Aequilibrae](https://wiki.lafabriquedesmobilites.fr/wiki/Commun_Aequilibrae)). Si cette précision est jugée superflue, peut-être que s’en abstraire peut réduire la complexité des outils, et donc augmenter leur fiabilité et leurs performances, notamment sur l’utilisation de ressources.

Une telle simplification rejoint aussi le sujet du respect des données personnelles, ou chaque donnée récoltée doit correspondre à une finalité bien définie, sans excès. De fait, elle agit comme garde-fou au contrôle social, et débloque des freins à l’usage : ne tracer que lorsque c’est nécessaire est probablement plus acceptable pour les populations. C’est une démarche qui découle assez naturellement d’un processus de standardisation. Cette démarche de simplification entre aussi dans un argumentaire de réduction de l'impact environnemental du numérique associé au stockage massif et systématiques de données.

Pour autant, la question de choisir entre exhaustivité de la donnée et réduction de la complexité n’est pas si évidente. Réduire la couverture de récolte réduit aussi les possibilités de constructions et intégrations futures qui n’ont pas été imaginés au moment de la récolte. Elle ferme aussi potentiellement la porte à une fusion de sources performante.



## Vers de nouvelles coopérations autour de Tracemob

Tous ces sujets animent régulièrement l’équipe et les partenaires de la FabMob, et nous avons aujourd'hui encore la volonté d’ouvrir ces échanges et de les approfondir.
Depuis plusieurs années, mois ou semaines, nous avons en effet été plusieurs personnes et organisations à nous intéresser à Tracemob à travers la France, dans différents contextes, via différents canaux, sous différentes formes et dénominations (CoachCO2, MobiCoach ou OpenPath), mais sans réelle coordination entre nous.
C'est fort de ce constat et porté par l'envie d'impulser une nouvelle dynamique vertueuse de coopération autour du traceur de mobilité, que la FabMob organise une première rencontre à la fin du mois de mars 2023, pour faire le point sur nos réflexions et travaux respectifs autour de Tracemob, pour partager nos enseignements, nos envies et, pourquoi pas, dessiner ensemble de nouvelles pistes de collaboration. 

* *Quelle vision commune pour le projet ?*
* *Quel(s) besoin(s) pour en porter plus haut l'ambition et les réalisations ?*
* *Comment s'impliquer dans l'aventure, sous quel(s) rôle(s) et selon quelle gouvernance ?*
* *Etc.*

Autant de questions que nous souhaiterions nous poser collectivement, et que la FabMob se propose dès lors de faciliter dans un cadre informel et convivial. Cette rencontre se tiendra en ligne et sera [documentée en ligne](https://lafabriquedesmobilites.fr/tracemob) afin d'en partager les principaux enseignements et de susciter l'intérêt au delà du petit cercle qu'elle réunira. Alors, affaire à suivre !