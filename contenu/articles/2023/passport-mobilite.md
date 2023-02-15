---
titre: "Les politiques de mobilité ont besoin d'un passeport numérique"
date: 2023-02-15
image: /contenu/articles/2023/images/passport-mobilite.png

résumé: Lors du Forum de l'AIT des 7 et 8 février derniers s'est déroulé un hackathon sous le patronage du ministre des transports Clément Beaune, consacré au "titre de transport de demain". 

categories: 
  - articles
  - innovation
tags: 
  - ForumAIT
  - Hackathon
author: Ghislain Delabie
---


Lors du Forum de l'AIT des 7 et 8 février derniers s'est déroulé un hackathon sous le patronage du ministre des transports Clément Beaune, consacré au "titre de transport de demain". 

Alors que l'objet principal qui devait être travaillé devait être le support matériel ou numérique d'un futur titre de transport national (carte, code-barre 2D, téléphone ou montre NFC, carte bancaire, laisser-passer papier, implant sous-cutané...), les 10 équipes participantes ont surtout trouvé une convergence de vue sur deux convictions :
- le titre de demain requiert en parallèle un saut qualitatif dans l'information des voyageurs (c'est à dire aller plus loin que ce que propose le Point d'Accès National actuel sur [transport.data.gouv](https://transport.data.gouv.fr/)) ; 
- et puisque la diversité des supports ne disparaîtra pas (le projet lauréat a pour slogan "le titre de demain n'est pas un titre de transport") **le prérequis est de disposer d'un "compte mobilité national", d'un "compte unique", d'un "compte personnel de mobilité" ou d'un "passeport de mobilité"** (au choix selon les équipes).

Le consensus qui ressort de ces deux journées de travail qui ont associé des AOM, des opérateurs de mobilité, de MAS, de transport, des industriels de la billettique et des services résonne avec nos travaux à La Fabrique des Mobilités. 

Depuis 3 ans, La Fabrique des Mobilités développe avec Capgemini la préfiguration d'un tel "compte mobilité" dans le cadre du programme CEE "Mon Compte Mobilité"**. Celui-ci est déjà opérationnel dans la métropole de Mulhouse, pour des entreprises en Île-de-France, et dans le département de l'Aude. D'autres métropoles et régions travaillent actuellement à son déploiement.

