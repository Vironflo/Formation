# Formation Soleil — Claude Code

**Apprenant :** Jérôme
**Volume :** 15 h, réparties sur 5 sessions (2 h + 3 h + 3 h + 3 h + 4 h)
**Prérequis :** un ordinateur Windows, une adresse mail, rien d'autre

---

## Compteur de progression

À mettre à jour en fin de chaque séance. C'est ce qui remplace la mémoire de ce qu'on
a fait la fois d'avant — trois semaines entre deux sessions, ça s'oublie.

**Session 1 — Environnement de travail (2 h)** — date : ______ — temps réel : ____ h

- [ ] 1.1 VS Code installé, terminal repéré
- [ ] 1.2 Git installé, identité configurée
- [ ] 1.3 Dépôt GitHub créé, cloné, premier push réussi
- [ ] 1.4 Claude Code installé et connecté
- [ ] 1.5 Premier échange, exploration d'un projet inconnu

**Session 2 — Lire et comprendre (3 h)** — date : ______ — temps réel : ____ h

- [ ] 2.1 Révision : refaire le cycle add / commit / push sans aide
- [ ] 2.2 Interroger des fichiers qui ne sont pas du code
- [ ] 2.3 La même question, trois formulations
- [ ] 2.4 Cartographier un code hostile
- [ ] 2.5 Produire de la documentation, et la vérifier

**Session 3 — Débug (3 h)** — date : ______ — temps réel : ____ h

- [ ] 3.1 Révision : lancer les tests seul
- [ ] 3.2 Les cinq bugs, un par un
- [ ] 3.3 Le bug que l'IA ne trouvera pas
- [ ] 3.4 Écrire un test avant de corriger

**Session 4 — Modifier sans casser (3 h)** — date : ______ — temps réel : ____ h

- [ ] 4.1 Révision : annuler une modification, revenir à un commit
- [ ] 4.2 Cadrer une demande : « améliore » contre demande bornée
- [ ] 4.3 Refactoriser avec un filet de tests
- [ ] 4.4 Relire un diff ligne à ligne
- [ ] 4.5 Travailler sur une branche

**Session 5 — Automatiser et configurer (4 h)** — date : ______ — temps réel : ____ h

- [ ] 5.1 Automatiser une tâche répétitive, simulation d'abord
- [ ] 5.2 Lire des logs comme un enquêteur
- [ ] 5.3 Le cerveau : écrire ses règles une fois
- [ ] 5.4 Fabriquer une commande personnalisée
- [ ] 5.5 Installation sur le projet réel de Jérôme

**Total facturé : ____ h / 15 h**

---

## Comment lire ce document

Chaque module donne une durée, une consigne, et un **point d'ancrage** : la chose
à comprendre. Le résultat de l'exercice compte moins que le point d'ancrage.

Règle valable tout du long : avant chaque exercice, on enregistre l'état du projet.
Sans filet, on n'ose pas expérimenter. Et sans expérimentation, on n'apprend rien.

Chaque session commence par une révision de 15 minutes de la précédente, sans regarder
les notes. Ce qui ne ressort pas à ce moment-là n'est pas acquis, et on le refait.

---

# SESSION 1 — Environnement de travail (2 h)

Le module le plus ingrat et le plus important. Tout le reste en dépend.
On ne clôt pas la session tant que les cinq points ne sont pas verts.

## 1.1 — Visual Studio Code (15 min)

**Pourquoi VS Code plutôt qu'autre chose ?**
Ce n'est pas l'éditeur le plus puissant. C'est celui qui s'efface le mieux : il ouvre
un dossier, il affiche du texte, il intègre un terminal. Claude Code travaille dans
le terminal et modifie les fichiers du dossier. VS Code sert à voir ce qui se passe.

**À faire :**

- Télécharger VS Code sur code.visualstudio.com, installer avec les options par défaut
- Ouvrir le terminal intégré : menu Terminal, puis Nouveau terminal
- Repérer les trois zones : l'explorateur de fichiers à gauche, l'éditeur au centre,
  le terminal en bas
- Ouvrir un dossier quelconque, créer un fichier, l'enregistrer, le retrouver
  dans l'explorateur Windows

**Point d'ancrage :** le terminal n'est pas un truc d'expert. C'est une fenêtre où on
tape des phrases au lieu de cliquer. On va y passer les 15 heures.

## 1.2 — Git : comprendre avant d'installer (30 min)

**Le problème que Git résout.**
Jérôme modifie un fichier. Trois jours plus tard, ça ne marche plus. Qu'est-ce qui a
changé ? Sans Git, personne ne sait. Avec Git, on voit chaque modification, qui l'a
faite, quand, et on revient en arrière en une commande.

