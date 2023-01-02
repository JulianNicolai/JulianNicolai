/* jshint esversion: 6 */

function button_press(object) {
    object.classList.add("pressed");
    setTimeout(() => {
        object.classList.remove("pressed");
    }, 250);
}


function load_projects() {
    let projectItems = document.getElementById("main-content").children;

    let delay = 0;
    for (var item of projectItems) {
        if (item.id !== "header") {
            item.classList.add("directional-fade");
            delay += 30;
            item.style.animationDelay = delay + "ms";
        }
    }
}


window.onload = () => {

    if (document.title === "Projects") {
        load_projects();
    }

    let backTopLink = document.getElementById("back-to-top");

    document.addEventListener("scroll", () => {

        if (window.pageYOffset > 675) {
            backTopLink.style.opacity = 1;

            // total height of page - (current scroll position + height of viewport)
            let bottomDistance = document.documentElement.scrollHeight - (window.pageYOffset + window.innerHeight);
            let offset = 140;

            if (bottomDistance < offset) {
                // desired distace offset - distance from bottom of page + 5% of viewport
                backTopLink.style.bottom = offset - bottomDistance + (window.innerHeight * 0.05) + "px";
            } else {
                backTopLink.style.bottom = "5%";
            }

            let leftDistance = window.pageXOffset;

            if (leftDistance > 0) {
                backTopLink.style.left = -leftDistance + "px";
            } else {
                backTopLink.style.left = "auto";
            }

        } else {
            backTopLink.style.opacity = 0;
        }
    });
};