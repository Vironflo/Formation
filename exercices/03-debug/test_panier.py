"""Tests du module panier.

Certains passent, d'autres non. Lancer avec :
    python -m unittest exercices/03-debug/test_panier.py

Objectif de l'exercice : ne PAS corriger les tests. Corriger le code
jusqu'a ce que les tests passent, puis en ajouter pour les cas non couverts.
"""

import unittest
from panier import Panier


class TestPanier(unittest.TestCase):

    # Seul ce test utilise le constructeur sans second argument.
    # Les autres passent une liste explicite pour rester independants.
    def test_paniers_independants(self):
        p1 = Panier("A")
        p1.ajouter("Livre", 10.0)
        p2 = Panier("B")
        self.assertEqual(len(p2.articles), 0)

    def test_sous_total_simple(self):
        p = Panier("A", [])
        p.ajouter("Livre", 10.0, 3)
        self.assertEqual(p.sous_total(), 30.0)

    def test_port_offert_au_seuil_exact(self):
        p = Panier("A", [])
        p.ajouter("Article", 50.0)
        self.assertEqual(p.frais_de_port(), 0)

    def test_port_facture_sous_le_seuil(self):
        p = Panier("A", [])
        p.ajouter("Article", 49.99)
        self.assertEqual(p.frais_de_port(), 6.90)

    def test_retirer_doublons(self):
        p = Panier("A", [])
        p.ajouter("Stylo", 2.0)
        p.ajouter("Stylo", 2.0)
        p.ajouter("Stylo", 2.0)
        p.retirer("Stylo")
        self.assertEqual(len(p.articles), 0)

    def test_panier_vide_prix_moyen(self):
        p = Panier("A", [])
        self.assertEqual(p.prix_moyen_article(), 0)

    def test_promo_valide_annee_suivante(self):
        p = Panier("A", [])
        p.ajouter("Article", 100.0)
        p.appliquer_promo("NOEL", 0.1, "01/01/2030")
        self.assertAlmostEqual(p.total(), 108.0, places=2)

    def test_promo_expiree_rejetee(self):
        p = Panier("A", [])
        with self.assertRaises(ValueError):
            p.appliquer_promo("VIEUX", 0.1, "31/12/2020")

    def test_total_arrondi_deux_decimales(self):
        p = Panier("A", [])
        p.ajouter("Article", 19.99, 3)
        self.assertEqual(p.total(), 71.96)


if __name__ == "__main__":
    unittest.main()
