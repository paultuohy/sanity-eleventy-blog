export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6190622befdea9e32ea3683e',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-oxoxrp2y',
                  apiId: 'b26a0c5d-f204-42a9-95e1-a791a0fa1498'
                },
                {
                  buildHookId: '6190622cefdea9e32ea3683f',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-td7w1zx3',
                  apiId: '4148131e-efab-405a-ad11-a7f8e8ead136'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paultuohy/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-td7w1zx3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