C'est aussi ce qui rend l'IA utilisable sans risque. Claude modifie vingt fichiers ?
Si le résultat ne convient pas, on annule tout. C'est le filet.

**Les quatre mots à retenir, et rien de plus :**

- **dépôt (repository)** — le dossier du projet, avec son historique complet
- **commit** — une photo de l'état du projet à un instant donné, avec un message
- **push** — envoyer ses commits sur GitHub, pour les sauvegarder et les partager
- **pull** — récupérer ce que les autres ont envoyé

**À faire :**

- Installer Git for Windows depuis git-scm.com, options par défaut
- Se présenter une fois pour toutes :
  `git config --global user.name "Jérôme ..."`
  `git config --global user.email "..."`
- Vérifier : `git --version` doit répondre un numéro
- Dans un dossier de test : `git init`, créer un fichier, `git status`, lire la sortie
- `git add -A`, relire `git status`, comprendre ce qui a changé entre les deux
- `git commit -m "essai"`, puis `git log` pour voir sa photo apparaître

**Point d'ancrage :** un commit n'est pas une sauvegarde de fichier. C'est une sauvegarde
de l'état du projet entier. On peut y revenir des mois après.

## 1.3 — Le dépôt GitHub (35 min)

**Pourquoi GitHub en plus de Git ?**
Git vit sur la machine. Si le disque lâche, tout est perdu. GitHub est la copie en ligne :
sauvegarde, partage, et historique consultable depuis n'importe où.

**À faire, dans cet ordre :**

- Créer un compte sur github.com
- Créer un dépôt de test : bouton **New**, nom `essai-jerome`, cocher **Private**,
  cocher **Add a README file**, valider
- Récupérer l'adresse du dépôt : bouton vert **Code**, onglet HTTPS, copier le lien
- Dans le terminal de VS Code : `git clone <le lien copié>` — le dossier apparaît
  sur la machine
- Ouvrir ce dossier dans VS Code, modifier le README, puis enchaîner :
  `git add -A`
  `git commit -m "premier essai"`
  `git push`
- Retourner sur github.com et constater que la modification y est
- Modifier le README **depuis le site GitHub**, puis faire `git pull` en local
  pour récupérer le changement

**L'authentification.** Au premier `push`, GitHub demande de s'identifier. Une fenêtre
s'ouvre dans le navigateur : se connecter, autoriser. C'est fait une seule fois par machine.
Si la fenêtre ne s'ouvre pas, on le règle ensemble. C'est le point de blocage le plus
courant, pas une faute.

**Point d'ancrage :** `clone` une fois, puis `add`, `commit`, `push` en boucle, toute la
vie du projet. Le `pull` sert dès qu'on est plus d'un, ou dès qu'on travaille sur
deux machines.

## 1.4 — Claude Code (20 min)

**À faire :**

- Installer Claude Code depuis la documentation officielle
- Se connecter avec le compte fourni
- Dans le terminal de VS Code, se placer dans le dossier du projet, lancer `claude`
- Taper `/status` : la commande affiche le compte connecté et le mode de facturation
- Taper `/help` : parcourir la liste des commandes disponibles, sans les apprendre

**La différence avec la version web, en une phrase.** Dans le navigateur, il faut coller
le contenu des fichiers à la main. Ici, l'outil ouvre les fichiers lui-même, lance des
commandes, et écrit ses modifications sur le disque.

**Point d'ancrage :** c'est aussi ce qui le rend risqué. D'où le module 1.2.
Le filet d'abord, l'IA ensuite.

## 1.5 — Se repérer dans un projet inconnu (20 min)

Dans une session neuve, poser successivement :

- `Que contient ce projet ? Fais-moi une carte de l'arborescence et du rôle de chaque dossier.`
- `Quelles instructions suis-tu dans ce projet ?`

La deuxième question est la démonstration à ne pas rater. Le projet contient un fichier
d'instructions que Claude a lu tout seul au démarrage. Il répond en français, il affiche
un log après chaque modification, il signale les cas limites — parce que c'est écrit
dans ce fichier, pas parce que c'est son comportement par défaut.

Modifier une règle en direct, relancer, constater le changement. Puis la remettre.

**Point d'ancrage :** l'outil se configure. Ce qui agace dans son comportement se règle
dans un fichier, une fois, définitivement.

---

# SESSION 2 — Lire et comprendre (3 h)

## 2.1 — Révision (15 min)

Sans regarder ses notes : créer un fichier, l'ajouter, le commiter, le pousser.
Puis expliquer à voix haute ce que fait chacune des trois commandes.

