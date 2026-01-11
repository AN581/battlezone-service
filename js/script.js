document.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".box");
    cards.forEach(box => {
        const rect = box.getBoundingClientRect().top;
        if (rect < window.innerHeight - 100) {
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
        }
    });
});
