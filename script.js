document.addEventListener('DOMContentLoaded', () => {
    const petals = document.querySelectorAll('.petal');
    petals.forEach((petal, index) => {
        petal.style.setProperty('--rotation', `${index * 60}deg`);
    });
});
