'use strict'

import { connect } from 'react-redux'
import Helmet from 'react-helmet'

const headConfig = {
  htmlAttributes: {'lang': 'en'},
  title: 'Default App Title',
  link: [
    {rel: 'stylesheet', type: 'text/css', href: '/static/semantic/semantic.min.css'},
  ],
  meta: [
    {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1'},
  ]
}

const mapState = (state, {post, params}) => {

  if(post) {
    return {
      htmlAttributes: headConfig.htmlAttributes,
      title: post.title,
      link: [
        {rel: 'stylesheet', type: 'text/css', href: '/static/semantic/semantic.min.css'},
      ],
      meta: [
        {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1'},
        {name: 'twitter:title', content: post.title},
        {property: 'og:title', content: post.title},
      ]
    }
  }

  return headConfig
}

export default connect(mapState)(Helmet)
