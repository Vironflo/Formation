# Aide-mémoire Claude Code

À imprimer ou garder ouvert pendant les séances.
En cas de doute sur une commande : `/help` dans Claude affiche la liste réelle de votre version.

---

## Lancer et reprendre

- `claude` — démarrer une session interactive dans le dossier courant
- `claude "ta demande"` — démarrer en posant directement une question
- `claude -p "ta demande"` — réponse unique sans session interactive (utile dans un script)
- `claude --continue` (ou `-c`) — reprendre la dernière conversation de ce dossier
- `claude --resume` (ou `-r`) — choisir dans la liste des sessions précédentes

**Le dossier compte.** Claude voit les fichiers du répertoire depuis lequel vous l'avez lancé.
Lancer depuis le mauvais dossier est l'erreur numéro un des débuts.

---

## Dans la conversation

- `@` puis un chemin — insérer un fichier ou un dossier dans le contexte (`@src/api.js`)
- `!` puis une commande — exécuter une commande système et en donner le résultat à Claude
  (`!git status`, `!npm test`)
- `#` puis une phrase — mémoriser cette règle durablement pour le projet
- Coller une image (Ctrl+V) — capture d'écran, maquette, message d'erreur en photo

---

## Commandes utiles

- `/help` — liste des commandes disponibles
- `/init` — analyser le projet et générer un `CLAUDE.md` de départ
- `/memory` — ouvrir et éditer les fichiers de mémoire
- `/clear` — repartir d'une conversation vide (contexte remis à zéro)
- `/compact` — condenser la conversation en gardant l'essentiel
- `/model` — changer de modèle
- `/config` — préférences de l'interface
- `/permissions` — voir et modifier ce que Claude peut faire sans demander
- `/status` — état de la session : compte, modèle, dossier
- `/cost` — consommation de la session en cours
- `/review` — revue d'une pull request
- `/export` — exporter la conversation
- `/doctor` — diagnostic de l'installation quand quelque chose cloche

---

## Raccourcis clavier

- `Échap` — interrompre Claude en pleine action
- `Échap` deux fois — revenir en arrière et modifier un message précédent
- `Maj + Tab` — changer de mode de permission (validation manuelle / acceptation auto / mode plan)
- `Ctrl + C` — annuler la saisie en cours
- `Ctrl + D` — quitter Claude Code
- `Ctrl + L` — nettoyer l'affichage du terminal (sans perdre la conversation)
- `↑` — rappeler les demandes précédentes

---

## Le mode plan

`Maj + Tab` jusqu'au mode plan : Claude **analyse et propose une stratégie sans rien modifier**.
Vous validez le plan, puis il exécute.

À utiliser dès qu'une tâche touche plus de deux fichiers, ou quand le code est important.
C'est le meilleur garde-fou contre les modifications surprises.

---

## Les fichiers qui configurent Claude

- `CLAUDE.md` à la racine du projet — instructions chargées à chaque session dans ce dossier
- `~/.claude/CLAUDE.md` — instructions globales, valables pour tous vos projets
- `.claude/settings.json` — permissions, variables d'environnement, automatisations
- `.claude/commands/nom.md` — crée la commande `/nom`, réutilisable à volonté

---

## Les réflexes qui font la différence

- **Commit avant de laisser modifier.** Un `git commit` de trente secondes remplace une heure
  de récupération. C'est le seul vrai bouton « annuler ».
- **Une intention par demande.** « Corrige ce bug » donne un bon résultat.
  « Corrige ce bug, ajoute des tests et refactorise » donne trois demi-résultats.
- **Donner l'erreur complète.** Le message tronqué fait deviner ; la trace entière fait diagnostiquer.
- **Demander le pourquoi.** Une correction non comprise est une dette, pas un gain.
- **Repartir propre quand ça patine.** Après trois échanges qui tournent en rond, `/clear`
  et reformuler vaut mieux que dix relances.
- **Vérifier ce qui est affirmé.** L'IA énonce parfois avec assurance des choses fausses.
  Le test qui passe est une preuve ; la phrase rassurante n'en est pas une.

---

## Les demandes types qui marchent

- `Explique-moi ce que fait @fichier, en trois niveaux : rôle général, puis fonctions, puis détails.`
- `Voici l'erreur : [trace complète]. Ne corrige rien. Donne-moi trois hypothèses classées par probabilité.`
- `Écris d'abord un test qui reproduit ce bug. On corrigera après.`
- `Refactorise uniquement la fonction X. Ne touche à aucun autre fichier.`
- `Relis ton propre changement comme si tu ne l'avais pas écrit. Qu'est-ce qui pourrait casser ?`
- `Quels cas limites ce code ne gère-t-il pas ?`

---

## Quand ça ne marche pas

- **Réponses hors sujet** — le contexte est pollué : `/clear` puis reformuler
- **Claude ne voit pas un fichier** — mauvais dossier de lancement, ou chemin mal orthographié
- **Modifications non voulues** — passer en mode plan, cadrer explicitement le périmètre
- **Trop de demandes de permission** — `/permissions` pour autoriser durablement le récurrent
- **Session qui devient lente ou confuse** — `/compact`, ou mieux, `/clear` et repartir
- **Problème d'installation** — `/doctor`
