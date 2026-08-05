# Parcours d'apprentissage — 7 modules × 2h

Découpage du forfait de 14 heures. Chaque module est **autonome** : il peut se donner seul,
se reporter, ou se rejouer. L'ordre proposé est le plus progressif, mais un stagiaire déjà
à l'aise peut sauter le module 1.

Chaque module suit la même structure : objectif → démonstration → pratique guidée →
pratique autonome → point d'ancrage à retenir.

---

## Vue d'ensemble

- **Module 1 — Installer et parler à l'IA** (2h) — socle technique, premiers réflexes
- **Module 2 — Le contexte, tout le sujet** (2h) — la compétence qui sépare les débutants des experts
- **Module 3 — Comprendre du code qu'on n'a pas écrit** (2h) — le gain le plus immédiat
- **Module 4 — Déboguer avec un binôme** (2h) — méthode d'enquête, pas de devinette
- **Module 5 — Refactoriser sans casser** (2h) — la confiance, et comment la vérifier
- **Module 6 — Générer et automatiser** (2h) — passer du dialogue à la délégation
- **Module 7 — Votre configuration, vos projets** (2h) — atterrissage sur le réel

---

## Module 1 — Installer et parler à l'IA

**Objectif :** être opérationnel en fin de séance, sur sa propre machine.

**Contenu**

- Repères sur Visual Studio Code : ouvrir un dossier, le terminal intégré, l'explorateur
- Installation de Claude Code, connexion du compte, premier lancement
- Web contre terminal : pourquoi le terminal voit vos fichiers et pas le navigateur
- La boucle de base : demander → Claude lit → Claude propose → vous validez
- Les modes de permission : ce que l'IA peut faire sans demander, et ce qu'elle doit faire valider

**Pratique** — `exercices/01-prise-en-main/`

**À retenir :** Claude Code n'est pas un chatbot dans lequel on colle du code.
C'est un outil qui **lit et écrit vos fichiers directement**. Toute la différence est là.

---

## Module 2 — Le contexte, tout le sujet

**Objectif :** comprendre que la qualité de la réponse est la qualité de la question et du contexte.

**Contenu**

- Anatomie d'une bonne demande : intention, contrainte, format attendu
- Donner du contexte : nommer les fichiers, coller une erreur, montrer une capture
- Ce que l'IA ne sait pas et ne devinera jamais : votre métier, vos priorités, votre historique
- Gérer une longue session : quand relancer propre, comment reprendre un fil (`--continue`)
- Le fichier de mémoire projet : écrire une règle, constater qu'elle s'applique

**Pratique** — `exercices/01-prise-en-main/` puis modification en direct de `CLAUDE.md`

**À retenir :** on ne « prompte » pas, on **briefe**. La même règle qu'avec un nouveau collaborateur
compétent mais qui ne connaît rien à votre contexte.

---

## Module 3 — Comprendre du code qu'on n'a pas écrit

**Objectif :** reprendre un projet inconnu et savoir en parler en trente minutes.

**Contenu**

- Faire cartographier un projet : structure, rôles des fichiers, points d'entrée
- Demander une explication **par niveau** : vue d'ensemble, puis fonction, puis ligne
- Repérer ce qui est risqué : dépendances, effets de bord, code mort
- Faire produire de la documentation exploitable à partir du code existant
- Vérifier ce que l'IA affirme — le réflexe qui évite les mauvaises surprises

**Pratique** — `exercices/02-analyse-code/`

**À retenir :** l'IA explique très bien **ce que le code fait**. Elle ne sait pas
**pourquoi il a été écrit ainsi**. Cette distinction sauve des refactorings catastrophiques.

---

## Module 4 — Déboguer avec un binôme

**Objectif :** remplacer le tâtonnement par une méthode.

**Contenu**

- Fournir les bons éléments : message d'erreur complet, données d'entrée, comportement attendu
- Faire formuler des hypothèses avant de faire corriger
- Les bugs que l'IA trouve très bien : typage, valeurs limites, logique inversée
- Les bugs qu'elle rate : ceux qui viennent de l'environnement, des données réelles, de la concurrence
- Reproduire avant de corriger : écrire le test qui échoue, puis réparer

**Pratique** — `exercices/03-debug/` (quatre bugs de natures différentes)

**À retenir :** une correction acceptée sans être comprise est une dette.
Toujours demander « pourquoi ça plantait ».

---

## Module 5 — Refactoriser sans casser

**Objectif :** améliorer du code existant en gardant le contrôle.

**Contenu**

- Le filet de sécurité d'abord : commit avant, comparaison après
- Refactoring par petits pas : une intention par demande
- Faire générer des tests **avant** de restructurer
- Nommer, découper, supprimer les répétitions — et savoir s'arrêter
- Relire un changement proposé : les questions à se poser systématiquement

**Pratique** — `exercices/04-refactoring/`

**À retenir :** l'IA refactorise volontiers **au-delà** de ce qu'on a demandé.
Cadrer le périmètre fait partie de la demande.

---

## Module 6 — Générer et automatiser

**Objectif :** passer du dialogue à la délégation de tâches complètes.

**Contenu**

- Écrire une spécification exploitable : entrées, sorties, cas limites, contraintes
- Générer un module complet à partir d'une spec, puis le faire tester
- Automatiser le répétitif : renommage en masse, conversion de formats, extraction de données
- Enchaîner des commandes système depuis la conversation
- Créer une commande personnalisée pour une procédure qu'on refait chaque semaine

**Pratique** — `exercices/05-generation/` et `exercices/06-automatisation/`

**À retenir :** le temps passé à écrire une bonne spec est toujours inférieur
au temps passé à corriger un code généré sur une demande floue.

---

## Module 7 — Votre configuration, vos projets

**Objectif :** que l'outil serve **votre** quotidien, pas les exercices de la formation.

**Contenu**

- Installation de la mémoire projet sur vos dépôts réels
- Vos conventions, votre stack, vos procédures de déploiement écrites une fois pour toutes
- Vos commandes personnalisées, à partir de vos vraies tâches récurrentes
- Automatisations déclenchées : ce qui doit se lancer tout seul
- Bilan : où l'IA vous fait gagner, où elle vous coûte, quoi ne pas lui confier

**Pratique** — vos dépôts, en direct

**À retenir :** un outil configuré vaut dix outils découverts.
La séance produit une configuration qui reste après la formation.

---

## Progression attendue

- **Après le module 2** — autonome sur l'usage courant : lire, demander, comprendre
- **Après le module 4** — gain de temps mesurable sur le quotidien
- **Après le module 6** — capable de déléguer une tâche complète et d'en vérifier le résultat
- **Après le module 7** — configuration en place, pratique installée, plus besoin d'accompagnement

---

## Adaptations selon le profil

- **Profil non technique** — modules 1, 2, 3 et 6 uniquement, exercices remplacés par
  des cas bureautiques et documentaires
- **Développeur confirmé** — module 1 réduit à 30 minutes, temps récupéré sur les modules 5 et 7
- **Équipe** — modules 1 à 4 en collectif, modules 5 à 7 en individuel sur les projets de chacun
