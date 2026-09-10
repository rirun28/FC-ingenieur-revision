// ── SVG Circuit Schemas (static strings) ──────────────
const SCHEMAS = {

  // Loi des nœuds
  noeuds: '<svg viewBox="0 0 260 130" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:260px;display:block;margin:10px auto"><line x1="20" y1="65" x2="124" y2="65" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round"/><polygon points="72,59 87,65 72,71" fill="#22c55e"/><text x="44" y="55" fill="#22c55e" font-size="12" font-family="system-ui,sans-serif">I&#x2081;</text><circle cx="130" cy="65" r="4" fill="#60a5fa"/><line x1="136" y1="65" x2="240" y2="65" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round"/><polygon points="183,59 198,65 183,71" fill="#22c55e"/><text x="200" y="55" fill="#22c55e" font-size="12" font-family="system-ui,sans-serif">I&#x2082;</text><line x1="130" y1="69" x2="130" y2="118" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round"/><polygon points="124,95 130,110 136,95" fill="#22c55e"/><text x="140" y="110" fill="#22c55e" font-size="12" font-family="system-ui,sans-serif">I&#x2083;</text><text x="130" y="18" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="system-ui,sans-serif">I&#x2081; = I&#x2082; + I&#x2083;</text></svg>',

  // Loi des mailles
  mailles: '<svg viewBox="0 0 300 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px;display:block;margin:10px auto"><line x1="40" y1="30" x2="75" y2="30" stroke="#94a3b8" stroke-width="2.5"/><rect x="75" y="22" width="50" height="16" fill="#334155" stroke="#60a5fa" stroke-width="1.5" rx="3"/><text x="100" y="34" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="system-ui,sans-serif">R&#x2081;</text><line x1="125" y1="30" x2="155" y2="30" stroke="#94a3b8" stroke-width="2.5"/><rect x="155" y="22" width="50" height="16" fill="#334155" stroke="#60a5fa" stroke-width="1.5" rx="3"/><text x="180" y="34" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="system-ui,sans-serif">R&#x2082;</text><line x1="205" y1="30" x2="260" y2="30" stroke="#94a3b8" stroke-width="2.5"/><line x1="260" y1="30" x2="260" y2="125" stroke="#94a3b8" stroke-width="2.5"/><line x1="40" y1="125" x2="260" y2="125" stroke="#94a3b8" stroke-width="2.5"/><line x1="40" y1="30" x2="40" y2="52" stroke="#94a3b8" stroke-width="2.5"/><line x1="40" y1="98" x2="40" y2="125" stroke="#94a3b8" stroke-width="2.5"/><circle cx="40" cy="75" r="16" fill="#334155" stroke="#f59e0b" stroke-width="1.5"/><text x="40" y="71" text-anchor="middle" fill="#f59e0b" font-size="10" font-family="system-ui,sans-serif">+</text><text x="40" y="82" text-anchor="middle" fill="#f59e0b" font-size="10" font-family="system-ui,sans-serif">E</text><polygon points="230,24 245,30 230,36" fill="#22c55e"/><text x="246" y="22" fill="#22c55e" font-size="11" font-family="system-ui,sans-serif">I</text><text x="150" y="148" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="system-ui,sans-serif">E - R&#x2081;&#xB7;I - R&#x2082;&#xB7;I = 0</text></svg>',

  // Résistances série
  serie: '<svg viewBox="0 0 300 115" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px;display:block;margin:10px auto"><line x1="40" y1="28" x2="75" y2="28" stroke="#94a3b8" stroke-width="2.5"/><rect x="75" y="20" width="50" height="16" fill="#334155" stroke="#60a5fa" stroke-width="1.5" rx="3"/><text x="100" y="32" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="system-ui,sans-serif">R&#x2081;</text><line x1="125" y1="28" x2="155" y2="28" stroke="#94a3b8" stroke-width="2.5"/><rect x="155" y="20" width="50" height="16" fill="#334155" stroke="#60a5fa" stroke-width="1.5" rx="3"/><text x="180" y="32" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="system-ui,sans-serif">R&#x2082;</text><line x1="205" y1="28" x2="260" y2="28" stroke="#94a3b8" stroke-width="2.5"/><line x1="260" y1="28" x2="260" y2="90" stroke="#94a3b8" stroke-width="2.5"/><line x1="40" y1="90" x2="260" y2="90" stroke="#94a3b8" stroke-width="2.5"/><line x1="40" y1="28" x2="40" y2="50" stroke="#94a3b8" stroke-width="2.5"/><line x1="40" y1="78" x2="40" y2="90" stroke="#94a3b8" stroke-width="2.5"/><circle cx="40" cy="64" r="14" fill="#334155" stroke="#f59e0b" stroke-width="1.5"/><text x="40" y="60" text-anchor="middle" fill="#f59e0b" font-size="10" font-family="system-ui,sans-serif">+</text><text x="40" y="71" text-anchor="middle" fill="#f59e0b" font-size="10" font-family="system-ui,sans-serif">E</text><text x="150" y="108" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="system-ui,sans-serif">R&#x209A;q = R&#x2081; + R&#x2082; (m&#xEA;me courant partout)</text></svg>',

  // Résistances parallèle
  parallele: '<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px;display:block;margin:10px auto"><line x1="40" y1="25" x2="260" y2="25" stroke="#94a3b8" stroke-width="2.5"/><line x1="40" y1="130" x2="260" y2="130" stroke="#94a3b8" stroke-width="2.5"/><line x1="40" y1="25" x2="40" y2="48" stroke="#94a3b8" stroke-width="2.5"/><line x1="40" y1="92" x2="40" y2="130" stroke="#94a3b8" stroke-width="2.5"/><circle cx="40" cy="70" r="16" fill="#334155" stroke="#f59e0b" stroke-width="1.5"/><text x="40" y="66" text-anchor="middle" fill="#f59e0b" font-size="10" font-family="system-ui,sans-serif">+</text><text x="40" y="77" text-anchor="middle" fill="#f59e0b" font-size="10" font-family="system-ui,sans-serif">E</text><line x1="155" y1="25" x2="155" y2="40" stroke="#94a3b8" stroke-width="2.5"/><rect x="147" y="40" width="16" height="40" fill="#334155" stroke="#60a5fa" stroke-width="1.5" rx="3"/><text x="172" y="65" fill="#60a5fa" font-size="11" font-family="system-ui,sans-serif">R&#x2081;</text><line x1="155" y1="80" x2="155" y2="130" stroke="#94a3b8" stroke-width="2.5"/><line x1="215" y1="25" x2="215" y2="40" stroke="#94a3b8" stroke-width="2.5"/><rect x="207" y="40" width="16" height="40" fill="#334155" stroke="#60a5fa" stroke-width="1.5" rx="3"/><text x="232" y="65" fill="#60a5fa" font-size="11" font-family="system-ui,sans-serif">R&#x2082;</text><line x1="215" y1="80" x2="215" y2="130" stroke="#94a3b8" stroke-width="2.5"/><circle cx="155" cy="25" r="4" fill="#60a5fa"/><circle cx="215" cy="25" r="4" fill="#60a5fa"/><circle cx="155" cy="130" r="4" fill="#60a5fa"/><circle cx="215" cy="130" r="4" fill="#60a5fa"/><text x="150" y="150" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="system-ui,sans-serif">1/R&#x209A;q = 1/R&#x2081; + 1/R&#x2082; (m&#xEA;me tension aux bornes)</text></svg>',

  // Pont diviseur de tension
  div_tension: '<svg viewBox="0 0 240 195" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:220px;display:block;margin:10px auto"><line x1="50" y1="18" x2="50" y2="42" stroke="#94a3b8" stroke-width="2.5"/><line x1="50" y1="86" x2="50" y2="175" stroke="#94a3b8" stroke-width="2.5"/><circle cx="50" cy="64" r="16" fill="#334155" stroke="#f59e0b" stroke-width="1.5"/><text x="50" y="60" text-anchor="middle" fill="#f59e0b" font-size="10" font-family="system-ui,sans-serif">+</text><text x="50" y="71" text-anchor="middle" fill="#f59e0b" font-size="10" font-family="system-ui,sans-serif">E</text><line x1="50" y1="18" x2="140" y2="18" stroke="#94a3b8" stroke-width="2.5"/><line x1="140" y1="18" x2="140" y2="55" stroke="#94a3b8" stroke-width="2.5"/><rect x="132" y="55" width="16" height="40" fill="#334155" stroke="#60a5fa" stroke-width="1.5" rx="3"/><text x="158" y="80" fill="#60a5fa" font-size="11" font-family="system-ui,sans-serif">R&#x2081;</text><line x1="140" y1="95" x2="140" y2="110" stroke="#94a3b8" stroke-width="2.5"/><circle cx="140" cy="110" r="4" fill="#60a5fa"/><line x1="140" y1="114" x2="140" y2="130" stroke="#94a3b8" stroke-width="2.5"/><rect x="132" y="130" width="16" height="40" fill="#334155" stroke="#60a5fa" stroke-width="1.5" rx="3"/><text x="158" y="155" fill="#60a5fa" font-size="11" font-family="system-ui,sans-serif">R&#x2082;</text><line x1="140" y1="170" x2="140" y2="175" stroke="#94a3b8" stroke-width="2.5"/><line x1="50" y1="175" x2="140" y2="175" stroke="#94a3b8" stroke-width="2.5"/><line x1="140" y1="110" x2="195" y2="110" stroke="#94a3b8" stroke-width="2.5"/><line x1="140" y1="175" x2="195" y2="175" stroke="#94a3b8" stroke-width="2.5"/><text x="200" y="114" fill="#f59e0b" font-size="13" font-family="system-ui,sans-serif">A</text><text x="200" y="179" fill="#f59e0b" font-size="13" font-family="system-ui,sans-serif">B</text><line x1="192" y1="113" x2="192" y2="173" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3,2"/><text x="175" y="148" fill="#f59e0b" font-size="12" font-family="system-ui,sans-serif">U&#x2082;</text></svg>',

  // Pont diviseur de courant
  div_courant: '<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px;display:block;margin:10px auto"><line x1="30" y1="25" x2="260" y2="25" stroke="#94a3b8" stroke-width="2.5"/><line x1="30" y1="120" x2="260" y2="120" stroke="#94a3b8" stroke-width="2.5"/><line x1="30" y1="25" x2="30" y2="54" stroke="#94a3b8" stroke-width="2.5"/><circle cx="30" cy="72" r="14" fill="#334155" stroke="#22c55e" stroke-width="1.5"/><polygon points="24,72 30,59 36,72" fill="#22c55e"/><text x="8" y="90" fill="#22c55e" font-size="10" font-family="system-ui,sans-serif">I</text><line x1="30" y1="86" x2="30" y2="120" stroke="#94a3b8" stroke-width="2.5"/><line x1="130" y1="25" x2="130" y2="42" stroke="#94a3b8" stroke-width="2.5"/><rect x="122" y="42" width="16" height="38" fill="#334155" stroke="#60a5fa" stroke-width="1.5" rx="3"/><text x="150" y="65" fill="#60a5fa" font-size="11" font-family="system-ui,sans-serif">R&#x2081;</text><line x1="130" y1="80" x2="130" y2="120" stroke="#94a3b8" stroke-width="2.5"/><polygon points="124,42 130,28 136,42" fill="#22c55e"/><text x="98" y="38" fill="#22c55e" font-size="11" font-family="system-ui,sans-serif">I&#x2081;</text><line x1="200" y1="25" x2="200" y2="42" stroke="#94a3b8" stroke-width="2.5"/><rect x="192" y="42" width="16" height="38" fill="#334155" stroke="#60a5fa" stroke-width="1.5" rx="3"/><text x="220" y="65" fill="#60a5fa" font-size="11" font-family="system-ui,sans-serif">R&#x2082;</text><line x1="200" y1="80" x2="200" y2="120" stroke="#94a3b8" stroke-width="2.5"/><polygon points="194,42 200,28 206,42" fill="#22c55e"/><text x="208" y="38" fill="#22c55e" font-size="11" font-family="system-ui,sans-serif">I&#x2082;</text><circle cx="130" cy="25" r="4" fill="#60a5fa"/><circle cx="200" cy="25" r="4" fill="#60a5fa"/><circle cx="130" cy="120" r="4" fill="#60a5fa"/><circle cx="200" cy="120" r="4" fill="#60a5fa"/><text x="150" y="143" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="system-ui,sans-serif">I&#x2081; = R&#x2082;/(R&#x2081;+R&#x2082;)&#xB7;I</text></svg>',

  // Thévenin
  thevenin: '<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px;display:block;margin:10px auto"><text x="25" y="44" fill="#f59e0b" font-size="13" font-family="system-ui,sans-serif">A</text><line x1="40" y1="40" x2="78" y2="40" stroke="#94a3b8" stroke-width="2.5"/><rect x="78" y="32" width="56" height="16" fill="#334155" stroke="#60a5fa" stroke-width="1.5" rx="3"/><text x="106" y="44" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="system-ui,sans-serif">R_th</text><line x1="134" y1="40" x2="210" y2="40" stroke="#94a3b8" stroke-width="2.5"/><line x1="210" y1="40" x2="210" y2="56" stroke="#94a3b8" stroke-width="2.5"/><circle cx="210" cy="75" r="16" fill="#334155" stroke="#f59e0b" stroke-width="1.5"/><text x="210" y="71" text-anchor="middle" fill="#f59e0b" font-size="10" font-family="system-ui,sans-serif">+</text><text x="210" y="82" text-anchor="middle" fill="#f59e0b" font-size="9" font-family="system-ui,sans-serif">E_th</text><line x1="210" y1="91" x2="210" y2="100" stroke="#94a3b8" stroke-width="2.5"/><text x="25" y="104" fill="#f59e0b" font-size="13" font-family="system-ui,sans-serif">B</text><line x1="40" y1="100" x2="210" y2="100" stroke="#94a3b8" stroke-width="2.5"/><rect x="62" y="22" width="162" height="88" fill="none" stroke="#475569" stroke-width="1" stroke-dasharray="4,3" rx="5"/><text x="143" y="15" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="system-ui,sans-serif">&#xC9;quivalent Th&#xE9;venin</text></svg>',

  // Norton
  norton: '<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px;display:block;margin:10px auto"><text x="25" y="44" fill="#f59e0b" font-size="13" font-family="system-ui,sans-serif">A</text><line x1="40" y1="40" x2="260" y2="40" stroke="#94a3b8" stroke-width="2.5"/><text x="25" y="104" fill="#f59e0b" font-size="13" font-family="system-ui,sans-serif">B</text><line x1="40" y1="100" x2="260" y2="100" stroke="#94a3b8" stroke-width="2.5"/><line x1="130" y1="40" x2="130" y2="54" stroke="#94a3b8" stroke-width="2.5"/><circle cx="130" cy="70" r="14" fill="#334155" stroke="#22c55e" stroke-width="1.5"/><polygon points="124,70 130,57 136,70" fill="#22c55e"/><text x="112" y="90" fill="#22c55e" font-size="10" font-family="system-ui,sans-serif">I_N</text><line x1="130" y1="84" x2="130" y2="100" stroke="#94a3b8" stroke-width="2.5"/><line x1="200" y1="40" x2="200" y2="54" stroke="#94a3b8" stroke-width="2.5"/><rect x="192" y="54" width="16" height="38" fill="#334155" stroke="#60a5fa" stroke-width="1.5" rx="3"/><text x="218" y="77" fill="#60a5fa" font-size="11" font-family="system-ui,sans-serif">R_N</text><line x1="200" y1="92" x2="200" y2="100" stroke="#94a3b8" stroke-width="2.5"/><circle cx="130" cy="40" r="4" fill="#60a5fa"/><circle cx="200" cy="40" r="4" fill="#60a5fa"/><circle cx="130" cy="100" r="4" fill="#60a5fa"/><circle cx="200" cy="100" r="4" fill="#60a5fa"/><rect x="105" y="22" width="115" height="88" fill="none" stroke="#475569" stroke-width="1" stroke-dasharray="4,3" rx="5"/><text x="163" y="15" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="system-ui,sans-serif">&#xC9;quivalent Norton</text></svg>',

  // Quiz: nœud avec valeurs
  quiz_noeuds: '<svg viewBox="0 0 240 110" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:220px;display:block;margin:0 auto 12px"><line x1="20" y1="55" x2="114" y2="55" stroke="#94a3b8" stroke-width="2.5"/><polygon points="72,49 87,55 72,61" fill="#22c55e"/><text x="38" y="46" fill="#22c55e" font-size="12" font-family="system-ui,sans-serif">I&#x2081;=3A</text><circle cx="118" cy="55" r="4" fill="#60a5fa"/><line x1="122" y1="55" x2="220" y2="55" stroke="#94a3b8" stroke-width="2.5"/><polygon points="160,49 175,55 160,61" fill="#22c55e"/><text x="170" y="46" fill="#22c55e" font-size="12" font-family="system-ui,sans-serif">I&#x2082;=1A</text><line x1="118" y1="59" x2="118" y2="100" stroke="#94a3b8" stroke-width="2.5"/><text x="128" y="95" fill="#22c55e" font-size="12" font-family="system-ui,sans-serif">I&#x2083;=?</text></svg>',

  // Quiz: diviseur tension avec valeurs
  quiz_div_tension: '<svg viewBox="0 0 200 170" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:185px;display:block;margin:0 auto 12px"><line x1="40" y1="15" x2="40" y2="37" stroke="#94a3b8" stroke-width="2.5"/><line x1="40" y1="83" x2="40" y2="155" stroke="#94a3b8" stroke-width="2.5"/><circle cx="40" cy="60" r="16" fill="#334155" stroke="#f59e0b" stroke-width="1.5"/><text x="40" y="56" text-anchor="middle" fill="#f59e0b" font-size="10" font-family="system-ui,sans-serif">+</text><text x="40" y="67" text-anchor="middle" fill="#f59e0b" font-size="9" font-family="system-ui,sans-serif">20V</text><line x1="40" y1="15" x2="130" y2="15" stroke="#94a3b8" stroke-width="2.5"/><line x1="130" y1="15" x2="130" y2="35" stroke="#94a3b8" stroke-width="2.5"/><rect x="122" y="35" width="16" height="38" fill="#334155" stroke="#60a5fa" stroke-width="1.5" rx="3"/><text x="148" y="58" fill="#60a5fa" font-size="11" font-family="system-ui,sans-serif">4&#x3A9;</text><line x1="130" y1="73" x2="130" y2="85" stroke="#94a3b8" stroke-width="2.5"/><circle cx="130" cy="85" r="4" fill="#60a5fa"/><line x1="130" y1="89" x2="130" y2="105" stroke="#94a3b8" stroke-width="2.5"/><rect x="122" y="105" width="16" height="38" fill="#334155" stroke="#60a5fa" stroke-width="1.5" rx="3"/><text x="148" y="128" fill="#60a5fa" font-size="11" font-family="system-ui,sans-serif">6&#x3A9;</text><line x1="130" y1="143" x2="130" y2="155" stroke="#94a3b8" stroke-width="2.5"/><line x1="40" y1="155" x2="130" y2="155" stroke="#94a3b8" stroke-width="2.5"/><line x1="130" y1="85" x2="175" y2="85" stroke="#94a3b8" stroke-width="2.5"/><line x1="130" y1="155" x2="175" y2="155" stroke="#94a3b8" stroke-width="2.5"/><text x="178" y="89" fill="#f59e0b" font-size="12" font-family="system-ui,sans-serif">A</text><text x="178" y="159" fill="#f59e0b" font-size="12" font-family="system-ui,sans-serif">B</text><text x="160" y="125" fill="#f59e0b" font-size="12" font-family="system-ui,sans-serif">U&#x2082;=?</text></svg>',

  // Quiz: parallèle avec valeurs
  quiz_parallele: '<svg viewBox="0 0 240 130" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:220px;display:block;margin:0 auto 12px"><line x1="30" y1="20" x2="200" y2="20" stroke="#94a3b8" stroke-width="2.5"/><line x1="30" y1="110" x2="200" y2="110" stroke="#94a3b8" stroke-width="2.5"/><line x1="30" y1="20" x2="30" y2="44" stroke="#94a3b8" stroke-width="2.5"/><line x1="30" y1="86" x2="30" y2="110" stroke="#94a3b8" stroke-width="2.5"/><circle cx="30" cy="65" r="14" fill="#334155" stroke="#f59e0b" stroke-width="1.5"/><text x="30" y="61" text-anchor="middle" fill="#f59e0b" font-size="9" font-family="system-ui,sans-serif">+</text><text x="30" y="72" text-anchor="middle" fill="#f59e0b" font-size="9" font-family="system-ui,sans-serif">E</text><line x1="120" y1="20" x2="120" y2="38" stroke="#94a3b8" stroke-width="2.5"/><rect x="112" y="38" width="16" height="38" fill="#334155" stroke="#60a5fa" stroke-width="1.5" rx="3"/><text x="138" y="62" fill="#60a5fa" font-size="11" font-family="system-ui,sans-serif">3&#x3A9;</text><line x1="120" y1="76" x2="120" y2="110" stroke="#94a3b8" stroke-width="2.5"/><line x1="170" y1="20" x2="170" y2="38" stroke="#94a3b8" stroke-width="2.5"/><rect x="162" y="38" width="16" height="38" fill="#334155" stroke="#60a5fa" stroke-width="1.5" rx="3"/><text x="188" y="62" fill="#60a5fa" font-size="11" font-family="system-ui,sans-serif">6&#x3A9;</text><line x1="170" y1="76" x2="170" y2="110" stroke="#94a3b8" stroke-width="2.5"/><circle cx="120" cy="20" r="4" fill="#60a5fa"/><circle cx="170" cy="20" r="4" fill="#60a5fa"/><circle cx="120" cy="110" r="4" fill="#60a5fa"/><circle cx="170" cy="110" r="4" fill="#60a5fa"/><text x="120" y="126" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="system-ui,sans-serif">R_eq = ?</text></svg>',

  // Quiz: Thévenin avec valeurs
  quiz_thevenin: '<svg viewBox="0 0 290 110" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:270px;display:block;margin:0 auto 12px"><text x="5" y="34" fill="#f59e0b" font-size="12" font-family="system-ui,sans-serif">A</text><line x1="20" y1="30" x2="60" y2="30" stroke="#94a3b8" stroke-width="2.5"/><rect x="60" y="22" width="60" height="16" fill="#334155" stroke="#60a5fa" stroke-width="1.5" rx="3"/><text x="90" y="34" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="system-ui,sans-serif">R_th=3&#x3A9;</text><line x1="120" y1="30" x2="180" y2="30" stroke="#94a3b8" stroke-width="2.5"/><line x1="180" y1="30" x2="180" y2="44" stroke="#94a3b8" stroke-width="2.5"/><circle cx="180" cy="62" r="14" fill="#334155" stroke="#f59e0b" stroke-width="1.5"/><text x="180" y="58" text-anchor="middle" fill="#f59e0b" font-size="9" font-family="system-ui,sans-serif">+</text><text x="180" y="69" text-anchor="middle" fill="#f59e0b" font-size="8" font-family="system-ui,sans-serif">12V</text><line x1="180" y1="76" x2="180" y2="90" stroke="#94a3b8" stroke-width="2.5"/><text x="5" y="94" fill="#f59e0b" font-size="12" font-family="system-ui,sans-serif">B</text><line x1="20" y1="90" x2="180" y2="90" stroke="#94a3b8" stroke-width="2.5"/><line x1="20" y1="30" x2="20" y2="44" stroke="#94a3b8" stroke-width="2.5"/><line x1="20" y1="76" x2="20" y2="90" stroke="#94a3b8" stroke-width="2.5"/><rect x="12" y="44" width="16" height="32" fill="#334155" stroke="#60a5fa" stroke-width="1.5" rx="3"/><text x="-2" y="66" fill="#60a5fa" font-size="9" font-family="system-ui,sans-serif">9&#x3A9;</text><text x="220" y="65" fill="#22c55e" font-size="11" font-family="system-ui,sans-serif">I = ?</text></svg>',

  // Quiz: diviseur courant avec valeurs
  quiz_div_courant: '<svg viewBox="0 0 260 130" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:240px;display:block;margin:0 auto 12px"><line x1="20" y1="25" x2="230" y2="25" stroke="#94a3b8" stroke-width="2.5"/><line x1="20" y1="105" x2="230" y2="105" stroke="#94a3b8" stroke-width="2.5"/><line x1="20" y1="25" x2="20" y2="44" stroke="#94a3b8" stroke-width="2.5"/><circle cx="20" cy="62" r="14" fill="#334155" stroke="#22c55e" stroke-width="1.5"/><polygon points="14,62 20,49 26,62" fill="#22c55e"/><text x="2" y="80" fill="#22c55e" font-size="10" font-family="system-ui,sans-serif">6A</text><line x1="20" y1="76" x2="20" y2="105" stroke="#94a3b8" stroke-width="2.5"/><line x1="110" y1="25" x2="110" y2="42" stroke="#94a3b8" stroke-width="2.5"/><rect x="102" y="42" width="16" height="38" fill="#334155" stroke="#60a5fa" stroke-width="1.5" rx="3"/><text x="128" y="66" fill="#60a5fa" font-size="11" font-family="system-ui,sans-serif">2&#x3A9;</text><line x1="110" y1="80" x2="110" y2="105" stroke="#94a3b8" stroke-width="2.5"/><polygon points="104,42 110,28 116,42" fill="#22c55e"/><text x="75" y="36" fill="#22c55e" font-size="11" font-family="system-ui,sans-serif">I&#x2081;=?</text><line x1="180" y1="25" x2="180" y2="42" stroke="#94a3b8" stroke-width="2.5"/><rect x="172" y="42" width="16" height="38" fill="#334155" stroke="#60a5fa" stroke-width="1.5" rx="3"/><text x="198" y="66" fill="#60a5fa" font-size="11" font-family="system-ui,sans-serif">4&#x3A9;</text><line x1="180" y1="80" x2="180" y2="105" stroke="#94a3b8" stroke-width="2.5"/><circle cx="110" cy="25" r="4" fill="#60a5fa"/><circle cx="180" cy="25" r="4" fill="#60a5fa"/><circle cx="110" cy="105" r="4" fill="#60a5fa"/><circle cx="180" cy="105" r="4" fill="#60a5fa"/></svg>',

  // Dérivée : tangente à la courbe
  tangente: '<svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:280px;display:block;margin:10px auto"><line x1="30" y1="155" x2="265" y2="155" stroke="#475569" stroke-width="1.5"/><line x1="45" y1="20" x2="45" y2="165" stroke="#475569" stroke-width="1.5"/><text x="258" y="170" fill="#94a3b8" font-size="11" font-family="system-ui,sans-serif">x</text><text x="30" y="28" fill="#94a3b8" font-size="11" font-family="system-ui,sans-serif">y</text><path d="M55 145 Q140 145 180 60 T255 30" fill="none" stroke="#60a5fa" stroke-width="2.5"/><line x1="120" y1="135" x2="220" y2="55" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5,3"/><circle cx="170" cy="95" r="4.5" fill="#22c55e"/><text x="176" y="92" fill="#22c55e" font-size="11" font-family="system-ui,sans-serif">(x&#x2080;, f(x&#x2080;))</text><text x="150" y="50" fill="#f59e0b" font-size="11" font-family="system-ui,sans-serif">pente = f\'(x&#x2080;)</text><text x="60" y="135" fill="#60a5fa" font-size="11" font-family="system-ui,sans-serif">C_f</text></svg>',

  // Intégrale : aire sous la courbe
  aire: '<svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:280px;display:block;margin:10px auto"><line x1="30" y1="150" x2="265" y2="150" stroke="#475569" stroke-width="1.5"/><line x1="45" y1="20" x2="45" y2="160" stroke="#475569" stroke-width="1.5"/><text x="258" y="166" fill="#94a3b8" font-size="11" font-family="system-ui,sans-serif">x</text><path d="M90 150 L90 95 Q140 55 200 80 L200 150 Z" fill="#3b82f6" fill-opacity="0.25" stroke="none"/><path d="M55 120 Q120 50 200 80 T255 60" fill="none" stroke="#60a5fa" stroke-width="2.5"/><line x1="90" y1="150" x2="90" y2="95" stroke="#22c55e" stroke-width="1.5"/><line x1="200" y1="150" x2="200" y2="80" stroke="#22c55e" stroke-width="1.5"/><text x="84" y="165" fill="#22c55e" font-size="12" font-family="system-ui,sans-serif">a</text><text x="195" y="165" fill="#22c55e" font-size="12" font-family="system-ui,sans-serif">b</text><text x="120" y="125" fill="#dbeafe" font-size="12" font-family="system-ui,sans-serif">aire</text><text x="120" y="140" fill="#dbeafe" font-size="11" font-family="system-ui,sans-serif">= &#x222B; f</text></svg>',

  // Règle de Sarrus (déterminant 3x3)
  sarrus: '<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px;display:block;margin:10px auto"><text x="150" y="16" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="system-ui,sans-serif">Recopier les 2 premi&#xE8;res colonnes</text><g font-family="system-ui,sans-serif" font-size="14" fill="#e2e8f0" text-anchor="middle"><text x="50" y="55">a</text><text x="90" y="55">b</text><text x="130" y="55">c</text><text x="180" y="55">a</text><text x="220" y="55">b</text><text x="50" y="90">d</text><text x="90" y="90">e</text><text x="130" y="90">f</text><text x="180" y="90">d</text><text x="220" y="90">e</text><text x="50" y="125">g</text><text x="90" y="125">h</text><text x="130" y="125">i</text><text x="180" y="125">g</text><text x="220" y="125">h</text></g><line x1="42" y1="44" x2="138" y2="132" stroke="#22c55e" stroke-width="1.5" opacity="0.7"/><line x1="82" y1="44" x2="228" y2="132" stroke="#22c55e" stroke-width="1.5" opacity="0.7"/><line x1="122" y1="44" x2="228" y2="92" stroke="#22c55e" stroke-width="1.5" opacity="0.7"/><line x1="42" y1="132" x2="138" y2="44" stroke="#ef4444" stroke-width="1.5" opacity="0.7"/><line x1="82" y1="132" x2="228" y2="44" stroke="#ef4444" stroke-width="1.5" opacity="0.7"/><line x1="122" y1="92" x2="228" y2="44" stroke="#ef4444" stroke-width="1.5" opacity="0.7"/><text x="80" y="152" fill="#22c55e" font-size="10" font-family="system-ui,sans-serif">+ descendantes</text><text x="200" y="152" fill="#ef4444" font-size="10" font-family="system-ui,sans-serif">&#x2212; montantes</text></svg>',

  // Cercle trigonométrique avec valeurs cos/sin
  cercle_trigo: '<svg viewBox="0 0 460 440" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:460px;display:block;margin:10px auto" font-family="system-ui,sans-serif"><line x1="40" y1="215" x2="420" y2="215" stroke="#475569" stroke-width="1"/><line x1="230" y1="25" x2="230" y2="405" stroke="#475569" stroke-width="1"/><text x="425" y="219" fill="#94a3b8" font-size="12">cos</text><text x="218" y="22" fill="#94a3b8" font-size="12">sin</text><circle cx="230" cy="215" r="165" fill="none" stroke="#60a5fa" stroke-width="2"/><line x1="230" y1="215" x2="395.0" y2="215.0" stroke="#334155" stroke-width="1"/><circle cx="395.0" cy="215.0" r="3.5" fill="#f59e0b"/><text x="417.0" y="219.0" fill="#22c55e" font-size="11" text-anchor="start">0</text><text x="365.0" y="218.0" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(1; 0)</text><line x1="230" y1="215" x2="372.9" y2="132.5" stroke="#334155" stroke-width="1"/><circle cx="372.9" cy="132.5" r="3.5" fill="#f59e0b"/><text x="391.9" y="125.5" fill="#22c55e" font-size="11" text-anchor="start">&#x3C0;/6</text><text x="346.9" y="150.5" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(&#x221A;3/2; 1/2)</text><line x1="230" y1="215" x2="346.7" y2="98.3" stroke="#334155" stroke-width="1"/><circle cx="346.7" cy="98.3" r="3.5" fill="#f59e0b"/><text x="362.2" y="86.8" fill="#22c55e" font-size="11" text-anchor="start">&#x3C0;/4</text><text x="325.5" y="122.5" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(&#x221A;2/2; &#x221A;2/2)</text><line x1="230" y1="215" x2="312.5" y2="72.1" stroke="#334155" stroke-width="1"/><circle cx="312.5" cy="72.1" r="3.5" fill="#f59e0b"/><text x="323.5" y="57.1" fill="#22c55e" font-size="11" text-anchor="start">&#x3C0;/3</text><text x="297.5" y="101.1" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(1/2; &#x221A;3/2)</text><line x1="230" y1="215" x2="230.0" y2="50.0" stroke="#334155" stroke-width="1"/><circle cx="230.0" cy="50.0" r="3.5" fill="#f59e0b"/><text x="230.0" y="32.0" fill="#22c55e" font-size="11" text-anchor="middle">&#x3C0;/2</text><text x="230.0" y="83.0" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(0; 1)</text><line x1="230" y1="215" x2="147.5" y2="72.1" stroke="#334155" stroke-width="1"/><circle cx="147.5" cy="72.1" r="3.5" fill="#f59e0b"/><text x="136.5" y="57.1" fill="#22c55e" font-size="11" text-anchor="end">2&#x3C0;/3</text><text x="162.5" y="101.1" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(-1/2; &#x221A;3/2)</text><line x1="230" y1="215" x2="113.3" y2="98.3" stroke="#334155" stroke-width="1"/><circle cx="113.3" cy="98.3" r="3.5" fill="#f59e0b"/><text x="97.8" y="86.8" fill="#22c55e" font-size="11" text-anchor="end">3&#x3C0;/4</text><text x="134.5" y="122.5" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(-&#x221A;2/2; &#x221A;2/2)</text><line x1="230" y1="215" x2="87.1" y2="132.5" stroke="#334155" stroke-width="1"/><circle cx="87.1" cy="132.5" r="3.5" fill="#f59e0b"/><text x="68.1" y="125.5" fill="#22c55e" font-size="11" text-anchor="end">5&#x3C0;/6</text><text x="113.1" y="150.5" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(-&#x221A;3/2; 1/2)</text><line x1="230" y1="215" x2="65.0" y2="215.0" stroke="#334155" stroke-width="1"/><circle cx="65.0" cy="215.0" r="3.5" fill="#f59e0b"/><text x="43.0" y="219.0" fill="#22c55e" font-size="11" text-anchor="end">&#x3C0;</text><text x="95.0" y="218.0" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(-1; 0)</text><line x1="230" y1="215" x2="87.1" y2="297.5" stroke="#334155" stroke-width="1"/><circle cx="87.1" cy="297.5" r="3.5" fill="#f59e0b"/><text x="68.1" y="312.5" fill="#22c55e" font-size="11" text-anchor="end">7&#x3C0;/6</text><text x="113.1" y="285.5" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(-&#x221A;3/2; -1/2)</text><line x1="230" y1="215" x2="113.3" y2="331.7" stroke="#334155" stroke-width="1"/><circle cx="113.3" cy="331.7" r="3.5" fill="#f59e0b"/><text x="97.8" y="351.2" fill="#22c55e" font-size="11" text-anchor="end">5&#x3C0;/4</text><text x="134.5" y="313.5" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(-&#x221A;2/2; -&#x221A;2/2)</text><line x1="230" y1="215" x2="147.5" y2="357.9" stroke="#334155" stroke-width="1"/><circle cx="147.5" cy="357.9" r="3.5" fill="#f59e0b"/><text x="136.5" y="380.9" fill="#22c55e" font-size="11" text-anchor="end">4&#x3C0;/3</text><text x="162.5" y="334.9" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(-1/2; -&#x221A;3/2)</text><line x1="230" y1="215" x2="230.0" y2="380.0" stroke="#334155" stroke-width="1"/><circle cx="230.0" cy="380.0" r="3.5" fill="#f59e0b"/><text x="230.0" y="406.0" fill="#22c55e" font-size="11" text-anchor="middle">3&#x3C0;/2</text><text x="230.0" y="353.0" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(0; -1)</text><line x1="230" y1="215" x2="312.5" y2="357.9" stroke="#334155" stroke-width="1"/><circle cx="312.5" cy="357.9" r="3.5" fill="#f59e0b"/><text x="323.5" y="380.9" fill="#22c55e" font-size="11" text-anchor="start">5&#x3C0;/3</text><text x="297.5" y="334.9" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(1/2; -&#x221A;3/2)</text><line x1="230" y1="215" x2="346.7" y2="331.7" stroke="#334155" stroke-width="1"/><circle cx="346.7" cy="331.7" r="3.5" fill="#f59e0b"/><text x="362.2" y="351.2" fill="#22c55e" font-size="11" text-anchor="start">7&#x3C0;/4</text><text x="325.5" y="313.5" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(&#x221A;2/2; -&#x221A;2/2)</text><line x1="230" y1="215" x2="372.9" y2="297.5" stroke="#334155" stroke-width="1"/><circle cx="372.9" cy="297.5" r="3.5" fill="#f59e0b"/><text x="391.9" y="312.5" fill="#22c55e" font-size="11" text-anchor="start">11&#x3C0;/6</text><text x="346.9" y="285.5" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(&#x221A;3/2; -1/2)</text><text x="230" y="232" fill="#64748b" font-size="9" text-anchor="middle">(cos; sin)</text></svg>',

  // Mailles cubiques CC et CFC
  mailles_cubiques: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px;display:block;margin:10px auto" font-family="system-ui,sans-serif"><g><text x="70" y="20" text-anchor="middle" fill="#e2e8f0" font-size="12">Cubique Centrée (CC)</text><polygon points="30,60 100,60 100,130 30,130" fill="none" stroke="#475569" stroke-width="1.2"/><polygon points="50,45 120,45 120,115 50,115" fill="none" stroke="#475569" stroke-width="1.2"/><line x1="30" y1="60" x2="50" y2="45" stroke="#475569" stroke-width="1.2"/><line x1="100" y1="60" x2="120" y2="45" stroke="#475569" stroke-width="1.2"/><line x1="30" y1="130" x2="50" y2="115" stroke="#475569" stroke-width="1.2"/><line x1="100" y1="130" x2="120" y2="115" stroke="#475569" stroke-width="1.2"/><circle cx="30" cy="60" r="5" fill="#60a5fa"/><circle cx="100" cy="60" r="5" fill="#60a5fa"/><circle cx="30" cy="130" r="5" fill="#60a5fa"/><circle cx="100" cy="130" r="5" fill="#60a5fa"/><circle cx="50" cy="45" r="5" fill="#60a5fa"/><circle cx="120" cy="45" r="5" fill="#60a5fa"/><circle cx="50" cy="115" r="5" fill="#60a5fa"/><circle cx="120" cy="115" r="5" fill="#60a5fa"/><circle cx="75" cy="87" r="5.5" fill="#f59e0b"/><text x="75" y="155" text-anchor="middle" fill="#94a3b8" font-size="9">2 motifs · C=0,68</text><text x="75" y="167" text-anchor="middle" fill="#94a3b8" font-size="9">coordinence 8</text></g><g><text x="245" y="20" text-anchor="middle" fill="#e2e8f0" font-size="12">Faces Centrées (CFC)</text><polygon points="205,60 275,60 275,130 205,130" fill="none" stroke="#475569" stroke-width="1.2"/><polygon points="225,45 295,45 295,115 225,115" fill="none" stroke="#475569" stroke-width="1.2"/><line x1="205" y1="60" x2="225" y2="45" stroke="#475569" stroke-width="1.2"/><line x1="275" y1="60" x2="295" y2="45" stroke="#475569" stroke-width="1.2"/><line x1="205" y1="130" x2="225" y2="115" stroke="#475569" stroke-width="1.2"/><line x1="275" y1="130" x2="295" y2="115" stroke="#475569" stroke-width="1.2"/><circle cx="205" cy="60" r="5" fill="#60a5fa"/><circle cx="275" cy="60" r="5" fill="#60a5fa"/><circle cx="205" cy="130" r="5" fill="#60a5fa"/><circle cx="275" cy="130" r="5" fill="#60a5fa"/><circle cx="225" cy="45" r="5" fill="#60a5fa"/><circle cx="295" cy="45" r="5" fill="#60a5fa"/><circle cx="225" cy="115" r="5" fill="#60a5fa"/><circle cx="295" cy="115" r="5" fill="#60a5fa"/><circle cx="240" cy="95" r="5.5" fill="#22c55e"/><circle cx="260" cy="72" r="5.5" fill="#22c55e"/><circle cx="240" cy="130" r="5.5" fill="#22c55e"/><circle cx="205" cy="95" r="5.5" fill="#22c55e"/><text x="250" y="155" text-anchor="middle" fill="#94a3b8" font-size="9">4 motifs · C=0,74</text><text x="250" y="167" text-anchor="middle" fill="#94a3b8" font-size="9">coordinence 12</text></g></svg>',

  // Dôme de vapeur (diagramme T-v)
  dome_vapeur: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px;display:block;margin:10px auto" font-family="system-ui,sans-serif"><line x1="35" y1="185" x2="305" y2="185" stroke="#475569" stroke-width="1.5"/><line x1="35" y1="20" x2="35" y2="185" stroke="#475569" stroke-width="1.5"/><text x="298" y="200" fill="#94a3b8" font-size="11">v</text><text x="20" y="28" fill="#94a3b8" font-size="11">T</text><path d="M70 185 Q90 60 165 45 Q240 60 280 185" fill="none" stroke="#60a5fa" stroke-width="2.5"/><circle cx="165" cy="45" r="4" fill="#f59e0b"/><text x="150" y="40" fill="#f59e0b" font-size="10">point critique</text><path d="M95 120 L240 120" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/><circle cx="110" cy="120" r="3.5" fill="#ef4444"/><circle cx="225" cy="120" r="3.5" fill="#22c55e"/><text x="92" y="113" fill="#ef4444" font-size="9">A</text><text x="228" y="113" fill="#22c55e" font-size="9">B</text><text x="55" y="150" fill="#ef4444" font-size="9">liquide</text><text x="52" y="162" fill="#ef4444" font-size="9">s-refroidi</text><text x="150" y="150" text-anchor="middle" fill="#cbd5e1" font-size="9">L + V</text><text x="262" y="150" fill="#22c55e" font-size="9">vapeur</text><text x="258" y="162" fill="#22c55e" font-size="9">surchauf.</text></svg>',

  // Conduite : continuité et Bernoulli
  conduite_bernoulli: '<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px;display:block;margin:10px auto" font-family="system-ui,sans-serif"><path d="M20 35 L160 35 L300 65 L300 95 L160 105 L20 105 Z" fill="#1e293b" stroke="#60a5fa" stroke-width="1.5"/><line x1="90" y1="35" x2="90" y2="105" stroke="#475569" stroke-width="1" stroke-dasharray="3,3"/><line x1="230" y1="65" x2="230" y2="95" stroke="#475569" stroke-width="1" stroke-dasharray="3,3"/><text x="90" y="28" text-anchor="middle" fill="#cbd5e1" font-size="10">S&#x2081;</text><text x="230" y="58" text-anchor="middle" fill="#cbd5e1" font-size="10">S&#x2082;</text><line x1="60" y1="70" x2="105" y2="70" stroke="#22c55e" stroke-width="2"/><polygon points="100,65 112,70 100,75" fill="#22c55e"/><text x="62" y="63" fill="#22c55e" font-size="10">v&#x2081;</text><line x1="200" y1="80" x2="265" y2="80" stroke="#22c55e" stroke-width="2"/><polygon points="260,75 272,80 260,85" fill="#22c55e"/><text x="225" y="73" fill="#22c55e" font-size="10">v&#x2082;</text><text x="160" y="140" text-anchor="middle" fill="#94a3b8" font-size="10">S&#x2081;v&#x2081; = S&#x2082;v&#x2082;  (section &#x2193; &#x21D2; vitesse &#x2191;)</text></svg>',

  // Conduction à travers un mur (loi de Fourier)
  mur_fourier: '<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px;display:block;margin:10px auto" font-family="system-ui,sans-serif"><rect x="120" y="30" width="70" height="120" fill="#334155" stroke="#60a5fa" stroke-width="1.5"/><rect x="40" y="30" width="80" height="120" fill="#7f1d1d" fill-opacity="0.35"/><rect x="190" y="30" width="90" height="120" fill="#1e3a8a" fill-opacity="0.35"/><text x="80" y="25" text-anchor="middle" fill="#ef4444" font-size="11">chaud T&#x2081;</text><text x="235" y="25" text-anchor="middle" fill="#60a5fa" font-size="11">froid T&#x2082;</text><text x="155" y="170" text-anchor="middle" fill="#94a3b8" font-size="11">mur, &#xE9;paisseur e</text><line x1="130" y1="90" x2="265" y2="90" stroke="#f59e0b" stroke-width="2.5"/><polygon points="258,84 272,90 258,96" fill="#f59e0b"/><text x="200" y="82" fill="#f59e0b" font-size="11">&#x3C6; (flux)</text><text x="130" y="135" fill="#cbd5e1" font-size="10">k</text><text x="35" y="100" text-anchor="end" fill="#ef4444" font-size="13">&#x1D6D7;</text></svg>',

  // Trois modes de transfert
  modes_transfert: '<svg viewBox="0 0 360 170" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;display:block;margin:10px auto" font-family="system-ui,sans-serif"><g><rect x="20" y="40" width="90" height="50" fill="#334155" stroke="#60a5fa" stroke-width="1.5"/><line x1="25" y1="65" x2="105" y2="65" stroke="#f59e0b" stroke-width="2"/><polygon points="99,60 109,65 99,70" fill="#f59e0b"/><text x="65" y="32" text-anchor="middle" fill="#e2e8f0" font-size="12">Conduction</text><text x="65" y="108" text-anchor="middle" fill="#94a3b8" font-size="9">solide, contact</text><text x="65" y="121" text-anchor="middle" fill="#94a3b8" font-size="9">&#x3C6;=kS&#x394;T/e</text></g><g><rect x="135" y="65" width="90" height="25" fill="#475569"/><path d="M150 60 q8 -14 16 0 t16 0" fill="none" stroke="#22c55e" stroke-width="2"/><path d="M150 50 q8 -14 16 0 t16 0" fill="none" stroke="#22c55e" stroke-width="2"/><text x="180" y="32" text-anchor="middle" fill="#e2e8f0" font-size="12">Convection</text><text x="180" y="108" text-anchor="middle" fill="#94a3b8" font-size="9">fluide en mvt</text><text x="180" y="121" text-anchor="middle" fill="#94a3b8" font-size="9">&#x3C6;=hS(Tp-Tf)</text></g><g><circle cx="290" cy="62" r="16" fill="#f59e0b" fill-opacity="0.4" stroke="#f59e0b" stroke-width="1.5"/><line x1="290" y1="62" x2="320" y2="42" stroke="#f59e0b" stroke-width="1.5"/><line x1="290" y1="62" x2="322" y2="62" stroke="#f59e0b" stroke-width="1.5"/><line x1="290" y1="62" x2="320" y2="82" stroke="#f59e0b" stroke-width="1.5"/><text x="295" y="32" text-anchor="middle" fill="#e2e8f0" font-size="12">Rayonnement</text><text x="290" y="108" text-anchor="middle" fill="#94a3b8" font-size="9">photons, sans support</text><text x="290" y="121" text-anchor="middle" fill="#94a3b8" font-size="9">&#x3C6;=&#x3B5;&#x3C3;ST&#x2074;</text></g></svg>',

  // Plan incliné : bilan des forces
  plan_incline: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px;display:block;margin:10px auto" font-family="system-ui,sans-serif"><polygon points="30,190 290,190 30,70" fill="#1e293b" stroke="#475569" stroke-width="1.5"/><path d="M70 190 A 40 40 0 0 0 56 161" fill="none" stroke="#94a3b8" stroke-width="1"/><text x="74" y="178" fill="#94a3b8" font-size="12">&#x3B8;</text><g transform="translate(150,120) rotate(-22.6)"><rect x="-22" y="-16" width="44" height="32" fill="#334155" stroke="#60a5fa" stroke-width="1.5" rx="3"/><text x="0" y="5" text-anchor="middle" fill="#cbd5e1" font-size="12">m</text><line x1="0" y1="0" x2="0" y2="55" stroke="#22c55e" stroke-width="2"/><polygon points="-4,50 0,60 4,50" fill="#22c55e"/><text x="6" y="50" fill="#22c55e" font-size="11">P</text><line x1="0" y1="0" x2="0" y2="-45" stroke="#f59e0b" stroke-width="2"/><polygon points="-4,-40 0,-50 4,-40" fill="#f59e0b"/><text x="5" y="-38" fill="#f59e0b" font-size="11">N</text><line x1="0" y1="0" x2="48" y2="0" stroke="#ef4444" stroke-width="2"/><polygon points="43,-4 53,0 43,4" fill="#ef4444"/><text x="34" y="-6" fill="#ef4444" font-size="11">f</text></g><text x="160" y="212" text-anchor="middle" fill="#94a3b8" font-size="10">P_x = mg&#xB7;sin&#x3B8; , P_y = mg&#xB7;cos&#x3B8;</text></svg>',

  // Trajectoire parabolique d\'un projectile
  projectile: '<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:340px;display:block;margin:10px auto" font-family="system-ui,sans-serif"><line x1="30" y1="175" x2="325" y2="175" stroke="#475569" stroke-width="1.5"/><line x1="30" y1="20" x2="30" y2="175" stroke="#475569" stroke-width="1.5"/><text x="318" y="190" fill="#94a3b8" font-size="11">x</text><text x="14" y="28" fill="#94a3b8" font-size="11">y</text><path d="M30 90 Q165 -10 300 175" fill="none" stroke="#60a5fa" stroke-width="2.5"/><circle cx="30" cy="90" r="3.5" fill="#22c55e"/><line x1="30" y1="90" x2="72" y2="62" stroke="#22c55e" stroke-width="2"/><polygon points="64,58 76,59 67,68" fill="#22c55e"/><text x="58" y="56" fill="#22c55e" font-size="11">v&#x2080;</text><path d="M30 90 A 28 28 0 0 0 50 80" fill="none" stroke="#94a3b8" stroke-width="1"/><text x="52" y="84" fill="#94a3b8" font-size="11">&#x3B8;</text><line x1="165" y1="40" x2="165" y2="175" stroke="#475569" stroke-width="0.8" stroke-dasharray="3,3"/><text x="170" y="36" fill="#f59e0b" font-size="10">h_max</text><circle cx="165" cy="40" r="3" fill="#f59e0b"/><text x="120" y="100" fill="#cbd5e1" font-size="10">parabole</text></svg>',

  // Systèmes linéaires : 3 cas géométriques
  sl_droites: '<svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px;display:block;margin:10px auto"><g><line x1="15" y1="100" x2="95" y2="100" stroke="#475569" stroke-width="1"/><line x1="20" y1="20" x2="20" y2="105" stroke="#475569" stroke-width="1"/><line x1="20" y1="95" x2="90" y2="30" stroke="#60a5fa" stroke-width="2"/><line x1="20" y1="35" x2="90" y2="95" stroke="#22c55e" stroke-width="2"/><circle cx="55" cy="64" r="3.5" fill="#f59e0b"/><text x="55" y="125" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui,sans-serif">D&#x2260;0 : 1 solution</text></g><g><line x1="115" y1="100" x2="195" y2="100" stroke="#475569" stroke-width="1"/><line x1="120" y1="20" x2="120" y2="105" stroke="#475569" stroke-width="1"/><line x1="120" y1="90" x2="190" y2="35" stroke="#60a5fa" stroke-width="2"/><line x1="120" y1="100" x2="190" y2="45" stroke="#22c55e" stroke-width="2"/><text x="155" y="118" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui,sans-serif">D=0, Dx&#x2260;0 :</text><text x="155" y="128" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui,sans-serif">parall&#xE8;les, 0 sol.</text></g><g><line x1="215" y1="100" x2="295" y2="100" stroke="#475569" stroke-width="1"/><line x1="220" y1="20" x2="220" y2="105" stroke="#475569" stroke-width="1"/><line x1="220" y1="90" x2="290" y2="35" stroke="#22c55e" stroke-width="3.5"/><line x1="220" y1="90" x2="290" y2="35" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="4,3"/><text x="255" y="118" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui,sans-serif">D=Dx=0 :</text><text x="255" y="128" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui,sans-serif">confondues, &#x221E;</text></g></svg>',

};

