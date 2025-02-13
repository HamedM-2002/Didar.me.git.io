/* slider right & left clicking button function */

document.addEventListener("DOMContentLoaded", function () {
    let maxLeft = 1305;
    let minLeft = 0;

    document.getElementById("slider-next").addEventListener("click", function () {
        moveTarget(145);
    });

    document.getElementById("slider-prev").addEventListener("click", function () {
        moveTarget(-145);
    });

    function moveTarget(change) {
        let target = document.getElementById("slider-track");
        let currentLeft = parseInt(window.getComputedStyle(target).left, 10) || 0;
        let newLeft = currentLeft + change;

        if (newLeft > maxLeft) {
            newLeft = maxLeft;
        } else if (newLeft < minLeft) {
            newLeft = minLeft;
        }

        target.style.left = newLeft + "px";
        updateButtons(newLeft);
    }

    function updateButtons(position) {
        let prevButton = document.getElementById("slider-prev");
        let nextButton = document.getElementById("slider-next");

        if (position === minLeft) {
            prevButton.classList.add("slider-button-disable");
            prevButton.classList.remove("slider-button");
        } else {
            prevButton.classList.add("slider-button");
            prevButton.classList.remove("slider-button-disable");
        }

        if (position === maxLeft) {
            nextButton.classList.add("slider-button-disable");
            nextButton.classList.remove("slider-button");
        } else {
            nextButton.classList.add("slider-button");
            nextButton.classList.remove("slider-button-disable");
        }
    }

    updateButtons(0); // Initialize button states
});

/* click & selected slider-item function */

document.addEventListener("DOMContentLoaded", function () {
    // Initially set the item with data-index="1" as selected
    document.querySelector('.slider-item[data-index="1"]').classList.add("slider-item-selected");

    // Add click event listener to all slider items
    document.querySelectorAll(".slider-item").forEach(item => {
        item.addEventListener("click", function () {
            // Remove the selected class from the currently selected item
            document.querySelector(".slider-item-selected").classList.remove("slider-item-selected");

            // Add the selected class to the clicked item
            this.classList.add("slider-item-selected");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let maxLeft = 1305;
    let minLeft = 0;
    let startX, currentX;

    function moveTarget(change) {
        let target = document.getElementById("slider-track");
        if (!target) {
            console.error("slider-track element not found");
            return;
        }
        let currentLeft = parseInt(window.getComputedStyle(target).left, 10) || 0;
        let newLeft = currentLeft + change;

        if (newLeft > maxLeft) newLeft = maxLeft;
        if (newLeft < minLeft) newLeft = minLeft;

        target.style.left = newLeft + "px";
        updateButtons(newLeft);
    }

    function updateButtons(position) {
        let prevButton = document.getElementById("slider-prev");
        let nextButton = document.getElementById("slider-next");

        if (position === minLeft) {
            prevButton.classList.add("slider-button-disable");
            prevButton.classList.remove("slider-button");
        } else {
            prevButton.classList.add("slider-button");
            prevButton.classList.remove("slider-button-disable");
        }

        if (position === maxLeft) {
            nextButton.classList.add("slider-button-disable");
            nextButton.classList.remove("slider-button");
        } else {
            nextButton.classList.add("slider-button");
            nextButton.classList.remove("slider-button-disable");
        }
    }

    let sliderTrack = document.getElementById("slider-track");
    if (!sliderTrack) {
        console.error("slider-track element not found in DOMContentLoaded event");
        return;
    }

    sliderTrack.addEventListener("touchstart", function (e) {
        startX = e.touches[0].clientX;
        console.log("Touch start:", startX);
    });

    sliderTrack.addEventListener("touchmove", function (e) {
        currentX = e.touches[0].clientX;
        console.log("Touch move:", currentX);
    });

    sliderTrack.addEventListener("touchend", function () {
        console.log("Touch end:", currentX);
        let change = currentX - startX;
        if (Math.abs(change) > 50) { // only consider significant moves
            moveTarget(change);
        }
    });

    updateButtons(0); // Initialize button states
});



/* change img function */

