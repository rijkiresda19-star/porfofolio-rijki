// ===== HAMBURGER MENU TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// ===== DARK MODE FUNCTIONALITY =====
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// ===== LANGUAGE SWITCHING (i18n) =====
const langToggle = document.getElementById('lang-toggle');
let currentLang = 'id';

const translations = {
  id: {
    name: "RIJKI RESDA NAJMUDIN",
    subtitle: "Fresh Graduate & Data Science Enthusiast",
    aboutTitle: "Tentang Saya",
    aboutNameTitle: "RIJKI RESDA NAJMUDIN",
    aboutPosition: "Teknisi ATM & Data Science Enthusiast",
    aboutContact: "📱 085839946300 | 📧 rijkiresda19@gmail.com",
    aboutSummaryTitle: "Ringkasan Profesional",
    aboutSummaryText: "Seorang yang bertanggung jawab atas pemeliharaan dan perbaikan ATM secara berkala untuk memastikan kepuasan pelanggan dan kelancaran transaksi keuangan. Bekerja sama dengan tim teknisi ATM lainnya untuk menyelesaikan masalah teknis dengan cepat dan efisien, serta memastikan kualitas layanan yang konsisten.",
    aboutEducationTitle: "Pendidikan",
    aboutEducationDetail: "Ilmu Pengetahuan Sosial – Nilai Rata-rata 8",
    aboutUniversityDetail: "Program Studi Sistem Informasi (Mulai September 2025)",
    aboutExperienceTitle: "Pengalaman Kerja",
    aboutExpKoordinator: "Koordinator CPC (Juni 2019 – Desember 2020)",
    aboutExpCPC1: "Memantau kegiatan di CPC, termasuk pencatatan, administrasi, dan rekonsilisasi",
    aboutExpCPC2: "Memproses uang tunai (penghitungan, penyortiran, pengepakan, pembendelan)",
    aboutExpCIT: "Cash In Transit (Januari 2021 – Maret 2023)",
    aboutExpCIT1: "Menjelaskan penanganan logistik uang kertas dan barang berharga",
    aboutExpCIT2: "Melakukan penghitungan uang dan rekonsilisasi di lokasi tujuan",
    aboutExpATM: "Teknisi ATM (April 2023 – Saat Ini)",
    aboutExpATM1: "Memeriksa kondisi infrastruktur pendukung ATM",
    aboutExpATM2: "Menangani masalah mesin ATM dan melakukan perbaikan",
    aboutExpATM3: "Membantu pengupgradean software dan pengisian ATM",
    aboutSkillsTitle: "Kemampuan",
    aboutHardSkillTitle: "Hard Skills",
    aboutSoftSkillTitle: "Soft Skills",
    skillATMmaintenance: "Pemeliharaan ATM",
    skillCNC: "Pengeoperasian CNC",
    skillTechnicalDrawing: "Pembacaan Gambar Teknik",
    skillSoftwareUpgrade: "Upgrade Software",
    skillMsOffice: "Microsoft Office",
    skillTeamwork: "Kerjasama Tim",
    skillProblemSolving: "Problem Solving",
    skillTimeManagement: "Manajemen Waktu",
    skillCommunication: "Komunikatif",
    skillAdaptability: "Kemampuan Beradaptasi",
    projectsTitle: "Proyek Data Science",
    formNameRequired: "Nama harus diisi!",
    formEmailInvalid: "Format email tidak valid!",
    formMessageRequired: "Pesan harus diisi!",
    formSuccess: "✓ Pesan terkirim! Terima kasih telah menghubungi saya. Saya akan merespons secepatnya.",
    project1Title: "Analisis Sentimen Media Sosial (Twitter & Reddit)",
    project1Desc: "Menganalisis persepsi publik terhadap Produk X menggunakan teknik NLP untuk mengidentifikasi tren emosi pengguna secara real-time.",
    project2Title: "Prediksi Penjualan E-commerce",
    project2Desc: "Membangun model regresi untuk memprediksi volume penjualan bulanan berdasarkan variabel harga, promosi, dan tren musiman.",
    skillsTitle: "Keahlian Teknis",
    skillsLanguages: "Bahasa: Python, SQL, R",
    skillsTools: "Tools: Jupyter Notebook, Tableau, Power BI, Git",
    skillsLibrary: "Library: Pandas, NumPy, Scikit-learn, Seaborn, Plotly",
    certificatesTitle: "Sertifikat",
    contactTitle: "Hubungi Saya",
    contactDesc: "Tertarik berkolaborasi atau memiliki pertanyaan?",
    navAbout: "Tentang",
    navProjects: "Proyek",
    navSkills: "Keahlian",
    navCertificates: "Sertifikat",
    navContact: "Kontak",
    navCV: "CV",
    cert1Title: "Google Data Analytics Professional Certificate",
    cert1Desc: "Sertifikat yang diperoleh setelah menyelesaikan kursus analisis data dari Google dengan fokus pada pengumpulan, pembersihan, dan visualisasi data.",
    cert1Button: "Lihat Sertifikat",
    cert2Title: "IBM Data Science Professional Certificate",
    cert2Desc: "Program dari IBM yang mencakup Python, SQL, data visualization, dan machine learning. Sertifikasi ini menunjukkan kompetensi dalam praktik data science end-to-end.",
    cert2Button: "Lihat Sertifikat"
  },
  en: {
    name: "RIJKI RESDA NAJMUDIN",
    subtitle: "Fresh Graduate & Data Science Enthusiast",
    aboutTitle: "About Me",
    aboutNameTitle: "RIJKI RESDA NAJMUDIN",
    aboutPosition: "ATM Technician & Data Science Enthusiast",
    aboutContact: "📱 085839946300 | 📧 rijkiresda19@gmail.com",
    aboutSummaryTitle: "Professional Summary",
    aboutSummaryText: "A responsible professional in charge of regular ATM maintenance and repairs to ensure customer satisfaction and smooth financial transactions. Working collaboratively with other ATM technician teams to resolve technical issues quickly and efficiently, while maintaining consistent service quality.",
    aboutEducationTitle: "Education",
    aboutEducationDetail: "Social Sciences – Average Grade 8",
    aboutUniversityDetail: "Information Systems Program (Starting September 2025)",
    aboutExperienceTitle: "Work Experience",
    aboutExpKoordinator: "CPC Coordinator (June 2019 – December 2020)",
    aboutExpCPC1: "Monitored CPC activities including recording, administration, and reconciliation",
    aboutExpCPC2: "Processed cash (counting, sorting, packaging, bundling)",
    aboutExpCIT: "Cash In Transit (January 2021 – March 2023)",
    aboutExpCIT1: "Explained handling logistics of cash and valuable items",
    aboutExpCIT2: "Performed cash counting and reconciliation at final destination",
    aboutExpATM: "ATM Technician (April 2023 – Present)",
    aboutExpATM1: "Inspected ATM supporting infrastructure conditions",
    aboutExpATM2: "Handled ATM machine issues and performed repairs",
    aboutExpATM3: "Assisted in software upgrades and ATM refills",
    aboutSkillsTitle: "Skills",
    aboutHardSkillTitle: "Hard Skills",
    aboutSoftSkillTitle: "Soft Skills",
    skillATMmaintenance: "ATM Maintenance",
    skillCNC: "CNC Machine Operation",
    skillTechnicalDrawing: "Technical Drawing Reading",
    skillSoftwareUpgrade: "Software Upgrade",
    skillMsOffice: "Microsoft Office",
    skillTeamwork: "Teamwork",
    skillProblemSolving: "Problem Solving",
    skillTimeManagement: "Time Management",
    skillCommunication: "Communication",
    skillAdaptability: "Adaptability",
    projectsTitle: "Data Science Projects",
    formNameRequired: "Name is required!",
    formEmailInvalid: "Email format is invalid!",
    formMessageRequired: "Message is required!",
    formSuccess: "✓ Message sent! Thank you for contacting me. I will respond shortly.",
    project1Title: "Social Media Sentiment Analysis (Twitter & Reddit)",
    project1Desc: "Analyzed public perception of Product X using NLP techniques to identify user sentiment trends in real time.",
    project2Title: "E-commerce Sales Prediction",
    project2Desc: "Built a regression model to forecast monthly sales volume based on price, promotions, and seasonal trends.",
    skillsTitle: "Technical Skills",
    skillsLanguages: "Languages: Python, SQL, R",
    skillsTools: "Tools: Jupyter Notebook, Tableau, Power BI, Git",
    skillsLibrary: "Libraries: Pandas, NumPy, Scikit-learn, Seaborn, Plotly",
    certificatesTitle: "Certificates",
    contactTitle: "Contact Me",
    contactDesc: "Interested in collaborating or have questions?",
    navAbout: "About",
    navProjects: "Projects",
    navSkills: "Skills",
    navCertificates: "Certificates",
    navContact: "Contact",
    navCV: "CV",
    cert1Title: "Google Data Analytics Professional Certificate",
    cert1Desc: "Certificate obtained after completing Google's data analytics course focusing on data collection, cleaning, and visualization.",
    cert1Button: "View Certificate",
    cert2Title: "IBM Data Science Professional Certificate",
    cert2Desc: "Program from IBM covering Python, SQL, data visualization, and machine learning. This certification demonstrates competence in end-to-end data science practice.",
    cert2Button: "View Certificate"
  }
};

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  document.getElementById('lang-label').innerText = lang.toUpperCase();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      // use innerHTML to allow markup in translations
      el.innerHTML = translations[lang][key];
    }
  });
}

