export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() },
    { name: 'description', title: 'Description / Excerpt', type: 'text', rows: 3, validation: (Rule) => Rule.required() },
    { name: 'author', title: 'Author Name', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'authorRole', title: 'Author Role', type: 'string' },
    { name: 'authorBio', title: 'Author Bio', type: 'text', rows: 3 },
    { name: 'authorPhoto', title: 'Author Photo URL', type: 'url' },
    { name: 'date', title: 'Publish Date', type: 'datetime', validation: (Rule) => Rule.required() },
    { name: 'readTime', title: 'Read Time (minutes)', type: 'number' },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Marriage', value: 'marriage' },
          { title: 'Communication', value: 'communication' },
          { title: 'Healing & Restoration', value: 'healing' },
          { title: 'Family', value: 'family' }
        ]
      }
    },
    { name: 'categoryLabel', title: 'Category Label (display text)', type: 'string' },
    { name: 'heroImage', title: 'Hero Image URL', type: 'url', validation: (Rule) => Rule.required() },
    { name: 'heroImageAlt', title: 'Hero Image Alt Text', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'body', title: 'Body (Markdown)', type: 'text', rows: 20, description: 'Write the article body in Markdown.' }
  ]
}
