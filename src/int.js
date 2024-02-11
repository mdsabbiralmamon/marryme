clickCount = 0;
document.getElementById('buttons-container').addEventListener('click', function (event) {
    console.log(event.target.id);
    if (event.target.id === 'noClicked') {
        clickCount++;
        const noClicked = document.getElementById('noClicked');
        if (clickCount % 2 !== 0) {
            noClicked.parentNode.innerHTML = '<button id="noClicked" class="btn btn-error">No</button> <button id="yesClicked" class="btn btn-success">Yes</button>'
        }
        else {
            noClicked.parentNode.innerHTML = '<button id="yesClicked" class="btn btn-success">Yes</button> <button id="noClicked" class="btn btn-error">No</button>'
        };
    }
    else {
        console.log('yes Clicked');
        const gifLocation = document.querySelector('.container img');
        gifLocation.src = 'src/images/peach-goma-love.gif';
        const buttons = document.querySelector('.buttons');
        buttons.setAttribute('class', 'hidden');
        const textTransform = document.getElementById('heading');
        textTransform.innerText = "Sorry You are over qualified!!!"
    }
});

