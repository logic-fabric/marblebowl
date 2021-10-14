# Contributor's Guide for MarbleBowl

'HOW TO CONTRIBUTE TO MARBLEBOWL PROJECT' accepts PR's (pull requests) with **GitFlow** branching model.
This file is to help **newbies** get familiar with the Marble Bowl's contribution processes.

**Contents**

- [Why GitFlow](#why-gitflow)
- [Process to collaborate](#process-to-collaborate)
- [branch master](#branch-master)
- [branch develop](#branch-develop)
- [Submitting a Pull Request](#submitting-a-pull-request)


### Why GitFlow

**Parallel Development**

MarbleBowl is a **collaborative open source project**, the development process is done by **iterative cycle**, each feature have to be worked on parallel branches to separate the development from eachother.

GitFlow offer the capability to makes **parallel development very easy**, by isolating new development from finished work. New development (such as new features) is done in feature branches, and is only merged back into main body of code when developers are happy that the code is ready for release.

**Collaboration**

Feature branches also make it easier for multiple developers to **collaborate on the same feature**: each feature branch is a sandbox where the only changes are the changes necessary to get the new feature working. That makes it very easy to see and follow what each collaborator is doing.

### Process to collaborate

| Branch name| Nodes | Original branch | Lifecycle | Features | 
| :---: | :---: | :---: | :---: | :---: | 
| main | Unique | - | Permed | Stable, tested and validated code. Potentially eligible for production | 
| feature | Multiple | develop | Feature development | Code under development. Implementation of a feature that will have to be embedded in the next version of the application.  | 
| develop | Unique | main | Permed | Code of the next version of the application. Once the development of a feature is finished, the code is merged on this branch | 

=> parler de la branche master
=> parler de la branche develop
=> parler de la branche hotfix
=> commit atomique

=> merging par utilisateur propriétaire