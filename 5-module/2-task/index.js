function toggleText() {
  let textButton = document.querySelector(".toggle-text-button");
  let text = document.querySelector("#text");

  textButton.addEventListener('click', event => {
		if (text.hasAttribute("hidden") === false) {
			text.hidden = true;
		} else if (text.hasAttribute("hidden") === true) {
      text.removeAttribute("hidden");
    }
	});
}
