// videosArray
import { videoList } from "../../dependencies/arrays/videos.js";

//sidebar
import { startUp } from "../../dependencies/elements/sidebar.js";

//categoriesArr
import { categories } from "../../dependencies/arrays/categories.js"



startUp("Home");

const videosEl = document.querySelectorAll("div.video-el");
const contentContainer = document.getElementById("video-content");
const categoryContainer = document.getElementById("categories-container");
videoDisplay(videoList);
//I put it here cause the video title only appears after here from the call of the videoDisplay function
const videoTitleEl = document.querySelectorAll(".video-title");


//clicking the video
videosEl.forEach(div => {
    div.addEventListener("click", () => {
        location.href="#";
    })
})

videoTitleEl.forEach(div => {
    div.addEventListener("click", () => {
        location.href="#";
    })
})

categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.classList.add("category");
    if (cat.name === "All"){
        btn.classList.add("active");
        btn.setAttribute("id", `All`)
    }
    btn.textContent = cat.name;
    btn.addEventListener("click", () => {
        location.href = cat.link;
    });
    categoryContainer.appendChild(btn);
}); 

const categoryBtn = document.querySelectorAll("button.category");

//clicking the search !! this should hide other header elements and show input element
categoryBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        location.href="#";
    })
}); 

function videoDisplay(arr) {

    arr.forEach(vids => {

        const card = document.createElement("article");
        card.classList.add("video-container");
        contentContainer.appendChild(card);

        const video = document.createElement("div");
        video.classList.add("video-el");
        video.addEventListener("click", () => {
            location.href = "../video/index.html"
        })
        card.appendChild(video);

        const innerCard = document.createElement("div");
        innerCard.classList.add("channel-row-container");
        card.appendChild(innerCard);

        const channelPic = document.createElement("img");
        channelPic.src = `../${vids.channel}`;
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