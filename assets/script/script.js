document.addEventListener("DOMContentLoaded", function () {
  // Sembunyikan konten saat halaman dimuat
  document.getElementById("content").style.opacity = "0";

  // Tampilkan konten setelah 1 detik
  setTimeout(function () {
    document.getElementById("content").style.opacity = "1";
  }, 1000); // Waktu delay dalam milidetik (1000ms = 1 detik)

  // Memulai animasi dengan menambahkan kelas .visible pada .show-up setelah 1.9 detik
  setTimeout(function () {
    const showUpElements = document.querySelectorAll(
      ".show-up-wrapper .show-up"
    );
    showUpElements.forEach(function (showUpElement) {
      showUpElement.classList.add("visible-show-up");
    });
  }, 1900); // Waktu delay

  // Memulai animasi dengan menambahkan kelas .visible pada .scale setelah 1.8 detik
  setTimeout(function () {
    const scaleElements = document.querySelectorAll(".scale");
    scaleElements.forEach(function (scaleElements) {
      scaleElements.classList.add("visible-scale");
    });
  }, 1800); // Waktu delay

  // Memulai animasi dengan menambahkan kelas .visible pada .show setelah 2.2 detik
  setTimeout(function () {
    const showElements = document.querySelectorAll(".show");
    showElements.forEach(function (showElements) {
      showElements.classList.add("visible-show");
    });
  }, 2200);
});

const navbar = document.getElementById("navbar");
let lastScrollTop = 0;

// Fungsi untuk menampilkan navbar dengan background color sesuai tema mode saat scroll lebih dari 0
const showNavbar = () => {
  // Memeriksa apakah posisi scroll lebih dari 0
  if (window.scrollY > 0) {
    navbar.style.top = "0";
    // Memeriksa tema mode yang sedang aktif
    const themeMode = document.body.classList.contains("day-mode")
      ? "day-mode"
      : "";
    // Set warna latar belakang berdasarkan tema mode
    navbar.style.backgroundColor =
      themeMode === "day-mode"
        ? "hsla(0, 0%, 95%, 0.4)"
        : "hsla(0, 0%, 5%, 0.6)"; // Contoh warna untuk setiap tema mode

    // Tambahkan efek blur pada latar belakang
    navbar.style.backdropFilter = "blur(6px)";
  } else {
    navbar.style.top = "0"; // Atur posisi navbar kembali ke atas
    navbar.style.backgroundColor = "transparent"; // Hapus background color jika scroll kembali ke atas

    // Hapus efek blur pada latar belakang
    navbar.style.backdropFilter = "none";
  }
};

// Fungsi untuk menyembunyikan navbar
const hideNavbar = () => {
  navbar.style.top = "-70px";
};

// Fungsi untuk menentukan apakah bagian atas dari section berada sejajar dengan tepi atas layar
const isSectionAtTopOfScreen = (section) => {
  const rect = section.getBoundingClientRect();
  return rect.top == 70;
};

// Tambahkan event listener untuk event scroll
window.addEventListener("scroll", function () {
  // Gunakan logika awal untuk menampilkan atau menyembunyikan navbar berdasarkan arah scroll
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Jika scrollbar digeser ke bawah
    hideNavbar();
  } else {
    // Jika scrollbar digeser ke atas
    showNavbar();
  }

  lastScrollTop = scrollTop;

  // Pengecekan apakah ada section yang tepi atasnya berada sejajar dengan tepi atas layar
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    if (isSectionAtTopOfScreen(section)) {
      showNavbar(); // Tampilkan navbar jika ada section yang tepi atasnya berada sejajar dengan tepi atas layar
      return;
    }
  });
});

// Theme mode
// Fungsi untuk mengganti tema
// Retrieve theme mode from localStorage on page load
const savedThemeMode = localStorage.getItem("themeMode");
if (savedThemeMode) {
  document.body.classList.add(savedThemeMode);
  updateThemeButtonText(savedThemeMode);
}
// Fungsi untuk mengganti tema
function toggleThemeMode() {
  const body = document.body;
  body.classList.toggle("day-mode");

  // Save theme mode to localStorage
  const themeMode = body.classList.contains("day-mode") ? "day-mode" : "";
  localStorage.setItem("themeMode", themeMode);

  updateThemeButtonText(themeMode);
}

// Mengganti teks atau simbol sesuai dengan status dark mode
function updateThemeButtonText(themeMode) {
  const themeModeElements = document.querySelectorAll(".theme-mode");

  themeModeElements.forEach((element) => {
    if (themeMode === "day-mode") {
      element.innerHTML = "Night";
    } else {
      element.innerHTML = "Day";
    }
  });
}

// PARALLAX
const parallax = document.querySelector(".parallax");
// Left
const moto = document.querySelector(".moto");
const socialLink = document.querySelector(".social-link");
const amImage = document.querySelector(".am-image");
// Right
const right = document.querySelector(".right");

// Sensitivity
// Moto
const sMotoX = 80;
const sMotoY = 20;
// Sosial Link
const sSosialLinkX = 50;
const sSosialLinkY = 20;
// Am Image
const sAmImageX = -280;
const sAmImageY = -20;
// Right (Name)
const sRightX = 400;
const sRightY = 10;

// Add a mouse move event to the whole section
parallax.addEventListener("mousemove", (e) => {
  // Get the X, Y mouse coordinates
  const x = e.clientX;
  const y = e.clientY;

  /*
  Using template literals,
  translate the left using the
  coordinates, and apply
  the left sensitivity
  */
  moto.style.transform = `
    translate(
      ${x / sMotoX}%,
      ${y / sMotoY}%
    )`;

  socialLink.style.transform = `
    translate(
      ${x / sSosialLinkX}%,
      ${y / sSosialLinkY}%
    )`;

  amImage.style.transform = `
    translate(
      ${x / sAmImageX}%,
      ${y / sAmImageY}%
    )`;

  /*
  translate the right using the
  coordinates, and apply
  the right sensitivity
  */
  right.style.transform = `
  translate(
    ${x / sRightX}%,
    ${y / sRightY}%
  )`;
});

// SOCIAL LINK
function showHiddenText(event) {
  const textHidden = event.currentTarget.querySelectorAll(".text-hidden");
  let delay = 0; // Delay awal

  // Loop melalui setiap elemen .text-hidden dan atur display: inline-block dengan delay
  textHidden.forEach((element) => {
    setTimeout(() => {
      element.style.display = "inline-block"; // Tampilkan elemen
    }, delay);
    delay += 90; // Tambahkan delay untuk setiap elemen
  });
}

function resetHiddenText(event) {
  const textHidden = event.currentTarget.querySelectorAll(".text-hidden");
  let delay = 0; // Delay awal

  // Loop melalui setiap elemen .text-hidden dan atur display: none dengan delay
  textHidden.forEach((element) => {
    setTimeout(() => {
      element.style.display = "none"; // Sembunyikan elemen
    }, delay);
    delay += 90; // Tambahkan delay untuk setiap elemen
  });
}
