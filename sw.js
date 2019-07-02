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
    "revision": "b1bfda8bf6d1002285461ecc4159e437"
  },
  {
    "url": "categories/Debug/index.html",
    "revision": "079151a4f5f8ccb1e21800abb514c25d"
  },
  {
    "url": "categories/index.html",
    "revision": "076b7b5a29af96331289e561ccc04a64"
  },
  {
    "url": "categories/Note/index.html",
    "revision": "45c00593273934d076f8a204a4020a3d"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "55f0728c381db4dc14de03e1d8667dba"
  },
  {
    "url": "index.html",
    "revision": "078b23a3408b345f4df50c88e18361b8"
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
    "revision": "cae3a72af1ae8dcb8b5d933168a2cfd0"
  },
  {
    "url": "posts/2015/12/13/index.html",
    "revision": "c0ffca7755ff0e76576a9c13aa05e011"
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
    "revision": "301c7f88c6ce7903f2cbdcb7d2dc405e"
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
    "revision": "ae9ce75f46eeae9d6d68baa8aa76040f"
  },
  {
    "url": "posts/2016/01/01/review-2015/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2016/01/11/index.html",
    "revision": "1d94ff29b3f8fca19562df9ac5c0fcff"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2016/01/12/index.html",
    "revision": "0e02d60abe28a9c0bb2f44986474b865"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2016/01/index.html",
    "revision": "773e81bb96b9941b7e5ae658de313458"
  },
  {
    "url": "posts/2016/03/06/index.html",
    "revision": "ecf51fcec1b0706f9078d7fc52626dca"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2016/03/index.html",
    "revision": "85fda1c92705db00a26baeac4b808e6b"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2016/04/09/index.html",
    "revision": "a6ea8a4716906915c7d43f9c54cef750"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2016/04/10/index.html",
    "revision": "57cb24e3a1229926abff9e69a98ae636"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2016/04/30/index.html",
    "revision": "9525e23c77e752726b73db0739d2e54e"
  },
  {
    "url": "posts/2016/04/index.html",
    "revision": "27a2cea8338bba7949f03332c05f64ed"
  },
  {
    "url": "posts/2016/07/05/index.html",
    "revision": "ac678e79056f6d210043f8226a4c8cee"
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
    "revision": "a66401b4f886006e2735a56acb6fbc68"
  },
  {
    "url": "posts/2017/01/01/review-2016/index.html",
    "revision": "af7449e4dd8a865c2f06e34114cd71d5"
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
    "revision": "0b4d98bc969d0530d5449e82c9831360"
  },
  {
    "url": "posts/2017/05/05/index.html",
    "revision": "9e3ca8f7055ca79e0fba97d637a56488"
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
    "revision": "da2b0a35922f83711508edac7be17d00"
  },
  {
    "url": "posts/2018/01/01/review-2017/index.html",
    "revision": "d892b1f7fdeaa5c347e6ffc565d0dcd5"
  },
  {
    "url": "posts/2018/01/index.html",
    "revision": "fa3a73835455748be5912ee9b5644ee3"
  },
  {
    "url": "posts/2018/03/03/index.html",
    "revision": "8ccdaa9195d6ca51e33de3be4245a4ad"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/index.html",
    "revision": "65068d77b6ddb069371d7e35581fb1dd"
  },
  {
    "url": "posts/2018/03/04/index.html",
    "revision": "e07aca7e3538b9d09346b43d8a47265b"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html",
    "revision": "86bf64f9e1f9898f345041a6ce93fcaa"
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
    "revision": "78af4add225c6dc411cd4298f8972aad"
  },
  {
    "url": "posts/2018/04/index.html",
    "revision": "39a8548493de73dc4729ed1029ae79cd"
  },
  {
    "url": "posts/2018/index.html",
    "revision": "3129b7d8bc09e66ccd31e3ad640f7033"
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
    "revision": "510d99ae92d2e46f50c1fcd38be129ce"
  },
  {
    "url": "tags/Apache/index.html",
    "revision": "b3e3a3bd81fd8627748dd51a69ffefe0"
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
    "revision": "fdc06bdc234e7c4e02d95604d5515544"
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
    "revision": "6245a5dd5a2999cbded13afefbbd471d"
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
    "revision": "cd404a2a06eb8da636df88abc9c0d167"
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
    "revision": "4078c4368810d0f91e00979ae50b541b"
  },
  {
    "url": "tags/PWA/index.html",
    "revision": "dda22b5d3b046e5aefa84f3d64e7967f"
  },
  {
    "url": "tags/Security/index.html",
    "revision": "4103281ee486991cac5bb08a934f0d3d"
  },
  {
    "url": "tags/Shiro/index.html",
    "revision": "2cb53351752475d6f7c4c7c0e491152d"
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
    "revision": "9c8a50a95f052001a3618c493703f417"
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
    "revision": "fbf04d3bde5e610c2b5c8ec5845bc9ec"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "7e39481af06777ab2dca0686a5fbce09"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