langToggle.addEventListener('click', () => {
  const current = localStorage.getItem('language') || 'id';
  const next = current === 'id' ? 'en' : 'id';
  setLanguage(next);
});

window.addEventListener('load', () => {
  const savedLang = localStorage.getItem('language') || 'id';
  setLanguage(savedLang);
});

// Fungsi untuk ganti tema
function toggleTheme() {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  // Set tema ke HTML element
  htmlElement.setAttribute('data-theme', newTheme);
  
  // Simpan ke localStorage
  localStorage.setItem('theme', newTheme);
  
  // Update icon tombol
  updateThemeIcon(newTheme);
}

// Update icon saat tema berubah
function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector('i');
  if (theme === 'dark') {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

// Ketika tombol diklik
themeToggle.addEventListener('click', toggleTheme);

// Saat page load, cek localStorage dan terapkan tema tertimpan
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  htmlElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

function validateForm(name, email, message) {
  // Validasi nama tidak kosong
  if (name.trim() === '') {
    showMessage(translations[currentLang].formNameRequired, 'error');
    return false;
  }

  // Validasi email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showMessage(translations[currentLang].formEmailInvalid, 'error');
    return false;
  }

  // Validasi pesan tidak kosong
  if (message.trim() === '') {
    showMessage(translations[currentLang].formMessageRequired, 'error');
    return false;
  }

  return true;
}

