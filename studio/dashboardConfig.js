export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '61f184255ed95b0152708e60',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-oj63fa9w',
                  apiId: '7a64d6f1-397d-403e-b5c2-6acaf3d2a098'
                },
                {
                  buildHookId: '61f18425ae70e9fc70dceac8',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-y94ok95f',
                  apiId: 'eb8a8ed1-634a-46f1-be59-d9ecc5b8e192'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/codrex/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-y94ok95f.netlify.app', category: 'apps'}
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
