(function () {
  var phone = "+917770903081";
  var hello = "Namaste, I would like to know about room availability at Shri Vitthal Rukmini Bhakta Niwas.";
  var wa = "https://wa.me/917770903081?text=" + encodeURIComponent(hello);
  var mapLink = "https://www.google.com/maps/place/Shri+Vitthal+Rukmini+Bhakta+Niwas/data=!4m2!3m1!1s0x3bc41805253165cb:0x75c435bf2927f657";
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = wa;
    a.target = "_blank";
    a.rel = "noopener";
  });
  document.querySelectorAll("[data-tel]").forEach(function (a) {
    a.href = "tel:" + phone;
  });
  document.querySelectorAll("[data-map]").forEach(function (a) {
    a.href = mapLink;
    a.target = "_blank";
    a.rel = "noopener";
  });
  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();
  var menuBtn = document.getElementById("menuBtn");
  var links = document.getElementById("links");
  if (menuBtn && links) {
    menuBtn.onclick = function () {
      menuBtn.setAttribute("aria-expanded", links.classList.toggle("open"));
    };
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }
  var map = document.getElementById("map");
  if (map && !map.querySelector("iframe")) {
    var frame = document.createElement("iframe");
    frame.title = "Map showing Shri Vitthal Rukmini Bhakta Niwas";
    frame.loading = "lazy";
    frame.referrerPolicy = "no-referrer-when-downgrade";
    frame.src = "https://www.google.com/maps?cid=8485966693018367575&output=embed";
    map.appendChild(frame);
  }
})();
