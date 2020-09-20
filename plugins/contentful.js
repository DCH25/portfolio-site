const contentful = require('contentful')

const config = {
  space: process.env.NUXT_ENV_CONTENTFUL_SPACE,
  accessToken: process.env.NUXT_ENV_CONTENTFUL_ACCESS_TOKEN
}

const client = contentful.createClient(config)

client.getProjectContent = () =>
  client.getEntries('', {
    content_type: 'project'
  })
    .then(({ items }) => {
      return items.map((project) => {
        return {
          title: project.fields.title,
          description: project.fields.description,
          image: 'https:' + project.fields.image.fields.file.url
        }
      })
    })

export default ({ app }) => {
  app.contentfulClient = client
}
