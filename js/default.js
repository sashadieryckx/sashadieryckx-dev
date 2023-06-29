/* CURSOR */
document.body.style.cursor = "none";

let cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

var follow = document.createElement("div");
follow.classList.add("follow");
document.body.appendChild(follow);

function move(obj, event) {
    obj.style = "";
    obj.style.top = event.clientY + "px";
    obj.style.left = event.clientX + "px";
}

if (cursor) {
    window.addEventListener("mousemove", function(event) {
        let e = event;
        let tar = e.target;
        let f = follow;
        let c = cursor;

        if (tar.tagName == "a") {
            c.style.backgroundColor = "transparent";

            f.style.top = tar.offsetTop + "px";
            f.style.left = tar.offsetLeft + "px";
            f.style.width = tar.clientWidth + "px";
            f.style.height = tar.clientHeight + "px";

            f.classList.add("on-focus");
        } else {
            move(c, e);
            move(f, e);
            f.classList.remove("on-focus");
        }
    });
}

/* MOBILE MENU ANIMATION */
let timeline1 = new TimelineMax({paused: true});

timeline1.staggerFrom(".menu ul li", 1.5, {
    ease: Expo.easeInOut,
    opacity: 0
},0.1, "label-=5");
timeline1.to(".menu", 1, {
    ease: Expo.easeInOut,
    top: "0%",
    delay: -6
});
timeline1.to(".one", 0.5, {
    ease: Expo.easeInOut,
    y: 6,
    rotation: 45,
    delay: -3
});
timeline1.to(".two", 0.5, {
    ease: Expo.easeInOut,
    y: -6,
    rotation: -45,
    delay: -3
});
timeline1.to(".three", 0.5, {
    ease: Expo.easeInOut,
    y: 0,
    top: -60,
    opacity: 0,
    delay: -3
});

timeline1.reverse(1);

$(document).on("click", ".toggle-btn", function() {
    timeline1.reversed(!timeline1.reversed());
});
$(document).on("click", "a", function() {
    timeline1.reversed(!timeline1.reversed());
});

// LOCO SCROLL
const scroll = new LocomotiveScroll({
    el: document.getElementById('main-content'),
    smooth: true,
    multiplier: .2
});