Le titre unique de mobilité est [annoncé par Clément Beaune en expérimentation dès la fin 2023](https://www.20minutes.fr/societe/4022409-20230208-deux-ans-peut-developper-titre-unique-transport-toute-france-annonce-clement-beaune), et en déploiement national début 2025. Cela suppose, si l'on en croit les projets lauréats, de déployer ledit compte mobilité à cette échéance. A quoi ressemble-t-il ? Comment peut-il être construit à partir du [compte mobilité déjà disponible](https://moncomptemobilite.fr/) ?

## La base d'un titre unique, c'est un "passeport mobilité"
La première dimension du compte mobilité est celle du passeport pour tous les opérateurs et systèmes de transport. Le "passeport mobilité" est lié à mon identité et ne se substitue pas à mes comptes clients chez les opérateurs. Que retrouve-t-on dans ce passeport mobilité ?
- **Des données sur mon identité**, par exemple issues de France Connect et des administrations (mon quotient familial, mon revenu fiscal, mon statut étudiant, retraité, au chômage, etc). Les acteurs publics comme les opérateurs ont besoin d'informations fiables pour donner accès à des services et à des aides, sans les redemander systématiquement à l'utilisateur. Je suis en contrôle de ces données et de l'accès par des opérateurs tiers, en conformité avec le RGPD ;

- **Des données sur mon statut chez différents opérateurs** : est-ce que je suis client d'un opérateur ? Est-ce que j'ai des droits, des abonnements ou des titres chez cet opérateur ? Ou au moins un moyen d'y accéder ;

- **Des données sur des droits, des privilèges ou des statuts particuliers**. C'est ce qui me permet d'obtenir de l'information personnalisée tout au long de mon expérience de transport, ainsi que l'accès à de nouveaux services : des accès spécifiques dérogatoires aux ZFE, ou des priorités d'accès aux carburants pour des professions essentielles en cas de pénuries. Un titre national de transport pourrait aussi se baser sur le compte mobilité, y compris de futures formules d'abonnement transrégionales ou nationales.

Le [compte moB](https://moncomptemobilite.fr/) que nous gérons avec nos partenaires propose déjà l'essentiel de ces fonctionnalités, qui seront étendues progressivement en 2023, notamment pour répondre aux besoins du "titre unique de demain". 

Au-delà de l'outil, les échanges de données, leur accès et la maîtrise par les utilisateurs reposent sur l'usage d'un standard technique partagé. Celui-ci a été créé en 2022 par les acteurs de la mobilité. Basé sur OpenID Connect, déjà largement utilisé, **le standard "[Compte Mobilité Standardisé](https://github.com/fabmob/CMS) (CMS)" est facile à déployer dans tous les comptes utilisateurs de la mobilité**, pour utiliser le futur "passeport mobilité" national, et des fonctionnalités de partage de données. Le potentiel se situe aussi dans un meilleur accès des opérateurs privés aux données des administrations sur les utilisateurs.



## Le "passeport mobilité" permet de financer les mobilités autrement
En janvier 2023, le Ministère de l'Economie met en oeuvre la "[prime carburant de 100€](https://www.service-public.fr/particuliers/actualites/A16169)" sur la base de critères sociaux et de pratiques de mobilité (utilisation du véhicule personnel pour les trajets domicile-travail). La mesure de ciblage, en remplacement de la réduction généralisée à la pompe, a été retardée pour des raisons politiques, mais aussi parce que techniquement le dispositif n'était pas prêt.

En février 2023, face au faible recours à la prime par les bénéficiaires potentiels, [le Ministère de l'Economie annonce une prolongation d'un mois du dispositif](https://www.gouvernement.fr/actualite/prolongation-de-lindemnite-carburant-de-100-euros), jusqu'à fin mars. Quelles en sont les raisons ? Tout d'abord le parcours utilisateur pour trouver la page du dispositif, tester son éligibilité puis effectuer la demande est compliqué (préparez votre avis d'imposition et votre "numéro de formule" - si vous ne voyez pas ce que c'est, vous avez saisi mon point). Par ailleurs, le fait d'effectuer une démarche conduit toujours à du non-recours massif de la part de ceux qui sont les plus concernés ([DREES, 2022](https://drees.solidarites-sante.gouv.fr/jeux-de-donnees-communique-de-presse/non-recours-aux-prestations-sociales-le-manque-dinformation-en)), du fait du manque d'information et de démarches trop complexes
![Motifs principaux pouvant expliquer que certaines personnes n'ont pas recours aux aides et dispositifs sociaux](/contenu/articles/2023/images/motifs-non-recours-aides.png "Motifs principaux pouvant expliquer que certaines personnes n'ont pas recours aux aides et dispositifs sociaux")

En septembre 2023, suite à une loi de finances rectificative passée durant l'été, l'Etat met à disposition un nouveau dispositif personnalisé de soutien aux publics fragiles dépendants de la voiture au quotidien. Ce dispositf est ciblé sur des critères sociaux de revenu, de statut et de localisation géographique. Grâce à une coopération entre les équipes de moB et la DINUM qui porte un projet d'administration pro-active et d'attribution automatique des aides, les bénéficiaires potentiels sont pré-identifiés et informés. Ils utilisent moB - compte mobilité pour valider en 3 clics leur demande d'aide et compléter leur dossier avec un minimum de saisie d'informations (tout est automatisable). Sur le modèle de ce que nous faisons déjà, le parcours de demande de l'aide peut être intégré à d'autres applications d'administrations ou de partenaires (ex : Pôle Emploi, la CNAF) de manière transparente et fluide.

En mars 2024, 5 métropoles en pointe sur la mise en oeuvre des ZFE lancent chacune un **"guichet unique d'accompagnement ZFE"**. Ce portail territorial s'appuie sur moB pour recenser l'ensemble des dispositifs d'accompagnement et de financement disponibles pour les habitants et usagers du territoire. Ceux-ci se voient proposer des aides en fonction de leur situation (lieu d'habitation, de travail, d'études, type de véhicule utilisé, revenus, situation) et peuvent demander à en bénéficier directement depuis moB - Compte mobilité avec des informations pré-remplies issues des administrations (adresse, revenus, autres justificatifs). Cela tombe au bon moment car les 5 métropoles pionnières font face à [un épisode anticyclonique de 4 semaines consécutives qui provoque des records de pollution de l'air](https://www.francetvinfo.fr/meteo/particules-fines/qualite-de-l-air-un-episode-de-pollution-aux-particules-fines-touche-une-grande-partie-de-la-france_5658014.html) et oblige des mesures d'exception et un accompagnement adapté dans les ZFE concernées. 

Les **partenariats mis en place avec des applications de mobilité variées sont bien utiles** : on retrouve l'information et l'accès aux dispositifs de soutien (y compris une gratuité exceptionnelle des transports publics) dans l'application MAS (mobilité servicielle) de la collectivité, dans des applications privées (Bonjour RATP, SNCF Connect, Citymapper) et dans des applications GPS (Mappy, ViaMichelin, Waze et R-Link qui équipe les véhicules Renault) au plus près des conducteurs concernés.


## Le passeport mobilité est prêt à décoller
Les exemples ci-dessus ne relèvent pas de la prospective, d'une vision théorique de ce qui pourrait être fait. Il s'agit des possibilités offertes par un outil existant, le [compte mobilité](https://moncomptemobilite.fr/), que nous avons déjà testées dans plusieurs contextes. Il s'agit aussi de besoins avérés des acteurs publics et privés de la mobilité. Plusieurs d'entre eux étant déjà engagés dans des coopérations pour mettre en oeuvre ces scénarios.

Le compte mobilité n'a pas été construit comme une expérimentation mais un outil industrialisable qui peut passer à l'échelle rapidement. Ainsi l'outil actuel a été testé pour gérer avec succès 120 000 utilisateurs et 20 000 demandes d'aides (transactions) par heure. Si ce niveau de performance peut être augmenté, il assure toutefois que l'application est prête à répondre aux besoins de grands projets.

Quelles sont les prochaines étapes d'un compte mobilité national ? L'outil technique est disponible, déjà testé avec des partenaires. Son fonctionnement est assuré jusqu'en 2024 (et au-delà selon les besoins) par la Fabrique des Mobilités et des partenaires. Il s'agit désormais de s'appuyer dessus de manière volontaire, ce qui ne coûte pas d'argent, bien au contraire. Par exemple : 
- moB est utilisé par des opérateurs de covoiturage pour gérer le dispositif CEE (note de bas de page Certificat Economie d'Energie) "[coup de pouce covoiturage de 100€](https://www.ecologie.gouv.fr/coup-pouce-covoiturage-longue-distance)" depuis janvier. Certains opérateurs n'ont pas voulu rejoindre la dynamique de coopération au prétexte qu'il n'y avait pas assez de recul : les collectivités locales et l'Etat, qui **financent des trajets en covoiturage**, peuvent **exiger à l'avenir l'utilisation de moB** ;
- Accélérer la coopération sur l'administration pro-active et **l'attribution automatique d'aides à la mobilité** ;
- Construire les **expérimentations du "titre de demain"** demandées par Clément Beaune pour fin 2023 en s'appuyant sur les fonctionnalités existantes de moB ;
- Construire des **"guichets uniques ZFE"** proposés dans la mission flash parlementaire sur le sujet et par de nombreuses collectivités, à partir de moB, en quelques mois ;
- Inclure à la **concertation MAS - mobilité servicielle annoncée par Clément Beaune** le "compte mobilité" et plus généralement les infrastructures numériques essentielles, leur développement et leur gouvernance, de manière à consolider la dynamique en cours.

Nous sommes à un moment charnière pour l'écosystème des mobilités : les conditions sont réunies pour bâtir des services numériques de confiance, qui supportent les politiques publiques de mobilité, qui s'inscrivent dans la stratégie européenne du numérique et de la mobilité et qui respectent les droits des citoyens en matière de données personnelles. Nous pouvons saisir la dynamique actuelle et avancer très vite collectivement, ou bien laisser passer le train et il sera très difficile de relancer une dynamique (il faudra attendre le train suivant).

Pour supporter cette dynamique, nous ouvrirons dans les prochaines semaines des appels à coopération autour du compte mobilité et de thématiques d'application évoquées ici, pour accélérer et amplifier ce qui est déjà fait.
