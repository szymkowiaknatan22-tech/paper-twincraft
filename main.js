* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;

  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}

html, body {
  width: 100%;
  height: 100%;
  background: #000;
  overflow: hidden;
  touch-action: none;
}

#app {
  position: relative;
  width: 100%;
  height: 100%;
}

#flash-wrapper,
ruffle-player {
  width: 100%;
  height: 100%;
  display: block;
  outline: none;
}

#overlay {
  position: absolute;
  inset: 0;
}

.btn {
  position: absolute;
  width: 64px;
  height: 64px;
  background: rgba(255,255,255,0.25);
  color: white;
  font-size: 24px;
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  touch-action: none;
  outline: none;
}

[data-key="ArrowLeft"]  { left: 20px; bottom: 80px; }
[data-key="ArrowRight"] { left: 140px; bottom: 80px; }
[data-key="ArrowUp"]    { left: 80px; bottom: 140px; }
[data-key="ArrowDown"]  { left: 80px; bottom: 20px; }

.action {
  right: 30px;
  bottom: 80px;
}

#settings {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0,0,0,0.65);
  color: white;
  padding: 8px;
  font-size: 14px;
}

.load-btn {
  background: #222;
  color: white;
  border: 1px solid #444;
  padding: 6px 10px;
  font-size: 14px;
  display: inline-block;
  cursor: pointer;
}
