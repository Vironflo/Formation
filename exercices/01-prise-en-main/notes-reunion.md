# Réunion projet Colibri — 12 mars

Présents : Sophie (produit), Marc (dev), Amina (support), Julien (direction)

## Points abordés

Le lancement de la V2 est repoussé au 15 avril. Marc signale que la migration de la base
de données n'est toujours pas testée sur un volume réaliste — le jeu de données de test
compte 400 lignes, la production en compte 1,2 million.

Amina remonte 34 tickets ouverts sur le module de facturation depuis janvier. Trois motifs
reviennent : les factures d'avoir apparaissent en double, les montants en devise étrangère
sont convertis avec le taux du jour de consultation et non celui de la facture, et l'export
comptable échoue silencieusement quand un client n'a pas de numéro de TVA.

Sophie veut ajouter la signature électronique à la V2. Julien demande si c'est réaliste.
Marc estime trois semaines, à condition de ne pas toucher au module de facturation en parallèle.

Décision : la signature électronique passe en V2.1. La V2 se concentre sur la stabilisation
de la facturation.

## Actions

- Marc : constituer un jeu de test à 1 million de lignes avant le 20 mars
- Amina : classer les 34 tickets par cause racine, pas par date
- Sophie : geler le périmètre V2, écrire la spec signature pour la V2.1
- Julien : arbitrer le budget prestataire pour la migration

## Non tranché

Faut-il maintenir la compatibilité avec l'ancien format d'export ? Deux clients l'utilisent
encore. Marc penche pour l'abandon, Amina rappelle que l'un des deux est le plus gros compte.
À revoir la semaine prochaine.
