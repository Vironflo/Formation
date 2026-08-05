# La même demande, mal formulée

À comparer avec `SPEC-relances.md`. Voici ce qu'on écrit spontanément :

> « Fais-moi un truc qui envoie des relances aux clients qui n'ont pas payé. »

---

## Ce que l'IA va produire

Un code plausible, propre, qui compile. Et qui se trompe sur tout ce qui compte :

- Un délai de paiement inventé — 15 jours ? 60 ? Aucune idée, elle choisira.
- Un seul niveau de relance, alors qu'il en faut trois.
- Une relance par facture, alors qu'il en faut une par client.
- Pas de conversion de devise — les montants en livres seront additionnés aux euros.
- Un `envoi d'e-mail` réellement implémenté, alors qu'on voulait seulement le texte à relire.
- Les lignes sans client silencieusement ignorées — donc invisibles, donc jamais traitées.

Le code aura l'air correct. Le bug se découvrira en production, chez le plus gros compte,
trois mois plus tard.

---

## L'exercice

1. Lancer la demande floue telle quelle, dans une session propre. Observer le résultat.
2. Lancer la spec complète dans une **autre** session propre.
3. Comparer les deux sorties, ligne à ligne.
4. Compter le temps qu'il aurait fallu pour rattraper la première jusqu'à la seconde.

---

## Ce que l'exercice démontre

Écrire la spec a pris quinze minutes. Elle a produit un code juste du premier coup,
et elle reste comme documentation.

La demande floue a pris quinze secondes, et a produit un code qu'il faut relire
entièrement pour découvrir ce qu'il a supposé à votre place.

**L'IA ne comble pas les silences de la demande. Elle les remplit — au hasard.**
