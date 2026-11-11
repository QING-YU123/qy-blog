import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Home",
    posts: "Posts",
    tags: "Tags",
    about: "About",
    archives: "Archives",
    search: "Search",
  },
  post: {
    publishedAt: "Published at",
    updatedAt: "Updated",
    sharePostIntro: "Share this post:",
    sharePostOn: "Share this post on {{platform}}",
    sharePostViaEmail: "Share this post via email",
    tagLabel: "Tags",
    backToTop: "Back to top",
    tableOfContents: "Table of contents",
    goBack: "Go back",
    editPage: "Edit page",
    previousPost: "Previous Post",
    nextPost: "Next Post",
    copyCode: "Copy",
    codeCopied: "Copied",
  },
  pagination: {
    prev: "Prev",
    next: "Next",
    page: "Page",
  },
  home: {
    greeting: "Welcome to Dasein",
    emptyPosts:
      "Learning notes and projects will appear here as they are published.",
    socialLinks: "Social Links",
    featured: "Featured",
    recentPosts: "Recent Posts",
    allPosts: "All Posts",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "All rights reserved.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "All the articles with the tag",

    tagsTitle: "Tags",
    tagsDesc: "All the tags used in posts.",

    postsTitle: "Posts",
    postsDesc: "All the articles I've posted.",

    archivesTitle: "Archives",
    archivesDesc: "All the articles I've archived.",

    searchTitle: "Search",
    searchDesc: "Search any article ...",
    emptyPosts: "No posts yet. Check back soon.",
    emptyTags: "Tags will appear here once posts are published.",
    emptyArchives: "Published posts will be archived here by date.",
  },
  a11y: {
    skipToContent: "Skip to content",
    skipTableOfContents: "Skip table of contents",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle theme",
    searchPlaceholder: "Search posts...",
    noResults: "No results found",
    goToPreviousPage: "Go to previous page",
    goToNextPage: "Go to next page",
    rssFeed: "Subscribe via RSS",
    breadcrumb: "Breadcrumb",
    pagination: "Pagination",
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
    searchDevNotice:
      "Build the site to refresh the search index during development.",
    zoomImage: "Zoom image",
    imagePreview: "Image preview",
    closeImagePreview: "Close image preview",
    socialProfile: "Visit {{author}} on {{platform}}",
    emailAuthor: "Send an email to {{author}}",
  },
  notFound: {
    title: "404 Not Found",
    message: "Page Not Found",
    goHome: "Go back home",
  },
} satisfies UIStrings;
