const translations = {
    en: {
      nav: ["Home", "About Us", "Notices", "Gallery"],
      title: "Our Lady Of Sorrows<br/>Church Ja-Ela",
      aboutTitle: "About Our Church",
      aboutText:
        "Our Lady Of Sorrows Church in Ja-Ela is a place of spiritual reflection and community gathering. We welcome all who seek peace, prayer, and fellowship. Join us for regular services and events.",
      seeMore: "See More",
      priestTitle: "Our Priest",
      priestDesc:
        "Our Current priest Rev.Fr.Chaminda Roshan is devoted to serving the community with compassion and faith. He has been leading our parish for over 1.5 years, inspiring many with his sermons and kindness. He leads everyone to God.",
      birthday: "Birthday: ",
      specialMoments: "Special Moments",
      specialDesc:
        "Cherished memories and beautiful gatherings from our Church community captured in time.",
      contactUs: "Contact Us",
      footer: "© 2025 Our Lady Of Sorrows Church - Ja-Ela. All rights reserved.",
    },
    si: {
      nav: ["මුල් පිටුව", "අපි ගැන", "නිවේදන", "ගැලරිය"],
      title: "වික්ෂෝප දේවමාතා දෙව්මැදුර <br/>ජා-ඇල",
      aboutTitle: "අපගේ දෙව්මැදුර පිළිබඳව",
      aboutText:
        "ජාඇල වික්ෂෝප දේවමාතා දෙව්මැදුර ආගමික වඳුන් සහ සමාජ එකමුතුව සඳහා වූ ස්ථානයකි. සාමය, ආශිර්වාදය සහ සබඳතා බලාපොරොත්තු වන සැමට අපි ආරාධනා කරමු.",
      seeMore: "තව බලන්න",
      priestTitle: "අපගේ පියතුමා",
      priestDesc:
        "අපගේ වත්මන් පියතුමා ගරු චමින්ද රොෂාන් පියතුමා දයාවෙන් හා ආගමික විශ්වාසයෙන් සමාජය සේවය කිරීමේ කැපවීමෙන් යුතුව සිටී. එතුමානන් පසුගිය වසර 1.5 ක් පුරා අපගේ දෙව්මැදුර නියෝජනය කරමින් සභාවට ආශිර්වාද හා ආදරය ලබාදී ඇත.",
      birthday: "උපන්දිනය: ",
      specialMoments: "විශේෂ මතකයන්",
      specialDesc:
        "අපගේ දෙව්මැදුරේ මතක සටහන් සහ ආගමික අවස්ථා",
      contactUs: "අපව අමතන්න",
      footer: "© 2025 වික්ෂෝප දේවමාතා දෙව්මැදුර - ජාඇල. සියලු හිමිකම් ඇවිරිණි.",
    },
  };
  
  const elements = {
    navLinks: document.querySelectorAll(".nav-menu ul li a"),
    title: document.getElementById("church-title"),
    aboutTitle: document.querySelector(".about-content h2"),
    aboutText: document.querySelector(".about-content p"),
    seeMoreBtn: document.querySelector(".see-more-btn a"),
    priestTitle: document.querySelector(".priest-left h2"),
    priestDesc: document.querySelector(".priest-left p"),
    birthdayLabel: document.querySelector(".priest-left strong"),
    specialTitle: document.querySelector(".special-moments-section h2"),
    specialDesc: document.querySelector(".moment-description"),
    contactTitle: document.querySelector(".contact-section h2"),
    footerText: document.querySelector(".footer-container p"),
  };
  
  const languageSelect = document.getElementById("languageSelect");
  
  function updateLanguage(lang) {
    const t = translations[lang];
  
    if (!t) return;
  
    elements.navLinks.forEach((link, index) => (link.textContent = t.nav[index]));
    elements.title.innerHTML = t.title;
    elements.aboutTitle.textContent = t.aboutTitle;
    elements.aboutText.textContent = t.aboutText;
    elements.seeMoreBtn.textContent = t.seeMore;
    elements.priestTitle.textContent = t.priestTitle;
    elements.priestDesc.textContent = t.priestDesc;
    elements.birthdayLabel.textContent = t.birthday;
    elements.specialTitle.textContent = t.specialMoments;
    elements.specialDesc.textContent = t.specialDesc;
    elements.contactTitle.textContent = t.contactUs;
    elements.footerText.textContent = t.footer;
  }
  
  languageSelect.addEventListener("change", () => {
    const selectedLang = languageSelect.value;
    updateLanguage(selectedLang);
    localStorage.setItem("lang", selectedLang);
  });
  
  window.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    languageSelect.value = savedLang;
    updateLanguage(savedLang);
  });
  