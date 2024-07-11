import { fetchAPI } from "./base";


export async function getPosts() {
  const data = await fetchAPI(
    `query FetchPosts {
        posts {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
          }
        }
      }`,
    // {
      // variables: {
        // first,
      // },
    // }
    // `query NewQuery {
    //   category(id: "dGVybToz") {
    //     id
    //     posts {
    //       nodes {
    //         excerpt
    //         featuredImage {
    //           node {
    //             sourceUrl
    //           }
    //         }
    //         slug
    //         title
    //       }
    //     }
    //   }
    // }`
  );

  return data?.posts?.nodes;
}

export async function getPostBySlug(slug: string) {
  const data = await fetchAPI(
    `query GetPost($id: ID = "") {
    post(id: $id, idType: SLUG) {
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      slug
      title
    }
  }`,
    {
      variables: {
        id: slug,
      },
    }
  );

  return data?.post;
}