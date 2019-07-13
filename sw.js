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
    "revision": "1e4fe590330e56a6ec1229deeba25b39"
  },
  {
    "url": "categories/Debug/index.html",
    "revision": "d1428ffef65a8d1cb6d5882d138ad7ba"
  },
  {
    "url": "categories/index.html",
    "revision": "f671fb3732c8abd118e1e93b9ef23f66"
  },
  {
    "url": "categories/Note/index.html",
    "revision": "28a143b8eb0c2794f51db3766bb822be"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "c9a512e3bf3eb41072dca51d625eb2fa"
  },
  {
    "url": "index.html",
    "revision": "c8ed3b226308a1a199047d60809b232a"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/index.html",
    "revision": "5eec404db8a3e62d53ed47c9b31f37e7"
  },
  {
    "url": "posts/2015/10/25/index.html",
    "revision": "e2016de378cf3e675e99620661892e80"
  },
  {
    "url": "posts/2015/10/index.html",
    "revision": "a4f563863ce67c94a3514e2f575054c3"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/index.html",
    "revision": "24e163884b50f48890fe22d023298be9"
  },
  {
    "url": "posts/2015/11/10/index.html",
    "revision": "484a11cb0a9ef35af8692b30c1f4d204"
  },
  {
    "url": "posts/2015/11/index.html",
    "revision": "df6dd6c5c70f2e982aacece057744fe6"
  },
  {
    "url": "posts/2015/12/13/index.html",
    "revision": "347e82ff1fe80aff5f9a0317de2261a2"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/index.html",
    "revision": "7c97361d5e768eea26e020984f61922c"
  },
  {
    "url": "posts/2015/12/14/index.html",
    "revision": "c9cbc290e5f24977e5b14806dd0d5842"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/index.html",
    "revision": "62406ff62e1e3e8dc56a87bfc4e08835"
  },
  {
    "url": "posts/2015/12/27/index.html",
    "revision": "032d0d2c0452ee2aeb49e41368d2efc2"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/index.html",
    "revision": "ddbe2283c2b27bb8eb630632e05a74fa"
  },
  {
    "url": "posts/2015/12/index.html",
    "revision": "d5c046bd7fca71d038dacc8a68318aa9"
  },
  {
    "url": "posts/2015/index.html",
    "revision": "a5f4a20d159b096b958c20b621d38d01"
  },
  {
    "url": "posts/2016/01/01/index.html",
    "revision": "b0afe671ecd6166a5d5f65f0099f5541"
  },
  {
    "url": "posts/2016/01/01/review-2015/index.html",
    "revision": "ddad82cbb797e227dd744016f65f3ea9"
  },
  {
    "url": "posts/2016/01/11/index.html",
    "revision": "957cdb174cfc354f7383107059fed393"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/index.html",
    "revision": "02fb1ad44fa636680de246c218111cf3"
  },
  {
    "url": "posts/2016/01/12/index.html",
    "revision": "e46b540216913a5085f460705e6eef9a"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html",
    "revision": "e0a5b36c3e01d6b462daebfd68bad63d"
  },
  {
    "url": "posts/2016/01/index.html",
    "revision": "6150f00213ba3cfeb50db2654bd8a430"
  },
  {
    "url": "posts/2016/03/06/index.html",
    "revision": "c531428a0903531fc03f01c6d4399e9a"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/index.html",
    "revision": "38e3bc342cee814ffdcf94a294fedeae"
  },
  {
    "url": "posts/2016/03/index.html",
    "revision": "1f1f34e1fd882c5f0e8a82d8fbdddb0c"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/index.html",
    "revision": "c141f97320339cfd67099e8db6469f9e"
  },
  {
    "url": "posts/2016/04/09/index.html",
    "revision": "062e29336252b4fa5fc76a32f8d5ee74"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/index.html",
    "revision": "1eaa5ab7eeefe1d0992c379340b8e7d4"
  },
  {
    "url": "posts/2016/04/10/index.html",
    "revision": "45a8d42e7b078693039e22401cb7cada"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/index.html",
    "revision": "c0bdc2cf5595788aaf75b772ce0273cf"
  },
  {
    "url": "posts/2016/04/30/index.html",
    "revision": "467a73e89e52e8a5d4f84ee39873c612"
  },
  {
    "url": "posts/2016/04/index.html",
    "revision": "1948301d425234b49c109fdeeb4fa335"
  },
  {
    "url": "posts/2016/07/05/index.html",
    "revision": "9e8bca60f705067c725a28bfc23ff537"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/index.html",
    "revision": "46e165844d8f5efc005bddee0fe8413b"
  },
  {
    "url": "posts/2016/07/index.html",
    "revision": "bbc2a3676c4f42a8cc19b679f061ec78"
  },
  {
    "url": "posts/2016/index.html",
    "revision": "9f245708a99f3e2375be31c0ef672630"
  },
  {
    "url": "posts/2017/01/01/index.html",
    "revision": "b6998ebcac348dd1bb628ba966816cb1"
  },
  {
    "url": "posts/2017/01/01/review-2016/index.html",
    "revision": "e2760561d0beda0dca329e4bd539b850"
  },
  {
    "url": "posts/2017/01/index.html",
    "revision": "9a5a8047001fbdb70b65114ebd16b90f"
  },
  {
    "url": "posts/2017/03/12/index.html",
    "revision": "8fd4f8a041e75cf0057ec47d5a8c3be7"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/index.html",
    "revision": "5a60eb868304f28af27a31c06e98c603"
  },
  {
    "url": "posts/2017/03/index.html",
    "revision": "43dd8a3f97175324bc7efe3914ca15bb"
  },
  {
    "url": "posts/2017/05/05/index.html",
    "revision": "9d30298b7d5480280249c24832ba10d6"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/index.html",
    "revision": "b40a82abb4211300f314fea2b72c0ce1"
  },
  {
    "url": "posts/2017/05/index.html",
    "revision": "26e52a8f926265956e38c16b95bf164a"
  },
  {
    "url": "posts/2017/index.html",
    "revision": "2ed6cd48809b7380853afa34932d1f59"
  },
  {
    "url": "posts/2018/01/01/index.html",
    "revision": "3b21f93a4b0af73d95abcb2907e3da53"
  },
  {
    "url": "posts/2018/01/01/review-2017/index.html",
    "revision": "be813724af618c86745828a9b97fbec2"
  },
  {
    "url": "posts/2018/01/index.html",
    "revision": "ab08247077968daf05290acd12ad4bbb"
  },
  {
    "url": "posts/2018/03/03/index.html",
    "revision": "b842aa4234ecdfbd9b85faf5f80a673f"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/index.html",
    "revision": "b02f051c77260ddb2f5972db5de01fef"
  },
  {
    "url": "posts/2018/03/04/index.html",
    "revision": "e30f61480ab854664411d1d2d0fa3213"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html",
    "revision": "b0f961111dadbaa7577bced228771f93"
  },
  {
    "url": "posts/2018/03/index.html",
    "revision": "deb652863c001d372e71ee570c0d2a91"
  },
  {
    "url": "posts/2018/04/01/index.html",
    "revision": "3b355da3aac9a15f611e157e80393ef4"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/index.html",
    "revision": "a496d1cea7b38636ddaa4843c635aa3e"
  },
  {
    "url": "posts/2018/04/index.html",
    "revision": "7cde065cf4cfcfcfc5d02777862ba575"
  },
  {
    "url": "posts/2018/index.html",
    "revision": "9511df6ed5cd0f37e5fb266450f32b9e"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/index.html",
    "revision": "b48b60823c1edf30942f9cbb1ba6bdc2"
  },
  {
    "url": "posts/2019/07/07/index.html",
    "revision": "74dfa715e869e79bd03f46dd5400f601"
  },
  {
    "url": "posts/2019/07/index.html",
    "revision": "89c01bfa5289fde1fb0654b517085c24"
  },
  {
    "url": "posts/2019/index.html",
    "revision": "ef39126fa902c614afb6b778b2b8412e"
  },
  {
    "url": "posts/index.html",
    "revision": "ddc8052b7389e1c7882613e69f060d16"
  },
  {
    "url": "static/css/main.19b3cdeda4818bb3e994.css",
    "revision": "8efad7d7060b7162cc3ebdb94f967318"
  },
  {
    "url": "static/css/vendors.2355eb130ddd5c50c3ce.css",
    "revision": "8ceacd6286906a667c21221c5bd64a42"
  },
  {
    "url": "static/js/main.19b3cdeda4818bb3e994.js",
    "revision": "f03297b03f88464f398225fee60aefe6"
  },
  {
    "url": "static/js/vendors.2355eb130ddd5c50c3ce.js",
    "revision": "f739844f723010d60681335a3d993337"
  },
  {
    "url": "tags/Actions/index.html",
    "revision": "c45b48217f49f7e23963417c05514cf4"
  },
  {
    "url": "tags/Angular/index.html",
    "revision": "a4a04f5387b4f64ade345e20019ea2f1"
  },
  {
    "url": "tags/AngularJS/index.html",
    "revision": "8811291cf2172d762efa47f045f09695"
  },
  {
    "url": "tags/Apache/index.html",
    "revision": "8cde6435a66fb43fbdbe862892041d17"
  },
  {
    "url": "tags/Blog/index.html",
    "revision": "af3b49747e8454fe78a06fc5010f86aa"
  },
  {
    "url": "tags/CI/index.html",
    "revision": "5d8cbbcd1ff2c22c0f57a1afa3adf518"
  },
  {
    "url": "tags/Diary/index.html",
    "revision": "87958a92d7bf7deab4683ee1063c7958"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "ef57694316bea869115043299757bc00"
  },
  {
    "url": "tags/ExtJS/index.html",
    "revision": "dd46139b3934ad9bc645d0976b03f29d"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "01c017fa08c0da9c8cabf0711a7ecd0b"
  },
  {
    "url": "tags/Google/index.html",
    "revision": "21065290da54b1adae5177b8cf5b5859"
  },
  {
    "url": "tags/Gulp/index.html",
    "revision": "65c01076c67cbec1bef58a6de99d7554"
  },
  {
    "url": "tags/Hadoop/index.html",
    "revision": "7bf167bcd67c2c4bd30a97a3c57c1969"
  },
  {
    "url": "tags/index.html",
    "revision": "f671fb3732c8abd118e1e93b9ef23f66"
  },
  {
    "url": "tags/IntelliJ IDEA/index.html",
    "revision": "c2fec6562ed046cbcdc11356f925a103"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "9dc144afea7a2a8898b020f598228c16"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "b65399e9849ec14bd00c6ce69b0e67ac"
  },
  {
    "url": "tags/JAWR/index.html",
    "revision": "69527df935ada8a1129a10b6151774a1"
  },
  {
    "url": "tags/JSF/index.html",
    "revision": "3061663f2bd0f216304c11e87d1a02d2"
  },
  {
    "url": "tags/Karma/index.html",
    "revision": "61fb8ef29867e0f3ec160a869f05ac03"
  },
  {
    "url": "tags/Linux/index.html",
    "revision": "611c5d1a1b26c3783744bb4cbe92a926"
  },
  {
    "url": "tags/Node/index.html",
    "revision": "227ad950587eff742e74dca1968c6fcb"
  },
  {
    "url": "tags/NPM/index.html",
    "revision": "6f47c790d936400d514f4753a23f072f"
  },
  {
    "url": "tags/Oracle/index.html",
    "revision": "b8421a3d61dfa817da303898c2848584"
  },
  {
    "url": "tags/PWA/index.html",
    "revision": "1357970d1bd8b68ba11e5984c2b022f9"
  },
  {
    "url": "tags/Security/index.html",
    "revision": "6332f115b962f6b06333f917b4912746"
  },
  {
    "url": "tags/Shiro/index.html",
    "revision": "a4280c1b28dbb19d40c486dd29e5d98d"
  },
  {
    "url": "tags/Site/index.html",
    "revision": "2d53b10296d02fe668723e1f57235074"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "e76745d25b21b12c9cff61847214b720"
  },
  {
    "url": "tags/SpringMVC/index.html",
    "revision": "70ba19a1fa76e0b5e1ef006e4b3c43e9"
  },
  {
    "url": "tags/TravisCI/index.html",
    "revision": "3523132f1f92a746e2e67c6511248f7f"
  },
  {
    "url": "tags/Ubuntu/index.html",
    "revision": "2525789cbacece20a98c78f4d6a09df1"
  },
  {
    "url": "tags/VPS/index.html",
    "revision": "e9789d93903e143e76397dcf38e75b8d"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "ef89d161cc6c64465f56d907a0547c15"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "38212c36bc84d68f6d7124a2d70b0510"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
