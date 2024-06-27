document.addEventListener('DOMContentLoaded', function () {
    fetch('posts.json')
        .then(response => response.json())
        .then(data => renderPosts(data))
        .catch(error => console.error('Error loading the posts:', error));
});

function renderPosts(posts) {
    const container = document.getElementById('articles-container');
    const isMobile = window.innerWidth <= 768;

    posts.forEach(post => {
        const article = document.createElement('article');
        article.classList.add('margin-bottom');


        if (isMobile) {
            article.innerHTML = `
                <div class="line" style="background: none repeat scroll 0 0 ${post.color}">
                    <!-- image -->
                    <div>
                        <div class="post-image-mobile" style="background-image: url('${post.image}');"></div>
                    </div>
                
                    <!-- date -->
                    <div class="s-12 post-date" style="font-size: 0.7em">
                        <p class="date">${post.date}</p>
                        <p class="month">${post.month}</p>
                    </div>
                </div>

                <!-- text -->
                <div class="post-text">
                    <a href="${post.url}">
                        <h2>${post.title}</h2>
                    </a>
                    <p>${post.description.substring(0, 100) + '...'}</p>
                    <a class="continue-reading" href="${post.url}">Continue lendo</a>
                </div>
            `;
        } else {
            article.innerHTML = `
               <div class="line" style="background: none repeat scroll 0 0 ${post.color}">
                    <!-- image -->
                    <div class="s-12 l-11 post-image">
                        <div class="post-image-desktop" style="background-image: url('${post.image}');"></div>
                    </div>
            
                    <!-- date -->
                    <div class="s-12 l-1 post-date">
                        <p class="date">${post.date}</p>
                        <p class="month">${post.month}</p>
                    </div>
                </div>

                <!-- text -->
                <div class="post-text">
                    <a href="${post.url}">
                        <h2>${post.title}</h2>
                    </a>
                    <p>${post.description}</p>
                    <a class="continue-reading" href="${post.url}">Continue lendo</a>
                </div>
            `;
        }

        container.appendChild(article);
    });
}