// ── Content (embedded) ─────────────────────────────────
const CONTENT_DB = {
  'physique-electronique': {
    id: 'physique-electronique',
    matiere: 'Physique',
    chapitre: 'Électronique Analogique — Bases',
    description: 'Lois fondamentales des circuits électriques en régime stationnaire',
    resume: {
      sections: [
        {
          titre: 'Grandeurs fondamentales',
          contenu: 'Intensité I (Ampères) : charge transportée par unité de temps. Tension U (Volts) : différence de potentiel entre deux points.\n\nPuissance : \\(P = U \\cdot I\\) (Watts) · Énergie : \\(E = P \\cdot t\\) (Joules)\n\nConvention : le courant sort par la borne + du générateur et entre par la borne + du récepteur.'
        },
        {
          titre: 'Loi d\'Ohm',
          formule: 'U = R \\cdot I',
          contenu: 'La tension aux bornes d\'une résistance est proportionnelle au courant. R s\'exprime en Ohms (Ω).\n\nAutres formes : \\(I = U/R\\) et \\(R = U/I\\)'
        },
        {
          titre: 'Loi des nœuds (Kirchhoff 1)',
          formule: '\\sum I_{\\text{entrants}} = \\sum I_{\\text{sortants}}',
          schema: 'noeuds',
          contenu: 'La somme algébrique des courants en un nœud est nulle. Utile pour trouver un courant inconnu dans une branche quand on connaît les autres.'
        },
        {
          titre: 'Loi des mailles (Kirchhoff 2)',
          formule: '\\sum U_k = 0 \\quad \\text{(maille fermée)}',
          schema: 'mailles',
          contenu: 'La somme algébrique des tensions dans une maille fermée est nulle.\n\nRègle de signe : choisir un sens de parcours. Tension dans le sens → +, contre le sens → −.'
        },
        {
          titre: 'Résistances équivalentes — Série',
          formule: 'R_{\\text{série}} = R_1 + R_2 + \\cdots',
          schema: 'serie',
          contenu: 'Même courant dans tous les composants. Les tensions s\'additionnent.'
        },
        {
          titre: 'Résistances équivalentes — Parallèle',
          formule: '\\dfrac{1}{R_{//}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\cdots',
          schema: 'parallele',
          contenu: 'Même tension aux bornes de tous les composants. Les courants s\'additionnent.\n\nCas 2 résistances : \\(R_{eq} = \\dfrac{R_1 R_2}{R_1 + R_2}\\)'
        },
        {
          titre: 'Pont diviseur de tension',
          formule: 'U_2 = \\dfrac{R_2}{R_1 + R_2} \\cdot E',
          schema: 'div_tension',
          contenu: '⚠️ Valable uniquement à vide (aucun courant ne sort de la prise).\n\nSi une charge R_L est connectée : remplacer R₂ par R₂//R_L.'
        },
        {
          titre: 'Pont diviseur de courant',
          formule: 'I_1 = \\dfrac{R_2}{R_1 + R_2} \\cdot I',
          schema: 'div_courant',
          contenu: '⚠️ La formule croise les résistances : I₁ dépend de R₂.\n\nLa plus petite résistance reçoit le plus grand courant.'
        },
        {
          titre: 'Théorème de superposition',
          contenu: 'Dans un circuit linéaire à plusieurs sources : réponse totale = somme des contributions de chaque source prise seule.\n\n• Source de tension éteinte → court-circuit\n• Source de courant éteinte → circuit ouvert'
        },
        {
          titre: 'Théorème de Millman',
          formule: 'V_{AB} = \\dfrac{\\displaystyle\\sum_k \\dfrac{E_k}{R_k}}{\\displaystyle\\sum_k \\dfrac{1}{R_k}}',
          contenu: 'Calcule directement la tension aux bornes de plusieurs branches en parallèle (chacune contenant un générateur + résistance). Idéal pour les réseaux en étoile.'
        },
        {
          titre: 'Théorème de Thévenin',
          schema: 'thevenin',
          contenu: 'Tout circuit linéaire vu depuis A-B est équivalent à :\n• E_th : tension à vide entre A et B\n• R_th : résistance vue de A-B, toutes sources éteintes\n\nUsage : \\(I_{R_L} = \\dfrac{E_{th}}{R_{th} + R_L}\\)'
        },
        {
          titre: 'Théorème de Norton',
          schema: 'norton',
          contenu: 'Dual de Thévenin :\n• I_N : courant de court-circuit entre A et B\n• R_N = R_th (même résistance)\n\nConversion : \\(E_{th} = R_{th} \\cdot I_N\\)'
        }
      ]
    },
    methodes: [
      {
        titre: 'Quand utiliser la loi des nœuds ?',
        contenu: '→ Quand on cherche un courant inconnu dans une branche et qu\'on connaît les autres courants qui convergent au même point.\n\nSignal visuel : plusieurs fils qui se rejoignent en un point.'
      },
      {
        titre: 'Quand utiliser la loi des mailles ?',
        contenu: '→ Quand on cherche une tension inconnue et qu\'on peut tracer une boucle fermée contenant ce dipôle.\n\nSignal visuel : circuit avec des boucles, générateurs en série avec des résistances.'
      },
      {
        titre: 'Méthode de résolution d\'un circuit complexe',
        contenu: '1. Identifier les nœuds et les mailles\n2. Orienter les courants (sens arbitraire — un résultat négatif indique juste que le sens est inversé)\n3. Écrire les équations de nœuds (nb nœuds − 1 équations)\n4. Écrire les équations de mailles indépendantes\n5. Résoudre le système linéaire'
      },
      {
        titre: '⚠️ Piège : pont diviseur avec charge',
        contenu: 'La formule U₂ = R₂/(R₁+R₂)×E n\'est valide qu\'à vide.\n\nSi une résistance de charge R_L est branchée en parallèle de R₂ :\n→ Calculer R₂\' = R₂ // R_L = R₂·R_L/(R₂+R_L)\n→ Utiliser R₂\' dans la formule'
      },
      {
        titre: '⚠️ Piège : signe des tensions dans une maille',
        contenu: 'Pour une résistance R avec courant I dans le sens de parcours : tension = +RI\nPour un générateur E parcouru de − vers + : tension = +E\nPour un générateur E parcouru de + vers − : tension = −E'
      },
      {
        titre: 'Quand utiliser Thévenin ?',
        contenu: '→ Quand on veut étudier le comportement d\'un circuit pour différentes valeurs de R_L.\n\nCalculer E_th et R_th une fois, puis :\n• U = E_th × R_L / (R_th + R_L)\n• Puissance max transmise quand R_L = R_th'
      },
      {
        titre: 'Quand utiliser Millman ?',
        contenu: '→ Quand le circuit présente plusieurs générateurs en parallèle (chacun avec sa résistance interne).\n\nPlus rapide que d\'écrire toutes les lois de Kirchhoff.'
      }
    ],
    quiz: [
      {
        id: 'q1',
        question: 'Dans le circuit ci-dessous, que vaut I₃ ?',
        schema: 'quiz_noeuds',
        options: ['2A', '4A', '−2A', '1A'],
        reponse: 0,
        explication: 'Loi des nœuds : I₁ = I₂ + I₃ → 3 = 1 + I₃ → I₃ = 2A'
      },
      {
        id: 'q2',
        question: 'Dans le diviseur ci-dessous (E=20V, R₁=4Ω, R₂=6Ω), quelle est la tension U₂ ?',
        schema: 'quiz_div_tension',
        options: ['12V', '8V', '10V', '6V'],
        reponse: 0,
        explication: 'Pont diviseur : U₂ = R₂/(R₁+R₂) × E = 6/10 × 20 = 12V'
      },
      {
        id: 'q3',
        question: 'Dans le circuit ci-dessous, quelle est la résistance équivalente ?',
        schema: 'quiz_parallele',
        options: ['2Ω', '9Ω', '4,5Ω', '18Ω'],
        reponse: 0,
        explication: 'R_eq = R₁×R₂/(R₁+R₂) = 3×6/(3+6) = 18/9 = 2Ω'
      },
      {
        id: 'q4',
        question: 'Dans le théorème de superposition, on remplace une source de tension éteinte par :',
        options: ['Un court-circuit', 'Un circuit ouvert', 'Une résistance nulle', 'La source reste active'],
        reponse: 0,
        explication: 'Source de tension éteinte = court-circuit (U=0). Source de courant éteinte = circuit ouvert (I=0).'
      },
      {
        id: 'q5',
        question: 'Dans le circuit Thévenin ci-dessous, quel courant circule dans R_L = 9Ω ?',
        schema: 'quiz_thevenin',
        options: ['1A', '4A', '1,33A', '0,75A'],
        reponse: 0,
        explication: 'I = E_th / (R_th + R_L) = 12 / (3 + 9) = 12/12 = 1A'
      },
      {
        id: 'q6',
        question: 'La 2ème loi de Kirchhoff (loi des mailles) énonce que :',
        options: [
          'La somme algébrique des tensions dans une maille = 0',
          'La somme des courants à un nœud = 0',
          'Les tensions aux bornes de résistances en série sont égales',
          'Le courant est le même dans chaque branche'
        ],
        reponse: 0,
        explication: '2ème loi de Kirchhoff : ΣUk = 0 sur toute maille fermée.'
      },
      {
        id: 'q7',
        question: 'Dans le diviseur de courant ci-dessous, quel courant traverse R₁ = 2Ω ?',
        schema: 'quiz_div_courant',
        options: ['4A', '2A', '3A', '1A'],
        reponse: 0,
        explication: 'Pont diviseur de courant : I₁ = R₂/(R₁+R₂) × I = 4/6 × 6 = 4A. La résistance la plus petite reçoit le plus de courant.'
      },
      {
        id: 'q8',
        question: 'Comment calcule-t-on R_th dans le modèle de Thévenin ?',
        options: [
          'Éteindre toutes les sources et mesurer la résistance vue de A-B',
          'Mesurer la tension à vide entre A et B',
          'Court-circuiter A-B et mesurer le courant',
          'Additionner toutes les résistances du circuit'
        ],
        reponse: 0,
        explication: 'R_th = résistance équivalente vue de A-B, toutes sources éteintes (tensions → CC, courants → CO).'
      },
      {
        id: 'q9',
        question: 'Puissance dissipée dans R = 10Ω traversée par I = 2A ?',
        options: ['40W', '20W', '200W', '5W'],
        reponse: 0,
        explication: 'P = R × I² = 10 × 4 = 40W. Ou : U = RI = 20V → P = UI = 40W.'
      },
      {
        id: 'q10',
        question: 'Dans le théorème de Millman, V_AB = Σ(Ek/Rk) / Σ(1/Rk). Que représente 1/Rk ?',
        options: [
          "L'admittance de la branche k",
          'La résistance de la branche k',
          'La conductance totale',
          'Le courant dans la branche k'
        ],
        reponse: 0,
        explication: '1/Rk est l\'admittance (= conductance) de la branche k. Millman pondère chaque fém par l\'admittance de sa branche.'
      }
    ]
  },

  'maths-fondamentaux': {
    id: 'maths-fondamentaux',
    matiere: 'Maths',
    chapitre: 'Fondamentaux algèbre',
    description: 'Identités remarquables, complexes, polynômes, inégalités, sommes, fractions partielles, systèmes 2×2',
    resume: {
      sections: [
        {
          titre: 'Identités algébriques remarquables',
          formule: '(a+b)^2 = a^2+2ab+b^2 \\quad (a-b)^2 = a^2-2ab+b^2',
          contenu: '\\((a+b)(a-b) = a^2-b^2\\) (différence de carrés)\n\n\\((a+b)^3 = a^3+3a^2b+3ab^2+b^3\\)\n\\((a-b)^3 = a^3-3a^2b+3ab^2-b^3\\)\n\n\\(a^3+b^3 = (a+b)(a^2-ab+b^2)\\)\n\\(a^3-b^3 = (a-b)(a^2+ab+b^2)\\)'
        },
        {
          titre: 'Puissances et racines — règles',
          formule: 'a^m \\cdot a^n = a^{m+n} \\qquad (a^m)^n = a^{mn}',
          contenu: '\\(\\dfrac{a^m}{a^n} = a^{m-n}\\) · \\((ab)^n = a^n b^n\\) · \\(a^0 = 1\\) · \\(a^{-n} = \\dfrac{1}{a^n}\\)\n\n\\(a^{1/n} = \\sqrt[n]{a}\\) · \\(a^{p/q} = (\\sqrt[q]{a})^p\\)\n\n⚠️ \\(\\sqrt{a^2} = |a|\\) (pas \\(a\\) en général !)'
        },
        {
          titre: 'Binôme de Newton',
          formule: '(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k',
          contenu: '\\(\\dbinom{n}{k} = \\dfrac{n!}{k!(n-k)!}\\) — Triangle de Pascal :\n\n\\(\\binom{n}{0}=1,\\; \\binom{n}{1}=n,\\; \\binom{n}{2}=\\frac{n(n-1)}{2}\\)\n\n\\(\\binom{n}{k}+\\binom{n}{k+1}=\\binom{n+1}{k+1}\\) (relation de Pascal)'
        },
        {
          titre: 'Valeur absolue',
          formule: '|x| = \\begin{cases} x & \\text{si } x\\geq 0 \\\\ -x & \\text{si } x<0 \\end{cases}',
          contenu: 'Propriétés : \\(|ab| = |a||b|\\) · \\(|a+b| \\leq |a|+|b|\\) (inégalité triangulaire)\n\nRésoudre \\(|x-a| < r\\) : \\(a-r < x < a+r\\) (intervalle centré en \\(a\\))\nRésoudre \\(|x-a| > r\\) : \\(x < a-r\\) ou \\(x > a+r\\)'
        },
        {
          titre: 'Nombres complexes',
          formule: 'z = a + ib \\quad (i^2 = -1)',
          contenu: 'Module : \\(|z| = \\sqrt{a^2+b^2}\\) · Conjugué : \\(\\bar{z} = a-ib\\) · \\(z\\bar{z} = |z|^2\\)\n\nForme trigonométrique : \\(z = r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}\\)\n\nFormule d\'Euler : \\(e^{i\\theta} = \\cos\\theta + i\\sin\\theta\\)\n\nFormules utiles : \\(\\cos\\theta = \\dfrac{e^{i\\theta}+e^{-i\\theta}}{2}\\) · \\(\\sin\\theta = \\dfrac{e^{i\\theta}-e^{-i\\theta}}{2i}\\)\n\nRacines \\(n\\)-ièmes de l\'unité : \\(\\omega_k = e^{2ik\\pi/n}\\), \\(k=0,\\ldots,n-1\\)'
        },
        {
          titre: 'Trinôme du second degré',
          formule: '\\Delta = b^2 - 4ac',
          contenu: '\\(ax^2+bx+c = 0\\) avec \\(a\\neq 0\\)\n\n• \\(\\Delta > 0\\) : deux racines réelles \\(x_{1,2} = \\dfrac{-b\\pm\\sqrt{\\Delta}}{2a}\\)\n• \\(\\Delta = 0\\) : racine double \\(x_0 = -b/(2a)\\)\n• \\(\\Delta < 0\\) : pas de racine réelle (deux racines complexes conjuguées)\n\nFactorisation : \\(ax^2+bx+c = a(x-x_1)(x-x_2)\\)\nSomme et produit : \\(x_1+x_2 = -b/a\\) · \\(x_1 x_2 = c/a\\)'
        },
        {
          titre: 'Polynômes — Horner et factorisation',
          formule: 'P(a) = 0 \\implies (x-a) \\mid P(x)',
          contenu: 'Schéma de Horner : divise \\(P\\) par \\((x-a)\\) en \\(O(n)\\) opérations (tableau de coefficients).\n\nRacines rationnelles : si \\(P \\in \\mathbb{Z}[x]\\) unitaire, les racines entières divisent le terme constant.\n\nStratégie de factorisation :\n1. Chercher une racine évidente (diviseurs du terme constant)\n2. Appliquer Horner pour obtenir le quotient\n3. Factoriser le quotient (répéter si nécessaire)\n\nOrdre de multiplicité \\(k\\) : \\(P(a)=P\'(a)=\\cdots=P^{(k-1)}(a)=0\\) et \\(P^{(k)}(a)\\neq 0\\)'
        },
        {
          titre: 'Tableau de signes — Inégalités',
          formule: 'a > 0 : \\; ax^2+bx+c > 0 \\iff x < x_1 \\text{ ou } x > x_2',
          contenu: 'Méthode pour \\(P(x) \\gtrless 0\\) :\n1. Factoriser \\(P\\)\n2. Identifier les racines réelles (zéros)\n3. Dresser le tableau de signes facteur par facteur\n4. Multiplier les signes\n\n⚠️ Diviser par un nombre négatif inverse le sens de l\'inégalité.'
        },
        {
          titre: 'Sommes usuelles',
          formule: '\\sum_{k=1}^{n} k = \\dfrac{n(n+1)}{2}',
          contenu: '\\(\\displaystyle\\sum_{k=1}^{n} k^2 = \\dfrac{n(n+1)(2n+1)}{6}\\)\n\n\\(\\displaystyle\\sum_{k=1}^{n} k^3 = \\left(\\dfrac{n(n+1)}{2}\\right)^2\\)\n\nSomme géométrique : \\(\\displaystyle\\sum_{k=0}^{n} r^k = \\dfrac{1-r^{n+1}}{1-r}\\) (\\(r\\neq 1\\))\n\nLinéarité : \\(\\sum(\\lambda x_k + y_k) = \\lambda\\sum x_k + \\sum y_k\\)'
        },
        {
          titre: 'Décomposition en fractions partielles',
          formule: '\\frac{P(x)}{Q(x)} = S(x) + \\frac{R(x)}{Q(x)} \\quad (\\deg R < \\deg Q)',
          contenu: 'Si \\(\\deg P \\geq \\deg Q\\) : effectuer la division euclidienne d\'abord.\n\nForme selon les facteurs de \\(Q\\) :\n• \\((x-a)\\) simple : terme \\(\\dfrac{A}{x-a}\\)\n• \\((x-a)^k\\) : termes \\(\\dfrac{A_1}{x-a}+\\cdots+\\dfrac{A_k}{(x-a)^k}\\)\n• \\(x^2+bx+c\\) irréductible (\\(\\Delta<0\\)) : terme \\(\\dfrac{Ax+B}{x^2+bx+c}\\)\n\nPour trouver les coefficients : réduire au même dénominateur, puis substituer les racines de \\(Q\\) ou identifier les coefficients de chaque puissance.'
        },
        {
          titre: 'Systèmes 2×2 — Règle de Cramer',
          formule: 'D = \\begin{vmatrix} a_1 & b_1 \\\\ a_2 & b_2 \\end{vmatrix} = a_1 b_2 - a_2 b_1',
          contenu: 'Système \\(\\begin{cases} a_1 x_1 + b_1 x_2 = c_1 \\\\ a_2 x_1 + b_2 x_2 = c_2 \\end{cases}\\)\n\n\\(D_{x_1} = \\begin{vmatrix} c_1 & b_1 \\\\ c_2 & b_2 \\end{vmatrix}\\) · \\(D_{x_2} = \\begin{vmatrix} a_1 & c_1 \\\\ a_2 & c_2 \\end{vmatrix}\\)\n\n• \\(D \\neq 0\\) : solution unique \\(x_1 = D_{x_1}/D\\), \\(x_2 = D_{x_2}/D\\)\n• \\(D = 0\\) et \\(D_{x_i} = 0\\) : infinité de solutions\n• \\(D = 0\\) et un \\(D_{x_i} \\neq 0\\) : aucune solution\n\nInterprétation géom. : intersection de deux droites dans le plan.'
        }
      ]
    },
    methodes: [
      {
        titre: 'Factoriser avec une identité remarquable',
        contenu: 'Avant de résoudre une équation, on cherche toujours à factoriser. Les formes à reconnaître :\n\n\\[ a^2 - b^2 = (a-b)(a+b) \\]\n\nExemple concret :\n\\[ x^2 - 9 = x^2 - 3^2 = (x-3)(x+3) \\]\n\nDonc \\(x^2 - 9 = 0\\) donne directement \\(x = 3\\) ou \\(x = -3\\).\n\nPour les cubes :\n\\[ a^3 - b^3 = (a-b)(a^2+ab+b^2) \\]'
      },
      {
        titre: 'Résoudre une inégalité avec un quotient',
        contenu: 'Règle d\'or : ne jamais multiplier les deux côtés par une expression dont on ignore le signe.\n\nMéthode pour \\(\\dfrac{1}{x} > 2\\) :\n\n1) Tout passer d\'un côté :\n\\[ \\frac{1}{x} - 2 > 0 \\]\n\n2) Réduire au même dénominateur :\n\\[ \\frac{1 - 2x}{x} > 0 \\]\n\n3) Tableau de signes de \\(1-2x\\) (s\'annule en \\(x=\\tfrac12\\)) et de \\(x\\) (s\'annule en \\(0\\)).\n\nLe quotient est positif quand numérateur et dénominateur ont le même signe :\n\\[ 0 < x < \\tfrac{1}{2} \\]'
      },
      {
        titre: 'Mettre un complexe sous forme exponentielle',
        contenu: 'Objectif : passer de \\(z = a + ib\\) à \\(z = r\\,e^{i\\theta}\\).\n\nÉtape 1 — le module :\n\\[ r = |z| = \\sqrt{a^2 + b^2} \\]\n\nÉtape 2 — l\'argument \\(\\theta\\) (attention au quadrant) :\n\\[ \\cos\\theta = \\frac{a}{r}, \\qquad \\sin\\theta = \\frac{b}{r} \\]\n\nExemple avec \\(z = 1 + i\\) :\n\\[ r = \\sqrt{1+1} = \\sqrt{2}, \\qquad \\theta = \\frac{\\pi}{4} \\]\n\\[ z = \\sqrt{2}\\,e^{i\\pi/4} \\]\n\nUne fois en exponentielle, les puissances deviennent faciles :\n\\[ z^n = r^n\\,e^{in\\theta} \\quad\\text{(De Moivre)} \\]'
      },
      {
        titre: 'Diviser un polynôme avec Horner',
        contenu: 'On divise \\(P(x) = x^3 - x^2 - 8x + 12\\) par \\((x-2)\\).\n\nÉtape 1 — vérifier que 2 est bien racine :\n\\[ P(2) = 8 - 4 - 16 + 12 = 0 \\;\\checkmark \\]\n\nÉtape 2 — abaisser et multiplier (coefficients de P : 1, −1, −8, 12) :\n\\[ \\begin{array}{c|cccc} & 1 & -1 & -8 & 12 \\\\ 2 & & 2 & 2 & -12 \\\\ \\hline & 1 & 1 & -6 & 0 \\end{array} \\]\n\nLa dernière ligne donne le quotient \\(x^2 + x - 6\\) et un reste de \\(0\\).\n\nÉtape 3 — factoriser le quotient :\n\\[ P(x) = (x-2)(x^2+x-6) = (x-2)^2(x+3) \\]'
      },
      {
        titre: 'Décomposer une fraction (2 racines simples)',
        contenu: 'On décompose \\(\\dfrac{3x+1}{(x-1)(x+2)}\\).\n\nÉtape 1 — poser la forme :\n\\[ \\frac{3x+1}{(x-1)(x+2)} = \\frac{A}{x-1} + \\frac{B}{x+2} \\]\n\nÉtape 2 — multiplier par le dénominateur :\n\\[ 3x+1 = A(x+2) + B(x-1) \\]\n\nÉtape 3 — substituer les racines pour isoler chaque coefficient.\n\nPour \\(x = 1\\) :\n\\[ 3(1)+1 = A(3) \\;\\Rightarrow\\; A = \\frac{4}{3} \\]\n\nPour \\(x = -2\\) :\n\\[ 3(-2)+1 = B(-3) \\;\\Rightarrow\\; B = \\frac{5}{3} \\]\n\nRésultat :\n\\[ \\frac{3x+1}{(x-1)(x+2)} = \\frac{4}{3(x-1)} + \\frac{5}{3(x+2)} \\]'
      },
      {
        titre: '⚠️ Pièges de calcul classiques',
        contenu: 'Erreur n°1 — développer un carré :\n\\[ (a+b)^2 = a^2 + 2ab + b^2 \\quad (\\neq a^2+b^2) \\]\nOublier le terme \\(2ab\\) est l\'erreur la plus fréquente.\n\nErreur n°2 — racine d\'une somme :\n\\[ \\sqrt{a+b} \\neq \\sqrt{a} + \\sqrt{b} \\]\n\nErreur n°3 — racine d\'un carré :\n\\[ \\sqrt{x^2} = |x| \\quad (\\text{pas } x) \\]\n\nErreur n°4 — multiplier une inégalité par une quantité de signe inconnu : le sens peut s\'inverser. Passer plutôt tout d\'un côté et faire un tableau de signes.'
      }
    ],
    quiz: [
      {
        id: 'mf-q1',
        question: 'Que vaut \\((x+3)(x-3)\\) ?',
        options: ['\\(x^2-9\\)', '\\(x^2+9\\)', '\\(x^2+6x-9\\)', '\\(x^2-6x-9\\)'],
        reponse: 0,
        explication: 'Identité différence de carrés : \\((a+b)(a-b) = a^2-b^2\\). Ici \\(a=x, b=3\\) → \\(x^2-9\\).'
      },
      {
        id: 'mf-q2',
        question: 'Le discriminant de \\(2x^2 - 5x + 2 = 0\\) est :',
        options: ['9', '\\(-11\\)', '41', '25'],
        reponse: 0,
        explication: '\\(\\Delta = b^2-4ac = (-5)^2-4(2)(2) = 25-16 = 9\\)'
      },
      {
        id: 'mf-q3',
        question: 'Quelles sont les racines de \\(2x^2-5x+2=0\\) ?',
        options: ['\\(x=2\\) et \\(x=\\frac{1}{2}\\)', '\\(x=1\\) et \\(x=2\\)', '\\(x=-2\\) et \\(x=-\\frac{1}{2}\\)', 'Pas de racine réelle'],
        reponse: 0,
        explication: '\\(\\Delta=9\\), \\(x_{1,2}=\\frac{5\\pm 3}{4}\\) → \\(x_1=2\\) et \\(x_2=\\frac{1}{2}\\).'
      },
      {
        id: 'mf-q4',
        question: 'Que vaut \\(|{-7}|+ |3-10|\\) ?',
        options: ['14', '0', '\\(-14\\)', '4'],
        reponse: 0,
        explication: '\\(|-7|=7\\) et \\(|3-10|=|-7|=7\\), donc \\(7+7=14\\).'
      },
      {
        id: 'mf-q5',
        question: 'Résoudre \\(|x-2| < 3\\) :',
        options: ['\\(-1 < x < 5\\)', '\\(x < -1\\) ou \\(x > 5\\)', '\\(x > -1\\)', '\\(-3 < x < 3\\)'],
        reponse: 0,
        explication: '\\(|x-2|<3 \\iff -3<x-2<3 \\iff -1<x<5\\).'
      },
      {
        id: 'mf-q6',
        question: 'Le module du nombre complexe \\(z = 3+4i\\) est :',
        options: ['5', '7', '\\(\\sqrt{7}\\)', '25'],
        reponse: 0,
        explication: '\\(|z|=\\sqrt{3^2+4^2}=\\sqrt{9+16}=\\sqrt{25}=5\\).'
      },
      {
        id: 'mf-q7',
        question: '\\(e^{i\\pi}\\) est égal à :',
        options: ['\\(-1\\)', '\\(1\\)', '\\(i\\)', '\\(0\\)'],
        reponse: 0,
        explication: 'Formule d\'Euler : \\(e^{i\\theta}=\\cos\\theta+i\\sin\\theta\\). Pour \\(\\theta=\\pi\\) : \\(\\cos\\pi=-1\\), \\(\\sin\\pi=0\\), donc \\(e^{i\\pi}=-1\\).'
      },
      {
        id: 'mf-q8',
        question: 'Que vaut \\(\\displaystyle\\sum_{k=1}^{100} k\\) ?',
        options: ['5050', '10100', '100', '4950'],
        reponse: 0,
        explication: '\\(\\sum_{k=1}^{n}k = n(n+1)/2 = 100\\times 101/2 = 5050\\).'
      },
      {
        id: 'mf-q9',
        question: '\\(x=1\\) est-il racine de \\(P(x)=x^3-3x^2+3x-1\\) ?',
        options: ['Oui, racine triple', 'Oui, racine simple', 'Non', 'Oui, racine double'],
        reponse: 0,
        explication: '\\(P(1)=1-3+3-1=0\\). De plus \\(P\'(1)=0\\) et \\(P\'\'(1)=0\\), \\(P\'\'\'=6\\neq 0\\). Donc racine d\'ordre 3. On reconnaît \\(P=(x-1)^3\\).'
      },
      {
        id: 'mf-q10',
        question: 'Résoudre \\(\\begin{cases}2x+y=5\\\\x-y=1\\end{cases}\\) par Cramer. Que vaut \\(x\\) ?',
        options: ['2', '1', '3', '\\(-1\\)'],
        reponse: 0,
        explication: '\\(D=\\begin{vmatrix}2&1\\\\1&-1\\end{vmatrix}=-2-1=-3\\). \\(D_x=\\begin{vmatrix}5&1\\\\1&-1\\end{vmatrix}=-5-1=-6\\). \\(x=D_x/D=(-6)/(-3)=2\\).'
      }
    ]
  },

  'maths-analyse': {
    id: 'maths-analyse',
    matiere: 'Maths',
    chapitre: 'Analyse',
    description: 'Fonctions, dérivées, primitives, intégrales et équations différentielles',
    resume: {
      sections: [
        {
          titre: 'Domaine de définition',
          formule: '\\mathcal{D}_f = \\{ x \\in \\mathbb{R} \\mid f(x) \\text{ existe} \\}',
          contenu: 'Contraintes usuelles à respecter :\n• \\(\\sqrt{u}\\) défini \\(\\iff u \\geq 0\\)\n• \\(\\ln(u)\\) défini \\(\\iff u > 0\\)\n• \\(\\dfrac{1}{u}\\) défini \\(\\iff u \\neq 0\\)\n\nLe domaine est l\'intersection de toutes les contraintes.'
        },
        {
          titre: 'Injection, surjection, bijection',
          contenu: '• Injective : \\(x \\neq z \\Rightarrow f(x) \\neq f(z)\\) (au plus un antécédent)\n• Surjective : tout \\(y\\) de l\'arrivée a au moins un antécédent\n• Bijective : injective ET surjective (exactement un antécédent)\n\nSeule une bijection admet une réciproque \\(f^{-1}\\) : \\(f^{-1}(y) = x \\iff f(x) = y\\).\n\nExemples : \\(\\arcsin, \\arccos, \\arctan\\), et \\(\\ln\\) réciproque de \\(\\exp\\).'
        },
        {
          titre: 'Parité et périodicité',
          formule: 'f \\text{ paire} : f(-x)=f(x) \\quad f \\text{ impaire} : f(-x)=-f(x)',
          contenu: 'Paire → courbe symétrique par rapport à l\'axe \\(Oy\\) (ex : \\(x^2\\), \\(\\cos\\)).\nImpaire → symétrique par rapport à l\'origine (ex : \\(x^3\\), \\(\\sin\\)).\n\nPériodique de période \\(p\\) : \\(f(x+p) = f(x)\\). La fonction \\(x \\mapsto f(ax+b)\\) a pour période \\(\\dfrac{T}{|a|}\\). Un signal de pulsation \\(\\omega\\) a pour période \\(T = \\dfrac{2\\pi}{\\omega}\\).'
        },
        {
          titre: 'Nombre dérivé et tangente',
          formule: 'f\'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0+h) - f(x_0)}{h}',
          schema: 'tangente',
          contenu: 'Le nombre dérivé \\(f\'(x_0)\\) est la pente de la tangente à la courbe au point d\'abscisse \\(x_0\\).\n\nÉquation de la tangente :\n\\[ y = f(x_0) + f\'(x_0)(x - x_0) \\]\n\nDérivable en \\(x_0\\) \\(\\Rightarrow\\) continue en \\(x_0\\) (la réciproque est fausse : \\(|x|\\) est continue mais non dérivable en 0).'
        },
        {
          titre: 'Dérivées usuelles',
          formule: '\\begin{array}{c|c} f(x) & f\'(x) \\\\ \\hline \\\\[-9pt] k\\ (\\text{constante}) & 0 \\\\[4pt] x & 1 \\\\[4pt] x^n & n\\,x^{n-1} \\\\[4pt] \\dfrac{1}{x} & -\\dfrac{1}{x^2} \\\\[6pt] \\dfrac{1}{x^n} & -\\dfrac{n}{x^{n+1}} \\\\[6pt] \\sqrt{x} & \\dfrac{1}{2\\sqrt{x}} \\\\[6pt] x^{\\alpha} & \\alpha\\,x^{\\alpha-1} \\\\[4pt] e^x & e^x \\\\[4pt] a^x & a^x \\ln a \\\\[4pt] \\ln x & \\dfrac{1}{x} \\\\[6pt] \\ln|x| & \\dfrac{1}{x} \\\\[6pt] \\log_a x & \\dfrac{1}{x \\ln a} \\end{array}',
          contenu: 'Et pour les fonctions trigonométriques et leurs réciproques :',
          formule2: '\\begin{array}{c|c} f(x) & f\'(x) \\\\ \\hline \\\\[-9pt] \\sin x & \\cos x \\\\[4pt] \\cos x & -\\sin x \\\\[4pt] \\tan x & 1 + \\tan^2 x = \\dfrac{1}{\\cos^2 x} \\\\[6pt] \\arcsin x & \\dfrac{1}{\\sqrt{1-x^2}} \\\\[6pt] \\arccos x & -\\dfrac{1}{\\sqrt{1-x^2}} \\\\[6pt] \\arctan x & \\dfrac{1}{1+x^2} \\end{array}'
        },
        {
          titre: 'Opérations sur les dérivées',
          formule: '(fg)\' = f\'g + fg\' \\qquad \\left(\\frac{f}{g}\\right)\' = \\frac{f\'g - fg\'}{g^2}',
          contenu: 'Règle de la chaîne (dérivée d\'une composée) :\n\\[ \\big(f(g(x))\\big)\' = f\'(g(x)) \\cdot g\'(x) \\]\n\nCas fréquents :\n\\[ (e^u)\' = u\' e^u, \\qquad (\\ln u)\' = \\frac{u\'}{u} \\]'
        },
        {
          titre: 'Variations et extremums',
          formule: 'f\'(x) > 0 \\Rightarrow f \\nearrow \\qquad f\'(x) < 0 \\Rightarrow f \\searrow',
          contenu: 'Pour trouver les extremums : chercher où \\(f\'(x) = 0\\).\n\n• Test de la dérivée 1ère : \\(f\'\\) change de \\(+\\) à \\(-\\) → maximum local ; de \\(-\\) à \\(+\\) → minimum local.\n• Test de la dérivée 2nde : si \\(f\'(x_0)=0\\) et \\(f\'\'(x_0) < 0\\) → max ; \\(f\'\'(x_0) > 0\\) → min.\n\nConvexité : \\(f\'\' > 0\\) → convexe (au-dessus des tangentes) ; \\(f\'\' < 0\\) → concave. Changement = point d\'inflexion.'
        },
        {
          titre: 'Primitives',
          formule: 'F \\text{ primitive de } f \\iff F\'(x) = f(x)',
          contenu: 'Toutes les primitives diffèrent d\'une constante : \\(G = F + c\\).\n\nPrimitives usuelles :\n\\[ \\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + c \\;(n \\neq -1) \\]\n\\[ \\int \\frac{1}{x}\\,dx = \\ln|x| + c, \\quad \\int e^x\\,dx = e^x + c \\]'
        },
        {
          titre: 'Théorème fondamental de l\'analyse',
          formule: '\\int_a^b f(t)\\,dt = G(b) - G(a)',
          schema: 'aire',
          contenu: 'Si \\(G\\) est une primitive de \\(f\\) continue sur \\([a,b]\\), l\'intégrale se calcule par différence des valeurs de \\(G\\).\n\nGéométriquement, \\(\\int_a^b f\\) est l\'aire algébrique entre la courbe et l\'axe des abscisses.\n\nLinéarité, Chasles : \\(\\int_a^b = \\int_a^c + \\int_c^b\\).'
        },
        {
          titre: 'Intégration par parties',
          formule: '\\int_a^b u\\,v\' \\,dx = \\big[uv\\big]_a^b - \\int_a^b u\'\\,v\\,dx',
          contenu: 'Utile quand l\'intégrande est un produit (ex : \\(x e^x\\), \\(\\ln x\\), \\(x \\sin x\\)).\n\nExemple — primitive de \\(\\ln x\\) : on pose \\(v = \\ln x\\), \\(u\' = 1\\) :\n\\[ \\int \\ln x \\, dx = x\\ln x - \\int x \\cdot \\frac{1}{x}\\,dx = x\\ln x - x + c \\]'
        },
        {
          titre: 'Changement de variable',
          formule: '\\int_{a}^{b} f(\\varphi(t))\\,\\varphi\'(t)\\,dt = \\int_{\\varphi(a)}^{\\varphi(b)} f(x)\\,dx',
          contenu: 'On pose \\(x = \\varphi(t)\\) et \\(dx = \\varphi\'(t)\\,dt\\), sans oublier de changer les bornes.\n\nExemple : \\(\\int \\tan x\\,dx\\) avec \\(u = \\cos x\\), \\(du = -\\sin x\\,dx\\) :\n\\[ \\int \\tan x\\,dx = -\\int \\frac{du}{u} = -\\ln|\\cos x| + c \\]'
        },
        {
          titre: 'Équations différentielles linéaires d\'ordre 2',
          formule: 'ay\'\' + by\' + cy = 0 \\;\\Rightarrow\\; ar^2 + br + c = 0',
          contenu: 'On résout l\'équation caractéristique \\((\\Delta = b^2 - 4ac)\\) :\n\n• \\(\\Delta > 0\\), racines \\(r_1, r_2\\) : \\(y = \\lambda_1 e^{r_1 x} + \\lambda_2 e^{r_2 x}\\)\n• \\(\\Delta = 0\\), racine double \\(r_0\\) : \\(y = (\\lambda_1 + \\lambda_2 x)e^{r_0 x}\\)\n• \\(\\Delta < 0\\), racines \\(\\alpha \\pm i\\beta\\) : \\(y = e^{\\alpha x}(\\lambda_1 \\cos\\beta x + \\lambda_2 \\sin\\beta x)\\)\n\nSéparation des variables (ordre 1) : \\(\\dfrac{dy}{dt} = ky \\Rightarrow y = Ce^{kt}\\).'
        }
      ]
    },
    methodes: [
      {
        titre: 'Déterminer un domaine de définition',
        contenu: 'On liste chaque contrainte puis on intersecte.\n\nExemple : \\(f(x) = \\dfrac{\\sqrt{1-x^2}}{\\ln|x|}\\)\n\nContrainte 1 (racine) :\n\\[ 1 - x^2 \\geq 0 \\iff x \\in [-1, 1] \\]\n\nContrainte 2 (log défini et non nul) :\n\\[ |x| > 0 \\text{ et } |x| \\neq 1 \\iff x \\neq 0, \\pm 1 \\]\n\nIntersection :\n\\[ \\mathcal{D}_f = \\;]{-1}, 0[\\, \\cup\\, ]0, 1[ \\]'
      },
      {
        titre: 'Étudier les variations d\'une fonction',
        contenu: '1) Calculer \\(f\'(x)\\).\n2) Résoudre \\(f\'(x) = 0\\) et étudier le signe de \\(f\'\\).\n3) Dresser le tableau de variations.\n\nLe signe de \\(f\'\\) donne le sens de variation :\n\\[ f\'(x) > 0 \\Rightarrow f \\text{ croissante} \\]\n\\[ f\'(x) < 0 \\Rightarrow f \\text{ décroissante} \\]\n\nUn changement de signe de \\(f\'\\) en \\(x_0\\) signale un extremum local.'
      },
      {
        titre: 'Choisir la bonne méthode d\'intégration',
        contenu: 'Réflexe selon la forme de l\'intégrande :\n\n• Primitive connue directement → table des primitives.\n• Produit \\(u \\cdot v\'\\) (ex : \\(x e^x\\), \\(x\\ln x\\)) → intégration par parties.\n• Forme \\(f(\\varphi(x))\\varphi\'(x)\\) (une fonction et sa dérivée) → changement de variable.\n• Fraction rationnelle \\(\\dfrac{P}{Q}\\) → décomposition en éléments simples puis intégration terme à terme.'
      },
      {
        titre: 'Intégration par parties — exemple guidé',
        contenu: 'Calculons \\(\\int x e^x \\, dx\\).\n\nÉtape 1 — choisir \\(u\\) et \\(v\'\\) (dériver le polynôme) :\n\\[ u = x,\\; u\' = 1 ; \\qquad v\' = e^x,\\; v = e^x \\]\n\nÉtape 2 — appliquer la formule :\n\\[ \\int x e^x dx = x e^x - \\int 1 \\cdot e^x\\,dx \\]\n\nÉtape 3 — conclure :\n\\[ = x e^x - e^x + c = (x-1)e^x + c \\]'
      },
      {
        titre: 'Résoudre une équation différentielle d\'ordre 2',
        contenu: 'Exemple : \\(y\'\' + 4y\' + 3y = 0\\).\n\nÉtape 1 — équation caractéristique :\n\\[ r^2 + 4r + 3 = 0 \\]\n\nÉtape 2 — discriminant et racines :\n\\[ \\Delta = 16 - 12 = 4 > 0,\\quad r = \\frac{-4 \\pm 2}{2} \\]\n\\[ r_1 = -1, \\quad r_2 = -3 \\]\n\nÉtape 3 — solution générale (\\(\\Delta > 0\\)) :\n\\[ y(t) = C_1 e^{-t} + C_2 e^{-3t} \\]'
      },
      {
        titre: '⚠️ Pièges en analyse',
        contenu: '• Ne pas oublier la constante \\(+c\\) dans une primitive (intégrale indéfinie).\n• Changement de variable : toujours convertir les bornes ET le \\(dx\\).\n• Dérivable \\(\\Rightarrow\\) continue, mais continue \\(\\not\\Rightarrow\\) dérivable (ex : \\(|x|\\) en 0).\n• \\(\\sup/\\inf\\) ne sont pas toujours atteints : sur \\([0,1[\\), \\(\\sup = 1\\) mais il n\'y a pas de maximum.'
      }
    ],
    quiz: [
      {
        id: 'an-q1',
        question: 'Quel est le domaine de définition de \\(f(x) = \\ln(x-2)\\) ?',
        options: ['\\(]2, +\\infty[\\)', '\\([2, +\\infty[\\)', '\\(\\mathbb{R} \\setminus \\{2\\}\\)', '\\(]-\\infty, 2[\\)'],
        reponse: 0,
        explication: '\\(\\ln(u)\\) est défini ssi \\(u > 0\\), donc \\(x - 2 > 0 \\iff x > 2\\).'
      },
      {
        id: 'an-q2',
        question: 'La dérivée de \\(f(x) = x^3\\) est :',
        options: ['\\(3x^2\\)', '\\(x^2\\)', '\\(3x\\)', '\\(\\frac{x^4}{4}\\)'],
        reponse: 0,
        explication: '\\((x^n)\' = n x^{n-1}\\), donc \\((x^3)\' = 3x^2\\).'
      },
      {
        id: 'an-q3',
        question: 'La dérivée de \\(f(x) = e^{2x}\\) est :',
        options: ['\\(2e^{2x}\\)', '\\(e^{2x}\\)', '\\(2x\\,e^{2x}\\)', '\\(e^{2}\\)'],
        reponse: 0,
        explication: 'Règle de la chaîne : \\((e^u)\' = u\' e^u\\) avec \\(u = 2x\\), \\(u\' = 2\\). Donc \\(2e^{2x}\\).'
      },
      {
        id: 'an-q4',
        question: 'L\'équation de la tangente à \\(C_f\\) en \\(x_0\\) est :',
        options: [
          '\\(y = f(x_0) + f\'(x_0)(x - x_0)\\)',
          '\\(y = f\'(x_0) + f(x_0)(x - x_0)\\)',
          '\\(y = f(x_0)(x - x_0)\\)',
          '\\(y = f\'(x_0) \\cdot x\\)'
        ],
        reponse: 0,
        explication: 'La tangente passe par \\((x_0, f(x_0))\\) avec une pente \\(f\'(x_0)\\).'
      },
      {
        id: 'an-q5',
        question: 'Une primitive de \\(f(x) = \\dfrac{1}{x}\\) sur \\(]0,+\\infty[\\) est :',
        options: ['\\(\\ln x\\)', '\\(-\\frac{1}{x^2}\\)', '\\(\\frac{1}{x^2}\\)', '\\(x \\ln x\\)'],
        reponse: 0,
        explication: '\\(\\int \\frac{1}{x}\\,dx = \\ln|x| + c\\). Sur \\(]0,+\\infty[\\), c\'est \\(\\ln x\\).'
      },
      {
        id: 'an-q6',
        question: 'Que vaut \\(\\displaystyle\\int_0^1 x \\, dx\\) ?',
        options: ['\\(\\frac{1}{2}\\)', '\\(1\\)', '\\(\\frac{1}{3}\\)', '\\(2\\)'],
        reponse: 0,
        explication: 'Primitive \\(\\frac{x^2}{2}\\) : \\(\\left[\\frac{x^2}{2}\\right]_0^1 = \\frac{1}{2} - 0 = \\frac{1}{2}\\).'
      },
      {
        id: 'an-q7',
        question: 'Pour calculer \\(\\int \\ln x \\, dx\\), quelle méthode utilise-t-on ?',
        options: ['Intégration par parties', 'Changement de variable', 'Primitive directe', 'Décomposition en éléments simples'],
        reponse: 0,
        explication: 'On pose \\(v = \\ln x\\), \\(u\' = 1\\) : \\(\\int \\ln x\\,dx = x\\ln x - x + c\\).'
      },
      {
        id: 'an-q8',
        question: 'La fonction \\(f(x) = x^3\\) est :',
        options: ['Impaire', 'Paire', 'Périodique', 'Ni paire ni impaire'],
        reponse: 0,
        explication: '\\(f(-x) = (-x)^3 = -x^3 = -f(x)\\) : fonction impaire (symétrie par rapport à l\'origine).'
      },
      {
        id: 'an-q9',
        question: 'L\'équation caractéristique de \\(y\'\' + 4y\' + 4y = 0\\) a pour solution :',
        options: ['Racine double \\(r = -2\\)', 'Deux racines \\(-1\\) et \\(-3\\)', 'Racines complexes', 'Racine simple \\(r = 2\\)'],
        reponse: 0,
        explication: '\\(r^2 + 4r + 4 = (r+2)^2 = 0\\), racine double \\(r = -2\\). Solution : \\(y = (C_1 + C_2 t)e^{-2t}\\).'
      },
      {
        id: 'an-q10',
        question: 'Si \\(f\'(x_0) = 0\\) et \\(f\'\'(x_0) > 0\\), alors \\(x_0\\) est :',
        options: ['Un minimum local', 'Un maximum local', 'Un point d\'inflexion', 'Indéterminé'],
        reponse: 0,
        explication: 'Test de la dérivée seconde : \\(f\'\'(x_0) > 0\\) → la courbe est convexe localement → minimum local.'
      }
    ]
  },

  'maths-matrices': {
    id: 'maths-matrices',
    matiere: 'Maths',
    chapitre: 'Calcul matriciel',
    description: 'Opérations matricielles, déterminant, inverse et résolution par Gauss-Jordan',
    resume: {
      sections: [
        {
          titre: 'Opérations de base',
          formule: '(A+B)_{ij} = a_{ij} + b_{ij} \\qquad (\\lambda A)_{ij} = \\lambda a_{ij}',
          contenu: 'L\'addition se fait terme à terme (mêmes dimensions requises).\n\nLa transposée \\(A^\\top\\) échange lignes et colonnes : \\((A^\\top)_{ij} = a_{ji}\\).\n\nMatrice identité \\(I_n\\) : des 1 sur la diagonale, 0 ailleurs. \\(AI = IA = A\\).'
        },
        {
          titre: 'Produit matriciel',
          formule: '(AB)_{ij} = \\sum_{k=1}^{n} a_{ik}\\, b_{kj}',
          contenu: 'Règle de compatibilité : \\((m \\times \\underline{n})(\\underline{n} \\times p) = (m \\times p)\\). Le nombre de colonnes de \\(A\\) doit égaler le nombre de lignes de \\(B\\).\n\n⚠️ Le produit n\'est pas commutatif : en général \\(AB \\neq BA\\).\n\n⚠️ \\(AB = 0\\) n\'implique pas \\(A = 0\\) ou \\(B = 0\\) (diviseurs de zéro).'
        },
        {
          titre: 'Déterminant 2×2',
          formule: '\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc',
          contenu: 'Produit de la diagonale principale moins produit de l\'autre diagonale.\n\nUne matrice est inversible \\(\\iff \\det A \\neq 0\\).'
        },
        {
          titre: 'Déterminant 3×3 — Règle de Sarrus',
          formule: '\\det A = aei + bfg + cdh - ceg - afh - bdi',
          schema: 'sarrus',
          contenu: 'On recopie les deux premières colonnes à droite, puis :\n• on additionne les 3 diagonales descendantes,\n• on soustrait les 3 diagonales montantes.\n\n⚠️ La règle de Sarrus ne fonctionne QUE pour les matrices 3×3.'
        },
        {
          titre: 'Inverse d\'une matrice 2×2',
          formule: 'A^{-1} = \\frac{1}{ad-bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}',
          contenu: 'Valable si \\(\\det A = ad - bc \\neq 0\\).\n\nOn échange les termes de la diagonale, on change le signe de l\'anti-diagonale, et on divise par le déterminant.\n\nPropriétés : \\((AB)^{-1} = B^{-1}A^{-1}\\) et \\((A^{-1})^{-1} = A\\).'
        },
        {
          titre: 'Inverse par Gauss-Jordan',
          formule: '[\\,A \\mid I\\,] \\xrightarrow{\\text{pivot}} [\\,I \\mid A^{-1}\\,]',
          contenu: 'On accole l\'identité à droite de \\(A\\), puis on applique le pivot de Gauss-Jordan jusqu\'à transformer la partie gauche en \\(I\\). La partie droite devient alors \\(A^{-1}\\).\n\nSi une ligne nulle apparaît à gauche, \\(A\\) n\'est pas inversible.'
        },
        {
          titre: 'Critères d\'inversibilité',
          formule: 'A \\in GL_n(\\mathbb{K}) \\iff \\det A \\neq 0',
          contenu: 'Conditions équivalentes :\n• \\(\\det A \\neq 0\\)\n• \\(Ax = b\\) a une solution unique pour tout \\(b\\)\n• \\(Ax = 0\\) n\'a que la solution triviale \\(x = 0\\)\n• la forme échelonnée réduite de \\(A\\) est \\(I_n\\)'
        },
        {
          titre: 'Forme échelonnée réduite (RREF)',
          contenu: 'Une matrice est en RREF si :\n(R1) les lignes nulles sont en bas\n(R2) le premier coefficient non nul de chaque ligne est 1 (le pivot)\n(R3) chaque pivot est strictement à droite du précédent\n(R4) un pivot est le seul élément non nul de sa colonne\n\nLes 3 opérations élémentaires : \\(R_i \\leftrightarrow R_j\\), \\(R_i \\leftarrow \\lambda R_i\\), \\(R_i \\leftarrow R_i + \\lambda R_j\\).'
        },
        {
          titre: 'Résolution par Cramer (3×3)',
          formule: 'x = \\frac{D_x}{D},\\; y = \\frac{D_y}{D},\\; z = \\frac{D_z}{D}',
          contenu: '\\(D\\) est le déterminant principal du système. \\(D_x\\) (resp. \\(D_y\\), \\(D_z\\)) s\'obtient en remplaçant la colonne de \\(x\\) (resp. \\(y\\), \\(z\\)) par le second membre.\n\n• \\(D \\neq 0\\) : solution unique.\n• \\(D = 0\\) : Cramer ne s\'applique pas → utiliser Gauss-Jordan.'
        }
      ]
    },
    methodes: [
      {
        titre: 'Calculer un produit matriciel',
        contenu: 'Le coefficient \\((i,j)\\) du produit = ligne \\(i\\) de \\(A\\) « fois » colonne \\(j\\) de \\(B\\).\n\nExemple :\n\\[ \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}\\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix} \\]\n\nCoefficient (1,1) :\n\\[ 2\\times 2 + 1\\times 5 = 9 \\]\n\nCoefficient (1,2) :\n\\[ 2\\times 1 + 1\\times 3 = 5 \\]\n\nEn continuant :\n\\[ = \\begin{pmatrix} 9 & 5 \\\\ 25 & 14 \\end{pmatrix} \\]'
      },
      {
        titre: 'Inverser une matrice 2×2',
        contenu: 'Exemple avec \\(A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}\\).\n\nÉtape 1 — déterminant :\n\\[ \\det A = 2\\times 3 - 1\\times 5 = 1 \\]\n\nÉtape 2 — comme \\(\\det A \\neq 0\\), \\(A\\) est inversible. Appliquer la formule :\n\\[ A^{-1} = \\frac{1}{1}\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix} \\]\n\nÉtape 3 — vérifier : \\(A A^{-1} = I\\).'
      },
      {
        titre: 'Calculer un déterminant 3×3 (Sarrus)',
        contenu: 'Pour \\(\\det\\begin{pmatrix} 1 & 2 & 1 \\\\ 2 & 1 & 1 \\\\ 1 & 1 & 2 \\end{pmatrix}\\) :\n\nDiagonales descendantes (\\(+\\)) :\n\\[ 1{\\cdot}1{\\cdot}2 + 2{\\cdot}1{\\cdot}1 + 1{\\cdot}2{\\cdot}1 = 6 \\]\n\nDiagonales montantes (\\(-\\)) :\n\\[ 1{\\cdot}1{\\cdot}1 + 1{\\cdot}1{\\cdot}1 + 2{\\cdot}2{\\cdot}2 = 10 \\]\n\nRésultat :\n\\[ \\det A = 6 - 10 = -4 \\]'
      },
      {
        titre: 'Résoudre un système 3×3 par Cramer',
        contenu: 'Système \\(\\begin{cases} x+2y+z=8 \\\\ 2x+y+z=9 \\\\ x+y+2z=7 \\end{cases}\\)\n\nDéterminant principal :\n\\[ D = -4 \\quad (\\neq 0 \\Rightarrow \\text{solution unique}) \\]\n\nEn remplaçant chaque colonne par \\((8,9,7)\\) :\n\\[ D_x = -12,\\; D_y = -8,\\; D_z = -4 \\]\n\nSolution :\n\\[ x = \\frac{-12}{-4}=3,\\; y = \\frac{-8}{-4}=2,\\; z = \\frac{-4}{-4}=1 \\]'
      },
      {
        titre: 'Algorithme du pivot de Gauss-Jordan',
        contenu: '1) Repérer le 1er pivot non nul de la colonne courante.\n2) Normaliser la ligne pour avoir un pivot égal à 1 :\n\\[ R_i \\leftarrow \\tfrac{1}{a_{ii}} R_i \\]\n3) Annuler tous les autres coefficients de la colonne :\n\\[ R_j \\leftarrow R_j - a_{ji} R_i \\]\n4) Passer à la colonne suivante jusqu\'à la RREF.\n\nLecture finale : pas de variable libre → solution unique ; \\(k\\) variables libres → infinité ; ligne \\([0\\cdots 0 \\mid c\\neq 0]\\) → aucune solution.'
      },
      {
        titre: '⚠️ Pièges en calcul matriciel',
        contenu: '• \\(AB \\neq BA\\) en général : ne jamais « simplifier » l\'ordre.\n• \\((A+B)^2 = A^2 + AB + BA + B^2\\), pas \\(A^2 + 2AB + B^2\\) (car \\(AB \\neq BA\\)).\n• \\(AB = AC\\) n\'implique PAS \\(B = C\\) (sauf si \\(A\\) inversible).\n• Sarrus uniquement en 3×3.\n• Vérifier la compatibilité des dimensions avant tout produit.'
      }
    ],
    quiz: [
      {
        id: 'mat-q1',
        question: 'Le produit \\(AB\\) est défini si :',
        options: [
          'Le nb de colonnes de \\(A\\) = le nb de lignes de \\(B\\)',
          'Le nb de lignes de \\(A\\) = le nb de colonnes de \\(B\\)',
          '\\(A\\) et \\(B\\) sont carrées',
          '\\(A\\) et \\(B\\) ont la même taille'
        ],
        reponse: 0,
        explication: 'Règle de compatibilité : \\((m\\times n)(n\\times p)\\) → les dimensions internes doivent coïncider.'
      },
      {
        id: 'mat-q2',
        question: 'Que vaut \\(\\det\\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix}\\) ?',
        options: ['10', '14', '2', '12'],
        reponse: 0,
        explication: '\\(\\det = ad - bc = 3\\times 4 - 1\\times 2 = 12 - 2 = 10\\).'
      },
      {
        id: 'mat-q3',
        question: 'Une matrice carrée est inversible si et seulement si :',
        options: ['\\(\\det A \\neq 0\\)', '\\(\\det A = 0\\)', '\\(A\\) est symétrique', '\\(A = A^\\top\\)'],
        reponse: 0,
        explication: '\\(A\\) inversible \\(\\iff \\det A \\neq 0\\) (équivalent à : RREF \\(= I_n\\)).'
      },
      {
        id: 'mat-q4',
        question: 'L\'inverse de \\(A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}\\) (avec \\(\\det = 1\\)) est :',
        options: [
          '\\(\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}\\)',
          '\\(\\begin{pmatrix} 2 & 5 \\\\ 1 & 3 \\end{pmatrix}\\)',
          '\\(\\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}\\)',
          '\\(\\begin{pmatrix} -3 & 1 \\\\ 5 & -2 \\end{pmatrix}\\)'
        ],
        reponse: 0,
        explication: 'On échange la diagonale (2↔3), on change le signe de l\'anti-diagonale, on divise par \\(\\det = 1\\).'
      },
      {
        id: 'mat-q5',
        question: 'En général, pour deux matrices carrées, \\(AB\\) est :',
        options: ['Différent de \\(BA\\)', 'Égal à \\(BA\\)', 'Toujours nul', 'Toujours égal à \\(I\\)'],
        reponse: 0,
        explication: 'Le produit matriciel n\'est pas commutatif : \\(AB \\neq BA\\) en général.'
      },
      {
        id: 'mat-q6',
        question: 'La règle de Sarrus s\'applique aux matrices :',
        options: ['3×3 uniquement', 'De toute taille', '2×2 uniquement', 'Carrées de taille paire'],
        reponse: 0,
        explication: 'Sarrus n\'est valable que pour les déterminants 3×3, jamais au-delà.'
      },
      {
        id: 'mat-q7',
        question: 'Si \\(\\det A \\neq 0\\), le système \\(Ax = b\\) admet :',
        options: ['Une solution unique', 'Aucune solution', 'Une infinité de solutions', 'Exactement deux solutions'],
        reponse: 0,
        explication: '\\(A\\) inversible → \\(x = A^{-1}b\\), solution unique pour tout \\(b\\).'
      },
      {
        id: 'mat-q8',
        question: 'Que vaut \\((AB)^{-1}\\) ?',
        options: ['\\(B^{-1}A^{-1}\\)', '\\(A^{-1}B^{-1}\\)', '\\(A^{-1}B\\)', '\\((BA)^{-1}\\)'],
        reponse: 0,
        explication: 'L\'inverse d\'un produit renverse l\'ordre : \\((AB)^{-1} = B^{-1}A^{-1}\\).'
      },
      {
        id: 'mat-q9',
        question: 'Dans la méthode de Gauss-Jordan pour inverser \\(A\\), on part de :',
        options: ['\\([A \\mid I]\\)', '\\([I \\mid A]\\)', '\\([A \\mid 0]\\)', '\\([A \\mid A]\\)'],
        reponse: 0,
        explication: 'On forme \\([A \\mid I]\\) et on réduit jusqu\'à \\([I \\mid A^{-1}]\\).'
      },
      {
        id: 'mat-q10',
        question: 'Le coefficient (1,1) du produit \\(\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}\\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}\\) vaut :',
        options: ['19', '23', '17', '11'],
        reponse: 0,
        explication: 'Ligne 1 × colonne 1 : \\(1\\times 5 + 2\\times 7 = 5 + 14 = 19\\).'
      }
    ]
  },

  'maths-sl': {
    id: 'maths-sl',
    matiere: 'Maths',
    chapitre: 'Systèmes linéaires',
    description: 'Résolution par le pivot de Gauss-Jordan, RREF et analyse des solutions',
    resume: {
      sections: [
        {
          titre: 'Écriture matricielle',
          formule: 'A\\,x = b',
          contenu: 'Un système de \\(m\\) équations à \\(n\\) inconnues s\'écrit sous forme compacte \\(Ax = b\\), où \\(A\\) est la matrice des coefficients, \\(x\\) le vecteur des inconnues et \\(b\\) le second membre.\n\nMatrice augmentée : \\([A \\mid b]\\), obtenue en accolant \\(b\\) à droite de \\(A\\). C\'est sur elle qu\'on travaille.'
        },
        {
          titre: 'Trichotomie des solutions',
          contenu: 'Tout système linéaire est dans exactement un de ces 3 cas :\n\n• Aucune solution → système incompatible\n• Solution unique → compatible déterminé\n• Infinité de solutions → compatible indéterminé\n\n⚠️ Un système linéaire ne peut JAMAIS avoir exactement 2 (ou un nombre fini > 1) de solutions.'
        },
        {
          titre: 'Opérations élémentaires',
          formule: 'R_i \\leftrightarrow R_j \\quad R_i \\leftarrow \\lambda R_i \\quad R_i \\leftarrow R_i + \\lambda R_j',
          contenu: 'Les 3 opérations sur les lignes qui ne changent pas l\'ensemble des solutions :\n• échanger deux lignes\n• multiplier une ligne par \\(\\lambda \\neq 0\\)\n• ajouter à une ligne un multiple d\'une autre\n\nCe sont les seuls outils du pivot de Gauss-Jordan.'
        },
        {
          titre: 'Forme échelonnée réduite (RREF)',
          contenu: 'Objectif du pivot : amener \\([A \\mid b]\\) en RREF.\n(R1) lignes nulles en bas\n(R2) premier coefficient non nul de chaque ligne = 1 (pivot)\n(R3) chaque pivot strictement à droite du précédent\n(R4) un pivot est seul non nul dans sa colonne\n\nLa solution se lit alors directement dans le tableau.'
        },
        {
          titre: 'Algorithme du pivot',
          formule: '\\text{Système} \\Rightarrow [A\\mid b] \\xrightarrow{\\text{Gauss-Jordan}} \\text{RREF} \\Rightarrow \\text{solutions}',
          contenu: '1. Repérer le 1er pivot non nul de la colonne courante.\n2. Normaliser la ligne pour un pivot = 1.\n3. Annuler tous les autres coefficients de la colonne (au-dessus et au-dessous).\n4. Passer à la colonne suivante, répéter jusqu\'à la RREF.\n\nAstuce : échanger les lignes pour avoir un pivot égal à 1 en haut simplifie les calculs.'
        },
        {
          titre: 'Critère de compatibilité',
          formule: '[\\,0 \\cdots 0 \\mid c\\,],\\; c \\neq 0 \\;\\Rightarrow\\; \\text{incompatible}',
          contenu: 'Après réduction en RREF :\n• une ligne \\([0 \\cdots 0 \\mid c]\\) avec \\(c \\neq 0\\) traduit \\(0 = c\\) : ABSURDE → aucune solution.\n• sinon le système est compatible.\n\nNombre de variables libres :\n\\[ = n - \\text{rang}(A) \\]'
        },
        {
          titre: 'Lecture de la solution',
          contenu: 'Variables pivots : leur colonne contient un pivot.\nVariables libres : les autres.\n\n• Aucune variable libre → solution unique.\n• \\(k\\) variables libres → on leur donne \\(k\\) paramètres réels \\(\\lambda_1, \\ldots, \\lambda_k\\), et on exprime les variables pivots en fonction d\'eux → infinité de solutions.'
        },
        {
          titre: 'Interprétation géométrique (2×2)',
          schema: 'sl_droites',
          contenu: 'Un système 2×2 représente l\'intersection de deux droites dans le plan :\n• \\(D \\neq 0\\) : droites sécantes → 1 solution\n• \\(D = 0\\), \\(D_x \\neq 0\\) : droites parallèles distinctes → 0 solution\n• \\(D = D_x = D_y = 0\\) : droites confondues → infinité de solutions'
        }
      ]
    },
    methodes: [
      {
        titre: 'Résoudre un système par Gauss-Jordan',
        contenu: 'Exemple : \\(\\begin{cases} x - y + z = 1 \\\\ 2x + y + 8z = 0 \\\\ y + 2z = 3 \\end{cases}\\)\n\nÉtape 1 — matrice augmentée et on annule sous le 1er pivot :\n\\[ R_2 \\leftarrow R_2 - 2R_1 \\]\n\nÉtape 2 — on continue colonne par colonne, en normalisant chaque pivot à 1 et en annulant le reste de sa colonne.\n\nÉtape 3 — à la RREF, chaque inconnue a un pivot unique : on lit directement \\(x, y, z\\).'
      },
      {
        titre: 'Repérer un système sans solution',
        contenu: 'Pendant la réduction, surveiller l\'apparition d\'une ligne du type :\n\\[ [\\,0 \\;\\; 0 \\;\\; 0 \\mid c\\,], \\quad c \\neq 0 \\]\n\nElle traduit l\'équation impossible \\(0 = c\\).\n\nExemple : si la dernière ligne donne \\(0 = -11\\), le système est incompatible — inutile de continuer, il n\'y a aucune solution.'
      },
      {
        titre: 'Gérer les variables libres',
        contenu: 'Quand le nombre de pivots < nombre d\'inconnues, il reste des variables libres.\n\nNombre de variables libres :\n\\[ n - \\text{rang}(A) \\]\n\nExemple : 4 inconnues, 3 pivots → 1 variable libre. On pose \\(z = \\lambda\\), puis on exprime les autres :\n\\[ x = \\tfrac{17}{5} - z,\\; y = -\\tfrac{16}{5} + z,\\; t = -\\tfrac{13}{5} \\]\n\nLa solution est une droite paramétrée par \\(\\lambda \\in \\mathbb{R}\\).'
      },
      {
        titre: 'Discuter selon un paramètre',
        contenu: 'Pour un système dépendant de \\(k\\), réduire normalement puis examiner la dernière ligne.\n\nExemple : \\(\\begin{cases} kx_1 + x_2 = 1 \\\\ x_1 + kx_2 = 1 \\end{cases}\\)\n\nDéterminant :\n\\[ D = k^2 - 1 = (k-1)(k+1) \\]\n\n• \\(k \\neq \\pm 1\\) : \\(D \\neq 0\\) → solution unique.\n• \\(k = 1\\) : droites confondues → infinité.\n• \\(k = -1\\) : droites parallèles → aucune solution.'
      },
      {
        titre: '⚠️ Pièges sur les systèmes',
        contenu: '• Un système linéaire a 0, 1 ou une infinité de solutions — jamais exactement 2.\n• Bien gérer les fractions : échanger les lignes pour obtenir un pivot 1 évite de diviser trop tôt.\n• Ne pas oublier d\'appliquer chaque opération sur TOUTE la ligne (y compris la colonne du second membre).\n• Une ligne entièrement nulle \\([0\\cdots 0 \\mid 0]\\) est OK (redondante) ; c\'est \\([0\\cdots 0 \\mid c\\neq 0]\\) qui rend le système impossible.'
      }
    ],
    quiz: [
      {
        id: 'sl-q1',
        question: 'Un système linéaire peut avoir :',
        options: [
          '0, 1 ou une infinité de solutions',
          'N\'importe quel nombre de solutions',
          'Exactement 0 ou 1 solution',
          'Toujours une solution unique'
        ],
        reponse: 0,
        explication: 'Trichotomie : aucune, une seule, ou une infinité. Jamais un nombre fini > 1.'
      },
      {
        id: 'sl-q2',
        question: 'La matrice augmentée d\'un système \\(Ax = b\\) est :',
        options: ['\\([A \\mid b]\\)', '\\([A \\mid I]\\)', '\\([b \\mid A]\\)', '\\([A \\mid 0]\\)'],
        reponse: 0,
        explication: 'On accole le second membre \\(b\\) à droite de la matrice des coefficients \\(A\\).'
      },
      {
        id: 'sl-q3',
        question: 'Laquelle N\'EST PAS une opération élémentaire valide ?',
        options: [
          'Multiplier une ligne par 0',
          'Échanger deux lignes',
          'Multiplier une ligne par \\(\\lambda \\neq 0\\)',
          'Ajouter un multiple d\'une ligne à une autre'
        ],
        reponse: 0,
        explication: 'Multiplier par 0 détruit l\'information de la ligne ; le scalaire doit être non nul.'
      },
      {
        id: 'sl-q4',
        question: 'Une ligne \\([0\\;0\\;0 \\mid 5]\\) en RREF signifie :',
        options: ['Système incompatible (0 = 5)', 'Une variable libre', 'Solution unique', 'Ligne redondante'],
        reponse: 0,
        explication: 'Elle traduit \\(0 = 5\\), équation impossible → aucune solution.'
      },
      {
        id: 'sl-q5',
        question: 'Le nombre de variables libres d\'un système compatible vaut :',
        options: ['\\(n - \\text{rang}(A)\\)', '\\(\\text{rang}(A)\\)', '\\(n\\)', '\\(m - n\\)'],
        reponse: 0,
        explication: 'Variables libres = nombre d\'inconnues moins nombre de pivots (= rang).'
      },
      {
        id: 'sl-q6',
        question: 'Si après réduction il n\'y a aucune variable libre, le système a :',
        options: ['Une solution unique', 'Aucune solution', 'Une infinité', 'Deux solutions'],
        reponse: 0,
        explication: 'Chaque inconnue est déterminée par son pivot → solution unique.'
      },
      {
        id: 'sl-q7',
        question: 'Géométriquement, deux droites parallèles distinctes correspondent à :',
        options: ['Aucune solution', 'Une solution', 'Une infinité', 'Un pivot nul'],
        reponse: 0,
        explication: 'Droites parallèles distinctes ne se croisent jamais → système incompatible.'
      },
      {
        id: 'sl-q8',
        question: 'Pour le système \\(2\\times 2\\), la condition \\(D = D_x = D_y = 0\\) donne :',
        options: ['Une infinité (droites confondues)', 'Aucune solution', 'Une solution unique', 'Un système carré'],
        reponse: 0,
        explication: 'Tous les déterminants nuls → les deux droites sont confondues → infinité de solutions.'
      },
      {
        id: 'sl-q9',
        question: 'Dans la RREF, un pivot est :',
        options: [
          'Le seul élément non nul de sa colonne, égal à 1',
          'Le plus grand coefficient de la ligne',
          'Toujours sur la diagonale',
          'Un coefficient quelconque'
        ],
        reponse: 0,
        explication: 'En RREF, chaque pivot vaut 1 et est l\'unique élément non nul de sa colonne (R2 et R4).'
      },
      {
        id: 'sl-q10',
        question: 'Le système \\(\\begin{cases} x+y=3 \\\\ x-y=1 \\end{cases}\\) a pour solution :',
        options: ['\\(x=2,\\;y=1\\)', '\\(x=1,\\;y=2\\)', 'Aucune solution', 'Une infinité'],
        reponse: 0,
        explication: 'En additionnant : \\(2x = 4 \\Rightarrow x = 2\\), puis \\(y = 3 - 2 = 1\\).'
      }
    ]
  },

  'maths-edo': {
    id: 'maths-edo',
    matiere: 'Maths',
    chapitre: 'Équations différentielles & Laplace',
    description: 'EDO du 1er et 2nd ordre, et résolution par la transformée de Laplace',
    resume: {
      sections: [
        {
          titre: 'Vocabulaire des EDO',
          formule: 'a_n\\,y^{(n)} + \\cdots + a_1\\,y\' + a_0\\,y = f(t)',
          contenu: 'Une équation différentielle relie une fonction inconnue \\(y(t)\\) à ses dérivées. L\'ordre = celui de la dérivée la plus élevée.\n\n• Homogène (sans second membre) : \\(f(t) = 0\\).\n• Complète : \\(f(t) \\neq 0\\).\n\nProblème de Cauchy = EDO + conditions initiales. Une EDO d\'ordre \\(n\\) a une solution générale à \\(n\\) constantes, fixées par \\(n\\) conditions.'
        },
        {
          titre: 'Structure de la solution',
          formule: 'y(t) = y_h(t) + y_p(t)',
          contenu: 'La solution générale d\'une EDO linéaire complète est la somme de :\n• \\(y_h\\) : solution de l\'équation homogène (solution générale sans second membre)\n• \\(y_p\\) : une solution particulière de l\'équation complète\n\nOn résout donc toujours en deux temps : d\'abord l\'homogène, puis une particulière.'
        },
        {
          titre: 'EDO d\'ordre 1 — variables séparables',
          formule: 'y\' = g(t)\\,h(y) \\;\\Rightarrow\\; \\frac{dy}{h(y)} = g(t)\\,dt',
          contenu: 'On sépare ce qui dépend de \\(t\\) de ce qui dépend de \\(y\\), puis on intègre des deux côtés.\n\nExemple : \\(y\' = ty\\) → \\(\\dfrac{dy}{y} = t\\,dt\\) → \\(\\ln|y| = \\dfrac{t^2}{2} + C\\) → \\(y = C e^{t^2/2}\\).'
        },
        {
          titre: 'EDO d\'ordre 1 — linéaire (facteur intégrant)',
          formule: 'y\' + a(t)\\,y = b(t) \\qquad \\mu(t) = e^{\\int a(t)\\,dt}',
          contenu: 'On multiplie par le facteur intégrant \\(\\mu(t)\\), ce qui fait apparaître une dérivée de produit :\n\\[ \\big(\\mu(t)\\,y\\big)\' = \\mu(t)\\,b(t) \\]\npuis on intègre.\n\nCas \\(a\\) constant : \\(\\mu = e^{at}\\) et \\(y_h = C e^{-at}\\).'
        },
        {
          titre: 'EDO d\'ordre 2 — équation caractéristique',
          formule: 'a y\'\' + b y\' + c y = 0 \\;\\Rightarrow\\; a r^2 + b r + c = 0',
          contenu: 'On cherche \\(y_h\\) sous la forme \\(e^{rt}\\). Selon \\(\\Delta = b^2 - 4ac\\) :\n\n• \\(\\Delta > 0\\), racines \\(r_1 \\neq r_2\\) : \\(y_h = C_1 e^{r_1 t} + C_2 e^{r_2 t}\\)\n• \\(\\Delta = 0\\), racine double \\(r_0\\) : \\(y_h = (C_1 + C_2 t)e^{r_0 t}\\)\n• \\(\\Delta < 0\\), \\(r = \\alpha \\pm i\\beta\\) : \\(y_h = e^{\\alpha t}(C_1 \\cos\\beta t + C_2 \\sin\\beta t)\\)'
        },
        {
          titre: 'Solution particulière (coefficients indéterminés)',
          formule: '\\begin{array}{c|c} f(t) & \\text{forme de } y_p \\\\ \\hline \\\\[-9pt] K & A \\\\[3pt] t^n & A_n t^n + \\cdots + A_0 \\\\[3pt] K e^{\\lambda t}\\ (\\lambda \\text{ non racine}) & A e^{\\lambda t} \\\\[3pt] K e^{\\lambda t}\\ (\\lambda \\text{ racine simple}) & A t\\,e^{\\lambda t} \\\\[3pt] K\\cos\\omega t \\text{ ou } K\\sin\\omega t & A\\cos\\omega t + B\\sin\\omega t \\end{array}',
          contenu: 'Quand \\(f(t)\\) a une forme simple, on cherche \\(y_p\\) de la même forme, on la substitue dans l\'EDO et on identifie les coefficients.\n\n⚠️ Si \\(\\lambda\\) est racine de l\'équation caractéristique, multiplier la forme par \\(t\\) (ou \\(t^2\\) si racine double).'
        },
        {
          titre: 'Transformée de Laplace — définition',
          formule: 'F(s) = \\mathcal{L}\\{f\\}(s) = \\int_0^{+\\infty} f(t)\\,e^{-st}\\,dt',
          contenu: 'La transformée convertit une fonction du temps \\(t\\) en une fonction de la variable \\(s\\). Elle transforme une EDO en équation algébrique.\n\nDeux fonctions clés :\n• Échelon unité (Heaviside) \\(u(t)\\) : 0 si \\(t<0\\), 1 si \\(t \\geq 0\\).\n• Impulsion de Dirac \\(\\delta(t)\\) : avec \\(\\mathcal{L}\\{\\delta\\} = 1\\).'
        },
        {
          titre: 'Transformées usuelles',
          formule: '\\begin{array}{c|c} f(t) & F(s) \\\\ \\hline \\\\[-9pt] 1\\ (\\text{échelon}) & 1/s \\\\[3pt] t^n & n!/s^{n+1} \\\\[3pt] e^{at} & 1/(s-a) \\\\[4pt] \\sin\\omega t & \\omega/(s^2+\\omega^2) \\\\[4pt] \\cos\\omega t & s/(s^2+\\omega^2) \\\\[3pt] \\delta(t) & 1 \\end{array}',
          contenu: 'Table de référence à connaître. On lit dans les deux sens : \\(\\mathcal{L}\\) (temps → \\(s\\)) et \\(\\mathcal{L}^{-1}\\) (\\(s\\) → temps).\n\nDécalage en \\(s\\) : \\(\\mathcal{L}\\{e^{at}f(t)\\} = F(s-a)\\).'
        },
        {
          titre: 'Propriété clé : la dérivée',
          formule: '\\mathcal{L}\\{f\'\\} = sF(s) - f(0)',
          contenu: 'C\'est le cœur de la méthode :\n\\[ \\mathcal{L}\\{f\'\'\\} = s^2 F(s) - s f(0) - f\'(0) \\]\n\nDériver (opération difficile) devient une multiplication par \\(s\\) (algébrique), et les conditions initiales apparaissent naturellement.\n\nLinéarité : \\(\\mathcal{L}\\{\\alpha f + \\beta g\\} = \\alpha F + \\beta G\\).'
        },
        {
          titre: 'Résolution d\'une EDO par Laplace',
          formule: 'y(t) \\xrightarrow{\\mathcal{L}} Y(s) \\;\\to\\; \\text{isoler } Y(s) \\;\\xrightarrow{\\mathcal{L}^{-1}} y(t)',
          contenu: '1. Transformer : appliquer \\(\\mathcal{L}\\) aux deux membres (les dérivées deviennent des produits par \\(s\\), les C.I. apparaissent).\n2. Isoler \\(Y(s)\\) : simple équation algébrique.\n3. Inverser : \\(y(t) = \\mathcal{L}^{-1}\\{Y(s)\\}\\) par décomposition en éléments simples, puis lecture de la table.\n\nAvantage : les conditions initiales sont intégrées d\'emblée.'
        }
      ]
    },
    methodes: [
      {
        titre: 'Résoudre une EDO séparable',
        contenu: 'Exemple : \\(y\' = -2y\\), \\(y(0) = 3\\).\n\nÉtape 1 — séparer :\n\\[ \\frac{dy}{y} = -2\\,dt \\]\n\nÉtape 2 — intégrer :\n\\[ \\ln|y| = -2t + C_1 \\;\\Rightarrow\\; y = C e^{-2t} \\]\n\nÉtape 3 — condition initiale :\n\\[ y(0) = C = 3 \\;\\Rightarrow\\; y(t) = 3e^{-2t} \\]'
      },
      {
        titre: 'EDO linéaire d\'ordre 1 (homogène + particulière)',
        contenu: 'Exemple : \\(y\' + 2y = 4\\), \\(y(0) = 1\\).\n\nHomogène : \\(y\' + 2y = 0 \\Rightarrow y_h = C e^{-2t}\\).\n\nParticulière (second membre constant → \\(y_p\\) constante) :\n\\[ 2 y_p = 4 \\Rightarrow y_p = 2 \\]\n\nGénérale : \\(y = C e^{-2t} + 2\\). Condition : \\(y(0) = C + 2 = 1 \\Rightarrow C = -1\\).\n\\[ y(t) = 2 - e^{-2t} \\]'
      },
      {
        titre: 'EDO d\'ordre 2 par l\'équation caractéristique',
        contenu: 'Exemple : \\(y\'\' + 2y\' + 5y = 0\\).\n\nÉquation caractéristique :\n\\[ r^2 + 2r + 5 = 0, \\quad \\Delta = 4 - 20 = -16 < 0 \\]\n\nRacines complexes \\(r = -1 \\pm 2i\\) (donc \\(\\alpha = -1\\), \\(\\beta = 2\\)) :\n\\[ y_h = e^{-t}(C_1 \\cos 2t + C_2 \\sin 2t) \\]'
      },
      {
        titre: 'Trouver une solution particulière',
        contenu: 'Exemple : \\(y\'\' - 3y\' + 2y = 4e^{3t}\\).\n\nIci \\(\\lambda = 3\\) n\'est pas racine de \\(r^2 - 3r + 2\\) → on cherche \\(y_p = A e^{3t}\\).\n\nEn substituant (\\(y_p\'\' = 9Ae^{3t}\\), etc.) :\n\\[ 9A - 9A + 2A = 4 \\Rightarrow A = 2 \\]\n\\[ y_p = 2e^{3t} \\]\n\n⚠️ Si \\(\\lambda\\) avait été racine, on aurait pris \\(y_p = A t\\,e^{3t}\\).'
      },
      {
        titre: 'Résoudre une EDO par Laplace',
        contenu: 'Exemple : \\(y\' + 2y = 4\\), \\(y(0) = 1\\).\n\nÉtape 1 — transformer (\\(\\mathcal{L}\\{y\'\\} = sY - y(0)\\)) :\n\\[ sY - 1 + 2Y = \\frac{4}{s} \\Rightarrow (s+2)Y = 1 + \\frac{4}{s} \\]\n\nÉtape 2 — isoler et décomposer :\n\\[ Y(s) = \\frac{1}{s+2} + \\frac{4}{s(s+2)} = \\frac{2}{s} - \\frac{1}{s+2} \\]\n\nÉtape 3 — inverser (table) :\n\\[ y(t) = 2 - e^{-2t} \\]'
      },
      {
        titre: '⚠️ Pièges sur les EDO',
        contenu: '• Ne pas oublier la constante d\'intégration, fixée par les conditions initiales.\n• Si \\(\\lambda\\) (du second membre \\(e^{\\lambda t}\\)) est racine caractéristique, multiplier \\(y_p\\) par \\(t\\).\n• Solution complète = homogène + particulière (ne pas oublier \\(y_h\\)).\n• En Laplace, bien faire apparaître \\(f(0)\\) et \\(f\'(0)\\) via la formule de la dérivée.\n• \\(\\mathcal{L}\\{f\'\'\\} = s^2 F(s) - s f(0) - f\'(0)\\) : attention aux deux termes de C.I.'
      }
    ],
    quiz: [
      {
        id: 'edo-q1',
        question: 'L\'ordre d\'une EDO est :',
        options: [
          'L\'ordre de la dérivée la plus élevée',
          'Le nombre de termes',
          'Le degré du polynôme',
          'Le nombre de conditions initiales'
        ],
        reponse: 0,
        explication: 'L\'ordre = celui de la dérivée la plus élevée qui figure dans l\'équation.'
      },
      {
        id: 'edo-q2',
        question: 'La solution générale d\'une EDO linéaire complète est :',
        options: ['\\(y_h + y_p\\)', '\\(y_h \\times y_p\\)', '\\(y_h - y_p\\)', '\\(y_p\\) seule'],
        reponse: 0,
        explication: 'Somme de la solution homogène et d\'une solution particulière.'
      },
      {
        id: 'edo-q3',
        question: 'Pour \\(y\' = -2y\\), \\(y(0)=3\\), la solution est :',
        options: ['\\(3e^{-2t}\\)', '\\(3e^{2t}\\)', '\\(-2e^{3t}\\)', '\\(3 - 2t\\)'],
        reponse: 0,
        explication: 'Séparable : \\(y = Ce^{-2t}\\), et \\(y(0)=C=3\\) → \\(y = 3e^{-2t}\\).'
      },
      {
        id: 'edo-q4',
        question: 'Le facteur intégrant de \\(y\' + a(t)y = b(t)\\) est :',
        options: ['\\(e^{\\int a\\,dt}\\)', '\\(e^{-\\int a\\,dt}\\)', '\\(\\int a\\,dt\\)', '\\(e^{at^2}\\)'],
        reponse: 0,
        explication: '\\(\\mu(t) = e^{\\int a(t)\\,dt}\\) transforme le membre de gauche en \\((\\mu y)\'\\).'
      },
      {
        id: 'edo-q5',
        question: 'Pour \\(y\'\' + 2y\' + 5y = 0\\), les racines caractéristiques sont :',
        options: ['\\(-1 \\pm 2i\\)', '\\(1 \\pm 2i\\)', '\\(-1, -5\\)', '\\(2, 5\\)'],
        reponse: 0,
        explication: '\\(r^2+2r+5=0\\), \\(\\Delta=-16\\), \\(r = \\frac{-2 \\pm 4i}{2} = -1 \\pm 2i\\).'
      },
      {
        id: 'edo-q6',
        question: 'Si l\'équation caractéristique a une racine double \\(r_0\\), \\(y_h\\) vaut :',
        options: [
          '\\((C_1 + C_2 t)e^{r_0 t}\\)',
          '\\(C_1 e^{r_0 t} + C_2 e^{r_0 t}\\)',
          '\\(C_1 \\cos r_0 t\\)',
          '\\(C_1 e^{r_0 t}\\)'
        ],
        reponse: 0,
        explication: 'Racine double → \\(y_h = (C_1 + C_2 t)e^{r_0 t}\\).'
      },
      {
        id: 'edo-q7',
        question: 'La transformée de Laplace de \\(f\'\\) est :',
        options: ['\\(sF(s) - f(0)\\)', '\\(sF(s)\\)', '\\(F(s)/s\\)', '\\(F(s) - f(0)\\)'],
        reponse: 0,
        explication: 'C\'est la propriété clé : \\(\\mathcal{L}\\{f\'\\} = sF(s) - f(0)\\).'
      },
      {
        id: 'edo-q8',
        question: 'La transformée de Laplace de \\(e^{at}\\) est :',
        options: ['\\(\\dfrac{1}{s-a}\\)', '\\(\\dfrac{1}{s+a}\\)', '\\(\\dfrac{a}{s}\\)', '\\(\\dfrac{s}{s^2+a^2}\\)'],
        reponse: 0,
        explication: '\\(\\mathcal{L}\\{e^{at}\\} = \\dfrac{1}{s-a}\\) (pour \\(s>a\\)).'
      },
      {
        id: 'edo-q9',
        question: 'Pourquoi Laplace est-elle utile pour les EDO ?',
        options: [
          'Elle transforme l\'EDO en équation algébrique',
          'Elle supprime les conditions initiales',
          'Elle évite toute intégration',
          'Elle élimine la variable s'
        ],
        reponse: 0,
        explication: 'La dérivation devient une multiplication par \\(s\\) : on résout une simple équation en \\(s\\).'
      },
      {
        id: 'edo-q10',
        question: 'Pour \\(y\'\' - 3y\' + 2y = 4e^{3t}\\), quelle forme d\'essai pour \\(y_p\\) ?',
        options: [
          '\\(A e^{3t}\\) (car 3 n\'est pas racine)',
          '\\(A t\\,e^{3t}\\)',
          '\\(A\\cos 3t\\)',
          '\\(A t^2\\)'
        ],
        reponse: 0,
        explication: '\\(r^2-3r+2\\) a pour racines 1 et 2 ; 3 n\'est pas racine → \\(y_p = A e^{3t}\\).'
      }
    ]
  },

  'maths-trigo': {
    id: 'maths-trigo',
    matiere: 'Maths',
    chapitre: 'Trigonométrie',
    description: 'Rappel : cercle trigonométrique, valeurs remarquables et formules usuelles',
    resume: {
      sections: [
        {
          titre: 'Le cercle trigonométrique',
          schema: 'cercle_trigo',
          contenu: 'Sur le cercle de rayon 1, un angle \\(x\\) (mesuré depuis l\'axe des abscisses, sens direct) repère un point de coordonnées \\((\\cos x,\\ \\sin x)\\).\n\n• L\'abscisse donne \\(\\cos x\\) (axe horizontal).\n• L\'ordonnée donne \\(\\sin x\\) (axe vertical).\n\nUn tour complet = \\(2\\pi\\) rad = \\(360°\\). Les fonctions \\(\\cos\\) et \\(\\sin\\) sont \\(2\\pi\\)-périodiques.'
        },
        {
          titre: 'Tableau des valeurs remarquables',
          formule: '\\begin{array}{c|ccccc} x & 0 & \\dfrac{\\pi}{6} & \\dfrac{\\pi}{4} & \\dfrac{\\pi}{3} & \\dfrac{\\pi}{2} \\\\[4pt] \\hline \\\\[-8pt] \\cos x & 1 & \\dfrac{\\sqrt{3}}{2} & \\dfrac{\\sqrt{2}}{2} & \\dfrac{1}{2} & 0 \\\\[6pt] \\sin x & 0 & \\dfrac{1}{2} & \\dfrac{\\sqrt{2}}{2} & \\dfrac{\\sqrt{3}}{2} & 1 \\\\[6pt] \\tan x & 0 & \\dfrac{1}{\\sqrt{3}} & 1 & \\sqrt{3} & \\text{n.d.} \\end{array}',
          contenu: 'Équivalences en degrés : \\(0,\\ 30°,\\ 45°,\\ 60°,\\ 90°\\).\n\nAstuce mémo : pour \\(\\cos\\) sur \\(0,\\frac{\\pi}{6},\\frac{\\pi}{4},\\frac{\\pi}{3},\\frac{\\pi}{2}\\), écrire \\(\\dfrac{\\sqrt{4}}{2},\\dfrac{\\sqrt{3}}{2},\\dfrac{\\sqrt{2}}{2},\\dfrac{\\sqrt{1}}{2},\\dfrac{\\sqrt{0}}{2}\\). Pour \\(\\sin\\), c\'est l\'ordre inverse.\n\n(\\(\\tan \\frac{\\pi}{2}\\) n\'est pas définie car \\(\\cos\\frac{\\pi}{2}=0\\).)'
        },
        {
          titre: 'Définitions et tangente',
          formule: '\\tan x = \\dfrac{\\sin x}{\\cos x} \\quad (\\cos x \\neq 0)',
          contenu: '• \\(\\cos x\\) : abscisse sur le cercle, \\(\\cos x \\in [-1, 1]\\).\n• \\(\\sin x\\) : ordonnée sur le cercle, \\(\\sin x \\in [-1, 1]\\).\n• \\(\\tan x\\) : pente de la droite \\((OM)\\).\n\n\\(\\cos\\) est paire : \\(\\cos(-x) = \\cos x\\).\n\\(\\sin\\) est impaire : \\(\\sin(-x) = -\\sin x\\).'
        },
        {
          titre: 'Identité fondamentale',
          formule: '\\cos^2 x + \\sin^2 x = 1',
          contenu: 'Conséquences directes (en divisant par \\(\\cos^2 x\\) ou \\(\\sin^2 x\\)) :\n\\[ 1 + \\tan^2 x = \\frac{1}{\\cos^2 x} \\]\n\nElle traduit le théorème de Pythagore appliqué au point du cercle de rayon 1.'
        },
        {
          titre: 'Formules d\'addition',
          formule: '\\cos(a \\pm b) = \\cos a \\cos b \\mp \\sin a \\sin b',
          contenu: '\\[ \\sin(a \\pm b) = \\sin a \\cos b \\pm \\cos a \\sin b \\]\n\\[ \\tan(a \\pm b) = \\frac{\\tan a \\pm \\tan b}{1 \\mp \\tan a \\tan b} \\]\n\n⚠️ Attention aux signes : pour \\(\\cos\\), le signe s\'inverse (\\(\\mp\\)) ; pour \\(\\sin\\), il se conserve (\\(\\pm\\)).'
        },
        {
          titre: 'Formules de duplication',
          formule: '\\sin(2x) = 2\\sin x \\cos x',
          contenu: '\\[ \\cos(2x) = \\cos^2 x - \\sin^2 x = 2\\cos^2 x - 1 = 1 - 2\\sin^2 x \\]\n\nFormules de linéarisation (utiles pour intégrer) :\n\\[ \\cos^2 x = \\frac{1 + \\cos 2x}{2}, \\qquad \\sin^2 x = \\frac{1 - \\cos 2x}{2} \\]'
        },
        {
          titre: 'Angles associés (symétries)',
          contenu: 'À lire directement sur le cercle :\n\n• Opposé : \\(\\cos(-x)=\\cos x\\), \\(\\sin(-x)=-\\sin x\\)\n• Supplémentaire : \\(\\cos(\\pi-x)=-\\cos x\\), \\(\\sin(\\pi-x)=\\sin x\\)\n• \\(\\pi+x\\) : \\(\\cos(\\pi+x)=-\\cos x\\), \\(\\sin(\\pi+x)=-\\sin x\\)\n• Complémentaire : \\(\\cos\\!\\left(\\frac{\\pi}{2}-x\\right)=\\sin x\\), \\(\\sin\\!\\left(\\frac{\\pi}{2}-x\\right)=\\cos x\\)\n• \\(\\frac{\\pi}{2}+x\\) : \\(\\cos\\!\\left(\\frac{\\pi}{2}+x\\right)=-\\sin x\\), \\(\\sin\\!\\left(\\frac{\\pi}{2}+x\\right)=\\cos x\\)'
        },
        {
          titre: 'Dérivées et primitives',
          formule: '(\\sin x)\' = \\cos x \\qquad (\\cos x)\' = -\\sin x',
          contenu: '\\[ (\\tan x)\' = 1 + \\tan^2 x = \\frac{1}{\\cos^2 x} \\]\n\nPrimitives :\n\\[ \\int \\cos x\\,dx = \\sin x + c, \\qquad \\int \\sin x\\,dx = -\\cos x + c \\]'
        }
      ]
    },
    methodes: [
      {
        titre: 'Lire une valeur sur le cercle',
        contenu: 'Pour un angle \\(x\\) donné :\n1. Placer le point sur le cercle (sens direct depuis l\'axe horizontal).\n2. Projeter sur l\'axe horizontal → \\(\\cos x\\).\n3. Projeter sur l\'axe vertical → \\(\\sin x\\).\n\nExemple \\(x = \\frac{2\\pi}{3}\\) (120°) : point dans le 2e quadrant.\n\\[ \\cos\\frac{2\\pi}{3} = -\\frac{1}{2}, \\qquad \\sin\\frac{2\\pi}{3} = \\frac{\\sqrt{3}}{2} \\]'
      },
      {
        titre: 'Retrouver une valeur hors du 1er quadrant',
        contenu: 'On ramène l\'angle au 1er quadrant via les angles associés, puis on ajuste le signe selon le quadrant.\n\nSignes par quadrant :\n• Q1 (0 à \\(\\frac{\\pi}{2}\\)) : \\(\\cos +\\), \\(\\sin +\\)\n• Q2 (\\(\\frac{\\pi}{2}\\) à \\(\\pi\\)) : \\(\\cos -\\), \\(\\sin +\\)\n• Q3 (\\(\\pi\\) à \\(\\frac{3\\pi}{2}\\)) : \\(\\cos -\\), \\(\\sin -\\)\n• Q4 (\\(\\frac{3\\pi}{2}\\) à \\(2\\pi\\)) : \\(\\cos +\\), \\(\\sin -\\)'
      },
      {
        titre: 'Résoudre cos x = a ou sin x = a',
        contenu: 'Équation \\(\\cos x = \\cos \\alpha\\) :\n\\[ x = \\alpha + 2k\\pi \\quad \\text{ou} \\quad x = -\\alpha + 2k\\pi,\\; k \\in \\mathbb{Z} \\]\n\nÉquation \\(\\sin x = \\sin \\alpha\\) :\n\\[ x = \\alpha + 2k\\pi \\quad \\text{ou} \\quad x = \\pi - \\alpha + 2k\\pi,\\; k \\in \\mathbb{Z} \\]\n\nExemple : \\(\\cos x = \\frac{1}{2} = \\cos\\frac{\\pi}{3}\\) donne \\(x = \\pm\\frac{\\pi}{3} + 2k\\pi\\).'
      },
      {
        titre: 'Mémoriser le tableau (méthode des racines)',
        contenu: 'Pour les angles \\(0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}\\), écrire \\(\\cos\\) comme :\n\\[ \\frac{\\sqrt{4}}{2},\\ \\frac{\\sqrt{3}}{2},\\ \\frac{\\sqrt{2}}{2},\\ \\frac{\\sqrt{1}}{2},\\ \\frac{\\sqrt{0}}{2} \\]\nce qui donne \\(1, \\frac{\\sqrt3}{2}, \\frac{\\sqrt2}{2}, \\frac12, 0\\).\n\nPour \\(\\sin\\), c\'est exactement l\'inverse (de \\(\\frac{\\sqrt0}{2}\\) à \\(\\frac{\\sqrt4}{2}\\)). Simple et infaillible.'
      }
    ]
  },

  'meca-vecteurs': {
    id: 'meca-vecteurs',
    matiere: 'Mécanique',
    chapitre: 'Vecteurs',
    description: 'Composantes, norme, produits scalaire, vectoriel et mixte',
    resume: {
      sections: [
        {
          titre: 'Composantes et norme',
          formule: '\\vec{v} = v_x\\,\\vec{i} + v_y\\,\\vec{j} + v_z\\,\\vec{k}',
          contenu: 'Un vecteur a une direction, un sens et une norme (longueur).\n\nNorme :\n\\[ \\|\\vec{v}\\| = \\sqrt{v_x^2 + v_y^2 + v_z^2} \\]\n\nVecteur unitaire (norme 1) : \\(\\hat{v} = \\dfrac{\\vec{v}}{\\|\\vec{v}\\|}\\).\n\nEn 2D, à partir d\'une norme et d\'un angle : \\(v_x = v\\cos\\theta\\), \\(v_y = v\\sin\\theta\\).'
        },
        {
          titre: 'Opérations de base',
          formule: '\\vec{a} + \\vec{b} = (a_x+b_x,\\; a_y+b_y,\\; a_z+b_z)',
          contenu: 'Addition et multiplication par un scalaire se font composante par composante :\n\\[ \\lambda\\vec{a} = (\\lambda a_x,\\; \\lambda a_y,\\; \\lambda a_z) \\]\n\nGéométriquement, l\'addition suit la règle du parallélogramme (on enchaîne les vecteurs queue-tête).'
        },
        {
          titre: 'Produit scalaire',
          formule: '\\vec{u}\\cdot\\vec{v} = u_x v_x + u_y v_y + u_z v_z = \\|\\vec{u}\\|\\,\\|\\vec{v}\\|\\cos\\theta',
          contenu: 'Le résultat est un SCALAIRE (un nombre).\n\n• Commutatif : \\(\\vec{u}\\cdot\\vec{v} = \\vec{v}\\cdot\\vec{u}\\)\n• \\(\\vec{u}\\cdot\\vec{u} = \\|\\vec{u}\\|^2\\)\n• Orthogonalité : \\(\\vec{u}\\cdot\\vec{v} = 0 \\iff \\vec{u}\\perp\\vec{v}\\)\n\nSert à calculer un angle : \\(\\cos\\theta = \\dfrac{\\vec{u}\\cdot\\vec{v}}{\\|\\vec{u}\\|\\,\\|\\vec{v}\\|}\\)'
        },
        {
          titre: 'Projection',
          formule: '\\text{proj}_{\\vec{v}}\\,\\vec{u} = \\frac{\\vec{u}\\cdot\\vec{v}}{\\|\\vec{v}\\|^2}\\,\\vec{v}',
          contenu: 'La projection de \\(\\vec{u}\\) sur \\(\\vec{v}\\) donne la « part » de \\(\\vec{u}\\) dans la direction de \\(\\vec{v}\\).\n\nCosinus directeurs (orientation dans l\'espace) :\n\\[ \\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1 \\]'
        },
        {
          titre: 'Produit vectoriel',
          formule: '\\vec{u}\\wedge\\vec{v} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ u_x & u_y & u_z \\\\ v_x & v_y & v_z \\end{vmatrix}',
          contenu: 'Le résultat est un VECTEUR, perpendiculaire à \\(\\vec{u}\\) et \\(\\vec{v}\\) (règle de la main droite).\n\n• Norme : \\(\\|\\vec{u}\\wedge\\vec{v}\\| = \\|\\vec{u}\\|\\,\\|\\vec{v}\\|\\,|\\sin\\theta|\\) = aire du parallélogramme.\n• Anti-commutatif : \\(\\vec{u}\\wedge\\vec{v} = -\\,\\vec{v}\\wedge\\vec{u}\\)\n• Colinéarité : \\(\\vec{u}\\wedge\\vec{v} = \\vec{0} \\iff \\vec{u}\\parallel\\vec{v}\\)\n\nBase : \\(\\vec{i}\\wedge\\vec{j} = \\vec{k}\\), \\(\\vec{j}\\wedge\\vec{k} = \\vec{i}\\), \\(\\vec{k}\\wedge\\vec{i} = \\vec{j}\\).'
        },
        {
          titre: 'Produit mixte',
          formule: '\\vec{u}\\cdot(\\vec{v}\\wedge\\vec{w}) = \\begin{vmatrix} u_x & u_y & u_z \\\\ v_x & v_y & v_z \\\\ w_x & w_y & w_z \\end{vmatrix}',
          contenu: 'Le résultat est un scalaire = volume (signé) du parallélépipède formé par les trois vecteurs.\n\nInvariant par permutation circulaire :\n\\[ \\vec{u}\\cdot(\\vec{v}\\wedge\\vec{w}) = \\vec{v}\\cdot(\\vec{w}\\wedge\\vec{u}) = \\vec{w}\\cdot(\\vec{u}\\wedge\\vec{v}) \\]\n\nSi le produit mixte est nul, les trois vecteurs sont coplanaires.'
        }
      ]
    },
    methodes: [
      {
        titre: 'Calculer l\'angle entre deux vecteurs',
        contenu: 'On passe par le produit scalaire.\n\nExemple : \\(\\vec{a} = (1,2,2)\\), \\(\\vec{b} = (3,0,4)\\).\n\nProduit scalaire :\n\\[ \\vec{a}\\cdot\\vec{b} = 1{\\cdot}3 + 2{\\cdot}0 + 2{\\cdot}4 = 11 \\]\n\nNormes : \\(\\|\\vec{a}\\| = 3\\), \\(\\|\\vec{b}\\| = 5\\).\n\nAngle :\n\\[ \\cos\\theta = \\frac{11}{3\\times 5} = 0{,}733 \\Rightarrow \\theta \\approx 42{,}8° \\]'
      },
      {
        titre: 'Trouver un vecteur normal à un plan',
        contenu: 'Le produit vectoriel de deux vecteurs du plan donne un vecteur normal.\n\nExemple : \\(\\vec{a} = (1,2,0)\\), \\(\\vec{b} = (0,1,1)\\).\n\\[ \\vec{n} = \\vec{a}\\wedge\\vec{b} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1 & 2 & 0 \\\\ 0 & 1 & 1 \\end{vmatrix} \\]\n\\[ \\vec{n} = (2{\\cdot}1 - 0{\\cdot}1,\\; 0{\\cdot}0 - 1{\\cdot}1,\\; 1{\\cdot}1 - 2{\\cdot}0) = (2,-1,1) \\]\n\nVérifier : \\(\\vec{n}\\cdot\\vec{a} = 0\\) et \\(\\vec{n}\\cdot\\vec{b} = 0\\).'
      },
      {
        titre: 'Mémo : scalaire vs vectoriel',
        contenu: 'Ne pas confondre les deux produits :\n\n• Produit scalaire \\(\\vec{u}\\cdot\\vec{v}\\) → un NOMBRE, avec \\(\\cos\\theta\\). Sert aux angles, au travail d\'une force, à l\'orthogonalité.\n• Produit vectoriel \\(\\vec{u}\\wedge\\vec{v}\\) → un VECTEUR, avec \\(\\sin\\theta\\). Sert aux normales, aux moments, aux aires.\n\nMoyen mnémo : sCalaire = Cos, veCtoriel ⟂ (perpendiculaire, sin).'
      },
      {
        titre: '⚠️ Pièges sur les vecteurs',
        contenu: '• Le produit vectoriel n\'est PAS commutatif : \\(\\vec{u}\\wedge\\vec{v} = -\\vec{v}\\wedge\\vec{u}\\).\n• \\(\\vec{u}\\cdot\\vec{v}\\) donne un scalaire, \\(\\vec{u}\\wedge\\vec{v}\\) un vecteur : ne pas mélanger.\n• La règle de Sarrus pour le produit mixte ne marche qu\'en 3×3.\n• Toujours normaliser (\\(\\hat{v} = \\vec{v}/\\|\\vec{v}\\|\\)) quand on a besoin d\'une direction unitaire.'
      }
    ],
    quiz: [
      {
        id: 'vec-q1',
        question: 'La norme de \\(\\vec{v} = (3, 4, 0)\\) vaut :',
        options: ['5', '7', '\\(\\sqrt{7}\\)', '12'],
        reponse: 0,
        explication: '\\(\\|\\vec{v}\\| = \\sqrt{3^2+4^2+0^2} = \\sqrt{25} = 5\\).'
      },
      {
        id: 'vec-q2',
        question: 'Le produit scalaire \\((1,2,2)\\cdot(3,0,4)\\) vaut :',
        options: ['11', '14', '9', '0'],
        reponse: 0,
        explication: '\\(1{\\cdot}3 + 2{\\cdot}0 + 2{\\cdot}4 = 3 + 0 + 8 = 11\\).'
      },
      {
        id: 'vec-q3',
        question: 'Deux vecteurs sont orthogonaux si et seulement si :',
        options: ['\\(\\vec{u}\\cdot\\vec{v} = 0\\)', '\\(\\vec{u}\\wedge\\vec{v} = 0\\)', '\\(\\|\\vec{u}\\| = \\|\\vec{v}\\|\\)', '\\(\\vec{u} = \\vec{v}\\)'],
        reponse: 0,
        explication: 'Produit scalaire nul ⟺ \\(\\cos\\theta = 0\\) ⟺ angle de 90°.'
      },
      {
        id: 'vec-q4',
        question: 'Le résultat d\'un produit vectoriel est :',
        options: ['Un vecteur', 'Un scalaire', 'Un angle', 'Une matrice'],
        reponse: 0,
        explication: '\\(\\vec{u}\\wedge\\vec{v}\\) est un vecteur perpendiculaire au plan de \\(\\vec{u}\\) et \\(\\vec{v}\\).'
      },
      {
        id: 'vec-q5',
        question: 'Que vaut \\(\\vec{i}\\wedge\\vec{j}\\) ?',
        options: ['\\(\\vec{k}\\)', '\\(-\\vec{k}\\)', '\\(\\vec{i}\\)', '\\(0\\)'],
        reponse: 0,
        explication: 'Base directe : \\(\\vec{i}\\wedge\\vec{j} = \\vec{k}\\) (règle de la main droite).'
      },
      {
        id: 'vec-q6',
        question: 'La norme \\(\\|\\vec{u}\\wedge\\vec{v}\\|\\) représente :',
        options: [
          'L\'aire du parallélogramme formé par \\(\\vec{u}\\) et \\(\\vec{v}\\)',
          'Le volume du parallélépipède',
          'La projection de \\(\\vec{u}\\) sur \\(\\vec{v}\\)',
          'L\'angle entre les vecteurs'
        ],
        reponse: 0,
        explication: '\\(\\|\\vec{u}\\wedge\\vec{v}\\| = \\|\\vec{u}\\|\\,\\|\\vec{v}\\|\\,|\\sin\\theta|\\) = aire du parallélogramme.'
      },
      {
        id: 'vec-q7',
        question: 'Si \\(\\vec{u}\\wedge\\vec{v} = \\vec{0}\\) (vecteurs non nuls), alors ils sont :',
        options: ['Colinéaires', 'Orthogonaux', 'Unitaires', 'Égaux'],
        reponse: 0,
        explication: 'Produit vectoriel nul ⟺ \\(\\sin\\theta = 0\\) ⟺ vecteurs parallèles (colinéaires).'
      },
      {
        id: 'vec-q8',
        question: 'Le produit mixte \\(\\vec{u}\\cdot(\\vec{v}\\wedge\\vec{w})\\) donne :',
        options: ['Le volume du parallélépipède', 'Un vecteur normal', 'L\'aire d\'un triangle', 'Un angle'],
        reponse: 0,
        explication: 'C\'est un scalaire égal au volume (signé) du parallélépipède formé par les 3 vecteurs.'
      },
      {
        id: 'vec-q9',
        question: 'Un vecteur unitaire dans la direction de \\(\\vec{v}\\) s\'obtient par :',
        options: ['\\(\\vec{v}/\\|\\vec{v}\\|\\)', '\\(\\vec{v}\\cdot\\|\\vec{v}\\|\\)', '\\(\\|\\vec{v}\\|/\\vec{v}\\)', '\\(\\vec{v}^2\\)'],
        reponse: 0,
        explication: 'On divise le vecteur par sa norme : \\(\\hat{v} = \\vec{v}/\\|\\vec{v}\\|\\), de norme 1.'
      },
      {
        id: 'vec-q10',
        question: 'Le produit vectoriel est :',
        options: ['Anti-commutatif', 'Commutatif', 'Toujours nul', 'Un scalaire'],
        reponse: 0,
        explication: '\\(\\vec{u}\\wedge\\vec{v} = -\\,\\vec{v}\\wedge\\vec{u}\\) : inverser l\'ordre change le signe.'
      }
    ]
  },

  'meca-cinematique': {
    id: 'meca-cinematique',
    matiere: 'Mécanique',
    chapitre: 'Cinématique du point',
    description: 'Position, vitesse, accélération et mouvement des projectiles',
    resume: {
      sections: [
        {
          titre: 'Position, vitesse, accélération',
          formule: '\\vec{v}(t) = \\frac{d\\vec{r}}{dt} \\qquad \\vec{a}(t) = \\frac{d\\vec{v}}{dt} = \\frac{d^2\\vec{r}}{dt^2}',
          contenu: 'La vitesse est la dérivée de la position ; l\'accélération est la dérivée de la vitesse.\n\nInversement, on intègre pour remonter :\n\\[ \\vec{a} \\xrightarrow{\\int dt} \\vec{v} \\xrightarrow{\\int dt} \\vec{r} \\]\n\nLe vecteur vitesse est toujours tangent à la trajectoire.'
        },
        {
          titre: 'Décomposition de l\'accélération',
          formule: '\\vec{a} = \\vec{a}_t + \\vec{a}_n',
          contenu: 'Le long d\'une trajectoire courbe :\n• Composante tangentielle (change la norme de la vitesse) :\n\\[ a_t = \\frac{dv}{dt} \\]\n• Composante normale / centripète (change la direction) :\n\\[ a_n = \\frac{v^2}{R} \\]\noù \\(R\\) est le rayon de courbure.\n\n⚠️ Vitesse constante ≠ accélération nulle (mouvement circulaire uniforme : \\(a_t = 0\\) mais \\(a_n \\neq 0\\)).'
        },
        {
          titre: 'Équations du mouvement uniformément accéléré',
          formule: '\\vec{r}(t) = \\vec{r}_0 + \\vec{v}_0\\,t + \\tfrac{1}{2}\\vec{a}\\,t^2',
          contenu: 'Quand \\(\\vec{a}\\) est constante :\n\\[ \\vec{v}(t) = \\vec{v}_0 + \\vec{a}\\,t \\]\n\nC\'est le résultat de l\'intégration de \\(\\vec{a} = \\text{cste}\\) avec les conditions initiales \\(\\vec{r}_0\\) et \\(\\vec{v}_0\\).'
        },
        {
          titre: 'Mouvement d\'un projectile',
          schema: 'projectile',
          formule: '\\begin{cases} x(t) = v_0\\cos\\theta\\cdot t \\\\ y(t) = -\\tfrac{1}{2}g\\,t^2 + v_0\\sin\\theta\\cdot t + h \\end{cases}',
          contenu: 'Seul le poids agit → \\(a_x = 0\\), \\(a_y = -g\\).\n\nLe mouvement = MRU horizontal + mouvement uniformément accéléré vertical.\n\nConditions initiales : \\(v_x(0) = v_0\\cos\\theta\\), \\(v_y(0) = v_0\\sin\\theta\\).'
        },
        {
          titre: 'Trajectoire et hauteur max',
          formule: 'y = -\\frac{g}{2v_0^2\\cos^2\\theta}\\,x^2 + \\tan\\theta\\cdot x + h',
          contenu: 'En éliminant \\(t\\) entre \\(x(t)\\) et \\(y(t)\\), on obtient une parabole (\\(y = ax^2+bx+c\\) avec \\(a<0\\)).\n\nLa hauteur maximale est atteinte quand \\(v_y = 0\\), soit à \\(t_1 = \\dfrac{v_0\\sin\\theta}{g}\\) :\n\\[ y_{\\max} = \\frac{v_0^2\\sin^2\\theta}{2g} + h \\]'
        },
        {
          titre: 'Vitesse finale (théorème de l\'énergie)',
          formule: 'v^2 = v_0^2 + 2g(h - y)',
          contenu: 'À l\'impact (\\(y = 0\\)) : \\(v = \\sqrt{v_0^2 + 2gh}\\).\n\nCette relation lie directement la vitesse à l\'altitude, sans passer par le temps — pratique quand on ne cherche pas la durée.'
        }
      ]
    },
    methodes: [
      {
        titre: 'Passer de a(t) à v(t) puis r(t)',
        contenu: 'On intègre successivement, en fixant chaque constante avec les conditions initiales.\n\nExemple : chute libre \\(\\vec{a} = -g\\,\\vec{j}\\).\n\\[ \\vec{v}(t) = \\vec{v}_0 - g t\\,\\vec{j} \\]\n\\[ \\vec{r}(t) = \\vec{r}_0 + \\vec{v}_0 t - \\tfrac{1}{2}g t^2\\,\\vec{j} \\]\n\nNe jamais oublier la constante d\'intégration = valeur initiale.'
      },
      {
        titre: 'Méthode complète d\'un tir de projectile',
        contenu: '1. Projeter la 2e loi de Newton : \\(a_x = 0\\), \\(a_y = -g\\).\n2. Intégrer pour \\(v_x, v_y\\) avec \\(v_0\\cos\\theta\\), \\(v_0\\sin\\theta\\).\n3. Intégrer pour \\(x(t), y(t)\\) avec la position initiale.\n4. Éliminer \\(t\\) pour la trajectoire \\(y(x)\\).\n5. \\(v_y = 0\\) → hauteur max ; \\(y = 0\\) → portée.'
      },
      {
        titre: 'Trouver la portée',
        contenu: 'La portée correspond à \\(y(t) = 0\\) (retour au sol). On résout l\'équation du 2nd degré :\n\\[ -\\tfrac{1}{2}g t^2 + v_0\\sin\\theta\\cdot t + h = 0 \\]\n\nOn garde la racine positive \\(t_2\\), puis :\n\\[ \\text{portée} = v_0\\cos\\theta \\cdot t_2 \\]'
      },
      {
        titre: '⚠️ Pièges en cinématique',
        contenu: '• Vitesse constante en direction qui change (cercle) ⟹ accélération non nulle (centripète \\(v^2/R\\)).\n• Bien séparer les axes : le mouvement horizontal et vertical sont indépendants.\n• Tenir compte de la hauteur initiale \\(h\\) si le tir part d\'une hauteur.\n• Le vecteur vitesse est tangent à la trajectoire, l\'accélération pointe « vers l\'intérieur » de la courbe.'
      }
    ],
    quiz: [
      {
        id: 'cin-q1',
        question: 'La vitesse est la dérivée de :',
        options: ['La position', 'L\'accélération', 'La force', 'Le temps'],
        reponse: 0,
        explication: '\\(\\vec{v} = d\\vec{r}/dt\\). L\'accélération est elle la dérivée de la vitesse.'
      },
      {
        id: 'cin-q2',
        question: 'En mouvement circulaire uniforme (vitesse constante en norme) :',
        options: [
          'L\'accélération est non nulle (centripète)',
          'L\'accélération est nulle',
          'La vitesse est nulle',
          'Il n\'y a pas de force'
        ],
        reponse: 0,
        explication: 'La direction change donc \\(a_n = v^2/R \\neq 0\\), même si la norme de \\(v\\) est constante.'
      },
      {
        id: 'cin-q3',
        question: 'L\'accélération centripète vaut :',
        options: ['\\(v^2/R\\)', '\\(v/R\\)', '\\(vR\\)', '\\(v^2 R\\)'],
        reponse: 0,
        explication: 'Composante normale : \\(a_n = v^2/R\\), dirigée vers le centre de courbure.'
      },
      {
        id: 'cin-q4',
        question: 'Pour un projectile (sans frottement), l\'accélération horizontale \\(a_x\\) vaut :',
        options: ['0', '\\(-g\\)', '\\(g\\)', '\\(v_0\\)'],
        reponse: 0,
        explication: 'Seul le poids agit (vertical) → \\(a_x = 0\\), le mouvement horizontal est uniforme.'
      },
      {
        id: 'cin-q5',
        question: 'La hauteur maximale d\'un projectile est atteinte quand :',
        options: ['\\(v_y = 0\\)', '\\(v_x = 0\\)', '\\(t = 0\\)', '\\(y = 0\\)'],
        reponse: 0,
        explication: 'Au sommet, la composante verticale de la vitesse s\'annule : \\(v_y = 0\\).'
      },
      {
        id: 'cin-q6',
        question: 'La trajectoire d\'un projectile est :',
        options: ['Une parabole', 'Une droite', 'Un cercle', 'Une hyperbole'],
        reponse: 0,
        explication: 'En éliminant \\(t\\), on obtient \\(y = ax^2+bx+c\\) avec \\(a<0\\) : une parabole.'
      },
      {
        id: 'cin-q7',
        question: 'Un objet lâché sans vitesse depuis une hauteur \\(h\\) arrive au sol à la vitesse :',
        options: ['\\(\\sqrt{2gh}\\)', '\\(2gh\\)', '\\(gh\\)', '\\(\\sqrt{gh}\\)'],
        reponse: 0,
        explication: '\\(v^2 = v_0^2 + 2gh\\) avec \\(v_0 = 0\\) donne \\(v = \\sqrt{2gh}\\).'
      },
      {
        id: 'cin-q8',
        question: 'Pour passer de l\'accélération à la vitesse, on :',
        options: ['Intègre par rapport au temps', 'Dérive par rapport au temps', 'Multiplie par t', 'Divise par la masse'],
        reponse: 0,
        explication: '\\(\\vec{v} = \\int \\vec{a}\\,dt\\) (+ constante = vitesse initiale).'
      },
      {
        id: 'cin-q9',
        question: 'La composante tangentielle de l\'accélération \\(a_t = dv/dt\\) traduit :',
        options: [
          'Le changement de norme de la vitesse',
          'Le changement de direction',
          'La force centripète',
          'Le rayon de courbure'
        ],
        reponse: 0,
        explication: '\\(a_t\\) accélère/ralentit le mobile ; \\(a_n\\) change sa direction.'
      },
      {
        id: 'cin-q10',
        question: 'Le vecteur vitesse est toujours :',
        options: ['Tangent à la trajectoire', 'Normal à la trajectoire', 'Vertical', 'Constant'],
        reponse: 0,
        explication: 'Par définition \\(\\vec{v} = d\\vec{r}/dt\\) est tangent au chemin parcouru.'
      }
    ]
  },

  'meca-dynamique': {
    id: 'meca-dynamique',
    matiere: 'Mécanique',
    chapitre: 'Dynamique du point',
    description: 'Forces, lois de Newton et frottement',
    resume: {
      sections: [
        {
          titre: 'Les forces classiques',
          contenu: 'Une force est un vecteur (en Newtons, N).\n\n• Poids : \\(\\vec{P} = m\\vec{g}\\) (vertical, vers le bas, \\(g \\approx 9{,}81\\) m/s²)\n• Force de rappel d\'un ressort (Hooke) : \\(\\vec{F}_s = -k\\vec{x}\\)\n• Force normale \\(\\vec{N}\\) : perpendiculaire à la surface de contact\n• Tension \\(\\vec{T}\\) : le long d\'un fil, une corde ne fait que tirer\n• Frottement \\(\\vec{f}\\) : opposé au mouvement relatif'
        },
        {
          titre: '1re loi de Newton (inertie)',
          formule: '\\sum \\vec{F} = \\vec{0} \\;\\Rightarrow\\; \\vec{a} = \\vec{0}',
          contenu: 'Si la somme des forces est nulle, l\'objet est au repos ou en mouvement rectiligne uniforme (vitesse constante).\n\nC\'est le cas de l\'équilibre statique.'
        },
        {
          titre: '2e loi de Newton (PFD)',
          formule: '\\sum \\vec{F} = m\\,\\vec{a}',
          contenu: 'Le principe fondamental de la dynamique : la somme des forces égale masse × accélération.\n\nOn la projette sur les axes :\n\\[ \\sum F_x = m a_x, \\qquad \\sum F_y = m a_y \\]'
        },
        {
          titre: '3e loi de Newton (action-réaction)',
          formule: '\\vec{F}_{A\\to B} = -\\,\\vec{F}_{B\\to A}',
          contenu: 'Toute action entraîne une réaction égale et opposée.\n\n⚠️ Les deux forces s\'exercent sur des objets DIFFÉRENTS (elles ne se compensent donc pas sur un même objet).'
        },
        {
          titre: 'Frottement (Coulomb-Morin)',
          formule: 'f_s \\leq \\mu_s N \\qquad f_k = \\mu_k N',
          contenu: '• Frottement statique : \\(f_s \\leq \\mu_s N\\). S\'ajuste pour empêcher le mouvement, jusqu\'à un maximum \\(\\mu_s N\\) (glissement imminent).\n• Frottement cinétique : \\(f_k = \\mu_k N\\), quand l\'objet glisse.\n\nEn général \\(\\mu_k < \\mu_s\\). Le frottement est proportionnel à \\(N\\), indépendant de la surface apparente et de la vitesse.'
        },
        {
          titre: 'Bloc sur plan incliné',
          schema: 'plan_incline',
          formule: 'a = g(\\sin\\theta - \\mu_k\\cos\\theta)',
          contenu: 'En projetant le poids sur le plan incliné d\'angle \\(\\theta\\) :\n• selon le plan : \\(P_x = mg\\sin\\theta\\)\n• perpendiculaire : \\(P_y = mg\\cos\\theta\\), d\'où \\(N = mg\\cos\\theta\\)\n\nLe glissement débute quand \\(\\tan\\theta = \\mu_s\\), soit \\(\\theta = \\arctan(\\mu_s)\\).'
        }
      ]
    },
    methodes: [
      {
        titre: 'Méthode de résolution (PFD)',
        contenu: '1. Faire un schéma centré sur l\'objet (diagramme des forces).\n2. Identifier TOUTES les forces (poids, normale, frottement, tension, ressort...).\n3. Choisir un repère adapté (souvent incliné selon le mouvement).\n4. Décomposer chaque force selon les axes.\n5. Appliquer \\(\\sum F_x = m a_x\\) et \\(\\sum F_y = m a_y\\).\n6. Résoudre pour les inconnues.'
      },
      {
        titre: 'Bloc qui glisse sur un plan incliné',
        contenu: 'Repère : axe x le long du plan, axe y perpendiculaire.\n\nÉquilibre selon y :\n\\[ N - mg\\cos\\theta = 0 \\Rightarrow N = mg\\cos\\theta \\]\n\n2e loi selon x (avec frottement \\(f_k = \\mu_k N\\)) :\n\\[ mg\\sin\\theta - \\mu_k mg\\cos\\theta = ma \\]\n\nD\'où, en simplifiant par \\(m\\) :\n\\[ a = g(\\sin\\theta - \\mu_k\\cos\\theta) \\]'
      },
      {
        titre: 'Trouver l\'angle de glissement (statique)',
        contenu: 'Au glissement imminent, le frottement statique atteint son maximum \\(f_s = \\mu_s N\\).\n\nÀ l\'équilibre sur le plan incliné :\n\\[ f_s = mg\\sin\\theta, \\qquad N = mg\\cos\\theta \\]\n\nEn divisant :\n\\[ \\frac{f_s}{N} = \\tan\\theta = \\mu_s \\Rightarrow \\theta = \\arctan(\\mu_s) \\]'
      },
      {
        titre: '⚠️ Pièges en dynamique',
        contenu: '• Action et réaction s\'appliquent sur des objets différents → ne se compensent jamais sur le même corps.\n• Le frottement statique n\'est PAS toujours \\(\\mu_s N\\) : c\'est une inégalité (\\(\\leq\\)) sauf au glissement imminent.\n• Choisir un repère incliné simplifie énormément les calculs sur un plan incliné.\n• La force normale n\'est pas toujours égale à \\(mg\\) (sur un plan incliné, \\(N = mg\\cos\\theta\\)).'
      }
    ],
    quiz: [
      {
        id: 'dyn-q1',
        question: 'Le principe fondamental de la dynamique s\'écrit :',
        options: ['\\(\\sum\\vec{F} = m\\vec{a}\\)', '\\(\\sum\\vec{F} = \\vec{0}\\)', '\\(\\vec{F} = -k\\vec{x}\\)', '\\(\\vec{P} = m\\vec{g}\\)'],
        reponse: 0,
        explication: '2e loi de Newton : la somme des forces = masse × accélération.'
      },
      {
        id: 'dyn-q2',
        question: 'Si \\(\\sum\\vec{F} = \\vec{0}\\), alors l\'objet :',
        options: [
          'Est au repos ou en MRU',
          'Accélère',
          'S\'arrête forcément',
          'Tourne en rond'
        ],
        reponse: 0,
        explication: '1re loi (inertie) : force nette nulle ⟹ vitesse constante (repos ou rectiligne uniforme).'
      },
      {
        id: 'dyn-q3',
        question: 'La force normale est toujours :',
        options: [
          'Perpendiculaire à la surface',
          'Égale au poids',
          'Verticale',
          'Opposée au mouvement'
        ],
        reponse: 0,
        explication: '\\(\\vec{N}\\) est perpendiculaire à la surface de contact (pas forcément verticale ni égale à \\(mg\\)).'
      },
      {
        id: 'dyn-q4',
        question: 'Le frottement cinétique vaut :',
        options: ['\\(f_k = \\mu_k N\\)', '\\(f_k \\leq \\mu_k N\\)', '\\(f_k = \\mu_k mg\\)', '\\(f_k = \\mu_k / N\\)'],
        reponse: 0,
        explication: 'Quand l\'objet glisse : \\(f_k = \\mu_k N\\), proportionnel à la force normale.'
      },
      {
        id: 'dyn-q5',
        question: 'Sur un plan incliné d\'angle \\(\\theta\\), la force normale vaut :',
        options: ['\\(mg\\cos\\theta\\)', '\\(mg\\sin\\theta\\)', '\\(mg\\)', '\\(mg\\tan\\theta\\)'],
        reponse: 0,
        explication: 'L\'équilibre perpendiculaire au plan donne \\(N = mg\\cos\\theta\\).'
      },
      {
        id: 'dyn-q6',
        question: 'L\'accélération d\'un bloc glissant sur un plan incliné (frottement \\(\\mu_k\\)) est :',
        options: [
          '\\(g(\\sin\\theta - \\mu_k\\cos\\theta)\\)',
          '\\(g\\sin\\theta\\)',
          '\\(g\\cos\\theta\\)',
          '\\(\\mu_k g\\)'
        ],
        reponse: 0,
        explication: 'PFD selon le plan : \\(a = g(\\sin\\theta - \\mu_k\\cos\\theta)\\).'
      },
      {
        id: 'dyn-q7',
        question: 'Les forces d\'action-réaction (3e loi) :',
        options: [
          's\'exercent sur deux objets différents',
          's\'exercent sur le même objet',
          'sont dans le même sens',
          's\'annulent mutuellement sur un corps'
        ],
        reponse: 0,
        explication: 'Égales et opposées, mais sur des objets DIFFÉRENTS — elles ne se compensent donc pas.'
      },
      {
        id: 'dyn-q8',
        question: 'L\'angle de glissement imminent sur un plan incliné vérifie :',
        options: ['\\(\\tan\\theta = \\mu_s\\)', '\\(\\sin\\theta = \\mu_s\\)', '\\(\\cos\\theta = \\mu_s\\)', '\\(\\theta = \\mu_s\\)'],
        reponse: 0,
        explication: 'À l\'équilibre limite : \\(f_s/N = \\tan\\theta = \\mu_s\\), donc \\(\\theta = \\arctan(\\mu_s)\\).'
      },
      {
        id: 'dyn-q9',
        question: 'La force de rappel d\'un ressort (loi de Hooke) est :',
        options: ['\\(\\vec{F} = -k\\vec{x}\\)', '\\(\\vec{F} = k\\vec{x}\\)', '\\(\\vec{F} = -kx^2\\)', '\\(\\vec{F} = m\\vec{a}\\)'],
        reponse: 0,
        explication: 'Le signe \\(-\\) indique que la force s\'oppose au déplacement par rapport à l\'équilibre.'
      },
      {
        id: 'dyn-q10',
        question: 'En général, les coefficients de frottement vérifient :',
        options: ['\\(\\mu_k < \\mu_s\\)', '\\(\\mu_k > \\mu_s\\)', '\\(\\mu_k = \\mu_s\\)', '\\(\\mu_k = 0\\)'],
        reponse: 0,
        explication: 'Le frottement en mouvement est plus faible qu\'au repos : \\(\\mu_k < \\mu_s\\).'
      }
    ]
  },

  'thermo-bases': {
    id: 'thermo-bases',
    matiere: 'Thermique',
    chapitre: 'Bases de la thermique',
    description: 'Température, chaleur, unités, énergie interne et premier principe',
    resume: {
      sections: [
        {
          titre: 'Température et chaleur',
          contenu: 'La thermique étudie comment la chaleur se déplace d\'un endroit à un autre.\n\n• Température : image ponctuelle de l\'énergie cinétique d\'agitation des particules.\n• Chaleur : énergie liée à cette agitation microscopique. Elle peut être produite, transportée, transférée ou utilisée.\n\nUn transfert thermique a lieu dès qu\'il existe une différence de température, toujours du chaud vers le froid.'
        },
        {
          titre: 'Échelles de température',
          formule: 'T_K = T_C + 273{,}15 \\qquad T_F = 1{,}8\\,T_C + 32',
          contenu: 'Trois échelles :\n• Celsius (°C) · Kelvin (K) · Fahrenheit (°F)\n\nPoints de repère : fusion de l\'eau 0 °C = 273,15 K ; ébullition 100 °C = 373,15 K ; zéro absolu = 0 K = −273,15 °C.\n\n⚠️ Une hausse de 1 °C = une hausse de 1 K (même amplitude), mais ≠ 1 °F.'
        },
        {
          titre: 'Énergie et puissance',
          formule: 'E = P \\times t',
          contenu: 'L\'énergie (Joules) = puissance (Watts) × temps (secondes).\n\nUnités équivalentes :\n• \\(1\\ \\text{J} = 1\\ \\text{W·s} = \\frac{1}{3600}\\ \\text{Wh}\\)\n• \\(1\\ \\text{BTU} = 1055{,}06\\ \\text{J}\\)'
        },
        {
          titre: 'Flux thermique',
          formule: '\\varphi = \\frac{Q}{t} \\quad (\\text{W}) \\qquad \\phi = \\frac{\\varphi}{S} \\quad (\\text{W/m}^2)',
          contenu: 'Le flux de chaleur \\(\\varphi\\) est la quantité de chaleur transférée par unité de temps (en Watts).\n\nLe flux surfacique (densité de flux) est la quantité de chaleur transférée à travers une unité de surface par unité de temps (W/m²).'
        },
        {
          titre: 'Chaleur sensible (énergie interne)',
          formule: '\\Delta U = m\\,C\\,\\Delta T',
          contenu: 'Pour un corps de masse \\(m\\), la variation d\'énergie interne lors d\'un changement de température :\n\\[ \\Delta U = m\\,C\\,\\Delta T \\]\n\n\\(C\\) est la chaleur massique (capacité thermique massique) en J/(kg·K) : quantité de chaleur pour élever 1 kg de 1 °C.\n\nExemple : eau \\(C = 4180\\) J/(kg·°C), huile \\(C = 2000\\) J/(kg·°C). À chauffage égal, l\'huile monte plus vite (C plus faible).'
        },
        {
          titre: 'Principes de la thermodynamique',
          formule: '\\Delta E_{tot} = Q + W',
          contenu: 'Principe 0 : deux systèmes en équilibre thermique avec un troisième le sont entre eux (base de la notion de température).\n\n1er principe (système fermé) : la variation d\'énergie totale est la somme de la chaleur \\(Q\\) et du travail \\(W\\) échangés.\n\nÉnergie totale d\'un corps : \\(E_{tot} = E_c + E_p + U\\) avec \\(E_c = \\tfrac{1}{2}mv^2\\), \\(E_p = mgz\\), \\(U\\) l\'énergie interne.'
        }
      ]
    },
    methodes: [
      {
        titre: 'Convertir une température',
        contenu: 'De Celsius vers Kelvin (le plus fréquent en thermique) :\n\\[ T_K = T_C + 273{,}15 \\]\n\nExemple : 80 °C = 80 + 273,15 = 353,15 K.\n\nVers Fahrenheit :\n\\[ T_F = 1{,}8\\,T_C + 32 \\]\n\n⚠️ Pour les FLUX et lois (Stefan-Boltzmann), toujours travailler en Kelvin.'
      },
      {
        titre: 'Calculer une quantité de chaleur sensible',
        contenu: 'On utilise \\(\\Delta U = m\\,C\\,\\Delta T\\).\n\nExemple : chauffer 1 kg d\'eau de 20 °C à 80 °C.\n\\[ \\Delta T = 80 - 20 = 60\\ \\text{°C (= 60 K)} \\]\n\\[ Q = 1 \\times 4180 \\times 60 = 250\\,800\\ \\text{J} \\approx 251\\ \\text{kJ} \\]\n\nNote : \\(\\Delta T\\) est identique en °C et en K, donc pas besoin de convertir ici.'
      },
      {
        titre: 'Comparer deux échauffements',
        contenu: 'À puissance de chauffe et masse égales, le temps pour atteindre une température dépend de \\(C\\).\n\nDe \\(Q = mC\\Delta T = P\\,t\\), on tire :\n\\[ t = \\frac{mC\\Delta T}{P} \\]\n\nPlus \\(C\\) est petit, plus l\'échauffement est rapide. L\'huile (\\(C=2000\\)) chauffe donc plus vite que l\'eau (\\(C=4180\\)).'
      },
      {
        titre: '⚠️ Pièges en thermique de base',
        contenu: '• Pour les lois de rayonnement, les températures DOIVENT être en Kelvin.\n• \\(\\Delta T\\) est le même en °C et en K (écart), mais une température absolue non.\n• Ne pas confondre énergie (J) et puissance/flux (W). \\(E = P \\times t\\).\n• La chaleur va toujours du chaud vers le froid spontanément.'
      }
    ],
    quiz: [
      {
        id: 'th-q1',
        question: '80 °C correspond à combien de Kelvin ?',
        options: ['353,15 K', '273,15 K', '80 K', '176 K'],
        reponse: 0,
        explication: '\\(T_K = T_C + 273{,}15 = 80 + 273{,}15 = 353{,}15\\) K.'
      },
      {
        id: 'th-q2',
        question: 'La chaleur se transfère spontanément :',
        options: ['Du chaud vers le froid', 'Du froid vers le chaud', 'Dans les deux sens', 'Seulement par contact'],
        reponse: 0,
        explication: 'Le transfert thermique se fait naturellement de la source chaude vers la source froide.'
      },
      {
        id: 'th-q3',
        question: 'La relation entre énergie, puissance et temps est :',
        options: ['\\(E = P \\times t\\)', '\\(E = P / t\\)', '\\(P = E \\times t\\)', '\\(E = P + t\\)'],
        reponse: 0,
        explication: 'Énergie (J) = Puissance (W) × temps (s).'
      },
      {
        id: 'th-q4',
        question: 'La chaleur sensible pour chauffer un corps est donnée par :',
        options: ['\\(\\Delta U = m\\,C\\,\\Delta T\\)', '\\(\\Delta U = m\\,g\\,z\\)', '\\(\\Delta U = \\tfrac{1}{2}mv^2\\)', '\\(\\Delta U = P\\,t\\)'],
        reponse: 0,
        explication: 'C\'est \\(\\Delta U = m\\,C\\,\\Delta T\\), avec \\(C\\) la chaleur massique.'
      },
      {
        id: 'th-q5',
        question: 'Quelle énergie pour chauffer 1 kg d\'eau (C=4180) de 20 à 80 °C ?',
        options: ['≈ 251 kJ', '≈ 84 kJ', '≈ 4,18 kJ', '≈ 1 200 kJ'],
        reponse: 0,
        explication: '\\(Q = 1 \\times 4180 \\times 60 = 250\\,800\\) J ≈ 251 kJ.'
      },
      {
        id: 'th-q6',
        question: 'Une hausse de 1 °C équivaut à une hausse de :',
        options: ['1 K', '273 K', '1,8 K', '32 K'],
        reponse: 0,
        explication: 'Celsius et Kelvin ont la même amplitude : +1 °C = +1 K (mais ≠ 1 °F).'
      },
      {
        id: 'th-q7',
        question: 'Le flux surfacique de chaleur s\'exprime en :',
        options: ['W/m²', 'W', 'J', 'K'],
        reponse: 0,
        explication: 'C\'est une quantité de chaleur par unité de surface et de temps : W/m².'
      },
      {
        id: 'th-q8',
        question: 'Le 1er principe (système fermé) s\'écrit :',
        options: ['\\(\\Delta E = Q + W\\)', '\\(\\Delta E = Q - W\\)', '\\(Q = m C \\Delta T\\)', '\\(E = Pt\\)'],
        reponse: 0,
        explication: 'La variation d\'énergie totale est la somme de la chaleur et du travail échangés.'
      },
      {
        id: 'th-q9',
        question: 'À chauffage et masse égaux, quel fluide monte le plus vite en température ?',
        options: [
          'Celui qui a la plus petite chaleur massique C',
          'Celui qui a la plus grande C',
          'Cela ne dépend pas de C',
          'Toujours l\'eau'
        ],
        reponse: 0,
        explication: '\\(t = mC\\Delta T / P\\) : plus \\(C\\) est petit, plus l\'échauffement est rapide.'
      },
      {
        id: 'th-q10',
        question: 'Le principe 0 de la thermodynamique concerne :',
        options: [
          'L\'équilibre thermique (transitivité)',
          'La conservation de l\'énergie',
          'L\'entropie',
          'Le rendement maximal'
        ],
        reponse: 0,
        explication: 'Deux systèmes en équilibre thermique avec un troisième le sont entre eux.'
      }
    ]
  },

  'thermo-modes': {
    id: 'thermo-modes',
    matiere: 'Thermique',
    chapitre: 'Modes de transfert',
    description: 'Conduction (Fourier), convection (Newton) et rayonnement (Stefan-Boltzmann)',
    resume: {
      sections: [
        {
          titre: 'Les trois modes',
          schema: 'modes_transfert',
          contenu: 'La chaleur se transfère selon trois mécanismes :\n\n• Conduction : de proche en proche dans un milieu matériel (chocs entre particules, électrons libres dans les métaux).\n• Convection : entre un fluide en mouvement et une surface (conduction + transport).\n• Rayonnement : par ondes électromagnétiques (photons), sans support matériel.'
        },
        {
          titre: 'Conduction — loi de Fourier',
          schema: 'mur_fourier',
          formule: '\\vec{\\varphi} = -k\\,S\\,\\vec{\\nabla} T \\quad\\Rightarrow\\quad \\varphi = k\\,S\\,\\frac{T_1 - T_2}{e}',
          contenu: 'Pour un mur plan d\'épaisseur \\(e\\) et de surface \\(S\\) :\n\\[ \\varphi = k\\,S\\,\\frac{T_1 - T_2}{e} \\]\n\n\\(k\\) : conductivité thermique du matériau (W·m⁻¹·K⁻¹).\n\nLe signe \\(-\\) (forme vectorielle) traduit que la chaleur va vers les températures décroissantes. Plus \\(k\\) est grand, plus le flux conductif est important.'
        },
        {
          titre: 'Convection — loi de Newton',
          formule: '\\varphi = h\\,S\\,(T_p - T_f)',
          contenu: '\\(\\varphi\\) : flux convectif (W) · \\(S\\) : surface d\'échange (m²)\n\\(T_p\\) : température de la paroi · \\(T_f\\) : température du fluide\n\\(h\\) : coefficient de convection (W·m⁻²·K⁻¹).\n\nLe coefficient \\(h\\) dépend de la nature du fluide, sa température, sa vitesse, et la géométrie de la surface.'
        },
        {
          titre: 'Convection naturelle vs forcée',
          contenu: '• Convection naturelle : le mouvement du fluide est dû à une différence de densité créée par l\'écart de température (fluide « calme »).\n\n• Convection forcée : le mouvement est imposé mécaniquement (ventilateur, pompe, compresseur...).\n\nLa convection forcée donne en général un coefficient \\(h\\) bien plus élevé.'
        },
        {
          titre: 'Rayonnement — Stefan-Boltzmann',
          formule: 'M = \\varepsilon\\,\\sigma\\,T^4',
          contenu: 'Tout corps à \\(T > 0\\) K émet un rayonnement thermique.\n\nÉmittance d\'une surface : \\(M = \\varepsilon\\,\\sigma\\,T^4\\)\n• \\(\\sigma = 5{,}67\\times10^{-8}\\) W·m⁻²·K⁻⁴ (constante de Stefan-Boltzmann)\n• \\(\\varepsilon\\) : émissivité (0 à 1 ; 1 pour un corps noir)\n• \\(T\\) en Kelvin (impératif !)\n\nThéorie de Planck-Einstein : \\(h\\nu = \\Delta E\\), \\(h = 6{,}6\\times10^{-34}\\) J·s.'
        },
        {
          titre: 'Flux radiatif net',
          formule: '\\varphi = \\varepsilon\\,\\sigma\\,S\\,(T_1^4 - T_2^4)',
          contenu: 'Flux net échangé entre une surface (\\(T_1\\)) et son environnement (\\(T_2\\)).\n\nOn l\'écrit souvent sous forme « linéarisée » avec un coefficient d\'échange radiatif \\(h_r\\) :\n\\[ \\varphi = h_r\\,S\\,(T_1 - T_2) \\]\nce qui permet de le traiter comme une convection.'
        }
      ]
    },
    methodes: [
      {
        titre: 'Calculer un flux de conduction (mur)',
        contenu: 'On applique Fourier en régime 1D.\n\nExemple : mur de four, \\(e = 0{,}15\\) m, \\(k = 1{,}7\\) W/m·K, \\(S = 1\\) m², \\(T_1 = 1400\\) K, \\(T_2 = 1150\\) K.\n\\[ \\varphi = k\\,S\\,\\frac{T_1 - T_2}{e} = 1{,}7 \\times 1 \\times \\frac{1400 - 1150}{0{,}15} \\]\n\\[ \\varphi = 1{,}7 \\times \\frac{250}{0{,}15} \\approx 2833\\ \\text{W} \\]'
      },
      {
        titre: 'Calculer un flux de convection',
        contenu: 'On applique la loi de Newton \\(\\varphi = h\\,S\\,(T_p - T_f)\\).\n\nExemple : paroi à \\(T_p = 60\\) °C, air à \\(T_f = 20\\) °C, \\(h = 10\\) W/m²·K, \\(S = 2\\) m².\n\\[ \\varphi = 10 \\times 2 \\times (60 - 20) = 800\\ \\text{W} \\]\n\nIci \\(\\Delta T\\) en °C = \\(\\Delta T\\) en K, donc pas de conversion nécessaire.'
      },
      {
        titre: 'Calculer un flux de rayonnement',
        contenu: 'On applique Stefan-Boltzmann avec les températures en KELVIN.\n\n\\[ \\varphi = \\varepsilon\\,\\sigma\\,S\\,(T_1^4 - T_2^4) \\]\n\n⚠️ Erreur classique : oublier de convertir en Kelvin. Comme les températures sont à la puissance 4, l\'écart °C/K change tout le résultat.\n\nPenser à \\(\\sigma = 5{,}67\\times10^{-8}\\).'
      },
      {
        titre: 'Identifier le mode dominant',
        contenu: 'Réflexes :\n• Transfert dans un solide / à travers un mur → conduction (Fourier).\n• Échange paroi ↔ fluide en mouvement (air, eau) → convection (Newton).\n• Échange à distance, dans le vide, ou très haute température → rayonnement (Stefan-Boltzmann).\n\nDans la réalité (ex : une maison), les trois coexistent souvent : convection + rayonnement entre une paroi et l\'air.'
      }
    ],
    quiz: [
      {
        id: 'tm-q1',
        question: 'La conduction se fait :',
        options: [
          'De proche en proche dans un milieu matériel',
          'Par un fluide en mouvement',
          'Par ondes électromagnétiques',
          'Uniquement dans le vide'
        ],
        reponse: 0,
        explication: 'Conduction = transmission par chocs entre particules (ou électrons libres dans les métaux).'
      },
      {
        id: 'tm-q2',
        question: 'La loi de Fourier (mur plan) s\'écrit :',
        options: [
          '\\(\\varphi = kS\\,\\dfrac{T_1-T_2}{e}\\)',
          '\\(\\varphi = hS(T_p-T_f)\\)',
          '\\(\\varphi = \\varepsilon\\sigma S T^4\\)',
          '\\(\\varphi = mC\\Delta T\\)'
        ],
        reponse: 0,
        explication: 'Conduction : le flux est proportionnel à \\(k\\), \\(S\\) et au gradient \\((T_1-T_2)/e\\).'
      },
      {
        id: 'tm-q3',
        question: 'Le coefficient \\(k\\) de la loi de Fourier représente :',
        options: ['La conductivité thermique', 'Le coefficient de convection', 'L\'émissivité', 'La chaleur massique'],
        reponse: 0,
        explication: '\\(k\\) est la conductivité thermique du matériau (W·m⁻¹·K⁻¹).'
      },
      {
        id: 'tm-q4',
        question: 'La convection est décrite par la loi de :',
        options: ['Newton', 'Fourier', 'Stefan-Boltzmann', 'Planck'],
        reponse: 0,
        explication: 'Loi de Newton : \\(\\varphi = hS(T_p - T_f)\\).'
      },
      {
        id: 'tm-q5',
        question: 'Quel est le flux conductif d\'un mur (k=1,7 ; S=1 ; e=0,15 ; ΔT=250 K) ?',
        options: ['≈ 2833 W', '≈ 425 W', '≈ 250 W', '≈ 1133 W'],
        reponse: 0,
        explication: '\\(\\varphi = 1{,}7 \\times 1 \\times 250/0{,}15 \\approx 2833\\) W.'
      },
      {
        id: 'tm-q6',
        question: 'Le rayonnement thermique :',
        options: [
          'Ne nécessite pas de support matériel',
          'Nécessite un solide',
          'Nécessite un fluide',
          'N\'existe qu\'au-dessus de 100 °C'
        ],
        reponse: 0,
        explication: 'Le rayonnement se propage par photons (ondes EM), même dans le vide.'
      },
      {
        id: 'tm-q7',
        question: 'La loi de Stefan-Boltzmann (émittance) est :',
        options: ['\\(M = \\varepsilon\\sigma T^4\\)', '\\(M = \\varepsilon\\sigma T\\)', '\\(M = hS\\Delta T\\)', '\\(M = kS\\Delta T/e\\)'],
        reponse: 0,
        explication: 'L\'émittance varie comme la puissance 4 de la température absolue.'
      },
      {
        id: 'tm-q8',
        question: 'Pour la loi de Stefan-Boltzmann, la température doit être en :',
        options: ['Kelvin', 'Celsius', 'Fahrenheit', 'Peu importe'],
        reponse: 0,
        explication: 'Toujours en Kelvin (température à la puissance 4 : l\'écart d\'échelle change tout).'
      },
      {
        id: 'tm-q9',
        question: 'En convection forcée, le mouvement du fluide est dû :',
        options: [
          'À un dispositif mécanique (ventilateur, pompe)',
          'À une différence de densité',
          'À la gravité seule',
          'Au rayonnement'
        ],
        reponse: 0,
        explication: 'Convection forcée = mouvement imposé mécaniquement ; naturelle = dû aux écarts de densité.'
      },
      {
        id: 'tm-q10',
        question: 'L\'émissivité \\(\\varepsilon\\) d\'un corps noir vaut :',
        options: ['1', '0', '5,67', '0,5'],
        reponse: 0,
        explication: 'Le corps noir est l\'émetteur parfait : \\(\\varepsilon = 1\\) (entre 0 et 1 pour un corps gris).'
      }
    ]
  },

  'thermo-confort': {
    id: 'thermo-confort',
    matiere: 'Thermique',
    chapitre: 'Confort thermique',
    description: 'Rappel : définition, facteurs et indicateurs du confort thermique',
    resume: {
      sections: [
        {
          titre: 'Définition',
          contenu: 'Le confort thermique est défini par la norme BS EN ISO 7730 comme « l\'état d\'esprit qui exprime la satisfaction d\'une personne vis-à-vis de l\'environnement thermique ».\n\nC\'est un état psychologique : la sensation d\'avoir trop chaud ou trop froid. Il ne dépend donc pas que de la température de l\'air.'
        },
        {
          titre: 'Facteurs environnementaux',
          contenu: 'Quatre paramètres physiques de l\'ambiance :\n\n• Température de l\'air\n• Température rayonnante moyenne : moyenne pondérée des températures des surfaces autour de l\'individu (murs, plafond, sol, vitrages), selon leur influence radiative\n• Humidité relative\n• Vitesse de l\'air'
        },
        {
          titre: 'Facteurs humains',
          contenu: 'Deux paramètres liés à la personne :\n\n• Métabolisme : production de chaleur du corps (≈ 100 W au repos pour 1 personne)\n• Vêtements : leur isolation thermique (le « clo »)\n\nLe confort résulte de l\'équilibre entre la chaleur produite par le corps et celle échangée avec l\'environnement.'
        },
        {
          titre: 'Indicateurs analytiques (ISO 7730)',
          contenu: '• PMV (Predicted Mean Vote) : indice prévisionnel de sensation thermique, sur une échelle de −3 (très froid) à 0 (neutre) à +3 (très chaud).\n\n• PPD (Predicted Percentage of Dissatisfied) : pourcentage de personnes insatisfaites en fonction du PMV.\n\nMême à la neutralité (PMV = 0), il reste un minimum d\'environ 5 % d\'insatisfaits.'
        },
        {
          titre: 'Indicateur réglementaire (RE 2020)',
          formule: 'DH = \\sum (T_i - T_{ref}) \\quad (\\text{°C·h})',
          contenu: 'Confort d\'été évalué par les Degrés-Heures (DH) d\'inconfort :\n\n\\(T_i\\) : température opérative intérieure\n\\(T_{ref}\\) : température de confort adaptatif (26 °C la nuit, 28 °C le jour)\n\nOn cumule, sur les heures où \\(T_i > T_{ref}\\), l\'écart de température. Plus le DH est élevé, plus le bâtiment est inconfortable en été.'
        }
      ]
    },
    methodes: [
      {
        titre: 'Distinguer les 6 facteurs du confort',
        contenu: 'Pour analyser une ambiance, lister systématiquement :\n\n4 facteurs d\'ambiance : température de l\'air, température rayonnante, humidité, vitesse de l\'air.\n2 facteurs humains : métabolisme (activité), habillement.\n\nUne même température d\'air peut être confortable ou non selon les 5 autres paramètres (ex : parois froides → inconfort malgré un air à 20 °C).'
      },
      {
        titre: 'Lire les indicateurs PMV / PPD',
        contenu: 'PMV : viser 0 (neutralité). Acceptable typiquement entre −0,5 et +0,5.\n\nPPD : découle du PMV ; le minimum est ~5 % (on ne satisfait jamais 100 % des personnes).\n\nEn été (RE 2020), surveiller les Degrés-Heures : ils quantifient la durée ET l\'intensité des dépassements de la température de confort.'
      }
    ]
  },

  'thermo-thermodynamique': {
    id: 'thermo-thermodynamique',
    matiere: 'Thermique',
    chapitre: 'Thermodynamique',
    description: 'Systèmes, variables d\'état, transformations, 1er principe, enthalpie et gaz parfait',
    resume: {
      sections: [
        {
          titre: 'Qu\'est-ce que la thermodynamique ?',
          contenu: 'Branche de la physique qui étudie les systèmes macroscopiques par une approche énergétique : relations entre chaleur, travail et énergie.\n\nDifférence avec les transferts de chaleur :\n• La thermodynamique ne s\'intéresse qu\'à l\'état initial et l\'état final (équilibre), pas au temps.\n• Les transferts thermiques décrivent comment et à quelle vitesse l\'énergie est échangée.'
        },
        {
          titre: 'Types de systèmes',
          contenu: 'On classe les systèmes selon leurs échanges avec l\'extérieur :\n\n• Système ouvert : échange matière ET énergie (ex : turbine). Aussi appelé « volume de contrôle ».\n• Système fermé : échange seulement de l\'énergie, masse constante (ex : piston scellé).\n• Système isolé : aucun échange (ni matière ni énergie), frontières étanches et adiabatiques (ex : thermos parfait).'
        },
        {
          titre: 'Variables d\'état',
          contenu: 'Un système est décrit par ses variables d\'état (T, P, V, ρ…), qui ont une valeur déterminée à l\'équilibre.\n\n• Extensives : proportionnelles à la quantité de matière, additives (masse, volume, énergie).\n• Intensives : indépendantes de la quantité (température, pression, masse volumique).\n• Spécifiques : extensive divisée par la masse (\\(X_{spé} = X/m\\)).\n\n⚠️ Le travail n\'est PAS une variable d\'état : il décrit une transformation, pas un état.'
        },
        {
          titre: 'Pression et température',
          formule: 'P = \\frac{F_n}{S} \\qquad T_K = T_C + 273{,}15',
          contenu: 'Pression = composante normale de la force par unité de surface.\nUnités : Pa (N/m²) ; \\(1\\ \\text{bar} = 10^5\\) Pa ; \\(1\\ \\text{atm} = 101\\,325\\) Pa.\n\nBaromètre : \\(P_{atm} = \\rho g H\\) · Manomètre : \\(P_{gaz} = \\rho g|H| + P_{atm}\\).\n\nTempérature : agitation des molécules. Échelles : \\(T_F = 1{,}8\\,T_C + 32\\), \\(T_R = 1{,}8\\,T_K\\).'
        },
        {
          titre: 'Transformations',
          contenu: 'Passage d\'un état d\'équilibre initial à un état final (au moins une variable varie).\n\nVocabulaire :\n• isobare : \\(P\\) constante\n• isochore : \\(V\\) constant\n• isotherme : \\(T\\) constante\n• adiabatique : aucun échange de chaleur (\\(Q = 0\\))\n\n• quasi-statique : suite continue d\'états d\'équilibre (très lente).\n• réversible : peut être parcourue en sens inverse. Adiabatique réversible = isentropique.'
        },
        {
          titre: 'Fonction d\'état',
          formule: '\\Delta X = X_f - X_i \\quad (\\text{indépendant du chemin})',
          contenu: 'La variation d\'une fonction d\'état ne dépend que des états initial et final, pas du chemin suivi.\n\n\\(U\\) (énergie interne) et \\(H\\) (enthalpie) sont des fonctions d\'état. Sur un cycle (état final = initial), leur variation est nulle.\n\n⚠️ \\(Q\\) et \\(W\\) ne sont PAS des fonctions d\'état (ils dépendent du chemin).'
        },
        {
          titre: '1er principe (système fermé)',
          formule: '\\Delta U = W + Q',
          contenu: 'L\'énergie totale \\(E = \\tfrac{1}{2}mv^2 + mgz + U\\). En négligeant \\(E_c\\) et \\(E_p\\) :\n\\[ \\Delta U = W + Q \\]\n\nConvention de signe : \\(+\\) si le système REÇOIT (chaleur ou travail), \\(-\\) s\'il CÈDE.\n\nTravail des pressions : \\(W = -\\int P\\,dV\\).\n\nSur un cycle : \\(\\Delta U_{cycle} = W_{cycle} + Q_{cycle} = 0\\).'
        },
        {
          titre: 'Enthalpie',
          formule: 'H = U + PV',
          contenu: 'À pression constante, le 1er principe donne \\(Q_P = \\Delta H\\).\n\nL\'enthalpie est une variable d\'état (en Joules) représentant l\'énergie d\'un fluide en circulation. Enthalpie spécifique : \\(h = H/m\\) (J/kg), lue dans les tables thermodynamiques.\n\n⚠️ La relation \\(Q_P = \\Delta H\\) n\'est valable qu\'à pression constante.'
        },
        {
          titre: 'Changement de phase (corps pur)',
          schema: 'dome_vapeur',
          contenu: 'Pour une substance pure (eau) :\n• Chaleur sensible : élévation de température (sans changement d\'état).\n• Chaleur latente : changement d\'état à température constante.\n\nDans le diagramme (T, v), les points de saturation forment le « dôme de vapeur ». À gauche : liquide sous-refroidi ; sous le dôme : mélange liquide+vapeur ; à droite : vapeur surchauffée. Le sommet est le point critique.'
        },
        {
          titre: 'Gaz parfait',
          formule: 'PV = nRT \\qquad Pv = rT',
          contenu: 'Modèle idéal : interactions négligées, volume des molécules nul. Valable à faible pression et haute température.\n\n• \\(R = 8{,}314\\) J·mol⁻¹·K⁻¹ (constante des gaz parfaits)\n• \\(r = R/M\\) : constante spécifique (J·kg⁻¹·K⁻¹), forme massique \\(Pv = rT\\)\n\nLoi de Boyle-Mariotte (T cste) : \\(PV = \\text{cste}\\).\nLoi de Gay-Lussac (P cste) : \\(V \\propto T\\).\nLoi de Joule : \\(U = f(T)\\) seulement (dépend de la seule température).'
        }
      ]
    },
    methodes: [
      {
        titre: 'Identifier le type de système',
        contenu: 'Se demander ce qui traverse la frontière :\n\n• De la matière entre/sort (fluide en circulation) → système OUVERT (turbine, échangeur).\n• Masse fixe mais chaleur/travail échangés → système FERMÉ (gaz dans un piston).\n• Rien ne traverse → système ISOLÉ (thermos idéal, univers).\n\nLe bon choix conditionne la forme du 1er principe à appliquer.'
      },
      {
        titre: 'Appliquer le 1er principe',
        contenu: 'Système fermé : \\(\\Delta U = W + Q\\).\n\nMéthode :\n1. Choisir le système et repérer ses échanges.\n2. Appliquer la convention de signe (reçu \\(+\\), cédé \\(-\\)).\n3. Utiliser les cas particuliers :\n\\[ \\text{isochore } (V \\text{ cste}) : W = 0 \\Rightarrow \\Delta U = Q \\]\n\\[ \\text{isobare } (P \\text{ cste}) : Q_P = \\Delta H \\]\n\\[ \\text{adiabatique} : Q = 0 \\Rightarrow \\Delta U = W \\]\n\\[ \\text{cycle} : \\Delta U = 0 \\Rightarrow W = -Q \\]'
      },
      {
        titre: 'Utiliser l\'équation des gaz parfaits',
        contenu: 'Équation : \\(PV = nRT\\) (penser à \\(T\\) en KELVIN, \\(P\\) en Pa).\n\nPour une transformation entre deux états du même gaz :\n\\[ \\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2} \\]\n\nCas particuliers :\n• Isotherme : \\(P_1 V_1 = P_2 V_2\\) (Boyle-Mariotte)\n• Isobare : \\(V_1/T_1 = V_2/T_2\\) (Gay-Lussac)'
      },
      {
        titre: '⚠️ Pièges en thermodynamique',
        contenu: '• \\(Q\\) et \\(W\\) ne sont PAS des fonctions d\'état : leur valeur dépend du chemin.\n• Bien respecter la convention de signe (ce que reçoit le système est positif).\n• \\(Q_P = \\Delta H\\) seulement à pression constante.\n• Toujours convertir en Kelvin pour la loi des gaz parfaits.\n• Une transformation réelle est généralement irréversible.'
      }
    ],
    quiz: [
      {
        id: 'thd-q1',
        question: 'Un système qui n\'échange QUE de l\'énergie (pas de matière) est :',
        options: ['Fermé', 'Ouvert', 'Isolé', 'Adiabatique'],
        reponse: 0,
        explication: 'Système fermé : masse constante, mais échanges d\'énergie (chaleur, travail) possibles.'
      },
      {
        id: 'thd-q2',
        question: 'Laquelle de ces grandeurs n\'est PAS une variable d\'état ?',
        options: ['Le travail', 'La température', 'La pression', 'Le volume'],
        reponse: 0,
        explication: 'Le travail décrit une transformation (un chemin), pas un état. \\(Q\\) non plus.'
      },
      {
        id: 'thd-q3',
        question: 'Une transformation isochore se fait à :',
        options: ['Volume constant', 'Pression constante', 'Température constante', 'Sans échange de chaleur'],
        reponse: 0,
        explication: 'Isochore = \\(V\\) constant (isobare = \\(P\\), isotherme = \\(T\\), adiabatique = \\(Q=0\\)).'
      },
      {
        id: 'thd-q4',
        question: 'Le 1er principe pour un système fermé s\'écrit :',
        options: ['\\(\\Delta U = W + Q\\)', '\\(\\Delta U = W - Q\\)', '\\(H = U + PV\\)', '\\(PV = nRT\\)'],
        reponse: 0,
        explication: 'La variation d\'énergie interne = travail + chaleur reçus.'
      },
      {
        id: 'thd-q5',
        question: 'Pour une transformation adiabatique :',
        options: ['\\(Q = 0\\)', '\\(W = 0\\)', '\\(\\Delta U = 0\\)', '\\(\\Delta T = 0\\)'],
        reponse: 0,
        explication: 'Adiabatique = aucun échange de chaleur, donc \\(\\Delta U = W\\).'
      },
      {
        id: 'thd-q6',
        question: 'L\'enthalpie est définie par :',
        options: ['\\(H = U + PV\\)', '\\(H = U - PV\\)', '\\(H = U + W\\)', '\\(H = mC\\Delta T\\)'],
        reponse: 0,
        explication: 'À pression constante, \\(Q_P = \\Delta H\\) avec \\(H = U + PV\\).'
      },
      {
        id: 'thd-q7',
        question: 'Sur un cycle thermodynamique, \\(\\Delta U\\) vaut :',
        options: ['0', 'Q', 'W', 'H'],
        reponse: 0,
        explication: 'L\'état final = état initial, donc \\(\\Delta U = 0\\) (d\'où \\(W = -Q\\) sur le cycle).'
      },
      {
        id: 'thd-q8',
        question: 'L\'équation d\'état des gaz parfaits est :',
        options: ['\\(PV = nRT\\)', '\\(PV = mRT\\)', '\\(P/V = nRT\\)', '\\(PV = RT/n\\)'],
        reponse: 0,
        explication: '\\(PV = nRT\\) avec \\(R = 8{,}314\\) J·mol⁻¹·K⁻¹ et \\(T\\) en Kelvin.'
      },
      {
        id: 'thd-q9',
        question: 'La chaleur latente correspond à :',
        options: [
          'Un changement d\'état à température constante',
          'Une élévation de température',
          'Une compression',
          'Un travail mécanique'
        ],
        reponse: 0,
        explication: 'Chaleur latente = changement de phase à T constante ; chaleur sensible = variation de T.'
      },
      {
        id: 'thd-q10',
        question: 'La loi de Boyle-Mariotte (T constante) énonce :',
        options: ['\\(PV = \\text{cste}\\)', '\\(V/T = \\text{cste}\\)', '\\(P/T = \\text{cste}\\)', '\\(U = f(T)\\)'],
        reponse: 0,
        explication: 'À température constante, \\(P\\) est inversement proportionnelle à \\(V\\) : \\(PV = \\text{cste}\\).'
      }
    ]
  },

  'thermo-fluides': {
    id: 'thermo-fluides',
    matiere: 'Thermique',
    chapitre: 'Mécanique des fluides',
    description: 'Propriétés des fluides, hydrostatique, Archimède, continuité et Bernoulli',
    resume: {
      sections: [
        {
          titre: 'Types de fluides',
          contenu: 'La mécanique des fluides étudie les lois de l\'écoulement.\n\n• Fluide parfait : on néglige les frottements internes (un fluide au repos est toujours parfait).\n• Fluide réel : les forces de frottement interne (viscosité) sont prises en compte.\n\n• Incompressible : le volume ne varie pas avec la pression (liquides, eau, huile).\n• Compressible : le volume varie avec la pression (gaz, air).'
        },
        {
          titre: 'Masse volumique et densité',
          formule: '\\rho = \\frac{m}{V} \\qquad d = \\frac{\\rho}{\\rho_{ref}}',
          contenu: 'Masse volumique \\(\\rho\\) en kg/m³ (eau : 1000 ; air : 1,2 ; mercure : 13 546).\n\nDensité \\(d\\) : rapport sans unité par rapport à un fluide de référence (eau pour les liquides, air pour les gaz). Densité de l\'eau = 1.'
        },
        {
          titre: 'Viscosité',
          formule: '\\nu = \\frac{\\mu}{\\rho}',
          contenu: 'La viscosité caractérise les frottements internes du fluide (sa résistance à l\'écoulement).\n\n• Viscosité dynamique \\(\\mu\\) : en Pa·s (= kg·m⁻¹·s⁻¹).\n• Viscosité cinématique \\(\\nu = \\mu/\\rho\\) : en m²/s.\n\nFluide newtonien : viscosité constante (eau, air). Non-newtonien : viscosité variable (sang, gels).\n\n⚠️ Quand la température augmente, la viscosité d\'un liquide diminue.'
        },
        {
          titre: 'Hydrostatique',
          formule: 'P_1 - P_2 = \\rho g\\,(z_2 - z_1)',
          contenu: 'La différence de pression entre deux points d\'un même fluide est proportionnelle à leur différence de profondeur.\n\nThéorème de Pascal : dans un fluide incompressible en équilibre, toute variation de pression en un point se transmet intégralement en tout autre point.'
        },
        {
          titre: 'Poussée d\'Archimède',
          formule: 'P_{Arch} = \\rho_{fluide}\\, V_{imm}\\, g',
          contenu: 'Tout corps plongé dans un fluide subit une force verticale, vers le haut, égale au poids du volume de fluide déplacé.\n\n\\(V_{imm}\\) = volume immergé du corps.\n\nPour un solide hétérogène, le centre de poussée (point d\'application) n\'est pas confondu avec le centre de gravité.'
        },
        {
          titre: 'Équation de continuité',
          schema: 'conduite_bernoulli',
          formule: '\\rho_1 S_1 v_1 = \\rho_2 S_2 v_2 \\;\\Rightarrow\\; S_1 v_1 = S_2 v_2',
          contenu: 'En régime permanent (vitesse indépendante du temps), le débit massique se conserve.\n\nPour un fluide incompressible (\\(\\rho_1 = \\rho_2\\)) : \\(S_1 v_1 = S_2 v_2\\).\n\nConséquence : quand la section diminue, la vitesse augmente.'
        },
        {
          titre: 'Équation de Bernoulli',
          formule: '\\tfrac{1}{2}\\rho v^2 + \\rho g z + P = \\text{constante}',
          contenu: 'Pour un fluide parfait, incompressible, en écoulement permanent dans une conduite lisse, la pression totale est invariante :\n\\[ P_1 + \\rho g z_1 + \\tfrac{1}{2}\\rho v_1^2 = P_2 + \\rho g z_2 + \\tfrac{1}{2}\\rho v_2^2 \\]\n\n• \\(\\tfrac{1}{2}\\rho v^2\\) : pression dynamique\n• \\(\\rho g z\\) : pression hydrostatique\n• \\(P\\) : pression motrice'
        },
        {
          titre: 'Tube de Pitot',
          formule: '\\Delta P = P_A - P_B = \\rho g h',
          contenu: 'Mesure une vitesse d\'écoulement par la différence entre la pression totale (point d\'arrêt, \\(v_A = 0\\)) et la pression statique.\n\nHypothèses : points A et B sur la même ligne de courant, même altitude.'
        },
        {
          titre: 'Fluides réels — Reynolds et pertes de charge',
          formule: 'Re = \\frac{\\rho\\, U\\, D_h}{\\mu} = \\frac{U\\, D_h}{\\nu}',
          contenu: 'Le nombre de Reynolds (sans dimension) compare forces d\'inertie et forces de viscosité, et prédit le régime d\'écoulement (laminaire ou turbulent).\n\nDiamètre hydraulique : \\(D_h = \\dfrac{4S}{P}\\).\n\nBernoulli pour un fluide réel ajoute les pertes de charge \\(J_{12}\\) (énergie dissipée par frottement) :\n• pertes singulières (changement de section/direction)\n• pertes linéaires (le long des conduites)'
        }
      ]
    },
    methodes: [
      {
        titre: 'Calculer une pression hydrostatique',
        contenu: 'La pression augmente avec la profondeur :\n\\[ P_1 - P_2 = \\rho g (z_2 - z_1) \\]\n\nExemple : pression à 10 m sous l\'eau (\\(\\rho = 1000\\), \\(g = 9{,}81\\)) par rapport à la surface :\n\\[ \\Delta P = 1000 \\times 9{,}81 \\times 10 \\approx 98\\,100\\ \\text{Pa} \\approx 0{,}98\\ \\text{bar} \\]\n\nÀ 10 m, on a donc environ 1 bar de plus qu\'en surface.'
      },
      {
        titre: 'Appliquer la continuité',
        contenu: 'Fluide incompressible : \\(S_1 v_1 = S_2 v_2\\).\n\nExemple : un tuyau passe de \\(S_1 = 10\\) cm² (\\(v_1 = 2\\) m/s) à \\(S_2 = 5\\) cm².\n\\[ v_2 = \\frac{S_1 v_1}{S_2} = \\frac{10 \\times 2}{5} = 4\\ \\text{m/s} \\]\n\nLa section divisée par 2 → la vitesse doublée.'
      },
      {
        titre: 'Appliquer Bernoulli',
        contenu: 'Pour un fluide parfait entre deux points :\n\\[ P_1 + \\rho g z_1 + \\tfrac{1}{2}\\rho v_1^2 = P_2 + \\rho g z_2 + \\tfrac{1}{2}\\rho v_2^2 \\]\n\nMéthode :\n1. Choisir deux points sur la même ligne de courant.\n2. Repérer les termes connus/nuls (même altitude → \\(z_1 = z_2\\)).\n3. Combiner avec la continuité si les vitesses sont inconnues.\n\nPour un fluide réel, ajouter les pertes de charge \\(J_{12}\\) du côté aval.'
      },
      {
        titre: '⚠️ Pièges en mécanique des fluides',
        contenu: '• Bernoulli ne s\'applique qu\'à un fluide PARFAIT, incompressible, en régime permanent.\n• Pour un fluide réel, ne pas oublier les pertes de charge.\n• Section qui diminue ⟹ vitesse qui augmente (continuité), et donc pression qui baisse (Bernoulli).\n• La poussée d\'Archimède dépend du volume IMMERGÉ, pas du volume total.\n• Reynolds et viscosité sont sans objet pour un fluide parfait.'
      }
    ],
    quiz: [
      {
        id: 'flu-q1',
        question: 'Un fluide incompressible est un fluide dont :',
        options: [
          'Le volume ne varie pas avec la pression',
          'La viscosité est nulle',
          'La masse volumique est nulle',
          'Le volume varie avec la pression'
        ],
        reponse: 0,
        explication: 'Incompressible = volume constant sous l\'effet de la pression (liquides, eau, huile).'
      },
      {
        id: 'flu-q2',
        question: 'La densité d\'un fluide est :',
        options: [
          'Un nombre sans unité',
          'En kg/m³',
          'En Pa·s',
          'En m²/s'
        ],
        reponse: 0,
        explication: 'C\'est un rapport de deux masses volumiques → adimensionnel (densité de l\'eau = 1).'
      },
      {
        id: 'flu-q3',
        question: 'La viscosité cinématique vaut :',
        options: ['\\(\\nu = \\mu/\\rho\\)', '\\(\\nu = \\mu\\rho\\)', '\\(\\nu = \\rho/\\mu\\)', '\\(\\nu = \\mu + \\rho\\)'],
        reponse: 0,
        explication: '\\(\\nu = \\mu/\\rho\\), en m²/s (\\(\\mu\\) = viscosité dynamique en Pa·s).'
      },
      {
        id: 'flu-q4',
        question: 'Quand la température d\'un liquide augmente, sa viscosité :',
        options: ['Diminue', 'Augmente', 'Reste constante', 'S\'annule'],
        reponse: 0,
        explication: 'La viscosité d\'un liquide diminue quand la température augmente.'
      },
      {
        id: 'flu-q5',
        question: 'La poussée d\'Archimède vaut :',
        options: [
          '\\(\\rho_{fluide}\\, V_{imm}\\, g\\)',
          '\\(\\rho_{solide}\\, V\\, g\\)',
          '\\(\\rho g h\\)',
          '\\(\\tfrac{1}{2}\\rho v^2\\)'
        ],
        reponse: 0,
        explication: 'Poids du volume de fluide déplacé : \\(P_{Arch} = \\rho_{fluide}\\, V_{imm}\\, g\\).'
      },
      {
        id: 'flu-q6',
        question: 'L\'équation de continuité (fluide incompressible) est :',
        options: ['\\(S_1 v_1 = S_2 v_2\\)', '\\(S_1 v_2 = S_2 v_1\\)', '\\(S_1 + v_1 = S_2 + v_2\\)', '\\(P_1 v_1 = P_2 v_2\\)'],
        reponse: 0,
        explication: 'Conservation du débit volumique : \\(S_1 v_1 = S_2 v_2\\).'
      },
      {
        id: 'flu-q7',
        question: 'Dans une conduite, si la section diminue, la vitesse du fluide :',
        options: ['Augmente', 'Diminue', 'Reste constante', 'S\'annule'],
        reponse: 0,
        explication: 'Par continuité \\(S_1 v_1 = S_2 v_2\\) : section ↓ ⟹ vitesse ↑.'
      },
      {
        id: 'flu-q8',
        question: 'L\'équation de Bernoulli suppose un fluide :',
        options: [
          'Parfait, incompressible, en régime permanent',
          'Réel et visqueux',
          'Compressible',
          'Au repos'
        ],
        reponse: 0,
        explication: 'Hypothèses de Bernoulli : fluide parfait, incompressible, écoulement permanent, conduite lisse.'
      },
      {
        id: 'flu-q9',
        question: 'Le nombre de Reynolds compare :',
        options: [
          'Forces d\'inertie / forces de viscosité',
          'Pression / température',
          'Vitesse / accélération',
          'Masse / volume'
        ],
        reponse: 0,
        explication: '\\(Re = \\rho U D_h/\\mu\\) : rapport inertie/viscosité, il prédit le régime (laminaire/turbulent).'
      },
      {
        id: 'flu-q10',
        question: 'Les pertes de charge dans un fluide réel sont dues :',
        options: [
          'Aux frottements visqueux',
          'À la poussée d\'Archimède',
          'À la compressibilité',
          'À la température'
        ],
        reponse: 0,
        explication: 'Elles représentent l\'énergie dissipée par frottement (singulières + linéaires).'
      }
    ]
  },

  'mat-structure': {
    id: 'mat-structure',
    matiere: 'Matériaux',
    chapitre: 'Structure atomique & Liaisons',
    description: 'Atome, modèle quantique, liaisons chimiques et classification des matériaux',
    resume: {
      sections: [
        {
          titre: 'L\'atome',
          formule: '^{A}_{Z}X',
          contenu: 'Un atome = noyau (protons + neutrons) entouré d\'un nuage d\'électrons (autant que de protons si neutre).\n\n• Numéro atomique \\(Z\\) = nombre de protons\n• Nombre de masse \\(A\\) = protons + neutrons\n\nIon : excès d\'électrons → anion (−) ; défaut → cation (+).\nIsotopes = même \\(Z\\), \\(A\\) différent. Mole : \\(N_A = 6{,}02\\times10^{23}\\) particules.'
        },
        {
          titre: 'Le modèle quantique',
          contenu: 'Un électron est décrit par 4 nombres quantiques :\n• \\(n\\) : couche (K, L, M, N…), \\(n \\geq 1\\)\n• \\(\\ell\\) : sous-couche (s, p, d, f), \\(0 \\leq \\ell \\leq n-1\\)\n• \\(m_\\ell\\) : orientation, \\(-\\ell \\leq m_\\ell \\leq \\ell\\)\n• \\(m_s\\) : spin, \\(\\pm\\tfrac{1}{2}\\)\n\nNombre max d\'électrons par couche : \\(2n^2\\). Par sous-couche : s²=2, p⁶=6, d¹⁰=10, f¹⁴=14.'
        },
        {
          titre: 'Remplissage électronique',
          contenu: 'Trois règles :\n• Principe de Pauli : pas deux électrons avec les mêmes 4 nombres quantiques.\n• Règle de Hund : on remplit un maximum de cases avant d\'apparier.\n• Règle de Klechkowski : remplissage par \\(n + \\ell\\) croissant (à \\(n+\\ell\\) égal, \\(n\\) le plus petit d\'abord).\n\nExemple (Fer, Z=26) : \\(1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6\\,4s^2\\,3d^6\\).'
        },
        {
          titre: 'Électronégativité',
          formule: '\\% \\text{ covalent} = e^{-0{,}25\\,\\Delta X^2}',
          contenu: 'L\'électronégativité \\(X\\) mesure la capacité d\'un atome à attirer les électrons d\'une liaison.\n\nLe type de liaison dépend de l\'écart \\(\\Delta X\\) :\n• \\(\\Delta X\\) faible → liaison covalente (électronégativités voisines)\n• \\(\\Delta X\\) élevé → liaison ionique (électronégativités très différentes)\n• métaux (\\(\\Delta X \\approx 0\\)) → liaison métallique'
        },
        {
          titre: 'Les liaisons fortes',
          contenu: '• Métallique : les électrons de valence forment un « nuage » libre entre les cations. Non directionnelle → conductivité, ductilité.\n• Covalente : partage d\'un doublet d\'électrons entre atomes d\'électronégativités proches. Directionnelle → rigidité, fragilité (ex : diamant).\n• Ionique : attraction entre cation (+) et anion (−), fort \\(\\Delta X\\). Non directionnelle (ex : NaCl).\n\nÉnergies (kcal/mol) : métallique 25–200 · ionique 150–370 · covalente 125–300.'
        },
        {
          titre: 'Les liaisons faibles',
          contenu: 'Énergie de 0,5 à 50 kJ/mol (~10 % d\'une covalente), agissant à plus longue distance.\n\n• Van der Waals : Keesom (dipôle permanent/permanent), Debye (permanent/induit), London (induit/induit).\n• Liaison hydrogène : entre un groupe A–H et un atome très électronégatif (O, N, halogène). Plus forte (~50 kJ/mol).\n\nElles expliquent p. ex. les températures d\'ébullition croissantes des hydrocarbures.'
        },
        {
          titre: 'Classification des matériaux',
          contenu: '4 grandes familles selon le type de liaison :\n\n• Métaux (liaison métallique) : denses, conducteurs, ductiles, E moyen à élevé.\n• Céramiques (ionique + covalente) : isolants, fragiles, E élevé, Tf élevée.\n• Polymères (covalente + Van der Waals) : légers, isolants, visco-élastiques, E faible, Tf faible.\n• Composites : matrice (cohésion) + renfort (résistance), ex. fibre de verre/carbone.\n\nAussi : semi-conducteurs, biomatériaux, nanomatériaux.'
        },
        {
          titre: 'États de la matière & allotropie',
          contenu: 'La stabilité du solide vient de l\'équilibre entre forces attractives et répulsives (distance interatomique d\'équilibre).\n\n• Cristallin : arrangement régulier, symétrie à courte ET longue portée (ex : quartz).\n• Amorphe : ordre à courte portée seulement (ex : verre).\n\nMême composition, structures différentes → propriétés différentes : graphite (feuillets, liaisons faibles interfeuillets → friable) vs diamant (covalent 3D → dur). C\'est l\'allotropie.'
        }
      ]
    },
    methodes: [
      {
        titre: 'Établir une configuration électronique',
        contenu: 'On remplit les sous-couches par \\(n+\\ell\\) croissant (Klechkowski).\n\nOrdre : 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s…\n\nExemple pour le Fer (Z=26), on place 26 électrons :\n\\[ 1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6\\,4s^2\\,3d^6 \\]\n\nVérification : \\(2+2+6+2+6+2+6 = 26\\) ✓'
      },
      {
        titre: 'Déterminer le type de liaison',
        contenu: 'On calcule l\'écart d\'électronégativité \\(\\Delta X\\) entre les deux éléments.\n\nExemple SiO₂ : \\(X_{Si}=1{,}8\\), \\(X_O=3{,}5\\) → \\(\\Delta X = 1{,}7\\).\n\nCaractère covalent :\n\\[ \\% = e^{-0{,}25 \\times 1{,}7^2} \\approx 0{,}49 \\Rightarrow 49\\% \\text{ covalent} \\]\ndonc ~51 % ionique. La liaison est mixte, à dominante ionique.'
      },
      {
        titre: 'Relier liaison et propriétés',
        contenu: 'Le type de liaison explique les propriétés macroscopiques (intrinsèques) :\n\n• Conductivité élevée des métaux → électrons libres (nuage).\n• Fragilité des céramiques → liaisons ionique/covalente rigides.\n• Tf basse des polymères → liaisons faibles (Van der Waals) entre chaînes.\n\nRègle générale : plus l\'énergie de liaison est élevée, plus \\(T_f\\) et le module de Young \\(E\\) sont élevés.'
      },
      {
        titre: '⚠️ Pièges en structure atomique',
        contenu: '• Liaison covalente = électronégativités PROCHES ; ionique = très DIFFÉRENTES (ne pas inverser).\n• Amorphe = ordre à courte portée seulement (pas de longue portée).\n• Les liaisons faibles ne sont pas « négligeables » : elles gouvernent les Tf des polymères.\n• Klechkowski : le 4s se remplit AVANT le 3d (car \\(n+\\ell\\) plus petit).'
      }
    ],
    quiz: [
      {
        id: 'mat-q1',
        question: 'Le numéro atomique Z d\'un atome correspond au nombre de :',
        options: ['Protons', 'Neutrons', 'Protons + neutrons', 'Électrons de valence'],
        reponse: 0,
        explication: '\\(Z\\) = nombre de protons ; \\(A\\) = protons + neutrons.'
      },
      {
        id: 'mat-q2',
        question: 'Le nombre maximum d\'électrons sur une couche n est :',
        options: ['\\(2n^2\\)', '\\(n^2\\)', '\\(2n\\)', '\\(n+2\\)'],
        reponse: 0,
        explication: 'Couche K (n=1) : 2 ; L (n=2) : 8 ; M (n=3) : 18… soit \\(2n^2\\).'
      },
      {
        id: 'mat-q3',
        question: 'La règle de Klechkowski remplit les orbitales par :',
        options: ['\\(n + \\ell\\) croissant', '\\(n\\) croissant seulement', '\\(\\ell\\) croissant seulement', 'ordre alphabétique'],
        reponse: 0,
        explication: 'Par \\(n+\\ell\\) croissant ; à valeur égale, le \\(n\\) le plus petit d\'abord (ex : 4s avant 3d).'
      },
      {
        id: 'mat-q4',
        question: 'Une liaison covalente se forme entre atomes d\'électronégativités :',
        options: ['Voisines', 'Très différentes', 'Nulles', 'Toujours identiques'],
        reponse: 0,
        explication: 'Covalente = électronégativités proches (partage d\'électrons). Ionique = très différentes.'
      },
      {
        id: 'mat-q5',
        question: 'La conductivité électrique élevée des métaux s\'explique par :',
        options: [
          'Les électrons libres (nuage électronique)',
          'Les liaisons ioniques',
          'Les liaisons hydrogène',
          'L\'état amorphe'
        ],
        reponse: 0,
        explication: 'La liaison métallique délocalise les électrons de valence → nuage libre conducteur.'
      },
      {
        id: 'mat-q6',
        question: 'Quelle famille a typiquement une température de fusion faible ?',
        options: ['Les polymères', 'Les céramiques', 'Les métaux réfractaires', 'Les alliages'],
        reponse: 0,
        explication: 'Les polymères : liaisons faibles (Van der Waals) entre chaînes → Tf et E faibles.'
      },
      {
        id: 'mat-q7',
        question: 'Un matériau amorphe présente une symétrie :',
        options: [
          'À courte portée uniquement',
          'À courte et longue portée',
          'À longue portée uniquement',
          'Parfaitement périodique'
        ],
        reponse: 0,
        explication: 'Amorphe (ex : verre) = ordre local seulement ; cristallin = courte ET longue portée.'
      },
      {
        id: 'mat-q8',
        question: 'La liaison hydrogène est une liaison :',
        options: [
          'Faible mais plus forte que Van der Waals',
          'Forte de type covalent',
          'Métallique',
          'Ionique'
        ],
        reponse: 0,
        explication: 'C\'est une liaison faible (~50 kJ/mol), plus énergétique que les autres Van der Waals.'
      },
      {
        id: 'mat-q9',
        question: 'Diamant et graphite diffèrent par :',
        options: [
          'Leur structure cristalline (allotropie)',
          'Leur composition chimique',
          'Leur numéro atomique',
          'Leur nombre de neutrons'
        ],
        reponse: 0,
        explication: 'Même carbone, structures différentes (allotropie) : diamant 3D covalent dur, graphite feuillets friable.'
      },
      {
        id: 'mat-q10',
        question: 'Un composite est constitué de :',
        options: [
          'Une matrice + un renfort',
          'Un seul métal pur',
          'Uniquement des céramiques',
          'Un gaz et un liquide'
        ],
        reponse: 0,
        explication: 'Matrice (cohésion, transmet les efforts) + renfort (résistance/rigidité), ex. fibre de carbone/époxy.'
      }
    ]
  },

  'mat-cristallo': {
    id: 'mat-cristallo',
    matiere: 'Matériaux',
    chapitre: 'Cristallographie',
    description: 'Réseau, mailles CC/CFC/HC, compacité, masse volumique et défauts',
    resume: {
      sections: [
        {
          titre: 'Réseau, motif et maille',
          formule: '\\vec{T} = n_1\\vec{a} + n_2\\vec{b} + n_3\\vec{c}',
          contenu: 'La cristallographie étudie l\'organisation régulière des atomes.\n\n• Motif : entité chimique placée aux nœuds du réseau.\n• Réseau : ensemble des positions des nœuds.\n• Maille : plus petite entité dont la répétition (translations \\(\\vec{T}\\)) engendre le cristal.\n\nHypothèse de travail : atomes = sphères rigides. La structure résulte de la minimisation de l\'énergie.'
        },
        {
          titre: 'Les trois structures métalliques',
          schema: 'mailles_cubiques',
          contenu: 'Empilements compacts de sphères :\n• CC (cubique centrée) : empilement moins compact.\n• CFC (cubique à faces centrées) : empilement ABCABC…\n• HC (hexagonale compacte) : empilement ABAB…\n\nCFC et HC sont les plus compacts (coordinence 12).'
        },
        {
          titre: 'Caractéristiques des mailles',
          formule: '\\begin{array}{c|c|c|c} & \\text{motifs} & \\text{coord.} & \\text{compacité} \\\\ \\hline \\\\[-9pt] \\text{CC} & 2 & 8 & 0{,}68 \\\\[3pt] \\text{CFC} & 4 & 12 & 0{,}74 \\\\[3pt] \\text{HC} & 6 & 12 & 0{,}74 \\end{array}',
          contenu: 'Motifs par maille :\n• CC : \\(8\\times\\tfrac{1}{8} + 1 = 2\\)\n• CFC : \\(8\\times\\tfrac{1}{8} + 6\\times\\tfrac{1}{2} = 4\\)\n\nCoordinence = nombre de plus proches voisins équidistants.\n\nRelation rayon-arête : CFC \\(4R = a\\sqrt{2}\\) ; CC \\(4R = a\\sqrt{3}\\).'
        },
        {
          titre: 'Compacité',
          formule: 'C = \\frac{V_{motifs}}{V_{maille}} = \\frac{N \\cdot \\tfrac{4}{3}\\pi R^3}{a^3}',
          contenu: 'La compacité = fraction du volume réellement occupée par les sphères.\n\n• CFC : \\(C \\approx 0{,}74\\) (74 % rempli — maximum pour des sphères identiques)\n• HC : \\(C \\approx 0{,}74\\)\n• CC : \\(C \\approx 0{,}68\\)\n\nLe reste (~26 %) est constitué de vides : les sites interstitiels.'
        },
        {
          titre: 'Masse volumique théorique',
          formule: '\\rho = \\frac{N \\cdot M}{N_A \\cdot a^3}',
          contenu: 'Pour une maille de côté \\(a\\) contenant \\(N\\) motifs de masse molaire \\(M\\) :\n\\[ \\rho = \\frac{N\\,M}{N_A\\,a^3} \\]\navec \\(N_A = 6{,}02\\times10^{23}\\) mol⁻¹.\n\nComparer \\(\\rho\\) calculée aux valeurs mesurées permet d\'identifier le type de maille (CC, CFC…).'
        },
        {
          titre: 'Sites interstitiels',
          formule: '\\frac{R_{octa}}{R} = \\sqrt{2} - 1 \\approx 0{,}414 \\;(\\text{CFC})',
          contenu: 'Les vides entre atomes peuvent accueillir de petits atomes :\n• Sites octaédriques (SO) et tétraédriques (ST).\n• CFC : 4 SO + 8 ST. Habitabilité octa \\(\\approx 0{,}414\\,R\\).\n\nExemple (fer) : l\'hydrogène (petit) s\'insère sans déformer → fragilisation ; le carbone/azote (plus gros) déforment → acier/fonte carburé ou nitruré.'
        },
        {
          titre: 'Défauts des cristaux',
          contenu: 'Un cristal réel n\'est jamais parfait :\n\n• Lacunes (dim. 0) : atomes manquants.\n• Solution solide (dim. 1) : atomes étrangers, par substitution ou insertion → alliages.\n• Dislocations (dim. 1) : responsables de la déformation plastique et du durcissement.\n• Joints de grains (dim. 2) : frontières entre cristaux → influencent la fragilité.\n\nLes défauts gouvernent une grande part des propriétés mécaniques.'
        }
      ]
    },
    methodes: [
      {
        titre: 'Compter les motifs d\'une maille',
        contenu: 'On pondère chaque atome selon sa position (partagé entre mailles) :\n• sommet : compte \\(\\tfrac{1}{8}\\)\n• arête : \\(\\tfrac{1}{4}\\)\n• face : \\(\\tfrac{1}{2}\\)\n• intérieur : \\(1\\)\n\nCFC : \\(8\\times\\tfrac{1}{8}\\) (sommets) \\(+\\ 6\\times\\tfrac{1}{2}\\) (faces) \\(= 1 + 3 = 4\\) motifs.\nCC : \\(8\\times\\tfrac{1}{8} + 1 = 2\\) motifs.'
      },
      {
        titre: 'Calculer une compacité (CFC)',
        contenu: 'Relation rayon-arête (diagonale de face) : \\(4R = a\\sqrt{2}\\), donc \\(R = \\dfrac{a\\sqrt{2}}{4}\\).\n\nCompacité :\n\\[ C = \\frac{4 \\cdot \\tfrac{4}{3}\\pi R^3}{a^3} \\]\n\nEn remplaçant \\(R\\) :\n\\[ C = \\frac{\\pi\\sqrt{2}}{6} \\approx 0{,}74 \\]'
      },
      {
        titre: 'Identifier une maille par la masse volumique',
        contenu: 'On inverse la formule \\(\\rho = \\dfrac{N M}{N_A a^3}\\) pour trouver \\(N\\) :\n\\[ N = \\frac{\\rho\\,N_A\\,a^3}{M} \\]\n\nExemple : \\(\\rho = 2{,}6\\) g/cm³, \\(M = 87{,}62\\) g/mol, \\(a = 6{,}085\\times10^{-8}\\) cm.\n\nOn calcule \\(N\\) : si \\(N \\approx 4\\) → CFC ; \\(N \\approx 2\\) → CC.'
      },
      {
        titre: '⚠️ Pièges en cristallographie',
        contenu: '• Compacité CFC = 0,74, CC = 0,68 (ne pas confondre).\n• Bien pondérer les atomes partagés (sommet ⅛, face ½).\n• Relation rayon-arête différente selon la maille : CFC \\(4R=a\\sqrt2\\), CC \\(4R=a\\sqrt3\\).\n• Travailler en unités cohérentes (a en cm, \\(N_A\\) en mol⁻¹) pour \\(\\rho\\) en g/cm³.\n• Les dislocations, pas les lacunes, gouvernent la déformation plastique.'
      }
    ],
    quiz: [
      {
        id: 'cri-q1',
        question: 'Combien de motifs contient une maille CFC ?',
        options: ['4', '2', '6', '8'],
        reponse: 0,
        explication: '\\(8\\times\\tfrac18\\) (sommets) \\(+ 6\\times\\tfrac12\\) (faces) \\(= 1+3 = 4\\).'
      },
      {
        id: 'cri-q2',
        question: 'La compacité de la structure CFC vaut :',
        options: ['0,74', '0,68', '0,52', '1,00'],
        reponse: 0,
        explication: 'CFC : \\(C \\approx 0{,}74\\) (comme HC) ; CC : 0,68.'
      },
      {
        id: 'cri-q3',
        question: 'La coordinence d\'une structure CFC est :',
        options: ['12', '8', '6', '4'],
        reponse: 0,
        explication: '12 plus proches voisins équidistants (comme HC). CC : 8.'
      },
      {
        id: 'cri-q4',
        question: 'Combien de motifs dans une maille cubique centrée (CC) ?',
        options: ['2', '1', '4', '8'],
        reponse: 0,
        explication: '\\(8\\times\\tfrac18\\) (sommets) \\(+ 1\\) (centre) \\(= 2\\).'
      },
      {
        id: 'cri-q5',
        question: 'La masse volumique théorique d\'un cristal est :',
        options: [
          '\\(\\rho = \\dfrac{N M}{N_A a^3}\\)',
          '\\(\\rho = \\dfrac{M a^3}{N_A}\\)',
          '\\(\\rho = \\dfrac{N_A M}{N a^3}\\)',
          '\\(\\rho = N M a^3\\)'
        ],
        reponse: 0,
        explication: 'Masse des motifs (\\(N M/N_A\\)) divisée par le volume de maille (\\(a^3\\)).'
      },
      {
        id: 'cri-q6',
        question: 'Dans une maille CFC, un atome situé sur une face compte pour :',
        options: ['1/2', '1/8', '1/4', '1'],
        reponse: 0,
        explication: 'Un atome de face est partagé entre 2 mailles → compte 1/2. Sommet : 1/8.'
      },
      {
        id: 'cri-q7',
        question: 'La relation rayon-arête d\'une maille CFC est :',
        options: ['\\(4R = a\\sqrt{2}\\)', '\\(4R = a\\sqrt{3}\\)', '\\(2R = a\\)', '\\(R = a\\)'],
        reponse: 0,
        explication: 'Les atomes se touchent le long de la diagonale d\'une face : \\(4R = a\\sqrt2\\). (CC : \\(a\\sqrt3\\).)'
      },
      {
        id: 'cri-q8',
        question: 'Les dislocations sont responsables de :',
        options: [
          'La déformation plastique',
          'La conductivité électrique',
          'La couleur du métal',
          'La masse volumique'
        ],
        reponse: 0,
        explication: 'Les dislocations (défauts de dim. 1) permettent la déformation plastique et le durcissement.'
      },
      {
        id: 'cri-q9',
        question: 'Un atome de carbone inséré dans les sites interstitiels du fer crée :',
        options: [
          'Une solution solide d\'insertion',
          'Une lacune',
          'Un joint de grain',
          'Un amorphe'
        ],
        reponse: 0,
        explication: 'Le carbone se loge dans les interstices → solution solide d\'insertion (aciers, fontes).'
      },
      {
        id: 'cri-q10',
        question: 'Quel empilement correspond à la structure HC ?',
        options: ['ABAB…', 'ABCABC…', 'AAAA…', 'ABBA…'],
        reponse: 0,
        explication: 'HC = empilement ABAB… ; CFC = ABCABC…'
      }
    ]
  }
};

