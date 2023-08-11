const htmlCode = document.getElementById('html-code');
const cssCode = document.getElementById('css-code');
const runButton = document.getElementById('run-button');
const webOutput = document.getElementById('web-output');
const jsCode = document.getElementById('js-code');

//clearing console before function call
console.clear();
function outputWindow() {


    // Clear previous outputs
    webOutput.src = 'about:blank';
    // Compile and display HTML, CSS, and JavaScript
    const combinedCode = htmlCode.value + "<style>" + cssCode.value + "</style>" + "<script>" + jsCode.value + "</scr+" + "ipt>";
    webOutput.contentDocument.open();
    webOutput.contentDocument.write(combinedCode);
    webOutput.contentDocument.close();

    captureConsoleOutput();


}
runButton.addEventListener('click', outputWindow);
htmlCode.addEventListener('keyup', outputWindow);
cssCode.addEventListener('keyup', outputWindow);
