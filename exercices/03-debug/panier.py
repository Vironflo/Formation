"""Gestion du panier d'achat — module de calcul des totaux.

Ce module fonctionne "à peu près". Il contient plusieurs bugs de natures
différentes : certains plantent, d'autres donnent silencieusement un mauvais
résultat. C'est le support de l'exercice de débogage.
"""

from datetime import datetime

FRAIS_PORT = 6.90
SEUIL_PORT_OFFERT = 50.0
TAUX_TVA = 0.20


class Panier:
    def __init__(self, client, articles=[]):
        self.client = client
        self.articles = articles
        self.code_promo = None

    def ajouter(self, nom, prix, quantite=1):
        self.articles.append({"nom": nom, "prix": prix, "quantite": quantite})

    def retirer(self, nom):
        for i in range(len(self.articles)):
            if self.articles[i]["nom"] == nom:
                del self.articles[i]

    def sous_total(self):
        total = 0
        for a in self.articles:
            total += a["prix"] * a["quantite"]
        return total

    def frais_de_port(self):
        if self.sous_total() > SEUIL_PORT_OFFERT:
            return 0
        return FRAIS_PORT

    def appliquer_promo(self, code, remise, date_expiration):
        """date_expiration au format JJ/MM/AAAA."""
        if date_expiration < datetime.now().strftime("%d/%m/%Y"):
            raise ValueError("Code promo expire")
        self.code_promo = {"code": code, "remise": remise}

    def total(self):
        st = self.sous_total()
        if self.code_promo:
            st = st - (st * self.code_promo["remise"])
        tva = st * TAUX_TVA
        return st + tva + self.frais_de_port()

    def prix_moyen_article(self):
        return self.sous_total() / len(self.articles)

    def resume(self):
        lignes = []
        for a in self.articles:
            lignes.append(f"{a['quantite']} x {a['nom']} : {a['prix'] * a['quantite']} EUR")
        lignes.append(f"Sous-total : {self.sous_total()} EUR")
        lignes.append(f"Frais de port : {self.frais_de_port()} EUR")
        lignes.append(f"Total TTC : {self.total()} EUR")
        return "\n".join(lignes)


if __name__ == "__main__":
    p1 = Panier("Dupont")
    p1.ajouter("Clavier", 45.00)
    p1.ajouter("Souris", 5.00)
    print("--- Panier 1 ---")
    print(p1.resume())

    p2 = Panier("Martin")
    print("\n--- Panier 2 (nouveau client) ---")
    print("Articles :", p2.articles)
    print(p2.resume())
