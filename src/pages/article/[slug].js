import React from 'react';
import Link from 'next/link';
import PageTitle from '@/components/PageTitle';
import ReactMarkdown from 'react-markdown';

export async function getStaticProps(context) {
  return {
    props: {
      slug: context.params.slug,
    },
  };
}

export async function getStaticPaths() {
  const posts = await fetch('https://joz2kqj5.directus.app/items/articles?fields[]=*&fields[]=catgory.name').then(
    (res) => res.json()
  );

  return {
    paths: posts.data.map((post) => ({ params: { slug: post.uuid } })),
    fallback: false,
  };
}

export default function Article({ slug }) {
  return (
    <div>
      <Link className="p-4 inline-block" href="/">
        ← Terug naar homepage
      </Link>
      {PageTitle(slug)}
      <div className="relative px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-prose text-lg">
          <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
            <ReactMarkdown>
              {`
## Test
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
1. Test
2. Test
3. Test

\`\`\`js
const test = 'test';
\`\`\`

              `}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
