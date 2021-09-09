let css = `
*, *::before, *::after{
    box-sizing: border-box;
}

body{
    margin: 0;
    padding: 0;
    background: #212121;
    color: #fff;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.main-container{
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(15, 1fr);
    grid-auto-rows: 1.5fr 1fr auto;
    grid-template-areas: 
        "n h h h h h h h h h h h h h h"
        "n c c c c c c c c c c c c c c"
        "n v v v v v v v v v v v v v v";
}

.header{
    background: #212121;
    position: fixed;
    height: 60px;
    right: 0;
    width: calc(100% - 85px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #333;
    grid-area: h;
    z-index: 5;
    opacity: 0.975;
}

.logo-section,
.others-section{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
}

.logo-section{
    justify-content: left;
    align-items: center;
    position: relative;
    width: 100px;
    flex: 1 1 100px;
}

.search-bar-section,
.search-bar-section form{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.search-bar-section{
    width: 70%;
    height: 100%;
    flex: 1 4 70%;
}

.others-section{
    width: 300px;
}

.others-section .microphone,
.others-section button{
    display: none;
}

.others-section button:hover,
.others-section .microphone:hover{
    cursor: pointer;
}



nav.sidebar img{
    position: absolute;
    display: block;
    height: 55px;
    width: 80px;
    left: 80px;
}

.search-bar-section form{
    width: 100%;
}

.search-bar-section input{
    display: block;
    width: 65%;
    background: #111;
    border: 1px solid #333;
    height: 31px;
    color: #bbb;
    padding-left: 15px;
    font-size: 1rem;
    outline: none;
}

.search-bar-section input:focus{
    border: 1px solid rgb(65, 104, 131);
}

.search-bar-section button{
    height: 31px;
    border-radius: 0;
    border: none;
    background: #333;
    color: #999;
    width: 80px;
}

.search-bar-section button:hover{
    cursor: pointer;    
    color: #ccc;
}

.search-bar-section .microphone{ 
    margin-left: 15px;
    background: #111;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#microphone:hover{
    cursor: pointer;
}

.search-bar-section .microphone span{
    font-size: 1.4rem;
    color: #eee;
}
.others-section .profile-link{
    border-radius: 50%;
    height: 35px;
    overflow: hidden;
}

.others-section img{
    height: 35px;
}

.others-section a{
    display: block;
}

.others-section a span{
    font-size: 1.8rem;
    color: #eee;
}

.others-section a span:visited{
    color: #eee;
}

nav.sidebar{
    position: fixed;
    grid-area: n;
    display: flex;
    flex-direction: column;
    height: 100vh;    
    width: 85px;
    z-index: 10;
    background: #222;
}

nav.sidebar button{
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #222;
    border: none;
    outline: none;
    color: #eee;
    font-size: 0.6rem;
    margin-bottom: 10px;
    width: 100%;
}

nav.sidebar button:hover{
    background: #444;
    border: 3px solid #444;
    cursor: pointer;
}

nav.sidebar .menu-btn{
    height: 60px;
    padding-top: 15px;
}

nav.sidebar .menu-btn:hover{
    background: none;
    border: none;
}

nav.sidebar button .side-icon{
    font-size: 1.8rem;
    margin-bottom: 10px;
}

.menu-section{
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 15;
    background: #08080899;
    display: none;
    /* overflow: hidden; */
}

.off-sidebar-space{
    position: absolute;
    right: 0;
    top: 0;
    width: calc(100% - 240px);
    height: 100vh;
}

.off-sidebar-container{
    opacity: 1;
    width: 240px;
    background: #222;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: auto;
}

.off-menu-logo{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 3px;
}

.off-menu-logo img{
    height: 55px;
    width: 80px;
    left: 80px;
}

.off-menu-logo .off-menu-btn{
    background: #222;
    border: none;
    outline: none;
    color: #ccc;
    padding: 5px;
}

.off-btn{
    position: relative;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 40px;
    border: none;
    font-weight: bold;
    color: #eee;
    margin: 0;
    background: transparent;
}

.off-btn:hover{
    cursor: pointer;
    background: #444;
}

.off-current{
    background: #444;
}

.off-current:hover{
    background: #777;
}

.off-home-btn{
    margin-top: 12px;
    padding-top: 0;
}

.off-btn span{
    display: block;
}

.off-side-icon{
    position: absolute;
    left: 30px;
}

.off-btn-text{
    position: absolute;
    left: 80px;
}

.section-division{
    border-bottom: 1px solid #333;
    background:#222;
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100%;
    padding: 12px 0;
}

.third-division h6,
.fourth-division h6{
    margin: 5px 20px;
    font-size: 0.8rem;
    font-weight: bold;
    color: #aaa;
}

.third-division span{
    font-size: 0.8rem;
}

.third-division .off-btn-image-subs{
    position: absolute;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    overflow: hidden;
    left: 30px;
}

.third-division img{
    height: 25px;
    width: 25px;
}

.third-division > div:nth-child(2),
.fourth-division > button:nth-child(2){
    margin-top: 10px;
}

.third-division button span{
    font-size: 0.9rem;
}

.third-division .off-side-icon.material-icons-outlined{
    font-size: 1.5rem;
}

.sixth-division a{
    text-decoration: none;
    font-size: 0.65rem;
    display: inline-block;
    font-weight: bold;
    color: #aaa;
    margin: 0 3px;
}

.sixth-division a:visited{
    color: #aaa;
}

.sixth-division div{
    margin: 10px 30px;
}

.sixth-division .copyright{
    font-size: 0.65rem;
    display: block;
    margin: 10px 30px;
    color: #888;
}

i.fa{
    font-size: 24px;
}

@media all and (max-width: 850px){

    .search-bar-section input,
    .search-bar-section .microphone,
    .search-bar-section button{
        display: none;
    }

    .others-section .microphone,
    .others-section button{
        display: initial;
    }

    .others-section button{
        background: #222;
        color: #eee;
        border: none;
    }
}`

