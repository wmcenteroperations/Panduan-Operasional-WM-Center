// WM Center Clinic & Physio Ops Published Public App Script (Tampilan Utama Staf)
document.addEventListener('DOMContentLoaded', () => {

  const defaultRoles = [
    { id: 'fo', name: 'Front Office' },
    { id: 'physio', name: 'Fisioterapi & Terapis' },
    { id: 'doctor', name: 'Dokter Medis' },
    { id: 'management', name: 'Manajemen & Ops' }
  ];

  const defaultModules = [
    { id: 'sop', icon: 'ðŸ“„', name: 'General Ops & SOP' },
    { id: 'dailytask', icon: 'ðŸ“…', name: 'Modul Training' },
    { id: 'quicklink', icon: 'âš¡', name: 'IOC' }
  ];

  const defaultSettings = {
    brandTitle: 'WM CENTER',
    brandSubtitle: 'CLINIC & PHYSIO OPS PORTAL',
    branches: ['WM Center - Jakarta Utama', 'WM Center - Jakarta Selatan', 'WM Center - Jakarta Barat', 'WM Center - Sports & Physio Hub'],
    bannerUrl: 'assets/banner.jpg',
    logoUrl: 'assets/logo.jpg',
    heroTitle: 'Pusat Panduan SOP, Product Knowledge & Daily Tasks WM Center',
    heroDesc: 'Akses cepat seluruh instruksi kerja (SOP), materi product knowledge, rekap spreadsheet daily income, serta jadwal shift per cabang WM Center.',
    statusBadge: 'Jam Operasional: Minggu â€“ Senin (08.00 â€“ 17.00) â€¢ Selasa â€“ Sabtu (08.00 â€“ 21.00)',
    announcementTitle: 'Update SOP & Daily Task Drive WM Center (Per 18 Agustus 2026)',
    announcementDesc: 'Seluruh SOP, Product Knowledge, dan Rekap Spreadsheet Daily Income Cabang telah terhubung langsung dengan Google Drive internal WM Center.',
    moduleTab1: 'General Ops & SOP',
    moduleTab2: 'Modul Training',
    moduleTab3: 'IOC',
    roles: defaultRoles,
    modules: defaultModules
  };

  const defaultItems = [
    // --- MODULE: SOP & PRODUCT KNOWLEDGE ---
    {
      id: 'sop_fo_01',
      modules: ['sop'],
      module: 'sop',
      categories: ['fo'],
      category: 'fo',
      code: 'SOP-FO-01',
      title: 'SOP Registrasi & Alur Layanan Pasien Baru WM Center',
      summary: 'Panduan lengkap Front Office dalam menerima pasien baru, verifikasi data diri, dan pengisian formulir medis digital.',
      driveUrl: 'https://docs.google.com/document/d/example_sop_fo_01',
      details: '<h4>1. Greeter & Greeting Standard</h4><p>Sapa pasien dengan ramah dan tanyakan reservasi sesi fisioterapi/medis.</p><h4>2. Registrasi Digital</h4><p>Arahkan pengisian data awal di iPad klinik.</p>'
    },
    {
      id: 'sop_fo_02',
      code: 'SOP-FO-PK',
      modules: ['sop'],
      module: 'sop',
      categories: ['fo'],
      category: 'fo',
      title: 'Product Knowledge: Paket Terapi & Price List WM Center',
      summary: 'Katalog lengkap harga tindakan Fisioterapi, Dry Needling, Manual Therapy, serta paket bundel sesi terapi.',
      driveUrl: 'https://docs.google.com/spreadsheets/d/example_price_list_wm',
      details: '<h4>Panduan Product Knowledge:</h4><p>Daftar harga sesi single vs paket 5 & 10 sesi dengan diskon khusus.</p>'
    },
    {
      id: 'sop_phy_01',
      modules: ['sop'],
      module: 'sop',
      categories: ['physio'],
      category: 'physio',
      code: 'SOP-PHY-01',
      title: 'Protokol Asesmen Fisik & Clinical Reasoning Fisioterapi',
      summary: 'Standar pengujian ROM, MMT, tes provokasi nyeri, dan penentuan Plan of Care (POC) pasien.',
      driveUrl: 'https://docs.google.com/document/d/example_sop_phy_01',
      details: '<h4>Langkah Asesmen:</h4><p>1. Anamnesis keluhan utama<br>2. Test Goniometer ROM<br>3. MMT Strength Test</p>'
    },
    {
      id: 'sop_phy_02',
      modules: ['sop'],
      module: 'sop',
      categories: ['physio'],
      category: 'physio',
      code: 'SOP-PHY-PK',
      title: 'Product Knowledge: Peralatan & Modalitas Terapi Medis',
      summary: 'Panduan fungsi, kontraindikasi, dan indikasi alat Ultrasound, TENS, Electrotherapy, dan Traction Unit.',
      driveUrl: 'https://docs.google.com/document/d/example_pk_tools_physio',
      details: '<h4>Fungsi Alat:</h4><p>Ultrasound 1MHz untuk deep tissue, 3MHz untuk superficial tendon.</p>'
    },
    {
      id: 'sop_doc_01',
      modules: ['sop'],
      module: 'sop',
      categories: ['doctor'],
      category: 'doctor',
      code: 'SOP-DOC-01',
      title: 'Standar Asesmen Spesialis & Evaluasi Radiologi X-Ray/MRI',
      summary: 'SOP Pembacaan hasil foto rontgen/MRI, penentuan diagnosis ICD-10, dan rekomendasi program terapi fisioterapi.',
      driveUrl: 'https://docs.google.com/document/d/example_sop_doc_01',
      details: '<h4>1. Evaluasi Penunjang:</h4><p>Cek integritas struktur ligamen dan diskus intervertebralis pada MRI.</p>'
    },
    {
      id: 'sop_mgmt_01',
      modules: ['sop'],
      module: 'sop',
      categories: ['management'],
      category: 'management',
      code: 'SOP-MGT-01',
      title: 'SOP Pengawasan Operasional & Quality Control Cabang',
      summary: 'Instruksi Manajer Ops dalam mengaudit kinerja tim, respon komplain pasien, dan kebersihan standar medis klinik.',
      driveUrl: 'https://docs.google.com/document/d/example_sop_mgt_01',
      details: '<h4>Audit Harian:</h4><p>Lakukan inspeksi kebersihan ruang terapi & keakuratan pencatatan kasir.</p>'
    },

    // --- MODULE: DAILY TASKS & SPREADSHEETS CABANG ---
    {
      id: 'dt_fo_01',
      modules: ['dailytask'],
      module: 'dailytask',
      categories: ['fo'],
      category: 'fo',
      code: 'SHEET-DAILY',
      title: 'Spreadsheet Daily Task & Checklist Resepsionis FO',
      summary: 'Link Google Sheets checklist pembukaan kasir, pendaftaran pasien harian, dan konfirmasi WhatsApp H-1.',
      driveUrl: 'https://docs.google.com/spreadsheets/d/example_daily_task_fo',
      details: '<h4>Checklist Harian:</h4><p>Centang setiap item tugas di Google Sheets sebelum pergantian shift.</p>'
    },
    {
      id: 'dt_fo_02',
      modules: ['dailytask'],
      module: 'dailytask',
      categories: ['fo'],
      category: 'fo',
      code: 'SHEET-ROSTER',
      title: 'Jadwal Shift & Roster Front Office Tiap Cabang',
      summary: 'Link Google Sheets update jadwal piket staf resepsionis seluruh cabang WM Center bulan ini.',
      driveUrl: 'https://docs.google.com/spreadsheets/d/example_roster_fo',
      details: '<h4>Jadwal Shift:</h4><p>Cek jadwal shift pagi (07.30 - 15.30) dan shift sore (13.00 - 21.00).</p>'
    },
    {
      id: 'dt_phy_01',
      modules: ['dailytask'],
      module: 'dailytask',
      categories: ['physio'],
      category: 'physio',
      code: 'SHEET-DAILY',
      title: 'Spreadsheet Daily Task & Sanitasi Alat Fisioterapi',
      summary: 'Link Google Sheets logbook kebersihan bed terapi, sterilisasi alat, dan jumlah pasien yang ditangani per terapis.',
      driveUrl: 'https://docs.google.com/spreadsheets/d/example_daily_physio',
      details: '<h4>Logbook Terapis:</h4><p>Wajib mengisi nama pasien dan durasi terapi setelah setiap sesi selesai.</p>'
    },
    {
      id: 'dt_phy_02',
      modules: ['dailytask'],
      module: 'dailytask',
      categories: ['physio'],
      category: 'physio',
      code: 'SHEET-ROSTER',
      title: 'Jadwal Terapis & On-Call Fisioterapis Cabang',
      summary: 'Link Google Sheets jadwal penugasan fisioterapis spesialis musculoskeletal & sports rehab per cabang.',
      driveUrl: 'https://docs.google.com/spreadsheets/d/example_roster_physio',
      details: '<h4>Jadwal Terapis:</h4><p>Pastikan jumlah terapis yang bertugas mencukupi kuota antrean pasien.</p>'
    },
    {
      id: 'dt_mgmt_01',
      modules: ['dailytask'],
      module: 'dailytask',
      categories: ['management'],
      category: 'management',
      code: 'SHEET-INCOME',
      title: 'Spreadsheet Daily Income & Closing Kasir Harian Cabang',
      summary: 'Link Google Sheets rekapitulasi omset harian, pembayaran EDC, QRIS, dan transaksi paket terapi per cabang.',
      driveUrl: 'https://docs.google.com/spreadsheets/d/example_daily_income',
      details: '<h4>Closing Finance:</h4><p>Lakukan matching antara resi mesin EDC dengan total input kasir harian.</p>'
    },

    // --- MODULE: AKSES CEPAT SYSTEM & DRIVE TOOLS ---
    {
      id: 'ql_01',
      modules: ['quicklink'],
      module: 'quicklink',
      categories: ['fo'],
      category: 'fo',
      code: 'SYSTEM-EMR',
      title: 'Sistem EMR & Rekam Medis Pasien WM Center',
      summary: 'Akses cepat ke portal EMR digital untuk input rekam medis, riwayat asesmen, dan catatan terapi.',
      driveUrl: 'https://emr.wmcenter.clinic',
      details: 'Portal utama EMR klinik.'
    },
    {
      id: 'ql_02',
      modules: ['quicklink'],
      module: 'quicklink',
      categories: ['management'],
      category: 'management',
      code: 'DRIVE-STOK',
      title: 'Spreadsheet Inventaris & Order Stok Bahan Medis',
      summary: 'Formulir Google Sheets pengajuan re-stock Gel Ultrasound, Kinesiologi Tape, Bed Sheet, & Alkohol.',
      driveUrl: 'https://docs.google.com/spreadsheets/d/example_stok_wm',
      details: 'Pemesanan stok bahan medis klinik.'
    },
    {
      id: 'ql_03',
      modules: ['quicklink'],
      module: 'quicklink',
      categories: ['management'],
      category: 'management',
      code: 'DRIVE-COMPLAINT',
      title: 'Spreadsheet Logbook Escalation & Komplain Pasien',
      summary: 'Pusat catatan penanganan komplain, klaim garansi sesi terapi, dan perbaikan mutu pelayanan.',
      driveUrl: 'https://docs.google.com/spreadsheets/d/example_complaint_log',
      details: 'Matriks penanganan kejadian dan komplain pasien.'
    }
  ];

  function loadState(key, fallback) {
    const s = localStorage.getItem(key);
    if (!s) return fallback;
    try { return JSON.parse(s); } catch(e) { return fallback; }
  }

  function getActiveSettings() {
    const settings = loadState('wmcenter_published_settings_v5', loadState('wmcenter_draft_settings_v5', defaultSettings));
    if (!settings.statusBadge || settings.statusBadge.includes('08:00 - 21:00') || settings.statusBadge.includes('Active Operational Hours')) {
      settings.statusBadge = defaultSettings.statusBadge;
    }
    if (!settings.roles || !Array.isArray(settings.roles) || settings.roles.length === 0) {
      settings.roles = defaultRoles;
    }
    return settings;
  }

  function getActiveItems() {
    return loadState('wmcenter_published_items_v5', loadState('wmcenter_draft_items_v5', defaultItems));
  }

  // Helper to extract modules assigned to an item
  function getItemModules(item) {
    if (Array.isArray(item.modules) && item.modules.length > 0) {
      return item.modules;
    }
    return [item.module || 'sop'];
  }

  // Helper to extract categories assigned to an item
  function getItemCategories(item) {
    if (Array.isArray(item.categories) && item.categories.length > 0) {
      return item.categories;
    }
    return [item.category || 'fo'];
  }

  // Load State
  let appSettings = getActiveSettings();
  let itemList = getActiveItems();

  let currentModule = 'sop';
  let currentRole = 'all';
  let currentSubCategory = 'all';
  let searchQuery = '';

  // Badge Color Map
  const roleBadgeColors = ['badge-fo', 'badge-physio', 'badge-doctor', 'badge-management', 'badge-emerald', 'badge-rose', 'badge-cyan', 'badge-indigo', 'badge-amber', 'badge-orange'];
  function getRoleBadgeClass(roleId) {
    const idx = appSettings.roles.findIndex(r => r.id === roleId);
    if (idx !== -1) {
      return roleBadgeColors[idx % roleBadgeColors.length];
    }
    return 'badge-fo';
  }

  function getRoleName(roleId) {
    const r = appSettings.roles.find(x => x.id === roleId);
    return r ? r.name : (roleId === 'all' ? 'Semua Tim' : roleId);
  }

  // DOM Elements
  const brandLogoImg = document.getElementById('brandLogoImg');
  const faviconImg = document.getElementById('faviconImg');
  const brandTitleText = document.getElementById('brandTitleText');
  const brandSubtitleText = document.getElementById('brandSubtitleText');
  const branchSelect = document.getElementById('branchSelect');
  const heroBgImg = document.getElementById('heroBgImg');
  const heroTitleText = document.getElementById('heroTitleText');
  const heroDescText = document.getElementById('heroDescText');
  const statusBadgeText = document.getElementById('statusBadgeText');
  const announcementTitleText = document.getElementById('announcementTitleText');
  const announcementDescText = document.getElementById('announcementDescText');
  const footerBrandText = document.getElementById('footerBrandText');
  const sectionTitleHeading = document.getElementById('sectionTitleHeading');

  const rolePillsContainer = document.getElementById('rolePillsContainer');
  const categoryTabsContainer = document.getElementById('categoryTabsContainer');
  const contentGrid = document.getElementById('contentGrid');
  const searchInput = document.getElementById('searchInput');

  const sopModalOverlay = document.getElementById('sopModalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');

  function getAppModules() {
    if (Array.isArray(appSettings.modules) && appSettings.modules.length > 0) {
      return appSettings.modules;
    }
    return [
      { id: 'sop', icon: 'ðŸ“„', name: appSettings.moduleTab1 || 'General Ops & SOP' },
      { id: 'dailytask', icon: 'ðŸ“…', name: appSettings.moduleTab2 || 'Modul Training' },
      { id: 'quicklink', icon: 'âš¡', name: appSettings.moduleTab3 || 'IOC' }
    ];
  }

  function renderModuleTabs() {
    const container = document.getElementById('moduleTabsContainer');
    if (!container) return;
    const modules = getAppModules();

    if (!modules.some(m => m.id === currentModule)) {
      currentModule = modules[0].id;
    }

    container.innerHTML = modules.map(m => `
      <button class=\"module-tab-btn ${currentModule === m.id ? 'active' : ''}\" data-module=\"${m.id}\">
        <span>${m.icon || 'ðŸ“„'}</span> <span>${m.name}</span>
      </button>
    `).join('');

    container.querySelectorAll('.module-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentModule = btn.getAttribute('data-module');
        renderModuleTabs();
        renderContent();
      });
    });
  }

  // Apply Settings UI
  function applySettingsUI() {
    if (brandTitleText) brandTitleText.textContent = appSettings.brandTitle;
    if (brandSubtitleText) brandSubtitleText.textContent = appSettings.brandSubtitle;
    if (footerBrandText) footerBrandText.textContent = `${appSettings.brandTitle} Operational Portal`;
    document.title = `Panduan ${appSettings.brandTitle} Ops | Portal SOP & Daily Tasks`;

    if (brandLogoImg) brandLogoImg.src = appSettings.logoUrl;
    if (faviconImg) faviconImg.href = appSettings.logoUrl;
    if (heroBgImg) heroBgImg.src = appSettings.bannerUrl;

    if (heroTitleText) heroTitleText.textContent = appSettings.heroTitle;
    if (heroDescText) heroDescText.textContent = appSettings.heroDesc;
    if (statusBadgeText) statusBadgeText.textContent = appSettings.statusBadge;

    if (announcementTitleText) announcementTitleText.textContent = appSettings.announcementTitle;
    if (announcementDescText) announcementDescText.textContent = appSettings.announcementDesc;

    if (branchSelect) branchSelect.innerHTML = appSettings.branches.map(b => `<option value=\"${b}\">${b}</option>`).join('');

    renderModuleTabs();
    renderRolePills();
    renderCategoryTabs();
  }

  // Render Top Navbar Role Pills
  function renderRolePills() {
    if (!rolePillsContainer) return;
    let html = `<button class=\"role-pill ${currentRole === 'all' ? 'active' : ''}\" data-role=\"all\">Semua Tim</button>`;
    appSettings.roles.forEach(r => {
      html += `<button class=\"role-pill ${currentRole === r.id ? 'active' : ''}\" data-role=\"${r.id}\">${r.name}</button>`;
    });
    rolePillsContainer.innerHTML = html;

    rolePillsContainer.querySelectorAll('.role-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        currentRole = pill.getAttribute('data-role');
        renderRolePills();
        renderCategoryTabs();
        renderContent();
        showToast(`ðŸŽ¯ Filter Peran: ${pill.textContent}`);
      });
    });
  }

  // Render Sub-Category Filter Tabs
  function renderCategoryTabs() {
    if (!categoryTabsContainer) return;

    const currentModuleItems = itemList.filter(i => getItemModules(i).includes(currentModule));
    const activeRoleItems = currentModuleItems.filter(i => currentRole === 'all' || getItemCategories(i).includes(currentRole));
    const totalCount = activeRoleItems.length;

    let html = `<button class=\"tab-btn ${currentSubCategory === 'all' ? 'active' : ''}\" data-category=\"all\">Semua Dokumen (${totalCount})</button>`;

    appSettings.roles.forEach(r => {
      const roleCount = activeRoleItems.filter(i => getItemCategories(i).includes(r.id)).length;
      html += `<button class=\"tab-btn ${currentSubCategory === r.id ? 'active' : ''}\" data-category=\"${r.id}\">${r.name} (${roleCount})</button>`;
    });

    categoryTabsContainer.innerHTML = html;

    categoryTabsContainer.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentSubCategory = btn.getAttribute('data-category');
        renderCategoryTabs();
        renderContent();
      });
    });
  }

  function renderLatestInfoSection() {
    const section = document.getElementById('latestInfoSection');
    const container = document.getElementById('latestInfoGrid');
    if (!container || !section) return;

    const featuredItems = itemList.filter(i => i.isFeatured === true);

    if (featuredItems.length === 0) {
      section.style.display = 'none';
      return;
    }

    section.style.display = 'block';
    container.innerHTML = featuredItems.map(item => {
      const cats = getItemCategories(item);
      const badgesHtml = cats.map(catId => {
        const badgeClass = getRoleBadgeClass(catId);
        const badgeText = getRoleName(catId);
        return `<span class=\"card-badge ${badgeClass}\">${badgeText}</span>`;
      }).join('');

      const hasDriveUrl = item.driveUrl && item.driveUrl.length > 5;

      return `
        <div class=\"latest-info-card\">
          <div style=\"display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; gap: 0.5rem;\">
            <span class=\"card-code\" style=\"background: #FEF3C7; color: #D97706; border-color: #FCD34D;\">ðŸ”¥ ${item.code}</span>
            <div class=\"card-badges-wrapper\">${badgesHtml}</div>
          </div>
          <h3 class=\"card-title\" style=\"font-size: 1.025rem; margin-bottom: 0.4rem; font-weight:700;\">${item.title}</h3>
          <p class=\"card-summary\" style=\"font-size: 0.85rem; color: #475569; margin-bottom: 0.85rem;\">${item.summary}</p>
          <div style=\"display: flex; gap: 0.5rem; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 0.5rem; border-top: 1px dashed #FDE68A;\">
            ${hasDriveUrl ? `
              <a href=\"${item.driveUrl}\" target=\"_blank\" class=\"card-link\" style=\"font-size: 0.825rem; font-weight: 700; color: #D97706; text-decoration:none;\">
                ðŸ”— Buka Link âž”
              </a>
            ` : `
              <button class=\"card-link btn-read-sop\" data-id=\"${item.id}\" style=\"font-size: 0.825rem; font-weight: 700; color: #D97706; background: none; border: none; cursor: pointer; padding:0;\">
                ðŸ“– Detail âž”
              </button>
            `}
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.btn-read-sop').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openSopModal(id);
      });
    });
  }

  function openSopModal(id) {
    const item = itemList.find(i => i.id === id);
    if (!item) return;
    modalTitle.textContent = `[${item.code}] ${item.title}`;
    modalBody.innerHTML = item.details || `<p>${item.summary}</p>`;
    sopModalOverlay.classList.add('active');
  }

  // Render Grid Content Cards
  function renderContent() {
    renderCategoryTabs();
    renderLatestInfoSection();

    // Module Title Text
    if (sectionTitleHeading) {
      if (currentModule === 'sop') {
        sectionTitleHeading.textContent = `ðŸ“„ Daftar ${appSettings.moduleTab1 || 'SOP & Product Knowledge'} ${appSettings.brandTitle}`;
      } else if (currentModule === 'dailytask') {
        sectionTitleHeading.textContent = `ðŸ“… Link ${appSettings.moduleTab2 || 'Spreadsheet Daily Tasks & Jadwal Cabang'}`;
      } else {
        sectionTitleHeading.textContent = `âš¡ ${appSettings.moduleTab3 || 'Akses Cepat System & Drive Tools'}`;
      }
    }

    const filtered = itemList.filter(item => {
      const cats = getItemCategories(item);
      const mods = getItemModules(item);
      const matchModule = mods.includes(currentModule);
      const matchRole = currentRole === 'all' || cats.includes(currentRole);
      const matchSubCat = currentSubCategory === 'all' || cats.includes(currentSubCategory);
      const matchQuery = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery) ||
        item.code.toLowerCase().includes(searchQuery) ||
        item.summary.toLowerCase().includes(searchQuery);

      return matchModule && matchRole && matchSubCat && matchQuery;
    });

    if (filtered.length === 0) {
      contentGrid.innerHTML = `
        <div style=\"grid-column: 1/-1; text-align: center; padding: 3rem; background: white; border-radius: 16px; border: 1px solid #E2E8F0;\">
          <div style=\"font-size: 2.5rem; margin-bottom: 0.5rem;\">ðŸ”</div>
          <h3 style=\"margin-bottom: 0.5rem;\">Tidak Ada Dokumen / Link Ditemukan</h3>
          <p style=\"color: #64748B; font-size: 0.9rem;\">Coba ganti filter peran staf atau ubah kata kunci pencarian.</p>
        </div>
      `;
      return;
    }

    contentGrid.innerHTML = filtered.map(item => {
      const cats = getItemCategories(item);
      const badgesHtml = cats.map(catId => {
        const badgeClass = getRoleBadgeClass(catId);
        const badgeText = getRoleName(catId);
        return `<span class=\"card-badge ${badgeClass}\">${badgeText}</span>`;
      }).join('');

      const hasDriveUrl = item.driveUrl && item.driveUrl.length > 5;
      const driveBtnText = hasDriveUrl ? 'ðŸ”— Buka di Google Drive / Spreadsheet âž”' : 'ðŸ“– Baca Detail SOP âž”';

      return `
        <div class=\"item-card\">
          <div>
            <div class=\"card-top\">
              <div class=\"card-badges-wrapper\">
                ${badgesHtml}
              </div>
              <span class=\"card-type-tag\">${item.code || 'DOC'}</span>
            </div>
            <h3 class=\"card-title\">${item.title}</h3>
            <p class=\"card-summary\">${item.summary}</p>
          </div>
          <div>
            <button class=\"btn-open-link btn-open-item\" data-id=\"${item.id}\">
              ${driveBtnText}
            </button>
          </div>
        </div>
      `;
    }).join('');

    document.querySelectorAll('.btn-open-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const item = itemList.find(i => i.id === id);
        if (!item) return;

        if (item.driveUrl && item.driveUrl.length > 5) {
          window.open(item.driveUrl, '_blank');
          showToast(`ðŸ“Š Membuka Google Drive / Spreadsheet: ${item.title}`);
        } else {
          openSopModal(id);
        }
      });
    });
  }

  if (modalClose) modalClose.addEventListener('click', () => sopModalOverlay.classList.remove('active'));

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderContent();
    });
  }

  if (branchSelect) {
    branchSelect.addEventListener('change', (e) => {
      showToast(`ðŸ“ Menampilkan panduan untuk cabang: ${e.target.value}`);
    });
  }

  // Toast Function
  window.showToast = function(msg) {
    let toast = document.getElementById('appToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'appToast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  };

  function syncAndRefresh() {
    appSettings = getActiveSettings();
    itemList = getActiveItems();
    applySettingsUI();
    renderContent();
  }

  // Initial Load
  syncAndRefresh();

  // Real-time synchronization listeners
  window.addEventListener('storage', () => {
    syncAndRefresh();
    showToast('ðŸ”„ Tampilan otomatis diperbarui!');
  });

  window.addEventListener('focus', () => {
    syncAndRefresh();
  });

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      syncAndRefresh();
    }
  });
});