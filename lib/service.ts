import { fetchAPI } from "./base";


// export async function getBlogs() {
//   const data = await fetchAPI(
//     `query FetchPosts {
//       category(id: "dGVybToxMQ==") {
//         posts(first: 100, where: {orderby: {field: DATE, order: DESC}}) {
//           nodes {
//             excerpt
//             featuredImage {
//               node {
//                 sourceUrl
//               }
//             }
//             slug
//             title
//             content
//               url {
//               projectLink
//             }
//           }
//         }
//       }
//     }`,
//   );
//   return data?.category?.posts?.nodes;
// }

export async function getPosts() {
  const data = await fetchAPI(
    `query FetchPosts {
        posts(first: 100) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
            content
          }
        }
      
    }`,
  );
  return data?.posts?.nodes;
}

export async function getZaAvtomobilaPosts() {
  const data = await fetchAPI(
    `query FetchPosts {
      category(id: "dGVybToyMQ==") {
        posts(first: 100) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
            content
          }
        }
      }
    }`,
  );

  return data?.category?.posts?.nodes;
}

export async function getMotornoMasloPosts() {
  const data = await fetchAPI(
    `query FetchPosts {
      category(id: "dGVybToxNA==") {
        posts(first: 100) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
            content
          }
        }
      }
    }`,
  );

  return data?.category?.posts?.nodes;
}

export async function getTuningNoviniPosts() {
  const data = await fetchAPI(
    `query FetchPosts {
      category(id: "dGVybToxNA==") {
        posts(first: 100) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
            content
          }
        }
      }
    }`,
  );

  return data?.category?.posts?.nodes;
}

export async function getPostBySlug(postSlug: string) {
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
        id: postSlug,
      },
    }
  );

  return data?.post;
}