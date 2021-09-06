const searchBtn = document.getElementById("search-btn");
const microphoneBtn = document.getElementById("microphone");
const searchBtnSmall = document.getElementById("search-btn-850px");
const microphoneBtnSmall = document.getElementById("microphone-850px");
const categoryBtn = document.querySelectorAll("button.category");
const videosEl = document.querySelectorAll("div.video-el");
const videoTitleEl = document.querySelectorAll(".video-title");

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

