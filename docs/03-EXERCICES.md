# Exercices — consignes détaillées

Chaque exercice suit le même rythme : une consigne, une durée indicative,
et un **point d'ancrage** — la chose à comprendre, qui compte plus que le résultat.

Avant de commencer : `git add -A` et `git commit -m "avant exercice"`.
Sans filet, on n'expérimente pas.

---

## Exercice 1.1 — Découvrir un projet inconnu (15 min)

**Dossier :** racine du projet

Dans une session neuve, demander successivement :

- `Que contient ce projet ? Fais-moi une carte de l'arborescence et du rôle de chaque dossier.`
- `Quelles instructions suis-tu dans ce projet ?`
- `Qu'est-ce que la commande /expliquer fait, et d'où vient-elle ?`

**Point d'ancrage :** Claude a exploré seul, sans qu'on lui donne un seul chemin.
C'est la différence fondamentale avec l'interface web où il faut tout coller à la main.

---

## Exercice 1.2 — Interroger des documents (20 min)

**Fichiers :** `exercices/01-prise-en-main/`

- `Lis @exercices/01-prise-en-main/notes-reunion.md et donne-moi les décisions prises, séparées des sujets encore ouverts.`
- `Dans @exercices/01-prise-en-main/ventes-2025.csv : quel est le chiffre d'affaires total en euros ? Attention aux devises et aux statuts.`
- `Y a-t-il des anomalies dans ce CSV ?`

**Ce qui doit être remarqué :** la ligne du 25 mars n'a pas de nom de client.
Si Claude ne le signale pas spontanément, c'est l'occasion de comprendre qu'il faut le demander.

**Point d'ancrage :** l'outil n'est pas réservé au code. Un CSV, un compte-rendu,
un fichier de configuration — tout ce qui est du texte est exploitable.

---

## Exercice 1.3 — Relire une configuration (15 min)

**Fichier :** `exercices/01-prise-en-main/config-app.json`

- `Analyse cette configuration. Qu'est-ce qui te semble risqué en production ?`

**Ce qui doit sortir :** SMTP sans TLS sur le port 25, données client dans les logs,
rétention de 3 jours, zéro tentative de reprise sur l'API, taux de change en temps réel
alors que la facturation devrait figer le taux, TVA non obligatoire.

**Point d'ancrage :** croiser ce fichier avec les notes de réunion explique
plusieurs des 34 tickets d'Amina. **Le contexte transforme une analyse technique en diagnostic métier.**

---

## Exercice 2.1 — La même question, trois formulations (20 min)

**Fichier :** `exercices/02-analyse-code/tarification.js`

Dans trois sessions **séparées** (`/clear` entre chaque), poser :

1. `C'est quoi ce fichier ?`
2. `Explique-moi @exercices/02-analyse-code/tarification.js`
3. `/expliquer @exercices/02-analyse-code/tarification.js`

Comparer les trois réponses en termes de précision et d'utilité réelle.

**Point d'ancrage :** la question détermine la réponse, bien plus que le modèle utilisé.

---

## Exercice 2.2 — Écrire une règle et la voir s'appliquer (15 min)

- Demander : `Explique-moi la fonction c() de tarification.js` — observer le style de réponse
- Ajouter dans `CLAUDE.md` : `Toujours répondre en anglais.`
- `/clear`, reposer la même question — constater le changement
- Retirer la règle, relancer

**Point d'ancrage :** l'outil se configure. Ce qui vous agace dans son comportement
se règle dans un fichier, une fois, définitivement.

---

## Exercice 3.1 — Cartographier un code hostile (30 min)

**Fichier :** `exercices/02-analyse-code/tarification.js`

Ce fichier a des noms de variables d'une lettre et zéro commentaire. Enchaîner :

- `Que fait ce fichier, dans son ensemble ?`
- `Renomme mentalement chaque variable et fonction avec un nom parlant. Ne modifie pas le fichier, donne-moi juste la correspondance.`
- `Dans quel ordre les remises se cumulent-elles ? Un revendeur avec un code promo de 30 % obtient quoi exactement ?`
- `Que se passe-t-il avec la commande CMD-1004 de @exercices/02-analyse-code/commandes-test.json ?`

**Ce qui doit sortir :** la référence `LICENCE_INCONNUE` n'existe pas dans le tarif —
le calcul produit `NaN` et se propage silencieusement jusqu'au total de la facture.

**Point d'ancrage :** l'IA explique très bien **ce que le code fait**.
Elle ne sait pas **pourquoi** le plafond de remise est à 40 % — cette réponse-là est chez un humain.

---

## Exercice 3.2 — Produire de la documentation (20 min)

- `Écris la documentation de tarification.js pour un développeur qui arrive sur le projet. Format markdown, dans un fichier séparé.`
- Relire. Repérer au moins une affirmation à vérifier dans le code.
- `Cette phrase est-elle exacte ? Montre-moi la ligne qui la justifie.`

**Point d'ancrage :** exiger la ligne qui prouve. Une affirmation sans référence
est une hypothèse bien écrite, pas un fait.

---

## Exercice 4.1 — Cinq bugs, cinq natures (45 min)

**Fichiers :** `exercices/03-debug/panier.py` et `test_panier.py`

Ne pas demander « corrige tout ». Procéder ainsi :

1. `!python -m unittest discover exercices/03-debug` — voir les échecs réels
2. `Voici les échecs. Ne corrige rien. Donne-moi une hypothèse par test qui échoue.`
3. Corriger **un bug à la fois**, en relançant les tests entre chaque
4. Après chaque correction : `Pourquoi ça se comportait comme ça ?`

