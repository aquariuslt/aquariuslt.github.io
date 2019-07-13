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
    "revision": "fc77e46a32eafffc4f4cde40b3bff784"
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
    "revision": "090953aa74ad622215da326dfa3bb800"
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
    "revision": "06f11c522f3f16c47c4643cff17888de"
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
    "revision": "baf6a485f17cc215fdb98391fc010352"
  },
  {
    "url": "posts/2015/12/14/index.html",
    "revision": "0d9428574197315e012cf91d529be7bd"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/index.html",
    "revision": "28630b6dcd1f62bdd0f9963fa7391b93"
  },
  {
    "url": "posts/2015/12/27/index.html",
    "revision": "5138e3b8039a83289a46ecdba6884655"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/index.html",
    "revision": "002e35501416be7527951af15b957c55"
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
    "revision": "4908607a1f8bf24e26966b5c8fe51d2f"
  },
  {
    "url": "posts/2016/01/11/index.html",
    "revision": "3d6e27fee43b55fc8ef39d611b35cd33"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/index.html",
    "revision": "88dadedd9edeaa85d86f28472cb71616"
  },
  {
    "url": "posts/2016/01/12/index.html",
    "revision": "71a6fe543c262ed71b970a3992ae6713"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html",
    "revision": "765868eff948c52f518bdf2d92e6a611"
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
    "revision": "5312f6268c75796d04ad39d392f84453"
  },
  {
    "url": "posts/2016/03/index.html",
    "revision": "0c02510032ba6d92bc027c6b0b394519"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/index.html",
    "revision": "495cca2607992fca188645687ae86db4"
  },
  {
    "url": "posts/2016/04/09/index.html",
    "revision": "e4582b0cc9710f9c41642d8b8ff3de2a"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/index.html",
    "revision": "f089b85520a701d0e9fd4604ee4f0695"
  },
  {
    "url": "posts/2016/04/10/index.html",
    "revision": "57b0b1bcc93534825f9dfe7f605a8cd2"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/index.html",
    "revision": "b935d6db1f3dc9082630fe3001aa5741"
  },
  {
    "url": "posts/2016/04/30/index.html",
    "revision": "5b5f593a5633fd2dec80e912cb4a95f8"
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
    "revision": "ad8738f1c84fb3b3c182df74cb8fc7af"
  },
  {
    "url": "posts/2016/07/index.html",
    "revision": "9387924f40e40fc5b467b8c65006761a"
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
    "revision": "284d6948278e0d3eb0cfe18603d440c2"
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
    "revision": "f5e41d33723ea48fe079285cc6b4a80a"
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
    "revision": "76d1075e1b93b39f2dd00fda0c8abfcf"
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
    "revision": "1491763e3b37c7431cf4df24a5688b18"
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
    "revision": "89482938bb95db06dfa03a7e636e3fe8"
  },
  {
    "url": "posts/2018/03/04/index.html",
    "revision": "6a3cdfcf97b2325baffb7aa7c9c5c144"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html",
    "revision": "8fdd109bdfcdcc78f73291e4f536f158"
  },
  {
    "url": "posts/2018/03/index.html",
    "revision": "a1bcb8895513ea947abc142c1bd23530"
  },
  {
    "url": "posts/2018/04/01/index.html",
    "revision": "ff03c15254f3d7be304c9d7ae8020b06"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/index.html",
    "revision": "0f30cd6eaba7e5f984619d835ed2343f"
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
    "revision": "4ca08d82a24d46d93e09380eb8e7518c"
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
    "revision": "efda1172ea42f4c218991239157811a0"
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
    "revision": "95954e4eb903013d710cc0f617feec7b"
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
    "revision": "9e659dec5013c6466a4ba2dea4dd6338"
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