Si ça bloque, on refait le 1.3. Ce n'est pas du retard, c'est le prérequis de tout
le reste.

## 2.2 — Interroger des fichiers qui ne sont pas du code (40 min)

**Dossier :** `exercices/01-prise-en-main/`

- `Dans @exercices/01-prise-en-main/ventes-2025.csv : quel est le chiffre d'affaires total en euros ? Attention aux devises et aux statuts.`
- `Y a-t-il des anomalies dans ce CSV ?`
- `Analyse @exercices/01-prise-en-main/config-app.json. Qu'est-ce qui te semble risqué en production ?`

**Ce qui doit être remarqué :** une ligne du CSV n'a pas de nom de client. Si Claude ne
le signale pas de lui-même, c'est le moment de comprendre qu'il faut le demander.

**Point d'ancrage :** l'outil n'est pas réservé au code. Un tableur, une configuration,
un compte-rendu : tout ce qui est du texte est exploitable.

## 2.3 — La même question, trois formulations (35 min)

**Fichier :** `exercices/02-analyse-code/tarification.js`

Dans trois sessions séparées — `/clear` entre chaque — poser :

1. `C'est quoi ce fichier ?`
2. `Explique-moi @exercices/02-analyse-code/tarification.js`
3. `/expliquer @exercices/02-analyse-code/tarification.js`

Comparer les trois réponses sur leur précision et leur utilité réelle.

**Point d'ancrage :** la question détermine la réponse, bien plus que le modèle utilisé.

## 2.4 — Cartographier un code hostile (50 min)

Même fichier. Des noms de variables d'une lettre, zéro commentaire. Enchaîner :

- `Que fait ce fichier, dans son ensemble ?`
- `Renomme mentalement chaque variable et fonction avec un nom parlant. Ne modifie pas le fichier, donne-moi juste la correspondance.`
- `Dans quel ordre les remises se cumulent-elles ? Un revendeur avec un code promo de 30 % obtient quoi exactement ?`
- `Que se passe-t-il avec la commande CMD-1004 de @exercices/02-analyse-code/commandes-test.json ?`

**Ce qui doit sortir :** une référence du fichier de test n'existe pas dans le tarif.
Le calcul produit une valeur invalide qui se propage en silence jusqu'au total.

**Point d'ancrage :** l'IA explique très bien ce que le code **fait**. Elle ne sait pas
**pourquoi** le plafond de remise est à 40 %. Cette réponse-là est chez un humain.

## 2.5 — Produire de la documentation, et la vérifier (40 min)

- `Écris la documentation de tarification.js pour un développeur qui arrive sur le projet. Format markdown, dans un fichier séparé.`
- Relire. Repérer au moins une affirmation à vérifier dans le code.
- `Cette phrase est-elle exacte ? Montre-moi la ligne qui la justifie.`

**Point d'ancrage :** exiger la ligne qui prouve. Une affirmation sans référence est une
hypothèse bien écrite, pas un fait. C'est le réflexe le plus rentable de la formation.

---

# SESSION 3 — Débug (3 h)

## 3.1 — Révision (15 min)

Lancer les tests du projet seul, sans consigne. Lire la sortie. Dire combien de tests
échouent et sur quels noms.

## 3.2 — Cinq bugs, cinq natures (1 h 15)

**Fichiers :** `exercices/03-debug/panier.py` et `test_panier.py`

Le cœur de la formation. **Ne jamais demander « corrige tout ».** On procède ainsi :

1. Lancer les tests et voir les échecs réels :
   `!python -m unittest discover exercices/03-debug`
2. `Voici les échecs. Ne corrige rien. Donne-moi une hypothèse par test qui échoue.`
3. Corriger **un bug à la fois**, en relançant les tests entre chaque
4. Après chaque correction : `Pourquoi ça se comportait comme ça ?`

**Les cinq natures présentes dans le fichier :**

- Un piège du langage — une valeur par défaut partagée entre toutes les instances
- Une comparaison au seuil — inclus ou exclu, et sa conséquence commerciale
- Une suppression pendant qu'on parcourt la liste — l'index qui dérape
- Une division sans garde — le panier vide
- Une comparaison de dates faite sur du texte — juste ou fausse selon le jour du mois

**Point d'ancrage :** le troisième bug est le plus instructif. Il est invisible avec un
seul article dans le panier. Des données de test faibles cachent les vrais bugs.

## 3.3 — Le bug que l'IA ne trouvera pas (35 min)

