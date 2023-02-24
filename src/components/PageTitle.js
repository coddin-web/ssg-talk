import React from 'react';

export default function PageTitle(title, description) {
  return (
    <div className="bg-white py-4 px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{title}</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
      </div>
    </div>
  );
}
