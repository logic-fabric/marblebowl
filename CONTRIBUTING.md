# Pour contribuer à MarbleBowl
 
La contribution au projet MarbleBowl se fait par **pull request**, en suivant la philosophie du modèle de branche de **GitFlow**.  

**Sommaire**

- [Pourquoi GitFlow](#pourquoi-gitflow)
- [Processus de collaboration](#processus-de-collaboration)
- [Soumettre une pull-request](#soumettre-une-pull-request)


### Pourquoi GitFlow

MarbleBowl est un **projet collaboratif open source**, le processus de développement se fait par **cycles itératifs**, et chaque fonctionnalité doit être travaillée sur une **branche séparée** (en parallèle), dans le but de distinguer le travail de chacun.

La possibilité de créer plusieurs branches rend le développement plus simple pour **collaborer avec plusieurs développeurs sur un projet commun**, en isolant le code en cours de développement de celui qui est terminé et validé. 

### Processus de collaboration

Le code en cours de développement doit se trouver **sur une branche parralèle à la branche `develop`** pour travailler et tester l'application.

Lorsque vous débuterez une nouvelle fonctionnalité, la branche en cours de développement devra se nommer tel que :  
`feature-nom-de-la-fonctionnalité`.

Par exemple : `feature-increment-counter`.

Une fois votre tâche terminée et votre dernier commit **pushé**, il vous faudra faire une `Pull Request` avec le bouton dédié.   
Après une revue de code, si le code soumis convient, il sera intégré à la branche `develop`. Sinon, des modifications seront demandées.

Il est préférable de faire des *commits atomiques* (petits commits contenant chacun un petit changement) pour faciliter le code review.

**Branche main**

La branche `main` est la **branche principale**, elle est gérée par le propriétaire du projet.   
À ce stade du développement, le code est testé, validé et potentiellement éligible à une **mise en production**.

**Branche develop**

La branche `develop` est la branche commune à tous les développeurs, elle correspond à la prochaine version de l’application.  
Une fois que le développement d’une fonctionnalité (`feature`) est terminé, le code sera **mergé** sur cette branche.

**Branche feature-**

La branche `feature-` correspond au code en cours de développement, elle implémente une nouvelle fonctionnalité à embarquer pour la prochaine version de l’application.  
Cette branche sera **mergée** sur la branche `develop`.

### Soumettre une pull-request

une fois que vous aurez forké le projet, il sera necéssaire de créer une branche pour y soumettre la premère `pull-request` de la nouvelle fonctionnalité :

1 : Créer une nouvelle branche à partir de `develop` :
`git checkout -b feature-new-branch`;

2 : Ajouter la feature à la **zone de staging** :
`git add <file>`;

3 : Commiter la fonctionnalité :
`git commit -m "commit message"`;

4 : Une fois que la nouvelle fonctionnalité a été poussée sur Git, se rendre sur *Github* et cliquer sur `compare & pull-request`,
puis, sur `Open a pull request`: laisser un commentaire détaillant tous les changements et les avancés de la nouvelle fonctionnalité.

La `pull-request` pourra être lue et commentée par les autres participants et pourra être validée par le propriétaire du projet pour être intégrée à la branche `develop`.