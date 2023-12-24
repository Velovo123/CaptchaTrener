let captchaText = 0;
let isOpened = false;

document.addEventListener("DOMContentLoaded", function() {
    let captchaContainer = document.getElementById("captchaContainer");
    let captchaCanvas = document.getElementById("captchaCanvas");

    function openCaptcha() {
        isOpened = true;
        
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
        
    }

    function generateCaptcha() {
        captchaText = Math.floor(10000 + Math.random() * 90000).toString();

        return captchaText;
    }

    document.addEventListener("keydown", function(event) {  
        if (event.key.toLowerCase() === 'n' && isOpened == false) {
            openCaptcha();
        }
    });
});
