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
    "revision": "532cd131141110aa275cbb9b3a47406c"
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
    "revision": "1dd478c6c0704a95889c57bf8ed9524d"
  },
  {
    "url": "posts/2015/11/10/index.html",
    "revision": "232ca06218f91227d34c42782d3adba8"
  },
  {
    "url": "posts/2015/11/index.html",
    "revision": "efc926aaf559ce20ee755568aac9aa49"
  },
  {
    "url": "posts/2015/12/13/index.html",
    "revision": "1403bd10a74269e9a058a5a0cf33cd06"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/index.html",
    "revision": "20ac4e4a3f7a76a9f68a383053708aaa"
  },
  {
    "url": "posts/2015/12/14/index.html",
    "revision": "cd01d404ab172a3ed15e6fda18648b48"
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
    "revision": "541222eaa7bbda51841d4b779d8022b6"
  },
  {
    "url": "posts/2016/01/01/index.html",
    "revision": "bd3870327533803ff9afccd1cc53da1d"
  },
  {
    "url": "posts/2016/01/01/review-2015/index.html",
    "revision": "d5a03d98b8b8293c5cd4f5144abfc7bc"
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
    "revision": "54e028a8bf6eb95a863a55d3d9a03174"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html",
    "revision": "32fd541aaaee76e5f6e1ad270c82127c"
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
    "revision": "ff4a6c36f1fb60c5576f3374920db406"
  },
  {
    "url": "posts/2016/03/index.html",
    "revision": "bbb313d67ac940f0729586c656a6bcdb"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/index.html",
    "revision": "72aa581cada8ca962090144ecfd9719a"
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
    "revision": "d5b0fbb82e36cfcfcddfb51d31a86185"
  },
  {
    "url": "posts/2016/04/30/index.html",
    "revision": "5c073bb7616ce58c5e5797d2aeed91a5"
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
    "revision": "0338501f6abbf8d45c1f28357dc83f95"
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
    "revision": "f3f2dc921ec571f45fa9d7c73c54a93e"
  },
  {
    "url": "posts/2017/01/index.html",
    "revision": "1ee8927c9c0d3879ad27468615201d98"
  },
  {
    "url": "posts/2017/03/12/index.html",
    "revision": "f539cb2650575ce5982d80fb1d4dbc23"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/index.html",
    "revision": "175fff01530c33bfa007be298a7f5cdf"
  },
  {
    "url": "posts/2017/03/index.html",
    "revision": "687eabe2bcf887b126e68766944c0752"
  },
  {
    "url": "posts/2017/05/05/index.html",
    "revision": "bafadc8fc083d81dfe2b05ce3186bf9c"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/index.html",
    "revision": "0eaca784244112d01d8e6899869955e8"
  },
  {
    "url": "posts/2017/05/index.html",
    "revision": "bf67099db56f64545d34a5d67226bca6"
  },
  {
    "url": "posts/2017/index.html",
    "revision": "2cc52755c357c883907dc0a97c1e3fdd"
  },
  {
    "url": "posts/2018/01/01/index.html",
    "revision": "99b85480d1428d84443808bcc3722ea9"
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
    "revision": "169d4dc44759623c2813e04d1226c347"
  },
  {
    "url": "posts/2018/03/04/index.html",
    "revision": "381ec69b9f7d4b9a22503a59b67744d0"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html",
    "revision": "60cff95b98cb647ce5c1154d888ca5de"
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
    "revision": "f772c5b7ff982c1e708ccb3423e3cbb9"
  },
  {
    "url": "posts/2018/04/index.html",
    "revision": "763f2eaacdc2694604ef06fbebdd6fd2"
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
    "revision": "a462576ca8331a3606e8a450fd8934ba"
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
    "revision": "7608f912e1e10ac0df288759f1952333"
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
    "revision": "e94ba25c6bfdaea920424d9a58846662"
  },
  {
    "url": "tags/Linux/index.html",
    "revision": "f4d7446bbca49b6f296e924f360c72e4"
  },
  {
    "url": "tags/Node/index.html",
    "revision": "2ea3590de39b3241dbc4ac97e1eb4b8f"
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
    "revision": "9555694ab8488fb1d26206cbc0a596e1"
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
    "revision": "c627d8754ede315a0006bf986cdc06fd"
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
    "revision": "8d60e30d25e4648c1ffb7bc83a2ebf55"
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
