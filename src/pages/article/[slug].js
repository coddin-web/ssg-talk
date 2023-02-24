import React from 'react';
import Link from 'next/link';

export async function getStaticProps(context) {
  return {
    props: {
      slug: context.params.slug,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'test' } }, { params: { slug: 'test-2' } }, { params: { slug: 'test-3' } }],
    fallback: true,
  };
}

Article.propTypes = {
  slug: String,
};

export default function Article({ slug }) {
  return (
    <div>
      <Link href="/">Back</Link>
      <h1 className="text-3xl text-center p-20">{slug}</h1>
    </div>
  );
}
