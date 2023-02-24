import React from 'react';
import ArticleItem from './ArticleOverviewItem';

export default function ArticleOverview(posts) {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div className="mx-auto my-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => ArticleItem(post.slug, post.image, post.pretitle, post.title, post.description))}
      </div>
    </div>
  );
}
