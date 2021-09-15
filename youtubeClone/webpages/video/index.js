// this is the whole sidebar

import { startUp } from "../../dependencies/elements/sidebar.js"

// buttons on the LIKE row

import { likeAreaArrs } from "./videoArrEls.js";

startUp();

const likeAreaContainer = document.getElementById("like-area-btns");

likeAreaArrs.forEach((btns) => {
    const likeDislikeContainer = document.createElement("div");
    likeDislikeContainer.classList.add("like-dislike-btns");
    likeAreaContainer.appendChild(likeDislikeContainer);
    
    if (btns.id === "like-btn" || btns.id === "dislike-btn"){
        const btn = document.createElement("button");
        btn.classList.add("btn", btns.uniqueClass);
        btn.setAttribute("id", btns.id);
        likeDislikeContainer.appendChild(btn);

        const btnIcon = document.createElement("span");
        // to make like button not be outlined so that it will look like the button is "LIKED"
        if(btns.id === "like-btn"){
            btnIcon.classList.add("material-icons");
        } else {
            btnIcon.classList.add("material-icons-outlined");
        }
        btnIcon.textContent = btns.spanName;
        btn.appendChild(btnIcon);
        //when the number is more than 1000, it will convert it to K, like 1000:1K
        if (btns.number > 1000){
            btns.number = `${btns.number / 1000}K`
            btn.innerHTML += ` ${btns.number}`;
        } else {
            btn.innerHTML += ` ${btns.number}`;
        }
    } else {
        const btn = document.createElement("button");
        btn.classList.add("btn", btns.uniqueClass);
        btn.setAttribute("id", btns.id);
        likeAreaContainer.appendChild(btn);

        const btnIcon = document.createElement("span");
        btnIcon.classList.add("material-icons-outlined");
        btnIcon.innerHTML = btns.spanName;
        btn.appendChild(btnIcon);

        const btnText = document.createElement("span");
        btnText.classList.add("btnTextLikeRow");
        btnText.textContent = btns.textname;
        btn.appendChild(btnText);
    }
})

const descSeeMoreBtn = document.getElementById("see-more");
const dots = document.getElementById("dots");
const hiddenMsgs = document.querySelectorAll(".more");

descSeeMoreBtn.addEventListener("click", () => {
   
    if (descSeeMoreBtn.textContent === "SHOW LESS"){
        hiddenMsgs.forEach((msg) => {
            msg.classList.add("more");
            dots.style.display = "inline-block";
            descSeeMoreBtn.textContent = "SHOW MORE"
        })
    } else {
        hiddenMsgs.forEach((msg) => {
            msg.classList.remove("more");
            dots.style.display = "none";
            descSeeMoreBtn.textContent = "SHOW LESS"
        })
    }
})

const commentBar = document.getElementById("add-comment");
const sendCommentBtn = document.getElementById("send-comment");

commentBar.addEventListener("input", () => {
    if(commentBar.value){
        sendCommentBtn.style.background = "#2196f3";
        sendCommentBtn.style.color = "#222";
    } else {
        sendCommentBtn.style.background = "#333";
        sendCommentBtn.style.color = "#777";
    }
});