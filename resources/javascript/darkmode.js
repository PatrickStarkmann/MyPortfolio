const darkmodeButton = document.getElementById('darkmode_button');

darkmodeButton.addEventListener('click', () => {
    document.body.classList.toggle('darkmode');
})