module.exports = {
  siteMetadata: {
    siteUrl: "https://tubstory.com",
    title: "tubstory",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-unicorn-fintech-wanicon-lineal-wanicon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