// ── State ──────────────────────────────────────────────
const STORAGE_KEY = 'icam_progression';

function loadProg() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}
function saveProg(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// ── App data ──────────────────────────────────────────
const MATIERES = [
  {
    id: 'physique',
    nom: 'Physique',
    chapitres: [
      { id: 'physique-electronique', nom: 'Électronique Analogique — Bases' }
    ]
  },
  {
    id: 'maths',
    nom: 'Maths',
    chapitres: [
      { id: 'maths-fondamentaux', nom: 'Fondamentaux algèbre' },
      { id: 'maths-trigo', nom: 'Trigonométrie (rappel)' },
      { id: 'maths-analyse', nom: 'Analyse' },
      { id: 'maths-matrices', nom: 'Calcul matriciel' },
      { id: 'maths-sl', nom: 'Systèmes linéaires' },
      { id: 'maths-edo', nom: 'Équations différentielles & Laplace' }
    ]
  },
  {
    id: 'mecanique',
    nom: 'Mécanique',
    chapitres: [
      { id: 'meca-vecteurs', nom: 'Vecteurs' },
      { id: 'meca-cinematique', nom: 'Cinématique du point' },
      { id: 'meca-dynamique', nom: 'Dynamique du point' }
    ]
  },
  {
    id: 'thermique',
    nom: 'Thermique',
    chapitres: [
      { id: 'thermo-bases', nom: 'Bases de la thermique' },
      { id: 'thermo-modes', nom: 'Modes de transfert' },
      { id: 'thermo-thermodynamique', nom: 'Thermodynamique' },
      { id: 'thermo-fluides', nom: 'Mécanique des fluides' },
      { id: 'thermo-confort', nom: 'Confort thermique (rappel)' }
    ]
  },
  {
    id: 'materiaux',
    nom: 'Matériaux',
    chapitres: [
      { id: 'mat-structure', nom: 'Structure atomique & Liaisons' },
      { id: 'mat-cristallo', nom: 'Cristallographie' }
    ]
  }
];

// ── Navigation state ───────────────────────────────────
let currentView = 'home';
let currentContent = null;
let currentChapId = null;
let quizState = null;

// ── Boot ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  registerSW();
  renderHome();
  setupNav();
});

