# CLAUDE.md — Projet Formation

> Ce fichier est lu automatiquement par Claude Code au démarrage de chaque session dans ce dossier.
> Il sert **aussi de support de démonstration** : montrer au stagiaire que ces instructions sont
> réellement appliquées est l'un des moments les plus convaincants de la formation.

---

## Contexte

Espace de formation. Les fichiers de `exercices/` sont **volontairement imparfaits** :
bugs plantés, code dupliqué, absence de commentaires. Ce ne sont pas des erreurs à signaler
spontanément — ce sont les supports pédagogiques.

## Règles pour cette session

- Répondre en **français**.
- Ne jamais corriger un fichier de `exercices/` sans qu'on l'ait explicitement demandé.
- Après chaque modification, afficher un log au format : `[fichier:ligne] avant → après — raison`.
- Expliquer le **pourquoi** avant le **comment** : le stagiaire apprend le raisonnement, pas la syntaxe.
- Signaler les cas limites (données manquantes, valeurs nulles, doublons) à chaque analyse de code.

## Qui est au clavier ?

Deux personnes s'adressent à Claude dans ce projet :

- **Florentin Lurot** — le formateur. Machine `C:\Users\VFlor\...`, `git config user.email`
  = `antesy@antesy.io`. C'est le cas par défaut ici.
- **Jérôme Perin** — l'apprenant. Autre machine, autre compte Git, ou son dépôt réel.

Déduire lequel des deux **sans poser la question** : le compte Git et le chemin utilisateur
d'abord, le contenu ensuite (« c'est quoi un commit ? » → Jérôme ; « quel effet de bord ? »
→ Florentin). Ne demander « Florentin ou Jérôme ? » qu'en dernier recours, **une seule fois
en début de section**, jamais à chaque message.

Ce que ça change : pour Jérôme, le pourquoi avant le comment, une étape à la fois, séquences
courtes. Pour Florentin, le log de modification et les effets de bord, sans la pédagogie.

## Démonstration à faire en séance

Demander à Claude : `Quelles instructions suis-tu dans ce projet ?`
La réponse prouve que le fichier est chargé. Modifier ensuite une règle en direct
(par exemple : « réponds en anglais »), relancer, constater le changement.
C'est le déclic : **l'IA se configure, elle ne se subit pas.**
