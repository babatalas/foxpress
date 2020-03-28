const appData = {
    setting: {
        siteTitle: 'FoxPress',
        siteDescription: 'Just another FoxPress blog',
        id: 9
    },
    posts: [
        {
            id: 1,
            title: 'Home',
            slug: 'home',
            type: 'page',
            content: `<p>Welcome to Home. This is your home post. Edit or delete it, then start blogging!</p>`
        },
        {
            id: 2,
            title: 'Hello World!',
            slug: 'hello-world',
            type: 'blog',
            content: `<p>Welcome to WordPress. This is your first post. Edit or delete it, then start blogging!</p>`
        },
        {
            id: 3,
            title: 'Elements',
            slug: 'elements',
            type: 'blog',
            content: `<p>The purpose of this HTML is to help determine what default settings are with CSS and to make sure that all possible HTML
                Elements are included in this HTML so as to not miss any possible Elements when designing a site. Heading 1 Heading 2
                Heading 3 Heading 4 Heading 5 Heading 6</p>`
        },
        {
            id: 4,
            title: 'HTML',
            slug: 'html',
            type: 'blog',
            content: `<p>What HTML tags would you like to see? Let’s start with an unordered list: One Two Three Four And then move on to a more
                interesting ordered list: one, two buckle my shoe three, four knock at the door Five, six pick up sticks Seven, eight,
                lay them straight Nine, ten, a big fat he</p>`
        },
        {
            id: 5,
            title: 'Links',
            slug: 'links',
            type: 'blog',
            content: `<p>A few well known WordPress links: WordPress.org, the Codex and the download page.</p>`
        },
        {
            id: 6,
            title: 'Category Hierarchy',
            slug: 'category-hierarchy',
            type: 'blog',
            content: `<p>This post has 4 categories, part of a hierarchy that is 3 deep. Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit. Fusce euismod commodo ante. Suspendisse potenti. Nunc pellentesque quam vel pede. Ut a lorem non urna molestie
                euismod. Fusce consequat tortor eu urna. Pellentesque aliquam, pede eget tincidunt feugiat, nunc massa hendrerit magna,</p>`
        },
        {
            id: 7,
            title: 'About',
            slug: 'about',
            type: 'page',
            content: `<p>About page. This is your first post. Edit or delete it, then start blogging!</p>`
        },
        {
            id: 8,
            title: 'Contact',
            slug: 'contact',
            type: 'page',
            content: `<p>Contact page. This is your first post. Edit or delete it, then start blogging!</p>`
        },
    ]
}

if (!localStorage.foxnotes) {
    localStorage.setItem('foxnotes', JSON.stringify(appData));
}

const foxnotes = JSON.parse(localStorage.foxnotes);