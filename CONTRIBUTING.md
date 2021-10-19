# Pour contribuer à MarbleBowl

MarbleBowl est un **projet collaboratif** s'inspirant de la philosophie du modèle de branche **GitFlow**.
La contribution au projet se fait par **pull request**

**Sommaire**

- [Pourquoi GitFlow](#pourquoi-gitflow)
- [Processus de collaboration](#processus-de-collaboration)
- [Soumettre une pull-request](#soumettre-une-pull-request)


### Pourquoi GitFlow

**Développement parallèle**

MarbleBowl est un **projet collaboratif open source**, le processus de développement se fait par **cycle d'itération**, chaque fonctionnalité doit être travaillée sur une branche séparée en parallèle dans le but de séparer le travail de chacun.

GitFlow offre la possibilité de faire du **développement parallèle très simplement**, en isolant le code en cours de développement de celui qui est terminé. Le code en cours de développement doit se trouver **sur une branche parralèle à la branche `develop`**

Une fois la branche poussée et validée par le gestionnaire du projet (pull request), la fonctionnalité apparait sur la branche `develop`.

**Collaboration**

La possibilité de créer plusieurs branches rend le developpement plus simple pour **collaborer sur plusieurs fonctionnalistés**.

### Processus de collaboration

Pour collaborer au projet MarbleBowl, il est nécéssaire de faire des `pull-request` (PR). 
Lorsque vous débuterez une nouvelle fonctionnalité, ladite branche devra se nommer telle que : `feature- + nom de la fonctionnalité`;

Par exemple : `feature-increment-counter`.

Il est préférable de faire des *commits atomiques* (petits commits contenant chacun un petit changement) pour faciliter les code reviews

**Branche master**

La branche `master`est la branche principale, elle est gérée par le propriétaire du projet. 
Le code est stable, testé et validé potentiellement éligible pour une *MEP* (Mise En Production)

**Branche develop**

La branche `develop` est la branche commune à tous les developpeurs
La branche correspond à la prochaine version de l’application. Une fois que le développement d’une fonctionnalité (branche `feature`) est terminé, le code est fusionné sur cette branche

**Branche feature-**

Code en cours de développement qui implémente une fonctionnalité à embarquer dans la prochaine version de l’application

### Soumettre une pull-request

une fois que vous avez cloné le projet forké, il est necéssaire de créer une branche pour y soumettre la premère `pull-request`:

Créer une nouvelle branche à partir de `develop` :
`git checkout -b feature-new-branch`;

Ajouter la feature à la zone de staging :
`git add <file>`;

Commiter la fonctionnalité :
`git commit -m "commit message"`;

Une fois la nouvelle fonctionnalité `pusher`sur Git, se rendre sur *Github* et, une fois sur le projet, cliquer sur `pull-request`