const overlay = document.getElementById("overlay");
let player = document.getElementById("player");

player.blur();

function sendKey(type, key) {
  window.dispatchEvent(
    new KeyboardEvent(type, { key, bubbles: true })
  );
}

// overlay buttons
document.querySelectorAll(".btn").forEach(btn => {
  const key = btn.dataset.key;

  const block = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  [
    "touchstart","touchend",
    "pointerdown","pointermove","pointerup",
    "mousedown"
  ].forEach(ev =>
    btn.addEventListener(ev, block, { passive: false })
  );

  btn.addEventListener("touchstart", () => sendKey("keydown", key));
  btn.addEventListener("touchend", () => sendKey("keyup", key));

  btn.addEventListener("pointerdown", e => {
    btn.setPointerCapture(e.pointerId);
    sendKey("keydown", key);
    btn._drag = true;
  });

  btn.addEventListener("pointermove", e => {
    if (!btn._drag) return;
    btn.style.left = e.clientX - 32 + "px";
    btn.style.top  = e.clientY - 32 + "px";
  });

  btn.addEventListener("pointerup", e => {
    btn._drag = false;
    sendKey("keyup", key);
    btn.releasePointerCapture(e.pointerId);
  });
});

// settings
document.getElementById("toggleOverlay").onchange = e => {
  overlay.style.display = e.target.checked ? "block" : "none";
};

document.getElementById("toggleFlashClick").onchange = e => {
  player.style.pointerEvents = e.target.checked ? "none" : "auto";
};

// swf loader
const fileInput = document.getElementById("fileInput");
document.getElementById("loadSwf").onclick = () => fileInput.click();

fileInput.onchange = () => {
  const file = fileInput.files[0];
  if (!file) return;

  const url = URL.createObjectURL(file);

  // recreate player cleanly
  const wrapper = document.getElementById("flash-wrapper");
  wrapper.innerHTML = "";

  player = document.createElement("ruffle-player");
  player.setAttribute("tabindex", "-1");
  player.setAttribute("src", url);
  wrapper.appendChild(player);

  player.blur();
};
