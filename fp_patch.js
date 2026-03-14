/* fp_patch.js v4 — GED FO Wingles
 * Feuille de Presence + Courriers Inspection du Travail
 * <script src="fp_patch.js"></script>
 */
(function(){

/* 1 — CSS */
var s=document.createElement('style');
s.textContent="\n/* ═══════════════════════════════════════════════════\n   FEUILLE DE PRÉSENCE — PANEL\n═══════════════════════════════════════════════════ */\n.fp-doc {\n  max-width: 820px; margin: 0 auto;\n  background: #FAFAF7; color: #1A1A1A;\n  border: 1px solid #D0CABC;\n  box-shadow: 0 8px 40px rgba(0,0,0,.5);\n  font-family: 'Figtree',sans-serif;\n}\n.fp-header {\n  background: #1A1A1A; display: grid;\n  grid-template-columns: 110px 1fr 130px; align-items: stretch;\n}\n.fp-header-logo { background: #F5C400; display:flex; align-items:center; justify-content:center; padding:12px; }\n.fp-header-title { padding:14px 16px; text-align:center; }\n.fp-header-title .fp-org { font-size:9px; color:#F5C400; letter-spacing:3px; text-transform:uppercase; display:block; margin-bottom:3px; font-weight:600; }\n.fp-header-title h2 { font-size:18px; font-weight:800; color:#fff; letter-spacing:1px; text-transform:uppercase; line-height:1.15; font-family:'Outfit','Figtree',sans-serif; }\n.fp-header-title .fp-subtitle { font-size:10px; color:rgba(255,255,255,.4); margin-top:4px; }\n.fp-header-ref { background:rgba(245,196,0,.08); border-left:1px solid rgba(245,196,0,.15); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:7px; padding:10px; }\n.fp-header-ref label { font-size:8px; color:rgba(255,255,255,.4); letter-spacing:2px; text-transform:uppercase; }\n.fp-header-ref input { background:transparent; border:none; border-bottom:1px solid rgba(245,196,0,.4); color:#F5C400; font-size:12px; font-weight:700; text-align:center; width:88px; outline:none; padding:2px 0; }\n.fp-type-bar { background:#F5C400; padding:8px 18px; display:flex; align-items:center; gap:12px; flex-wrap:wrap; }\n.fp-type-bar > label { font-size:11px; font-weight:800; color:#1A1A1A; letter-spacing:1px; text-transform:uppercase; white-space:nowrap; font-family:'Outfit','Figtree',sans-serif; }\n.fp-type-chips { display:flex; flex-wrap:wrap; gap:5px; flex:1; }\n.fp-chip-r { display:none; }\n.fp-chip-r + label { font-size:11px; font-weight:700; padding:3px 10px; background:rgba(0,0,0,.1); border:1.5px solid rgba(0,0,0,.15); cursor:pointer; transition:all .15s; color:#1A1A1A; user-select:none; font-family:'Outfit',sans-serif; }\n.fp-chip-r:checked + label { background:#1A1A1A; color:#F5C400; border-color:#1A1A1A; }\n.fp-chip-r + label:hover { background:rgba(0,0,0,.2); }\n.fp-body { padding:16px 20px; background:#FAFAF7; }\n.fp-info-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px; }\n.fp-field { display:flex; flex-direction:column; gap:3px; }\n.fp-field > label { font-size:9px; letter-spacing:2px; text-transform:uppercase; color:#888; font-weight:700; }\n.fp-field input, .fp-field select { font-family:'Figtree',sans-serif; font-size:13px; border:none; border-bottom:1.5px solid #D0CABC; background:transparent; padding:4px 0; color:#1A1A1A; outline:none; transition:border-color .2s; width:100%; }\n.fp-field input:focus, .fp-field select:focus { border-bottom-color:#C8A800; }\n.fp-field select option { background:#fff; color:#1A1A1A; }\n.fp-horaires { background:#F0EDE8; border:1px solid #D0CABC; padding:11px 14px; margin-bottom:12px; display:grid; grid-template-columns:1fr 1fr auto; gap:12px; align-items:end; }\n.fp-result { background:#1A1A1A; color:#F5C400; font-family:'Outfit',sans-serif; font-size:22px; font-weight:800; padding:7px 14px; text-align:center; min-width:78px; line-height:1; }\n.fp-result small { display:block; font-size:8px; letter-spacing:2px; color:rgba(245,196,0,.55); margin-bottom:2px; font-weight:400; }\n.fp-section-title { font-family:'Outfit',sans-serif; font-size:10px; font-weight:800; letter-spacing:2px; text-transform:uppercase; color:#1A1A1A; padding:5px 0 4px; border-bottom:2px solid #1A1A1A; margin-bottom:8px; display:flex; align-items:center; justify-content:space-between; }\n.fp-temps-block { display:flex; gap:7px; margin-bottom:12px; }\n.fp-temps-opt { flex:1; }\n.fp-temps-opt input[type=radio] { display:none; }\n.fp-temps-opt label { display:flex; align-items:center; gap:7px; padding:7px 10px; border:1.5px solid #D0CABC; cursor:pointer; transition:all .15s; font-size:12px; font-weight:700; color:#999; background:#FAFAF7; }\n.fp-temps-opt label .fp-rdot { width:12px; height:12px; border-radius:50%; border:2px solid #CCC; flex-shrink:0; transition:all .15s; }\n.fp-temps-opt input[type=radio]:checked + label { border-color:#1A1A1A; color:#1A1A1A; background:#F5F3EE; }\n.fp-temps-opt input[type=radio]:checked + label .fp-rdot { background:#F5C400; border-color:#1A1A1A; }\n.fp-derang { border:1.5px solid #D0CABC; margin-bottom:12px; }\n.fp-derang-hdr { display:flex; align-items:center; gap:10px; padding:8px 12px; background:#F0EDE8; cursor:pointer; user-select:none; }\n.fp-derang-hdr span { font-family:'Outfit',sans-serif; font-size:10px; font-weight:800; letter-spacing:1px; text-transform:uppercase; flex:1; color:#1A1A1A; }\n.fp-toggle { width:36px; height:19px; background:#CCC; border-radius:10px; position:relative; transition:background .2s; flex-shrink:0; }\n.fp-toggle.on { background:#F5C400; }\n.fp-toggle::after { content:''; position:absolute; width:15px; height:15px; background:white; border-radius:50%; top:2px; left:2px; transition:left .2s; box-shadow:0 1px 3px rgba(0,0,0,.3); }\n.fp-toggle.on::after { left:19px; }\n.fp-ptable { width:100%; border-collapse:collapse; font-size:12.5px; margin-bottom:12px; }\n.fp-ptable thead tr { background:#1A1A1A; }\n.fp-ptable thead th { font-family:'Outfit',sans-serif; font-size:9px; letter-spacing:1.5px; text-transform:uppercase; padding:5px 6px; text-align:left; font-weight:700; color:#F5C400; }\n.fp-ptable tbody tr { border-bottom:1px solid #D0CABC; }\n.fp-ptable tbody tr:nth-child(even) { background:#F0EDE8; }\n.fp-ptable tbody td { padding:3px 5px; vertical-align:middle; }\n.fp-ptable tbody td input[type=text] { font-family:'Figtree',sans-serif; font-size:12.5px; width:100%; border:none; background:transparent; outline:none; padding:2px 0; color:#1A1A1A; }\n.fp-chk { width:18px; height:18px; border:2px solid #D0CABC; background:white; cursor:pointer; display:inline-flex; align-items:center; justify-content:center; transition:all .15s; }\n.fp-chk.on { background:#F5C400; border-color:#1A1A1A; }\n.fp-chk.on::after { content:'\\2713'; font-size:12px; font-weight:800; color:#1A1A1A; }\n.fp-add-btn { font-family:'Outfit',sans-serif; font-size:10px; font-weight:700; letter-spacing:1px; background:#F5C400; border:1.5px solid #1A1A1A; color:#1A1A1A; padding:2px 9px; cursor:pointer; text-transform:uppercase; transition:all .15s; }\n.fp-add-btn:hover { background:#1A1A1A; color:#F5C400; }\n.fp-del-btn { background:none; border:none; color:#CCC; cursor:pointer; font-size:14px; padding:0 3px; transition:color .15s; }\n.fp-del-btn:hover { color:#C0392B; }\n.fp-sig-area { border:1px solid #D0CABC; background:white; height:68px; display:flex; align-items:flex-end; padding:5px 7px; font-size:9px; color:#AAA; font-style:italic; margin-top:4px; }\n.fp-footer-bar { background:#1A1A1A; padding:6px 20px; display:flex; align-items:center; justify-content:space-between; }\n.fp-footer-bar span { font-family:'Outfit',sans-serif; font-size:9px; letter-spacing:2px; text-transform:uppercase; }\n.fp-footer-fo { color:#F5C400; }\n.fp-footer-site { color:rgba(255,255,255,.35); }\n.fp-sig-cell { border-bottom:1px solid #DDD; height:26px; min-width:70px; }\n\n@media print {\n  .sidebar,.topbar,.fp-export-actions,#connect-banner,.toasts { display:none!important; }\n  .content { overflow:visible; }\n  body { background:white; }\n  .panel.active { padding:8px; }\n  .fp-doc { box-shadow:none; border:1px solid #000; max-width:100%; }\n  .fp-add-btn,.fp-del-btn { display:none; }\n  .fp-ptable thead tr { print-color-adjust:exact; -webkit-print-color-adjust:exact; }\n  .fp-header { print-color-adjust:exact; -webkit-print-color-adjust:exact; }\n  .fp-type-bar { print-color-adjust:exact; -webkit-print-color-adjust:exact; }\n  .fp-result { print-color-adjust:exact; -webkit-print-color-adjust:exact; }\n  .fp-chk.on { print-color-adjust:exact; -webkit-print-color-adjust:exact; }\n  .fp-footer-bar { print-color-adjust:exact; -webkit-print-color-adjust:exact; }\n  .fp-derang-hdr { print-color-adjust:exact; -webkit-print-color-adjust:exact; }\n  section.section-head { display:none; }\n}\n\n.it-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:20px}\n.it-stat{background:var(--bg2);border:1px solid var(--border);border-radius:10px;padding:14px 16px;position:relative;overflow:hidden}\n.it-stat::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--its-c,#22D3EE)}\n.it-stat-val{font-family:var(--font-d),sans-serif;font-size:28px;font-weight:800;color:var(--text);line-height:1}\n.it-stat-lbl{font-size:11px;color:var(--muted);margin-top:5px}\n.it-filter{padding:5px 13px;border-radius:20px;font-size:11px;font-weight:600;background:rgba(255,255,255,.04);border:1px solid var(--border);color:var(--muted);cursor:pointer;transition:all .15s;font-family:var(--font-b),sans-serif;display:inline-block;margin:0 4px 6px 0}\n.it-filter:hover{color:var(--text);background:rgba(255,255,255,.07)}\n.it-filter.on{background:var(--itfc,#22D3EE);border-color:transparent;color:#fff}\n.it-card{background:var(--surface,#161A25);border:1px solid var(--border);border-left:4px solid var(--itc,#22D3EE);border-radius:10px;padding:15px 17px;margin-bottom:10px;transition:all .2s;cursor:pointer}\n.it-card:hover{border-color:var(--border2);box-shadow:0 4px 16px rgba(0,0,0,.3);transform:translateY(-1px)}\n.it-card-top{display:flex;align-items:flex-start;gap:10px;margin-bottom:7px;flex-wrap:wrap}\n.it-badge{padding:3px 10px;border-radius:20px;font-size:10px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;flex-shrink:0;color:#fff}\n.it-st{padding:3px 10px;border-radius:20px;font-size:10px;font-weight:600;white-space:nowrap;flex-shrink:0}\n.it-st.env{background:rgba(59,130,246,.12);color:#60A5FA;border:1px solid rgba(59,130,246,.25)}\n.it-st.rep{background:rgba(34,197,94,.12);color:#4ADE80;border:1px solid rgba(34,197,94,.25)}\n.it-st.rel{background:rgba(234,179,8,.12);color:#FACC15;border:1px solid rgba(234,179,8,.25)}\n.it-st.cls{background:rgba(148,163,184,.12);color:#CBD5E1;border:1px solid rgba(148,163,184,.25)}\n.it-title{font-size:14px;font-weight:700;color:var(--text);flex:1;line-height:1.4;min-width:0}\n.it-date{font-size:11px;color:var(--muted);white-space:nowrap;font-family:var(--font-m,monospace)}\n.it-meta{font-size:11px;color:var(--muted);margin-top:3px;font-family:var(--font-m,monospace)}\n.it-desc{font-size:12.5px;color:var(--text2,#C5C9D4);line-height:1.6;margin-top:7px;padding-top:7px;border-top:1px solid var(--border)}\n.it-acts{display:flex;gap:6px;margin-top:10px;justify-content:flex-end}\n.it-has-file{display:inline-flex;align-items:center;gap:4px;font-size:10px;color:#22D3EE;background:rgba(34,211,238,.08);border:1px solid rgba(34,211,238,.2);border-radius:5px;padding:2px 8px;margin-top:5px}\n.it-modal-wrap{background:var(--bg2);border:1px solid var(--border2);border-radius:16px;padding:26px;max-width:660px;width:100%;margin:0 auto;box-shadow:0 24px 80px rgba(0,0,0,.7)}\n.it-fg{margin-bottom:13px}\n.it-fg label{display:block;font-size:9.5px;font-weight:600;letter-spacing:1.8px;text-transform:uppercase;color:var(--muted);margin-bottom:5px}\n.it-fg input,.it-fg select,.it-fg textarea{width:100%;background:var(--bg3,#11141D);border:1px solid var(--border2);border-radius:8px;padding:9px 13px;color:var(--text);font-size:13px;font-family:var(--font-b),sans-serif;outline:none;transition:border-color .2s}\n.it-fg input:focus,.it-fg select:focus,.it-fg textarea:focus{border-color:#22D3EE}\n.it-fg select option{background:#11141D;color:var(--text)}\n.it-fg2{display:grid;grid-template-columns:1fr 1fr;gap:12px}\n.it-file-zone{display:flex;align-items:center;gap:12px;background:var(--bg3,#11141D);border:2px dashed var(--border2);border-radius:10px;padding:13px 15px;cursor:pointer;transition:all .2s}\n.it-file-zone:hover{border-color:rgba(34,211,238,.4);background:rgba(34,211,238,.03)}\n.it-file-zone.has{border-style:solid;border-color:rgba(34,197,94,.3);background:rgba(34,197,94,.03)}\n.it-file-ico{width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;background:rgba(255,255,255,.05)}\n.it-file-name{font-size:12.5px;font-weight:600;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.it-file-sub{font-size:10px;color:var(--muted);margin-top:2px}\n.it-empty{text-align:center;padding:48px;color:var(--muted);font-size:13px}\n/* Viewer IT */\n.it-view-wrap{background:var(--bg,#07090E);border:1px solid var(--border2);border-radius:16px;padding:0;max-width:900px;width:100%;margin:0 auto;box-shadow:0 24px 80px rgba(0,0,0,.8);overflow:hidden;max-height:90vh;display:flex;flex-direction:column}\n.it-view-hdr{display:flex;align-items:center;gap:14px;padding:14px 20px;background:var(--bg2);border-bottom:1px solid var(--border);flex-shrink:0;flex-wrap:wrap;gap:10px}\n.it-view-body{flex:1;overflow-y:auto;padding:24px;background:var(--bg)}\n.it-view-body iframe{width:100%;min-height:500px;border:none;border-radius:8px;background:#fff}\n.it-view-body img{max-width:100%;border-radius:8px;box-shadow:0 8px 32px rgba(0,0,0,.5)}\n.it-view-body .docx-render{background:#fff;color:#111;padding:40px;border-radius:8px;font-family:Georgia,serif;line-height:1.8;font-size:14px}\n.it-view-body .no-prev{text-align:center;padding:60px;color:var(--muted)}\n.it-view-body .no-prev .ico{font-size:56px;margin-bottom:14px}\n\n@media print {\n  .sidebar,.topbar,.no-print,.toasts,#connect-banner{display:none!important}\n  .content{overflow:visible}body{background:white}\n  #fpModal,#itModal,#itAddModal,#itViewModal{position:static!important;background:none!important;backdrop-filter:none!important;padding:0!important;overflow:visible!important;display:block!important}\n  .fp-doc{box-shadow:none;border:1px solid #000;max-width:100%}\n  .fp-add-btn,.fp-del-btn{display:none}\n  .fp-ptable thead tr,.fp-header,.fp-type-bar,.fp-result,.fp-chk.on,.fp-footer-bar,.fp-derang-hdr{print-color-adjust:exact;-webkit-print-color-adjust:exact}\n}\n";
document.head.appendChild(s);

/* 2 — MODALS */
document.body.insertAdjacentHTML('beforeend','<div class="modal-ov" id="fpModal" style="align-items:flex-start;overflow-y:auto;padding:28px 16px"><div style="max-width:860px;width:100%;margin:0 auto;background:var(--bg2);border:1px solid var(--border2);border-radius:16px;padding:24px;box-shadow:0 24px 80px rgba(0,0,0,.7)"><div class="no-print" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:10px"><div><div style="font-family:var(--font-d),sans-serif;font-size:22px;font-weight:800;color:var(--text)">Feuille de <span style="color:#F5C400">Présence</span></div><div style="font-size:11px;color:var(--muted);margin-top:3px">Réunions syndicales · O-I Manufacturing France SAS — Wingles</div></div><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-secondary" onclick="fpReset()">Réinitialiser</button><button class="btn btn-secondary" onclick="window.print()">🖨 Imprimer</button><button class="btn btn-primary" onclick="fpExport()">📧 Envoyer ↗</button><button class="btn btn-secondary" onclick="document.getElementById(\'fpModal\').classList.remove(\'open\')" style="font-size:18px;padding:7px 13px">✕</button></div></div><div class="fp-doc" id="fp-document">\n      <div class="fp-header">\n        <div class="fp-header-logo">\n          <svg width="76" height="76" viewBox="0 0 100 100">\n            <circle cx="50" cy="50" r="48" fill="#1A1A1A" stroke="#F5C400" stroke-width="3"/>\n            <text x="50" y="38" font-family="Georgia,serif" font-size="28" font-weight="700" fill="#F5C400" text-anchor="middle">FO</text>\n            <rect x="20" y="44" width="60" height="3" fill="#F5C400"/>\n            <text x="50" y="59" font-family="Arial" font-size="8" fill="#F5C400" text-anchor="middle">FORCE</text>\n            <text x="50" y="69" font-family="Arial" font-size="8" fill="#F5C400" text-anchor="middle">OUVRIÈRE</text>\n            <text x="50" y="81" font-family="Arial" font-size="7" fill="rgba(245,196,0,0.6)" text-anchor="middle">CGT-FO</text>\n          </svg>\n        </div>\n        <div class="fp-header-title">\n          <span class="fp-org">Confédération Générale du Travail — Force Ouvrière</span>\n          <h2>Feuille de Présence<br>Réunion Syndicale</h2>\n          <div class="fp-subtitle">O-I Manufacturing France SAS — Site de Wingles (62)</div>\n        </div>\n        <div class="fp-header-ref">\n          <label>N° Document</label>\n          <input type="text" id="fp-ref-num" placeholder="FP-001">\n          <label>Année</label>\n          <input type="text" id="fp-ref-year" placeholder="2026">\n        </div>\n      </div>\n      <div class="fp-type-bar">\n        <label>Type :</label>\n        <div class="fp-type-chips">\n          <input type="radio" name="fp-type" id="fpt-cse" class="fp-chip-r" checked><label for="fpt-cse">CSE</label>\n          <input type="radio" name="fp-type" id="fpt-cssct" class="fp-chip-r"><label for="fpt-cssct">CSSCT</label>\n          <input type="radio" name="fp-type" id="fpt-form" class="fp-chip-r"><label for="fpt-form">Commission Formation</label>\n          <input type="radio" name="fp-type" id="fpt-eco" class="fp-chip-r"><label for="fpt-eco">Comm. Économique</label>\n          <input type="radio" name="fp-type" id="fpt-syn" class="fp-chip-r"><label for="fpt-syn">Réunion Syndicale</label>\n          <input type="radio" name="fp-type" id="fpt-neg" class="fp-chip-r"><label for="fpt-neg">Négociation</label>\n          <input type="radio" name="fp-type" id="fpt-autre" class="fp-chip-r"><label for="fpt-autre">Autre</label>\n        </div>\n      </div>\n      <div class="fp-body">\n        <div class="fp-info-grid">\n          <div class="fp-field" style="grid-column:1/-1">\n            <label>Objet / Intitulé de la réunion</label>\n            <select id="fp-objet">\n              <optgroup label="── Réunions CSE">\n                <option value="CSE Ordinaire mensuel">CSE Ordinaire mensuel</option>\n                <option value="CSE Extraordinaire">CSE Extraordinaire</option>\n                <option value="CSE – Consultation DUERP">CSE – Consultation DUERP</option>\n                <option value="CSE – Consultation PAPRIPACT">CSE – Consultation PAPRIPACT</option>\n                <option value="CSE – Consultation Plan de Formation">CSE – Consultation Plan de Formation</option>\n                <option value="CSE – Consultation Situation Économique">CSE – Consultation Situation Économique</option>\n                <option value="CSE – Consultation Politique Sociale">CSE – Consultation Politique Sociale</option>\n                <option value="CSE – Information PSE">CSE – Information PSE</option>\n              </optgroup>\n              <optgroup label="── CSSCT">\n                <option value="CSSCT – Réunion ordinaire">CSSCT – Réunion ordinaire</option>\n                <option value="CSSCT – Inspection des locaux">CSSCT – Inspection des locaux</option>\n                <option value="CSSCT – Analyse AT / MP">CSSCT – Analyse AT / MP</option>\n                <option value="CSSCT – Étude DUERP">CSSCT – Étude DUERP</option>\n                <option value="CSSCT – Expertise CMR / Nickel">CSSCT – Expertise CMR / Nickel</option>\n              </optgroup>\n              <optgroup label="── Commissions">\n                <option value="Commission Formation – Réunion ordinaire">Commission Formation – Réunion ordinaire</option>\n                <option value="Commission Économique – Réunion ordinaire">Commission Économique – Réunion ordinaire</option>\n                <option value="Commission Égalité Professionnelle">Commission Égalité Professionnelle</option>\n              </optgroup>\n              <optgroup label="── Convocations Direction">\n                <option value="Convocation Direction – Laurent GUYOT">Convocation Direction – Laurent GUYOT</option>\n                <option value="NAO – Direction">NAO – Direction</option>\n                <option value="Négociation – Accord d\'entreprise">Négociation – Accord d\'entreprise</option>\n                <option value="Réunion d\'information Direction">Réunion d\'information Direction</option>\n              </optgroup>\n              <optgroup label="── Force Ouvrière">\n                <option value="Réunion syndicale FO – Section Wingles">Réunion syndicale FO – Section Wingles</option>\n                <option value="Réunion préparatoire CSE – FO">Réunion préparatoire CSE – FO</option>\n                <option value="Réunion préparatoire CSSCT – FO">Réunion préparatoire CSSCT – FO</option>\n                <option value="Bureau FO – Trésorerie / Cotisations">Bureau FO – Trésorerie / Cotisations</option>\n              </optgroup>\n              <optgroup label="── Autre">\n                <option value="__autre__">Autre (préciser ci-dessous)</option>\n              </optgroup>\n            </select>\n          </div>\n          <div class="fp-field" id="fp-autre-wrap" style="display:none;grid-column:1/-1">\n            <label>Préciser l\'intitulé</label>\n            <input type="text" id="fp-objet-autre" placeholder="Intitulé libre…">\n          </div>\n          <div class="fp-field">\n            <label>Date</label>\n            <input type="date" id="fp-date">\n          </div>\n          <div class="fp-field">\n            <label>Lieu</label>\n            <input type="text" id="fp-lieu" value="Salle K2 – O-I Manufacturing France SAS, Wingles">\n          </div>\n          <div class="fp-field" style="grid-column:1/-1">\n            <label>Convoqué(e) par</label>\n            <select id="fp-convoquant">\n              <option value="Laurent GUYOT – Directeur de site">Laurent GUYOT – Directeur de site</option>\n              <option value="Direction O-I Manufacturing France SAS">Direction O-I Manufacturing France SAS</option>\n              <option value="Direction des Ressources Humaines">Direction des Ressources Humaines</option>\n              <option value="Délégation FO – Section Wingles">Délégation FO – Section Wingles</option>\n              <option value="Bureau CSE">Bureau CSE</option>\n              <option value="Bureau CSSCT">Bureau CSSCT</option>\n              <option value="Commission Formation">Commission Formation</option>\n              <option value="Commission Économique">Commission Économique</option>\n            </select>\n          </div>\n        </div>\n        <div class="fp-horaires">\n          <div class="fp-field"><label>Heure de début</label><input type="time" id="fp-debut" oninput="fpCalcDuree()"></div>\n          <div class="fp-field"><label>Heure de fin</label><input type="time" id="fp-fin" oninput="fpCalcDuree()"></div>\n          <div class="fp-result"><small>Durée</small><span id="fp-duree">—</span></div>\n        </div>\n        <div class="fp-section-title" style="margin-bottom:7px">Imputation du temps</div>\n        <div class="fp-temps-block">\n          <div class="fp-temps-opt"><input type="radio" name="fp-temps" id="fptmp-tt" checked><label for="fptmp-tt"><span class="fp-rdot"></span>Pendant le temps de travail</label></div>\n          <div class="fp-temps-opt"><input type="radio" name="fp-temps" id="fptmp-ht"><label for="fptmp-ht"><span class="fp-rdot"></span>Hors temps de travail</label></div>\n          <div class="fp-temps-opt"><input type="radio" name="fp-temps" id="fptmp-mx"><label for="fptmp-mx"><span class="fp-rdot"></span>Mixte</label></div>\n        </div>\n        <div class="fp-derang">\n          <div class="fp-derang-hdr" onclick="fpToggleDerang()">\n            <span>Dérangement signalé</span>\n            <div class="fp-toggle" id="fp-derang-toggle"></div>\n          </div>\n        </div>\n        <div class="fp-section-title">\n          <span>Participants</span>\n          <button class="fp-add-btn" onclick="fpAddRow()">+ Ajouter</button>\n        </div>\n        <table class="fp-ptable">\n          <thead><tr>\n            <th style="width:22%">Nom</th>\n            <th style="width:21%">Prénom</th>\n            <th style="width:30%">Qualité / Mandat</th>\n            <th style="width:9%;text-align:center">Présent</th>\n            <th style="width:14%">Signature</th>\n            <th style="width:4%"></th>\n          </tr></thead>\n          <tbody id="fp-tbody"></tbody>\n        </table>\n        <div style="border:1.5px solid #1A1A1A;padding:13px;background:#F5F3EE">\n          <div class="fp-section-title" style="margin-bottom:9px">Signature du Délégué Syndical FO</div>\n          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">\n            <div class="fp-field"><label>Délégué Syndical</label><input type="text" value="Pascal ROGGERI — DS FO / Secrétaire-Trésorier CSE" readonly style="color:#555;font-size:12px"></div>\n            <div class="fp-field"><label>Date de signature</label><input type="date" id="fp-sig-date"></div>\n            <div class="fp-field"><label>Signature</label><div class="fp-sig-area">Signature Pascal ROGGERI</div></div>\n            <div class="fp-field"><label>Cachet FO</label><div class="fp-sig-area" style="align-items:center;justify-content:center;color:#C8A800;font-weight:700;font-size:10.5px;font-style:normal">FORCE OUVRIÈRE — CGT-FO<br><span style="font-size:9px;color:#AAA;font-style:italic;font-weight:400">O-I Manufacturing Wingles</span></div></div>\n          </div>\n        </div>\n      </div>\n      <div class="fp-footer-bar">\n        <span class="fp-footer-fo">Force Ouvrière — CGT-FO</span>\n        <span class="fp-footer-site" id="fp-footer-date">O-I Manufacturing France SAS · Site de Wingles</span>\n      </div>\n    </div>\n  </div></div></div>');
document.body.insertAdjacentHTML('beforeend','<div class="modal-ov" id="itModal" style="align-items:flex-start;overflow-y:auto;padding:28px 16px"><div style="max-width:980px;width:100%;margin:0 auto;background:var(--bg2);border:1px solid var(--border2);border-radius:16px;padding:28px;box-shadow:0 24px 80px rgba(0,0,0,.7)"><div class="no-print" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:22px;flex-wrap:wrap;gap:10px"><div><div style="font-family:var(--font-d),sans-serif;font-size:22px;font-weight:800;color:var(--text)">Courriers <span style="color:#22D3EE">Inspection du Travail</span></div><div style="font-size:11px;color:var(--muted);margin-top:3px">DDETS UC2 Pas-de-Calais · Force Ouvrière O-I Wingles</div></div><div style="display:flex;gap:8px"><button class="btn btn-secondary" onclick="itOpenAdd()" style="border-color:rgba(34,211,238,.35);color:#22D3EE;font-weight:700">️ Nouveau courrier</button><button class="btn btn-secondary" onclick="document.getElementById(\'itModal\').classList.remove(\'open\')" style="font-size:18px;padding:7px 13px">✕</button></div></div><div class="it-stats" id="it-stats"></div><div style="margin-bottom:14px"><span class="it-filter on" onclick="itSetFilter(\'all\',this)" style="--itfc:#22D3EE">Tous</span><span class="it-filter" onclick="itSetFilter(\'cse\',this)" style="--itfc:#3B82F6">CSE — Ordinaire</span><span class="it-filter" onclick="itSetFilter(\'cse_extra\',this)" style="--itfc:#2563EB">CSE — Extraordinaire</span><span class="it-filter" onclick="itSetFilter(\'cssct\',this)" style="--itfc:#22C55E">CSSCT</span><span class="it-filter" onclick="itSetFilter(\'formation\',this)" style="--itfc:#E03A47">Commission Formation</span><span class="it-filter" onclick="itSetFilter(\'eco\',this)" style="--itfc:#1F5C99">Commission Économique</span><span class="it-filter" onclick="itSetFilter(\'duerp\',this)" style="--itfc:#0E6655">Commission DUERP</span><span class="it-filter" onclick="itSetFilter(\'papripact\',this)" style="--itfc:#B45309">Commission PAPRIPACT</span><span class="it-filter" onclick="itSetFilter(\'egalite\',this)" style="--itfc:#A855F7">Égalité Professionnelle</span><span class="it-filter" onclick="itSetFilter(\'nao\',this)" style="--itfc:#0D9488">NAO / Négociation</span><span class="it-filter" onclick="itSetFilter(\'pse\',this)" style="--itfc:#EA580C">PSE</span><span class="it-filter" onclick="itSetFilter(\'accords\',this)" style="--itfc:#0891B2">Accords d\'entreprise</span><span class="it-filter" onclick="itSetFilter(\'heures\',this)" style="--itfc:#EAB308">Heures de délégation</span><span class="it-filter" onclick="itSetFilter(\'harcelement\',this)" style="--itfc:#E03A47">Harcèlement / Discrimination</span><span class="it-filter" onclick="itSetFilter(\'salaire\',this)" style="--itfc:#06B6D4">Salaire / Prime / Intéressement</span><span class="it-filter" onclick="itSetFilter(\'securite\',this)" style="--itfc:#F97316">Sécurité / AT / MP</span><span class="it-filter" onclick="itSetFilter(\'csec\',this)" style="--itfc:#1A3A6C">CSE Central</span><span class="it-filter" onclick="itSetFilter(\'autre\',this)" style="--itfc:#6B7280">Autre</span></div><div style="display:flex;align-items:center;gap:10px;background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:9px 15px;margin-bottom:16px"><svg style="width:14px;height:14px;stroke:var(--muted);stroke-width:1.8;fill:none;flex-shrink:0" viewBox="0 0 16 16"><circle cx="7" cy="7" r="5"/><path d="M11 11l3 3"/></svg><input type="text" placeholder="Rechercher…" id="it-q" oninput="itRender()" style="background:none;border:none;outline:none;color:var(--text);font-size:13px;width:100%"></div><div id="it-list"></div></div></div>');
document.body.insertAdjacentHTML('beforeend','<div class="modal-ov" id="itAddModal" style="align-items:center;padding:20px;z-index:450"><div class="it-modal-wrap"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px"><div style="font-family:var(--font-d),sans-serif;font-size:17px;font-weight:700;color:var(--text)" id="it-modal-title">Nouveau courrier</div><button class="btn btn-secondary" onclick="document.getElementById(\'itAddModal\').classList.remove(\'open\')" style="padding:5px 11px;font-size:16px">✕</button></div><input type="hidden" id="it-eid"><div class="it-fg"><label>Objet du courrier *</label><input type="text" id="it-objet" placeholder="Ex\xa0: Contestation décompte heures de délégation"></div><div class="it-fg2"><div class="it-fg"><label>Date d\'envoi *</label><input type="date" id="it-date"></div><div class="it-fg"><label>N° de référence</label><input type="text" id="it-ref" placeholder="IT-2026-001"></div></div><div class="it-fg2"><div class="it-fg"><label>Catégorie</label><select id="it-cat"><option value="cse">CSE — Ordinaire</option><option value="cse_extra">CSE — Extraordinaire</option><option value="cssct">CSSCT</option><option value="formation">Commission Formation</option><option value="eco">Commission Économique</option><option value="duerp">Commission DUERP</option><option value="papripact">Commission PAPRIPACT</option><option value="egalite">Égalité Professionnelle</option><option value="nao">NAO / Négociation</option><option value="pse">PSE</option><option value="accords">Accords d\'entreprise</option><option value="heures">Heures de délégation</option><option value="harcelement">Harcèlement / Discrimination</option><option value="salaire">Salaire / Prime / Intéressement</option><option value="securite">Sécurité / AT / MP</option><option value="csec">CSE Central</option><option value="autre">Autre</option></select></div><div class="it-fg"><label>Statut</label><select id="it-statut"><option value="envoye">📤 Envoyé — En attente</option><option value="repondu">✅ Répondu</option><option value="relance">⚠️ Relancé</option><option value="classe">📁 Classé</option></select></div></div><div class="it-fg"><label>Destinataire</label><input type="text" id="it-dest" value="DDETS UC2 Pas-de-Calais — Inspection du Travail"></div><div class="it-fg"><label>Références légales</label><input type="text" id="it-refs" placeholder="L2315-5, L2143-22, R2143-3…"></div><div class="it-fg"><label>Résumé / Objet détaillé</label><textarea id="it-desc" rows="3" placeholder="Détails du courrier…"></textarea></div><div class="it-fg"><label>Réponse reçue</label><textarea id="it-rep" rows="2" placeholder="Résumé de la réponse de l\'IT (si reçue)…"></textarea></div><div class="it-fg"><label>Fichier joint (courrier)</label><div class="it-file-zone" id="it-file-zone" onclick="document.getElementById(\'it-file-input\').click()"><div class="it-file-ico" id="it-file-ico-el">📎</div><div style="flex:1;min-width:0"><div class="it-file-name" id="it-file-name">Cliquer pour joindre le courrier</div><div class="it-file-sub" id="it-file-sub">PDF, Word, image — max 10 Mo</div></div><button type="button" onclick="event.stopPropagation();itClearFile()" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:18px;padding:0 4px">×</button><input type="file" id="it-file-input" style="display:none" accept=".pdf,.docx,.doc,.jpg,.jpeg,.png" onchange="itHandleFile(this)"></div></div><div style="display:flex;gap:10px;justify-content:flex-end;margin-top:18px"><button class="btn btn-secondary" onclick="document.getElementById(\'itAddModal\').classList.remove(\'open\')">Annuler</button><button class="btn btn-primary" onclick="itSave()" style="background:linear-gradient(135deg,#0891B2,#0E7490)">💾 Enregistrer</button></div></div></div>');
document.body.insertAdjacentHTML('beforeend','<div class="modal-ov" id="itViewModal" style="align-items:flex-start;overflow-y:auto;padding:20px 16px"><div class="it-view-wrap"><div class="it-view-hdr"><div style="flex:1;min-width:0"><div id="it-view-title" style="font-family:var(--font-d),sans-serif;font-size:16px;font-weight:700;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis"></div><div id="it-view-meta" style="font-size:11px;color:var(--muted);margin-top:2px"></div></div><button id="it-view-dl" class="btn btn-secondary" style="font-size:12px;padding:7px 14px">↓ Télécharger</button><button class="btn btn-secondary" onclick="document.getElementById(\'itViewModal\').classList.remove(\'open\')" style="font-size:18px;padding:7px 13px">✕</button></div><div class="it-view-body" id="it-view-body"></div></div></div>');

/* 3 — BOUTONS */
function injectBtns(){
  var topbar=document.querySelector('.topbar-right');
  if(!topbar)return;
  var syncBtn=topbar.querySelector('.btn-secondary');
  if(!syncBtn)return;
  var btnIT=document.createElement('button');
  btnIT.className='btn btn-secondary no-print';
  btnIT.style.cssText='border-color:rgba(34,211,238,.4);color:#22D3EE;font-weight:700;gap:7px';
  btnIT.innerHTML='<svg style="width:14px;height:14px;stroke:currentColor;stroke-width:1.8;fill:none" viewBox="0 0 16 16"><path d="M3 2h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/><path d="M5 5h6M5 8h6M5 11h3"/></svg> Inspection du Travail';
  btnIT.onclick=function(){itOpen();};
  topbar.insertBefore(btnIT,syncBtn);
  var btnFP=document.createElement('button');
  btnFP.className='btn btn-secondary no-print';
  btnFP.style.cssText='border-color:rgba(245,196,0,.4);color:#F5C400;font-weight:700;gap:7px';
  btnFP.innerHTML='<svg style="width:14px;height:14px;stroke:currentColor;stroke-width:1.8;fill:none" viewBox="0 0 16 16"><rect x="1" y="2" width="14" height="12" rx="2"/><path d="M4 6h8M4 9h5M4 12h3"/></svg> Feuille de pr\u00e9sence';
  btnFP.onclick=function(){document.getElementById('fpModal').classList.add('open');fpInit();};
  topbar.insertBefore(btnFP,syncBtn);
}

/* 4 — FERMETURE */
['fpModal','itModal','itAddModal','itViewModal'].forEach(function(id){
  var el=document.getElementById(id);
  if(el)el.addEventListener('click',function(e){if(e.target===this)this.classList.remove('open');});
});

/* 5 — FP */

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


/* 6 — IT */
var IT_CATS={
  cse:{l:'CSE — Ordinaire',c:'#3B82F6'},
  cse_extra:{l:'CSE — Extraordinaire',c:'#2563EB'},
  cssct:{l:'CSSCT',c:'#22C55E'},
  formation:{l:'Commission Formation',c:'#E03A47'},
  eco:{l:'Commission Économique',c:'#1F5C99'},
  duerp:{l:'Commission DUERP',c:'#0E6655'},
  papripact:{l:'Commission PAPRIPACT',c:'#B45309'},
  egalite:{l:'Égalité Professionnelle',c:'#A855F7'},
  nao:{l:'NAO / Négociation',c:'#0D9488'},
  pse:{l:'PSE',c:'#EA580C'},
  accords:{l:"Accords d'entreprise",c:'#0891B2'},
  heures:{l:'Heures de délégation',c:'#EAB308'},
  harcelement:{l:'Harcèlement / Discrimination',c:'#E03A47'},
  salaire:{l:'Salaire / Prime / Intéressement',c:'#06B6D4'},
  securite:{l:'Sécurité / AT / MP',c:'#F97316'},
  csec:{l:'CSE Central',c:'#1A3A6C'},
  autre:{l:'Autre',c:'#6B7280'},
};

var IT_ST={
  envoye:{l:'Envoy\u00e9',cls:'env',i:'📤'},
  repondu:{l:'R\u00e9pondu',cls:'rep',i:'✅'},
  relance:{l:'Relanc\u00e9',cls:'rel',i:'⚠️'},
  classe:{l:'Class\u00e9',cls:'cls',i:'📁'}
};
var itData=[],itCurFilter='all',itFileTemp=null;

function itLoad(){try{itData=JSON.parse(localStorage.getItem('fo_it')||'[]');}catch(e){itData=[];}}
function itStore(){localStorage.setItem('fo_it',JSON.stringify(itData));}
function itFmt(ds){if(!ds)return'—';return new Date(ds+'T12:00:00').toLocaleDateString('fr-FR',{day:'2-digit',month:'short',year:'numeric'});}

function itSetFilter(f,btn){
  itCurFilter=f;
  document.querySelectorAll('.it-filter').forEach(function(b){b.classList.remove('on');});
  if(btn)btn.classList.add('on');
  itRender();
}

function itRender(){
  var list=[].concat(itData);
  var q=(document.getElementById('it-q')||{value:''}).value.toLowerCase();
  if(itCurFilter!=='all')list=list.filter(function(c){return c.cat===itCurFilter;});
  if(q)list=list.filter(function(c){return [c.objet,c.ref,c.desc,c.dest,c.refs,c.rep].filter(Boolean).join(' ').toLowerCase().indexOf(q)>-1;});
  list.sort(function(a,b){return new Date(b.date)-new Date(a.date);});
  var sb=document.getElementById('it-stats');
  if(sb){
    var tot=itData.length,att=itData.filter(function(c){return c.statut==='envoye';}).length,
        rep=itData.filter(function(c){return c.statut==='repondu';}).length,
        rel=itData.filter(function(c){return c.statut==='relance';}).length;
    sb.innerHTML=[{v:tot,l:'Total',c:'#22D3EE'},{v:att,l:'En attente',c:'#3B82F6'},{v:rep,l:'R\u00e9pondus',c:'#22C55E'},{v:rel,l:'Relanc\u00e9s',c:'#EAB308'}]
      .map(function(s){return '<div class="it-stat" style="--its-c:'+s.c+'"><div class="it-stat-val" style="color:'+s.c+'">'+s.v+'</div><div class="it-stat-lbl">'+s.l+'</div></div>';}).join('');
  }
  var el=document.getElementById('it-list');
  if(!el)return;
  if(!list.length){el.innerHTML='<div class="it-empty">Aucun courrier\u2014 cliquez \ufe0f Nouveau courrier</div>';return;}
  el.innerHTML=list.map(function(c,i){
    var cat=IT_CATS[c.cat]||IT_CATS.autre;
    var st=IT_ST[c.statut]||IT_ST.envoye;
    var ext=c.fileName?(c.fileName.split('.').pop().toLowerCase()):'';
    var fileIco={'pdf':'📄','docx':'📝','doc':'📝','jpg':'🖼️','jpeg':'🖼️','png':'🖼️','xlsx':'📊','xls':'📊'}[ext]||'📎';
    return '<div class="it-card" style="--itc:'+cat.c+'" onclick="itView(\''+c.id+'\')">'
      +'<div class="it-card-top">'
        +'<span class="it-badge" style="background:'+cat.c+'">'+cat.l+'</span>'
        +'<span class="it-title">'+c.objet+'</span>'
        +'<span class="it-st '+st.cls+'">'+st.i+' '+st.l+'</span>'
        +'<span class="it-date">'+itFmt(c.date)+'</span>'
      +'</div>'
      +(c.ref||c.refs?'<div class="it-meta">'+(c.ref?'R\u00e9f. '+c.ref:'')+(c.refs?' \u00b7 '+c.refs:'')+'</div>':'')
      +(c.dest?'<div class="it-meta">\u2192 '+c.dest+'</div>':'')
      +(c.desc?'<div class="it-desc">'+c.desc+'</div>':'')
      +(c.rep?'<div style="margin-top:8px;padding:8px 12px;background:rgba(34,197,94,.06);border:1px solid rgba(34,197,94,.2);border-radius:6px;font-size:11.5px;color:#4ADE80"><strong>R\u00e9ponse :</strong> '+c.rep+'</div>':'')
      +(c.fileData?'<div class="it-has-file">'+fileIco+' '+c.fileName+'</div>':'')
      +'<div class="it-acts" onclick="event.stopPropagation()">'
        +'<button class="ibtn" onclick="itEdit(\''+c.id+'\')" title="Modifier">\u270f</button>'
        +'<button class="ibtn del" onclick="itDel(\''+c.id+'\')" title="Supprimer">\u2715</button>'
      +'</div>'
    +'</div>';
  }).join('');
}

/* ── FICHIER JOINT ── */
function itHandleFile(input){
  var file=input.files[0];if(!file)return;
  var ext=file.name.split('.').pop().toLowerCase();
  var icons={pdf:'📄',docx:'📝',doc:'📝',jpg:'🖼️',jpeg:'🖼️',png:'🖼️',xlsx:'📊',xls:'📊'};
  var reader=new FileReader();
  reader.onload=function(e){
    itFileTemp={data:e.target.result,name:file.name,size:file.size,ext:ext};
    var zone=document.getElementById('it-file-zone');
    if(zone)zone.classList.add('has');
    var fn=document.getElementById('it-file-name');if(fn)fn.textContent=file.name;
    var fs=document.getElementById('it-file-sub');if(fs)fs.textContent=Math.round(file.size/1024)+' Ko \u00b7 '+ext.toUpperCase();
    var fi=document.getElementById('it-file-ico-el');if(fi)fi.textContent=icons[ext]||'📎';
  };
  reader.readAsDataURL(file);
}
function itClearFile(){
  itFileTemp=null;
  var zone=document.getElementById('it-file-zone');if(zone)zone.classList.remove('has');
  var fn=document.getElementById('it-file-name');if(fn)fn.textContent='Cliquer pour joindre le courrier';
  var fs=document.getElementById('it-file-sub');if(fs)fs.textContent='PDF, Word, image \u2014 max 10 Mo';
  var fi=document.getElementById('it-file-ico-el');if(fi)fi.textContent='📎';
  var inp=document.getElementById('it-file-input');if(inp)inp.value='';
}

function itOpenAdd(){
  document.getElementById('it-modal-title').textContent='Nouveau courrier';
  document.getElementById('it-eid').value='';
  ['it-objet','it-ref','it-refs','it-desc','it-rep'].forEach(function(id){var e=document.getElementById(id);if(e)e.value='';});
  document.getElementById('it-date').valueAsDate=new Date();
  document.getElementById('it-dest').value='DDETS UC2 Pas-de-Calais \u2014 Inspection du Travail';
  document.getElementById('it-cat').value='cse';
  document.getElementById('it-statut').value='envoye';
  itClearFile();
  document.getElementById('itAddModal').classList.add('open');
}

function itSave(){
  var objet=document.getElementById('it-objet').value.trim();
  var date=document.getElementById('it-date').value;
  if(!objet||!date){if(typeof toast==='function')toast('Objet et date requis','e');return;}
  var eid=document.getElementById('it-eid').value;
  var existing=eid?itData.find(function(c){return c.id===eid;}):null;
  var obj={
    id:eid||Date.now().toString(),objet:objet,date:date,
    ref:document.getElementById('it-ref').value.trim(),
    cat:document.getElementById('it-cat').value,
    statut:document.getElementById('it-statut').value,
    dest:document.getElementById('it-dest').value.trim(),
    refs:document.getElementById('it-refs').value.trim(),
    desc:document.getElementById('it-desc').value.trim(),
    rep:document.getElementById('it-rep').value.trim(),
    fileData:itFileTemp?itFileTemp.data:(existing?existing.fileData:null),
    fileName:itFileTemp?itFileTemp.name:(existing?existing.fileName:null)
  };
  if(eid){itData=itData.map(function(c){return c.id===eid?obj:c;});}
  else{itData.push(obj);}
  itStore();
  document.getElementById('itAddModal').classList.remove('open');
  itRender();
  if(typeof toast==='function')toast(eid?'Courrier modifi\u00e9':'Courrier enregistr\u00e9','s');
}

function itEdit(id){
  var c=itData.find(function(x){return x.id===id;});if(!c)return;
  document.getElementById('it-modal-title').textContent='Modifier le courrier';
  document.getElementById('it-eid').value=c.id;
  document.getElementById('it-objet').value=c.objet||'';
  document.getElementById('it-date').value=c.date||'';
  document.getElementById('it-ref').value=c.ref||'';
  document.getElementById('it-cat').value=c.cat||'cse';
  document.getElementById('it-statut').value=c.statut||'envoye';
  document.getElementById('it-dest').value=c.dest||'';
  document.getElementById('it-refs').value=c.refs||'';
  document.getElementById('it-desc').value=c.desc||'';
  document.getElementById('it-rep').value=c.rep||'';
  if(c.fileData){
    var ext=(c.fileName||'').split('.').pop().toLowerCase();
    var icons={pdf:'📄',docx:'📝',doc:'📝',jpg:'🖼️',jpeg:'🖼️',png:'🖼️',xlsx:'📊',xls:'📊'};
    itFileTemp={data:c.fileData,name:c.fileName,size:0,ext:ext};
    var zone=document.getElementById('it-file-zone');if(zone)zone.classList.add('has');
    var fn=document.getElementById('it-file-name');if(fn)fn.textContent=c.fileName||'Fichier joint';
    var fs=document.getElementById('it-file-sub');if(fs)fs.textContent='Fichier existant';
    var fi=document.getElementById('it-file-ico-el');if(fi)fi.textContent=icons[ext]||'📎';
  }else{itClearFile();}
  document.getElementById('itAddModal').classList.add('open');
}

function itDel(id){
  if(!confirm('Supprimer ce courrier ?'))return;
  itData=itData.filter(function(c){return c.id!==id;});
  itStore();itRender();
  if(typeof toast==='function')toast('Courrier supprim\u00e9','i');
}

/* ── VISIONNAGE ── */
function itView(id){
  var c=itData.find(function(x){return x.id===id;});if(!c)return;
  var cat=IT_CATS[c.cat]||IT_CATS.autre;
  var st=IT_ST[c.statut]||IT_ST.envoye;
  document.getElementById('it-view-title').textContent=c.objet;
  document.getElementById('it-view-meta').textContent=(cat.l)+' \u00b7 '+itFmt(c.date)+' \u00b7 '+st.i+' '+st.l;
  var dlBtn=document.getElementById('it-view-dl');
  if(c.fileData){
    dlBtn.style.display='';
    dlBtn.onclick=function(){var a=document.createElement('a');a.href=c.fileData;a.download=c.fileName||c.objet;a.click();};
  }else{dlBtn.style.display='none';}
  itViewRender(c);
  document.getElementById('itViewModal').classList.add('open');
}

function itViewRender(c){
  var body=document.getElementById('it-view-body');
  if(!body)return;
  body.innerHTML='';
  if(!c.fileData){
    body.innerHTML='<div class="no-prev"><div class="ico">📭</div><p>Aucun fichier joint \u00e0 ce courrier.</p><p style="font-size:12px;margin-top:8px;color:var(--muted)">Modifiez le courrier pour y joindre un document.</p></div>';
    return;
  }
  var ext=(c.fileName||'').split('.').pop().toLowerCase();
  var mime=c.fileData.split(';')[0].split(':')[1]||'';
  if(mime==='application/pdf'||ext==='pdf'){
    /* PDF — iframe */
    var ifr=document.createElement('iframe');
    ifr.src=c.fileData;
    ifr.style.cssText='width:100%;min-height:600px;border:none;border-radius:8px;background:#fff';
    body.appendChild(ifr);
  } else if(mime.startsWith('image/')||['jpg','jpeg','png','gif','webp'].indexOf(ext)>-1){
    /* Image */
    var img=document.createElement('img');
    img.src=c.fileData;img.style.cssText='max-width:100%;border-radius:8px;box-shadow:0 8px 32px rgba(0,0,0,.5)';
    body.style.textAlign='center';
    body.appendChild(img);
  } else if(ext==='docx'||ext==='doc'){
    /* DOCX — mammoth.js */
    body.innerHTML='<div style="text-align:center;padding:40px;color:var(--muted)"><div style="font-size:32px;margin-bottom:12px">\u23f3</div>Conversion Word en cours...</div>';
    if(typeof mammoth==='undefined'){
      var scr=document.createElement('script');
      scr.src='https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js';
      scr.onload=function(){itRenderDocx(c.fileData,body);};
      scr.onerror=function(){itDocxFallback(body,c);};
      document.head.appendChild(scr);
    }else{itRenderDocx(c.fileData,body);}
  } else {
    body.innerHTML='<div class="no-prev"><div class="ico">📄</div><p style="color:var(--text);font-size:14px;font-weight:600">'+( c.fileName||'Fichier joint')+'</p><p style="margin-top:8px">Ce format ne peut pas \u00eatre pr\u00e9visualis\u00e9 ici.</p><p style="margin-top:4px;font-size:12px">Utilisez le bouton T\u00e9l\u00e9charger.</p></div>';
  }
}

function itRenderDocx(dataUrl,body){
  try{
    var base64=dataUrl.split(',')[1];
    var bin=atob(base64);
    var arr=new Uint8Array(bin.length);
    for(var i=0;i<bin.length;i++)arr[i]=bin.charCodeAt(i);
    mammoth.convertToHtml({arrayBuffer:arr.buffer}).then(function(result){
      var div=document.createElement('div');
      div.className='docx-render';
      div.innerHTML=result.value;
      body.innerHTML='';
      body.appendChild(div);
    }).catch(function(){itDocxFallback(body,null);});
  }catch(e){itDocxFallback(body,null);}
}

function itDocxFallback(body,c){
  body.innerHTML='<div class="no-prev"><div class="ico">📝</div><p style="color:var(--text);font-size:14px;font-weight:600">Fichier Word</p><p style="margin-top:8px">La pr\u00e9visualisation Word n\u2019est pas disponible.</p><p style="margin-top:4px;font-size:12px">Utilisez le bouton T\u00e9l\u00e9charger pour ouvrir dans Word.</p></div>';
}

function itOpen(){itLoad();itRender();document.getElementById('itModal').classList.add('open');}
window.itSetFilter=itSetFilter;window.itRender=itRender;window.itOpenAdd=itOpenAdd;
window.itSave=itSave;window.itEdit=itEdit;window.itDel=itDel;window.itOpen=itOpen;
window.itView=itView;window.itHandleFile=itHandleFile;window.itClearFile=itClearFile;


/* 7 — INIT */
if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',injectBtns);
}else{
  injectBtns();
}

})();
