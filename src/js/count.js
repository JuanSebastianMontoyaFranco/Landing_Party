function startCountdown(targetDate) {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');

    function updateCountdown() {
        const now = new Date();
        const timeRemaining = targetDate - now;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

        daysEl.textContent = days.toString().padStart(2, '0');
        hoursEl.textContent = hours.toString().padStart(2, '0');
        minutesEl.textContent = minutes.toString().padStart(2, '0');

        if (timeRemaining <= 0) {
            clearInterval(interval);
        }
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}

const targetDate = new Date('2025-02-01T00:00:00');
startCountdown(targetDate);