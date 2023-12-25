let captchaText = 0;
let isOpened = false;
let captchaStartTime;
let capchaInputTime;

document.addEventListener("DOMContentLoaded", function() {
    let captchaContainer = document.getElementById("captchaContainer");
    let captchaCanvas = document.getElementById("captchaCanvas");

    function openCaptcha() {
        isOpened = true;
        captchaStartTime = Date.now();

        captchaContainer.style.opacity = 1;

        // Draw rectangular form with transparent background on captchaCanvas
        let captchaContext = captchaCanvas.getContext("2d");
        captchaContext.clearRect(0, 0, captchaCanvas.width, captchaCanvas.height); // Clear previous content
        captchaContext.fillStyle = "rgba(204, 204, 204, 0)";
        captchaContext.fillRect(0, 0, captchaCanvas.width, captchaCanvas.height);   

        captchaContext.font = "bold 100px Arial";
        captchaContext.fillStyle = "#222E39";
        captchaContext.textAlign = "center";
        captchaContext.textBaseline = "middle"; 
        captchaContext.fillText(generateCaptcha(), captchaCanvas.width / 2, captchaCanvas.height / 2);

        document.querySelector('.typeDiv input').removeAttribute('disabled');
        document.querySelector('.typeDiv').style.display = 'block';
        let inputElement = document.getElementById('dope');
        inputElement.focus();
        
    }

    function closeCaptcha(){
        let capchaEndTime = Date.now();
        isOpened=false;
        captchaContainer.style.opacity = 0;
        document.querySelector('.typeDiv').style.display = 'none';
        let inputElement = document.getElementById('dope');
        inputElement.value = '';
        capchaInputTime = (capchaEndTime - captchaStartTime) / 1000;
        TimeDisplay.innerText = capchaInputTime.toFixed(2);
    }

    function generateCaptcha() {
        captchaText = Math.floor(10000 + Math.random() * 90000).toString();

        return captchaText;
    }

    document.addEventListener("keydown", function(event) {  
        if (event.key.toLowerCase() === 'n' && isOpened == false) {
            openCaptcha();
            TimeDisplay.innerText = ' ';
            event.preventDefault();
        } 
        if (event.key === 'Enter') {
            closeCaptcha();
        event.preventDefault();
        }

    });
});