function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

// ── Navigation ─────────────────────────────────────────
function setupNav() {
  document.querySelectorAll('nav.bottom button').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentView === 'home') {
        if (btn.dataset.tab === 'prog') { showProgView(); return; }
        return;
      }
      handleChapitreTab(btn.dataset.tab);
    });
  });
  document.querySelector('.back-btn').addEventListener('click', goHome);
}

function handleChapitreTab(tab) {
  if (tab === 'home') { goHome(); return; }
  switchTab(tab);
  if (tab === 'quiz') startQuiz();
  if (tab === 'prog') renderProg();
}

function showProgView() {
  switchTab('prog');
  renderProg();
}

function switchTab(tab) {
  document.querySelectorAll('nav.bottom button').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.id === 'view-' + tab));
}

function goHome() {
  currentView = 'home';
  currentContent = null;
  currentChapId = null;
  document.querySelector('.back-btn').classList.remove('visible');
  document.querySelector('header h1').textContent = 'ICAM Révision';
  document.querySelectorAll('nav.bottom button').forEach(b => { b.style.display = ''; });
  renderHome();
  switchTab('home');
  setupNav();
}

// ── HOME VIEW ─────────────────────────────────────────
function renderHome() {
  const prog = loadProg();
  const container = document.getElementById('view-home');
  container.innerHTML = MATIERES.map(mat => `
    <div class="matiere-card">
      <h2>${mat.nom}</h2>
      ${mat.chapitres.map(chap => {
        const p = prog[chap.id];
        const noQuiz = !chap.locked && CONTENT_DB[chap.id] && !(CONTENT_DB[chap.id].quiz && CONTENT_DB[chap.id].quiz.length);
        const badge = chap.locked
          ? '<span class="chap-badge badge-new">Bientôt</span>'
          : noQuiz
            ? '<span class="chap-badge badge-new">📌 Rappel</span>'
            : p
              ? (p.maitrise ? '<span class="chap-badge badge-ok">✓ Maîtrisé</span>' : '<span class="chap-badge badge-review">↺ À revoir</span>')
              : '<span class="chap-badge badge-new">Nouveau</span>';
        const scoreStr = (p && !noQuiz) ? `<br><small style="color:var(--text2);font-size:0.75rem">Score : ${p.score}/${p.total} · ${p.date}</small>` : '';
        return `
          <div class="chapitre-item" ${chap.locked ? '' : `data-chapid="${chap.id}"`}
               style="${chap.locked ? 'opacity:0.45;cursor:default' : ''}">
            <span class="chap-name">${chap.nom}${scoreStr}</span>
            ${badge}
          </div>`;
      }).join('')}
    </div>
  `).join('');

  container.querySelectorAll('[data-chapid]').forEach(el => {
    el.addEventListener('click', () => openChapitre(el.dataset.chapid));
  });
}

