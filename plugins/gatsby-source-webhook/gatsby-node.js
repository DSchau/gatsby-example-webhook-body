const createNode = (title, actions) => {
  const node = {
    id: actions.createNodeId(`webhook-item-${title}`),
    title,
    internal: {
      type: `WebhookItem`,
      contentDigest: actions.createContentDigest(title)
    }
  }

  actions.createNode(node)

  return node
}

exports.sourceNodes = async function sourceNodes({ actions, createNodeId, createContentDigest, reporter, webhookBody, ...rest }) {
  const helpers = { createNode: actions.createNode, createNodeId, createContentDigest, ...rest }
  reporter.log(`webhookBody`, webhookBody)
  reporter.log(rest)
  if (webhookBody && webhookBody.items) {
    webhookBody.items.forEach(title => createNode(title, helpers))
  } else {
    /* normal, non Gatsby Cloud flow */
    ;[
      'hello hello',
      'sup sup'
    ]
      .forEach(title => createNode(title, helpers))
  }
}
