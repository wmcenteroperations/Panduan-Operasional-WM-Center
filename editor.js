// WM Center Studio Editor Script (Internal Admin Edit Mode)
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

  // Unified save that writes to BOTH draft and published keys
  function persistSettings(data) {
    localStorage.setItem('wmcenter_draft_settings_v5', JSON.stringify(data));
    localStorage.setItem('wmcenter_published_settings_v5', JSON.stringify(data));
  }

  function persistItems(data) {
    localStorage.setItem('wmcenter_draft_items_v5', JSON.stringify(data));
    localStorage.setItem('wmcenter_published_items_v5', JSON.stringify(data));
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

  // Draft State (loads published if available, then draft, then default)
  let appSettings = loadState('wmcenter_published_settings_v5', loadState('wmcenter_draft_settings_v5', defaultSettings));
  let itemList = loadState('wmcenter_published_items_v5', loadState('wmcenter_draft_items_v5', defaultItems));

  // Auto-migrate roles if missing
  if (!appSettings.roles || !Array.isArray(appSettings.roles) || appSettings.roles.length === 0) {
    appSettings.roles = defaultRoles;
    persistSettings(appSettings);
  }

  // Auto-migrate modules if missing
  if (!appSettings.modules || !Array.isArray(appSettings.modules) || appSettings.modules.length === 0) {
    appSettings.modules = defaultModules;
    persistSettings(appSettings);
  }

  // Auto-migrate statusBadge if it's the old default
  if (!appSettings.statusBadge || appSettings.statusBadge.includes('08:00 - 21:00') || appSettings.statusBadge.includes('Active Operational Hours')) {
    appSettings.statusBadge = 'Jam Operasional: Minggu â€“ Senin (08.00 â€“ 17.00) â€¢ Selasa â€“ Sabtu (08.00 â€“ 21.00)';
    persistSettings(appSettings);
  }

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
  const btnPublish = document.getElementById('btnPublish');
  const btnOpenSettings = document.getElementById('btnOpenSettings');
  const btnEditNavbar = document.getElementById('btnEditNavbar');
  const btnEditHero = document.getElementById('btnEditHero');
  const btnManageRolesNav = document.getElementById('btnManageRolesNav');
  const btnOpenRoleManager = document.getElementById('btnOpenRoleManager');

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

  const btnAddItem = document.getElementById('btnAddItem');
  const btnResetData = document.getElementById('btnResetData');

  // Modals
  const sopModalOverlay = document.getElementById('sopModalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');

  const itemFormModalOverlay = document.getElementById('itemFormModalOverlay');
  const formModalTitle = document.getElementById('formModalTitle');
  const formModalClose = document.getElementById('formModalClose');
  const btnCancelForm = document.getElementById('btnCancelForm');
  const itemForm = document.getElementById('itemForm');
  const btnSaveItemForm = document.getElementById('btnSaveItemForm');

  const formItemId = document.getElementById('formItemId');
  const formItemIsFeatured = document.getElementById('formItemIsFeatured');
  const formItemModulesContainer = document.getElementById('formItemModulesContainer');
  const btnToggleAllModules = document.getElementById('btnToggleAllModules');
  const formItemCategoriesContainer = document.getElementById('formItemCategoriesContainer');
  const btnToggleAllCategories = document.getElementById('btnToggleAllCategories');
  const formItemCode = document.getElementById('formItemCode');
  const formItemTitle = document.getElementById('formItemTitle');
  const formItemDriveUrl = document.getElementById('formItemDriveUrl');
  const formItemSummary = document.getElementById('formItemSummary');
  const formItemDetails = document.getElementById('formItemDetails');

  const adminSettingsModalOverlay = document.getElementById('adminSettingsModalOverlay');
  const settingsModalClose = document.getElementById('settingsModalClose');
  const btnCancelSettings = document.getElementById('btnCancelSettings');
  const settingsForm = document.getElementById('settingsForm');
  const btnSaveSettingsForm = document.getElementById('btnSaveSettingsForm');

  // Role Manager Modal Elements
  const roleManagerModalOverlay = document.getElementById('roleManagerModalOverlay');
  const roleManagerModalClose = document.getElementById('roleManagerModalClose');
  const btnCloseRoleManager = document.getElementById('btnCloseRoleManager');
  const roleManagerListContainer = document.getElementById('roleManagerListContainer');
  const newRoleNameInput = document.getElementById('newRoleNameInput');
  const btnAddNewRole = document.getElementById('btnAddNewRole');

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

  // Apply Settings UI
  function applySettingsUI() {
    if (brandTitleText) brandTitleText.textContent = appSettings.brandTitle;
    if (brandSubtitleText) brandSubtitleText.textContent = appSettings.brandSubtitle;
    if (footerBrandText) footerBrandText.textContent = `${appSettings.brandTitle} Operational Portal`;

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

  // Render Module Tabs with Drag & Drop Reordering
  function renderModuleTabs() {
    const container = document.getElementById('moduleTabsContainer');
    if (!container) return;
    const modules = getAppModules();

    if (!modules.some(m => m.id === currentModule)) {
      currentModule = modules[0].id;
    }

    let html = modules.map((m, idx) => `
      <button class=\"module-tab-btn ${currentModule === m.id ? 'active' : ''}\" data-module=\"${m.id}\" data-index=\"${idx}\" draggable=\"true\" title=\"Tahan &amp; Geser (Drag) untuk mengubah urutan modul\" style=\"position: relative;\">
        <span>${m.icon || 'ðŸ“„'}</span> <span>${m.name}</span>
        <span class=\"btn-inline-edit btn-edit-moduletab\" data-id=\"${m.id}\" title=\"Edit Modul ${m.name}\" style=\"top: 4px; right: 6px; width: 26px; height: 26px; font-size: 0.7rem;\">âœï¸</span>
      </button>
    `).join('');

    html += `
      <button id=\"btnAddModuleTab\" class=\"btn-add-module-tab\" title=\"Tambah Modul Baru\">
        <span>âž•</span> <span>Tambah Modul</span>
      </button>
    `;

    container.innerHTML = html;

    // Module Tab Click Handlers
    container.querySelectorAll('.module-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (e.target.closest('.btn-edit-moduletab')) return;
        currentModule = btn.getAttribute('data-module');
        renderModuleTabs();
        renderContent();
      });
    });

    // Drag and Drop Reorder Handlers
    let draggedIdx = null;
    container.querySelectorAll('.module-tab-btn').forEach(btn => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);

      btn.addEventListener('dragstart', (e) => {
        draggedIdx = idx;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', idx);
        btn.classList.add('dragging');
      });

      btn.addEventListener('dragend', () => {
        btn.classList.remove('dragging');
        container.querySelectorAll('.module-tab-btn').forEach(b => b.classList.remove('drag-over'));
      });

      btn.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        btn.classList.add('drag-over');
      });

      btn.addEventListener('dragleave', () => {
        btn.classList.remove('drag-over');
      });

      btn.addEventListener('drop', (e) => {
        e.preventDefault();
        btn.classList.remove('drag-over');
        if (draggedIdx !== null && draggedIdx !== idx) {
          const modulesList = getAppModules();
          const [movedItem] = modulesList.splice(draggedIdx, 1);
          modulesList.splice(idx, 0, movedItem);

          appSettings.modules = modulesList;
          persistSettings(appSettings);
          renderModuleTabs();
          renderContent();
          showToast(`â†”ï¸ Urutan Modul \"${movedItem.name}\" berhasil diubah!`);
        }
      });
    });

    // Edit Button Handlers
    container.querySelectorAll('.btn-edit-moduletab').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const modId = btn.getAttribute('data-id');
        openModuleManagerModal(modId);
      });
    });

    const btnAddModuleTab = document.getElementById('btnAddModuleTab');
    if (btnAddModuleTab) {
      btnAddModuleTab.addEventListener('click', () => {
        openModuleManagerModal();
      });
    }
  }

  // Populate Item Form Module Checkboxes (Multi-Select)
  function populateItemFormModuleCheckboxes(selectedModules = []) {
    if (!formItemModulesContainer) return;
    const availableModules = getAppModules();

    formItemModulesContainer.innerHTML = availableModules.map(m => {
      const isChecked = selectedModules.includes(m.id);
      return `
        <label class=\"category-chip-checkbox ${isChecked ? 'checked' : ''}\">
          <input type=\"checkbox\" name=\"item_module_checkbox\" value=\"${m.id}\" ${isChecked ? 'checked' : ''} />
          <span>${m.icon || 'ðŸ“‘'} ${m.name}</span>
        </label>
      `;
    }).join('');

    formItemModulesContainer.querySelectorAll('input[type=\"checkbox\"]').forEach(cb => {
      cb.addEventListener('change', (e) => {
        const label = e.target.closest('.category-chip-checkbox');
        if (e.target.checked) {
          label.classList.add('checked');
        } else {
          label.classList.remove('checked');
        }
      });
    });
  }

  // Toggle All Modules Button Handler
  if (btnToggleAllModules) {
    btnToggleAllModules.addEventListener('click', () => {
      const cbs = formItemModulesContainer.querySelectorAll('input[type=\"checkbox\"]');
      const allChecked = Array.from(cbs).every(cb => cb.checked);
      cbs.forEach(cb => {
        cb.checked = !allChecked;
        const label = cb.closest('.category-chip-checkbox');
        if (cb.checked) label.classList.add('checked');
        else label.classList.remove('checked');
      });
    });
  }

  // Populate Item Form Category Checkboxes (Multi-Select)
  function populateItemFormCategoryCheckboxes(selectedCategories = []) {
    if (!formItemCategoriesContainer) return;

    formItemCategoriesContainer.innerHTML = appSettings.roles.map(r => {
      const isChecked = selectedCategories.includes(r.id);
      return `
        <label class=\"category-chip-checkbox ${isChecked ? 'checked' : ''}\">
          <input type=\"checkbox\" name=\"item_category_checkbox\" value=\"${r.id}\" ${isChecked ? 'checked' : ''} />
          <span>ðŸ·ï¸ ${r.name}</span>
        </label>
      `;
    }).join('');

    formItemCategoriesContainer.querySelectorAll('input[type=\"checkbox\"]').forEach(cb => {
      cb.addEventListener('change', (e) => {
        const label = e.target.closest('.category-chip-checkbox');
        if (e.target.checked) {
          label.classList.add('checked');
        } else {
          label.classList.remove('checked');
        }
      });
    });
  }

  // Toggle All Categories Button Handler
  if (btnToggleAllCategories) {
    btnToggleAllCategories.addEventListener('click', () => {
      const cbs = formItemCategoriesContainer.querySelectorAll('input[type=\"checkbox\"]');
      const allChecked = Array.from(cbs).every(cb => cb.checked);
      cbs.forEach(cb => {
        cb.checked = !allChecked;
        const label = cb.closest('.category-chip-checkbox');
        if (cb.checked) label.classList.add('checked');
        else label.classList.remove('checked');
      });
    });
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
      html += `
        <div class=\"category-tab-wrapper\">
          <button class=\"tab-btn ${currentSubCategory === r.id ? 'active' : ''}\" data-category=\"${r.id}\">${r.name} (${roleCount})</button>
        </div>
      `;
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

  // Open Role Manager Modal
  function openRoleManagerModal(highlightRoleId = null) {
    renderRoleManagerList(highlightRoleId);
    roleManagerModalOverlay.classList.add('active');
  }

  function renderRoleManagerList(highlightRoleId = null) {
    if (!roleManagerListContainer) return;

    if (appSettings.roles.length === 0) {
      roleManagerListContainer.innerHTML = `<p style=\"color:#64748B;\">Belum ada peran tim. Tambahkan kategori baru di bawah.</p>`;
      return;
    }

    roleManagerListContainer.innerHTML = appSettings.roles.map(r => {
      const isHighlighted = r.id === highlightRoleId;
      return `
        <div class=\"role-list-item\" style=\"${isHighlighted ? 'border-color: #0D9488; background: #CCFBF1;' : ''}\">
          <span style=\"font-size: 1.15rem;\">ðŸ·ï¸</span>
          <input type=\"text\" id=\"role_input_${r.id}\" value=\"${r.name}\" placeholder=\"Nama Kategori...\" />
          <button type=\"button\" class=\"btn-role-action btn-role-save\" data-id=\"${r.id}\">ðŸ’¾ Simpan</button>\n          <button type=\"button\" class=\"btn-role-action btn-role-delete\" data-id=\"${r.id}\">ðŸ—‘ï¸ Hapus</button>
        </div>
      `;
    }).join('');

    roleManagerListContainer.querySelectorAll('.btn-role-save').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const inputEl = document.getElementById(`role_input_${id}`);
        if (!inputEl) return;
        const newName = inputEl.value.trim();
        if (!newName) {
          alert('Nama kategori tidak boleh kosong!');
          return;
        }
        const roleObj = appSettings.roles.find(r => r.id === id);
        if (roleObj) {
          roleObj.name = newName;
          persistSettings(appSettings);
          applySettingsUI();
          renderContent();
          showToast(`âœ… Nama kategori diubah menjadi: \"${newName}\"`);
        }
      });
    });

    roleManagerListContainer.querySelectorAll('.btn-role-delete').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        deleteRole(id);
      });
    });
  }

  function deleteRole(roleId) {
    const roleObj = appSettings.roles.find(r => r.id === roleId);
    if (!roleObj) return;

    if (appSettings.roles.length <= 1) {
      alert('Minimal harus ada 1 kategori tim di klinik.');
      return;
    }

    if (confirm(`Apakah Anda yakin ingin menghapus kategori tim \"${roleObj.name}\"?\\nSemua item di bawah kategori ini akan dialihkan ke kategori tim lain yang aktif.`)) {
      appSettings.roles = appSettings.roles.filter(r => r.id !== roleId);
      const fallbackRoleId = appSettings.roles[0].id;

      itemList.forEach(item => {
        const cats = getItemCategories(item);
        if (cats.includes(roleId)) {
          const updatedCats = cats.filter(c => c !== roleId);
          item.categories = updatedCats.length > 0 ? updatedCats : [fallbackRoleId];
          item.category = item.categories[0];
        }
      });

      if (currentRole === roleId) currentRole = 'all';
      if (currentSubCategory === roleId) currentSubCategory = 'all';

      persistSettings(appSettings);
      persistItems(itemList);
      applySettingsUI();
      renderContent();
      renderRoleManagerList();
      showToast(`ðŸ—‘ï¸ Kategori \"${roleObj.name}\" berhasil dihapus.`);
    }
  }

  // Add New Role Handler
  if (btnAddNewRole) {
    btnAddNewRole.addEventListener('click', () => {
      const name = newRoleNameInput.value.trim();
      if (!name) {
        alert('Silakan masukkan nama kategori/peran tim baru!');
        return;
      }

      const newId = 'role_' + Date.now().toString(36);
      appSettings.roles.push({ id: newId, name: name });
      newRoleNameInput.value = '';

      persistSettings(appSettings);
      applySettingsUI();
      renderContent();
      renderRoleManagerList(newId);
      showToast(`âœ¨ Kategori Tim Baru \"${name}\" berhasil ditambahkan!`);
    });
  }

  if (roleManagerModalClose) roleManagerModalClose.addEventListener('click', () => roleManagerModalOverlay.classList.remove('active'));
  if (btnCloseRoleManager) btnCloseRoleManager.addEventListener('click', () => roleManagerModalOverlay.classList.remove('active'));
  if (btnOpenRoleManager) btnOpenRoleManager.addEventListener('click', () => openRoleManagerModal());
  if (btnManageRolesNav) btnManageRolesNav.addEventListener('click', () => openRoleManagerModal());

  // Module Manager Modal Logic
  const moduleManagerModalOverlay = document.getElementById('moduleManagerModalOverlay');
  const moduleManagerModalClose = document.getElementById('moduleManagerModalClose');
  const btnCloseModuleManager = document.getElementById('btnCloseModuleManager');
  const moduleManagerListContainer = document.getElementById('moduleManagerListContainer');
  const newModuleIconInput = document.getElementById('newModuleIconInput');
  const newModuleNameInput = document.getElementById('newModuleNameInput');
  const btnAddNewModule = document.getElementById('btnAddNewModule');

  // Quick Emoji Pickers
  document.querySelectorAll('.btn-quick-emoji').forEach(btn => {
    btn.addEventListener('click', () => {
      const emoji = btn.getAttribute('data-emoji');
      if (newModuleIconInput) newModuleIconInput.value = emoji;
    });
  });

  function openModuleManagerModal(highlightModId = null) {
    renderModuleManagerList(highlightModId);
    if (moduleManagerModalOverlay) moduleManagerModalOverlay.classList.add('active');
  }

  function renderModuleManagerList(highlightModId = null) {
    if (!moduleManagerListContainer) return;
    const modules = getAppModules();

    moduleManagerListContainer.innerHTML = modules.map((m, idx) => `
      <div style=\"display: flex; align-items: center; gap: 0.4rem; background: ${m.id === highlightModId ? '#FEF9C3' : '#F8FAFC'}; border: 1px solid ${m.id === highlightModId ? '#FDE047' : '#E2E8F0'}; padding: 0.65rem 0.85rem; border-radius: 10px;\">
        <button type=\"button\" class=\"btn-mod-move-up\" data-index=\"${idx}\" ${idx === 0 ? 'disabled style=\"opacity:0.3; cursor:not-allowed;\"' : ''} style=\"background:#E2E8F0; border:none; padding:0.4rem 0.5rem; border-radius:6px; font-weight:700; cursor:pointer;\" title=\"Geser Ke Atas\">â¬†ï¸</button>
        <button type=\"button\" class=\"btn-mod-move-down\" data-index=\"${idx}\" ${idx === modules.length - 1 ? 'disabled style=\"opacity:0.3; cursor:not-allowed;\"' : ''} style=\"background:#E2E8F0; border:none; padding:0.4rem 0.5rem; border-radius:6px; font-weight:700; cursor:pointer;\" title=\"Geser Ke Bawah\">â¬‡ï¸</button>
        <input type=\"text\" class=\"form-input mod-icon-input\" data-id=\"${m.id}\" value=\"${m.icon || 'ðŸ“„'}\" style=\"width: 50px; text-align: center; font-size: 1.1rem; padding: 0.4rem;\" />
        <input type=\"text\" class=\"form-input mod-name-input\" data-id=\"${m.id}\" value=\"${m.name}\" style=\"flex: 1; font-weight: 600; padding: 0.4rem 0.6rem;\" />
        <button type=\"button\" class=\"btn-role-save btn-mod-save\" data-id=\"${m.id}\" style=\"background: #0D9488; color: white; border: none; padding: 0.45rem 0.75rem; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 0.8rem;\">
          ðŸ’¾ Simpan
        </button>
        ${modules.length > 1 ? `
          <button type=\"button\" class=\"btn-role-delete btn-mod-delete\" data-id=\"${m.id}\" style=\"background: #FEE2E2; color: #DC2626; border: none; padding: 0.45rem 0.65rem; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 0.8rem;\">
            ðŸ—‘ï¸ Hapus
          </button>
        ` : ''}
      </div>
    `).join('');

    // Move Up
    moduleManagerListContainer.querySelectorAll('.btn-mod-move-up').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        if (idx > 0) {
          const modulesList = getAppModules();
          const temp = modulesList[idx];
          modulesList[idx] = modulesList[idx - 1];
          modulesList[idx - 1] = temp;
          appSettings.modules = modulesList;
          persistSettings(appSettings);
          renderModuleTabs();
          renderModuleManagerList(temp.id);
          showToast(`â¬†ï¸ Modul \"${temp.name}\" digeser ke atas.`);
        }
      });
    });

    // Move Down
    moduleManagerListContainer.querySelectorAll('.btn-mod-move-down').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        const modulesList = getAppModules();
        if (idx < modulesList.length - 1) {
          const temp = modulesList[idx];
          modulesList[idx] = modulesList[idx + 1];
          modulesList[idx + 1] = temp;
          appSettings.modules = modulesList;
          persistSettings(appSettings);
          renderModuleTabs();
          renderModuleManagerList(temp.id);
          showToast(`â¬‡ï¸ Modul \"${temp.name}\" digeser ke bawah.`);
        }
      });
    });

    // Save Module
    moduleManagerListContainer.querySelectorAll('.btn-mod-save').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const iconInput = moduleManagerListContainer.querySelector(`.mod-icon-input[data-id=\"${id}\"]`);
        const nameInput = moduleManagerListContainer.querySelector(`.mod-name-input[data-id=\"${id}\"]`);
        
        const newIcon = iconInput ? iconInput.value.trim() || 'ðŸ“„' : 'ðŸ“„';
        const newName = nameInput ? nameInput.value.trim() || 'Modul' : 'Modul';

        const modulesList = getAppModules();
        const modObj = modulesList.find(m => m.id === id);
        if (modObj) {
          modObj.icon = newIcon;
          modObj.name = newName;
          appSettings.modules = modulesList;
          persistSettings(appSettings);
          renderModuleTabs();
          showToast(`âœ… Modul \"${newIcon} ${newName}\" berhasil diperbarui!`);
        }
      });
    });

    // Delete Module
    moduleManagerListContainer.querySelectorAll('.btn-mod-delete').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        deleteModule(id);
      });
    });
  }

  function deleteModule(modId) {
    let modulesList = getAppModules();
    const modObj = modulesList.find(m => m.id === modId);
    if (!modObj) return;

    if (modulesList.length <= 1) {
      alert('Minimal harus ada 1 modul navigasi utama.');
      return;
    }

    if (confirm(`Apakah Anda yakin ingin menghapus modul \"${modObj.icon || ''} ${modObj.name}\"?\\nItem yang hanya ada di modul ini akan dialihkan ke modul lain.`)) {
      modulesList = modulesList.filter(m => m.id !== modId);
      appSettings.modules = modulesList;
      const fallbackModId = modulesList[0].id;

      itemList.forEach(item => {
        const mods = getItemModules(item);
        if (mods.includes(modId)) {
          const updatedMods = mods.filter(m => m !== modId);
          item.modules = updatedMods.length > 0 ? updatedMods : [fallbackModId];
          item.module = item.modules[0];
        }
      });

      if (currentModule === modId) currentModule = fallbackModId;

      persistSettings(appSettings);
      persistItems(itemList);
      renderModuleTabs();
      renderContent();
      renderModuleManagerList();
      showToast(`ðŸ—‘ï¸ Modul \"${modObj.name}\" berhasil dihapus.`);
    }
  }

  if (btnAddNewModule) {
    btnAddNewModule.addEventListener('click', () => {
      const icon = newModuleIconInput ? newModuleIconInput.value.trim() || 'ðŸ“„' : 'ðŸ“„';
      const name = newModuleNameInput ? newModuleNameInput.value.trim() : '';

      if (!name) {
        alert('Silakan masukkan nama modul baru!');
        return;
      }

      const modulesList = getAppModules();
      const newId = 'mod_' + Date.now().toString(36);
      modulesList.push({ id: newId, icon, name });
      appSettings.modules = modulesList;

      if (newModuleNameInput) newModuleNameInput.value = '';

      persistSettings(appSettings);
      renderModuleTabs();
      renderContent();
      renderModuleManagerList(newId);
      showToast(`âœ¨ Modul Baru \"${icon} ${name}\" berhasil ditambahkan!`);
    });
  }

  if (moduleManagerModalClose) moduleManagerModalClose.addEventListener('click', () => moduleManagerModalOverlay.classList.remove('active'));
  if (btnCloseModuleManager) btnCloseModuleManager.addEventListener('click', () => moduleManagerModalOverlay.classList.remove('active'));

  // Publish Draft Data explicitly
  if (btnPublish) {
    btnPublish.addEventListener('click', () => {
      persistSettings(appSettings);
      persistItems(itemList);
      showToast('ðŸš€ BERHASIL! Seluruh perubahan tersinkronisasi ke index.html!');
    });
  }

      function renderLatestInfoSection() {
    const section = document.getElementById('latestInfoSection');
    const container = document.getElementById('latestInfoGrid');
    if (!container || !section) return;

    const featuredItems = itemList.filter(i => i.isFeatured === true);

    if (featuredItems.length === 0) {
      section.style.display = 'block';
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 1.5rem; background: #F8FAFC; border: 1.5px dashed #CBD5E1; border-radius: 12px; color: #64748B;">
          <div style="font-size: 1.5rem; margin-bottom: 0.35rem;">\uD83D\uDCCD</div>
          <strong style="font-size: 0.95rem; display: block; margin-bottom: 0.25rem; color: #334155;">Belum Ada Info Terbaru Yang Dipin</strong>
          <span style="font-size: 0.825rem;">Klik \uD83D\uDCCC Pin pada kartu SOP/IOC di bawah atau centang saat edit item untuk menampilkannya di sini!</span>
        </div>
      `;
      return;
    }

    section.style.display = 'block';
    container.innerHTML = featuredItems.map(item => {
      const hasDriveUrl = item.driveUrl && item.driveUrl.length > 5;
      const summaryText = item.summary || 'Klik untuk membuka info terbaru.';

      let icon = '\uD83D\uDCCC';
      const titleUpper = (item.title || '').toUpperCase();
      if (titleUpper.includes('INCOME') || titleUpper.includes('REKAP') || titleUpper.includes('SPREADSHEET')) icon = '\uD83D\uDCCA';
      else if (titleUpper.includes('WA') || titleUpper.includes('CHAT') || titleUpper.includes('KOMUNIKASI') || titleUpper.includes('WHATSAPP')) icon = '\uD83D\uDCAC';
      else if (titleUpper.includes('JADWAL') || titleUpper.includes('SHIFT') || titleUpper.includes('EVENT')) icon = '\uD83D\uDCC5';
      else if (titleUpper.includes('PROMO') || titleUpper.includes('VOUCHER') || titleUpper.includes('DISCOUNT') || titleUpper.includes('PRICELIST') || titleUpper.includes('KATALOG')) icon = '\uD83C\uDFF7\uFE0F';
      else if (titleUpper.includes('MEDAL') || titleUpper.includes('MONDAY')) icon = '\uD83C\uDFC5';
      else if (titleUpper.includes('UNIFORM') || titleUpper.includes('SERAGAM')) icon = '\uD83D\uDC54';
      else if (titleUpper.includes('CEKAT') || titleUpper.includes('AI')) icon = '\uD83E\uDD16';
      else if (titleUpper.includes('TUTOR') || titleUpper.includes('TRAINING') || titleUpper.includes('VIDEO')) icon = '\uD83C\uDF93';

      return `
        <div class="latest-info-card" tabindex="0">
          <div class="latest-info-card-top">
            <div class="latest-info-icon-badge">${icon}</div>
            <div style="display:flex; align-items:center; gap:0.4rem;">
              <span class="latest-info-pill">HIGHLIGHT</span>
              <button class="btn-unpin-featured" data-id="${item.id}" style="background: #FEE2E2; color: #DC2626; border: none; padding: 0.25rem 0.5rem; border-radius: 6px; font-size: 0.72rem; font-weight: 700; cursor: pointer;" title="Keluarkan dari Info Terbaru">
                \uD83D\uDCCD Unpin
              </button>
            </div>
          </div>
          <h3 class="latest-info-title">${item.title}</h3>
          <p class="latest-info-desc">${summaryText}</p>
          <div>
            ${hasDriveUrl ? `
              <a href="${item.driveUrl}" target="_blank" class="btn-latest-info">\uD83D\uDD17 Buka Dokumen \u2794</a>
            ` : `
              <button class="btn-latest-info btn-read-sop" data-id="${item.id}">\uD83D\uDCD6 Baca Detail \u2794</button>
            `}
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.btn-unpin-featured').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const item = itemList.find(i => i.id === id);
        if (item) {
          item.isFeatured = false;
          persistItems(itemList);
          renderLatestInfoSection();
          renderContent();
          showToast(`\uD83D\uDCCC Item [${item.code}] dikeluarkan dari Info Terbaru.`);
        }
      });
    });

    container.querySelectorAll('.btn-read-sop').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const item = itemList.find(i => i.id === id);
        if (item) {
          modalTitle.textContent = `[${item.code}] ${item.title}`;
          modalBody.innerHTML = item.details || `<p>${item.summary}</p>`;
          sopModalOverlay.classList.add('active');
        }
      });
    });
  });
  });
  }

  // Render Content
  function renderContent() {
    renderCategoryTabs();
    renderLatestInfoSection();

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
          <h3 style=\"margin-bottom: 0.5rem;\">Tidak Ada Dokumen Ditemukan</h3>
          <p style=\"color: #64748B; font-size: 0.9rem;\">Gunakan tombol \"Tambah Item / Link Drive Baru\" untuk menambahkan item baru ke modul ini.</p>
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
          <div style=\"position: absolute; top: 12px; right: 12px; display: flex; gap: 4px; align-items: center;\">
            <button class=\"btn-card-pin btn-toggle-pin ${item.isFeatured ? 'active' : ''}\" data-id=\"${item.id}\" title=\"${item.isFeatured ? 'Keluarkan dari Info Terbaru' : 'Tampilkan di Info Terbaru'}\">
              ${item.isFeatured ? 'ðŸ“Œ Pinned' : 'ðŸ“Œ Pin'}
            </button>
            <button class=\"btn-inline-edit btn-edit-item\" data-id=\"${item.id}\" title=\"Edit Item\" style=\"position: static;\">âœï¸</button>
            <button class=\"btn-inline-delete btn-delete-item\" data-id=\"${item.id}\" title=\"Hapus Item\" style=\"position: static;\">ðŸ—‘ï¸</button>
          </div>

          <div>
            <div class=\"card-top\" style=\"padding-right: 110px;\">
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

    contentGrid.querySelectorAll('.btn-toggle-pin').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const item = itemList.find(i => i.id === id);
        if (item) {
          item.isFeatured = !item.isFeatured;
          persistItems(itemList);
          renderLatestInfoSection();
          renderContent();
          if (item.isFeatured) {
            showToast(`ðŸ“Œ Item [${item.code}] ditambahkan ke Info Terbaru!`);
          } else {
            showToast(`ðŸ“Œ Item [${item.code}] dikeluarkan dari Info Terbaru.`);
          }
        }
      });
    });

    document.querySelectorAll('.btn-open-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const item = itemList.find(i => i.id === id);
        if (!item) return;

        if (item.driveUrl && item.driveUrl.length > 5) {
          window.open(item.driveUrl, '_blank');
          showToast(`ðŸ“Š Membuka Google Drive / Spreadsheet: ${item.title}`);
        } else {
          modalTitle.textContent = `[${item.code}] ${item.title}`;
          modalBody.innerHTML = item.details || `<p>${item.summary}</p>`;
          sopModalOverlay.classList.add('active');
        }
      });
    });

    document.querySelectorAll('.btn-edit-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openEditItemForm(id);
      });
    });

    document.querySelectorAll('.btn-delete-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        deleteItem(id);
      });
    });
  }

  if (modalClose) modalClose.addEventListener('click', () => sopModalOverlay.classList.remove('active'));

