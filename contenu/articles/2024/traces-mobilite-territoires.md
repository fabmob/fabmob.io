---
titre: "La mobilité des territoires vue via les Traces de mobilité"
date: 2024-09-12
image: /contenu/articles/2024/images/illustration_trace_territoire_principal.svg

résumé: "Huit finalités d'usages de données GPS (traces) et évaluation d'intérêt par un territoire. Article compagnon du dossier: l'open source pour observer la mobilité via données GPS."

categories: 
  - articles
tags: 
  - communs
  - opensource
author: Alex Bourreau
---

<div style="background-color: rgb(146, 229, 255); padding: 20px;">
<b>
Cet article est le compagnon de notre dossier complet: <a href="/blog/open-source-mobilite-trace-gps">l'open source pour observer la mobilité via données GPS (traces)</a>.
</b>
</div>

[Tracemob](https://lafabriquedesmobilites.fr/blog/tracemob-commun), notre projet d'application mobile permettant aux citoyens de mesurer l'impact de leurs déplacements, a franchi depuis quelques mois une nouvelle étape, grâce à son intégration à la technologie open source de [CozyCloud (CoachCO2)](https://cozy.io/fr/features/#coach-co2). Cette intégration technique nous a permis de retirer l'application Tracemob des stores de Google et Apple, et de concentrer nos actions d'association sur des travaux plus communautaires. Nous présentons ici les apprentissages issus d'un cycle de travail sur l'usage possible par une collectivité territoriale des données générés par des applications comme Tracemob.


## Qu'est-ce qu'une trace de mobilité ?

Dans notre définition, une trace de mobilité représente un ensemble d'information caractérisant le déplacement d'une personne. En son cœur, elle est composée d'une série de coordonnées GNSS (communément appelée GPS): latitude, longitude, altitude. Ces dernières sont souvent marquées d'un horodatage précisant dates et heures associées à chaque position.

Ces informations cœur sont généralement complétées, de manière automatique ou manuelle, du mode de transport utilisé et, plus rarement, de la raison du déplacement et d'informations sur l'utilisateur.

Elles peuvent aussi être grandement simplifiées en fonction des cas d'usage. Par exemple en ne considérant que les point de départ et d'arrivée approximatifs. Une information suffisante pour reconstruire de manière synthétique l'ensemble des trajets via des modèles de transport.

Historiquement, des objets spécialisés étaient conçus pour récolter ce type de données, mais de nos jours, tous les smartphones en ont la capacité. Et avec cette démocratisation, l'acte de récolte volontaire est aussi, malheureusement, devenu involontaire pour une majorité des utilisateurs, au profit des grands constructeurs (Apple, Google) qui tirent profit de ce nouveau vivier de données personnelles.

<img style="width: 30%" src="/contenu/articles/2024/images/traces-territoires-ui.png" />


## Quels usages ?

En redonnant le contrôle aux utilisateurs sur ces informations, nous percevons une opportunité de participation citoyenne. La récolte de traces est alors un outil comme un autre, qui peut aussi être utilisée pour une cause plus noble, comme l'aménagement des territoires pour une mobilité plus verte et respectueuse de ses usagers.

La problématique réside donc dans la conversion d'un ensemble d'informations techniques en un outil utilisable par une collectivité territoriale. Et ce, en respectant les règles autour des données personnelles et en priorisant la transparence pour les usagers.

Inspiré des indicateurs de mobilité habituellement extraits d'enquêtes standardisées, nous présentons **8 finalités d'usages de ces données**, les indicateurs associés, des exemples de visualisation, et l'intérêt perçu par une collectivité partenaire.

Même s'ils n'ont pas tous été implémentés, l'ensemble des indicateurs présentés ont été prototypés sur des traces de mobilités réelles. Ces propositions ont donc un fondement réaliste.

### Finalité 1: Analyser l'évolution des déplacements

#### Indicateurs:
* Nombre total de trajets par mode de transport
    * Divisible par distance, par exemple déduire que 91% des déplacements de moins de 500 mètres sont à pied.
* Durée moyenne des trajets par mode de transport
* Distance moyenne des trajets par mode de transport
* Vitesse moyenne d’un déplacement
* Distance moyenne parcourue par jour
* Nombre moyen de déplacements par personne, par jour

#### Visualisation exemple


<div style="display: flex">
<img style="width: 48%" src="/contenu/articles/2024/images/traces-territoires-trips-per-mode.png">
<img style="width: 48%" src="/contenu/articles/2024/images/traces-territoires-distance-per-mode.png">
</div>


#### Intérêt
- La part modale par nombre de trajets est très utile.
- Les informations de distance et de vitesse moyenne le sont moins.
- La subdivision par catégorie de distance (0 à 500m, 500m à 1km etc..) n'est pas non plus très pertinente à l'échelle d'un quartier.
- Il serait intéressant de subdiviser par zones et comprendre les interactions entre ces zones (marnois, hors marnois par exemple)
- Cette interaction avec l'extérieur est assez intéressante pour juger des effets rebonds du plan de circulation. Par exemple, le trafic local peut être réduit, mais créer de fortes congestions sur les routes en périphérie qui seront davantage empruntées par les voyageurs traversant le quartier auparavant.
- Ces deux derniers points sont plutôt couverts dans la finalité 6.

### Finalité 2: Analyser l'évolution de l'impact CO2 des déplacements
#### Indicateurs:
* Émissions totales CO2 par mode de transport
* Émissions CO2 moyenne par personne

#### Visualisation exemple
![](/contenu/articles/2024/images/traces-territoires-co2.png)

#### Intérêt
* Intérêt marqué sur ce calcul de CO2, en particulier pour comparer avec les résultats des mesures de qualité de l'air.


### Finalité 3 : Analyser les changements de comportement de mobilité
#### Indicateurs:
* Nombre total de trajets par motif de déplacement
* Durée moyenne des trajets par motif de déplacement
* Distance moyenne des trajets par motif de déplacement

Par exemple: x% des trajets domicile/travail sont réalisés à vélo. (Combiné avec la première finalité)

Ou encore: x% des trajets sont des courses. Un nombre faible peut indiquer une offre de commerce de proximité insuffisante, à corréler avec la distance moyenne d’un trajet de courses. (Combiné avec la première finalité)

#### Visualisation exemple

<div style="display: flex">
<img style="width: 48%" src="/contenu/articles/2024/images/traces-territoires-emd-mode-motif.png">
<img style="width: 48%" src="/contenu/articles/2024/images/traces-territoires-emd-duree-motif.png">
</div>

#### Intérêt
- Intéressant sous réserve d'une bonne qualité de la donnée et donc d'une participation citoyenne.
- Nécessite alors une robustesse dans les détections automatiques.
- C'est aussi une donnée singulière à ce type de donnée, elle n'est pas récoltée par les outils de comptage routiers classiques.


### Finalité 4 : Analyser la multimodalité des déplacements et son évolution
#### Indicateurs:
* Nombre de trajets multimodaux par séquence de modes, par exemple à vélo puis bus

#### Visualisation exemple
![](/contenu/articles/2024/images/traces-territoires-emd-multimodal.png)

#### Intérêt
- Pas le plus prioritaire à l'échelle d'un quartier.
- Deviens néanmoins très intéressant à l'échelle plus large de la ville, en particulier sur les déplacements vers les transports lourds (type RER).
- Par exemple, une personne qui décide de marcher plutôt que de prendre un bus ou un vélo donne des indications sur la qualité du service de bus (fréquence, confort, prix..) ou des infrastructures cyclables (pistes, stationnement..).


### Finalité 5 : Analyser les pics d'affluence pour dimensionner les infrastructures
#### Indicateurs:
* Détection des pics d’affluence: à quelle heure de la journée ont lieu la majorité des déplacements

#### Visualisation exemple
<div style="display: flex">
<img style="width: 48%" src="/contenu/articles/2024/images/traces-territoires-trips-per-hour.png">
<img style="width: 48%" src="/contenu/articles/2024/images/traces-territoires-trips-per-hour-weekend.png">
</div>

#### Intérêt
- Peu d'intérêt, elle n'apporte pas d'information supplémentaire par rapport aux statistiques d'heures de pointes en Ile-de-France.
- La granularité par heure est aussi une autorisation plus complexe à demander à un citoyen, par rapport aux moyennes journalières.


### Finalité 6 : Analyser l'évolution de l'utilisation des infrastructures de transport
#### Indicateurs:
* Temps de parcours moyen entre deux points
* Carte de chaleur des zones les plus empruntées
* Sources des flux entrants : d’où viennent les voyageurs arrivant dans une zone définie
* Destinations des flux sortants: ou vont les voyageurs sortant d’une zone définie
* Identification des axes empruntés en fonction de la distance du trajet

#### Visualisation exemple
![](/contenu/articles/2024/images/traces-territoires-openpath.png)

#### Intérêt
- Peu d'intérêt à l'échelle d'un quartier.
- À l'échelle d'une ville, devient intéressant pour mesurer les effets rebond décris plus haut (finalité 1).
- Note: ces effets sont calculables via des outils de modélisation des déplacements, mais ces derniers ne sont pas utilisés à petite échelle, car trop onéreux et par manque de compétence en interne 
- Aussi, l'autorisation de partage d'une trace complète est rédhibitoire, elle risquerait la perte de participants qui auraient accepté de moins partager.

### Finalité 7 : Analyser l'évolution du type de population qui se déplace
#### Indicateurs:
* Déplacements par tranche d'âge, catégorie socio-professionnelles, genre etc..

Nous nous rapprochons de l’exhaustivité des données des enquêtes ménage-déplacement, et donc de leurs indicateurs habituels

#### Visualisation exemple
![](/contenu/articles/2024/images/traces-territoires-general-stats.png)

#### Intérêt
- Moins prioritaire, mais toute donnée reste bonne à prendre.
- On retrouve aussi ici le risque de réticence au partage, en particulier sur ces données sensibles.
- nécessite beaucoup d'information complémentaire par rapport au cœur des traces de mobilité
- Il faudrait alors présenter l'application comme un outil d'enquête

### Finalité 8 : Analyser l'évolution de l'empreinte de stationnement
#### Indicateurs:
* Carte de chaleur des emplacements de stationnement les plus utilisés
* Carte de chaleur des emplacements de stations utilisés en fonction des heures de la journée

Un cas d'usage intéressant, par exemple, est d'observer si un changement de sens d'une rue déplace les lieux où les gens se garent pour déposer leurs enfants à l'école ou faire une course. Résultant en une saturation inattendue d'un axe (congestion, double fille, pollutions air et sonore)

#### Visualisation exemple
![](/contenu/articles/2024/images/traces-territoires-heatmap.png)


#### Intérêt
- Très utile, le stationnement est un vrai sujet, fortement impacté par les changements de plan de circulation.
- Particulièrement pour identifier si les citoyens arrivent à trouver une place proche de leur destination (Y a-t-il de la marche avant ou après l'arrêt, et combien).
- Le cas d'usage autour des centres scolaires est aussi intéressant, avec l'identification des zones de déposes.
- L'autorisation demandée est jugée acceptable, comparée aux bénéfices.

---

Dans l'ensemble, pour les territoires, tout indicateur a son utilité, mais la fiabilité est un point essentiel, il vaut mieux ne pas avoir d'indicateur qu'un indicateur imprécis.

Pour aider dans cette précision, il a du sens d'engager plus activement les participants à remplir et à corriger leurs modes de transports et motifs de déplacement.

Cet engagement va de pair avec le public ciblé, généralement plus engagé sur les mobilités douces, et très distinct du public habituellement en contact avec les collectivités.

L'intérêt de l'outil est alors de donner une voix à ce public ciblé, qui bénéficie positivement des améliorations sur le plan de circulation. Cette voix, via les données, vient équilibrer les retours négatifs d'une potentielle minorité vocale. Il permet de créer un panorama plus objectif des impacts sur la mobilité. À date, ce type de données n'est pas récolté.

La valeur se situe donc dans cet enrichissement d'un ensemble de retours jusqu'ici biaisés. Elle ne situe pas dans un gain de temps potentiel dans le travail quotient des agents, mais bien dans la confirmation de la qualité de ce travail.

## Et maintenant ?

Ce type d'article introductif sert deux publics. D'un côté, les collectivités découvrent une autre option pour observer la mobilité sur leurs territoires. De l'autre, les concepteurs d'applications comprennent les besoins de ces dernières et peuvent adapter leurs services.

Dans les deux cas, même si nous l'illustrons avec le projet Tracemob, nous sommes convaincus que l'émergence de solutions de qualité basées sur des traces pour une mobilité décarbonée ne se fera pas avec un seul acteur. C'est dans cette optique que nous partageons ici nos apprentissages, et que nous continuerons de les partager suite à nos expérimentations prenant place sur quelques territoires cette année (Alpes-Maritimes, Noisy-le-Grand, Centre Val de Loire)

C'est aussi dans cette optique que nous favorisons la mise en place d'infrastructures communes à ces acteurs. C'était l'objet de notre proposition de programme CEE "Boussole", une plateforme facilitant le partage de traces de mobilité aux collectivités, malheureusement non retenue. Et c'est l'objectif de notre programme ["Connaissance des Mobilité"](https://wiki.lafabriquedesmobilites.fr/wiki/Programme_%E2%80%9CConnaissance_des_mobilit%C3%A9s%E2%80%9D) visant à encourager acteurs de la mobilité numérique et citoyens à partager, de manière anonyme, des statistiques régulières sur la mobilité française.