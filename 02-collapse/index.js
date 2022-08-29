document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".collapsible__button"),
    show = btn.querySelector(".collapsible__action--hidden"),
    hide = btn.querySelector(".collapsible__action--visible"),
    collapsibleContent = document.querySelector(".collapsible__content");

  hide.style.display = "none";
  collapsibleContent.style.opacity = 0;
  btn.addEventListener("click", (e) => {
    if (e.target === show) {
      show.style.display = "none";
      collapsibleContent.style.opacity = 1;
      collapsibleContent.animate(
        {
          opacity: [0, 1],
        },
        { duration: 1000 }
      );
    }
    hide.style.display = "block";

    if (e.target === hide) {
      show.style.display = "block";
      collapsibleContent.animate(
        {
          opacity: [1, 0],
        },
        { duration: 1000 }
      );
      collapsibleContent.style.opacity = 0;
      hide.style.display = "none";
    }
  });
});
