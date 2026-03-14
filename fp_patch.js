/* fp_patch.js — Feuille de Présence FO · O-I Wingles
 * Déposer ce fichier dans le même dossier que index.html sur GitHub Pages.
 * Ajouter UNE LIGNE avant </body> dans index.html :
 * <script src="fp_patch.js"></script>
 */
(function(){

/* 1 ── CSS ─────────────────────────────────────────────────────────── */
var s=document.createElement('style');
s.textContent="\n/* ═══════════════════════════════════════════════════\n   FEUILLE DE PRÉSENCE — PANEL\n═══════════════════════════════════════════════════ */\n.fp-doc {\n  max-width: 820px; margin: 0 auto;\n  background: #FAFAF7; color: #1A1A1A;\n  border: 1px solid #D0CABC;\n  box-shadow: 0 8px 40px rgba(0,0,0,.5);\n  font-family: 'Figtree',sans-serif;\n}\n.fp-header {\n  background: #1A1A1A; display: grid;\n  grid-template-columns: 110px 1fr 130px; align-items: stretch;\n}\n.fp-header-logo { background: #F5C400; display:flex; align-items:center; justify-content:center; padding:12px; }\n.fp-header-title { padding:14px 16px; text-align:center; }\n.fp-header-title .fp-org { font-size:9px; color:#F5C400; letter-spacing:3px; text-transform:uppercase; display:block; margin-bottom:3px; font-weight:600; }\n.fp-header-title h2 { font-size:18px; font-weight:800; color:#fff; letter-spacing:1px; text-transform:uppercase; line-height:1.15; font-family:'Outfit','Figtree',sans-serif; }\n.fp-header-title .fp-subtitle { font-size:10px; color:rgba(255,255,255,.4); margin-top:4px; }\n.fp-header-ref { background:rgba(245,196,0,.08); border-left:1px solid rgba(245,196,0,.15); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:7px; padding:10px; }\n.fp-header-ref label { font-size:8px; color:rgba(255,255,255,.4); letter-spacing:2px; text-transform:uppercase; }\n.fp-header-ref input { background:transparent; border:none; border-bottom:1px solid rgba(245,196,0,.4); color:#F5C400; font-size:12px; font-weight:700; text-align:center; width:88px; outline:none; padding:2px 0; }\n.fp-type-bar { background:#F5C400; padding:8px 18px; display:flex; align-items:center; gap:12px; flex-wrap:wrap; }\n.fp-type-bar > label { font-size:11px; font-weight:800; color:#1A1A1A; letter-spacing:1px; text-transform:uppercase; white-space:nowrap; font-family:'Outfit','Figtree',sans-serif; }\n.fp-type-chips { display:flex; flex-wrap:wrap; gap:5px; flex:1; }\n.fp-chip-r { display:none; }\n.fp-chip-r + label { font-size:11px; font-weight:700; padding:3px 10px; background:rgba(0,0,0,.1); border:1.5px solid rgba(0,0,0,.15); cursor:pointer; transition:all .15s; color:#1A1A1A; user-select:none; font-family:'Outfit',sans-serif; }\n.fp-chip-r:checked + label { background:#1A1A1A; color:#F5C400; border-color:#1A1A1A; }\n.fp-chip-r + label:hover { background:rgba(0,0,0,.2); }\n.fp-body { padding:16px 20px; background:#FAFAF7; }\n.fp-info-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px; }\n.fp-field { display:flex; flex-direction:column; gap:3px; }\n.fp-field > label { font-size:9px; letter-spacing:2px; text-transform:uppercase; color:#888; font-weight:700; }\n.fp-field input, .fp-field select { font-family:'Figtree',sans-serif; font-size:13px; border:none; border-bottom:1.5px solid #D0CABC; background:transparent; padding:4px 0; color:#1A1A1A; outline:none; transition:border-color .2s; width:100%; }\n.fp-field input:focus, .fp-field select:focus { border-bottom-color:#C8A800; }\n.fp-field select option { background:#fff; color:#1A1A1A; }\n.fp-horaires { background:#F0EDE8; border:1px solid #D0CABC; padding:11px 14px; margin-bottom:12px; display:grid; grid-template-columns:1fr 1fr auto; gap:12px; align-items:end; }\n.fp-result { background:#1A1A1A; color:#F5C400; font-family:'Outfit',sans-serif; font-size:22px; font-weight:800; padding:7px 14px; text-align:center; min-width:78px; line-height:1; }\n.fp-result small { display:block; font-size:8px; letter-spacing:2px; color:rgba(245,196,0,.55); margin-bottom:2px; font-weight:400; }\n.fp-section-title { font-family:'Outfit',sans-serif; font-size:10px; font-weight:800; letter-spacing:2px; text-transform:uppercase; color:#1A1A1A; padding:5px 0 4px; border-bottom:2px solid #1A1A1A; margin-bottom:8px; display:flex; align-items:center; justify-content:space-between; }\n.fp-temps-block { display:flex; gap:7px; margin-bottom:12px; }\n.fp-temps-opt { flex:1; }\n.fp-temps-opt input[type=radio] { display:none; }\n.fp-temps-opt label { display:flex; align-items:center; gap:7px; padding:7px 10px; border:1.5px solid #D0CABC; cursor:pointer; transition:all .15s; font-size:12px; font-weight:700; color:#999; background:#FAFAF7; }\n.fp-temps-opt label .fp-rdot { width:12px; height:12px; border-radius:50%; border:2px solid #CCC; flex-shrink:0; transition:all .15s; }\n.fp-temps-opt input[type=radio]:checked + label { border-color:#1A1A1A; color:#1A1A1A; background:#F5F3EE; }\n.fp-temps-opt input[type=radio]:checked + label .fp-rdot { background:#F5C400; border-color:#1A1A1A; }\n.fp-derang { border:1.5px solid #D0CABC; margin-bottom:12px; }\n.fp-derang-hdr { display:flex; align-items:center; gap:10px; padding:8px 12px; background:#F0EDE8; cursor:pointer; user-select:none; }\n.fp-derang-hdr span { font-family:'Outfit',sans-serif; font-size:10px; font-weight:800; letter-spacing:1px; text-transform:uppercase; flex:1; color:#1A1A1A; }\n.fp-toggle { width:36px; height:19px; background:#CCC; border-radius:10px; position:relative; transition:background .2s; flex-shrink:0; }\n.fp-toggle.on { background:#F5C400; }\n.fp-toggle::after { content:''; position:absolute; width:15px; height:15px; background:white; border-radius:50%; top:2px; left:2px; transition:left .2s; box-shadow:0 1px 3px rgba(0,0,0,.3); }\n.fp-toggle.on::after { left:19px; }\n.fp-ptable { width:100%; border-collapse:collapse; font-size:12.5px; margin-bottom:12px; }\n.fp-ptable thead tr { background:#1A1A1A; }\n.fp-ptable thead th { font-family:'Outfit',sans-serif; font-size:9px; letter-spacing:1.5px; text-transform:uppercase; padding:5px 6px; text-align:left; font-weight:700; color:#F5C400; }\n.fp-ptable tbody tr { border-bottom:1px solid #D0CABC; }\n.fp-ptable tbody tr:nth-child(even) { background:#F0EDE8; }\n.fp-ptable tbody td { padding:3px 5px; vertical-align:middle; }\n.fp-ptable tbody td input[type=text] { font-family:'Figtree',sans-serif; font-size:12.5px; width:100%; border:none; background:transparent; outline:none; padding:2px 0; color:#1A1A1A; }\n.fp-chk { width:18px; height:18px; border:2px solid #D0CABC; background:white; cursor:pointer; display:inline-flex; align-items:center; justify-content:center; transition:all .15s; }\n.fp-chk.on { background:#F5C400; border-color:#1A1A1A; }\n.fp-chk.on::after { content:'\\2713'; font-size:12px; font-weight:800; color:#1A1A1A; }\n.fp-add-btn { font-family:'Outfit',sans-serif; font-size:10px; font-weight:700; letter-spacing:1px; background:#F5C400; border:1.5px solid #1A1A1A; color:#1A1A1A; padding:2px 9px; cursor:pointer; text-transform:uppercase; transition:all .15s; }\n.fp-add-btn:hover { background:#1A1A1A; color:#F5C400; }\n.fp-del-btn { background:none; border:none; color:#CCC; cursor:pointer; font-size:14px; padding:0 3px; transition:color .15s; }\n.fp-del-btn:hover { color:#C0392B; }\n.fp-sig-area { border:1px solid #D0CABC; background:white; height:68px; display:flex; align-items:flex-end; padding:5px 7px; font-size:9px; color:#AAA; font-style:italic; margin-top:4px; }\n.fp-footer-bar { background:#1A1A1A; padding:6px 20px; display:flex; align-items:center; justify-content:space-between; }\n.fp-footer-bar span { font-family:'Outfit',sans-serif; font-size:9px; letter-spacing:2px; text-transform:uppercase; }\n.fp-footer-fo { color:#F5C400; }\n.fp-footer-site { color:rgba(255,255,255,.35); }\n.fp-sig-cell { border-bottom:1px solid #DDD; height:26px; min-width:70px; }\n\n@media print {\n  .sidebar,.topbar,.fp-export-actions,#connect-banner,.toasts { display:none!important; }\n  .content { overflow:visible; }\n  body { background:white; }\n  .panel.active { padding:8px; }\n  .fp-doc { box-shadow:none; border:1px solid #000; max-width:100%; }\n  .fp-add-btn,.fp-del-btn { display:none; }\n  .fp-ptable thead tr { print-color-adjust:exact; -webkit-print-color-adjust:exact; }\n  .fp-header { print-color-adjust:exact; -webkit-print-color-adjust:exact; }\n  .fp-type-bar { print-color-adjust:exact; -webkit-print-color-adjust:exact; }\n  .fp-result { print-color-adjust:exact; -webkit-print-color-adjust:exact; }\n  .fp-chk.on { print-color-adjust:exact; -webkit-print-color-adjust:exact; }\n  .fp-footer-bar { print-color-adjust:exact; -webkit-print-color-adjust:exact; }\n  .fp-derang-hdr { print-color-adjust:exact; -webkit-print-color-adjust:exact; }\n  section.section-head { display:none; }\n}\n\n@media print {\n  .sidebar,.topbar,.no-print,.toasts,#connect-banner{display:none!important}\n  .content{overflow:visible}\n  body{background:white}\n  #fpModal{position:static!important;background:none!important;backdrop-filter:none!important;padding:0!important;overflow:visible!important;display:block!important}\n  .fp-doc{box-shadow:none;border:1px solid #000;max-width:100%}\n  .fp-add-btn,.fp-del-btn{display:none}\n  .fp-ptable thead tr,.fp-header,.fp-type-bar,.fp-result,.fp-chk.on,.fp-footer-bar,.fp-derang-hdr{print-color-adjust:exact;-webkit-print-color-adjust:exact}\n}\n";
document.head.appendChild(s);

/* 2 ── MODAL HTML ───────────────────────────────────────────────────── */
var MODAL_HTML=`
<div class="modal-ov" id="fpModal" style="align-items:flex-start;overflow-y:auto;padding:28px 16px">
  <div style="max-width:860px;width:100%;margin:0 auto;background:var(--bg2);border:1px solid var(--border2);border-radius:16px;padding:24px;box-shadow:0 24px 80px rgba(0,0,0,.7)">
    <div class="no-print" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:10px">
      <div>
        <div style="font-family:var(--font-d),sans-serif;font-size:22px;font-weight:800;color:var(--text);letter-spacing:-.2px">Feuille de <span style="color:#F5C400">Présence</span></div>
        <div style="font-size:11px;color:var(--muted);margin-top:3px">Réunions syndicales · O-I Manufacturing France SAS — Wingles</div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-secondary" onclick="fpReset()">Réinitialiser</button>
        <button class="btn btn-secondary" onclick="window.print()">🖨 Imprimer / PDF</button>
        <button class="btn btn-primary" onclick="fpExport()">📧 Envoyer ↗</button>
        <button class="btn btn-secondary" onclick="document.getElementById('fpModal').classList.remove('open')" style="font-size:18px;padding:7px 13px">✕</button>
      </div>
    </div>
    <div class="fp-doc" id="fp-document">
      <div class="fp-header">
        <div class="fp-header-logo">
          <svg width="76" height="76" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="#1A1A1A" stroke="#F5C400" stroke-width="3"/>
            <text x="50" y="38" font-family="Georgia,serif" font-size="28" font-weight="700" fill="#F5C400" text-anchor="middle">FO</text>
            <rect x="20" y="44" width="60" height="3" fill="#F5C400"/>
            <text x="50" y="59" font-family="Arial" font-size="8" fill="#F5C400" text-anchor="middle">FORCE</text>
            <text x="50" y="69" font-family="Arial" font-size="8" fill="#F5C400" text-anchor="middle">OUVRIÈRE</text>
            <text x="50" y="81" font-family="Arial" font-size="7" fill="rgba(245,196,0,0.6)" text-anchor="middle">CGT-FO</text>
          </svg>
        </div>
        <div class="fp-header-title">
          <span class="fp-org">Confédération Générale du Travail — Force Ouvrière</span>
          <h2>Feuille de Présence<br>Réunion Syndicale</h2>
          <div class="fp-subtitle">O-I Manufacturing France SAS — Site de Wingles (62)</div>
        </div>
        <div class="fp-header-ref">
          <label>N° Document</label>
          <input type="text" id="fp-ref-num" placeholder="FP-001">
          <label>Année</label>
          <input type="text" id="fp-ref-year" placeholder="2026">
        </div>
      </div>
      <div class="fp-type-bar">
        <label>Type :</label>
        <div class="fp-type-chips">
          <input type="radio" name="fp-type" id="fpt-cse" class="fp-chip-r" checked><label for="fpt-cse">CSE</label>
          <input type="radio" name="fp-type" id="fpt-cssct" class="fp-chip-r"><label for="fpt-cssct">CSSCT</label>
          <input type="radio" name="fp-type" id="fpt-form" class="fp-chip-r"><label for="fpt-form">Commission Formation</label>
          <input type="radio" name="fp-type" id="fpt-eco" class="fp-chip-r"><label for="fpt-eco">Comm. Économique</label>
          <input type="radio" name="fp-type" id="fpt-syn" class="fp-chip-r"><label for="fpt-syn">Réunion Syndicale</label>
          <input type="radio" name="fp-type" id="fpt-neg" class="fp-chip-r"><label for="fpt-neg">Négociation</label>
          <input type="radio" name="fp-type" id="fpt-autre" class="fp-chip-r"><label for="fpt-autre">Autre</label>
        </div>
      </div>
      <div class="fp-body">
        <div class="fp-info-grid">
          <div class="fp-field" style="grid-column:1/-1">
            <label>Objet / Intitulé de la réunion</label>
            <select id="fp-objet">
              <optgroup label="── Réunions CSE">
                <option value="CSE Ordinaire mensuel">CSE Ordinaire mensuel</option>
                <option value="CSE Extraordinaire">CSE Extraordinaire</option>
                <option value="CSE – Consultation DUERP">CSE – Consultation DUERP</option>
                <option value="CSE – Consultation PAPRIPACT">CSE – Consultation PAPRIPACT</option>
                <option value="CSE – Consultation Plan de Formation">CSE – Consultation Plan de Formation</option>
                <option value="CSE – Consultation Situation Économique">CSE – Consultation Situation Économique</option>
                <option value="CSE – Consultation Politique Sociale">CSE – Consultation Politique Sociale</option>
                <option value="CSE – Information PSE">CSE – Information PSE</option>
              </optgroup>
              <optgroup label="── CSSCT">
                <option value="CSSCT – Réunion ordinaire">CSSCT – Réunion ordinaire</option>
                <option value="CSSCT – Inspection des locaux">CSSCT – Inspection des locaux</option>
                <option value="CSSCT – Analyse AT / MP">CSSCT – Analyse AT / MP</option>
                <option value="CSSCT – Étude DUERP">CSSCT – Étude DUERP</option>
                <option value="CSSCT – Expertise CMR / Nickel">CSSCT – Expertise CMR / Nickel</option>
              </optgroup>
              <optgroup label="── Commissions">
                <option value="Commission Formation – Réunion ordinaire">Commission Formation – Réunion ordinaire</option>
                <option value="Commission Économique – Réunion ordinaire">Commission Économique – Réunion ordinaire</option>
                <option value="Commission Égalité Professionnelle">Commission Égalité Professionnelle</option>
              </optgroup>
              <optgroup label="── Convocations Direction">
                <option value="Convocation Direction – Laurent GUYOT">Convocation Direction – Laurent GUYOT</option>
                <option value="NAO – Direction">NAO – Direction</option>
                <option value="Négociation – Accord d'entreprise">Négociation – Accord d'entreprise</option>
                <option value="Réunion d'information Direction">Réunion d'information Direction</option>
              </optgroup>
              <optgroup label="── Force Ouvrière">
                <option value="Réunion syndicale FO – Section Wingles">Réunion syndicale FO – Section Wingles</option>
                <option value="Réunion préparatoire CSE – FO">Réunion préparatoire CSE – FO</option>
                <option value="Réunion préparatoire CSSCT – FO">Réunion préparatoire CSSCT – FO</option>
                <option value="Bureau FO – Trésorerie / Cotisations">Bureau FO – Trésorerie / Cotisations</option>
              </optgroup>
              <optgroup label="── Autre">
                <option value="__autre__">Autre (préciser ci-dessous)</option>
              </optgroup>
            </select>
          </div>
          <div class="fp-field" id="fp-autre-wrap" style="display:none;grid-column:1/-1">
            <label>Préciser l'intitulé</label>
            <input type="text" id="fp-objet-autre" placeholder="Intitulé libre…">
          </div>
          <div class="fp-field">
            <label>Date</label>
            <input type="date" id="fp-date">
          </div>
          <div class="fp-field">
            <label>Lieu</label>
            <input type="text" id="fp-lieu" value="Salle K2 – O-I Manufacturing France SAS, Wingles">
          </div>
          <div class="fp-field" style="grid-column:1/-1">
            <label>Convoqué(e) par</label>
            <select id="fp-convoquant">
              <option value="Laurent GUYOT – Directeur de site">Laurent GUYOT – Directeur de site</option>
              <option value="Direction O-I Manufacturing France SAS">Direction O-I Manufacturing France SAS</option>
              <option value="Direction des Ressources Humaines">Direction des Ressources Humaines</option>
              <option value="Délégation FO – Section Wingles">Délégation FO – Section Wingles</option>
              <option value="Bureau CSE">Bureau CSE</option>
              <option value="Bureau CSSCT">Bureau CSSCT</option>
              <option value="Commission Formation">Commission Formation</option>
              <option value="Commission Économique">Commission Économique</option>
            </select>
          </div>
        </div>
        <div class="fp-horaires">
          <div class="fp-field"><label>Heure de début</label><input type="time" id="fp-debut" oninput="fpCalcDuree()"></div>
          <div class="fp-field"><label>Heure de fin</label><input type="time" id="fp-fin" oninput="fpCalcDuree()"></div>
          <div class="fp-result"><small>Durée</small><span id="fp-duree">—</span></div>
        </div>
        <div class="fp-section-title" style="margin-bottom:7px">Imputation du temps</div>
        <div class="fp-temps-block">
          <div class="fp-temps-opt"><input type="radio" name="fp-temps" id="fptmp-tt" checked><label for="fptmp-tt"><span class="fp-rdot"></span>Pendant le temps de travail</label></div>
          <div class="fp-temps-opt"><input type="radio" name="fp-temps" id="fptmp-ht"><label for="fptmp-ht"><span class="fp-rdot"></span>Hors temps de travail</label></div>
          <div class="fp-temps-opt"><input type="radio" name="fp-temps" id="fptmp-mx"><label for="fptmp-mx"><span class="fp-rdot"></span>Mixte</label></div>
        </div>
        <div class="fp-derang">
          <div class="fp-derang-hdr" onclick="fpToggleDerang()">
            <span>Dérangement signalé</span>
            <div class="fp-toggle" id="fp-derang-toggle"></div>
          </div>
        </div>
        <div class="fp-section-title">
          <span>Participants</span>
          <button class="fp-add-btn" onclick="fpAddRow()">+ Ajouter</button>
        </div>
        <table class="fp-ptable">
          <thead><tr>
            <th style="width:22%">Nom</th>
            <th style="width:21%">Prénom</th>
            <th style="width:30%">Qualité / Mandat</th>
            <th style="width:9%;text-align:center">Présent</th>
            <th style="width:14%">Signature</th>
            <th style="width:4%"></th>
          </tr></thead>
          <tbody id="fp-tbody"></tbody>
        </table>
        <div style="border:1.5px solid #1A1A1A;padding:13px;background:#F5F3EE">
          <div class="fp-section-title" style="margin-bottom:9px">Signature du Délégué Syndical FO</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <div class="fp-field"><label>Délégué Syndical</label><input type="text" value="Pascal ROGGERI — DS FO / Secrétaire-Trésorier CSE" readonly style="color:#555;font-size:12px"></div>
            <div class="fp-field"><label>Date de signature</label><input type="date" id="fp-sig-date"></div>
            <div class="fp-field"><label>Signature</label><div class="fp-sig-area">Signature Pascal ROGGERI</div></div>
            <div class="fp-field"><label>Cachet FO</label><div class="fp-sig-area" style="align-items:center;justify-content:center;color:#C8A800;font-weight:700;font-size:10.5px;font-style:normal">FORCE OUVRIÈRE — CGT-FO<br><span style="font-size:9px;color:#AAA;font-style:italic;font-weight:400">O-I Manufacturing Wingles</span></div></div>
          </div>
        </div>
      </div>
      <div class="fp-footer-bar">
        <span class="fp-footer-fo">Force Ouvrière — CGT-FO</span>
        <span class="fp-footer-site" id="fp-footer-date">O-I Manufacturing France SAS · Site de Wingles</span>
      </div>
    </div>
  </div>
  </div>
</div>`;
document.body.insertAdjacentHTML('beforeend',MODAL_HTML);

/* 3 ── BOUTON TOPBAR ────────────────────────────────────────────────── */
function injectBtn(){
  var topbar=document.querySelector('.topbar-right');
  if(!topbar)return;
  var syncBtn=topbar.querySelector('.btn-secondary');
  if(!syncBtn)return;
  var btn=document.createElement('button');
  btn.className='btn btn-secondary no-print';
  btn.style.cssText='border-color:rgba(245,196,0,.4);color:#F5C400;font-weight:700;gap:7px';
  btn.innerHTML='<svg style="width:14px;height:14px;stroke:currentColor;stroke-width:1.8;fill:none;flex-shrink:0" viewBox="0 0 16 16"><rect x="1" y="2" width="14" height="12" rx="2"/><path d="M4 6h8M4 9h5M4 12h3"/></svg> Feuille de présence';
  btn.onclick=function(){document.getElementById('fpModal').classList.add('open');fpInit();};
  topbar.insertBefore(btn,syncBtn);
}

/* 4 ── FERMETURE MODAL SUR FOND ─────────────────────────────────────── */
document.getElementById('fpModal').addEventListener('click',function(e){
  if(e.target===this)this.classList.remove('open');
});

/* 5 ── FP FONCTIONS ─────────────────────────────────────────────────── */

// ──────────────────────────────────────────────────
// FEUILLE DE PRÉSENCE
// ──────────────────────────────────────────────────
function fpInit(){
  const today=new Date();
  const fpd=document.getElementById('fp-date');if(fpd)fpd.valueAsDate=today;
  const fpy=document.getElementById('fp-ref-year');if(fpy)fpy.value=today.getFullYear();
  const fpn=document.getElementById('fp-ref-num');if(fpn)fpn.value='FP-'+String(Math.floor(Math.random()*900)+100);
  const fps=document.getElementById('fp-sig-date');if(fps)fps.valueAsDate=today;
  const fpf=document.getElementById('fp-footer-date');
  if(fpf)fpf.textContent='O-I Manufacturing France SAS · Site de Wingles · '+today.toLocaleDateString('fr-FR',{year:'numeric',month:'long',day:'numeric'});
  const fpsel=document.getElementById('fp-objet');
  if(fpsel)fpsel.addEventListener('change',function(){
    const w=document.getElementById('fp-autre-wrap');
    if(w)w.style.display=this.value==='__autre__'?'block':'none';
  });
  fpInitTable();
}
function fpCalcDuree(){
  const deb=document.getElementById('fp-debut').value;
  const fin=document.getElementById('fp-fin').value;
  const el=document.getElementById('fp-duree');
  if(!deb||!fin){el.textContent='—';return;}
  const[dh,dm]=deb.split(':').map(Number);
  const[fh,fm]=fin.split(':').map(Number);
  let diff=(fh*60+fm)-(dh*60+dm);if(diff<0)diff+=1440;
  const h=Math.floor(diff/60),m=diff%60;
  el.textContent=h+'h'+(m>0?String(m).padStart(2,'0'):'');
}
let fpDerang=false;
function fpToggleDerang(){
  fpDerang=!fpDerang;
  const t=document.getElementById('fp-derang-toggle');
  if(t)t.classList.toggle('on',fpDerang);
}
function fpAddRow(nom='',prenom='',qualite='',present=false){
  const tbody=document.getElementById('fp-tbody');if(!tbody)return;
  const tr=document.createElement('tr');
  tr.innerHTML=`<td><input type="text" value="${nom}" placeholder="NOM"></td><td><input type="text" value="${prenom}" placeholder="Prénom"></td><td><input type="text" value="${qualite}" placeholder="Mandat / Poste"></td><td style="text-align:center"><div class="fp-chk${present?' on':''}" onclick="this.classList.toggle('on')"></div></td><td class="fp-sig-cell"></td><td><button class="fp-del-btn" onclick="this.closest('tr').remove()">×</button></td>`;
  tbody.appendChild(tr);
}
function fpInitTable(){
  const tbody=document.getElementById('fp-tbody');if(!tbody)return;
  tbody.innerHTML='';
  fpAddRow('ROGGERI','Pascal','Délégué Syndical FO / Secrétaire-Trésorier CSE');
  for(let i=0;i<6;i++)fpAddRow();
}
function fpReset(){
  if(!confirm('Réinitialiser la feuille de présence ?'))return;
  const fpsel=document.getElementById('fp-objet');if(fpsel)fpsel.selectedIndex=0;
  const fpaw=document.getElementById('fp-autre-wrap');if(fpaw)fpaw.style.display='none';
  const fpao=document.getElementById('fp-objet-autre');if(fpao)fpao.value='';
  const fpl=document.getElementById('fp-lieu');if(fpl)fpl.value='Salle K2 – O-I Manufacturing France SAS, Wingles';
  const fpc=document.getElementById('fp-convoquant');if(fpc)fpc.selectedIndex=0;
  const fpd=document.getElementById('fp-debut');if(fpd)fpd.value='';
  const fpf=document.getElementById('fp-fin');if(fpf)fpf.value='';
  const fpdu=document.getElementById('fp-duree');if(fpdu)fpdu.textContent='—';
  if(fpDerang)fpToggleDerang();
  fpInitTable();
  toast('Feuille réinitialisée','i');
}
function fpExport(){
  let objet=document.getElementById('fp-objet').value;
  if(objet==='__autre__')objet=document.getElementById('fp-objet-autre').value||'Autre réunion';
  const date=document.getElementById('fp-date').value;
  const duree=document.getElementById('fp-duree').textContent;
  const tempsel=document.querySelector('input[name=fp-temps]:checked');
  const temps=tempsel&&tempsel.labels&&tempsel.labels[0]?tempsel.labels[0].textContent.trim():'';
  const derang=fpDerang?'DÉRANGEMENT SIGNALÉ':'Aucun dérangement';
  let recap='FEUILLE DE PRÉSENCE – FORCE OUVRIÈRE\nO-I Manufacturing France SAS – Site de Wingles\n\n';
  recap+='Réunion : '+objet+'\nDate : '+date+'\nLieu : Salle K2 – Wingles\nDurée : '+duree+'\nImputation : '+temps+'\nDérangement : '+derang+'\n\nParticipants :\n';
  document.querySelectorAll('#fp-tbody tr').forEach(tr=>{
    const nom=tr.cells[0].querySelector('input').value;
    const prenom=tr.cells[1].querySelector('input').value;
    const qualite=tr.cells[2].querySelector('input').value;
    const present=tr.querySelector('.fp-chk.on')?'Présent':'Absent';
    if(nom||prenom)recap+='• '+nom+' '+prenom+' ('+qualite+') – '+present+'\n';
  });
  recap+='\nSigné par : Pascal ROGGERI – DS FO / Secrétaire-Trésorier CSE';
  const subject=encodeURIComponent('Feuille de présence – '+objet+' – '+date);
  const body=encodeURIComponent(recap+'\n\n[Document généré depuis GED FO Wingles – À imprimer et signer]');
  window.open('mailto:?subject='+subject+'&body='+body);
}
window.fpCalcDuree=fpCalcDuree;
window.fpToggleDerang=fpToggleDerang;
window.fpAddRow=fpAddRow;
window.fpReset=fpReset;
window.fpExport=fpExport;


/* 6 ── INIT ─────────────────────────────────────────────────────────── */
if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',function(){injectBtn();});
}else{
  injectBtn();
}

})();