// ── CHAPITRE ──────────────────────────────────────────
function openChapitre(chapId) {
  currentView = 'chapitre';
  currentChapId = chapId;
  currentContent = CONTENT_DB[chapId];

  document.querySelector('.back-btn').classList.add('visible');
  document.querySelector('header h1').textContent = currentContent.chapitre;

  const hasQuiz = !!(currentContent.quiz && currentContent.quiz.length);
  document.querySelectorAll('nav.bottom button').forEach(b => {
    if (b.dataset.tab === 'quiz' || b.dataset.tab === 'prog') {
      b.style.display = hasQuiz ? '' : 'none';
    }
  });

  renderResume();
  renderMethodes();
  switchTab('resume');
}

// ── RESUME ────────────────────────────────────────────
function renderResume() {
  const el = document.getElementById('view-resume');
  el.innerHTML = currentContent.resume.sections.map(s => `
    <div class="resume-section">
      <h3>${s.titre}</h3>
      ${s.formule ? `<div class="formula-block">\\[${s.formule}\\]</div>` : ''}
      ${s.schema ? `<div class="schema-block">${SCHEMAS[s.schema]}</div>` : ''}
      <p>${s.contenu}</p>
      ${s.formule2 ? `<div class="formula-block">\\[${s.formule2}\\]</div>` : ''}
    </div>`).join('');
  renderKatex(el);
}

