// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggle.textContent = 'Toggle Dark Mode';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeToggle.textContent = 'Toggle Light Mode';
    }
});

// Search Functionality
const searchInput = document.getElementById('search-input');
const posts = document.querySelectorAll('.post');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    posts.forEach(post => {
        const title = post.querySelector('h2').textContent.toLowerCase();
        const content = post.querySelector('p').textContent.toLowerCase();
        if (title.includes(query) || content.includes(query)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
});

// Voice Search
const voiceSearch = document.getElementById('voice-search');

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US'; // Adjust language as needed
    recognition.continuous = false;
    recognition.interimResults = false;

    voiceSearch.addEventListener('click', () => {
        recognition.start();
        voiceSearch.textContent = 'Listening...';
    });

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        searchInput.value = transcript;
        searchInput.dispatchEvent(new Event('input'));
        voiceSearch.textContent = 'Voice Search';
    };

    recognition.onend = () => {
        voiceSearch.textContent = 'Voice Search';
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        voiceSearch.textContent = 'Voice Search';
        alert('Voice search failed. Please try again.');
    };
} else {
    voiceSearch.disabled = true;
    voiceSearch.textContent = 'Voice Search Not Supported';
}

// Add some animations on load
window.addEventListener('load', () => {
    posts.forEach((post, index) => {
        post.style.opacity = '0';
        post.style.transform = 'translateY(20px)';
        setTimeout(() => {
            post.style.transition = 'opacity 0.5s, transform 0.5s';
            post.style.opacity = '1';
            post.style.transform = 'translateY(0)';
        }, index * 100);
    });
});