const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogresult = await graphql(`
    query {
      allMicrocmsBlogs(
        sort: {publicDate: DESC}
        filter: {category: {categorySlug: {glob: "ar*"}}}
      ) {
        edges {
          node {
            id
            slug
            category {
              categoryName
              categorySlug
              id
            }
            tag {
              tagSlug
              tagName
              id
            }
          }
          next {
            title
            slug
            category {
              categorySlug
            }
          }
          previous {
            title
            slug
            category {
              categorySlug
            }
          }
        }
        cat: group(field: {category: {categorySlug: SELECT}}) {
          totalCount
          fieldValue
        }
        tag: group(field: {tag: {tagSlug: SELECT}}) {
          totalCount
          fieldValue
        }
      }
      allMicrocmsCategory {
        nodes {
          categorySlug
          categoryId
          categoryName
        }
      }
      allMicrocmsTag {
        nodes {
          tagSlug
          tagId
          tagName
        }
      }
    }
  `)

  if (blogresult.errors) {
    reporter.panicOnBuild(`GraphQLのクリエでエラーが発生しました`)
    return
  }

  blogresult.data.allMicrocmsBlogs.edges.forEach(({ node, next, previous }) => {
    /* blog post comic */
    if(node.category.categorySlug == "ar-comic"){
      createPage({
        path: `/blog/post/${node.category.categorySlug}/${node.slug}/`,
        component: path.resolve(`./src/templates/blogpost-comic-template.js`),
        context: {
          id: node.id,
          // slug*というデータで文字を送る
          slug: `${node.slug}*`,
          next,
          previous,
        },
      })
    }
    /* blog post */
    else if(node.category.categorySlug == "ar-game"
      || node.category.categorySlug == "ar-made"
      || node.category.categorySlug == "ar-illust"
    ){
      createPage({
        path: `/blog/post/${node.category.categorySlug}/${node.slug}/`,
        component: path.resolve(`./src/templates/blogpost-template.js`),
        context: {
          id: node.id,
          next,
          previous,
        },
      })
    }
    /* タグページ ※タグの場合は配列指定になるが複数扱い方は不明*/
    blogresult.data.allMicrocmsBlogs.tag.forEach( nodes => {
      const tagPostPerPage = 10 // 1ページに表示する記事の数
      const tagPosts = nodes.totalCount // カテゴリーに属した記事の総数 ※カテゴリー別の記事数の取得方法が不明
      const tagPages = Math.ceil(tagPosts / tagPostPerPage) // カテゴリーページの総数

      Array.from({ length: 1 }).forEach((_, i) => {
        createPage({
          path: i === 0
            ? `/tag/${node.tag[0].tagSlug}/`
            : `/tag/${node.tag[0].tagSlug}/${i + 1}/`,
          component: path.resolve(`./src/templates/taglist-template.js`),
          context: {
            tagid: node.tag[0].id,
            tagname: node.tag[0].tagName,
            tagslug: node.tag[0].tagSlug,
            skip: tagPostPerPage * i,
            limit: tagPostPerPage,
            currentPage: i + 1, // 現在のページ
            isFirst: i + 1 === 1, // 最初のページ
            isLast: i + 1 === tagPages, // 最後のページ
          },
        })
      })
    })
  })

  /* カテゴリーページ */
  blogresult.data.allMicrocmsBlogs.cat.forEach( node => {
    const catPostPerPage = 10 // 1ページに表示する記事の数
    const catPosts = node.totalCount // カテゴリーに属した記事の総数
    const catPages = Math.ceil(catPosts / catPostPerPage) // カテゴリーページの総数

    Array.from({ length: catPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/cat/${node.fieldValue}/`
            : `/cat/${node.fieldValue}/${i + 1}/`,
        component: path.resolve(`./src/templates/catlist-template.js`),
        context: {
          catid: blogresult.data.allMicrocmsCategory.nodes.find(
            n => n.categorySlug === node.fieldValue
          ).categoryId,
          catname: blogresult.data.allMicrocmsCategory.nodes.find(
            n => n.categorySlug === node.fieldValue
          ).categoryName,
          catslug: node.fieldValue,
          skip: catPostPerPage * i,
          limit: catPostPerPage,
          currentPage: i + 1, // 現在のページ
          isFirst: i + 1 === 1, // 最初のページ
          isLast: i + 1 === catPages, // 最後のページ
        },
      })
    })
  })

  // 記事一覧生成
  const blogPostsPerPage = 10 // 1ページに表示する記事の数
  const blogPosts = blogresult.data.allMicrocmsBlogs.edges.length // 記事の総数
  const blogPages = Math.ceil(blogPosts / blogPostsPerPage) // 記事一覧ページの総数

  Array.from({ length: blogPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/bloglist/` : `/bloglist/${i + 1}/`,
      component: path.resolve("./src/templates/bloglist-template.js"),
      context: {
        skip: blogPostsPerPage * i,
        limit: blogPostsPerPage,
        currentPage: i + 1, // 現在のページ数
        isFirst: i + 1 === 1, // 最初のページ
        isLast: i + 1 === blogPages, // 最後のページ
      },
    })
  })
}
