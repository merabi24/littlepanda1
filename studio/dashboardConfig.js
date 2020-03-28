export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e7f3d93bad8004fed27bee8',
                  title: 'Sanity Studio',
                  name: 'littlepanda1-studio',
                  apiId: '7c717e69-e6f2-43c6-ad02-203c0aa6bc82'
                },
                {
                  buildHookId: '5e7f3d9309b82aad9a5dd3e9',
                  title: 'Landing pages Website',
                  name: 'littlepanda1',
                  apiId: 'e8ef399d-b361-4898-be91-1245018158d4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/merabi24/littlepanda1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://littlepanda1.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
