# Pour contribuer à MarbleBowl

Dans un premier temps, **forker ce _repository_** sur son compte _GitHub_. C'est sur ce _fork_ que se fera toute nouvelle contribution.

La contribution au projet se fait en suivant un _GitFlow_ simplifié.

## Pourquoi un GitFlow

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

## Nommage des commits

Les messages de commit sont rédigés en anglais en suivant les conventions suivantes :

```http
<type>(<domaine>): <court résumé>
  │        │             │
  │        │             └─⫸ résumé rédigé à l'impératif présent sans majuscule au début ni ponctuation finale
  │        │
  │        └─⫸ le domaine auquel s'applique le commit (optionnel)
  │                          
  └─⫸ le type de commit à choisir parmi build|ci|docs|feat|fix|perf|style|refactor|test
```
Le type doit être l'un des choix suivants : 
  * build: un changement qui affecte le système ou les dépendences
  * ci: un changement pour la configuration de la CI
  * docs: un changement dans la documentation
  * feat: une nouvelle fonctionnalité
  * fix: la résolution d'un bug
  * perf: un changement de code améliorant la performance
  * style: un changement n'affectant que le style
  * refactor: un changement de l'organisation du code sans changement de fonctionnalité ou performance
  * test: un changement dans le jeu de tests

Exemples :
  * `feat (redux): add reducer case to timer feature`
  * `fix: timer not displayed`
  * `test: update reducer timer tests`
  * `refactor: reorganize header style rules`

Il est possible d'ajouter un message plus détaillé en sautant une ligne après la première. Ce dernier peut contenir des informations supplémentaires et/ou un numéro d'issue que le commit permet de cloturer.