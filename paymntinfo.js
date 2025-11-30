// Console log as required innit
console.log("Payment page loading pleasee wait Ready for checkout");

const paymentBtns = document.querySelectorAll('.payment-btn');
const cardFields = document.getElementById('cardFields');

// Payment method selection (only Card works)
paymentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.textContent.includes('Card')) {
            paymentBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            cardFields.style.display = 'block';
        } else {
            alert("sorry i had no time to write for COD AND WALLET PLEASE USE CARD i know You are rich"); // Alert 2
        }
    });
});

// Payment Done buttoshows Place Order button
document.getElementById('paymentDoneBtn').addEventListener('click', () => {
    const email = document.querySelector('input[type="email"]').value;
    const phone = document.querySelector('input[type="tel"]').value;
    const fullName = document.querySelectorAll('input[type="text"]')[0].value;

    // Validate critical fields BETTER ENTEER DATATATA
    if (!email || !phone || !fullName) {
        alert("you cannot leave like this without filling all dataa information please do that first"); // Alert 3
        return;
    }

    const placeOrderBtn = document.getElementById('placeOrderBtn');
    placeOrderBtn.classList.add('show');
    placeOrderBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
    console.log("Payment info entere Place Order button shown"); // finalllyyy another condole log 
});

// Place Order button - redirect to order confirmation (Home)
document.getElementById('placeOrderBtn').addEventListener('click', () => {
    console.log("Order placed - Redirecting to Home page"); // Console log 5
    window.location.href = 'orderconfirmed.html'; // back to homieee
});


