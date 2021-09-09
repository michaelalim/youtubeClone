// videosArray
import { videoList } from "./videoArr.js";

// sidebarArray
import { first, second, third, fourth, fifth, bottom1, bottom2 } from "./videoArr.js";

const searchBtn = document.getElementById("search-btn");
const microphoneBtn = document.getElementById("microphone");
const searchBtnSmall = document.getElementById("search-btn-850px");
const microphoneBtnSmall = document.getElementById("microphone-850px");
const categoryBtn = document.querySelectorAll("button.category");
const videosEl = document.querySelectorAll("div.video-el");
const videoTitleEl = document.querySelectorAll(".video-title");
const contentContainer = document.getElementById("video-content");
const menuBtn = document.getElementById("menu-btn");
const menuEl = document.getElementById("menu-section");
const offSidebarSpaces = document.getElementById("off-sidebar-space");


menuBtn.addEventListener("click", () => {
    menuEl.style.display = "block";

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        }
});

offSidebarSpaces.addEventListener("click", () => {

    menuEl.style.display = "none";
    
    // overrides the function window.onscroll with a blank one so that it can allow scrolling again
    window.onscroll = function() {};
})

videoDisplay(videoList);

function videoDisplay(arr) {



    arr.forEach(vids => {

        const card = document.createElement("article");
        card.classList.add("video-container");
        contentContainer.appendChild(card);

        const video = document.createElement("div");
        video.classList.add("video-el");
        card.appendChild(video);

        const innerCard = document.createElement("div");
        innerCard.classList.add("channel-row-container");
        card.appendChild(innerCard);

        const channelPic = document.createElement("img");
        channelPic.src = vids.channel;
        innerCard.appendChild(channelPic);

        const textDiv = document.createElement("div");
        textDiv.classList.add("video-texts");
        innerCard.appendChild(textDiv);

        const vidTitle = document.createElement("h5");
        vidTitle.classList.add("video-title");
        vidTitle.textContent = vids.title;
        textDiv.appendChild(vidTitle);

        const channelTitle = document.createElement("h6");
        channelTitle.classList.add("channel-title");
        channelTitle.textContent = vids.channelName;
        textDiv.appendChild(channelTitle);

        const viewsCount = document.createElement("h6");
        viewsCount.classList.add("views-count");
        viewsCount.textContent = `${vids.views} views · ${vids.age} ago`;
        textDiv.appendChild(viewsCount);

    })
}


//clicking the video
videosEl.forEach(div => {
    div.addEventListener("click", () => {
        location.href="#";
    })
})

videoTitleEl.forEach(div => {
    div.addEventListener("click", () => {
        location.href="http://youtube.com";
    })
})

searchBtn.addEventListener("click", () => {
    location.href="#";
    // videosEl.forEach(div => {
    //     div.classList.add("video-el-animation");
    // })
    // This is a test for hover effect using eventlistener of "mouseover"
});

//clicking the microphone
microphoneBtn.addEventListener("click", () => {
    location.href="#";
});

//clicking the searchButton
searchBtnSmall.addEventListener("click", () => {
    location.href="#";
});

//clicking the microphone
microphoneBtnSmall.addEventListener("click", () => {
    location.href="#";
});

//clicking the search !! this should hide other header elements and show input element
categoryBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        location.href="#";
    })
}); 


//This part is hidden, only shows when you click menu button top-left
const firstDivision = document.getElementById("first-division");
const secondDivision = document.getElementById("second-division");
const thirdDivision = document.getElementById("third-division");
const fourthDivision = document.getElementById("fourth-division");
const fifthDivision = document.getElementById("fifth-division");
const bottomUpper = document.getElementById("sixth-bottom-1");
const bottomLower = document.getElementById("sixth-bottom-2");

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
    img.src = objs.img;
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

//a test that an element made by js and an id added from js would be effective still
const offHomeBtn = document.getElementById("offHomeBtn");
offHomeBtn.addEventListener("click", () => {
    location.href="http://youtube.com";
})

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