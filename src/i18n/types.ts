export interface UIStrings {
  nav: {
    home: string;
    posts: string;
    tags: string;
    about: string;
    archives: string;
    search: string;
  };
  post: {
    publishedAt: string;
    updatedAt: string;
    sharePostIntro: string;
    sharePostOn: string;
    sharePostViaEmail: string;
    tagLabel: string;
    backToTop: string;
    /** Optional until v8, so older locale files still type-check. */
    tableOfContents?: string;
    goBack: string;
    editPage: string;
    previousPost: string;
    nextPost: string;
    copyCode: string;
    codeCopied: string;
  };
  pagination: {
    prev: string;
    next: string;
    page: string;
  };
  home: {
    greeting: string;
    emptyPosts: string;
    socialLinks: string;
    featured: string;
    recentPosts: string;
    allPosts: string;
  };
  footer: {
    copyright: string;
    allRightsReserved: string;
  };
  pages: {
    tagTitle: string;
    tagDesc: string;

    tagsTitle: string;
    tagsDesc: string;

    postsTitle: string;
    postsDesc: string;

    archivesTitle: string;
    archivesDesc: string;

    searchTitle: string;
    searchDesc: string;
    emptyPosts: string;
    emptyTags: string;
    emptyArchives: string;
  };
  a11y: {
    skipToContent: string;
    /** Optional until v8, so older locale files still type-check. */
    skipTableOfContents?: string;
    openMenu: string;
    closeMenu: string;
    toggleTheme: string;
    searchPlaceholder: string;
    noResults: string;
    goToPreviousPage: string;
    goToNextPage: string;
    rssFeed: string;
    breadcrumb: string;
    pagination: string;
    switchToLight: string;
    switchToDark: string;
    searchDevNotice: string;
    zoomImage: string;
    imagePreview: string;
    closeImagePreview: string;
    socialProfile: string;
    emailAuthor: string;
  };
  notFound: {
    title: string;
    message: string;
    goHome: string;
  };
}
