// Load a fragment into a target element
function loadFragment(targetId, url, callback) {
    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error(`Failed to load ${url}`);
            return res.text();
        })
        .then(html => {
            document.getElementById(targetId).innerHTML = html;
            if (callback) callback();
        })
        .catch(err => console.error(err));
}

// Load main content dynamically and update hash
function loadContent(page) {
    loadFragment('main-content', 'content/' + page);

    // Update URL hash
    location.hash = page.replace('.html', '');
}

// Set the active nav link based on the current page
function setActiveLink(page) {
    const links = document.querySelectorAll('#header .nav a[data-page]');
    links.forEach(link => {
        link.parentElement.classList.toggle('active', link.dataset.page === page);
    });
}

// Single source of truth for routing based on the current hash.
// Used both on initial load and whenever the hash changes.
function routeToHash() {
    const page = location.hash ? location.hash.substring(1) + '.html' : 'about.html';
    loadFragment('main-content', 'content/' + page);
    setActiveLink(page);
}

// Delegated click listener — attached once to document, so it works
// immediately even before header.html has finished loading/inserting
// the nav links. No race condition with fragment loading.
document.addEventListener('click', function (e) {
    const link = e.target.closest('#header .nav a[data-page]');
    if (!link) return;

    e.preventDefault();
    loadContent(link.dataset.page);
    setActiveLink(link.dataset.page);
});

// Handle browser back/forward buttons (and any other hash changes)
window.addEventListener('hashchange', routeToHash);

// On page load
document.addEventListener('DOMContentLoaded', () => {
    // Load header, sidebar, footer (no callback needed for nav listeners now)
    loadFragment('header', 'header.html');
    loadFragment('sidebar', 'sidebar.html');
    loadFragment('footer', 'footer.html');

    // Route to whatever the current hash is (or default to about.html)
    routeToHash();
});