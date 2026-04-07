(function () {
  var select = document.getElementById("portfolio-filter");
  if (!select) return;

  select.addEventListener("change", function () {
    var val = this.value;
    var cards = document.querySelectorAll(
      "#portfolio-cards-row > [data-category]"
    );
    cards.forEach(function (card) {
      if (val === "all" || card.getAttribute("data-category") === val) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
})();
