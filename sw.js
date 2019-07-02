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
    "revision": "9af819f479f1013421fb3e73468635bb"
  },
  {
    "url": "categories/Debug/index.html",
    "revision": "1ecd81e420bab4e46010fcccbdafd3c5"
  },
  {
    "url": "categories/index.html",
    "revision": "076b7b5a29af96331289e561ccc04a64"
  },
  {
    "url": "categories/Note/index.html",
    "revision": "5dcec2233ecff5a1bb147ac3e4ac0a16"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "7c0de4108982826c93eb197b109fd000"
  },
  {
    "url": "index.html",
    "revision": "9f986332a956d3a05ecd3cee62ff8c4f"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2015/10/25/index.html",
    "revision": "03bc0f2d6dcbc0cf0c073384350381b8"
  },
  {
    "url": "posts/2015/10/index.html",
    "revision": "118c17005ba9527af4317451e7699321"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2015/11/10/index.html",
    "revision": "a0c00087ffdbdea1177be1b536026acc"
  },
  {
    "url": "posts/2015/11/index.html",
    "revision": "9a4febe0419ed6a2f10cf6e072565497"
  },
  {
    "url": "posts/2015/12/13/index.html",
    "revision": "c09c43ade0511c9e2fd1409835a9b340"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2015/12/14/index.html",
    "revision": "b94f7bf21576e942bd22c9b7c43d2b71"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2015/12/27/index.html",
    "revision": "cd405644411b3340d43a55623b575dc5"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2015/12/index.html",
    "revision": "50a8cba849ff35d5e93b7ddf69043409"
  },
  {
    "url": "posts/2015/index.html",
    "revision": "e2f93b79152801e86a33e07d74e9ddad"
  },
  {
    "url": "posts/2016/01/01/index.html",
    "revision": "3f01e59deb615dac98621d493e9215a0"
  },
  {
    "url": "posts/2016/01/01/review-2015/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2016/01/11/index.html",
    "revision": "b2bcfb845e581a29cb9d3ce6da262f42"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2016/01/12/index.html",
    "revision": "b53b42886489d2b4f71f6e1900233ec1"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2016/01/index.html",
    "revision": "f0e61c4597d79cf57a6946681f2cc929"
  },
  {
    "url": "posts/2016/03/06/index.html",
    "revision": "4a5292dbb0c8fc579a86f854b7703316"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2016/03/index.html",
    "revision": "ece8cc2fffd309b3651f9d30ac238ae0"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2016/04/09/index.html",
    "revision": "78f18b44d8ad6314275b2ec797d8832c"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2016/04/10/index.html",
    "revision": "dedcbed3e2a0fb044b400cc7631a595d"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2016/04/30/index.html",
    "revision": "d14d44a4cd527206bd90bb95ecd29950"
  },
  {
    "url": "posts/2016/04/index.html",
    "revision": "cdbbd98ad0e36c70d3891001b55997e3"
  },
  {
    "url": "posts/2016/07/05/index.html",
    "revision": "1b71f06c10ab016a68c648e90f889cfe"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2016/07/index.html",
    "revision": "195dfea00fad707354ce9cc987050f60"
  },
  {
    "url": "posts/2016/index.html",
    "revision": "a8277f0653009ab34693a4910c59f96c"
  },
  {
    "url": "posts/2017/01/01/index.html",
    "revision": "49730d3f729a922825c3581a1412eef8"
  },
  {
    "url": "posts/2017/01/01/review-2016/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2017/01/index.html",
    "revision": "389456ecc2663b5ba00d09ce397f4bdd"
  },
  {
    "url": "posts/2017/03/12/index.html",
    "revision": "97d3a9f74cbb7f0a327b15cc1e19ede3"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2017/03/index.html",
    "revision": "c1b704cd0899ab86c04288127aafc5b9"
  },
  {
    "url": "posts/2017/05/05/index.html",
    "revision": "75a356e61c2bf37f1d494f5bfd48a212"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2017/05/index.html",
    "revision": "3374f35bb6d70bc760ea41bcaac2f538"
  },
  {
    "url": "posts/2017/index.html",
    "revision": "00f9fe019622d6ad851e96be434312f3"
  },
  {
    "url": "posts/2018/01/01/index.html",
    "revision": "f2e8745c6cb932097b1a3cf81b8000c5"
  },
  {
    "url": "posts/2018/01/01/review-2017/index.html",
    "revision": "4fcd34874a97ad7654e352829de3b74e"
  },
  {
    "url": "posts/2018/01/index.html",
    "revision": "fa3a73835455748be5912ee9b5644ee3"
  },
  {
    "url": "posts/2018/03/03/index.html",
    "revision": "cce4f03fb8079e7542d02c96cba28871"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2018/03/04/index.html",
    "revision": "8be46342ebe3e3b1f68bfe69fa2a99d4"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2018/03/index.html",
    "revision": "61d0cf17904fc9120bbd13fb347f364c"
  },
  {
    "url": "posts/2018/04/01/index.html",
    "revision": "14e2f677ffb3768bcf087be378dae5f5"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2018/04/index.html",
    "revision": "39a8548493de73dc4729ed1029ae79cd"
  },
  {
    "url": "posts/2018/index.html",
    "revision": "dac85c7c2fca30172f5ee14ce14ef38b"
  },
  {
    "url": "posts/index.html",
    "revision": "350eaca88d3fe4cf2cb12f0fe2d09643"
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
    "revision": "9f2d5b322fd7ca4c8d0c137c01816ff2"
  },
  {
    "url": "tags/AngularJS/index.html",
    "revision": "bfb81c24f3c4c4dad01f5c46eb4e8b89"
  },
  {
    "url": "tags/Apache/index.html",
    "revision": "de52ad96f47b9a71ab6fd5428942f8a7"
  },
  {
    "url": "tags/Blog/index.html",
    "revision": "f7ea80e7ac078e4f514b0a6b4dea6016"
  },
  {
    "url": "tags/Diary/index.html",
    "revision": "e98ec001c611602a7512257c02180f52"
  },
  {
    "url": "tags/ExtJS/index.html",
    "revision": "3703f897891a923b4ab21796adcc12d7"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "2d284688c86ad4fc2330214e8cf49d6f"
  },
  {
    "url": "tags/Google/index.html",
    "revision": "fb908417b1db11f2a94d0b1545a77abc"
  },
  {
    "url": "tags/Gulp/index.html",
    "revision": "9c822125b5fce63704a99c72f5beaf1c"
  },
  {
    "url": "tags/Hadoop/index.html",
    "revision": "258512fb001da13fe20e54e3a5395029"
  },
  {
    "url": "tags/index.html",
    "revision": "076b7b5a29af96331289e561ccc04a64"
  },
  {
    "url": "tags/IntelliJ IDEA/index.html",
    "revision": "07c0e4dba1e4252c5958484425ad7b38"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "3a564c1221ec138810ab556d545ec966"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "4c500f39cb460d1291a95d4e2fcc9a4f"
  },
  {
    "url": "tags/JAWR/index.html",
    "revision": "306db4c8cee70e040a2bcc1c32db0ef4"
  },
  {
    "url": "tags/JSF/index.html",
    "revision": "f37cbf37e819f2f13621ea4ece98cae6"
  },
  {
    "url": "tags/Karma/index.html",
    "revision": "8a2f0a5a141593ad2e7a3075058bec41"
  },
  {
    "url": "tags/Linux/index.html",
    "revision": "ab5d4c15aec6ece70f6084b25ace6384"
  },
  {
    "url": "tags/Node/index.html",
    "revision": "078de69ade00716728f534658443bd46"
  },
  {
    "url": "tags/Oracle/index.html",
    "revision": "e6c4766a781e80e3083fac4c9c616f94"
  },
  {
    "url": "tags/PWA/index.html",
    "revision": "dda22b5d3b046e5aefa84f3d64e7967f"
  },
  {
    "url": "tags/Security/index.html",
    "revision": "b5ea6701dbc7cea37f9a6e84795a8819"
  },
  {
    "url": "tags/Shiro/index.html",
    "revision": "62419f84e9be21b34ba56a8c9552cc2f"
  },
  {
    "url": "tags/Site/index.html",
    "revision": "bfc384a1e21e2c700ea250ef1c9c4692"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "d7c38522b4ff72aba7020478b39819cc"
  },
  {
    "url": "tags/SpringMVC/index.html",
    "revision": "3390d761b1cb6e9b2b9df2be9c341942"
  },
  {
    "url": "tags/Ubuntu/index.html",
    "revision": "9fe04e7f2367abe20abc94f381d27c9c"
  },
  {
    "url": "tags/VPS/index.html",
    "revision": "cb804bc93a44b83eba3e3c38d4111f88"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "ed090c790051610ae061938adaa8f537"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "bb6034eb70813831039892d07b2f4ab0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
