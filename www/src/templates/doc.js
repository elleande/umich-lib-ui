import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Markdown from "../components/markdown"
import TableOfContents from '../components/table-of-contents'
import Heading from '../../../packages/heading'
import styled from '@emotion/styled'

const StyledFooter = styled('footer')({
  margin: '2rem 0'
})

const docTemplate = ({ data }) => {
  const { htmlAst, headings } = data.markdownRemark
  const { title } = data.markdownRemark.frontmatter
  const { slug } = data.markdownRemark.fields

  return (
    <Layout>
      <article role="main" className="content">
        <header>
          <Heading level={1} size="xlarge" style={{ marginTop: '0' }}>{title}</Heading>
        </header>

        <TableOfContents headings={headings} />

        <div className="y-spacing">
          <Markdown htmlAst={htmlAst} />
        </div>

        <StyledFooter>
          <a href={`https://github.com/mlibrary/umich-lib-components-react/edit/master/www/docs/${slug}.md`}>Edit this page on Github</a>
        </StyledFooter>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query DocBySlug($slug: String!){
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
      fields {
        slug
      }
      headings {
        depth
        value
      }
    }
  }
`

export default docTemplate
