document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".collapsible__button"),
    show = btn.querySelector(".collapsible__action--hidden"),
    hide = btn.querySelector(".collapsible__action--visible"),
    collapsibleContent = document.querySelector(".collapsible__content");

  hide.style.display = "none";
  collapsibleContent.style.display = "none";

  if (
    hide.style.display === "none" &&
    collapsibleContent.style.display === "none"
  ) {
    btn.addEventListener("click", (e) => {
      collapsibleContent.style.display = "block";
      show.style.display = "none";
      hide.style.display = "block";
    });
  }
  if (
    hide.style.display === "block" &&
    collapsibleContent.style.display === "block"
  ) {
    btn.addEventListener("click", (e) => {
      collapsibleContent.style.display = "none";
      show.style.display = "block";
      hide.style.display = "none";
    });
  }
});
