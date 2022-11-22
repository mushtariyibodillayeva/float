const containerEl = document.querySelector(".container");
window.addEventListener("mousemove", (event) => {
  containerEl.innerHTML = `
    <div class="mouse-event">
    ${event.clientX}
    <h4>Mouse X o'qi(px)</h4>
    </div>`;
});
