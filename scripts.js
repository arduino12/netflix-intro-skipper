function clickButton(dataUia) {
  const button = document.querySelector(`[data-uia="${dataUia}"]`);
  if (button) {
    button.click();
  }
}

function checkForButtons() {
  clickButton("player-skip-intro");
  clickButton("player-skip-recap");
  clickButton("next-episode-seamless-button-draining");
  clickButton("next-episode-seamless-button");
}

setInterval(checkForButtons, 500);