function showMessage(message, type) {
  formMessage.textContent = message;
  formMessage.classList.remove('success', 'error');
  formMessage.classList.add(type);
}

function resetForm() {
  contactForm.reset();
  setTimeout(() => {
    formMessage.classList.remove('success', 'error');
  }, 3000);
}

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Ambil nilai dari input fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validasi form
  if (validateForm(name, email, message)) {
    // Jika valid, tampilkan success message
    showMessage(translations[currentLang].formSuccess, 'success');
    resetForm();
  }
});

// ===== SCROLL REVEAL ANIMATION =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      scrollObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply scroll reveal to bento items and cards
document.querySelectorAll('.bento-item, .card, .cert-card, .about-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  scrollObserver.observe(el);
});

// ===== ANIMATED COUNTER FOR STATS =====
function animateCounter(element, target, duration = 1500) {
  let current = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// ===== PARALLAX EFFECT ON SCROLL =====
window.addEventListener('scroll', () => {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  parallaxElements.forEach(el => {
    const scrollPosition = window.pageYOffset;
    const yOffset = scrollPosition * 0.5;
    el.style.transform = `translateY(${yOffset}px)`;
  });
});

// ===== MOUSE FOLLOW EFFECT ON PROFILE PIC =====
const profilePic = document.querySelector('.profile-pic');
if (profilePic) {
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    const rotateX = (mouseY - 0.5) * 10;
    const rotateY = (mouseX - 0.5) * 10;
    
    // Smooth mouse follow effect
    profilePic.style.perspective = '1000px';
  });
}

// ===== ANIMATED GRADIENT BACKGROUND =====
const header = document.querySelector('header');
if (header) {
  setInterval(() => {
    const colors = [
      'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)',
      'linear-gradient(135deg, #1a1f3a 0%, #0a0e27 50%, #1a1f3a 100%)'
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // Uncomment if you want animated backgrounds
    // header.style.background = randomColor;
  }, 5000);
}

// ===== ADD CLICK RIPPLE EFFECT =====
document.querySelectorAll('.btn, .btn-submit, .hero-link, .contact-method').forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.className = 'ripple';
    
    this.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});