**Les cinq natures présentes :**

- Un piège du langage — l'argument par défaut modifiable, partagé entre toutes les instances
- Une comparaison au seuil — inclus ou exclu, et la conséquence commerciale
- Une suppression pendant l'itération — l'index qui dérape
- Une division sans garde — le panier vide
- Une comparaison de dates faite sur du texte — juste ou fausse selon le jour du mois

**Point d'ancrage :** le troisième bug est le plus instructif. Il ne se voit pas
avec un seul article dans le panier. Les données de test faibles cachent les vrais bugs —
c'est exactement le problème signalé par Marc dans les notes de réunion.

---

## Exercice 4.2 — Le bug que l'IA ne trouvera pas (15 min)

Demander : `Y a-t-il d'autres problèmes dans panier.py, au-delà des tests qui échouent ?`

Puis poser la question qu'elle ne peut pas trancher seule :
`Les frais de port doivent-ils être calculés avant ou après la remise promo ?`

**Point d'ancrage :** cette question est **commerciale**, pas technique. Les deux implémentations
sont correctes en code. Une seule est correcte pour l'entreprise. L'IA ne peut pas le savoir —
et si on ne lui demande pas, elle choisira sans le signaler.

---

## Exercice 5.1 — Refactoriser avec un périmètre (40 min)

**Fichier :** `exercices/04-refactoring/rapports.js`

1. `git commit -am "avant refacto"` — le filet
2. `Écris d'abord des tests qui capturent le comportement actuel de ces quatre fonctions.`
3. Lancer les tests, vérifier qu'ils passent **avant** de toucher au code
4. `Refactorise uniquement les trois fonctions de rapport. Ne touche pas à topClients.`
5. Relancer les tests
6. `!git diff` — relire soi-même chaque ligne modifiée

**Point d'ancrage :** les tests écrits avant le refactoring sont ce qui permet de dire
« ça marche encore » autrement qu'en croisant les doigts. C'est aussi ce qui permet
d'accepter un changement qu'on ne comprend pas entièrement.

---

## Exercice 5.2 — Cadrer l'excès de zèle (15 min)

Dans une session neuve, demander simplement : `Améliore rapports.js`

Observer l'ampleur de ce qui est proposé. Puis :

- `git checkout -- exercices/04-refactoring/`
- Reformuler : `Extrais uniquement la duplication entre les trois fonctions de rapport. Rien d'autre.`

Comparer les deux diffs.

**Point d'ancrage :** « améliore » est une demande sans bord. L'IA en trouvera toujours un,
et ce ne sera pas le vôtre.

---

## Exercice 6.1 — Spec floue contre spec écrite (40 min)

**Fichiers :** `exercices/05-generation/DEMANDE-FLOUE.md` et `SPEC-relances.md`

Suivre le protocole décrit dans `DEMANDE-FLOUE.md` : les deux sessions, la comparaison,
le décompte du temps de rattrapage.

**Point d'ancrage :** quinze minutes de spécification contre trois heures de correction.
Le ratio ne change pas avec l'expérience — seule la discipline change.

---

## Exercice 6.2 — Automatiser du désordre réel (30 min)

**Dossier :** `exercices/06-automatisation/a-trier/`

Treize fichiers, cinq conventions de nommage différentes. Demander :

- `Regarde les fichiers de ce dossier. Propose-moi une convention de nommage unique, cohérente, avant de renommer quoi que ce soit.`
- Valider ou corriger la convention proposée
- `Écris un script PowerShell qui applique cette convention. Mode simulation d'abord : il affiche ce qu'il ferait sans rien renommer.`
- Lire la sortie de simulation, vérifier les cas tordus
- Puis seulement exécuter

**Les pièges présents :** deux versions du même devis dont une « FINAL FINAL »,
des extensions en majuscules, des parenthèses, des accents, un fichier « Sans titre ».

**Point d'ancrage :** le mode simulation avant l'exécution. Sur treize fichiers l'erreur est bénigne.
Sur trois mille, c'est une soirée perdue. Le réflexe s'acquiert sur les treize.

---

## Exercice 6.3 — Lire des logs comme un enquêteur (25 min)

**Fichier :** `exercices/06-automatisation/serveur.log`

- `Analyse ce log. Classe les erreurs par cause racine, pas par ordre d'apparition.`
- `Y a-t-il une progression dans le temps sur un des indicateurs ?`
- `Quel lien avec les tickets mentionnés dans @exercices/01-prise-en-main/notes-reunion.md ?`

**Ce qui doit sortir :** les requêtes lentes passent de 2,3 s à 8,3 s en deux jours —
la dégradation est continue, pas ponctuelle. Les timeouts du pool en sont la conséquence,
pas la cause. Et les trois familles d'erreurs correspondent exactement aux trois motifs
de tickets remontés par Amina.

**Point d'ancrage :** le diagnostic naît du croisement entre les logs et le compte-rendu de réunion.
C'est cela, « donner du contexte » — et c'est ce que la version web ne peut pas faire.

---

## Exercice 7 — Sur vos projets (2h)

Plus de consigne écrite. On ouvre vos dépôts et on installe :

- `/init` pour générer un premier `CLAUDE.md`, puis on le corrige ensemble
- Vos conventions et vos procédures de déploiement, écrites une fois pour toutes
- Deux commandes personnalisées tirées de vos tâches réellement récurrentes
- Les permissions ajustées à votre façon de travailler

**Point d'ancrage :** ce qui reste après la formation, ce n'est pas ce que vous avez retenu.
C'est ce que vous avez configuré.
