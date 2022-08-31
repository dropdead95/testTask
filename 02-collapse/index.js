const showText = (show, hide, content) => {
  show.style.display = "none";
  content.style.opacity = "1";
  content.animate(
    {
      opacity: [0, 1],
    },
    { duration: 1000 }
  );
  hide.style.display = "block";
};

const hideText = (show, hide, content) => {
  show.style.display = "block";
  content.animate(
    {
      opacity: [1, 0],
    },
    { duration: 1000 }
  );
  content.style.opacity = "0";
  hide.style.display = "none";
};

const collapsibleInit = () => {
  const collapsible = document.querySelectorAll(".collapsible");

  collapsible.forEach((elem) => {
    const button = elem.querySelector(".collapsible__button");
    const visibleText = button.querySelector(".collapsible__action--hidden");
    const hiddenText = button.querySelector(".collapsible__action--visible");
    const content = elem.querySelector(".collapsible__content");

    hiddenText.style.display = "none";
    content.style.opacity = "0";

    button.addEventListener("click", (e) => {
      if (e.target === visibleText) {
        showText(visibleText, hiddenText, content);
      }

      if (e.target === hiddenText) {
        hideText(visibleText, hiddenText, content);
      }
    });
  });
};

document.addEventListener("DOMContentLoaded", collapsibleInit);
