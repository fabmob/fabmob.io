---
titre: "Dossier: L'open source pour observer la mobilité via données GPS (traces)"
date: 2024-09-13
image: /contenu/articles/2024/images/illustration_dossier_trace_principal.svg

résumé: Dossier technique retracant les différentes étapes de conception d'un service open source exploitant les traces GPS pour observer la mobilité.

categories: 
  - articles
tags: 
  - communs
  - opensource
author: Alex Bourreau
---

<style type="text/css">
.imglegend {
  font-size: 80%;
  text-align: center;
  width: 80%;
  font-style: italic;
  margin: -10px auto 0px auto;
}
</style>

Depuis quelques années, la Fabrique des Mobilités et ses membres s'intéressent aux moyens d'utiliser la puissance et les capteurs des smartphones citoyens pour observer et décarboner la mobilité.

Alors qu'un nombre grandissant d'initiatives propriétaires émerge, ces dernières restent en silos. Des organismes comme l'ATEC-ITS ([GT Données & Mobilité](https://atec-its-france.com/wp-content/uploads/2024/06/2023-RETEX-GouvTraces-vf.pdf)) et le CEREMA ([Modélisation des déplacements : quelles données utiliser ?](https://www.cerema.fr/fr/evenements/modelisation-deplacements-quelles-donnees-utiliser)) aident au partage de connaissances via documents et webinaires dont nous recommandons grandement la lecture. Mais ces partages n'entrent pas toujours dans les détails techniques faisant le succès ou l'échec de ces solutions. Ce niveau de transparence accru nous paraît atteignable par la diffusion de méthodes et ressources en open source.

