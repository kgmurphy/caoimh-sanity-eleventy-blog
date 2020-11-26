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
                  buildHookId: '5fc01ff0b9a5142575c63085',
                  title: 'Sanity Studio',
                  name: 'caoimh-sanity-eleventy-blog-studio',
                  apiId: 'ad20984f-3e1e-4435-a929-8e851ffe214c'
                },
                {
                  buildHookId: '5fc01ff0fd725934e975abe1',
                  title: 'Blog Website',
                  name: 'caoimh-sanity-eleventy-blog',
                  apiId: '1bd34ba9-ae4d-4c78-b2ce-5be24db64d50'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kgmurphy/caoimh-sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://caoimh-sanity-eleventy-blog.netlify.app', category: 'apps'}
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
