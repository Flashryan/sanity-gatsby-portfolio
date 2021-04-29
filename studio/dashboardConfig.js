export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '608af79d145c973c2d9e2525',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-tarher46',
                  apiId: 'ec60d8cf-7b43-4586-91f0-46ff2814a8a3'
                },
                {
                  buildHookId: '608af79dde8ea243625d4dff',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-cu9r1vjv',
                  apiId: '9f3025c3-8ad0-45bf-ad7f-0d871bf23d9b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Flashryan/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-cu9r1vjv.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
