// sidebarArray
import { first, second, third, fourth, fifth, bottom1, bottom2 } from "./arrays.js";

const menuBtn = document.getElementById("menu-btn");
const menuEl = document.getElementById("menu-section");
const offSidebarSpaces = document.getElementById("off-sidebar-space");
const sidebarAnimation = document.getElementById("menu-section-sidebar");

menuBtn.addEventListener("click", () => {
    
    sidebarAnimation.classList.add("sidebar-ani");
    menuEl.style.display = "block";
    setTimeout(() => {
        sidebarAnimation.classList.remove("sidebar-ani");
    }, 150);

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        }

});

offSidebarSpaces.addEventListener("click", () => {
   
    sidebarAnimation.classList.add("sidebar-ani-rev");
    setTimeout(() => {
        sidebarAnimation.classList.remove("sidebar-ani-rev");
        menuEl.style.display = "none";
    }, 150);
    
    // overrides the function window.onscroll with a blank one so that it can allow scrolling again
    window.onscroll = function() {};

    
})
//This part is hidden, only shows when you click menu button top-left
const firstDivision = document.getElementById("first-division");
const secondDivision = document.getElementById("second-division");
const thirdDivision = document.getElementById("third-division");
const fourthDivision = document.getElementById("fourth-division");
const fifthDivision = document.getElementById("fifth-division");
const bottomUpper = document.getElementById("sixth-bottom-1");
const bottomLower = document.getElementById("sixth-bottom-2");


    
export function startUp() {
let count = 0;
first.forEach((objs) => {
    //buttoncreation with their respective classes
    const offBtn = document.createElement("button");
    offBtn.classList.add("off-sidebar", "off-btn");
    if(count === 0){
        offBtn.classList.add("off-current", "off-home-btn");
    }
    offBtn.setAttribute("id", objs.id);
    firstDivision.appendChild(offBtn);
    //icon inside the buttons
    const offBtnIcon = document.createElement("span");
    offBtnIcon.classList.add("off-side-icon", "material-icons-outlined");
    if(count === 0){
        offBtnIcon.classList.add("off-home-icon");
    }
    offBtnIcon.textContent = objs.spanName;
    offBtn.appendChild(offBtnIcon);
    //text inside the buttons
    const offBtnText = document.createElement("span");
    offBtnText.classList.add("off-btn-text");
    offBtnText.textContent = objs.title;
    offBtn.appendChild(offBtnText);
    count++;
})

second.forEach((objs) => {
    const offBtn = document.createElement("button");
    offBtn.classList.add("off-sidebar", "off-btn");
    offBtn.setAttribute("id", objs.id);
    secondDivision.appendChild(offBtn);
    //icon inside the buttons
    const offBtnIcon = document.createElement("span");
    offBtnIcon.classList.add("off-side-icon", "material-icons-outlined");
    if(count === 0){
        offBtnIcon.classList.add("off-home-icon");
    }
    offBtnIcon.textContent = objs.spanName;
    offBtn.appendChild(offBtnIcon);
    //text inside the buttons
    const offBtnText = document.createElement("span");
    offBtnText.classList.add("off-btn-text");
    offBtnText.textContent = objs.title;
    offBtn.appendChild(offBtnText);
})

addSeeMoreInSecond();

third.forEach((objs) => {
    const offBtn = document.createElement("div");
    offBtn.classList.add("off-sidebar", "off-btn");
    offBtn.setAttribute("id", objs.id);
    thirdDivision.appendChild(offBtn);
    //div for shaping the image
    const circle = document.createElement("div");
    circle.classList.add("off-btn-image-subs");
    offBtn.appendChild(circle);
    //img
    const img = document.createElement("img");
    img.src = `../${objs.img}`;
    circle.appendChild(img);
    //channel names
    const offBtnText = document.createElement("span");
    offBtnText.classList.add("off-btn-text");
    offBtnText.textContent = objs.title;
    offBtn.appendChild(offBtnText);
    
})

//will add the see more here since its a button while others consist of different things like
//img and others are div instead of a button
addSeeMoreInThird();

fourth.forEach((objs) => {

    const offBtn = document.createElement("button");
    offBtn.classList.add("off-sidebar", "off-btn");
    offBtn.setAttribute("id", objs.id);
    fourthDivision.appendChild(offBtn);

    const offBtnIcon = document.createElement("span");
    offBtnIcon.classList.add("off-side-icon", "material-icons-outlined");
    offBtnIcon.textContent = objs.spanName;
    offBtn.appendChild(offBtnIcon);

    const offBtnText = document.createElement("span");
    offBtnText.classList.add("off-btn-text");
    offBtnText.textContent = objs.title;
    offBtn.appendChild(offBtnText);
})

fifth.forEach((objs) => {
    const offBtn = document.createElement("button");
    offBtn.classList.add("off-sidebar", "off-btn");
    offBtn.setAttribute("id", objs.id);
    fifthDivision.appendChild(offBtn);

    const offBtnIcon = document.createElement("span");
    offBtnIcon.classList.add("off-side-icon", "material-icons-outlined");
    offBtnIcon.textContent = objs.spanName;
    offBtn.appendChild(offBtnIcon);

    const offBtnText = document.createElement("span");
    offBtnText.classList.add("off-btn-text");
    offBtnText.textContent = objs.title;
    offBtn.appendChild(offBtnText);
})

bottom1.forEach((links) => {
    const link = document.createElement("a");
    link.href = links.link;
    link.textContent = links.title;
    bottomUpper.appendChild(link);
})

bottom2.forEach((links) => {
    const link = document.createElement("a");
    link.href = links.link;
    link.textContent = links.title;
    bottomLower.appendChild(link);
})

function addSeeMoreInSecond() {
    const offBtn = document.createElement("button");
    offBtn.classList.add("off-sidebar", "off-btn");
    offBtn.setAttribute("id", "offArrowDown1Btn");
    secondDivision.appendChild(offBtn);

    const offBtnIcon = document.createElement("span");
    offBtnIcon.classList.add("off-side-icon", "material-icons-outlined");
    offBtnIcon.textContent = "keyboard_arrow_down";
    offBtn.appendChild(offBtnIcon);

    const offBtnText = document.createElement("span");
    offBtnText.classList.add("off-btn-text");
    offBtnText.textContent = "Show more";
    offBtn.appendChild(offBtnText);
}

function addSeeMoreInThird() {
    const offBtn = document.createElement("button");
    offBtn.classList.add("off-sidebar", "off-btn");
    offBtn.setAttribute("id", "offArrowDown2Btn");
    thirdDivision.appendChild(offBtn);

    const offBtnIcon = document.createElement("span");
    offBtnIcon.classList.add("off-side-icon", "material-icons-outlined");
    offBtnIcon.textContent = "keyboard_arrow_down";
    offBtn.appendChild(offBtnIcon);

    const offBtnText = document.createElement("span");
    offBtnText.classList.add("off-btn-text");
    offBtnText.textContent = "Show more";
    offBtn.appendChild(offBtnText);
}

}