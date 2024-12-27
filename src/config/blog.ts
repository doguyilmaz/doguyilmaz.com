export const blogConfig = {
  posts: [
    {
      title: 'Building Scalable Web Applications',
      slug: 'building-scalable-web-applications',
      publishedAt: '2024-01-01',
      summary:
        'Best practices and patterns for building scalable web applications using modern technologies.',
      content: `
# Building Scalable Web Applications

In this post, I'll share my experience and best practices for building scalable web applications using modern technologies like React, Node.js, and TypeScript.

## Key Points

1. Use TypeScript for better type safety and developer experience
2. Implement proper state management with tools like Redux or Zustand
3. Follow clean architecture principles
4. Optimize performance with code splitting and lazy loading
5. Implement proper error handling and logging

## Conclusion

Building scalable applications requires careful planning and following best practices. The key is to choose the right tools and patterns for your specific use case.
      `,
      tags: ['Web Development', 'React', 'TypeScript', 'Architecture'],
    },
    {
      title: 'Data Visualization Best Practices',
      slug: 'data-visualization-best-practices',
      publishedAt: '2023-12-15',
      summary:
        'Learn how to create effective and interactive data visualizations for web applications.',
      content: `
# Data Visualization Best Practices

Based on my experience working with various data visualization libraries and tools, here are some best practices for creating effective visualizations.

## Key Points

1. Choose the right chart type for your data
2. Ensure proper color contrast and accessibility
3. Implement interactive features thoughtfully
4. Optimize performance for large datasets
5. Make visualizations responsive

## Tools I Recommend

- Highcharts for general purpose charts
- Deck.gl for geospatial visualizations
- D3.js for custom visualizations
      `,
      tags: ['Data Visualization', 'Highcharts', 'Deck.gl', 'D3.js'],
    },
  ],
  categories: [
    'Web Development',
    'Data Visualization',
    'Architecture',
    'Performance',
    'TypeScript',
    'React',
  ],
};
