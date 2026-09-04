// Initialize medium zoom.
$(document).ready(function () {
  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
  });

  // `.container` creates a stacking context that would otherwise keep the
  // zoomed image underneath the overlay and the surrounding text.
  medium_zoom.on("open", function () {
    document.body.classList.add("zoom-open");
  });
  medium_zoom.on("closed", function () {
    document.body.classList.remove("zoom-open");
  });
});
