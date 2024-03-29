import React from 'react';
import LinkCardLayout from '@components/Card/LinkCardLayout';
import { ArticlesMock } from '@mocks/articles-mock';

const ArticleComponent = () => {
  const data = ArticlesMock || [];

  return (
    <>
      <div className="grid grid-cols-1 gap-4 px-5 mt-16 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {data.map((hooks, key) => {
          return (
            <LinkCardLayout
              key={key}
              className={'hover:drop-shadow-pink cursor-pointer'}
              url={hooks?.uri}
            >
              <div className="grid gap-3 px-8 py-6">
                <h3 className="text-2xl font-extraBold text-biege group-hover:text-pink">
                  {hooks.title}
                </h3>
                <p className="group-hover:text-biege text-grayLight">
                  {hooks.shortDescription}
                </p>
              </div>
            </LinkCardLayout>
          );
        })}
      </div>
    </>
  );
};

export default ArticleComponent;
