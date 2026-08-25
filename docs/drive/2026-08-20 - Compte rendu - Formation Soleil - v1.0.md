# Formation Soleil — Compte rendu de la réunion du 20 août 2026

**Pour :** Jérôme Perin
**De :** Florentin Lurot (Antesy)
**Objet :** ce qui a été décidé, et ce qu'il y a à faire avant la première séance
**Version :** 1.0 du 25 août 2026

> À lire avant mardi. Dix minutes.
> Les cases ☐ sont des choses à faire de ton côté.

---

## 1. Les dates

| Séance | Date | Durée | Sujet |
|---|---|---|---|
| 1 | Mardi 25 août 2026 | 2 h | Environnement de travail |
| 2 | Mercredi 26 août 2026 | 3 h | Lire et comprendre du code |
| 3 | Mercredi 2 septembre 2026 | 3 h | Débug |
| 4 | Jeudi 3 septembre 2026 | 3 h | Modifier sans casser |
| 5 | Samedi 5 septembre 2026 | 4 h | Automatiser et configurer |

15 heures au total. Plage horaire 14 h - 22 h, on cale l'heure exacte sur WhatsApp la veille.

---

## 2. Ce que tu installes avant mardi

Quatre choses. Compte 45 minutes. Si ça coince, écris-moi sur WhatsApp, on ne va pas
perdre la séance là-dessus.

### ☐ 2.1 — Visual Studio Code

C'est la fenêtre par laquelle tu vas voir ce qui se passe. Il ouvre un dossier,
il affiche tes fichiers, et il contient un terminal.

- Aller sur **code.visualstudio.com**, gros bouton bleu, options par défaut
- Une fois lancé : menu **Terminal**, puis **Nouveau terminal**
- Une zone sombre apparaît en bas de l'écran. C'est le terminal. On va y passer les 15 heures.

Rien d'autre à configurer. Pas d'extension à chercher, on verra ça plus tard.

**Le terminal, en une phrase :** une fenêtre où tu tapes des phrases au lieu de cliquer.
Tu vas être mauvais dedans pendant deux heures, puis ça deviendra naturel.

### ☐ 2.2 — Git

Le problème que ça règle : tu modifies un fichier, trois jours après ça ne marche plus,
et personne ne sait ce qui a changé. Avec Git, tu vois chaque modification et tu reviens
en arrière en une commande.

C'est aussi ce qui rend l'IA utilisable sans risque. Claude modifie vingt fichiers,
le résultat ne te plaît pas, tu annules tout. C'est le filet. On le pose avant de monter
sur le fil.

- Aller sur **git-scm.com**, bouton **Download for Windows**, cliquer Next partout
- Vérification : dans le terminal de VS Code, taper `git --version`
- Un numéro s'affiche, c'est bon. Une erreur, ferme VS Code et rouvre-le :
  il doit relire l'installation.

### ☐ 2.3 — Un compte GitHub

Git vit sur ta machine. Si le disque lâche, tout part avec. GitHub est la copie en ligne :
sauvegarde, historique consultable, et partage entre nous deux.

- Aller sur **github.com**, bouton **Sign up**
- Prendre un nom d'utilisateur court. Il apparaîtra dans l'adresse de tous tes projets,
  pendant des années.

### ☐ 2.4 — M'envoyer ton nom d'utilisateur GitHub

**C'est le seul point qui me bloque.** Tant que je n'ai pas ton identifiant, je ne peux pas
te donner accès au dossier de la formation. Deux minutes de ton côté, par WhatsApp ou par mail.

### ☐ 2.5 — Un compte Anthropic

- Aller sur **claude.ai**, créer le compte avec ton mail pro

**Ne prends aucun abonnement et n'achète pas de crédits.** Il y a plusieurs formules,
elles ne se valent pas selon l'usage, et je ne veux pas que tu paies pour la mauvaise.
On regarde ça ensemble mardi. L'accès pour la durée de la formation est de mon côté.

### ☐ 2.6 — Lire le lexique

Il est déjà dans ta boîte mail, et dans ce dossier Drive. C'est le seul devoir.

Tu n'as pas à retenir les mots, juste à les avoir croisés une fois. Quand je dirai
« commit » mardi, tu ne perdras pas trente secondes à te demander de quoi je parle.
Sur deux heures, ces trente secondes répétées, ça fait une bonne partie de la séance.

Ce qui reste flou, note-le. On démarre par tes questions.

---

## 3. Ce que je t'envoie de mon côté

- Le **dossier Drive partagé** : lexique, notes de réunion, documents de travail.
  Accessible quand tu veux, y compris entre les séances.
- Ce **compte rendu**.
- L'**accès GitHub** de la formation, dès réception de ton identifiant.

---

## 4. Ce qu'on fait mardi (2 h)

- On vérifie que les installations répondent
- Git : les quatre mots qui suffisent (dépôt, commit, push, pull), puis le cycle complet
  fait par toi, pas par moi
- Ton premier dépôt en ligne : créé, récupéré sur ta machine, modifié, renvoyé
- Claude installé dans le terminal de VS Code
- On lui fait explorer un projet que tu n'as jamais vu, et il te le raconte

**Objectif de fin de séance :** tu sais sauvegarder ton travail et revenir en arrière
tout seul. Tout le reste de la formation repose là-dessus.

C'est le module le plus ingrat des cinq. On ne le saute pas, et on ne le termine pas
tant que les cinq points ne sont pas verts.

---

## 5. Ce qu'on a ouvert jeudi et qui reviendra

Rien à préparer. C'est là pour que tu saches que je ne les ai pas oubliés.

- **PACK** et le référentiel de la Haute Autorité de Santé. Ton vrai projet, celui
  sur lequel on branchera tout en séance 5.
- **L'extraction de données sur les sites HAS.** Les assistants classiques calent dessus,
  et il y a une raison technique précise. On la verra, c'est un vrai sujet.
- **La mise à jour automatique** de tes documents de référence quand la HAS publie.
- **Le Kanban** alimenté depuis les notes de réunion.
- **L'organisation du Drive** par code couleur, et la sauvegarde sur NAS pour le RGPD.
- **Le renommage et le versionnage automatiques** de tes fichiers (2.1 vers 2.2).
- **Ton script PowerToys** de capture d'écran, qui se marche dessus avec la visio.

En séance 5, une heure vingt est réservée pour installer ça sur ton vrai projet.
Note tes questions au fil de l'eau, ne les garde pas pour la fin.

---

## 6. Administratif

- Facture envoyée le 20 août 2026
- Pas de TVA, prestation intracommunautaire
- ☐ Règlement : on démarre au paiement, comme tu l'as demandé

---

## 7. Si ça bloque avant mardi

WhatsApp, avec une capture d'écran. Une image me dit en trois secondes ce qu'une
description me fait deviner en dix messages.

Un blocage à l'installation, c'est la normale. Le plus fréquent : la fenêtre
d'authentification GitHub qui refuse de s'ouvrir au premier envoi. Ça se règle
en deux minutes à deux.

À mardi.

**Florentin**