Demander d'abord : `Y a-t-il d'autres problèmes dans panier.py, au-delà des tests qui échouent ?`

Puis la question qu'elle ne peut pas trancher seule :
`Les frais de port doivent-ils être calculés avant ou après la remise promo ?`

Les deux implémentations sont correctes en code. Une seule est correcte pour l'entreprise.
L'IA ne peut pas le savoir, et si on ne lui pose pas la question, elle tranchera sans
le signaler.

**Point d'ancrage :** la frontière. Technique d'un côté, commercial de l'autre.
Savoir de quel côté tombe une question, c'est la compétence qu'on vient chercher ici.

## 3.4 — Écrire un test avant de corriger (55 min)

Reprendre un bug déjà corrigé. Le réintroduire volontairement. Puis :

- `Écris un test qui échoue à cause de ce bug, et seulement à cause de lui.`
- Lancer le test, vérifier qu'il échoue
- Corriger, relancer, vérifier qu'il passe

**Point d'ancrage :** un test écrit après coup prouve que ça marche aujourd'hui.
Un test écrit avant prouve qu'on a compris le problème.

---

# SESSION 4 — Modifier sans casser (3 h)

## 4.1 — Révision : annuler (20 min)

- Modifier trois fichiers au hasard
- `git status` pour voir l'étendue des dégâts
- `git checkout -- .` pour tout annuler d'un coup
- Recommencer, mais cette fois commiter, puis revenir au commit précédent

**Point d'ancrage :** savoir annuler est ce qui autorise à oser. Tant qu'on ne sait pas
revenir en arrière, on utilise l'IA avec la main qui tremble.

## 4.2 — Cadrer une demande (40 min)

**Fichier :** `exercices/04-refactoring/rapports.js`

Deux essais à comparer, dans deux sessions séparées.

Essai A : `Améliore rapports.js` — observer l'ampleur de ce qui est proposé, puis
tout annuler avec ce qu'on vient d'apprendre au 4.1.

Essai B : `Extrais uniquement la duplication entre les trois fonctions de rapport. Rien d'autre.`

Comparer les deux modifications côte à côte.

**Point d'ancrage :** « améliore » est une demande sans bord. L'IA en trouvera toujours un,
et ce ne sera pas le vôtre.

## 4.3 — Refactoriser avec un filet (55 min)

Même fichier, dans l'ordre strict :

1. `git commit -am "avant refacto"` — le filet
2. `Écris d'abord des tests qui capturent le comportement actuel de ces quatre fonctions.`
3. Lancer les tests, vérifier qu'ils passent **avant** de toucher au code
4. `Refactorise uniquement les trois fonctions de rapport. Ne touche pas à topClients.`
5. Relancer les tests

**Point d'ancrage :** les tests écrits avant le refactoring sont ce qui permet de dire
« ça marche encore » autrement qu'en croisant les doigts. C'est aussi ce qui permet
d'accepter un changement qu'on ne comprend pas entièrement.

## 4.4 — Relire un diff ligne à ligne (30 min)

- `!git diff` — lire soi-même chaque ligne modifiée
- Repérer une modification qu'on n'avait pas demandée, s'il y en a une
- `Pourquoi as-tu changé cette ligne-là ? Je ne l'avais pas demandé.`

**Point d'ancrage :** relire le diff est la seule vérification qui ne se délègue pas.
Les tests disent que ça marche. Le diff dit ce qui a changé. Ce n'est pas la même
information.

## 4.5 — Travailler sur une branche (35 min)

- `git checkout -b essai-refonte` — créer une branche et basculer dessus
- Faire une modification franche, commiter
- `git checkout main` — constater que la modification a disparu
- `git checkout essai-refonte` — constater qu'elle est revenue

**Point d'ancrage :** une branche, c'est un brouillon parallèle. Pour toute expérimentation
un peu large avec l'IA, c'est là que ça se passe. Le travail qui marche reste intact
à côté.

---

# SESSION 5 — Automatiser et configurer (4 h)

## 5.1 — Automatiser une tâche répétitive (40 min)

Prendre un dossier de fichiers aux noms incohérents — majuscules, parenthèses, accents,
versions multiples du même document.

- `Regarde les fichiers de ce dossier. Propose-moi une convention de nommage unique, cohérente, avant de renommer quoi que ce soit.`
- Valider ou corriger la convention proposée
- `Écris un script PowerShell qui applique cette convention. Mode simulation d'abord : il affiche ce qu'il ferait sans rien renommer.`
- Lire la sortie de simulation, vérifier les cas tordus, puis seulement exécuter

**Point d'ancrage :** la simulation avant l'exécution. Sur treize fichiers l'erreur est
bénigne. Sur trois mille, c'est une soirée perdue. Le réflexe s'acquiert sur les treize.

