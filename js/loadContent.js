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

// Attach click listeners to navbar links
function attachNavbarListeners() {
    const links = document.querySelectorAll('#header .nav a[data-page]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            
            e.preventDefault();
            const page = this.dataset.page;

            loadContent(page);

            // Update active class
            links.forEach(l => l.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');
        });
    });
}

// Handle browser back/forward buttons using hashchange
window.addEventListener('hashchange', () => {
    let page = location.hash ? location.hash.substring(1) + '.html' : 'about.html';
    loadFragment('main-content', 'content/' + page);

    // Update active class
    const links = document.querySelectorAll('#header .nav a[data-page]');
    links.forEach(link => {
        link.parentElement.classList.toggle(
            'active',
            link.dataset.page === page
        );
    });
});

// On page load
document.addEventListener('DOMContentLoaded', () => {

    // Load header first, then attach navbar listeners
    loadFragment('header', 'header.html', attachNavbarListeners);

    // Load sidebar and footer
    loadFragment('sidebar', 'sidebar.html');
    loadFragment('footer', 'footer.html');

    // Determine initial page from hash or default to about.html
    let initialPage = location.hash ? location.hash.substring(1) + '.html' : 'about.html';
    loadFragment('main-content', 'content/' + initialPage);

    // Set active link
    const links = document.querySelectorAll('#header .nav a[data-page]');
    links.forEach(link => {
        if (link.dataset.page === initialPage) {
            link.parentElement.classList.add('active');
        }
    });
});
