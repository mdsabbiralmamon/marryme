const noClicked = document.getElementById('noClicked');
noClicked.onclick = function setNoValues() {
    const transformNo = document.querySelector('.buttons .btn-error');
    transformNo.setAttribute('class', 'hidden');
}

const yesClicked = document.getElementById('yesClicked');
yesClicked.onclick = function setYesValues() {
    const gifLocation = document.querySelector('.container img');
    gifLocation.src = 'src/images/peach-goma-love.gif';
    const buttons = document.querySelector('.buttons');
    buttons.setAttribute('class', 'hidden');
    const textTransform = document.getElementById('heading');
    textTransform.innerText = "Sorry You are over qualified!!!"
}