## 5.2 — Lire des logs comme un enquêteur (30 min)

**Fichier :** `exercices/06-automatisation/serveur.log`

- `Analyse ce log. Classe les erreurs par cause racine, pas par ordre d'apparition.`
- `Y a-t-il une progression dans le temps sur un des indicateurs ?`

**Ce qui doit sortir :** les requêtes lentes se dégradent de façon continue sur deux jours,
pas ponctuellement. Les blocages qui suivent en sont la conséquence, pas la cause.

**Point d'ancrage :** classer par cause plutôt que par ordre d'apparition change
complètement le diagnostic. C'est une consigne à donner explicitement.

## 5.3 — Le cerveau : écrire ses règles une fois (50 min)

### Le problème

Chaque nouvelle conversation avec une IA repart de zéro. On réexplique son métier,
ses habitudes, sa façon de travailler. Trois minutes perdues à chaque fois, et une
réponse générique tant qu'on ne les a pas données.

### L'idée

Écrire son profil une seule fois, dans un fichier : qui je suis, ce sur quoi je travaille,
comment je veux qu'on me réponde, ce qu'il ne faut pas faire. Ce profil est ensuite
chargé automatiquement au début de chaque conversation, quelle que soit l'IA utilisée.

L'IA connaît le contexte dès le premier message. On ne réexplique plus rien.

### Ce qu'on met dedans

- **Qui** — métier, entreprise, rôle
- **Comment répondre** — langue, longueur, ton, ce qui agace
- **Sur quoi je travaille** — les outils et les projets en cours
- **Les règles de travail** — ce qu'il faut toujours faire, ce qu'il ne faut jamais faire
- **Ce qui est en cours** — les tâches du moment, pour que l'IA puisse les rappeler

Exemples de règles réelles, tirées d'un profil en service :

- Répondre en français, phrases courtes, aller droit au but
- Toujours indiquer la prochaine étape concrète après une action
- Signaler les effets de bord : ce que ça casse, ce qui change ailleurs
- Ne jamais ajouter une fonctionnalité non demandée dans une correction de bug
- Chercher ce qui dépend d'un élément **avant** de le supprimer

### Deux niveaux, à ne pas confondre

- **Le profil personnel** — il suit la personne partout, sur tous les projets
- **Le fichier d'instructions du projet** — il vit dans le dépôt, s'applique à ce projet
  seulement, et suit toute l'équipe qui le clone

C'est le second qu'on a vu en session 1. Le premier est celui qu'on écrit maintenant.

### Exercice

Écrire son propre profil. Cinq lignes suffisent pour commencer. Puis le tester : poser
une même question dans deux sessions neuves, avec et sans le profil, et comparer.

**Point d'ancrage :** la valeur n'est pas dans l'outil, elle est dans les règles.
Une règle bien écrite s'applique cent fois sans qu'on y repense.

## 5.4 — Fabriquer une commande personnalisée (40 min)

Partir d'une tâche que Jérôme refait chaque semaine. La formuler une fois correctement,
puis l'enregistrer comme commande réutilisable.

- `Je fais souvent ceci : [décrire la tâche]. Transforme ça en commande personnalisée que je pourrai relancer avec un slash.`
- Tester la commande sur un cas réel
- L'ajuster après le premier essai — la première version n'est jamais la bonne

**Point d'ancrage :** une commande personnalisée, c'est une consigne qu'on n'a plus
jamais à retaper. C'est le même principe que le profil, appliqué à une tâche précise.

## 5.5 — Installation sur le projet réel (1 h 20)

Plus de consigne écrite. On ouvre le vrai dépôt de Jérôme et on installe :

- Un fichier d'instructions de projet, généré puis corrigé ensemble
- Les conventions de travail réelles, écrites une fois pour toutes
- Les deux commandes personnalisées les plus rentables
- Les permissions ajustées à sa façon de travailler

**Point d'ancrage :** ce qui reste après une formation, ce n'est pas ce qu'on a retenu.
C'est ce qu'on a configuré.

---

# Récapitulatif — les dix réflexes

1. Commiter avant d'expérimenter. Toujours.
2. Savoir annuler avant de savoir modifier.
3. Donner le chemin du fichier, pas une description approximative.
4. Une demande cadrée bat une demande large.
5. Un bug à la fois, tests relancés entre chaque.
6. Exiger la ligne qui prouve une affirmation.
7. Relire le diff soi-même. Ça ne se délègue pas.
8. Simulation avant exécution, dès qu'il y a un lot de fichiers.
9. Classer par cause, pas par ordre d'apparition.
10. Écrire la règle plutôt que répéter la consigne.