// ── METHODES ──────────────────────────────────────────
function renderMethodes() {
  const el = document.getElementById('view-methodes');
  el.innerHTML = currentContent.methodes.map(m => `
    <div class="methode-card">
      <h3>${m.titre}</h3>
      <p>${m.contenu}</p>
    </div>
  `).join('');
  renderKatex(el);
}

// ── QUIZ ──────────────────────────────────────────────
function startQuiz() {
  const questions = shuffle([...currentContent.quiz]);
  quizState = { questions, index: 0, correct: 0, answered: false };
  renderQuizCard();
}

function renderQuizCard() {
  const el = document.getElementById('view-quiz');
  const { questions, index } = quizState;

  if (index >= questions.length) { renderQuizResult(); return; }

  const q = questions[index];
  const pct = Math.round((index / questions.length) * 100);

  el.innerHTML = `
    <div class="quiz-header">
      <span class="quiz-progress">Question ${index + 1} / ${questions.length}</span>
    </div>
    <div class="progress-bar-wrap"><div class="progress-bar" style="width:${pct}%"></div></div>
    <div class="quiz-card">
      <div class="quiz-question">
        ${q.schema ? `<div class="schema-block">${SCHEMAS[q.schema]}</div>` : ''}
        ${q.question}
      </div>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `<button class="quiz-option" data-idx="${i}">${opt}</button>`).join('')}
      </div>
      <div class="quiz-explication">${q.explication}</div>
      <button class="quiz-next-btn">${index + 1 < questions.length ? 'Question suivante →' : 'Voir les résultats'}</button>
    </div>
  `;

  renderKatex(el);
  el.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => answerQuiz(parseInt(btn.dataset.idx)));
  });
  el.querySelector('.quiz-next-btn').addEventListener('click', nextQuiz);
}

