// sidebarArray
import { first, second, third, fourth, fifth, bottom1, bottom2, openSidebar } from "../arrays/sidebarArr.js";

export function startUp(page) {

    const sidebar = document.getElementById("sidebar-nav");
    const searchBtn = document.getElementById("search-btn");
    const microphoneBtn = document.getElementById("microphone");
    const searchBtnSmall = document.getElementById("search-btn-850px");
    const microphoneBtnSmall = document.getElementById("microphone-850px");
    const sidebarAnimation = document.getElementById("menu-section-sidebar");

    let count = 0;

    openSidebar.forEach((objs) => {
        const btn = document.createElement("button");
        btn.classList.add("sidebar-btn", objs.uniqueClass);
        btn.setAttribute("id", objs.id);
        sidebar.appendChild(btn);

        const btnIcon = document.createElement("span");
        btnIcon.classList.add("side-icon")
        if (page === objs.title){
            btnIcon.classList.add("material-icons");
        } else {
            btnIcon.classList.add("material-icons-outlined");
        }
        btnIcon.textContent = objs.spanName;
        btn.appendChild(btnIcon);

        const btnText = document.createElement("span");
        btnText.classList.add("label");
        btnText.textContent = objs.title;
        btn.appendChild(btnText);
        // event listener for each
        if (count !== 0){ 
            btn.addEventListener("click", () => {
                location.href = objs.link;
            })
        }
        // this is to not add an event listener to the menu button
        count++;
    })

    const menuBtn = document.getElementById("menu-btn");
    const menuEl = document.getElementById("menu-section");
    const offMenuBtn = document.querySelectorAll(".close-menu");

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

    offMenuBtn.forEach((closemenu) => {
        closemenu.addEventListener("click", () => {
        
            sidebarAnimation.classList.add("sidebar-ani-rev");
            setTimeout(() => {
                sidebarAnimation.classList.remove("sidebar-ani-rev");
                menuEl.style.display = "none";
            }, 150);
            
            // overrides the function window.onscroll with a blank one so that it can allow scrolling again
            window.onscroll = function() {};

            
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


    //opensidebar dom inputs



    //This part is hidden, only shows when you click menu button top-left
    const firstDivision = document.getElementById("first-division");
    const secondDivision = document.getElementById("second-division");
    const thirdDivision = document.getElementById("third-division");
    const fourthDivision = document.getElementById("fourth-division");
    const fifthDivision = document.getElementById("fifth-division");
    const bottomUpper = document.getElementById("sixth-bottom-1");
    const bottomLower = document.getElementById("sixth-bottom-2");


    first.forEach((objs) => {
        //buttoncreation with their respective classes
        const offBtn = document.createElement("button");
        offBtn.classList.add("off-sidebar", "off-btn");
        offBtn.setAttribute("id", objs.id);
        firstDivision.appendChild(offBtn);
        //icon inside the buttons
        const offBtnIcon = document.createElement("span");
        offBtnIcon.classList.add("off-side-icon");
        if (page === objs.title){
            offBtnIcon.classList.add("material-icons");
            offBtn.classList.add("off-current");
        } else {
            offBtnIcon.classList.add("material-icons-outlined");
        }
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
        //button event listeners
        offBtn.addEventListener("click", () => {
            location.href = objs.link;
        })
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
        if (page === objs.title){
            offBtn.classList.add("off-current");
            offBtnIcon.classList.add("material-icons");
        }
        offBtnIcon.textContent = objs.spanName;
        offBtn.appendChild(offBtnIcon);
        //text inside the buttons
        const offBtnText = document.createElement("span");
        offBtnText.classList.add("off-btn-text");
        offBtnText.textContent = objs.title;
        offBtn.appendChild(offBtnText);
        //button event listeners
        offBtn.addEventListener("click", () => {
            location.href = objs.link;
        });
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