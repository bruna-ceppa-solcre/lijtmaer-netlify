document.addEventListener("DOMContentLoaded", function () {
    const dropdownInputs = document.querySelectorAll(".c-dropdown__input");

    dropdownInputs.forEach(input => {
        input.addEventListener("change", function () {
            // If this dropdown is being opened
            if (this.checked) {
                // Close all other dropdowns
                const allInputs = document.querySelectorAll(".c-dropdown__input");
                allInputs.forEach(otherInput => {
                    if (otherInput !== this) {
                        otherInput.checked = false;
                    }
                });
            }
        });
    });
});