# Formation Claude Code — Espace de travail

Bac à sable pédagogique pour apprendre et faire découvrir **Claude Code** (Claude dans le terminal).
Tout ce qui est ici est jetable : on casse, on répare, on recommence.

---

## Comment utiliser cet espace

1. Ouvrir un terminal **dans ce dossier** (`C:\Users\VFlor\source\repos\Formation`)
2. Lancer `claude`
3. Ouvrir `docs/01-PARCOURS-APPRENTISSAGE.md` et suivre les modules dans l'ordre
4. Chaque module renvoie vers un dossier `exercices/XX-.../` avec des fichiers réels à manipuler

> Règle du bac à sable : **ne jamais corriger un fichier d'exercice à la main.**
> Tout doit passer par une demande à Claude. C'est là que l'apprentissage se fait.

---

## Arborescence

- `README.md` — ce fichier
- `CLAUDE.md` — mémoire projet, chargée automatiquement à chaque session (démo vivante)
- `.claude/`
  - `settings.json` — permissions et configuration du projet
  - `commands/` — commandes personnalisées (`/audit`, `/expliquer`)
- `docs/`
  - `00-PROPOSITION-CLIENT.md` — offre de formation : inclus, options, plus-value
  - `01-PARCOURS-APPRENTISSAGE.md` — les 7 modules de 2h, découpés et séquencés
  - `02-AIDE-MEMOIRE.md` — antisèche : commandes, raccourcis, réflexes
  - `03-EXERCICES.md` — consignes détaillées, exercice par exercice
- `exercices/`
  - `01-prise-en-main/` — premiers pas, lecture de fichiers, contexte
  - `02-analyse-code/` — code legacy non commenté à comprendre
  - `03-debug/` — code volontairement bugué à réparer
  - `04-refactoring/` — code qui marche mais qui est sale
  - `05-generation/` — specs écrites, code à produire
  - `06-automatisation/` — scripts et tâches répétitives

---

## Démarrage express (5 minutes)

Dans le terminal, à la racine du projet :

```
claude
```

Puis, dans Claude, essayer dans l'ordre :

- `Que contient ce projet ?` — Claude explore seul l'arborescence
- `/help` — la liste des commandes intégrées
- `Lis exercices/03-debug/panier.py et dis-moi ce qui cloche` — première analyse réelle
- `Corrige-le et explique-moi chaque correction` — première modification pilotée
- `Ctrl+C` puis `claude --continue` — reprendre la conversation où on l'a laissée

Si ces cinq lignes fonctionnent, l'installation est bonne et le reste du parcours est accessible.

---

## Réinitialiser le bac à sable

Les exercices sont conçus pour être modifiés par Claude. Pour repartir propre :

```
git checkout -- exercices/
```

Si le dossier n'est pas encore versionné : `git init` puis `git add -A` et `git commit -m "état initial"` **avant** la première session. C'est le premier réflexe à enseigner : sans filet de sécurité, on n'ose pas expérimenter.
