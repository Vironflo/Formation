# Spécification — Module de relance des factures impayées

Support de l'exercice de génération. Cette spec est **volontairement complète** :
elle sert de modèle pour apprendre à formuler une demande exploitable.

---

## Besoin

Chaque lundi matin, quelqu'un ouvre le fichier des ventes, repère les factures impayées,
calcule le retard, et rédige un e-mail par client. Cela prend deux heures et se fait mal
une semaine sur trois.

On veut un module qui produise automatiquement la liste des relances à envoyer,
avec le bon ton selon l'ancienneté du retard.

---

## Entrées

Un fichier CSV avec ces colonnes : `date`, `client`, `produit`, `quantite`,
`prix_unitaire`, `devise`, `statut`.

Un fichier d'exemple existe : `exercices/01-prise-en-main/ventes-2025.csv`.

Paramètre supplémentaire : la date du jour, injectable pour permettre les tests.

---

## Règles métier

- Seules les lignes de statut `impayee` sont concernées.
- Le retard se compte en jours depuis la date de la vente, avec un délai de paiement de 30 jours.
  Une facture du 3 février est en retard à partir du 5 mars.
- Trois niveaux de relance selon le retard :
  - de 1 à 15 jours — **rappel courtois**
  - de 16 à 45 jours — **relance ferme**, mention des pénalités de retard
  - au-delà de 45 jours — **mise en demeure**, escalade vers le service juridique
- Les montants sont convertis en euros pour le récapitulatif, avec ces taux fixes :
  EUR 1, GBP 1.17, USD 0.92.
- Un client ayant plusieurs factures impayées reçoit **une seule relance regroupée**,
  au niveau correspondant à sa facture la plus ancienne.

---

## Sorties

Une liste d'objets, un par client à relancer, contenant :

- le nom du client
- le niveau de relance
- le nombre de factures concernées
- le montant total dû, en euros, arrondi au centime
- le retard maximal en jours
- le détail des factures : date, produit, montant d'origine avec sa devise

Plus une fonction qui transforme un de ces objets en texte d'e-mail prêt à relire,
avec un objet et un corps adaptés au niveau de relance.

---

## Cas limites à gérer explicitement

- Ligne sans nom de client — à isoler dans une liste d'anomalies, pas à ignorer silencieusement
- Devise inconnue — anomalie également, ne pas convertir au hasard
- Fichier vide ou colonnes manquantes — erreur claire, pas un plantage
- Date de vente dans le futur — anomalie
- Quantité ou prix négatif — anomalie
- Aucun impayé — retourner une liste vide, pas `null`

---

## Contraintes techniques

- Un seul fichier, sans dépendance externe
- Fonctions pures autant que possible : pas de lecture de fichier dans la logique métier
- Tests unitaires couvrant chaque règle métier et chaque cas limite
- Commentaires en français, sur le **pourquoi** des règles, pas sur ce que le code fait

---

## Critère de réussite

Un collègue doit pouvoir lire ce module et modifier un seuil de relance
sans avoir à poser de question.
