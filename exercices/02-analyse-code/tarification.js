const T = { STD: 190, PRO: 490, SUP: 2400, FRM: 1200 };
const R = [[50, 0.2], [20, 0.12], [10, 0.07], [5, 0.03]];
const FX = { EUR: 1, GBP: 1.17, USD: 0.92 };
const Z = ["FR", "BE", "LU", "MC"];
const TVA = { FR: 0.2, BE: 0.21, LU: 0.17, MC: 0.2 };

function c(l, q, p, d, a) {
  let b = T[l] * q;
  let r = 0;
  for (let i = 0; i < R.length; i++) {
    if (q >= R[i][0]) { r = R[i][1]; break; }
  }
  if (a && a.type === "partenaire") r = Math.max(r, 0.15);
  if (a && a.type === "revendeur") r = Math.max(r, 0.25);
  if (d && d.code) {
    const e = new Date(d.exp);
    if (e > new Date()) {
      if (d.mode === "pct") r = r + d.val;
      else b = b - d.val;
    }
  }
  if (r > 0.4) r = 0.4;
  let n = b * (1 - r);
  if (p !== "EUR") n = n / FX[p];
  return n;
}

function t(n, pays, num) {
  if (!Z.includes(pays)) return 0;
  if (num && num.length > 4 && pays !== "FR") return 0;
  return n * (TVA[pays] || 0.2);
}

function f(cmd) {
  const out = [];
  let tot = 0;
  let tva = 0;
  for (const li of cmd.lignes) {
    const m = c(li.ref, li.qte, cmd.devise, cmd.promo, cmd.compte);
    const x = t(m, cmd.pays, cmd.tvaIntra);
    out.push({ ref: li.ref, qte: li.qte, ht: Math.floor(m * 100) / 100, tva: x });
    tot += m;
    tva += x;
  }
  if (cmd.compte && cmd.compte.solde < 0) {
    tot = tot + Math.abs(cmd.compte.solde);
  }
  const frais = tot < 500 ? 15 : 0;
  return {
    lignes: out,
    ht: Math.floor((tot + frais) * 100) / 100,
    tva: Math.floor(tva * 100) / 100,
    ttc: Math.floor((tot + frais + tva) * 100) / 100,
    devise: cmd.devise,
    frais: frais
  };
}

function e(fac, fmt) {
  if (fmt === "csv-legacy") {
    let s = "";
    for (const l of fac.lignes) {
      s += l.ref + ";" + l.qte + ";" + l.ht + ";" + l.tva + "\n";
    }
    return s;
  }
  if (fmt === "json") return JSON.stringify(fac);
  return null;
}

module.exports = { c, t, f, e };