function answerQuiz(chosen) {
  if (quizState.answered) return;
  quizState.answered = true;

  const q = quizState.questions[quizState.index];
  const el = document.getElementById('view-quiz');
  el.querySelectorAll('.quiz-option').forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.reponse) btn.classList.add('correct');
    else if (i === chosen) btn.classList.add('wrong');
  });

  if (chosen === q.reponse) quizState.correct++;

  el.querySelector('.quiz-explication').classList.add('visible');
  el.querySelector('.quiz-next-btn').classList.add('visible');
}

function nextQuiz() {
  quizState.index++;
  quizState.answered = false;
  renderQuizCard();
}

function renderQuizResult() {
  const { correct, questions } = quizState;
  const total = questions.length;
  const pct = Math.round((correct / total) * 100);
  const maitrise = pct >= 70;

  const prog = loadProg();
  prog[currentChapId] = { score: correct, total, pct, maitrise, date: new Date().toLocaleDateString('fr-FR') };
  saveProg(prog);

  const el = document.getElementById('view-quiz');
  el.innerHTML = `
    <div class="quiz-result">
      <div class="quiz-score-big">${correct}/${total}</div>
      <div class="quiz-score-label">soit ${pct}% de bonnes réponses</div>
      <span class="result-badge ${maitrise ? 'result-ok' : 'result-review'}">
        ${maitrise ? '✓ Maîtrisé !' : '↺ À revoir'}
      </span>
      <br><br>
      <button class="btn-secondary" onclick="startQuiz()">Recommencer</button>
      <button class="btn-primary" onclick="switchTab('resume')">Revoir le résumé</button>
    </div>
  `;
}

