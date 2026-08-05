// Génération des rapports mensuels.
// Ce code FONCTIONNE. Il est simplement pénible à maintenir.
// Objectif de l'exercice : le rendre lisible sans changer son comportement.

function rapportVentesMensuel(ventes, mois, annee) {
  let total = 0;
  let nb = 0;
  let lignes = [];
  for (let i = 0; i < ventes.length; i++) {
    const d = new Date(ventes[i].date);
    if (d.getMonth() + 1 === mois && d.getFullYear() === annee) {
      if (ventes[i].statut !== "annulee") {
        total = total + ventes[i].quantite * ventes[i].prix_unitaire;
        nb = nb + 1;
        lignes.push({
          client: ventes[i].client,
          produit: ventes[i].produit,
          montant: ventes[i].quantite * ventes[i].prix_unitaire
        });
      }
    }
  }
  let html = "<h1>Rapport ventes " + mois + "/" + annee + "</h1><table>";
  for (let i = 0; i < lignes.length; i++) {
    html = html + "<tr><td>" + lignes[i].client + "</td><td>" + lignes[i].produit + "</td><td>" + lignes[i].montant + "</td></tr>";
  }
  html = html + "</table><p>Total : " + total + " EUR sur " + nb + " ventes</p>";
  return html;
}

function rapportImpayesMensuel(ventes, mois, annee) {
  let total = 0;
  let nb = 0;
  let lignes = [];
  for (let i = 0; i < ventes.length; i++) {
    const d = new Date(ventes[i].date);
    if (d.getMonth() + 1 === mois && d.getFullYear() === annee) {
      if (ventes[i].statut === "impayee") {
        total = total + ventes[i].quantite * ventes[i].prix_unitaire;
        nb = nb + 1;
        lignes.push({
          client: ventes[i].client,
          produit: ventes[i].produit,
          montant: ventes[i].quantite * ventes[i].prix_unitaire
        });
      }
    }
  }
  let html = "<h1>Rapport impayes " + mois + "/" + annee + "</h1><table>";
  for (let i = 0; i < lignes.length; i++) {
    html = html + "<tr><td>" + lignes[i].client + "</td><td>" + lignes[i].produit + "</td><td>" + lignes[i].montant + "</td></tr>";
  }
  html = html + "</table><p>Total : " + total + " EUR sur " + nb + " ventes</p>";
  return html;
}

function rapportAnnulationsMensuel(ventes, mois, annee) {
  let total = 0;
  let nb = 0;
  let lignes = [];
  for (let i = 0; i < ventes.length; i++) {
    const d = new Date(ventes[i].date);
    if (d.getMonth() + 1 === mois && d.getFullYear() === annee) {
      if (ventes[i].statut === "annulee") {
        total = total + ventes[i].quantite * ventes[i].prix_unitaire;
        nb = nb + 1;
        lignes.push({
          client: ventes[i].client,
          produit: ventes[i].produit,
          montant: ventes[i].quantite * ventes[i].prix_unitaire
        });
      }
    }
  }
  let html = "<h1>Rapport annulations " + mois + "/" + annee + "</h1><table>";
  for (let i = 0; i < lignes.length; i++) {
    html = html + "<tr><td>" + lignes[i].client + "</td><td>" + lignes[i].produit + "</td><td>" + lignes[i].montant + "</td></tr>";
  }
  html = html + "</table><p>Total : " + total + " EUR sur " + nb + " ventes</p>";
  return html;
}

function topClients(ventes, mois, annee, limite) {
  let m = {};
  for (let i = 0; i < ventes.length; i++) {
    const d = new Date(ventes[i].date);
    if (d.getMonth() + 1 === mois && d.getFullYear() === annee) {
      if (ventes[i].statut !== "annulee") {
        if (m[ventes[i].client] === undefined) {
          m[ventes[i].client] = 0;
        }
        m[ventes[i].client] = m[ventes[i].client] + ventes[i].quantite * ventes[i].prix_unitaire;
      }
    }
  }
  let arr = [];
  for (let k in m) {
    arr.push([k, m[k]]);
  }
  arr.sort(function (a, b) {
    if (a[1] < b[1]) return 1;
    if (a[1] > b[1]) return -1;
    return 0;
  });
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < limite) {
      res.push({ client: arr[i][0], total: arr[i][1] });
    }
  }
  return res;
}

module.exports = {
  rapportVentesMensuel,
  rapportImpayesMensuel,
  rapportAnnulationsMensuel,
  topClients
};
