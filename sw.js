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
    "revision": "429a482c1677fd5a41c7bbc6e1770394"
  },
  {
    "url": "categories/Debug/index.html",
    "revision": "4edc03ddcf05bb3ceac2b5d326cd0beb"
  },
  {
    "url": "categories/index.html",
    "revision": "d7380283fd8eb127d6e393723806c64d"
  },
  {
    "url": "categories/Note/index.html",
    "revision": "ee61557ef8fb0c5ca483f65316ee8dd6"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "4569977ad314d9cc11f22014e5d33c51"
  },
  {
    "url": "index.html",
    "revision": "b797c2bb86826c292c664870bfcef543"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/index.html",
    "revision": "2f9e052f75e0c7cd2a48171d8204acf1"
  },
  {
    "url": "posts/2015/10/25/index.html",
    "revision": "5b6a5832d77564f8aa1736e9d68e3bb3"
  },
  {
    "url": "posts/2015/10/index.html",
    "revision": "d816796050629d9341b9c909bfa12a50"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/index.html",
    "revision": "c8558282a99248f79a9ea07073b0162c"
  },
  {
    "url": "posts/2015/11/10/index.html",
    "revision": "933d888bcf602e0e025db1ab5e80a3a1"
  },
  {
    "url": "posts/2015/11/index.html",
    "revision": "7241bbc5f453efa73802f06decf02209"
  },
  {
    "url": "posts/2015/12/13/index.html",
    "revision": "da3ac5a84ba02e91e3cf7c96327d1355"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/index.html",
    "revision": "08d0a34942f44f85f536ad47735ccf7d"
  },
  {
    "url": "posts/2015/12/14/index.html",
    "revision": "c632b69b4d2f14dcf3ca66143950d59f"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/index.html",
    "revision": "a0603c115b7fb37de96ee2a2e20fa7ca"
  },
  {
    "url": "posts/2015/12/27/index.html",
    "revision": "2abefef69c72a0ba4036884f4561a909"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/index.html",
    "revision": "ce43489172ea090f9cb0f3fdddbf3360"
  },
  {
    "url": "posts/2015/12/index.html",
    "revision": "5b4361abb4ec0087e169601988f93550"
  },
  {
    "url": "posts/2015/index.html",
    "revision": "7c52644c6f95d437b933efba3b07980d"
  },
  {
    "url": "posts/2016/01/01/index.html",
    "revision": "0d941fde6322b4df8eb930e6f8b08337"
  },
  {
    "url": "posts/2016/01/01/review-2015/index.html",
    "revision": "6b8578818152331703aacae42605d6fa"
  },
  {
    "url": "posts/2016/01/11/index.html",
    "revision": "45097a36a9306c11e02a34e680651123"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/index.html",
    "revision": "0149ff96ee8c10d6a9e8da5fb21f4b47"
  },
  {
    "url": "posts/2016/01/12/index.html",
    "revision": "8e43be230ed7ac7ff705fb15d2778ac8"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html",
    "revision": "085dd90504290f9e93a8753c911cd15d"
  },
  {
    "url": "posts/2016/01/index.html",
    "revision": "288893be09e7ceba8bb3bd2434fa4e49"
  },
  {
    "url": "posts/2016/03/06/index.html",
    "revision": "34f27cdc0b917e25332ea9e59de933e5"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/index.html",
    "revision": "0da7cc608478ded1ee1633b40f73cf89"
  },
  {
    "url": "posts/2016/03/index.html",
    "revision": "cb86b72d3ce48a117994b3cd1ffc9aac"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/index.html",
    "revision": "6292160cf5f960e3606c0f7ee889ad3d"
  },
  {
    "url": "posts/2016/04/09/index.html",
    "revision": "ea59c573861c574a9d58a4d48417193e"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/index.html",
    "revision": "3b498818dd6360a844815a201926fd27"
  },
  {
    "url": "posts/2016/04/10/index.html",
    "revision": "c7a0808751db8f4df3d5c6670b6bdc6d"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/index.html",
    "revision": "80c145dcfe9e3449b03976ab010b5955"
  },
  {
    "url": "posts/2016/04/30/index.html",
    "revision": "d02293fde0c8bd46b76e8940944f2455"
  },
  {
    "url": "posts/2016/04/index.html",
    "revision": "22d23a1181634e154810f71e3e418b77"
  },
  {
    "url": "posts/2016/07/05/index.html",
    "revision": "c96bb37ee562d3742b917446697dbfa2"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/index.html",
    "revision": "665c13fe0870a0003a59014e7e571057"
  },
  {
    "url": "posts/2016/07/index.html",
    "revision": "52c7e81af7b0197f66d4cfb00b126866"
  },
  {
    "url": "posts/2016/index.html",
    "revision": "7fa474df585ab66a4a2fa04c9b236c8f"
  },
  {
    "url": "posts/2017/01/01/index.html",
    "revision": "a87c5a234afe5e84bd9fe31c618edea1"
  },
  {
    "url": "posts/2017/01/01/review-2016/index.html",
    "revision": "9d1ca3dca502a6790392fbd087186761"
  },
  {
    "url": "posts/2017/01/index.html",
    "revision": "4dfab987dee270b2fbeb9f52fdf95efb"
  },
  {
    "url": "posts/2017/03/12/index.html",
    "revision": "85282d1005a95467040279a1a36e58d7"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/index.html",
    "revision": "538d8f96a28a94a5744bfe28b43fe917"
  },
  {
    "url": "posts/2017/03/index.html",
    "revision": "ef937e1c42e3eb0768dfd6cbd2b2b4a1"
  },
  {
    "url": "posts/2017/05/05/index.html",
    "revision": "1c4e0b4b882bd31a531d0cde138d9ad0"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/index.html",
    "revision": "efa7e9abafa063ec7db2497393b2e560"
  },
  {
    "url": "posts/2017/05/index.html",
    "revision": "e98e6eae9d773e6276d69deba30ed5dd"
  },
  {
    "url": "posts/2017/index.html",
    "revision": "aca89601d7b4b5f5e37aae2349638a1c"
  },
  {
    "url": "posts/2018/01/01/index.html",
    "revision": "41788d46c1aa60ed91d4e7f161aec89a"
  },
  {
    "url": "posts/2018/01/01/review-2017/index.html",
    "revision": "2528f0ef8f2445477fc5424aaa208690"
  },
  {
    "url": "posts/2018/01/index.html",
    "revision": "f79ede70d1cf641a7befcfdec3693bce"
  },
  {
    "url": "posts/2018/03/03/index.html",
    "revision": "f483a3fd827c7db5e19ab28c512c4ce4"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/index.html",
    "revision": "290a6019ee34f2e4bf13fd1c26977386"
  },
  {
    "url": "posts/2018/03/04/index.html",
    "revision": "d7e63db6593f9639c0b831e73c9da72f"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html",
    "revision": "53d6a752ca07375402b04bc10714d1f1"
  },
  {
    "url": "posts/2018/03/index.html",
    "revision": "2a268c9cbfd2867529b4a57c12e27ade"
  },
  {
    "url": "posts/2018/04/01/index.html",
    "revision": "d7fd3fd6c0bff1d8636d015e72b3edda"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/index.html",
    "revision": "89169c5af6503077dd402e93e2c2c448"
  },
  {
    "url": "posts/2018/04/index.html",
    "revision": "1e3ea928553af1095601774dbc9a71fd"
  },
  {
    "url": "posts/2018/index.html",
    "revision": "886148c554948069c7f29f7942335963"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/index.html",
    "revision": "a5dc37f9b08fe98efc33f1e07c778024"
  },
  {
    "url": "posts/2019/07/07/index.html",
    "revision": "964a2c39da84ac02604cc2a630bed1c3"
  },
  {
    "url": "posts/2019/07/index.html",
    "revision": "8c8fafa0a11b8eba87c92df7daa65528"
  },
  {
    "url": "posts/2019/index.html",
    "revision": "e366199888e9388c00ec4271ccd15a11"
  },
  {
    "url": "posts/index.html",
    "revision": "1d6673f8b3de1e65be2e11057052c4d0"
  },
  {
    "url": "static/css/main.76f62c9cd135151ef502.css",
    "revision": "8efad7d7060b7162cc3ebdb94f967318"
  },
  {
    "url": "static/css/vendors.13468abd7caab2fa6d1b.css",
    "revision": "8ceacd6286906a667c21221c5bd64a42"
  },
  {
    "url": "static/js/main.76f62c9cd135151ef502.js",
    "revision": "a7db4b46c4b414d9a73d9fa0187d4269"
  },
  {
    "url": "static/js/vendors.13468abd7caab2fa6d1b.js",
    "revision": "a2c251a3ebc0e95eafca037febac72d3"
  },
  {
    "url": "tags/Actions/index.html",
    "revision": "026a8877f2b19a0296c1571aebf49173"
  },
  {
    "url": "tags/Angular/index.html",
    "revision": "1b90c233bccbc7f7a57e71b2f5a36c47"
  },
  {
    "url": "tags/AngularJS/index.html",
    "revision": "519902237e7f00ba485cf3d4c9178d73"
  },
  {
    "url": "tags/Apache/index.html",
    "revision": "ae23d05c35a5e933f7510b845087579b"
  },
  {
    "url": "tags/Blog/index.html",
    "revision": "e47592593c9786e1cb2ce5fa010bf21b"
  },
  {
    "url": "tags/CI/index.html",
    "revision": "525bb4f4c9150cdcd1e0d4807dc5a96d"
  },
  {
    "url": "tags/Diary/index.html",
    "revision": "052b4602e52d37190baa0138b77a08ec"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "02dbdbfba52e41626c2c0653c6898fea"
  },
  {
    "url": "tags/ExtJS/index.html",
    "revision": "96677004723ad2e4f8ef74a6e9aa7e36"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "bac16de6f656f4e56894f576682d8bb4"
  },
  {
    "url": "tags/Google/index.html",
    "revision": "a548885f8a3d534e7eeafe4c61866c27"
  },
  {
    "url": "tags/Gulp/index.html",
    "revision": "0b02ab55a123e5c1c313e9190feabe4d"
  },
  {
    "url": "tags/Hadoop/index.html",
    "revision": "4cfffe8777eb141c67119c8bd07de58d"
  },
  {
    "url": "tags/index.html",
    "revision": "d7380283fd8eb127d6e393723806c64d"
  },
  {
    "url": "tags/IntelliJ IDEA/index.html",
    "revision": "429879589be9b250349a1f4bb4740eb5"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "9026b0176cbec29a3c61ce89b75bd3e4"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "65082274ef3b72213a7e6cc0fe7b63db"
  },
  {
    "url": "tags/JAWR/index.html",
    "revision": "193222da1f3da82b2df0f09765362408"
  },
  {
    "url": "tags/JSF/index.html",
    "revision": "a65ed03c83428daf3b05bea98f8b07e3"
  },
  {
    "url": "tags/Karma/index.html",
    "revision": "a66a226cab1a373af8578f3fdb8e9a3b"
  },
  {
    "url": "tags/Linux/index.html",
    "revision": "9831c0126cfc0fb57ba531d04240bbe1"
  },
  {
    "url": "tags/Node/index.html",
    "revision": "d9f3df921e9ab0f8702b355279409ac0"
  },
  {
    "url": "tags/NPM/index.html",
    "revision": "fd99edd6dda7bd53c6bb9ffef75f1790"
  },
  {
    "url": "tags/Oracle/index.html",
    "revision": "91011fa33c9a4f3417b96bcbc5f20d1c"
  },
  {
    "url": "tags/PWA/index.html",
    "revision": "f4b8335003abe99d39f130c47fe8f41b"
  },
  {
    "url": "tags/Security/index.html",
    "revision": "196b0e0ac4823c6d99adcf60ab23ac42"
  },
  {
    "url": "tags/Shiro/index.html",
    "revision": "d5e788940c7338d8fbb74fb87c1d3209"
  },
  {
    "url": "tags/Site/index.html",
    "revision": "28aec24922a3eb3f332fa421f70d6b2b"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "8f4be58a223c71e93d1d3cd511f8069c"
  },
  {
    "url": "tags/SpringMVC/index.html",
    "revision": "30135ceb5ebbc5a140d4a2ab848102ff"
  },
  {
    "url": "tags/TravisCI/index.html",
    "revision": "e377f919be4cfe6f42fdbdc63e8ca10a"
  },
  {
    "url": "tags/Ubuntu/index.html",
    "revision": "872a1961f41303eab73c8eb7271d23ac"
  },
  {
    "url": "tags/VPS/index.html",
    "revision": "bc068d5de7a4f6d55cb1b5579a159d91"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "2f173c16620b7ab7729a78ea57043637"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "778e320122b76781ac40a14c375e6240"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
