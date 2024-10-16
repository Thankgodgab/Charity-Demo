// script.js

document.addEventListener('DOMContentLoaded', function () {
    const billingCountrySelect = document.getElementById('billing-country');
    const selectedFlag = document.getElementById('selected-flag');

    function updateFlag() {
        const selectedOption = billingCountrySelect.options[billingCountrySelect.selectedIndex];
        const flagClass = selectedOption.getAttribute('data-flag');
        selectedFlag.className = `flag-icon ${flagClass}`;
    }

    billingCountrySelect.addEventListener('change', updateFlag);

    // Initial call to set the flag on page load
    updateFlag();

    function validateForm(event) {
        event.preventDefault();
        const fields = paymentForm.querySelectorAll('input[type="text"], select');
        let isValid = true;

        fields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                // field.placeholder = "This field is required";
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });

        if (isValid) {
            alert('Payment processed successfully.');
            // Process payment
        }
    }

    paymentForm.addEventListener('submit', validateForm);

    
});


function updateAmount() {
    const inputAmount = document.getElementById('amount').value;
    document.getElementById('amount-value').textContent = inputAmount;
}
function showForm(){
    document.getElementById('cardForm').classList.add('showForm');
}