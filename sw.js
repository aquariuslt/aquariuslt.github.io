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
    "revision": "e13934ffd8a8c3dfa25aee1cef1e792d"
  },
  {
    "url": "categories/Debug/index.html",
    "revision": "c856fc017d74c14bde054f5cb3d77261"
  },
  {
    "url": "categories/index.html",
    "revision": "e07c03f9a914fbe59d68ce8400724263"
  },
  {
    "url": "categories/Note/index.html",
    "revision": "8beb29c9e5fb8e1375710750ddc92745"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "82ed1c22fb5d2020a5ec2b1a035d8608"
  },
  {
    "url": "index.html",
    "revision": "238898ffcf40d0806cdcac1ace540873"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/index.html",
    "revision": "5110701ba134898143e286285e003a64"
  },
  {
    "url": "posts/2015/10/25/index.html",
    "revision": "2d0666b6cb26d762be763c73572c2d24"
  },
  {
    "url": "posts/2015/10/index.html",
    "revision": "41b4c147a299e6ec8e8695070726e800"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/index.html",
    "revision": "2d4cf77035dcf548c04dd98a68658041"
  },
  {
    "url": "posts/2015/11/10/index.html",
    "revision": "551a8f063c11e142e3e18a8b74bb6a38"
  },
  {
    "url": "posts/2015/11/index.html",
    "revision": "9ca17ff2859f82ff1cc78d3b25009d4f"
  },
  {
    "url": "posts/2015/12/13/index.html",
    "revision": "1403bd10a74269e9a058a5a0cf33cd06"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/index.html",
    "revision": "3512cd8375b2156eaa09ffdb48df75fd"
  },
  {
    "url": "posts/2015/12/14/index.html",
    "revision": "d128d33a1f489b5891fd47a515f733e3"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/index.html",
    "revision": "b68a91996bd0ecd12a5e5f9d51aada0e"
  },
  {
    "url": "posts/2015/12/27/index.html",
    "revision": "195f39dea55600625dc315a20d974e1d"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/index.html",
    "revision": "af18340d64d7c040074039fa49383936"
  },
  {
    "url": "posts/2015/12/index.html",
    "revision": "d72646167e507282f781f405967bcd7e"
  },
  {
    "url": "posts/2015/index.html",
    "revision": "3d90e85ad1366db990d1d5c6e8f4f640"
  },
  {
    "url": "posts/2016/01/01/index.html",
    "revision": "bd3870327533803ff9afccd1cc53da1d"
  },
  {
    "url": "posts/2016/01/01/review-2015/index.html",
    "revision": "b8eb49db3b892638ad40b95d9fc22f2b"
  },
  {
    "url": "posts/2016/01/11/index.html",
    "revision": "2beb9131529fcd66fb0c3a681d63eefa"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/index.html",
    "revision": "2cacf6e2ecfe6f23e75d4f7c7d312b2d"
  },
  {
    "url": "posts/2016/01/12/index.html",
    "revision": "b0b93c2fea06277cd06b21411fba4b82"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html",
    "revision": "0a781ddb8f6e79b8461023aee2cc6376"
  },
  {
    "url": "posts/2016/01/index.html",
    "revision": "a981d5d86e0d7a5eb0b5ff040346ad74"
  },
  {
    "url": "posts/2016/03/06/index.html",
    "revision": "705f74da21700a635b7b50fca5cf2f85"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/index.html",
    "revision": "52c5ea44d935389a47679559ef8bbc0e"
  },
  {
    "url": "posts/2016/03/index.html",
    "revision": "bbb313d67ac940f0729586c656a6bcdb"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/index.html",
    "revision": "1845dffa161a7fe309d496ee560e37f3"
  },
  {
    "url": "posts/2016/04/09/index.html",
    "revision": "5183068f52fdb9952c606a7b67d3de20"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/index.html",
    "revision": "e5cf4ae26c805d9444f008aaa52286af"
  },
  {
    "url": "posts/2016/04/10/index.html",
    "revision": "06c358ae5f00f56093b04182d2a83d9e"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/index.html",
    "revision": "91195bf774ce27ac09897d56cd2a97ec"
  },
  {
    "url": "posts/2016/04/30/index.html",
    "revision": "003fe3f89940efdbf83a4d7283e0f2ee"
  },
  {
    "url": "posts/2016/04/index.html",
    "revision": "1171813d8584b7bbecbf38565b6b4058"
  },
  {
    "url": "posts/2016/07/05/index.html",
    "revision": "f64343f9cf83910b37adec1a3d0411f9"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/index.html",
    "revision": "cdbcb2709b37709e1a5f1258097a3f4b"
  },
  {
    "url": "posts/2016/07/index.html",
    "revision": "f4d4bfc8361334b21530d70e040a6a9d"
  },
  {
    "url": "posts/2016/index.html",
    "revision": "d9713c372c0bfaec6b174199c37d740c"
  },
  {
    "url": "posts/2017/01/01/index.html",
    "revision": "ee079111f9e667700e66ffff5eb639ac"
  },
  {
    "url": "posts/2017/01/01/review-2016/index.html",
    "revision": "1593ad99fadc3633ed676b068afe595d"
  },
  {
    "url": "posts/2017/01/index.html",
    "revision": "1ee8927c9c0d3879ad27468615201d98"
  },
  {
    "url": "posts/2017/03/12/index.html",
    "revision": "a6a4603d26f47389a79e5deea4ca0eb7"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/index.html",
    "revision": "b2ebcf592acb98e926d6413ca723b508"
  },
  {
    "url": "posts/2017/03/index.html",
    "revision": "af86c3bcd382f9a449c706c02f0fb34e"
  },
  {
    "url": "posts/2017/05/05/index.html",
    "revision": "bafadc8fc083d81dfe2b05ce3186bf9c"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/index.html",
    "revision": "c82fe7d1533f5825743e094cd7227865"
  },
  {
    "url": "posts/2017/05/index.html",
    "revision": "bf67099db56f64545d34a5d67226bca6"
  },
  {
    "url": "posts/2017/index.html",
    "revision": "c970453e779cdaff809cca5554453656"
  },
  {
    "url": "posts/2018/01/01/index.html",
    "revision": "e5232f8abe1985c5df83c1452513378a"
  },
  {
    "url": "posts/2018/01/01/review-2017/index.html",
    "revision": "f5d4863a135391e311b4dfe31154971a"
  },
  {
    "url": "posts/2018/01/index.html",
    "revision": "83e6cee3eb7d148862954bb2820ea85d"
  },
  {
    "url": "posts/2018/03/03/index.html",
    "revision": "9e26480ff6a076e164c22f7d9780584a"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/index.html",
    "revision": "57ca621d4ee91532027a0658cc6ccab7"
  },
  {
    "url": "posts/2018/03/04/index.html",
    "revision": "381ec69b9f7d4b9a22503a59b67744d0"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html",
    "revision": "e2446987b51c62939dc294fa5cd5ddb4"
  },
  {
    "url": "posts/2018/03/index.html",
    "revision": "5ca621e3c5459730e7bed3fca531b2ce"
  },
  {
    "url": "posts/2018/04/01/index.html",
    "revision": "38a2dc7789520b606540a7e641d2710e"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/index.html",
    "revision": "209556dac5f08475191a903e9230b384"
  },
  {
    "url": "posts/2018/04/index.html",
    "revision": "949fed52e4dc13d9cf4acf8952d17f57"
  },
  {
    "url": "posts/2018/index.html",
    "revision": "9f3d562d2192941a52d0f495126ceb7a"
  },
  {
    "url": "posts/index.html",
    "revision": "c8d71ad4657878a7324fb2dc7717c032"
  },
  {
    "url": "static/css/main.d8e6c433e7f0eff1e5a7.css",
    "revision": "8efad7d7060b7162cc3ebdb94f967318"
  },
  {
    "url": "static/css/vendors.569f11f768053d56b7e4.css",
    "revision": "8ceacd6286906a667c21221c5bd64a42"
  },
  {
    "url": "static/js/main.d8e6c433e7f0eff1e5a7.js",
    "revision": "a503c41988f36fd893fb713de688fe0f"
  },
  {
    "url": "static/js/vendors.569f11f768053d56b7e4.js",
    "revision": "6e15a9a6023bbcd8572b7da468881b00"
  },
  {
    "url": "tags/Angular/index.html",
    "revision": "1853de14edc84e8bf9f728a32a3922e0"
  },
  {
    "url": "tags/AngularJS/index.html",
    "revision": "bf64df56d4d02d1589e1bdc7bfcf3be9"
  },
  {
    "url": "tags/Apache/index.html",
    "revision": "e9a319766f40bad5ab6b48514ede45a3"
  },
  {
    "url": "tags/Blog/index.html",
    "revision": "c775ac8baa9b5e815dca4c7fc4452b9d"
  },
  {
    "url": "tags/Diary/index.html",
    "revision": "e73214946148312b788dd6f372447fda"
  },
  {
    "url": "tags/ExtJS/index.html",
    "revision": "a53df99e2d7222c79610fd1603fb67c4"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "2f5968ebd220679e856f5186cf799181"
  },
  {
    "url": "tags/Google/index.html",
    "revision": "4482264a20e53f537573958a6b3b0f7f"
  },
  {
    "url": "tags/Gulp/index.html",
    "revision": "c91b49730096516f8779c212f927e5fe"
  },
  {
    "url": "tags/Hadoop/index.html",
    "revision": "61fd0b2bf31aaaed852897728e4ba338"
  },
  {
    "url": "tags/index.html",
    "revision": "e07c03f9a914fbe59d68ce8400724263"
  },
  {
    "url": "tags/IntelliJ IDEA/index.html",
    "revision": "a5139ac78df9ff57e9db146d4ad60de3"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "1f9ed5ea535d034914c1e336021e8810"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "5176e003d64b83b59f9b8e3f76d70005"
  },
  {
    "url": "tags/JAWR/index.html",
    "revision": "aafeabfe9a29c47f7fc5684ad6cd77a1"
  },
  {
    "url": "tags/JSF/index.html",
    "revision": "612eb8535fed66be9ba2268a19742604"
  },
  {
    "url": "tags/Karma/index.html",
    "revision": "9e9d01a19cfc33cdbf09563023ad1bce"
  },
  {
    "url": "tags/Linux/index.html",
    "revision": "f4d7446bbca49b6f296e924f360c72e4"
  },
  {
    "url": "tags/Node/index.html",
    "revision": "4feb8fb368ed195f9d5cb772d0a1c361"
  },
  {
    "url": "tags/Oracle/index.html",
    "revision": "487285a7d3390e9c3415cb7034b70c6c"
  },
  {
    "url": "tags/PWA/index.html",
    "revision": "bb89efa424cf437b204fba062280168f"
  },
  {
    "url": "tags/Security/index.html",
    "revision": "65beb21378ca821569aad1f6230fac95"
  },
  {
    "url": "tags/Shiro/index.html",
    "revision": "df810cfcb52b352adeeefd44da815be8"
  },
  {
    "url": "tags/Site/index.html",
    "revision": "3d16308c5787f46aa8b44829e9993a91"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "7f944b24616f54c429d8e83363d998cc"
  },
  {
    "url": "tags/SpringMVC/index.html",
    "revision": "964d445a7a9e101c07d3ea575c5434bc"
  },
  {
    "url": "tags/Ubuntu/index.html",
    "revision": "4f5f3d17869085ad54f68c9db75a3264"
  },
  {
    "url": "tags/VPS/index.html",
    "revision": "9b3a5e59e152e71b1e870e1b090034bb"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "5a3b11e63d404e5d89a78c4b44eab3ab"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "e8e2d3021644c763ec6f85bbea023ec5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
