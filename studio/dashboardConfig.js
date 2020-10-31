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
                  buildHookId: '5f9dafc56185f1f96f795ae6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-cmybe1en',
                  apiId: 'f504b991-be95-41c6-b278-4ff196c6f45f'
                },
                {
                  buildHookId: '5f9dafc536a675164bd1144c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-supc1s5t',
                  apiId: '9317895a-939d-484c-8c1f-c3ad086b8b96'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/willTastyMakers/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-supc1s5t.netlify.app',
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
