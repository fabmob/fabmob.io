---
title: '''Pas de "cars à haut niveau de service" sans données à la hauteur'''
date: 2025-06-11
image: /contenu/articles/2025/images/car-express.png
résumé: Où en est l’information voyageurs pour les autocars ? Enjeux, cas d’usage, données en temps réel, bonnes pratiques en France et en Europe. État des lieux.
categories:
  - articles
  - innovation
tags:
  - standards
  - autocar
author: Ghislain Delabie
---

Quelle qualité d’information voyageurs propose-t-on aujourd’hui sur les services d’autocar — qu’ils soient interurbains, longue distance, internationaux ou « spéciaux » ? Et surtout, quel est le potentiel d’amélioration pour les années à venir ?

Il y a trois semaines, j’ai eu le plaisir d’animer un atelier sur ce sujet pour [La Fabrique des Mobilités](https://www.helloasso.com/associations/la-fabrique-des-mobilites/evenements/information-multimodale-dans-les-gares-routieres-et-dans-la-poche-des-voyageurs?_gl=1%2a1kz66fp%2a_gcl_au%2aMTY0NjQ1MjU3MS4xNzQ0MTAzNjUy), avec 25 participants représentant des AOM, des opérateurs de transport et des fournisseurs de solutions . Ce thème s’inscrit dans notre cycle de travail annuel avec la DGITM, mais il est aussi né d’une expérience personnelle.

Un samedi soir d’automne, sur la Côte d’Azur, j’ai attendu 45 minutes un autocar avec mon épouse — sans aucune information sur son heure de passage réelle, ni même s’il était déjà passé ou s’il passerait un jour. Nous étions 10 minutes en avance, mais qui sait, parfois un bus peut aussi passer en avance (et c'est tout autant un problème). L’alternative ? Marcher 10 km, de nuit, sur une départementale. Alors que nous nous résignions à cette option, le car est finalement arrivé. À bord : une seule passagère. Le conducteur, un peu amusé par ma question sur le retard, m’a répondu :
> « Ah mais ce car, tout le monde sait qu’il est toujours en retard le samedi à cette heure-là, à cause de la circulation en entrée de ville ! »

Pour quelques initiés et voyageurs captifs, c'est certainement le cas. Pour les autres (l'immense majorité de la population dans cet exemple), il est plus prudent et rationnel d'utiliser une voiture. C’est un "petit" obstacle, mais incontournable : au moment où les *cars express* sont présentés comme une réponse concrète à la dépendance à la voiture en périurbain et en rural, peut-on proposer un *haut niveau de service* sans une information fiable et accessible ?

En creusant le sujet, j’ai réalisé que les enjeux dépassaient largement le confort du voyageur. Dans plusieurs pays européens, les données sur la circulation réelle des autocars, sur les trajets effectivement réalisés, sont aussi utilisées :

- par les opérateurs pour mieux piloter leur exploitation ;
- par les autorités organisatrices pour contrôler la qualité du service rendu ;
- et parfois même pour alimenter des politiques publiques ou permettre aux citoyens de demander des comptes sur le service rendu.

À travers ce billet, je vous propose un état des lieux — forcément partiel — et des pistes concrètes issues de cet atelier (merci à tous les participants !), enrichies d'échanges et recherches ultérieurs.
N’hésitez pas à partager vos retours ou idées : ce sujet mérite, je crois, d’être travaillé et approfondi.


⸻

## 1. Produire des données fiables : passer massivement au temps réel

### 1.1 Une attente forte des usagers

Le dernier [rapport Cerema/ART sur l'évolution des gares routières](https://www.cerema.fr/fr/actualites/evolution-gares-routieres-publication-du-rapport-conclusions) souligne que seuls 41 % des gares routières françaises disposent d’un affichage dynamique, alors même que la demande de ponctualité perçue augmente avec l’essor des « cars express ».

Les attentes des usagers en matière d’information multimodale de qualité et en temps réel sont renforcées par plusieurs facteurs :

- Les réseaux de transport urbain (bus, tramway, métro) diffusent désormais massivement des informations en temps réel, y compris sur de petits réseaux, conformément aux exigences de la loi LOM ;
- La fréquence des cars est souvent plus faible que pour le transport urbain, si bien qu'une information fiable et actualisée est essentielle pour permettre aux voyageurs d’organiser leurs déplacements sereinement ;
- Sur des trajets longue distance, traversant des territoires variés — zones rurales, reliefs montagneux — les aléas, notamment climatiques, sont plus fréquents : l’information en temps réel devient alors indispensable ;
- L’autocar est souvent utilisé en correspondance avec d’autres modes de transport. Cela renforce le besoin d’une **information multimodale** fluide, pour garantir une expérience de voyage cohérente et prévisible.

#### Des RER métropolitains aux SERM : l'arrivée des "cars express" change l'ambition... et les exigences

Les **Services Express Régionaux Métropolitains (SERM)** ont émergé initialement sous la forme de « RER métropolitains », dans un [premier rapport du **Conseil d’Orientation des Infrastructures (COI)** publié en 2018](https://www.ecologie.gouv.fr/sites/default/files/documents/2018.02.01_synthese_rapport_conseil_d_orientation_des_infrastructures_0.pdf). Mais la loi sur les SERM de 2023 est venue élargir considérablement le périmètre du concept. Elle intègre désormais la mise en œuvre de **services de transport routier à haut niveau de service**, de réseaux cyclables, et, le cas échéant, de services fluviaux, de covoiturage, d’autopartage ou de transports guidés, ainsi que la création ou l’adaptation de gares et pôles d’échanges multimodaux ([article L.1215-6 du code des transports](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048682247)).

![Carte des SERM en France](/contenu/articles/2025/images/carte-serm.png)
*Source : [Cerema (2024)](https://www.cerema.fr/fr/system/files?file=documents/2024/11/files_9.pdf)*

C’est dans ce cadre qu’a été **défini le "service express routier"**, ou **"car express"**, comme un service public de transport par autocar :
> "mis en œuvre par l’autorité organisatrice de la mobilité compétente sur le ressort territorial qui englobe la ligne. Elle se caractérise par un tracé direct, un service disponible tout au long de la journée à intervalles réduits et un parcours client facilité et intermodal"
([source - Ministère de la Transition Écologique](https://www.ecologie.gouv.fr/politiques-publiques/services-express-regionaux-metropolitains-serm)).

La [Fabrique de la Cité a publié un rapport en mars 2025](https://www.lafabriquedelacite.com/publications/serm-services-express-regionaux-metropolitains-que-faut-il-en-attendre/) qui analyse plusieurs projets SERM et met en lumière la place croissante prise par ces **cars express**. Quelques exemples marquants :

- **Aix-Marseille** dispose déjà d’une ligne express comptant **plus de 300 liaisons par jour**, souvent perçue comme plus performante que la desserte ferroviaire régionale (TER) ;
- **Tours Métropole** prévoit un "SERM à deux jambes", incluant des **voies réservées** aux cars express et au covoiturage sur l’A10, dans le cadre d’un partenariat avec VINCI Autoroutes ;
- **Toulouse Métropole** et **Clermont Auvergne Métropole** en font un axe d’investissement stratégique, permettant de structurer une offre à haut niveau de service que le seul développement ferroviaire ne permettrait pas d'atteindre.

![4 études de cas de SERM - Aménagements et investissements](/contenu/articles/2025/images/etude_cas_SERM.png)
*Source : [La Fabrique de la Cité (2025)](https://www.lafabriquedelacite.com/publications/serm-services-express-regionaux-metropolitains-que-faut-il-en-attendre/)*

Pour accompagner cette dynamique, le **Cerema** a publié en juillet 2024 une [étude dédiée au déploiement de lignes de cars à haut niveau de service](https://doc.cerema.fr/Default/doc/SYRACUSE/599606/serm-vers-un-deploiement-de-lignes-de-cars-a-haut-niveau-de-service-analyse-de-cas-pour-la-definitio?_lg=fr-FR). Cette publication identifie les "critères de qualité attendus pour ces lignes, parmi lesquels une "bonne lisibilité de l'offre" (itinéraires, fréquence, tarification, intermodalité"). Plus spécifiquement, est mis en avant le besoin d'une information multimodale et temps réel "en différents endroits du parcours de l'usager pendant son déplacement : aux arrêts, à bord et sur Internet".

Dans les cas étudiés, peu de réseaux ont encore atteint un niveau satisfaisant en matière d'information temps réel, à l’exception notable de l’Isère, qui propose des QR codes à chaque arrêt permettant de connaître la position du car à l’approche. La plupart des projets prévoient cependant d’investir dans ce domaine à court ou moyen terme, dans le cadre de leur plan d’amélioration de la qualité de service.

Les "cars express" semblent avoir de l'avenir, car ils sont rapidement "déployables", avec des investissements modérés sur l'infrastructure routière et dans l'information voyageur. Ils ne sont pas soumis à de longs et lourds cycles d'investissement et d'autorisations comme le volet ferroviaire des SERM. Ils sont une réponse pragmatique à la volonté de développer l'offre de transport public dans une période de disette budgétaire. Pour cela, la donnée produite va devoir "élever son niveau de jeu", en qualité et en quantité, pour répondre aux besoins des voyageurs, des exploitants et des autorités organisatrices.

Les "cars express" ont clairement le vent en poupe : ils présentent l’avantage d’être rapidement "déployables", avec des investissements relativement modestes, que ce soit pour les aménagements routiers ou pour l’information voyageurs. Contrairement au ferroviaire, leur mise en œuvre *échappe aux cycles longs et complexes d’autorisations et de financement. Ils constituent ainsi une réponse pragmatique au besoin de développement rapide de l’offre de transport public en péri-urbain et rual, dans un contexte de disette budgétaire.

Mais pour que cette promesse se concrétise, la donnée produite devra "hausser son niveau de jeu" : en qualité, en fréquence de mise à jour, en richesse, pour répondre aux attentes des voyageurs, outiller les exploitants dans la gestion opérationnelle, et permettre aux autorités organisatrices de piloter et d’évaluer efficacement ces services.

### 1.2 Des standards prêts à l’emploi

GTFS (pour les données statiques) et GTFS-RT (pour les données dynamiques) sont deux standards matures et largement utilisés pour décrire les lignes de transport public (en particulier les services d'autocar). Ils fonctionnent ensemble pour couvrir l’ensemble de la chaîne d’information.

Comme évoqué lors d'un [webinaire récent](https://youtu.be/subI8ETERj8?si=jPSiL84ZPPEY_84K), et confirmé dans notre baromètre des standards 2024, la famille **Transmodel** de normes européennes progresse rapidement en adoption — notamment en réponse aux obligations réglementaires croissantes — et permet de répondre à un plus large éventail de besoins fonctionnels.

Dans la pratique :
- **NeTEx** permet de décrire les réseaux de transport et l’offre planifiée (informations statiques) ;
- **SIRI**, avec ses différentes déclinaisons (comme **SIRI-Lite**), permet de transmettre des informations en temps réel, les perturbations, les estimations d’horaires, ou encore la position des véhicules.

#### Les services de car interurbains disponibles sur le PAN
Les services "interurbains" ne sont pas isolés sur le Point d'Accès National (PAN), ils sont rangés dans la catégorie "transport public collectif". J'ai donc fait une rapide recherche - forcément incomplète - avec le mot-clé "interurbain" pour isoler quelques jeux de données et me faire une idée de la situation. La plupart des réseaux régionaux interurbains sont inclus dans le décompte ci-dessous.

| Type de données                     | Nombre total | GTFS/GTFS-RT | Transmodel (NeTEx / SIRI) |
|:------------------------------------|:------------:|:------------:|:------------------------:|
| Statique (GTFS ou NeTEx)            |      64      |      64      |           33             |
| Temps réel (GTFS-RT ou SIRI)        |      11      |      11      |            3             |
> **Légende** : Jeux de données pour des réseaux "interurbains" disponibles sur le PAN au 4 juin 2025

Il faut ajouter au décompte ci-dessus les données d'IDFM qui incluent des services de bus et de cars à l'échelle de toute la région, une partie relevant bien de service d'autocar, et même de "cars express". IDFM diffuse les données statiques avec NeTEx et les données temps réel par des flux SIRI Lite (pour les prochains passages et les perturbations uniquement), en fonction de l'équipement effectif des lignes concernées pour produire cette donnée (une carte / table de l'ensemble des arrêts équipés est fournie, après inscription sur le protail Open Data). La couverture est plutôt large et comprend plusieurs lignes d'autocar.

#### Quelques services de cars emblématiques, et les données mises à disposition

##### Le Car ligne 50 Aix - Marseille

Cette ligne d’autocar, qui emprunte l’autoroute et des voies réservées pour relier rapidement Aix et Marseille avec une bonne qualité de service, peut proposer jusqu’à 100 trajets par jour — c’est davantage que le TER sur la même liaison. Un effort a été mené sur l’information aux voyageurs, mais l’absence de SAEIV ou de système de production de données temps réel à l’échelle de la métropole limite les possibilités. L’information se résume à des alertes sur le site web et par email/SMS en cas de perturbation, via le service [easylecar](https://www.lecaraixmarseille.com/easylecar).

Les fiches horaires sont diffusées uniquement en [GTFS](https://transport.data.gouv.fr/datasets/reseaux-de-transports-en-commun-de-la-metropole-daix-marseille-provence-et-des-bouches-du-rhone/) — sans données dynamiques — et surtout au [format papier/PDF](https://ef29c505-a373-4439-a0ff-4d798556c174.usrfiles.com/ugd/ef29c5_f57c1bb8303841d995e6d6d13a790dbd.pdf).

Globalement, tout reste à faire en matière d’information voyageurs sur cette ligne. Cela illustre qu’un service d’autocar s’insère dans un réseau et dans ses infrastructures — y compris numériques. Une ligne comme Le Car ligne 50 ne peut pas proposer plus de services que ce que permet l’écosystème numérique dans lequel elle évolue. C’est la refonte (en cours) de l’infrastructure de données et services numériques à Aix-Marseille qui permettra sans doute d’améliorer l’information voyageurs et le pilotage de cette ligne — qui est, par ailleurs, un véritable succès en termes de fréquentation.

##### Navette Paris - Beauvais

Cette navette dessert l’aéroport de Beauvais depuis [cinq points de départ en Île-de-France](https://www.aeroportparisbeauvais.com/acces-et-parking/navette-aerobus-paris-aeroport) (La Défense, Saint-Denis, La Villette, Disneyland et Porte Maillot). Ces lignes se distinguent par des fréquences élevées (jusqu’à 150 allers-retours quotidiens) et une adaptation de l’offre à la saisonnalité. Les horaires ne sont donc pas figés, et la diffusion d’une information claire aux voyageurs est essentielle.

Pourtant, l’information disponible reste limitée aux [horaires prévus et aux tarifs sur le site web](https://www.aerobus.fr/result?retailerPartnerNumber=807197&departureArea=FRPARPB&arrivalStation=FRPARPPV&retailerPartnerNumber=807197&locale=fr), ainsi qu’à une [publication en Open Data au format NeTEx](https://transport.data.gouv.fr/datasets/navettes-aeroport-paris-beauvais-aerobus) — mais sans GTFS, ce qui constitue une situation très rare en France. Il n’existe ni données en temps réel, ni service d’alerte spécifique.

Il est étonnant que des lignes d’autocar aussi fréquentées — et s’adressant à une clientèle touristique et internationale — ne proposent pas de services d’information plus avancés. Le besoin est pourtant clair : ces voyageurs ponctuels, souvent en correspondance intermodale, peuvent être fortement impactés par des modifications d’horaires. Aujourd’hui, ils ne disposent que d’une information statique sur les horaires planifiés (via le site ou certaines applications tierces), sans information sur le quai de départ, les perturbations éventuelles, les changements d’organisation ou les mises à jour horaires.

L’information publiée en Open Data n'est pas davantage satisfaisante sur le fond : les fichiers sont saisonniers et ne tiennent pas compte de l’organisation particulière de l’offre Paris–Beauvais, telle qu’expliquée dans un [rapport de la Cour des comptes de 2023](https://www.ccomptes.fr/system/files/2023-08/HFR2023-049_0.pdf). Les horaires effectifs des bus sont validés la veille à 9 h, parfois plus tard, pour s’adapter aux plans de vol définitifs.

Conséquence : le fichier NeTEx daté du 6 mai 2025 (qui comporte 375 erreurs et 1034 avertissements selon le validateur beta du PAN) ne reflète pas les trajets réellement prévus pour le vendredi 6 juin. Par exemple, un premier départ a été ajouté à 8 h 30, sans être visible dans les données — ce qui prive d’information les usagers potentiels. En soirée, plusieurs trajets sont également proposés à la réservation, alors qu’ils n’apparaissent pas du tout dans le NeTEx : ce sont des trajets planifiés habituellement le week-end, activés ici en raison de la demande.

**Conclusion** : le [site web Aerobus de l’opérateur de transport](https://www.aerobus.fr/) reste aujourd’hui le seul point d’accès à des informations (espérons-le) à jour sur les horaires des bus.


| Départs annoncés NeTEx | Départs réservables sur le site web |
|:----------------------:|:-----------------------------------:|
|                        | 08h30                               |
|       09h00            | 09h00                               |
|                        | 09h15                               |
|       09h30            | 09h30                               |
|                        | 09h45                               |
|       10h00            | 10h00                               |
|       10h30            | 10h30                               |
|       11h30            | 11h30                               |
|       12h30            | 12h30                               |
|       13h30            | 13h30                               |
|       14h30            | 14h30                               |
|                        | 21h00                               |
|                        | 22h00                               |
|                        | 22h30                               |
|                        | 23h30                               |

**Comparaison des trajets publiés (fichier NeTEx) et des trajets réservables (la veille), pour la journée du vendredi 6 juin 2025**
##### FlixBus

FlixBus est le leader européen du transport par autocar longue distance. Inutile de présenter davantage cette entreprise, connue de tous, dont beaucoup ont déjà utilisé les services au moins une fois. Sa stratégie en matière de données est on ne peut plus classique pour un grand opérateur : satisfaire de manière minimale aux exigences réglementaires, tout en réservant les services à valeur ajoutée à son propre écosystème applicatif.

Dans le détail, cela signifie un [fichier GTFS disponible sur le PAN](https://transport.data.gouv.fr/resources/11681) couvrant la période de mai à novembre 2025. Des mises à jour hors de ces publications saisonnières semestrielles ne semblent pas pratiquées. Par conséquent, tout changement d’horaire, suppression ou ajout de trajet intervenant en juillet, par exemple, ne figurera pas dans ce fichier (donc ne sera pas visible d'utilisateurs d'applications tierces consommant ce fichier).

Le fichier semble de bonne qualité : il passe le validateur GTFS du PAN sans erreur, avec seulement 49 avertissements pour un fichier décrivant 1 129 lignes à travers l’Europe. Le contenu reste basique, même si les lignes sont tracées. Par exemple, il est impossible de savoir si les FlixBus sont accessibles aux personnes en fauteuil roulant (attribut `wheelchair_accessible` non renseigné). Vous pouvez supposer qu’ils le sont tous, par optimisme — ou bien qu’aucun ne l’est, si vous êtes plus réaliste… et concerné.

En revanche, côté applicatif, l’information est de qualité et en temps réel : le système de réservation est bien rodé, les données sont à jour ; vous obtenez des informations précises sur les quais, les services en gare/station, et êtes informé en temps réel des perturbations. Vous bénéficiez même d’un suivi cartographique du bus avec un décalage de moins d’une minute.

Autrement dit, tout ce qu’il faut est là — sous réserve que vous utilisiez **le site web ou l’application mobile FlixBus**.

Dans le cas de FlixBus, il n’y a donc pas débat sur l’équipement des véhicules ou l’organisation de la production de données : tout cela fonctionne très bien. En revanche, la conformité réglementaire est un sujet. C’est à l’ART d’en juger, mais en France, la loi LOM impose en principe ([récapitulatif ici](https://doc.transport.data.gouv.fr/le-point-d-acces-national/cadre-juridique/donnees-et-modes-de-transports-concernes)) :
- la publication des données statiques en NeTEx (la [Suisse a d’ailleurs converti les données FlixBus en NeTEx pour son territoire](https://data.opentransportdata.swiss/dataset/netex-fernbus)) ;
- et la publication des données temps réel, normalement en SIRI — ce qui est techniquement possible ici, puisque FlixBus produit bien ces données pour ses outils internes.

##### BlaBlaCar Bus

Que peut-on attendre de BlaBlaCar Bus ? Eh bien, c’est plutôt bien — et même un peu la “classe à la française”.

Côté applications web et mobile, le niveau de service est similaire à celui de FlixBus : données enrichies, informations en temps réel, service client bien conçu.

Côté données publiées, BlaBlaCar joue le jeu et respecte plutôt bien la réglementation. Pour les données statiques, on dispose d’un [fichier GTFS](https://transport.data.gouv.fr/resources/52605) mis à jour quotidiennement : un vrai plus pour les réutilisateurs, car le fichier est réellement exploitable.

Pour les données dynamiques, un [flux SIRI-LITE](https://transport.data.gouv.fr/resources/79440) est également disponible. Il semble très propre, indiquant pour chaque arrêt les horaires planifiés ou modifiés, ainsi que le statut du véhicule (présence, départ, etc.). C'est le volet SIRI ET (Estimated Timetable). Ce n'est pas parfait certes. Si on est légaliste, on arguera que l'obligation est de publier aussi les perturbations (SIRI SX) et la position temps réel des véhicules (SIRI VM). Mais l'existant est déjà bien pour les utilisateurs, la diffusion en gare et multi-canaux. Et c'est mieux que les concurrents !
Pour les données dynamiques, un [flux SIRI-LITE](https://transport.data.gouv.fr/resources/79440) est également disponible. Il est bien structuré, et permet de connaître pour chaque arrêt les horaires planifiés ou modifiés, ainsi que le statut du véhicule (présent, parti, etc.). Il s’agit ici du volet **SIRI ET** (Estimated Timetable).

Ce n’est pas encore parfait, bien sûr. Si l’on adopte une lecture stricte de la réglementation, on pourrait rappeler que l’obligation inclut également la publication :
- des perturbations, via **SIRI SX** ;
- de la position temps réel des véhicules, via **SIRI VM**.

Cela dit, ce qui existe déjà est **utile, concret, et améliore réellement le service pour les usagers**, notamment pour la diffusion d’informations en gare ou sur divers canaux numériques. Et surtout, **c’est mieux que ce que proposent les concurrents** !

Un petit regret toutefois : l’accessibilité n’est pas renseignée comme elle le mériterait. Les fichiers GTFS publiés utilisent bien les deux attributs disponibles :
- `wheelchair_boarding` (accessibilité de l’arrêt) ;
- `wheelchair_accessible` (accessibilité du véhicule).

Mais ces champs ne couvrent que l’accessibilité aux personnes en fauteuil roulant, sous forme de booléens (oui/non). C’est une limite structurelle du format GTFS. Si vous voulez connaître [toute la richesse des possibilités offertes par NeTEx sur le sujet](https://wiki.lafabriquedesmobilites.fr/wiki/Communaut%C3%A9_des_donn%C3%A9es_d%27accessibilit%C3%A9), nous avons travaillé dessus récemment avec la DGITM et la DMA.

En l’occurrence, tous les arrêts sont décrits comme accessibles (ce qui serait une excellente nouvelle… j'en doute), et pour les véhicules, aucune valeur n’est fournie : ce n’est ni “oui” ni “non”. Le champ est présent, mais pas renseigné.

Suggestion au passage pour l’outil d’analyse du PAN (bien pratique pour une analyse rapide) : lorsqu’un champ comme `wheelchair_accessible` est vide, il ne devrait pas être compté comme “présent”. Cela m'aurait évité de croire, de prime abord, que BlaBlaCar avait fourni une information détaillée pour chaque bus — ce qui n’est pas encore le cas.

#### Et en Europe

##### Royaume-Uni

Au Royaume-Uni, le [Bus Open Data Service](https://www.gov.uk/government/collections/bus-open-data-service) (l'équivalent de notre PAN) impose déjà la diffusion de données **SIRI-VM** (Vehicle Monitoring) pour chaque service de bus urbain. Quant aux services de **coaches** (autocars interurbains et nationaux), ils publient massivement leurs données — y compris en temps réel. Ainsi, **[259 flux SIRI-VM relatifs à des services interurbains ou longue distance sont disponibles à l’échelle nationale](https://data.bus-data.dft.gov.uk/avl/?q=coach)** (données vérifiées en juin 2025).
Si autant de jeux de données sont aujourd’hui disponibles — y compris pour des services d’autocar de toute taille —, c’est sans doute grâce au dispositif de contrôle et de sanction mis en place au Royaume-Uni, qui prévoit des amendes proportionnelles au nombre de véhicules opérés. [Un petit opérateur de 15 autocars a ainsi écopé d’une amende de 1 500 £ (100 £ par autocar, comme le prévoit la loi)](https://www.gov.uk/government/news/failure-to-comply-with-bus-open-data-regulations-leads-to-financial-penalty-for-operator), pour ne pas avoir publié les informations en temps réel sur la position de ses véhicules !

[Le changement a été un peu difficile au départ](https://www.route-one.net/features/bus-open-data-service-good-and-bad-but-it-is-here-to-say/), mais la pratique est désormais bien installée. Mieux : elle génère des co-bénéfices pour les petits opérateurs, qui peuvent désormais accéder à des outils d’analyse de l’exploitation de leur service (comme le suivi de la régularité), proposés gratuitement par le BODS.

##### Suisse

La Suisse dispose d’un point d’accès national centralisé : [SKI](https://data.opentransportdata.swiss/fr/organization/oevch), où l’ensemble des données de transport public — y compris celles des services interurbains — sont accessibles de façon consolidée. Ainsi, l’offre nationale est disponible dans un [fichier GTFS unique](https://data.opentransportdata.swiss/fr/dataset/timetable-2025-gtfs2020), mais aussi au format [NeTEx (profil suisse)](https://data.opentransportdata.swiss/fr/dataset/timetablenetex_2025).

Concernant les **autocars longue distance**, la Suisse expérimente depuis peu une [publication dédiée en NeTEx](https://data.opentransportdata.swiss/fr/dataset/netex-fernbus). Les données de **FlixBus** et **BlaBlaCar Bus** sont donc **agrégées et converties automatiquement** dans ce format. Dans le cas de FlixBus, les données source sont minimalistes (voire pauvres), ce qui limite l'intérêt de la conversion. Pour BlaBlaCar Bus, le problème est ailleurs : le fichier NeTEx actuellement publié **date du 30 janvier 2025**, et n’est donc **pas à jour pour la période en cours**. Autrement dit, un **GTFS mis à jour quotidiennement est nettement plus pertinent qu’un NeTEx périmé**.

Cette initiative suisse est encore en phase **bêta**, et la question centrale reste celle de l’intérêt réel d’une conversion automatique quotidienne à partir d’un GTFS (comme celui de BlaBlaCar), qui n’apporterait pas forcément de valeur supplémentaire.

> Pour les curieux : la Suisse propose aussi un [jeu de données NeTEx expérimental sur les téléphériques et téléskis](https://data.opentransportdata.swiss/fr/dataset/seilbahnen-netex). Ce n’est plus vraiment de l’autocar, mais c’est tout de même original… Et ce n’est qu’un exemple parmi d’autres des pépites de données disponibles dans ce pays.

##### Norvège

En Norvège, c’est **Entur** — une entreprise publique — qui pilote la consolidation des données de transport et la mise à disposition des services associés. On en parlait déjà [l’an passé dans un webinaire](https://youtu.be/RvHMmdKz4Nk?si=Na1Xa2URMH5STpgl).

La Norvège est **très en avance** dans l’adoption systématique de **NeTEx** et **SIRI**, y compris pour les **services interurbains**. Entur publie même [un tableau récapitulatif du type de données temps réel disponibles pour chaque AOM ou opérateur](https://developer.entur.org/pages-real-time-intro).

Les trois principaux réseaux de **bus longue distance** proposent **les trois flux SIRI** :
- **ET** (Estimated Timetable – horaires prévus ou ajustés),
- **VM** (Vehicle Monitoring – position des véhicules),
- **SX** (Situation Exchange – perturbations, incidents, travaux).

Les mêmes données sont le plus souvent accessibles en **GTFS-RT**, bien que SIRI soit clairement privilégié.

Du côté des **AOM rurales ou périurbaines**, qui exploitent des services de cars interurbains (au nombre de 15), toutes sauf une proposent **au moins un flux SIRI** (souvent la position des véhicules, parfois uniquement les perturbations). **Neuf d’entre elles** diffusent **les trois flux SIRI complets**. GTFS-RT est aussi présent, mais moins fréquent, Entur incitant activement à utiliser SIRI.

Enfin, Entur propose une **infrastructure numérique intégrée à l’échelle nationale** pour tout ce qui concerne l’information voyageurs :
- un **référentiel de données unifié**,
- des **API standardisées** pour les flux temps réel,
- des services de **calcul d’itinéraire** basés sur OpenTripPlanner.

> C’était justement l’objet du [webinaire mentionné ci-dessus](https://youtu.be/RvHMmdKz4Nk?si=Na1Xa2URMH5STpgl).

## 2. Produire de la donnée temps réel de qualité implique d'équiper toute la chaîne

### 2.1 Des véhicules connectés pour des services plus fiables
#### Tout part de la position GPS
Pour fournir une information temps réel réellement utile — tant aux usagers qu’aux exploitants — il faut s’appuyer sur **des données précises et continues en provenance des véhicules eux-mêmes**. Or les cars parcourent de **longues distances**, empruntent **des routes très diverses** (de l’autoroute à la petite départementale) et traversent **des zones parfois mal couvertes** par les réseaux mobiles.

L’information brute de base est simple : la **position GPS** du car. Mais cette donnée n’a de sens **que si elle est contextualisée**. Il faut pouvoir répondre à des questions comme :
- Quel service le véhicule est-il en train d’effectuer ?
  _(par exemple, le [T83 Grenoble → Chambéry, départ 6h15](https://www.carsisere.auvergnerhonealpes.fr/ftp/documents_CG38/fh-t83-2024-2025.pdf))_ ;
- Quels sont les horaires prévus pour ce service ?
- Quels arrêts ont été desservis, et à quelle heure ?
- Le car est-il en avance, à l’heure, ou en retard ?
- Quel est le nouvel horaire estimé aux prochains arrêts ?

👉 C’est précisément le **rôle d’un SAEIV** ([Système d’Aide à l’Exploitation et à l’Information Voyageurs](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27aide_%C3%A0_l%27exploitation_et_%C3%A0_l%27information_voyageurs)) de produire et de structurer cette information, à destination du gestionnaire du réseau — et, par extension, de l’usager.

---
#### Les régions organisent l'équipement et la production de données
Lors de l’atelier, Tristan Boursicot (Région Grand Est) a présenté un retour d’expérience concret : la Région a mutualisé l’achat d’un SAEIV unique pour ses dix réseaux « **Fluo** » (issus de la fusion des anciens réseaux départementaux désormais gérés au niveau régional). Ce système permet :
- La **géolocalisation des véhicules en temps réel** ;
- La **publication de cette position** dans l’application mobile et sur les **écrans multimodaux**.

Le **financement initial** du système a été assuré par la Région, mais la **diffusion des données** (notamment les positions temps réel) fait désormais **partie des obligations contractuelles** dans les différentes DSP (délégations de service public) passées avec les transporteurs.

---

#### Une complexité pour les transporteurs multi-réseaux

Pour les opérateurs, cela peut parfois signifier **équiper un même véhicule avec plusieurs systèmes distincts**, notamment si le car est exploité dans plusieurs régions ou pour plusieurs AOM (autorités organisatrices), chacune avec son propre SAEIV. Cela peut engendrer une **cohabitation de dispositifs embarqués**, qui, bien que gérable techniquement, **soulève des questions de gouvernance des données**.

Un point reste en suspens : **quelle place laisse-t-on aux opérateurs dans ces dispositifs techniques ?**
Ont-ils accès, eux aussi, aux données consolidées issues du SAEIV ? Peuvent-ils les exploiter pour **mieux piloter leur service, anticiper les dysfonctionnements, améliorer la régularité** ? L’implication active des transporteurs dans ces systèmes est un **levier encore sous-exploité** pour améliorer la performance globale du service rendu.

### 2.2 Quel référentiel ? À quelle échelle territoriale ?

#### Une approche régionale, mais pas uniquement

En France, **les régions ont naturellement un rôle central** pour proposer et gérer les référentiels de l’offre de transport par autocar, pour plusieurs raisons :

- La **loi LOM** leur confie la mission de coordonner l’offre de transport et de publier l’information voyageurs à l’échelle régionale.
- Les services de car interurbains s’organisent généralement à **l’échelle régionale**.
- Une **grande partie de ces services est directement organisée** par les régions elles-mêmes (même si certains peuvent dépendre de communautés de communes ayant pris la compétence AOM).
- **De nombreuses régions mettent en place des bases d’arrêts** pour décrire de manière unifiée tous les points d’arrêt du territoire, quel que soit le réseau. Cela permet à différents fichiers NeTEx ou GTFS, produits par divers opérateurs, d’**utiliser un identifiant commun** pour désigner un même arrêt physique — un atout considérable pour décrire ces lieux avec précision, notamment en matière **d’accessibilité**.

---

Lors de l’atelier, Tristan Boursicot (Région Grand Est) a néanmoins souligné la nécessité de **travailler à plusieurs niveaux d’échelle** et de composer avec une certaine complexité. La région doit :

- se coordonner avec diverses AOM de son territoire ;
- intégrer des services de transport délégués à des opérateurs tiers publics ou privés (ex. le service **Aérobus vers l’aéroport de Beauvais**, organisé dans le cadre d’une DSP, ne dépend pas directement d'une AOM) ;
- prendre en compte des **lignes interrégionales voire transfrontalières**.

Dans le cas du Grand Est, cela implique des liaisons avec :
- l’Île-de-France,
- la Bourgogne-Franche-Comté,
- le Luxembourg,
- l’Allemagne,
- la Suisse,
- la Belgique.

Il faut donc faire des choix : quels réseaux intégrer dans le **référentiel régional**, et quels services rendre visibles dans **l’application Fluo** ? Il s’agit de compromis entre **cohérence de l’expérience utilisateur**, **performance technique** et **coût d’exploitation**.

---

#### Données statiques : des progrès, mais encore des défis

L’accès aux données statiques ne pose plus de problème majeur en France — à condition qu’elles existent. Les enjeux portent désormais sur des sujets bien connus dans le domaine du transport public :

- **La qualité des données**, aussi bien technique que métier ;
- **La fréquence de publication**, qui doit être alignée avec les réalités du service.
  👉 Comme pour **BlaBlaCar** ou **Aérobus Beauvais**, une **publication quotidienne** peut faire toute la différence !
  👉 En Grand Est, des jeux de données **quasi-quotidiens** sont également publiés ;
- **Le format technique** :
  - Le **GTFS** est idéal pour assurer **la compatibilité avec un vaste écosystème** (notamment pour les réutilisateurs indépendants) ;
  - Le **NeTEx enrichi**, plus structuré, est nécessaire pour des usages avancés (description fine de l’accessibilité, cohérence avec les bases d’arrêt régionales et nationales).
    ❗ Malheureusement, ce dernier format est souvent absent ou peu riche, car il nécessite **un important travail de structuration en amont**.

---

#### Données dynamiques : difficilement accessibles et peu centralisées

L’accès aux données en temps réel reste plus complexe pour les réutilisateurs :

- En théorie, ces données doivent être disponibles sur le **PAN** ;
- En pratique, **l’exhaustivité n’est pas garantie**, notamment pour les réseaux de cars interurbains.

Par exemple, seuls **11 flux GTFS-RT interurbains** ont pu être identifiés — il en existe sans doute davantage, mais leur **visibilité est limitée**. Même constat pour **SIRI**.

De plus :
- Ces flux sont **rarement agrégés ou normalisés** à l’échelle régionale ;
- Ils ne sont **pas disponibles de manière unifiée** sur le PAN (contrairement à ce que propose Entur en Norvège) ;
- Ils sont souvent limités à des **mises à jour horaires** (trip_updates en GTFS-RT ou SIRI-ET), et **n’incluent pas systématiquement la position des véhicules**.

---

### 2.3 Multiplier les canaux : écran, appli, QR code… et assurer une cohérence
#### Une grande diversité de publics et de contextes
Les cars desservent une grande variété de territoires : centres-villes, zones périurbaines, campagnes, secteurs de montagne… Les arrêts sont eux aussi hétérogènes : gare routière indépendante, intégrée à une gare TGV ou à un aéroport, Pôle d’Échange Multimodal (PEM), simple arrêt isolé avec ou sans abri. Le public est tout aussi divers : écoliers, lycéens, étudiants, catégories populaires, cadres (notamment pour les dessertes vers les aéroports ou quartiers d’affaires), touristes français ou étrangers, avec ou sans bagages, avec ou sans paire de skis 🎿, avec ou sans vélo 🚲️.

Les canaux d’information disponibles ne sont pas identiques selon les lieux d’embarquement, et les usagers n’ont pas tous les mêmes usages ni les mêmes capacités d’accès à l’information (langue, aisance numérique, préférences…). Qu’il s’agisse d’horaires prévisionnels ou d’informations en temps réel (retards, perturbations, emplacement précis du car à quai), les attentes varient, et les moyens d’accès à ces informations aussi.

---

#### Une multiplicité d'acteurs impliqués...
Aucun acteur, public ou privé, ne peut à lui seul garantir une information complète, accessible à tous, en toute circonstance. Quelques exemples :

- L’affichage à quai ou dans une gare dépend de l’exploitant de l’infrastructure (par exemple Gares & Connexions) ;
- Un même arrêt peut être desservi par plusieurs opérateurs, publics ou privés, relevant de différents réseaux ;
- Les supports numériques (applications, QR codes…) sont pilotés par des acteurs variés : régions, collectivités locales, services comme Google Maps ou Mappy. Et même sous une marque unique, les solutions techniques peuvent être développées par des prestataires différents.

---

#### Exige des standards et infrastructures numériques performants
Dans ce contexte, assurer une information homogène, cohérente et de qualité sur l’ensemble des canaux est un enjeu majeur. Cela ne peut reposer que sur l’usage rigoureux de standards bien appliqués, ainsi que sur des référentiels partagés qui garantissent la découvrabilité et la bonne réutilisation des données.
Encore une fois, les données temps réel qui sont mises à jour chaque minute (et les voyageurs ont réellement besoin de cette fréquence de mise à jour) ne peuvent pas être correctement diffusées, à un coût acceptable, sans erreur, s'il n'y a pas le bon cadre, les bonnes infrastructures, la bonne rigueur. Collecter, corriger, nettoyer, redresser et mettre en cohérence des fichiers de données statiques publiés tous les 3 à 6 mois n'impose pas les mêmes contraintes que des flux temps réel.

Encore une fois, les données temps réel, mises à jour chaque minute — et cette fréquence est réellement nécessaire pour les voyageurs — ne peuvent être diffusées correctement, sans erreur et à un coût raisonnable, que si l’on dispose du bon cadre, des bonnes infrastructures et d’une rigueur sans faille.

La collecte, la correction, le nettoyage, le redressement et la mise en cohérence de fichiers de données statiques publiés tous les 3 à 6 mois n’impliquent pas les mêmes exigences que le traitement de flux en temps réel. Ces derniers nécessitent une architecture technique adaptée, des processus robustes et une attention constante à la qualité. Le passage à l’instantané impose donc un véritable changement d’échelle dans l’organisation des données.

---

#### La prochaine frontière : l'occupation des autocars, en temps réel et prévisionnelle
Ce n'est pas de la science-fiction, il est bien possible de fournir en temsp réel de l'information sur le taux de remplissage d'un autocar, ou fournir une information prédictive. En France, ce type d'informations est rarement disponible en-dehors de certains réseaux urbains (c'est une autre histoire à raconter). Plusieurs pays s'intéressent au sujet et ont déjà préparé l'infrastructure, comme l'Allemagne, les Pays-Bas, la Suisse ou l'Angleterre.
Je voudrais faire une brève introduction sur la manière de connaître (ou au moins estimer) le taux de remplissage d'un autocar (c'est bien sûr valable pour des bus, trams, métros voire trains, dans une large mesure). Le sujet n'est pas trivial, il y a forément uen marge d'erreurs et des difficultés à recouper le données, mais au moins 3 méthodes sont disponibles (et une méthode complémentaire) :
- **Analyse temps réel des usagers de smartphone** : cette méthode est réservée à un nombre restreint d'acteurs qui peuvent accéder en temps réel à la localisation d'une large part de la population de voyageurs (nettement supérieure à 10% idéalement). C'est la méthode Google Maps typiquement, qui leur permet de reconstituer la fréquentation de lieux publics, de magasins... et de transports publics, avec une vision temps réel et une comparaison à des historiques. Les données historiques permettent aussi de réaliser des prévisions sur le taux d'occupation ;
- **Comptage par la billettique - Automated Fare Collection (AFC)** : le gestionnaire dela billetique, normalement l'opérateur, peut compter les montées à bord, parfois identifier les sorties du réseau, effectuer des redressements. Cette méthode nécessite de nombreux redressementes et est rarement possible en temps réel ;
- **Comptage direct des passagers - Automated Passenger Counting (APC)** : cela consiste à équiper les véhicules de capteurs divers (WiFi, Bluetooth, traitement d'images vidéo). [Un panorama des méthodes dans cet article d'un fournisseur de solutions allemand](https://www.isarsoft.com/article/automatic-passenger-counting-systems-an-overview) (eux préfèrent utiliser les caméras de vidéosurveillance). Chaque méthode a ses avantages et inconvénients, ses limites, mais cela donne accès à des données comparables au cours du temps, disponibles en temps réel. Cette méthode peut être combinée à AFC, et elle fait l'objet de [travaux normatifs en Allemagne sur la méthode à adopter, la VDV 457](https://www.vdv.de/457-v2.1-ses.pdfx) ;
- **Reconstitution de la fréquentation à partir de comptages partiels** : il est fréquent que des opérateurs équipent une partie seulement de leurs véhicules pour des comptages. Par rotation des véhicules sur le réseau, il est possible d'avoir une vision partielle de la fréquentation sur l'ensemble du réseau, puis d'appliquer des traitements pour reconstituer un ***"unified occupancy"*** qui tienne compte d'autres redressements comme la prise en compte de la fraude ([Amir Dib et al. ont étudié le sujet en profondeur sur des réseaux français](https://arxiv.org/pdf/2403.05546) dans une étude publiée l'an passée). D'après cette étude, avec seulement 20% d'équipement des véhicules, l'erreur dépasse à peine 10% (en-dessous, l'erreur se dégrade rapidement).

![Schéma de fusion de données de billettique (AFC) et de comptage (APC) pour construire un indicateur unifié](/contenu/articles/2025/images/unified_method_schema.png)
*Source : [A. Dib et al. (2024)](https://arxiv.org/abs/2403.05546)*

Dans la pratique, ces dispositifs sont donc déployés en France sur un nombre limité de réseaux, en général urbains, avec pour priorité la détection et mesure de la fraude (cette obsession française qui mériterait un autre article), sans impact très direct sur la qualité de service ou l'information des voyageurs. Voyons ce qui se fait ailleurs.

![Quelle couverture en capteurs de comptage (APC) faut-il pour obtenir des résultats fiables ?](/contenu/articles/2025/images/couverture_comptage.png)
*Source : [A. Dib et al. (2024)](https://arxiv.org/abs/2403.05546)*

En Allemagne, l'approche de l'Open Data est différente, et surtout plus restreinte. Les données temps réel sont peu disponibles en Open Data pour le grand public, mais des efforts sont faits pour des plateformes de consolidation nationale ou régionale. Le land de Rhénanie propose ainsi sur sa plateforme de [l'information temps réel sur l'occupation des modes de transports, sous réserve de disponibilité](https://ckan.mdd.gorheinland.com/de/dataset/landesweites-hintergrundsystem-fur-fahrgastinformation-nrw).
[La Suisse agrège un flux unique de données temps réel, y compris sur le "occupancy forecast"](https://data.opentransportdata.swiss/fr/dataset/occupancy-forecast-siri-dataset). L'information est disponible [en SIRI ou en JSON](https://opentransportdata.swiss/de/cookbook/realtime-prediction-cookbook/belegungsprognose/). À ce jour les 4 flux disponibles concernent uniquement les trains de la SBB, mais l'infrastructure est présente pour accueillir à l'avenir les données des opérateurs de car.
En Norvège, Entur publie un flux agrégé [SIRI ET qui peut supporter l'attribut OccupancyLevel](https://enturas.atlassian.net/wiki/spaces/PUBLIC/pages/637370392/SIRI-ET?utm_source=chatgpt.com#SIRI-ET-VehicleOccupancyStructure). SIRI ET est déjà supporté par la grande majorité des transporteurs par autocar du pays. Je n'ai pas pu vérifier si certains opérateurs diffusaient déjà cette information.
En Angleterre, le BODS supporte à la fois vehicle_occupancy dans GTFS-RT et OccupancyLevel dans SIRI ET, avec de nombreux opérateurs de bus. Toutefois la publication de cette info spécifique ne sembmle pas obligatoire et il faudrait vérifier dans quelle mesure certains oéprateurs l'auraient déjà adopée.

---

### 2.4 Au-delà de l'information voyageurs
Publier de la donnée de qualité pour les services d'autocar dépasse des enjeux de conformité réglementaire ou de bonne information des usagers (c'est déjà beaucoup). La session de travail, et des recherches complémentaires, ont permis d'identifier des exemples inspirants et des pistes de travail pour tirer pleinement parti de ces données. Sans surprise, les données temps réel sont absolument critiques.


#### Jeux olympiques 2024 : ADP orchestre les délégations en temps réel grâce aux données des autocars et un dataspace

L’expérience menée par **ADP** et l’espace de données **EONA-X** durant les Jeux Olympiques de Paris 2024 illustre un **usage opérationnel** (et non voyageur) des données temps réel d’autocar : coordonner l’arrivée et le départ de **60 000 membres de délégations** sans perturber les 330 000 passagers quotidiens d’Orly et Roissy-CDG.

| Objectif | En quoi les données d’autocar étaient critiques ? |
|----------|--------------------------------------------------|
| *Répartir en temps réel 600 véhicules dédiés aux délégations* | Connaître **minute par minute** la position des bus, leur temps d’approche, les retards éventuels, pour attribuer dynamiquement les quais de dépose et éviter les goulots.«  |
| *Alimenter le jumeau numérique des aéroports* | Simuler, puis ajuster **en direct** les flux de délégations, repérer les points de congestion et rediriger les bus avant qu’ils ne bloquent l’accès aux terminaux. |
| *Sécuriser et partager l’information entre acteurs* | Mettre à disposition des forces de police, compagnies aériennes, volontaires et équipes d’exploitation une **vue unique** des bus (statut, heure estimée d’arrivée, identité de la délégation). |

**Principaux enseignements**

* **Interconnexion des sources** : les données temps réel des autocars ont été croisées avec celles des compagnies aériennes, de la SNCF et du Comité d’organisation, via le *data space* EONA-X.
* **Technologie low-code / no-code** : une application de régulation a permis de piloter **21 000 mouvements de véhicules** en quelques semaines, sans développement lourd.
* **Préparation vs. réalité** : malgré une anticipation poussée, la qualité finale dépendait encore de la **fiabilité du tracking GPS** (coupures réseau, pertes de signal) et de la **completude des métadonnées** envoyées par chaque transporteur.
* **Limites actuelles** : absence, sur certaines lignes affrétées en dernière minute, de flux normalisés (SIRI-VM/ET). Des mises à jour manuelles ont parfois été nécessaires pour éviter des décalages d’horaires.

> **Leçon clé** : quand l’enjeu est la logistique temps réel (ici, la gestion de délégations olympiques), la donnée autocar ne sert pas seulement à informer le public ; elle devient un **levier de régulation opérationnelle**, à condition d’être fiable, normalisée et partagée sans friction entre tous les acteurs.

Voici une petite vidéo pour visualiser ce qui a été réalisé, [ainsi qu'un podcast](https://www.tom.travel/2024/09/25/tech-care-episode-1-lheritage-numerique-des-jop-2024/).

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe
    src="https://www.youtube.com/embed/ZnJAwPNu9pk"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

---

#### Des services d'autocar plus performants grâce aux données temsp réel des autres services de transport ?
Je n'ai pas identifié d'exemple à ce stade, mais il me semble que les services d'autocar pourraient bénéficier d'une meilleure exploitation des données temps réel des autres services de transport, notamment ceux qui sont plus capacitaires (aérien, TGV, TER), au moins à deux niveaux :
- **Approche statistique et saisonnière** : Sur le modèle d'Aérobus, pourquoi ne pas adapter la fréquence de services d'autocars en fonction de la connaissance historique des fréquences et taux de remplissage des autres modes de transport, mais aussi de donénes prévisionnelles actualisées fréquemment. Ce que fait l'aéroport de Beauvais de manière intégrée avec son opérateur Aérobus pourrait être répliqué ailleurs (cec qui demande plus de coopération et de données) ;
- **Approche opérationnelle** : exploiter la connaissance de la circulation et des perturbations des autres modes de transport pour adapter certains services. À quoi bon faire circuler un car à vide parce que le TER qui l'alimente en voyageurs a du retard. Parfois une adaptation de 5-10mn de l'horaire de circulation serait bénéfique (je sais, cela ouvre plein d'autres problèmes de gouvernance et d'organisation).
Les autocars bénéficieraient aussi d'une meilleure connaissance des perturbations planifiées du système routier (travaux, évènements, arrêtés de fermeture d'une voie). C'est un besoin qui a été largement souligné lors de notre session de travail, et qui renvoie aux travaux de la [startup d'Etat Dialog](https://beta.gouv.fr/startups/dialogue.html) qui aide les collectivités locales à numériser leurs règles de circulation et les arrêtés affectant la circulation (voir aussi notre [fiche wiki sur l'intérêt d'un tel commun](https://wiki.lafabriquedesmobilites.fr/wiki/DiaLog)).

---


#### À l’étranger, la donnée temps réel devient une ressource stratégique

Les usages de la donnée temps réel dépassent largement la seule information aux voyageurs. Dans plusieurs pays, elle alimente désormais des systèmes d’archivage structuré, permettant d’analyser la régularité, la performance opérationnelle ou l’affluence réelle des services. Ces cas d’usage sont tout aussi prometteurs — voire plus — en matière d’amélioration continue et de pilotage stratégique des réseaux d’autocars.
En Angleterre, le BODS, que j'ai présenté précédemment, ne se contente pas d'imposer aux opérateurs la diffusion de la position des véhicules en temps réel : [il fournit un outil, "Analyse Bus Open Data Service"](https://www.rtig.org.uk/abod), pour analyser ces données, évaluer la performance des services, les possibilités d'amélioration. [Le media spécialisé RouteONE, dans son article de 2024](https://www.route-one.net/features/bus-open-data-service-good-and-bad-but-it-is-here-to-say/) sur le dispositif, relève que cette analyse de performance offre de nouvelles possibilités de contrôle de la performance des services aus régulateurs, mais que c'est aussi une opportunité pour les opérateurs d'autocar de connaître la manière dont les régulateurs évaluent leur service, et d'accéder à des données et des analyses dont ils ne disposent pas forcément.
Ce qui se fait en Angleterre depuis 5 ans pourrait arriver en Europe continentale dans les années qui viennent. En effet, la Commission Européenne souhaite faire évoluer les exigences de publication de données pour inclure des données d'évaluation des services (retards, conditions de circulation, éventuellement fréquentation, etc). Le projet de révision de la directive MMTIS de 2023 prévoyait de publier l'historique des données de circulation des services de transport. Cette révision n'a pas encore été adoptée, mais des normes sont développées pour répondre à cette future obligation (lire le projet [Transit ITS Data Exchange (TIDES) Data Specification Suite](https://tides-transit.org/main/)).
La Suisse propose déjà des choses intéressantes en la matière, avec une page qui fournit les [services réellement réalisés à une date donnée](https://data.opentransportdata.swiss/fr/dataset/istdaten) (passage des véhicules, horaires effectifs, etc) ainsi qu'une historisation des GTFS et NeTEx sur de longues années sur une [page d'archive](https://archive.opentransportdata.swiss/).
En Allemagne, l'approche est un peu différente, davantage "industrielle", comme je l'évoquais précédemment, et moins Open Data. [Le Land de Rhénanie a ainsi construit et financé une plateforme de données très riche](https://wir.gorheinland.com/vernetzte-mobilitaet/multimodale-datendrehscheibe-nrw/) qui collecte de la donnée temps et consolide des indicateurs d'exploitation. Cette donnée est accessible uniquement aux opérateurs de transport, aux collectivités locales et à certaines associations sélectionnées. En revanche, cette plateforme est financée depuis début 2025 directemetn par ses utilisateurs. C'est donc un exemple d'infrastructure commune financée par ses bénéficiaires, dont le modèle mériterrait d'être approfondi. Cette infrastructure prévoit une mise à disposition gratuite de certaines données pour des bénéficiaires autorisés, selon la politique des producteurs de données.
![Quelle couverture en capteurs de comptage (APC) faut-il pour obtenir des résultats fiables ?](/contenu/articles/2025/images/ecosysteme_Data_Rheinland.png)
![Quelle couverture en capteurs de comptage (APC) faut-il pour obtenir des résultats fiables ?](/contenu/articles/2025/images/Datahub_NRW.png)
*Source : [GO Rheinland](https://wir.gorheinland.com/vernetzte-mobilitaet/multimodale-datendrehscheibe-nrw/)*

---

## Vers une fédération des données d'autocar en temps réel ?

La question de l’organisation des référentiels et de l’accès aux données dynamiques ne concerne pas uniquement le transport par autocar. Mais ce mode — **géographiquement dispersé, opéré par une pluralité d’acteurs, fortement intermodal** — se prête particulièrement bien à des expérimentations innovantes.

> Reproduire le modèle norvégien n’est sans doute ni faisable ni souhaitable en France, même s’il reste une source d’inspiration :
> - Le territoire français est plus vaste et son organisation institutionnelle plus complexe ;
> - Les capacités financières, techniques et humaines de l’État ne permettent pas aujourd’hui d’envisager une infrastructure centralisée, à haut niveau de service, intégralement portée par les pouvoirs publics ;
> - En revanche, centraliser **l’accès** aux données temps réel via une API unique, accompagnée de services utiles pour les producteurs comme pour les réutilisateurs, reste une piste pertinente.

> Le modèle expérimenté en Rhénanie-du-Nord-Westphalie peut également nourrir la réflexion. Il repose sur une approche régionale, mais relativement fermée, qui ne répond ni aux exigences de la loi LOM ni à l’esprit du cadre français :
> - Aucune diffusion en Open Data : seules les entités habilitées et enregistrées peuvent accéder aux données ;
> - Ce modèle de diffusion restreinte, dans lequel les producteurs conservent la maîtrise des flux sensibles et les bénéficiaires principaux participent au financement de la plateforme, a néanmoins du sens — et il est mis en œuvre depuis 2025.

Une alternative à explorer : **s’appuyer sur une architecture de type "dataspace"**, à l’image d’initiatives comme **[EONA-X](https://www.eona-x.eu/)** pour la mobilité. Cela permettrait de :

- **Rendre tous les flux temps réel découvrables** (même ceux de petits opérateurs) ;
- **Documenter leur structure**, leur contenu, leur logique métier (standards utilisés, formats, logique métier, etc.) ;
- **Automatiser l’accès** et potentiellement leur **uniformisation** ;
- **Laisser chaque producteur maîtriser son flux**, dans une logique décentralisée, en open data :
  - gratuit pour le grand public (comme le prévoit la loi) ;
  - avec contrepartie financière sous conditions (ex. volumes, SLA, usage pro) ;
- **Permettre la diffusion de données plus riches**, ou sensibles, qui **ne sont pas légalement en open data** mais qui pourraient être accessibles sous conditions d’usage.

Ce type d'approche **n’impose pas une recentralisation**, mais permettrait au PAN de **jouer un rôle de fédérateur**, avec un cadre et des outils adaptés à l’écosystème français (le PAN pourrait gérer cette communauté et ce cas d'usage sur le dataspace), en combinant infrastructure décentralisée, point d'accès unique et services à valeur ajoutée développés par le PAN (validation des données, enrichissement, animation de l'écosystème).

<p>Un article de <a href="https://delabie.tech">Ghislain Delabie</a></p>