let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="index.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YouTube Clone</title>
</head>
<body class = "scrollbar" id="body">

    <div class="main-container" id="main-container">
        <header class="header">
            <div class="logo-section">
                <!-- I put the logo in the sidebar in absolute position so that it won't get behind the sidebar, I hope I could fix this -->
            </div> 
            <div class="search-bar-section">
                <form>
                    <input type="text" name="seach-bar" placeholder="Search">
                    <button type="submit" id="search-btn"><span class="material-icons-sharp">search</span></button>
                    <div class="microphone" id="microphone"><span class="material-icons-sharp">mic</span></div>
                </form>
            </div>
            <div class="others-section">
                <button type="submit" id="search-btn-850px"><span class="material-icons-sharp">search</span></button>
                <div class="microphone" id="microphone-850px"><span class="material-icons-sharp">mic</span></div>
                <a href="#" class="head-link"><span class="material-icons-outlined">video_call</span></a>
                <a href="#" class="head-link"><span class="material-icons-outlined">apps</span></a>
                <a href="#" class="head-link"><span class="material-icons-outlined">notifications</span></a>
                <a href="#" class="head-link profile-link"><img src="../imgs/profile.jpg"></a>
            </div>
        </header>

        <nav class="sidebar">
            <a href="#"><img src="../imgs/logo.png"></a>
            <button class="sidebar-btn menu-btn" id="menu-btn">
                <span class="side-icon material-icons-sharp">menu</span>
            </button>
            <button class="sidebar-btn home-btn">
                <span class="home-icon side-icon material-icons-outlined">home</span>
                <span class="label">Home</span>
            </button>
            <button class="sidebar-btn explore-btn" id="explore-btn">
                <span class="side-icon material-icons">explore</span>
                <span class="label">Explore</span>
            </button>
            <button class="sidebar-btn sub-btn">
                <span class="side-icon material-icons-outlined">subscriptions</span>
                <span class="label">Subscriptions</span>
            </button>
            <button class="sidebar-btn library-btn">
                <span class="side-icon material-icons-outlined">video_library</span>
                <span class="label">Library</span>
            </button>
        </nav>
    </div>

    <!-- Menu screen -->
    <div class="menu-section" id="menu-section">
            <div class="off-sidebar-container" id="menu-section-sidebar">
                
                <div class="off-sidebar off-menu-logo">
                    <button class="off-sidebar-btn off-menu-btn" id="off-menu-btn">
                        <span class="side-icon material-icons-sharp">menu</span>
                    </button>
                    <a href="#"><img src="../imgs/logo.png"></a>
                </div>
                <div class="section-division first-division" id="first-division"></div>
                <div class="section-division second-division" id="second-division"></div>
                <div class="section-division third-division" id="third-division">
                    <h6 class="section-title">SUBSCRIPTIONS</h6>
                </div>
                <div class="section-division fourth-division" id="fourth-division">
                    <h6 class="section-title">MORE FROM YOUTUBE</h6>
                    <button class="off-sidebar off-btn">
                        <i class="fa off-side-icon">&#xf16a;</i>
                        <span class="off-btn-text">YouTube Premium</span>
                    </button>
                </div>
                <div class="section-division fifth-division" id="fifth-division"></div>
                <div class="section-division sixth-division">
                    <div class = "off-screen-bottom bottom-1" id="sixth-bottom-1"></div>
                    
                    <div class = "off-screen-bottom bottom-2" id="sixth-bottom-2"></div>

                    <span class="copyright">© 2021 Google LLC</span>
                </div>
            </div>

        <div class="off-sidebar-space" id="off-sidebar-space"></div>
    </div>

    
    <script type="module" src="index.js"></script>  
</body>
</html>
`

let js = `// sidebarArray
import { first, second, third, fourth, fifth, bottom1, bottom2 } from "../base.js";

const searchBtn = document.getElementById("search-btn");
const microphoneBtn = document.getElementById("microphone");
const searchBtnSmall = document.getElementById("search-btn-850px");
const microphoneBtnSmall = document.getElementById("microphone-850px");
const menuBtn = document.getElementById("menu-btn");
const menuEl = document.getElementById("menu-section");
const offSidebarSpaces = document.getElementById("off-sidebar-space");
const exploreBtn = document.getElementById("explore-btn");

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

exploreBtn.addEventListener("click", () => {
    location.href="./explore/index.html"
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
    img.src = PUTOBJECTHERE;
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
}`