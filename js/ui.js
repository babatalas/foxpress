const siteUrl = window.origin,
    siteUrlRegex = new RegExp(siteUrl);

let adminCloseButton = document.querySelector('.editor__close'),
    adminOpenButton = document.querySelector('.editor__open'),
    resetOpenButton = document.querySelector('.database__reset-open'),
    resetCancelButton = document.querySelector('.database__reset-cancel'),
    resetNowButton = document.querySelector('.database__reset-now'),
    resetButtons = document.querySelector('.reset-database'),
    sidebar = document.querySelector('.sidebar'),
    editorPanel = document.querySelector('.editor'),
    container = document.querySelector('.container'),
    content = document.querySelector('.content'),
    addNewPost = document.querySelector('.add-new-post'),
    updatePost = document.querySelector('.update-post'),
    siteTitle = document.querySelector('.site-title'),
    siteDescription = document.querySelector('.site-description'),
    siteLinks = document.getElementsByTagName('a');

adminCloseButton.onclick = closeAdminPanel,
adminOpenButton.onclick = openAdminPanel,
addNewPost.onclick = post.addBlogPost,
updatePost.onclick = post.updateBlogPost,
resetOpenButton.onclick = openResetForm,
resetCancelButton.onclick = closeResetForm,
resetNowButton.onclick = resetDatabase;

function closeAdminPanel() {
    editorPanel.style.display = 'none';
    adminOpenButton.style.display = 'block';
    container.setAttribute("style", "grid-template-columns: [editor-start] 0 [full-start] minmax(5rem, auto) [center-start] repeat(8, [col-start] minmax(auto, 14rem) [col-end]) [center-end] minmax(5rem, auto) [full-end];");
}

function openAdminPanel() {
    editorPanel.style.display = 'flex';
    adminOpenButton.style.display = 'none';
    container.setAttribute("style", "grid-template-columns: [editor-start] 50rem [full-start] minmax(5rem, auto) [center-start] repeat(8, [col-start] minmax(auto, 14rem) [col-end]) [center-end] minmax(5rem, auto) [full-end];");
}

function openResetForm() {    
    sidebar.style.display = 'none';
    resetButtons.style.display = 'flex';
    
}

function closeResetForm() {
    sidebar.style.display = 'flex';
    resetButtons.style.display = 'none';

}

function showUpdateButton() {
    updatePost.style.display = 'block';
    addNewPost.style.display = 'none';
}

function hideUpdateButton() {
    updatePost.style.display = 'none';
    addNewPost.style.display = 'block';
}

function findPageIndex(post) {
    let urlPath = location.hash,
        path = urlPath.split(/#|\//);

    return post.slug === path[1] && post.type === 'page';
}

function findPostIndex(post) {
    let urlPath = location.hash,
        path = urlPath.split(/#|\//);

    return post.slug === path[2] && post.type === 'blog';
}

function displayBlogPosts() {
    let counter = 0;
    foxnotes.posts.forEach(obj => {
        if (obj.type === 'blog') {
            content.innerHTML += generatePost(obj);
            counter++;
        }
    });
    if (!counter) notFound(1);
}

function generatePost(obj) {
    return `<section class="blog-post">
                <h2 class="post-title"><a href="${siteUrl}#blog/${obj.slug}" class="post-title__link">${obj.title}</a></h2>
                ${obj.content}
                <div class="blog-post__menu">
                <a href="#blog/${obj.slug}/edit" class="post-title__link--info">Edit Post</a>
                <a href="#blog/${obj.slug}/delete" class="post-title__link--danger">Hapus post item dari database</a>
                </div>
            </section>`;
}

function generatePage(obj) {
    content.innerHTML +=  `<section class="blog-post">
                <h2 class="post-title">${obj.title}</h2>
                ${obj.content}
            </section>`;
}

function notFound(err = 404) {
    if (err === 404) {
        content.innerHTML += `<section class="blog-post">
                    <h2 class="post-title">Error 404 - Page not found</h2>
                </section>`;
    } else if (err === 1) {
        content.innerHTML += `<section class="blog-post">
                    <h2 class="post-title">You dont have any blogpost.</h2>
                </section>`;
    }
}

// function updatePage() {
//     let url = document.URL,
//     urlPath = location.hash,
//     path = urlPath.split(/#|\//);
//     clearPage();

//     console.log(path)
//     if (path[0] === '' && path.length === 1) {
//         content.innerHTML += generatePage(foxnotes.posts[0]);
//     } else if (path.length === 2) {
//         let pageFound;

//         foxnotes.posts.forEach(post => {
//             if (post.type === 'page' && path[1] === post.slug) {
//                 pageFound = post;
//             }
//         });

//         if (pageFound) {
//             content.innerHTML += generatePage(pageFound);
//         } else if (path[1] === 'blog') {
//             foxnotes.posts.forEach(obj => {
//                 if (obj.type === 'blog') {
//                     content.innerHTML += generateNote(obj);
//                 }
//             });
//         } else {
//             content.innerHTML += notFound();
//         }
//     } else if (path.length === 3 && path[1] === 'blog') {
//         let postFound;

//         foxnotes.posts.forEach(post => {
//             if (post.type === 'blog' && path[2] === post.slug) {
//                 postFound = post;
//             }
//         });

//         if (postFound) {
//             content.innerHTML += generateNote(postFound);
//         } else if (path[2] === '') {
//             foxnotes.posts.forEach(obj => {
//                 if (obj.type === 'blog') {
//                     content.innerHTML += generateNote(obj);
//                 }
//             });
//         } else {
//             content.innerHTML += notFound();
//         }
//     } else {
//         content.innerHTML += notFound();
//     }
// }

function clearPage() {
    content.innerHTML = '';
}

function updateDatabase() {
    localStorage.foxnotes = JSON.stringify(foxnotes);
}

function resetDatabase() {
    let reset = document.getElementsByName('reset-keyword')[0].value;
    if (reset === 'reset') {
        localStorage.foxnotes = JSON.stringify(appData);
        document.getElementsByName('reset-keyword')[0].value = '';
        alert(`Database has been reset.`);
        location.reload();
    } else {
        alert(`Type 'reset' without quote to reset database.`);
    }
}