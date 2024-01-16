const closeOtherSections = true;
// const closeOtherSections = false;
const clickOpens = document.querySelectorAll("[data-click-open]");
for (const node of clickOpens) {
  node.addEventListener("click", () => {
    const blockOpen = node
      .closest("section")
      .querySelector("[data-block-open]");
    if (blockOpen.classList.contains("h-0")) {
      if (closeOtherSections) {
        closeAllOpenedBlocks();
      }
      blockOpen.style.maxHeight = blockOpen.scrollHeight + "px";
      blockOpen.style.overflow = "hidden";
      node.querySelector("svg[data-icon-down]").classList.add("d-none");
      node.querySelector("svg[data-icon-up]").classList.remove("d-none");
      blockOpen.classList.remove("h-0");
    } else {
      node.querySelector("svg[data-icon-up]").classList.add("d-none");
      node.querySelector("svg[data-icon-down]").classList.remove("d-none");
      blockOpen.style = "";
      blockOpen.classList.add("h-0");
    }
  });
}

const closeAllOpenedBlocks = () => {
  for (const node of clickOpens) {
    const blockOpen = node
      .closest("section")
      .querySelector("[data-block-open]");
    node.querySelector("svg[data-icon-up]").classList.add("d-none");
    node.querySelector("svg[data-icon-down]").classList.remove("d-none");
    blockOpen.style = "";
    blockOpen.classList.add("h-0");
  }
};
