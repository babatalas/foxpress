function router() {
    let urlPath = location.hash,
        path = urlPath.split(/#|\//);
    
    switch (path.length) {
        case 1:
            clearPage();
            generatePage(foxnotes.posts[0]);
            break;
        case 2:
            viewPage(path);
            break;
        case 3:
            mainRoute(path);
            break;
        default:
            crudRoute(path);
        break;
    }
}

function viewPage(path) {
    let pageSlug = path[1];
    clearPage();
    switch (pageSlug) {
        case 'blog':
            displayBlogPosts();
            break;
        default:
            let postIndex = foxnotes.posts.findIndex(findPageIndex);
            if (postIndex >= 0) {
                generatePage(foxnotes.posts[postIndex]);
            } else {
                notFound();
            }
        break;
    }
}

function viewPost(path) {
    let pageSlug = path[2];
    clearPage();
    switch (pageSlug) {
        case '':
            viewPage(path);
            break;
        default:
            let postIndex = foxnotes.posts.findIndex(findPostIndex);
            if (postIndex >= 0) {
                generatePage(foxnotes.posts[postIndex]);
            } else {
                notFound();
            }
        break;
    }
}

function deletePost(id) {
    if (confirm('Apakah anda yakin ingin menghapus post ini?')) {
        foxnotes.posts.splice(id, 1);
        updateDatabase();
        alert('Post berhasil dihapus.')
        location.hash = 'blog';
    } else {
        location.hash = 'blog';
        return;
    }
}

function mainRoute(path) {
    if (path[2] === '') return viewPage(path);

    if (path[1] === 'blog') return viewPost(path);

    clearPage();
    notFound();
}

function crudRoute(path) {
    console.log(path)
    if (path[3] === '') return viewPost(path);

    if (path[3] === 'delete') {
        let postIndex = foxnotes.posts.findIndex(findPostIndex);
        if (postIndex >= 0) {
            deletePost(postIndex);
        } else {
            clearPage();
            notFound();
            return;
        }
    }

    if (path[3] === 'edit') {
        let postIndex = foxnotes.posts.findIndex(findPostIndex),
            title = foxnotes.posts[postIndex].title,
            content = foxnotes.posts[postIndex].content;
        openAdminPanel();
        showUpdateButton();
        foxnotes.memory = {
            index: postIndex,
            id: foxnotes.posts[postIndex].id
        };
        viewPost(path);
        document.getElementsByName('title')[0].value = title;
        document.getElementsByName('content')[0].value = content;
        return;
    }


    clearPage();
    notFound();
}