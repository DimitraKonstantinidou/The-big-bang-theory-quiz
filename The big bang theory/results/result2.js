function isPageReloaded() {
  return performance.getEntriesByType("navigation")[0].type === "reload";
}

if (isPageReloaded()) {
  window.location.href = "../index.html";
} else {
  function getScoreFromURL() {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('score');
  }

  let userScore = getScoreFromURL();

  const scorePlaceholder = document.getElementById('scorePlaceholder');

   if (userScore) {
    scorePlaceholder.textContent = userScore;
  } else {
    scorePlaceholder.textContent = 'SCORE'; 
  }
}

$("button").on("click", function() {
  location.reload();
});