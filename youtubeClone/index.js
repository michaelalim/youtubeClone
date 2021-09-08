import { videoList } from "./videoArr.js";

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

