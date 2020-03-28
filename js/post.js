const post = {};
post.addBlogPost = function () {
    let id = foxnotes.setting.id,
        title = document.getElementsByName('title')[0].value,
        content = document.getElementsByName('content')[0].value;

    if (title === '' || content === '') return alert('Title and content is required.');

    slug = title.toLowerCase().trim().replace(/\s/g, '-') + id;
    content = `<p>${content.replace(/\n/g, '</p><p>')}</p>`;
    console.log({
        id: id,
        title: title,
        slug: slug,
        type: 'blog',
        content: content,
    })

    foxnotes.posts.push({
        id: id,
        title: title,
        slug: slug,
        type: 'blog',
        content: content,
    });

    document.getElementsByName('title')[0].value = '';
    document.getElementsByName('content')[0].value = '';
    foxnotes.setting.id++;

    updateDatabase();
    router();
}

post.updateBlogPost = function() {
    closeAdminPanel();
    hideUpdateButton();
    let index = foxnotes.memory.index,
        id = foxnotes.memory.id,
        title = document.getElementsByName('title')[0].value,
        content = document.getElementsByName('content')[0].value;
    if (title === '' || content === '') return alert('Title and content is required.');

    slug = title.toLowerCase().trim().replace(/\s/g, '-') + id;
    content = `<p>${content.replace(/\n/g, '</p><p>')}</p>`;
    console.log({
        id: id,
        title: title,
        slug: slug,
        type: 'blog',
        content: content,
    })

    foxnotes.posts[index] = ({
        id: id,
        title: title,
        slug: slug,
        type: 'blog',
        content: content,
    });

    document.getElementsByName('title')[0].value = '';
    document.getElementsByName('content')[0].value = '';

    updateDatabase();
    location.hash = 'blog';
}