// STICKY STEPS 
  function initStickyStepsBasic() {
  const containers = document.querySelectorAll("[data-sticky-steps-init]");
  if (!containers.length) return;

  containers.forEach((container) => {
    const items = [...container.querySelectorAll("[data-sticky-steps-item]")];
    if (!items.length) return;

    function setActiveStep(activeIndex) {
      items.forEach((item, index) => {
        let status = "active";
        if (index < activeIndex) status = "before";
        if (index > activeIndex) status = "after";
        item.setAttribute("data-sticky-steps-item-status", status);
      });
    }

    items.forEach((item, index) => {
      const anchor = item.querySelector("[data-sticky-steps-anchor]");
      if (!anchor) return;

      ScrollTrigger.create({
        trigger: anchor,
        start: "center 70%",
        onEnter: () => setActiveStep(index),
        onLeaveBack: () => setActiveStep(Math.max(index - 1, 0))
      });
    });

    setActiveStep(0);
  });
}

// Initialize Sticky Steps (Basic)
document.addEventListener("DOMContentLoaded", function () {
  initStickyStepsBasic();
});
