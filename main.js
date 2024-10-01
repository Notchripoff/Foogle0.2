const knowledgeBase = {
    "what is the capital of france": "Paris",
    "who wrote hamlet": "William Shakespeare",
    // ... more questions and answers
};

function search(query) {
    const normalizedQuery = query.toLowerCase();
    for (const key in knowledgeBase) {
        if (key.toLowerCase().includes(normalizedQuery)) {
            return knowledgeBase[key];
        }
    }
    return "I couldn't find an answer for that.";
}

// Get the search input and output elements
const searchInput = document.getElementById('search-input');
const searchOutput = document.getElementById('search-output');

// Event listener for the search button
searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        const query = searchInput.value;
        const answer = search(query);
        searchOutput.textContent = answer;
    }
});
