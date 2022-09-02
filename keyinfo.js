const char = document.querySelector('.char');
const keyPEK = document.querySelector('.eventkey .keyP');
const infoEK = document.querySelector('.eventkey .info');

const keyPEL = document.querySelector('.eventlocation .keyP');
const infoEL = document.querySelector('.eventlocation .info');

const keyPEC = document.querySelector('.eventcode .keyP');
const infoEC = document.querySelector('.eventcode .info');

const keyPEW = document.querySelector('.eventwitch .keyP');
const infoEW = document.querySelector('.eventwitch .info');


document.body.addEventListener('keypress', (e) => {
    char.innerHTML = e.charCode;

    keyPEK.innerHTML = e.key;
    infoEK.innerHTML = "The value of the key pressed. Accounts for modifiers keys that return CAPS and alternate chars.";

    keyPEL.innerHTML = e.location;
    infoEL.innerHTML = "The value of the key pressed. Accounts for modifiers keys that return CAPS and alternate chars.";

    keyPEC.innerHTML = e.code;
    infoEC.innerHTML = "The value of the key pressed. Accounts for modifiers keys that return CAPS and alternate chars.";

    keyPEW.innerHTML = e.which;
    infoEW.innerHTML = "The value of the key pressed. Accounts for modifiers keys that return CAPS and alternate chars.";

    console.log(e)
})