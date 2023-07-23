let stashOpen = false; // Variable to keep track of stash/inventory status
let hideTimer = null; // Timer for hiding the UI
let greenFlashTimer = null; // Timer for removing the green flash class

window.addEventListener('message', function(event) {
    if (event.data.action === "show") {
        const container = document.getElementById("container");
        const box = document.getElementById("box");
        const title = document.getElementById("title");
        const text = document.getElementById("text");
        

        // Clean up the content before setting it
        const cleanContent = event.data.text.replace(/<\/?[^>]+(>|$)/g, "");
        text.innerText = cleanContent;

        if (!stashOpen) {
            container.style.display = "block";
            box.classList.add("fadeIn");
        }

        if (event.data.isStash) {
            stashOpen = true;
            box.classList.add("greenFlash");
            clearTimeout(hideTimer); // Clear the hide timer if it was set
            
            // Set a new timer to remove the green flash class after 1500ms
            greenFlashTimer = setTimeout(() => {
                box.classList.remove("greenFlash");
            }, 1500);
        } else {
            stashOpen = false;
        }

        // Set a new timer to hide the UI after 17000ms if not opening stash
        hideTimer = setTimeout(() => {
            box.classList.remove("fadeIn");
            container.style.display = "none";
        }, 17000);
    } else if (event.data.action === "hide") {
        stashOpen = false;
        const box = document.getElementById("box");
        const container = document.getElementById("container");
        box.classList.remove("fadeIn");
        container.style.display = "none";
        clearTimeout(hideTimer); // Clear the hide timer if it was set
        clearTimeout(greenFlashTimer); // Clear the green flash timer if it was set
    }
});

// Example event handler to receive messages from FiveM
function receiveMessageFromFiveM(event) {
    // Check if the event data contains the necessary information
    if (event.data && event.data.action && typeof event.data.isStash !== 'undefined') {
        // Dispatch the message to the message event listener
        window.dispatchEvent(new MessageEvent('message', { data: event.data }));
    }
}

// Add the event handler to receive messages from FiveM
window.addEventListener('messageFromFiveM', receiveMessageFromFiveM);
