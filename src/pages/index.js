import React from 'react';
import Head from 'next/head';
import PageTitle from '@/components/PageTitle';
import ArticleOverview from '@/components/ArticleOverview';

export async function getStaticProps() {
  const posts = await fetch('https://joz2kqj5.directus.app/items/articles?fields[]=*&fields[]=catgory.name').then(
    (res) => res.json()
  );

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Statisch Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {PageTitle('Welcome to my (not yet) static blog!')}
        {ArticleOverview(
          posts.data.map((post) => ({
            slug: post.uuid,
            image: process.env.NEXT_PUBLIC_DIRECTUS_URL + 'assets/' + post.image,
            pretitle: post.catgory.name,
            title: post.title,
            description: 'deze is even statisch nog',
          }))
        )}
      </main>
    </>
  );
}
