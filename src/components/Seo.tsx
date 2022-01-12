import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string[];
}

export function Seo({
  title: pageTitle,
  description: pageDescription,
  keywords
}: SeoProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const { title, description } = site.siteMetadata;

  const meta = [
    {
      name: 'description',
      content: pageDescription || description
    },
    {
      property: 'og:title',
      content: pageTitle || title
    },
    {
      property: 'og:description',
      content: pageDescription || description
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'twitter:title',
      content: pageTitle || title
    },
    {
      name: 'twitter:description',
      content: pageDescription || description
    }
  ];

  if (keywords) {
    meta.push({
      name: 'keywords',
      content: keywords.join()
    });
  }

  return <Helmet title={pageTitle || title} meta={meta} />;
}
