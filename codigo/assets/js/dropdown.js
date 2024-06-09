const selectBtns = document.querySelectorAll(".select-btn"),
      items = document.querySelectorAll(".item");

selectBtns.forEach(selectBtn => {
    selectBtn.addEventListener("click", () => {
        selectBtn.classList.toggle("open");
    });
});

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");

        let container = item.closest('.container'),
            checked = container.querySelectorAll(".checked"),
            btnText = container.querySelector(".btn-text");

        if (checked && checked.length > 0) {
            btnText.innerText = `${checked.length} Selected`;
        } else {
            btnText.innerText = "Select Language";
        }
    });
});
