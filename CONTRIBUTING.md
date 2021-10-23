# Pour contribuer à MarbleBowl

Dans un premier temps, **forker ce _repository_** sur son compte _GitHub_. C'est sur ce _fork_ que se fera toute nouvelle contribution.

La contribution au projet se fait en suivant un _GitFlow_ simplifié.

## Pourquoi un GitFlow ?

Chaque développement doit être travaillée **sur une branche séparée partant de `develop`**. Afin de passer en revue chaque contribution avant tout _merging_.

La création de ces branches permet d'isoler dans chaque contribution de la base de code commune, permettant ainsi à plusieurs développeurs de travailler en parallèle.

## Process pour contribuer

Le code de chaque contribution doit se trouver **sur une branche partant `develop`** (`develop`sert de branche de "pré-production", le code mis en production se trouvant sur `main`).

Avant de créer une branche, il faut **s'assurer que la branche `develop` locale est bien synchronisée avec celle du repo originel** (`git pull / fetch`).

La branche dédiée à une tâche sera nommée selon le modèle :
`[type de tâche]-[nom de la tâche]`

Par exemple :

`feature-increment-counter`

`refactoring-display-inventory`

`bugfix-player-healthbar`

Une fois le **dernier commit pushé sur le repo forké**, il vous faudra **faire une _Pull Request_** avec le bouton _"Compare & pull request"_.

Laisser alors un **commentaire détaillant les modifications apportées**.

Après revue du code, si celui-ci convient, il sera intégré à la branche `develop`. Sinon, des modifications seront proposées qu'il faudra pusher, sans avoir besoin d'ouvrir une nouvelle _Pull Request_.

Il est recommandé de **faire des _commits atomiques_** (commits ne contenant qu'un petit pas de développement), pour faciliter _code review_ et _debugging_.

## Apprendre à faire une Pull Request

Pour s'entrainer au process de la _Pull Request_, le repo [first-contributions](https://github.com/firstcontributions/first-contributions) donne plus de détails et permet de f'aire un essai "en toute sécurité". :-)
