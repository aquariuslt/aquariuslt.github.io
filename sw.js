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
    "revision": "6a0d333e9d8aa62326bafad3b203f7a7"
  },
  {
    "url": "categories/Debug/index.html",
    "revision": "3bc8d1d5e6b8479b26aceb631bb90a1c"
  },
  {
    "url": "categories/index.html",
    "revision": "96d59ea7faaa719de7769da111d5472a"
  },
  {
    "url": "categories/Note/index.html",
    "revision": "05d58664b0aec392b7bc09ec5429c727"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "1f7925d63fc6513979150c8c3cac809a"
  },
  {
    "url": "index.html",
    "revision": "cc181ebbf44d263a17599f81dc319fa4"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/index.html",
    "revision": "59a60648286468d3b6243e741a296b76"
  },
  {
    "url": "posts/2015/10/25/index.html",
    "revision": "183208bf56e00c86dd1e1c7c34db4c49"
  },
  {
    "url": "posts/2015/10/index.html",
    "revision": "ad865d6796c60312a1adaa5b3d5165ce"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/index.html",
    "revision": "ac93fbf6eb05ff51f2eea4215b4b6987"
  },
  {
    "url": "posts/2015/11/10/index.html",
    "revision": "cacc5a53ad0033b180375f978200a17b"
  },
  {
    "url": "posts/2015/11/index.html",
    "revision": "d1e6ee0c52f7fe6e1a99fd09a5a8475a"
  },
  {
    "url": "posts/2015/12/13/index.html",
    "revision": "4886b77aa96358876ca7b547d64fb7b5"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/index.html",
    "revision": "5be93a8d4237b03445087223a10efb29"
  },
  {
    "url": "posts/2015/12/14/index.html",
    "revision": "f2932bd538f27b2f598c04ba4f2e751b"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/index.html",
    "revision": "257b0f25330c4ae801d149acb8d9f0db"
  },
  {
    "url": "posts/2015/12/27/index.html",
    "revision": "f6dfa844181f487b86780a7f99100ec0"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/index.html",
    "revision": "376dcadcb8f1da5293d4ea3d2e4befa0"
  },
  {
    "url": "posts/2015/12/index.html",
    "revision": "a3f2599373ad3b7fef7a1381ea6c0824"
  },
  {
    "url": "posts/2015/index.html",
    "revision": "eea8f337385e366d936f997268d282eb"
  },
  {
    "url": "posts/2016/01/01/index.html",
    "revision": "fe38fb4d52f896a554b6a697ba582c0c"
  },
  {
    "url": "posts/2016/01/01/review-2015/index.html",
    "revision": "5ffe41fd97e5bde07c54a7f82839d094"
  },
  {
    "url": "posts/2016/01/11/index.html",
    "revision": "e7b6397ef293e785d1e1d27636f7092e"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/index.html",
    "revision": "6124f2228355e517aa53935b6ddd83b3"
  },
  {
    "url": "posts/2016/01/12/index.html",
    "revision": "70dddf857707494892b2c9220470eb53"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html",
    "revision": "c380c8fc30c6913bd4e28a3aa5f07da8"
  },
  {
    "url": "posts/2016/01/index.html",
    "revision": "243782a5e7b07c0401d8e21a8354b151"
  },
  {
    "url": "posts/2016/03/06/index.html",
    "revision": "3199245026f182084599f336b2483078"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/index.html",
    "revision": "bbfdade98f4e28a1941458d0baa49229"
  },
  {
    "url": "posts/2016/03/index.html",
    "revision": "7864f2127f31a915d4c253ffb42e690a"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/index.html",
    "revision": "c353830bbab265da9f29862b3150987a"
  },
  {
    "url": "posts/2016/04/09/index.html",
    "revision": "206ed35eff61e02d41da903de00564d0"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/index.html",
    "revision": "d77a2c4ba8e5103e42b6bd6987d7e978"
  },
  {
    "url": "posts/2016/04/10/index.html",
    "revision": "106050ff42ffeb569a123842054ed636"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/index.html",
    "revision": "7eab1e86a2617ae55e2ddc75dc2c05fb"
  },
  {
    "url": "posts/2016/04/30/index.html",
    "revision": "4372a6680782ddb079183f25c1b1317d"
  },
  {
    "url": "posts/2016/04/index.html",
    "revision": "2c7155a4c0f97442be8802a3dd98ef19"
  },
  {
    "url": "posts/2016/07/05/index.html",
    "revision": "22125dd239a86d5a8ac3cee79f8f87fc"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/index.html",
    "revision": "548a1705368596df01fb5fe3c11ccf0c"
  },
  {
    "url": "posts/2016/07/index.html",
    "revision": "acd0b549316eda164aca03ea7e0f30f0"
  },
  {
    "url": "posts/2016/index.html",
    "revision": "f646404f3e61ec888832808e98dc0633"
  },
  {
    "url": "posts/2017/01/01/index.html",
    "revision": "22f59881cf550c2ec45eff12720d2f7b"
  },
  {
    "url": "posts/2017/01/01/review-2016/index.html",
    "revision": "f201b7c69d06e724530a20e672880e48"
  },
  {
    "url": "posts/2017/01/index.html",
    "revision": "0101c207df526702ff2fd2dd89f83afe"
  },
  {
    "url": "posts/2017/03/12/index.html",
    "revision": "1e1122cfb199d5fdb84719b7b77a9224"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/index.html",
    "revision": "1e1fac65112bb5bd46fa38fe3c3e909d"
  },
  {
    "url": "posts/2017/03/index.html",
    "revision": "faf58a3d53f76db3942e7b112542fadd"
  },
  {
    "url": "posts/2017/05/05/index.html",
    "revision": "631f8242275506c41329fa8eb8d67f73"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/index.html",
    "revision": "9b062894fd766e2a02d0c97055f1e77d"
  },
  {
    "url": "posts/2017/05/index.html",
    "revision": "93e01769a6ca4c95c3a0a5081375c6b6"
  },
  {
    "url": "posts/2017/index.html",
    "revision": "14c84c1e1066267499c115045a4f0a4a"
  },
  {
    "url": "posts/2018/01/01/index.html",
    "revision": "f05e5460068b43b0c8464714c1213b76"
  },
  {
    "url": "posts/2018/01/01/review-2017/index.html",
    "revision": "5a726280b4931028936875f27836cb75"
  },
  {
    "url": "posts/2018/01/index.html",
    "revision": "8fc3889d32d39eab4965bfd766867708"
  },
  {
    "url": "posts/2018/03/03/index.html",
    "revision": "d3790271b2c3b549a1503b6ee19166f0"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/index.html",
    "revision": "3f056ddd0d052b00a676c473c0eb0633"
  },
  {
    "url": "posts/2018/03/04/index.html",
    "revision": "632b19d6f45543ef51b0fe42ebae8056"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html",
    "revision": "5050820da0f3d3d3c942e85db3af543b"
  },
  {
    "url": "posts/2018/03/index.html",
    "revision": "1c150894f991e29b32b8e9e6bd0e3942"
  },
  {
    "url": "posts/2018/04/01/index.html",
    "revision": "bd8aa88c596536d30b201d0a9ff7e1f1"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/index.html",
    "revision": "ef48ae33fb478387302dda9c2aebe3ee"
  },
  {
    "url": "posts/2018/04/index.html",
    "revision": "937e422c1578508cb10ea628158cee7a"
  },
  {
    "url": "posts/2018/index.html",
    "revision": "68f5053f17657aa654876218673ba9b7"
  },
  {
    "url": "posts/index.html",
    "revision": "2d996f37c91e088bd5f895a4958e519a"
  },
  {
    "url": "static/css/main.56a659ba0067190ff523.css",
    "revision": "8efad7d7060b7162cc3ebdb94f967318"
  },
  {
    "url": "static/css/vendors.4e38329237f387cf1698.css",
    "revision": "8ceacd6286906a667c21221c5bd64a42"
  },
  {
    "url": "static/js/main.56a659ba0067190ff523.js",
    "revision": "33929b9f5771c243c5b5ad663895af70"
  },
  {
    "url": "static/js/vendors.4e38329237f387cf1698.js",
    "revision": "29544d3244a83164bc69739ecf4b682f"
  },
  {
    "url": "tags/Angular/index.html",
    "revision": "1f3d023c7cd05f66168c9c40e62edc30"
  },
  {
    "url": "tags/AngularJS/index.html",
    "revision": "c910889f5d2637ba771a3c836b62fe27"
  },
  {
    "url": "tags/Apache/index.html",
    "revision": "433a2eed5f56c86177555ad6011086f2"
  },
  {
    "url": "tags/Blog/index.html",
    "revision": "fc72427ddd97272c63eb029b9ec7a1c7"
  },
  {
    "url": "tags/Diary/index.html",
    "revision": "1463592fe875a6787ab9b083b1d01520"
  },
  {
    "url": "tags/ExtJS/index.html",
    "revision": "dbfb35a3e914f48a583dd08f8e29bb11"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "f3dbd2a30cc256e1af0736f3dd9e77f5"
  },
  {
    "url": "tags/Google/index.html",
    "revision": "0292ad3664b3e13cd52a8ca46b3165c2"
  },
  {
    "url": "tags/Gulp/index.html",
    "revision": "7a8d4fd3d443d50296387a9763f823de"
  },
  {
    "url": "tags/Hadoop/index.html",
    "revision": "20d2f0016df90a6bb77161130663ba0a"
  },
  {
    "url": "tags/index.html",
    "revision": "90f896a528d3aa1cb0d051192755997b"
  },
  {
    "url": "tags/IntelliJ IDEA/index.html",
    "revision": "57b54733bcc1e26bc1f51aa2b763c7b2"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "f0c8ea5a97247ac82122f53b80a1ee96"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "292e9af80ae71e57240afa95f6f10e53"
  },
  {
    "url": "tags/JAWR/index.html",
    "revision": "96f66b8e14a43086aa45bfbe500c8621"
  },
  {
    "url": "tags/JSF/index.html",
    "revision": "178c579d40cfd03d39420b424712cc82"
  },
  {
    "url": "tags/Karma/index.html",
    "revision": "de3418eeaec34602089e3618cecdc027"
  },
  {
    "url": "tags/Linux/index.html",
    "revision": "443beb0781a88c9d578c7f3fd872599f"
  },
  {
    "url": "tags/Node/index.html",
    "revision": "ad74ba4c39ffb329c7807a4f4a0bed5d"
  },
  {
    "url": "tags/Oracle/index.html",
    "revision": "6e3ef9bdd9d79357470eb085fae7575b"
  },
  {
    "url": "tags/PWA/index.html",
    "revision": "bb831a138e66b77defa34c11860ab78e"
  },
  {
    "url": "tags/Security/index.html",
    "revision": "6c28a03509233fc0fc7fef2edd52e463"
  },
  {
    "url": "tags/Shiro/index.html",
    "revision": "84f41754cb8b9c69d12cdb6b4a95bd9f"
  },
  {
    "url": "tags/Site/index.html",
    "revision": "73698d4acffe501d5b76f744f60568a0"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "3c5e36c6cd2093a8573bb42df77754ac"
  },
  {
    "url": "tags/SpringMVC/index.html",
    "revision": "cf7b696a00976bc02aae5d3003d48e03"
  },
  {
    "url": "tags/Ubuntu/index.html",
    "revision": "88b2fad73703872dff5424b64365dbd1"
  },
  {
    "url": "tags/VPS/index.html",
    "revision": "7fdbaa2b8c8e25075506b876d88b9b2d"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "303a16ba7e3d288d6968d5bcc63802c7"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "1dd4117c29ac780f325b63626bd1187e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