function openEditItemForm(id) {
    const item = itemList.find(i => i.id === id);
    if (!item) return;

    formModalTitle.textContent = `âœï¸ Edit Item: [${item.code}]`;
    formItemId.value = item.id;
    if (formItemIsFeatured) formItemIsFeatured.checked = !!item.isFeatured;
    
    const selectedMods = getItemModules(item);
    populateItemFormModuleCheckboxes(selectedMods);

    const selectedCats = getItemCategories(item);
    populateItemFormCategoryCheckboxes(selectedCats);

    formItemCode.value = item.code;
    formItemTitle.value = item.title;
    formItemDriveUrl.value = item.driveUrl || '';
    formItemSummary.value = item.summary;
    formItemDetails.value = item.details || '';

    itemFormModalOverlay.classList.add('active');
  }

  if (formModalClose) formModalClose.addEventListener('click', () => itemFormModalOverlay.classList.remove('active'));
  if (btnCancelForm) btnCancelForm.addEventListener('click', () => itemFormModalOverlay.classList.remove('active'));

  function handleSaveItem(e) {
    if (e) e.preventDefault();

    const id = formItemId.value.trim();
    const isFeatured = formItemIsFeatured ? formItemIsFeatured.checked : false;
    
    // Collect all checked module checkboxes
    const checkedModuleCbs = document.querySelectorAll('input[name="item_module_checkbox"]:checked');
    let selectedModules = Array.from(checkedModuleCbs).map(cb => cb.value);
    if (selectedModules.length === 0) {
      selectedModules = [currentModule || 'sop'];
    }
    const primaryModule = selectedModules[0];

    // Collect all checked category checkboxes
    const checkedCheckboxes = document.querySelectorAll('input[name="item_category_checkbox"]:checked');
    let selectedCategories = Array.from(checkedCheckboxes).map(cb => cb.value);
    
    if (selectedCategories.length === 0) {
      selectedCategories = [appSettings.roles[0]?.id || 'fo'];
    }

    const code = formItemCode.value.trim() || 'DOC';
    const title = formItemTitle.value.trim() || 'Item Baru';
    const driveUrl = formItemDriveUrl.value.trim();
    const summary = formItemSummary.value.trim() || 'Deskripsi panduan...';
    const details = formItemDetails.value.trim();

    if (id) {
      const idx = itemList.findIndex(i => i.id === id);
      if (idx !== -1) {
        itemList[idx] = { 
          id, 
          isFeatured,
          modules: selectedModules,
          module: primaryModule, 
          categories: selectedCategories, 
          category: selectedCategories[0], 
          code, 
          title, 
          driveUrl, 
          summary, 
          details 
        };
        showToast(`âœ… Item [${code}] berhasil disimpan!`);
      }
    } else {
      itemList.unshift({
        id: `item_${Date.now()}`,
        isFeatured,
        modules: selectedModules,
        module: primaryModule,
        categories: selectedCategories,
        category: selectedCategories[0],
        code,
        title,
        driveUrl,
        summary,
        details
      });
      showToast(`âœ¨ Item Baru [${code}] berhasil ditambahkan!`);
    }

    persistItems(itemList);
    renderLatestInfoSection();
    renderCategoryTabs();
    renderContent();
    itemFormModalOverlay.classList.remove('active');
  }

  if (btnSaveItemForm) {
    btnSaveItemForm.addEventListener('click', (e) => {
      e.preventDefault();
      handleSaveItem(e);
    });
  }

  if (itemForm) {
    itemForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleSaveItem(e);
    });
  }

  function deleteItem(id) {
    const item = itemList.find(i => i.id === id);
    if (!item) return;

    if (confirm(`Apakah Anda yakin ingin menghapus: [${item.code}] ${item.title}?`)) {
      itemList = itemList.filter(i => i.id !== id);
      persistItems(itemList);
      renderLatestInfoSection();
      renderCategoryTabs();
      renderContent();
      showToast(`ðŸ—‘ï¸ Item [${item.code}] dihapus.`);
    }
  }

  // Quick Pencil Triggers
  if (btnEditNavbar) btnEditNavbar.addEventListener('click', () => btnOpenSettings.click());
  if (btnEditHero) btnEditHero.addEventListener('click', () => btnOpenSettings.click());

  // Module Tab Edit Pencil Buttons
  const moduleTabModalOverlay = document.getElementById('moduleTabModalOverlay');
  const moduleTabModalClose = document.getElementById('moduleTabModalClose');
  const btnCancelModuleTab = document.getElementById('btnCancelModuleTab');
  const btnSaveModuleTab = document.getElementById('btnSaveModuleTab');
  const formModuleTabNum = document.getElementById('formModuleTabNum');
  const formModuleTabTitle = document.getElementById('formModuleTabTitle');

  if (moduleTabModalClose) moduleTabModalClose.addEventListener('click', () => moduleTabModalOverlay.classList.remove('active'));
  if (btnCancelModuleTab) btnCancelModuleTab.addEventListener('click', () => moduleTabModalOverlay.classList.remove('active'));

  function handleSaveModuleTab(e) {
    if (e) e.preventDefault();
    const tabNum = formModuleTabNum.value;
    const newTitle = formModuleTabTitle.value.trim();
    if (!newTitle) return;

    appSettings['moduleTab' + tabNum] = newTitle;
    persistSettings(appSettings);
    applySettingsUI();
    renderContent();
    moduleTabModalOverlay.classList.remove('active');
    showToast(`âœ… Nama Tab Modul ${tabNum} diubah menjadi: "${newTitle}"`);
  }

  if (btnSaveModuleTab) {
    btnSaveModuleTab.addEventListener('click', (e) => {
      e.preventDefault();
      handleSaveModuleTab(e);
    });
  }

  const moduleTabForm = document.getElementById('moduleTabForm');
  if (moduleTabForm) {
    moduleTabForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleSaveModuleTab(e);
    });
  }

  // Settings Modal Handlers
  if (btnOpenSettings) {
    btnOpenSettings.addEventListener('click', () => {
      document.getElementById('settingsBrandTitle').value = appSettings.brandTitle;
      document.getElementById('settingsBrandSubtitle').value = appSettings.brandSubtitle;
      document.getElementById('settingsBranches').value = appSettings.branches.join(', ');
      document.getElementById('settingsBannerUrl').value = appSettings.bannerUrl;
      document.getElementById('settingsLogoUrl').value = appSettings.logoUrl;
      document.getElementById('settingsHeroTitle').value = appSettings.heroTitle;
      document.getElementById('settingsHeroDesc').value = appSettings.heroDesc;
      if (document.getElementById('settingsStatusBadge')) {
        document.getElementById('settingsStatusBadge').value = appSettings.statusBadge || '';
      }
      document.getElementById('settingsAnnouncementTitle').value = appSettings.announcementTitle;
      document.getElementById('settingsAnnouncementDesc').value = appSettings.announcementDesc;

      adminSettingsModalOverlay.classList.add('active');
    });
  }

  if (settingsModalClose) settingsModalClose.addEventListener('click', () => adminSettingsModalOverlay.classList.remove('active'));
  if (btnCancelSettings) btnCancelSettings.addEventListener('click', () => adminSettingsModalOverlay.classList.remove('active'));

  function handleSaveSettings(e) {
    if (e) e.preventDefault();

    const brandTitleVal = document.getElementById('settingsBrandTitle').value.trim();
    const brandSubtitleVal = document.getElementById('settingsBrandSubtitle').value.trim();
    const branchesVal = document.getElementById('settingsBranches').value.split(',').map(b => b.trim()).filter(b => b.length > 0);
    const bannerUrlVal = document.getElementById('settingsBannerUrl').value.trim();
    const logoUrlVal = document.getElementById('settingsLogoUrl').value.trim();
    const heroTitleVal = document.getElementById('settingsHeroTitle').value.trim();
    const heroDescVal = document.getElementById('settingsHeroDesc').value.trim();
    const statusBadgeEl = document.getElementById('settingsStatusBadge');
    const statusBadgeVal = statusBadgeEl ? statusBadgeEl.value.trim() : '';
    const annTitleVal = document.getElementById('settingsAnnouncementTitle').value.trim();
    const annDescVal = document.getElementById('settingsAnnouncementDesc').value.trim();

    if (brandTitleVal) appSettings.brandTitle = brandTitleVal;
    if (brandSubtitleVal) appSettings.brandSubtitle = brandSubtitleVal;
    if (branchesVal.length > 0) appSettings.branches = branchesVal;
    if (bannerUrlVal) appSettings.bannerUrl = bannerUrlVal;
    if (logoUrlVal) appSettings.logoUrl = logoUrlVal;
    if (heroTitleVal) appSettings.heroTitle = heroTitleVal;
    if (heroDescVal) appSettings.heroDesc = heroDescVal;
    if (statusBadgeVal) appSettings.statusBadge = statusBadgeVal;
    if (annTitleVal) appSettings.announcementTitle = annTitleVal;
    if (annDescVal) appSettings.announcementDesc = annDescVal;

    persistSettings(appSettings);
    applySettingsUI();
    renderContent();
    adminSettingsModalOverlay.classList.remove('active');
    showToast('âš™ï¸ Pengaturan foto, nama brand, & lokasi cabang berhasil disimpan!');
  }

  if (btnSaveSettingsForm) {
    btnSaveSettingsForm.addEventListener('click', (e) => {
      e.preventDefault();
      handleSaveSettings(e);
    });
  }

  if (settingsForm) {
    settingsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleSaveSettings(e);
    });
  }

  // Reset Data
  if (btnResetData) {
    btnResetData.addEventListener('click', () => {
      if (confirm('Reset seluruh data SOP & Daily Tasks ke standar awal?')) {
        itemList = [...defaultItems];
        appSettings = { ...defaultSettings };

        persistItems(itemList);
        persistSettings(appSettings);

        applySettingsUI();
        renderLatestInfoSection();
        renderContent();
        showToast('ðŸ”„ Studio Editor dikembalikan ke data awal.');
      }
    });
  }

  // Note: Stale moduleTabBtns.forEach was intentionally removed in Step 538 to fix dynamic module switching.

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderContent();
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

  // Initial Load
  applySettingsUI();
  renderContent();
});