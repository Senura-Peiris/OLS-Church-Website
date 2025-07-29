// === Bible Quote Language Switch on Landing Page ===
const quoteElement = document.getElementById('landing-quote');

const englishQuote = `"But as for me and my house, we will serve the Lord." <br> — Joshua 24:15`;
const sinhalaQuote = `"මම හා මාගේ ගෙදර පිරිස ස්වාමීන්වහන්සේට සේවය කරමු." <br> — ජොෂුවා 24:15`;

let isEnglishQuote = true;

setInterval(() => {
  isEnglishQuote = !isEnglishQuote;
  quoteElement.classList.remove("fade-in");

  setTimeout(() => {
    quoteElement.innerHTML = isEnglishQuote ? englishQuote : sinhalaQuote;
    quoteElement.classList.add("fade-in");
  }, 300);
}, 6000);