// ── PROGRESSION ────────────────────────────────────────
function renderProg() {
  const prog = loadProg();
  const el = document.getElementById('view-prog');

  const all = MATIERES.flatMap(m => m.chapitres.filter(c => !c.locked));
  const done = all.filter(c => prog[c.id]);
  const maitrise = done.filter(c => prog[c.id]?.maitrise);

  el.innerHTML = `
    <h2 style="margin-bottom:16px;font-size:1rem;color:var(--text2)">Progression globale</h2>
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-num">${done.length}</div>
        <div class="stat-label">Chapitres tentés</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${maitrise.length}</div>
        <div class="stat-label">Maîtrisés (≥70%)</div>
      </div>
    </div>
    ${all.map(chap => {
      const p = prog[chap.id];
      const icon = !p ? '📘' : p.maitrise ? '✅' : '🔄';
      const detail = p ? `${p.score}/${p.total} (${p.pct}%) · ${p.date}` : 'Jamais révisé';
      const mat = MATIERES.find(m => m.chapitres.includes(chap));
      return `
        <div class="prog-item">
          <span class="prog-icon">${icon}</span>
          <div class="prog-info">
            <div class="prog-name">${chap.nom}</div>
            <div class="prog-detail">${mat.nom} · ${detail}</div>
          </div>
        </div>`;
    }).join('')}
    <br>
    <button class="btn-secondary" onclick="if(confirm('Réinitialiser toute la progression ?')){localStorage.removeItem('${STORAGE_KEY}');renderProg();}">
      🗑 Réinitialiser
    </button>
  `;
}

// ── KaTeX ──────────────────────────────────────────────
function renderKatex(el) {
  if (window.renderMathInElement) {
    renderMathInElement(el, {
      delimiters: [
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true }
      ],
      throwOnError: false
    });
  }
}

// ── Utils ──────────────────────────────────────────────
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
