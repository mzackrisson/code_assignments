let selectedParagraph = [];
let h2Element = document.querySelector("h2");
let mixInterval; // Variable to store the interval ID

function addEventListenerToAllParagraphs() {
    let allParagraphs = document.querySelectorAll("p");

    allParagraphs.forEach(function(paragraph) {
        paragraph.addEventListener("click", function() {
            let spanElement = document.createElement("span");
            spanElement.textContent = paragraph.textContent;
            document.querySelector(".numberContainer").appendChild(spanElement);
            selectedParagraph.push(paragraph);
        });
    });
}

function mixItUp() {
    for (let i = selectedParagraph.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [selectedParagraph[i], selectedParagraph[j]] = [selectedParagraph[j], selectedParagraph[i]];
    }

    document.querySelector(".numberContainer").innerHTML = "";

    selectedParagraph.forEach(function(paragraph) {
        let spanElement = document.createElement("span");
        spanElement.textContent = paragraph.textContent;
        document.querySelector(".numberContainer").appendChild(spanElement);
    });
}

function startMixing() {
    // Set up the interval for mixing and showing the text every 6 seconds
    mixInterval = setInterval(function() {
        mixItUp();
        showTheText();
    }, 6000);
}

function stopMixing() {
    // Clear the interval when needed (e.g., before setting up a new interval)
    clearInterval(mixInterval);
}

function showTheText() {
    if (h2Element) {
        let previousVisibility = h2Element.style.visibility;

        // Toggle visibility for blinking effect
        h2Element.style.visibility = (previousVisibility === 'hidden') ? 'visible' : 'hidden';

        // Check if visibility has changed
        if (h2Element.style.visibility !== previousVisibility) {
            // Visibility has changed, set a timer (e.g., 2 seconds)
            setTimeout(function() {
            }, 2000);
        }
    }
}

// Set the global h2Element variable
h2Element = document.querySelector("h2");

// Call the initial setup
addEventListenerToAllParagraphs();

// Start mixing
startMixing();
