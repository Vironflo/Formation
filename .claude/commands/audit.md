---
description: Audit rapide d'un fichier ou dossier — risques classés par gravité
---

Audite : $ARGUMENTS

Cherche, dans cet ordre :

1. **Bugs réels** — ce qui produit un mauvais résultat ou plante avec des données plausibles
2. **Fuites et risques** — secrets en clair, données personnelles dans les logs, entrées non validées
3. **Pièges de maintenance** — duplication, dépendances cachées, comportements implicites

Pour chaque point trouvé, donne :

- Le fichier et la ligne
- Ce qui se passe concrètement — un scénario d'entrée qui déclenche le problème
- La gravité : bloquant, à corriger, ou cosmétique

Classe du plus grave au plus anodin. Si tu ne trouves rien de sérieux, dis-le franchement
plutôt que de remplir la liste. Ne corrige rien sans qu'on te le demande.
