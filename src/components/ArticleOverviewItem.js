import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ArticleOverviewItem(slug, image, pretitle, title, description) {
  const route = '/article/' + slug;

  return (
    <div key={slug} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        {image && <Image width={800} height={400} className="h-48 w-full object-cover" src={image} alt="" />}
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">{pretitle}</p>
          <Link href={route} className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900">{title}</p>
            <p className="mt-3 text-base text-gray-500">{description}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
