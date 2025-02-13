document.addEventListener('DOMContentLoaded', () => {
    const catImg = document.getElementById('cat-img');
    const buttons = document.querySelectorAll('.nav-btn');
    const meowSound = document.getElementById('meow-sound');
    let isMoving = false;

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (!isMoving) {
                isMoving = true;
                bringCatToFront(); // Ensure cat is always above before moving
                moveCatToButton(e.target);
            }
        });
    });

    function bringCatToFront() {
        catImg.style.zIndex = '9999'; // Always keep cat on top
    }

    function moveCatToButton(button) {
        bringCatToFront(); // Ensure it's still on top

        const buttonRect = button.getBoundingClientRect();
        const catRect = catImg.getBoundingClientRect();

        const deltaX = buttonRect.left - catRect.left + (buttonRect.width / 2) - 40;
        const deltaY = buttonRect.top - catRect.top - 20;

        catImg.style.transition = 'transform 1.5s ease-in-out';
        catImg.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

        meowSound.play().catch(error => console.log("Autoplay blocked:", error));

        setTimeout(() => {
            catImg.style.transform += ' scale(1.1)';
            setTimeout(() => {
                catImg.style.transform = catImg.style.transform.replace(' scale(1.1)', '');
                navigateToPage(button.getAttribute('data-target'));
                isMoving = false;
            }, 300);
        }, 1500);
    }

    function navigateToPage(page) {
        bringCatToFront(); // Keep cat on top when returning

        const pages = document.querySelectorAll('.page');
        pages.forEach(p => p.classList.remove('active'));
        document.getElementById(page).classList.add('active');

        setTimeout(() => {
            catImg.style.transform = 'translateX(-50%)';
            bringCatToFront(); // Make sure it's still above everything
        }, 1000);
    }
});