La publication récente de notre [tableau de bord de la mobilité pendant les Jeux Olympiques](https://jo.fabmob.io) nous a permis concrètement de tester et de produire des outils open source sur cette thématique. Et ce, sur l'ensemble de la chaine de valeur, sans se limiter à la partie récolte d'information que nous présentions dans un billet précédent ([Article blog: Tracemob, sur les traces d'un commun de la mobilité ?](/blog/tracemob-commun)).

Ce dossier retrace donc les différentes étapes de conception d'un service exploitant les traces GPS pour observer la mobilité et propose pour chaque étape des ressources et logiciels open source pouvant servir d'inspiration.
* Étape 1 : Identification des besoins (exprimés par collectivités et collectifs citoyens)
* Étape 2 : Applicatif de récolte
* Étapes 3 et 4 : Traitement des données et partage des résultats (visualisations)

Les étapes peuvent être considérées de manière assez indépendantes les unes des autres, et l'utilisation de ressources ouvertes peut se limiter à l'une d'entre elles.

*Note : même si ce dossier se veut grand public, les outils présentés aux étapes 2 à 4 seront probablement plus exploitables par des lecteurs avec un minimum de connaissances en développement logiciel et en traitement de la donnée de mobilité.*

## Étape 1 : Identification des besoins
L'identification des besoins est une étape critique pour tout projet, mais elle l'est d'autant plus pour les solutions manipulant des données personnelles. En effet, dans le cadre du RGPD, la collecte de données ne peut se faire qu'avec le consentement utilisateur sur des finalités bien définies. Celles-ci émanent assez naturellement des besoins.

Nous avons donc interrogé les territoires et citoyens à plusieurs niveaux pour les aider à identifier les indicateurs clés et les cas d'usages qu'ils souhaiteraient suivre. Les répondants sont généralement des experts de la mobilité territoriale, ils ne sont donc pas étrangers aux indicateurs classiques de part modale, de taux d'occupation des voies et des véhicules, de temps de parcours moyen, etc. Cependant, nous notons la nécessité d'un travail pédagogique pour identifier les différences entre les résultats atteignables via des récoltes classiques (comptages, enquêtes …) et via GPS.

### Échelle régionale
À l'échelle régionale, l'observation des grands déplacements est favorisée. Avec cependant un intérêt pour certains pôles générateurs de mobilité, en particulier les lycées. L'analyse des modes de transports utilisés par les lycéens et les personnels, des durées moyennes de leurs trajets et de l'évolution de ces valeurs dans le temps sont par exemple des cas d'usages remontés par la région Centre Val de Loire dans le cadre de leur ClimateDataHub.

![](/contenu/articles/2024/images/illustration_dossier_trace_cozy_part_modale_lycee_cvl.png)
<div class="imglegend">Extrait tableau de bord Cozy sur les modes de transports utilisés pour certains lycées de la région Centre Val de Loire (recoloré).</div>

### Échelle départementale et EPCI
Quatre catégories de besoins ressortent d'un travail de mise en commun des partenaires historiques du projet, La Rochelle (CA et ville) et le département des Alpes-Maritimes.

#### 1. Sensibilisation citoyenne

Le cas d'usage vise à informer et coacher les citoyens sur l'impact de leur mobilité (km et CO2), et ce, via la comparaison des modes de transports utilisés par jour et par mois. Une attention particulière est portée aux grands déplacements, pénibles, atypiques et souvent ignorés des enquêtes domicile-travail classiques.

![](/contenu/articles/2024/images/illustration_dossier_trace_coach_co2.png)
<div class="imglegend">Coach CO2 citoyen, proposé par Cozy (recoloré).</div>

#### 2. Proposition de services aux agents

À cette échelle, le service public est aussi un employeur, qui encourage ses agents à une mobilité plus douce. Les services de suivi GPS peuvent alors être utilisés pour faciliter la distribution du forfait mobilité durable.

![](/contenu/articles/2024/images/illustration_dossier_trace_cozy_100j_velo.png)
<div class="imglegend">Objectif FMD, proposé par Cozy (recoloré).</div>

#### 3. Observations des effets de plans de déplacements

C'est aussi à cette échelle que sont établis les Plans de Déplacement Inter-Établissement/Inter-Administration (PDIE/PDIA). L'observation des parts modales des déplacements d'agents permet d'évaluer l'impact de ces derniers.

#### 4. Nourrir des études

Enfin, les traces de mobilités sont perçues comme un élément majeur pour nourrir des études et perfectionner les simulations des modèles de transport. Par exemple, le suivi des temps de parcours moyens sur des tronçons routiers et leur évolution dans le temps alimentent directement les études de trafic.

### Échelle ville
À la plus petite échelle d'une ville, les données permettent une observation des effets des décisions d'urbanisme ou de plan de mobilité. Par exemple, la ville de Noisy-le-Grand expérimente un nouveau plan de circulation dans un quartier et utilise, entre-autres, les données GPS pour isoler le changement de comportement. 

Nous vous invitons à lire notre [article complet](https://pad.fabmob.io/ITB6q_mFRoqS6XgA3ZPbtA#) à ce sujet, où dix indicateurs ont été évalués et priorisés par les experts mobilité de la ville.


![](/contenu/articles/2024/images/illustration_dossier_trace_extrait_atelier_finalites.png)
<div class="imglegend">Exemple d'une des finalités présentée, cette dernière n'a pas été considérée comme prioritaire à l'échelle d'un quartier.</div>


### Cas général

Nous avons également interrogé les citoyens, représentés par divers experts en mobilité, lors d'un atelier collaboratif d'identification d'indicateurs utiles. Le compte rendu de cet atelier "Connaissance des mobilités" est disponible sur [notre wiki](https://wiki.lafabriquedesmobilites.fr/wiki/Ev%C3%A9nement_Num%C3%A9rique_%26_Mobilit%C3%A9#Atelier_Connaissance_des_mobilit.C3.A9s_:_M.C3.A9t.C3.A9o_.26_Cohorte_de_mobilit.C3.A9).


![](/contenu/articles/2024/images/illustration_dossier_trace_extrait_miro.png)
<div class="imglegend">Extrait des résultats de notre atelier "Connaissance des mobilités".</div>

### Cas spécifique des Jeux Olympiques et de l'événementiel

La plupart des indicateurs mentionnés ci-avant se concentrent sur les déplacements réguliers. D'une part, car ce sont ces derniers qui impactent le plus le bilan carbone, et d'autre part, car ce sont généralement les seuls déplacements observables par les méthodes classiques de récolte d'information (enquêtes ménages).

La réactivité des données GPS apporte une nouvelle dimension et permet de suivre les déplacements en quasi-temps réel. C'est en gardant cette vivacité en tête que nous avons interrogé le même public sur les indicateurs utiles pour suivre ce type d'événement. La liste illustrée des indicateurs proposée est disponible sur [notre GitHub](https://github.com/orgs/fabmob/projects/9). Cette dernière a servi de source pour la conception du tableau de bord [https://jo.fabmob.io](https://jo.fabmob.io) mis à jour quotidiennement pendant les jeux.

![](/contenu/articles/2024/images/illustration_dossier_trace_extrait_github.png)
<div class="imglegend"><a href="https://github.com/fabmob/meteo-mobilite-jo/issues/1">Exemple d'un des indicateurs référencés sur notre GitHub</a>. Chaque indicateur est illustrée d'exemples existants, ici une visualisation du <a href="https://wiki.lafabriquedesmobilites.fr/wiki/Diagnostic_Mobilit%C3%A9">Diagnostic Mobilité.</a></div>

## Étape 2 : Applicatif de récolte

### Ressources ouvertes

À notre connaissance, le seul projet open source d'application mobile permettant la collecte de trace de mobilité de bout en bout est [OpenPath (anciennement e-mission)](https://github.com/e-mission), porté par le National Renewable Energy Laboratory (NREL) américain. Ce projet est la source de quelques "forks", comme [Ma Mobilité](https://fabmobqc.ca/nos-donnees-en-mobilite/ma-mobilite/) de La Fabrique des Mobilités Québec, [weFlo](https://www.weflo.fr/) de Transway, notre projet [Tracemob](https://wiki.lafabriquedesmobilites.fr/wiki/Tracemob) et son intégration au [CoachCO2 de Cozy](https://cozy.io/fr/features/#coach-co2).

Les API et bibliothèques de code ont beaucoup évolué depuis la création du projet OpenPath, avec des services de détection des déplacements de plus en plus performants proposés directement par les environnements Android et iOS. Ces fonctionnalités, combinées avec des bibliothèques dédiées comme [transistorsoft](https://github.com/transistorsoft/react-native-background-geolocation), simplifient grandement la création d'applications de récoltes de traces, sans passer par une solution complète comme OpenPath, laissant donc plus de liberté aux concepteurs.

Ces options se rapprochent des systèmes classiques propriétaires (comme [SingleSpot](https://www.singlespot.com)) qui consistent en l'installation d'un SDK en charge de la récolte et distribution des données GPS. Mais elles conservent toutefois un contrôle sur la récolte et le partage des données pour le concepteur de l'application, qui peut alors réaliser ces opérations avec le consentement explicite de l'utilisateur (et non pas implicite comme c'est [parfois le cas lors de l'usage de SDK propriétaires](https://www.legifrance.gouv.fr/cnil/id/CNILTEXT000037512263))

### Choix de conception

Même si le choix de concevoir une application de récolte spécifique facilite la transparence et répond aux besoins d'accompagnement personnalisé des citoyens, nos expériences (tracemob) montrent que ce n'est pas le choix idéal pour observer la mobilité en général.

En effet, même en ignorant les complexités techniques de la création d'une telle application, les projets se **heurtent fréquemment à la complexité de recrutement citoyen**. Même si les "early-adopters" sont assez simples à séduire, l'exploitation des données à des fins statiques requiert un seuil minimal en nombre de participants, idéalement au moins 5% de la population cible, qui est rarement atteint faute d'intérêt.

Nous ne recommandons donc la création de ce type d'applications qu'aux acteurs pouvant proposer de la valeur supplémentaire pour les utilisateurs, ou bien pour des cas d'enquêtes spécifiques où les participants peuvent être sécurisés d'une autre manière.


![](/contenu/articles/2024/images/illustration_dossier_trace_flyer_noisy.png)
<div class="imglegend">Exemple de flyer de recrutement conçu avec la ville de Noisy-le-Grand. L'une des nombreuses tentatives pour embarquer les citoyens.</div>


## Étape 3 & 4 : Traitement de la donnée

Voici les différentes étapes habituelles de traitement de la donnée

#### 1. Récolte. 

Les applications utilisent les capteurs GNSS (GPS) des smartphones, mais aussi parfois les centrales inertielles (IMU, contenant accéléromètre et gyroscope).

#### 2. Segmentation. 

Le flux brut des capteurs étant ininterrompu, il est nécessaire de le segmenter entre déplacement et arrêt, ainsi qu'entre les différents types de déplacements. Les systèmes d'exploitation des téléphones aident en détectant le changement de contexte (geofencing, par exemple la déconnexion d'un wifi) ainsi que via l'analyse de l'activité physique de l'utilisateur (position assise vs marche).

En général, un trajet porte-à-porte est subdivisé en un ensemble de sous-trajets ("segments") associés à un mode de transport unique.

Cette étape de segmentation est critique dans le traitement des données et reste un défi majeur de l'exploitation des données de FCD ([Floating Car Data ou Floating Cellular Data](https://fr.wikipedia.org/wiki/Floating_car_data)), avec beaucoup de recherches sur le sujet. La contextualisation par les OS des téléphones est une grande aide pour orienter les résultats, c'est la différence principale entre la donnée FCD classique (issue par exemple des GPS automobiles embarqués ou des données cellulaires) et la trace de mobilité.

Pour autant, il arrive fréquemment aux applicatifs de manquer les zones exactes de départ ou d'arrivée, par exemple en cas de problème de détection GPS (sous-terrain, urban canyons, mode avion, batterie faible…). Ces manquements impactent aussi le reste du traitement, comme l'identification du mode de transport, la distance du trajet, sa durée, etc.

![](/contenu/articles/2024/images/illustration_dossier_trace_exemple_segmentation.png)
<div class="imglegend">Exemple de segmentation, metro (jaune) -> marche (vert) -> rer (bleu) -> marche (vert). Le départ du trajet est tronqué. Fond de carte © OpenStreetMap.</div>



#### 3. Lissage (optionnel)

La donnée est ensuite lissée, en particulier pour les petits trajets ou les GPS ont tendance à fluctuer (GPS Drift), créant de faux déplacements.

![](/contenu/articles/2024/images/illustration_dossier_trace_gps_drift.jpg)
<div class="imglegend">Exemple de fluctuation d'un GPS sans déplacement réél. <a href="https://stackoverflow.com/questions/41805990/android-location-going-for-a-walk-by-itself">Source</a> (recolorée).</div>

#### 4. Caractérisation du trajet (mode de transport, raison du déplacement)

Autre étape capitale et complexe du traitement de la donnée, la caractérisation du trajet lui affecte un mode de transport (voiture, bus, vélo ...) et parfois une raison du déplacement (domicile/travail, loisir ...).

De nos observations, les méthodes suivantes sont utilisées :
* **Approche manuelle**. L'utilisateur qualifie lui-même tous ses trajets. C'est la méthode la plus précise, mais aussi la plus chronophage pour les utilisateurs, résultant en un nombre faible de données. Elle est généralement combinée avec les méthodes suivantes pour corriger les résultats.
    * Exemple d'utilisation open source : openPath dans son déploiement grand public, weFlo (un fork d'openPath)
* **Moteur de règles**. Des règles simples trient grossièrement les trajets. Par exemple, un déplacement à plus de 350 km/h est vraisemblablement en avion, un déplacement lent sur une petite distance est probablement à pied, etc.
    * Exemple d'utilisation : tous, en particulier pour exclure les données aberrantes.
* **Approche par vérification externe**. Des services externes ouverts comme l'API Overpass d'OpenStreetMap peuvent être appelés pour affiner une partie des résultats. Il est par exemple complexe de différencier un déplacement en bus et en voiture. Un appel à l'API avec les points de départs et d'arrivée du trajet permet d'identifier la présence ou non d'arrêts de bus aux extrémités. Sans API, il est aussi possible de faire appel à des calculateurs d'itinéraires installés localement pour tenter de reconstruire le trajet et identifier le type de route empruntée (voies réservées à un mode de transport particulier).
    * Exemple d'utilisation open source  : [openPath sur sa branche principale](https://github.com/e-mission/e-mission-server/blob/master/emission/net/ext_service/transit_matching/match_stops.py)
* **Machine learning**. La qualification du trajet entre dans le giron des algorithmes de classification, qui donnent généralement de bons résultats, sous réserve d'entrainer les modèles sur un nombre significatif de données préalablement qualifiées. Deux algorithmes ressortent de nos observations : les forêts d'arbres décisionnels (random forest) et les réseaux de neurones convolutifs (CNN).
    * Exemple d'utilisation open source  : [openPath sur sa branche random-forest-mode-detection](https://github.com/e-mission/e-mission-server/tree/random-forest-mode-detection)
* **Apprentissage par utilisateur**. Certains projets utilisent aussi les habitudes des utilisateurs pour déduire les nouveaux trajets. Cela peut être fait via des moteurs de règles simples ou du machine learning. Par exemple, un utilisateur ayant précisé que son trajet domicile-travaill est réalisé en voiture électrique permet de classer de la même manière les autres trajets démarrant grossièrement autour du domicile, terminant autour du lieu de travail et durant un temps similaire. Ce type d'apprentissage est le moins développé dans nos observations.
    * Exemple d'utilisation open source  : Cozy et son coachCO2

C'est généralement à cette étape que les données sont affichées à l'utilisateur, pour consultation ou correction.

![](/contenu/articles/2024/images/illustration_dossier_trace_coach_co2_resultat_modes.png)
<div class="imglegend">Affichage typique d'un trajet sur les applications mobiles, généralement associé à une carte avec le trajet. Illustration extraite de l'app Cozy (recolorée), mais les informations sont les mêmes sur la plupart des apps.</div>

#### 5. Ré-échantillonnage (optionnel)

Les applications mobiles récupérant des informations de capteurs sont sujettes à deux types d'imprécision. Premièrement, les capteurs eux-mêmes peuvent effectuer des mesures erronées ou manquer des mesures. Comme tout matériel physique, ils sont affectés par leur environnement. Secondement, la lecture n'est pas directe et passe par le système d'exploitation du téléphone. Ce dernier impose ses propres règles par souci d'optimisation de batterie, il agrège aussi les demandes de lectures de multiples applications.

Dans les deux cas, il en résulte une série de données infréquente, avec des manquements, même si l'application a cadencé ses demandes de lectures toutes les 30 secondes, par exemple.

L'étape de ré-échantillonnage permet de lisser ces résultats, par exemple via une interpolation linéaire, et de créer une série "fictive" de données GPS, basée sur les données réelles, cadencée à la fréquence voulue (qui peut être supérieure à la fréquence initiale).

La librairie open source SciPy aide grandement à cette étape, notamment avec sa méthode [interp1d](https://docs.scipy.org/doc/scipy/reference/generated/scipy.interpolate.interp1d.html).


#### 6. Map-matching (optionnel, parfois réalisé avant la segmentation)

Une autre méthode de ré-échantillonnage, plus complexe, mais donnant de meilleurs résultats, est la [cartospondance ou map-matching](https://fr.wikipedia.org/wiki/Cartospondance). Elle consiste à rapprocher la série imprécise de données GPS (5 à 10 mètres d'incertitude pour les puces les plus courantes) à la voie (route, rail, chemin ...) la plus proche.

Cette étape est indispensable pour réaliser des analyses précises sur des axes en particulier. Elle est aussi utile pour affiner les calculs de temps de parcours, notamment sur les routes sinueuses, où un faible échantillonnage de données GPS s'apparente plutôt à du vol d'oiseau, réduisant fortement la distance réelle du trajet.

![](/contenu/articles/2024/images/illustration_dossier_trace_teleportation.png)
<div class="imglegend">Exemple d'échantillonage faible (en bleu) et du correctif (en jaune), fond de carte  © OpenStreetMap.</div>

Pour autant, la cartospondance est très couteuse en ressources et n'est utilisée que si des cas précis l'imposent. Typiquement, les calculs de part modale, de durée moyenne de trajet ainsi que tous les indicateurs déductibles de matrices origines-destinations n'utilisent pas cette fonctionnalité, la donnée "brute" étant jugée suffisante (souvent, seuls les points de départs et d'arrivée sont considérées).

Deux outils open source de map-matching s'illustrent : [cyang-kth/fmm](https://github.com/cyang-kth/fmm) et [NREL/mappymatch](https://github.com/NREL/mappymatch/). Nous avons [testé extensivement Mappymatch pour notre tableau de bord des jeux olympiques](https://github.com/fabmob/meteo-mobilite-jo/blob/master/computations/Matching_heatmap_v2-walk.ipynb), ce dernier donnant de bons résultats dans sa version implémentant un algorithme de [LCS](https://journals.sagepub.com/doi/10.3141/2645-08) ([Longest Common Subsequence](https://fr.wikipedia.org/wiki/Plus_longue_sous-s%C3%A9quence_commune)). Il peut aussi être étendu en interaction avec des calculateurs d'itinéraires ouverts comme [OSRM](https://wiki.lafabriquedesmobilites.fr/wiki/OSRM) ou [Valhalla](https://wiki.lafabriquedesmobilites.fr/wiki/Valhalla).

![](/contenu/articles/2024/images/illustration_dossier_trace_dual_map_matching.gif)
<div class="imglegend">Avant / après map-matching, <a href="https://github.com/cyang-kth/fmm">source</a>.</div>

Note : tous les outils ouverts de map-matching se basent sur le commun [OpenStreetMap](https://wiki.lafabriquedesmobilites.fr/wiki/OpenStreetMap).

#### 7. Agrégation

Une fois toutes ces étapes de traitement de la donnée brute réalisées, les trajets sont généralement stockés sous la forme de multiples segments avec, au minimum :
* Une date de début et de fin (et donc une durée)
* Une distance parcourue
* Un mode de transport
* Un identifiant du trajet commun aux différents segments
* Un identifiant utilisateur
* Des coordonnées de départ et d'arrivée
* Une série de données géographiques (latitude, longitude) sur l'ensemble du trajet

Ces informations sont la base permettant des agrégations statistiques, lissant les résultats et garantissant au passage l'anonymisation des données.

Pour notre tableau de bord, nous avons opté pour les bibliothèques Python [Pandas](https://pandas.pydata.org/) et [Geopandas](https://geopandas.org/en/stable/) pour ces agrégations. Les Dataframes pandas permettent en effet des calculs optimisés sur des sources de données massives.

Ces agrégations ne sont pas complexes, et s'approchent enfin des indicateurs extraits de l'identification des besoins.

Par exemple, notre script (notebook python) [h3_stats_sites](https://github.com/fabmob/meteo-mobilite-jo/blob/master/computations/h3_stats_sites.ipynb) agrège les trajets par site olympique et génère des statistiques journalières sur les modes de transports favorisés, les lieux de départ et d'arrivée, etc.

![](/contenu/articles/2024/images/illustration_dossier_trace_jo_stade_de_france.png)
<div class="imglegend">Visualisation issue des données générées par le script h3_stats_sites.</div>

Pour simplifier les calculs, nous avons fait le choix de subdiviser les lieux en [cellules h3, une subdivision open source proposée par Uber](https://github.com/uber/h3). Notons que le choix de subdivision n'est pas anodin, car c'est via ce dernier que les données seront partagées, rendant complexe la comparaison avec d'autres méthodes de subdivision, par exemple [le carroyage à 200m INSEE](https://www.insee.fr/fr/statistiques/4176290?sommaire=4176305). Il est aussi recommandé de ne pas publier de résultats similaires sous différentes subdivisions. En effet, même si ces dernières garantissent indépendamment l'anonymat des données, leur croisement peut dans certains cas réduire significativement le nombre d'utilisateurs sur une zone donnée.

![](/contenu/articles/2024/images/illustration_dossier_trace_venn.png)


#### 8. Visualisations

L'affichage des résultats est la partie visible de l'iceberg, et donc la plus importante du point de vue de l'utilisateur final. Ici, les ressources ouvertes ne manquent pas, que ce soit via des générateurs de tableau de bord malléables comme [Apache Superset](https://superset.apache.org/) ou [Metabase](https://www.metabase.com/), ou via des bibliothèques d'affichage de graphiques plus classiques (histogramme, camembert) comme [Chartjs](https://www.chartjs.org/) ou [D3js](https://d3js.org/). Pour la mobilité, nous encourageons l'usage des visuels cartographiques, avec les outils [Folium](https://python-visualization.github.io/folium/latest/) ou [Leaflet](https://leafletjs.com/) et les fond de carte [OpenStreetMap](https://wiki.lafabriquedesmobilites.fr/wiki/OpenStreetMap) ou [CARTO](https://github.com/CartoDB/basemap-styles). Le format [geoJSON](https://fr.wikipedia.org/wiki/GeoJSON) est un excellent moyen de partager ce type de données cartographiques, quitte à aussi y inclure des métadonnées sur un affichage suggéré (coloration et épaisseur des traits).

![](/contenu/articles/2024/images/illustration_dossier_trace_transport_favorise_ceremonie.png)
<div class="imglegend">Exemple d'illustration cartographique, <a href="https://jo.fabmob.io/ceremonie_ouverture">source</a>.</div>


Des projets open source complets peuvent servir d'inspiration, comme le [Diagnostic Mobilité](https://wiki.lafabriquedesmobilites.fr/wiki/Diagnostic_Mobilit%C3%A9), [Open Mobility Indicators](https://openmobilityindicators.org/) et dans une certaine mesure [nos travaux pendant les Jeux](https://github.com/fabmob/meteo-mobilite-jo).

![](/contenu/articles/2024/images/illustration_dossier_trace_diagnostic_mobilite.jpg)
<div class="imglegend"><a href="https://diagnostic-mobilite.fr">Le Diagnostic mobilité</a>, un outil open source complet.</div>

#### 9. Analyse

Un défi fréquent remonté par les chargés de mobilités (et le grand public en général) via à vis des indicateurs est le passage de l'infographie à la décision concrète. En effet, les plateformes de visualisation ne manquent pas et les options de sources sont en réalité nombreuses. Mais sans explication et analyse fine des résultats, il est concrètement complexe de traduire de simples graphiques en une action terrain, ou d'associer une action passée à une évolution visuelle.

Nous recommandons donc d'associer aux graphiques classiques des explications textuelles sur les résultats de ces derniers, sans tomber pour autant dans des conclusions hâtives. Par exemple, un texte peut accentuer des évolutions exceptionnelles dans le comportement des voyageurs et y apporter du contexte. À l'image de [la chute quasi totale des trajets vers la colline d'Élancourt observée le 30 juillet](https://jo.fabmob.io/sites/Colline%20d'Elancourt/?date=2024-07-30), qui s'explique par la fin des activités olympiques sur le site. Une analyse plus poussée pourrait aussi s'intéresser aux quelques trajets motorisés réalisés durant les jours qui ont suivi, probablement par les services techniques chargés du démantèlement (un sujet d'actualité en cet après-jeux).

![](/contenu/articles/2024/images/illustration_dossier_trace_chute_elancourt.png)
<div class="imglegend">Exemple de précision textuelle, <a href="https://jo.fabmob.io/sites/Colline%20d'Elancourt/?date=2024-07-30">source</a> (recolorée).</div>


L'étape d'analyse est aussi importante pour identifier des problèmes survenus lors des étapes précédentes, et nécessitants une correction. Un exemple vécu dans l'élaboration de notre tableau de bord porte sur l'identification de l'heure de départ des visiteurs de la cérémonie d'ouverture. Nos premiers résultats indiquaient un départ massif à 21h30, justifié par la pluie et le passage du dernier bateau. Mais l'étape d'analyse a montré un décalage lié aux fuseaux horaires, ce qui a permis de rectifier et de conclure à un départ plus crédible à 23h30, correspondant à la fin de la cérémonie.

![](/contenu/articles/2024/images/illustration_dossier_trace_fix_utc.png)


Ces explicatifs textuels sont aussi une marque de transparence sur des données et des calculs qui ne sont pas simples à comprendre au premier abord. Une transparence amplifiée par la mise en open source des différentes étapes de calcul, permettant un audit par n'importe quelle personne qualifiée. Et, de fait, une amélioration communautaire de la qualité générale des indicateurs.


### Identification des biais

Souvent associée à la dernière étape d'analyse, l'identification de biais est un travail important lors de l'exploitation des données de trace de mobilité. Ces dernières émanent en effet généralement d'un échantillon non représentatif de l'ensemble de la population, contrairement aux enquêtes classiques. Ces biais n'empêchent pas de tirer des conclusions, mais doivent être considérés dans toute interprétation de résultats.

#### Types de biais et méthodes d'identification

**Biais initiaux**. Ce sont les biais les plus simples à identifier, ils portent sur le public atteignable par l'application de récolte. Par exemple, les utilisateurs de smartphones limitent la population concernée, contrairement aux enquêtes mobilité qui sondent à partir de 4 ans. Les personnes moins technophiles comme certaines personnes âgées ou souffrant de handicap sont de fait sous-représentées. Autre exemple, géographiquement, une application distribuée uniquement en France limite aussi le public aux Français. Une problématique importante dans l'observation d'événements touristiques comme les Jeux Olympiques.

**Biais de population**. Dans la même lignée que les biais initiaux, les biais de population sont néanmoins plus complexes à identifier. Ils peuvent découler d'opérations marketing ciblées sur un groupe en particulier (les technologies de mobilité active ont tendance à engager plus facilement les jeunes hommes). Idéalement, ce biais est identifié par la connaissance de la population utilisatrice des applications, mais ce n'est pas toujours évident. Une méthode consiste donc à comparer les résultats avec d'autres enquêtes et analyses. Dans le cadre des Jeux, nous avons comparé nos observations avec les [résultats de l'enquête mobilité par GPS (EMG) de l'Institut Paris Région](https://www.institutparisregion.fr/mobilite-et-transports/deplacements/enquete-regionale-sur-la-mobilite-des-franciliens/)  ainsi que les [prédictions du cabinet 6t](https://www.6-t.co/etudes/comment-les-parisien-ne-s-et-les-petit-e-s-couronnais-es-adopteront-leur-mobilite-pendant-les-jeux-olympiques-paris-2024). Nos comparaisons sont [accessibles sur une page spécifique](https://jo.fabmob.io/emg_compare) et mettent par exemple en avant un biais automobile dans nos données, vraisemblablement lié aux incitatifs au covoiturage présents dans l'application source.

![](/contenu/articles/2024/images/illustration_dossier_trace_diff_emg_part_modale.png)
<div class="imglegend">Exemple d'une comparaison entre l'EMG et nos données. Modes de transports utilisés à Paris, extrait d'un <a href="https://jo.fabmob.io/emg_compare">tableau de bord comparatif complet</a>.</div>


**Biais géographiques**. Les biais géographiques peuvent aussi découler d'opérations de communication spécifiques à certains territoires. Notre méthode consiste à comparer le nombre d'utilisateurs par région, avec des sources ouvertes ([INSEE](https://www.insee.fr/fr/statistiques/6215138) ou [la subdivision par cellule h3 de Kontur](https://data.humdata.org/dataset/kontur-population-dataset?)). Le facteur entre le nombre d'utilisateurs par zone et la population totale de la zone donne une idée si la zone est surreprésentée ou sous-représentée dans les données. Un redressement peut être envisagé si nécessaire. Dans notre cas, Lille est par exemple légèrement surreprésentée par rapport à Paris, mais elle est sous-représentée par rapport aux autres territoires. *(Notre script n'est pas publié à date, mais il est disponible si besoin.)*

![](/contenu/articles/2024/images/illustration_dossier_trace_representation_pop.png)
<div class="imglegend">Exemple de la représentation par zone, comparée à la population totale. Bleu = sous représenté, gris = normal, rouge = surreprésenté. Fond de carte © OpenStreetMap.</div>

**Biais d'agregation**. Ce dernier biais provient des processus d'anonymisation et d'aggregation des données. En effet, la donnée de trace, même si anonymisée, reste sensible. Il est donc impossible d'afficher des informations trop spécifique sur les déplacements. Un seuil en nombre de personnes (4 à 10) est généralement fixée pour une subdivision, en deça duquel les information ne sont pas affichées. Ce seuil ne pose pas trop de problèmes pour des observations dans les grandes villes. Mais il masque un certain nombre d'informations à l'échelle nationale, par exemple les voyageurs ayant pris l'avion depuis ou vers des destinations moins populaires.

#### Considérations des biais
La prise en compte des biais la plus simple passe par la **communication**. Exposer clairement ces biais permet au lecteur une meilleure confiance dans les données. Cette transparence ne réduit pas la qualité du rendu, au contraire, la perception en est souvent supérieure. L'opacité des sources est d'ailleurs l'une des critiques remonté lors du webinaire organisé par le Cerema sur l'utilisation des données classiques de Floating Car Data.

Pour les biais très importants, il est suggéré d'assumer la population cible, et de comparer les évolutions entre biais similaires. Par exemple, même si nos observations pendant les Jeux Olympiques ne couvraient que les Français et pas les touristes internationaux, l'évolution des déplacements des Français reste un indicateur intéressant.

Tout de même, même si la population cible est réduite, l'échantillon doit rester le plus large possible pour éviter les faux positifs. Afficher le nombre de répondants en plus des pourcentages est une pratique classique de la recherche. Dans notre cas, nous étions rassurés de décompter 4536 personnes s'étant déplacées à Paris intramuros, et 136194 personnes à l'échelle de la France dans nos observations du jour de la cérémonie d'ouverture.

Enfin, il convient de rappeler que tous les indicateurs ne sont pas calculables avec toutes les données. Les données de trace de mobilité s'illustrent par exemple plus facilement dans le calcul de temps de parcours, où seuls quelques véhicules "sondes" sont nécessaires pour mesurer la congestion. Elles sont beaucoup moins pertinentes dans des indicateurs qui se doivent d'être exhaustifs, comme les comptages routiers. Tout dépend donc de l'indicateur final affiché. En fonction, certains biais peuvent être ignorés.

## Conclusion et perspectives

Nos expériences nous montrent que même si des ressources ouvertes existent sur l'ensemble des étapes, elles sont plus rares et complexes à mettre en œuvre dans les phases de récolte et de début de traitement. C'est ce constat qui a motivé la mise en place de notre programme ["Connaissance des Mobilités"](https://wiki.lafabriquedesmobilites.fr/wiki/Programme_%E2%80%9CConnaissance_des_mobilit%C3%A9s%E2%80%9D), visant notamment à simplifier le partage et l'exploitation de traces de mobilités. Un programme toujours ouvert aux partenariats.

Cette volonté de partage rejoint des initiatives ouvertes comme [https://www.openstreetmap.org/traces/](https://www.openstreetmap.org/traces/) ou le [Point d'accès National](https://transport.data.gouv.fr/). Mais contrairement à l'open data, il a ses limites, la donnée brute étant trop sensible pour être diffusée sans un consentement explicite de l'utilisateur, et une assurance qu'il réalise la potentielle gravité de la diffusion d'une telle information (géolocalisée et horodatée). Des travaux sont donc nécessaires pour définir ce qui est partageable et acceptable par une majorité d'utilisateur, tout en gardant en tête que toute agrégation entraine nécessairement une perte d'information.

En parallèle des données, nous constatons des manquements sur certaines infrastructures et outils de traitement de l'information, en particulier sur les étapes de segmentation et de caractérisation par apprentissage. La publication d'algorithmes et de modèles pré-entrainés ouverts serait souhaitable.

Pour garantir le succès de ces outils ouverts, ainsi que celui du reste des outils de traitement et d'analyse, il conviendrait aussi de s'aligner sur une définition commune du format des données de mobilité. En commençant par une définition des modes de transports. Des efforts à relier aux démarches internationales comme l'initiative [Transport Data Commons](https://tdc.unece.org/) et [ses outils](https://github.com/transport-data/tools). Voici une proposition de format pour une trace de mobilité, inspirée de nos sources observées, pour lancer le débat :
* Date de début et de fin (ISO 8601)
* Distance (en mètres)
* Mode de transport (UNKNOWN, WALKING, BICYCLING, BUS, TRAIN, CAR, AIR_OR_HSR, SUBWAY, TRAM, LIGHT_RAIL, TRUCK, MOTORCYCLE), extensible avec la prise en compte des taxis individuels et collectifs, des véhicules utilitaires légers, des différents types de bus (minibus, coach, BRT..) ou encore des véhicules intermédiaires (vélo cargo, ou [autres](https://xd.ademe.fr/))
* Motorisation (None, Gasoline, Diesel, CNG, LPG, LNG, Hybrid, Electric, Hydrogen) 
* Identifiant du trajet (integer/uuid)
* Identifiant utilisateur (integer/uuid)
* Coordonnées de départ et d'arrivée (latitude, longitude)
* Une série de données géographiques (latitude, longitude)

