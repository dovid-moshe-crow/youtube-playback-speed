
const video = document.querySelector("video")

const panel = document.createElement("div");

panel.style.position = "fixed";
panel.style.zIndex = "999";

const speedDisplay = document.createElement('p');


const slider = document.createElement('input');
slider.addEventListener("change",() => {
  video.playbackRate =  parseInt(slider.value);
  speedDisplay.innerText = slider.value;
})

slider.type = "range";
slider.min = "0.1";
slider.max = "10";
slider.step = "0.1";

panel.appendChild(slider);
panel.appendChild(speedDisplay);

video.parentElement.parentElement.appendChild(panel)

const rightControls = document.querySelector(".ytp-right-controls");

const button = document.createElement("button");
button.style.visibility = "hidden";
button.className = "ytp-button"

const icon = document.createElement("img")

icon.style.width = "28px";
icon.style.height = "32px";
icon.style.marginTop = "8px";
icon.style.marginLeft = "8px";
icon.style.padding = "0px";
icon.draggable = false;
icon.src = chrome.runtime.getURL("icon.svg");

button.appendChild(icon)

button.onclick = () => {
    panel.style.visibility == "visible" ? panel.style.visibility = "hidden" : panel.style.visibility = "visible";
}

button.style.verticalAlign = "top";
button.style.margin = "auto";


rightControls.insertBefore(button,rightControls.querySelector(".ytp-settings-button"))
