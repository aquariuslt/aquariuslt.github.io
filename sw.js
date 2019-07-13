/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "categories/Blog/index.html",
    "revision": "88d64a5f85bab486ca153b6405d55be3"
  },
  {
    "url": "categories/Debug/index.html",
    "revision": "b641dbdbd8b814ea95658d9113ae7a39"
  },
  {
    "url": "categories/index.html",
    "revision": "228060a8ee26d96b62b7a564101b8d15"
  },
  {
    "url": "categories/Note/index.html",
    "revision": "c7566292e2f537adce4c2e7ff7a808e1"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "e6a1c3d3fe2d010f895a781c4501c1ac"
  },
  {
    "url": "index.html",
    "revision": "31dac89a404835e0fa81cf472c802ac6"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/index.html",
    "revision": "59e3b80f54f00da611b2551570e82f61"
  },
  {
    "url": "posts/2015/10/25/index.html",
    "revision": "17321b5d8eaa58541a653f98a68d441a"
  },
  {
    "url": "posts/2015/10/index.html",
    "revision": "f2f6deea1caba193b8d444f3df5a30ba"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/index.html",
    "revision": "596fed697debe68718013f1df0997afb"
  },
  {
    "url": "posts/2015/11/10/index.html",
    "revision": "614463ae12776b3708c90eebebc717f4"
  },
  {
    "url": "posts/2015/11/index.html",
    "revision": "b0c1177c802dddd81c80ebefa86679cc"
  },
  {
    "url": "posts/2015/12/13/index.html",
    "revision": "b2bab570db8ed0cbe49ae3f07f81b1ba"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/index.html",
    "revision": "5ec3ec44c65f900794353e99f07b7453"
  },
  {
    "url": "posts/2015/12/14/index.html",
    "revision": "0d9428574197315e012cf91d529be7bd"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/index.html",
    "revision": "91663499e1812aef837faa9830c24ee8"
  },
  {
    "url": "posts/2015/12/27/index.html",
    "revision": "5138e3b8039a83289a46ecdba6884655"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/index.html",
    "revision": "c7700bc869c8517f29e9716567d63482"
  },
  {
    "url": "posts/2015/12/index.html",
    "revision": "685960b25636cdbbd62996fcdd60d6dc"
  },
  {
    "url": "posts/2015/index.html",
    "revision": "1771309ef8987682bdc0be4358520e6f"
  },
  {
    "url": "posts/2016/01/01/index.html",
    "revision": "ab6ca77135ff86d3fa703f9fa1a897ca"
  },
  {
    "url": "posts/2016/01/01/review-2015/index.html",
    "revision": "6b9dfd12739bcc5a24aaa850baae72a9"
  },
  {
    "url": "posts/2016/01/11/index.html",
    "revision": "3d6e27fee43b55fc8ef39d611b35cd33"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/index.html",
    "revision": "063924f2630c728a85dbca123c1a496f"
  },
  {
    "url": "posts/2016/01/12/index.html",
    "revision": "71a6fe543c262ed71b970a3992ae6713"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html",
    "revision": "fe798fc6dcb5ff3459b52e9acd00ec1a"
  },
  {
    "url": "posts/2016/01/index.html",
    "revision": "36bc4ea8308862041d15a76110a32b19"
  },
  {
    "url": "posts/2016/03/06/index.html",
    "revision": "1bb21a620c2d94d68b60542643d8de49"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/index.html",
    "revision": "ba5ada04964e4e10ed6abe64fc1d3156"
  },
  {
    "url": "posts/2016/03/index.html",
    "revision": "c2aa1de5cdefe5eb4b7039653224c104"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/index.html",
    "revision": "b7e7df546272bc7ddf22b0dbb71c3749"
  },
  {
    "url": "posts/2016/04/09/index.html",
    "revision": "e4582b0cc9710f9c41642d8b8ff3de2a"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/index.html",
    "revision": "2d061d80e70873374ca3d379a7001240"
  },
  {
    "url": "posts/2016/04/10/index.html",
    "revision": "57b0b1bcc93534825f9dfe7f605a8cd2"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/index.html",
    "revision": "d5fad2608fee7c35e090efe4157e2ada"
  },
  {
    "url": "posts/2016/04/30/index.html",
    "revision": "6dec0eb4d09373fa925c191f6b508d61"
  },
  {
    "url": "posts/2016/04/index.html",
    "revision": "6bc6b77d5effabfc44282ec4ebfc6dd2"
  },
  {
    "url": "posts/2016/07/05/index.html",
    "revision": "b13975104f0aa131ce672429e26f9755"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/index.html",
    "revision": "83d8ae2a3ce454081f3a43781eb172fd"
  },
  {
    "url": "posts/2016/07/index.html",
    "revision": "59041468fc964fda99214a6396133241"
  },
  {
    "url": "posts/2016/index.html",
    "revision": "6ac4be5c98782d3f12bfd3380dd3cf9a"
  },
  {
    "url": "posts/2017/01/01/index.html",
    "revision": "37307047cdfd0394e500914b34f9a285"
  },
  {
    "url": "posts/2017/01/01/review-2016/index.html",
    "revision": "8fdf20cd68758727711d1dd2b329c9f2"
  },
  {
    "url": "posts/2017/01/index.html",
    "revision": "e8a01473a236e6539e1d1fb033bbd125"
  },
  {
    "url": "posts/2017/03/12/index.html",
    "revision": "26878f51248e9c26e3301374610ed636"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/index.html",
    "revision": "614066b7a5fb7801455e6ab4ef68da1c"
  },
  {
    "url": "posts/2017/03/index.html",
    "revision": "4ac3978514c539a1ba5713f84123d847"
  },
  {
    "url": "posts/2017/05/05/index.html",
    "revision": "8e9bd23b39d6f8b698c0d25e7827c464"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/index.html",
    "revision": "cf55cf43d86f6ad8b6cc6b08a3e27022"
  },
  {
    "url": "posts/2017/05/index.html",
    "revision": "84c82c6baf5e800921bf8247c69ee7de"
  },
  {
    "url": "posts/2017/index.html",
    "revision": "664d54d2d35e643270c67933ed5cda73"
  },
  {
    "url": "posts/2018/01/01/index.html",
    "revision": "c5cda43417b54a357ae12b10b6b18059"
  },
  {
    "url": "posts/2018/01/01/review-2017/index.html",
    "revision": "0d0d8c52da4fbfb997956c5fdcdee15f"
  },
  {
    "url": "posts/2018/01/index.html",
    "revision": "e9a204582a22be4b661e83c0381ce58e"
  },
  {
    "url": "posts/2018/03/03/index.html",
    "revision": "6d1a9bbddece6256fa62c544400276f2"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/index.html",
    "revision": "60becc698cdea34fdde8fbe8039b6d8f"
  },
  {
    "url": "posts/2018/03/04/index.html",
    "revision": "6a3cdfcf97b2325baffb7aa7c9c5c144"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html",
    "revision": "ee90ca663d4d440e3a2a67a171cd9ced"
  },
  {
    "url": "posts/2018/03/index.html",
    "revision": "a1bcb8895513ea947abc142c1bd23530"
  },
  {
    "url": "posts/2018/04/01/index.html",
    "revision": "b0d90e9c1a823ebc1828819686c32ac3"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/index.html",
    "revision": "806f143939d0c3fec860dccb63c7fa4f"
  },
  {
    "url": "posts/2018/04/index.html",
    "revision": "a26a56e76643eddfca2c2cbb2d75d2c8"
  },
  {
    "url": "posts/2018/index.html",
    "revision": "635ce89147316bc2fb40ffbcf5bf81a4"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/index.html",
    "revision": "cb1866e6899af399b27fe1ccc4e76bbd"
  },
  {
    "url": "posts/2019/07/07/index.html",
    "revision": "000e3f4231dc7ce5cb7c7ab3cc693fdc"
  },
  {
    "url": "posts/2019/07/index.html",
    "revision": "4c7a9a78eb660b98fdd6a2aaef0af47d"
  },
  {
    "url": "posts/2019/index.html",
    "revision": "80c756bae80c2075ad526b8ff1e7f0f0"
  },
  {
    "url": "posts/index.html",
    "revision": "184eb3c7f5fe04ed871bd1a8c5c4cb85"
  },
  {
    "url": "static/css/main.08c2f3f52d81df9fe015.css",
    "revision": "8efad7d7060b7162cc3ebdb94f967318"
  },
  {
    "url": "static/css/vendors.4ec0dc9070ea8128bd55.css",
    "revision": "8ceacd6286906a667c21221c5bd64a42"
  },
  {
    "url": "static/js/main.08c2f3f52d81df9fe015.js",
    "revision": "74c089af58cbd54d2b21b6b2cd9aa062"
  },
  {
    "url": "static/js/vendors.4ec0dc9070ea8128bd55.js",
    "revision": "9204d20b9942c34627e6aa1d716f7a90"
  },
  {
    "url": "tags/Actions/index.html",
    "revision": "4302d02cab7ec8de5db1db9e4a2e12c9"
  },
  {
    "url": "tags/Angular/index.html",
    "revision": "fb12f4a14d1f63762e6b22c37b7153d7"
  },
  {
    "url": "tags/AngularJS/index.html",
    "revision": "479a57098ecdf5ef9c0008ac8aa66850"
  },
  {
    "url": "tags/Apache/index.html",
    "revision": "46b2046ba35b9c4712817b0636998267"
  },
  {
    "url": "tags/Blog/index.html",
    "revision": "99dc4fd35322479031613b6cb7c86a76"
  },
  {
    "url": "tags/CI/index.html",
    "revision": "881dbc6a7287d99eca96877b89333070"
  },
  {
    "url": "tags/Diary/index.html",
    "revision": "9099ac2ea5276c14a449699bfad3fb64"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "19c4e9c86abc003a75a37a7fde3d79d1"
  },
  {
    "url": "tags/ExtJS/index.html",
    "revision": "314c722fad07f03d101c5d7fe8a8ca52"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "5598683ffdbd3b306bcad8c4439d188d"
  },
  {
    "url": "tags/Google/index.html",
    "revision": "0c2c9e6c9c06c74504ab46430f4100be"
  },
  {
    "url": "tags/Gulp/index.html",
    "revision": "8fd05e948eb7d346905887c4bfb4af10"
  },
  {
    "url": "tags/Hadoop/index.html",
    "revision": "92935ce5fd77690045d4671477d7fd66"
  },
  {
    "url": "tags/index.html",
    "revision": "228060a8ee26d96b62b7a564101b8d15"
  },
  {
    "url": "tags/IntelliJ IDEA/index.html",
    "revision": "40e48c122a4f8847949ced1e5b2541c4"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "da3f14c89a1c0ef5072db07ea1d23390"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "924431ead17b93e1f033e245817e083f"
  },
  {
    "url": "tags/JAWR/index.html",
    "revision": "0a601b0a2031f6e0f106f39014b3b555"
  },
  {
    "url": "tags/JSF/index.html",
    "revision": "80dedf3aef7e7152b1c01b3cab40fc19"
  },
  {
    "url": "tags/Karma/index.html",
    "revision": "90da6503855926727fec3229296b35a1"
  },
  {
    "url": "tags/Linux/index.html",
    "revision": "e1553c496940edb6cc717e5531761f19"
  },
  {
    "url": "tags/Node/index.html",
    "revision": "8e954e23fc36298cf2dc352bb908bacf"
  },
  {
    "url": "tags/NPM/index.html",
    "revision": "f7106e2ec9421889bb41f8c54ef1b314"
  },
  {
    "url": "tags/Oracle/index.html",
    "revision": "9405d22b69438295f81efbebb841207c"
  },
  {
    "url": "tags/PWA/index.html",
    "revision": "615aff846acd9bd685130df51dbd6a50"
  },
  {
    "url": "tags/Security/index.html",
    "revision": "1cf87f31aaa940b54b446c33d0c76959"
  },
  {
    "url": "tags/Shiro/index.html",
    "revision": "76536e208dfa1e2b9696a9bfcbe908ed"
  },
  {
    "url": "tags/Site/index.html",
    "revision": "b2dcb42521550b6a5c4cd24a0ba3e28d"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "1f18476389c5a02fa30c1eec8862bc60"
  },
  {
    "url": "tags/SpringMVC/index.html",
    "revision": "bc2279ad4bf672de3657daf4060524ba"
  },
  {
    "url": "tags/TravisCI/index.html",
    "revision": "d98e43be59b6377e3916c30406d528dd"
  },
  {
    "url": "tags/Ubuntu/index.html",
    "revision": "3a695ab339b05f94d284263cb25f9500"
  },
  {
    "url": "tags/VPS/index.html",
    "revision": "20b34f9fda9a44095a9201c2ee00b130"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "ec79dcf57c021738e919b1e8be165ea3"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "f8f43ba10155e8b2d03be115a83a4fe4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
