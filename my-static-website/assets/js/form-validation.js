document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    if (form) {
        form.addEventListener("submit", function(event) {
            let isValid = true;
            const inputs = form.querySelectorAll("input, textarea");

            inputs.forEach(input => {
                if (!validateInput(input)) {
                    isValid = false;
                }
            });

            if (!isValid) {
                event.preventDefault();
                alert("Please correct the highlighted fields.");
            }
        });
    }

    function validateInput(input) {
        let isValid = true;
        const errorMessage = input.nextElementSibling;

        if (input.required && !input.value.trim()) {
            isValid = false;
            input.classList.add("error");
            errorMessage.textContent = "This field is required.";
        } else {
            input.classList.remove("error");
            errorMessage.textContent = "";
        }

        return isValid;
    }
});