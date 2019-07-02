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
    "revision": "29b6e23a64aa81cab4c22c0d609386bd"
  },
  {
    "url": "categories/Debug/index.html",
    "revision": "6add00074cfa63386a1cae4c03ccb4d0"
  },
  {
    "url": "categories/index.html",
    "revision": "1556c26a06829c589762ff9a516e31c5"
  },
  {
    "url": "categories/Note/index.html",
    "revision": "9be3e84a62f024b35b343643a5736fab"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "65cb5554f2915eb21e67e677c1a9f553"
  },
  {
    "url": "index.html",
    "revision": "0e1dcce9dd8c33c5c3ac962682049642"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/index.html",
    "revision": "f0f349ee0eeb8d6148ff8078d5d442e4"
  },
  {
    "url": "posts/2015/10/25/index.html",
    "revision": "ecd6604ab1c2374015c4c24bb672e8d9"
  },
  {
    "url": "posts/2015/10/index.html",
    "revision": "ce33ae4b174e84b5cd6921f6ea0fa95a"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/index.html",
    "revision": "459d3e5ab3dfb5c7ee59080c7d8177f5"
  },
  {
    "url": "posts/2015/11/10/index.html",
    "revision": "b2974adb2971c21e8a5e2342f81125fe"
  },
  {
    "url": "posts/2015/11/index.html",
    "revision": "dcfc8ab63107c48cd5e34ce33679257e"
  },
  {
    "url": "posts/2015/12/13/index.html",
    "revision": "abfcbbdfa494fbeb0daa71c18d3545ba"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/index.html",
    "revision": "8dd0550ff9a8dcc907284646d81372ef"
  },
  {
    "url": "posts/2015/12/14/index.html",
    "revision": "10ea7708d633fb0b31b9a49f9cd4b857"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/index.html",
    "revision": "c05e5dea8da318e71c573279a96d1af4"
  },
  {
    "url": "posts/2015/12/27/index.html",
    "revision": "4838853b8e42968f64416ec5cf9afd78"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/index.html",
    "revision": "8576a7bf79c02d1bee44e42641cfe437"
  },
  {
    "url": "posts/2015/12/index.html",
    "revision": "f30d2347f70d9d5577b5cd2b0f4fae85"
  },
  {
    "url": "posts/2015/index.html",
    "revision": "886ef3f988756b9ee5649db2f428490a"
  },
  {
    "url": "posts/2016/01/01/index.html",
    "revision": "4ebab7b54b7b5f0e5fb2e21474322ff6"
  },
  {
    "url": "posts/2016/01/01/review-2015/index.html",
    "revision": "60d45481c85a312c522103edafe69a57"
  },
  {
    "url": "posts/2016/01/11/index.html",
    "revision": "01386a184b8b5b87baea6c0681b84fad"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/index.html",
    "revision": "c5bdab23c7f188c758a3ab78df79cd4d"
  },
  {
    "url": "posts/2016/01/12/index.html",
    "revision": "0c54e741790b8a8616a8273d925be112"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html",
    "revision": "47de2c68b92e52158dd8f22e8ec6edc3"
  },
  {
    "url": "posts/2016/01/index.html",
    "revision": "c8465ccc2ff23f403a8d0b797a3eb15e"
  },
  {
    "url": "posts/2016/03/06/index.html",
    "revision": "5b743fe5857fe3e439e36e489dd02c5f"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/index.html",
    "revision": "cbfef4cf0f14e4892dc4d21f59417420"
  },
  {
    "url": "posts/2016/03/index.html",
    "revision": "31858707c963d4994c851476e18eef0a"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/index.html",
    "revision": "2f2efa7ffcfb17c8921d8f17db36e94e"
  },
  {
    "url": "posts/2016/04/09/index.html",
    "revision": "94768937709963c429c5f95dd304dd9e"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/index.html",
    "revision": "0c09b6d586152221b8d9d7c4acba0490"
  },
  {
    "url": "posts/2016/04/10/index.html",
    "revision": "fc4064243ce2bcc1677f0813ff8801fe"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/index.html",
    "revision": "288a42647b57e4f8e7936d531a834d65"
  },
  {
    "url": "posts/2016/04/30/index.html",
    "revision": "8da490da231d8554858cf6a7ca02bb7e"
  },
  {
    "url": "posts/2016/04/index.html",
    "revision": "4951cfe8592ea02e9492664927f2cc74"
  },
  {
    "url": "posts/2016/07/05/index.html",
    "revision": "9b60a31259c18cb121068786232c53fe"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/index.html",
    "revision": "9ba65b90fcd2bcfd2b7a041630370871"
  },
  {
    "url": "posts/2016/07/index.html",
    "revision": "6a24011e8e01b5343f35f6f04d30fa9c"
  },
  {
    "url": "posts/2016/index.html",
    "revision": "8ee27d95ec77d87a6672e7f83947912f"
  },
  {
    "url": "posts/2017/01/01/index.html",
    "revision": "2ee33802361e69ec34acc63403d47a84"
  },
  {
    "url": "posts/2017/01/01/review-2016/index.html",
    "revision": "4e6230eda071a0e45979fa9a7558e8b8"
  },
  {
    "url": "posts/2017/01/index.html",
    "revision": "b71ae1e38c99893156424328b52d47f4"
  },
  {
    "url": "posts/2017/03/12/index.html",
    "revision": "df4950bc8d594c1c434441ad0b2c4da4"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/index.html",
    "revision": "77d47732151bda57edd9e47ebc0889c0"
  },
  {
    "url": "posts/2017/03/index.html",
    "revision": "d9bb1528743505bafc46e966953042a2"
  },
  {
    "url": "posts/2017/05/05/index.html",
    "revision": "d808d44046d54f00d5a8ecef59be17e0"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/index.html",
    "revision": "da2852a6053066ee69bf25cd11050f6d"
  },
  {
    "url": "posts/2017/05/index.html",
    "revision": "b0397d4b73b8452844e57312c32e0874"
  },
  {
    "url": "posts/2017/index.html",
    "revision": "588d27274598d156b30dc70dc6322488"
  },
  {
    "url": "posts/2018/01/01/index.html",
    "revision": "93b9fcab2edbcbb63f6fc30b5a94961d"
  },
  {
    "url": "posts/2018/01/01/review-2017/index.html",
    "revision": "e769ac3c069f22b7b9bc739263131f06"
  },
  {
    "url": "posts/2018/01/index.html",
    "revision": "cf1e12b4244745beb547a78659ef459d"
  },
  {
    "url": "posts/2018/03/03/index.html",
    "revision": "c2a43e504415c90c02df22eb0a3f82c0"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/index.html",
    "revision": "38de72a6ae08c6c9e86268a4bf2f571e"
  },
  {
    "url": "posts/2018/03/04/index.html",
    "revision": "f654abc17befc5ce854784d455f3a273"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html",
    "revision": "5e8c171acd6b7f26a4a81198fa3e4437"
  },
  {
    "url": "posts/2018/03/index.html",
    "revision": "5fd27d9d6ea439d755c1b851cf643c82"
  },
  {
    "url": "posts/2018/04/01/index.html",
    "revision": "0c77a2b29b5dc04a49a533260c0b3909"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/index.html",
    "revision": "f948cd2a896d4bf158b7451ce74b42de"
  },
  {
    "url": "posts/2018/04/index.html",
    "revision": "5b78cd4b9ed431b9316a6dee48d27279"
  },
  {
    "url": "posts/2018/index.html",
    "revision": "677f0855adac748319675fade6057ca6"
  },
  {
    "url": "posts/index.html",
    "revision": "a50ea0d0d28bb843648652df5209638c"
  },
  {
    "url": "static/css/main.d74eab89748b1a30f74f.css",
    "revision": "8efad7d7060b7162cc3ebdb94f967318"
  },
  {
    "url": "static/css/vendors.4e38329237f387cf1698.css",
    "revision": "8ceacd6286906a667c21221c5bd64a42"
  },
  {
    "url": "static/js/main.d74eab89748b1a30f74f.js",
    "revision": "54821f3e93fee7823cfd320210d6829b"
  },
  {
    "url": "static/js/vendors.4e38329237f387cf1698.js",
    "revision": "29544d3244a83164bc69739ecf4b682f"
  },
  {
    "url": "tags/Angular/index.html",
    "revision": "6eeb12305abd535fdd0d96defd8fa668"
  },
  {
    "url": "tags/AngularJS/index.html",
    "revision": "5c19f7f8dfe6b8bd68d0070fa5b021f4"
  },
  {
    "url": "tags/Apache/index.html",
    "revision": "2c49cea74a8f8061f20d11d297260501"
  },
  {
    "url": "tags/Blog/index.html",
    "revision": "d0e5aafceced8eb4dfc16eb2408ebcd8"
  },
  {
    "url": "tags/Diary/index.html",
    "revision": "03cc8636a064ba2c10c3975994fdec42"
  },
  {
    "url": "tags/ExtJS/index.html",
    "revision": "11e4472acc6bbbf90ca2fbd6ca876a99"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "4bc2ce62127a735b9d994cf2f4a7d8a7"
  },
  {
    "url": "tags/Google/index.html",
    "revision": "706cec391587816433fc97ccf215ceff"
  },
  {
    "url": "tags/Gulp/index.html",
    "revision": "c72075afa370d83ca205bf78b59dd363"
  },
  {
    "url": "tags/Hadoop/index.html",
    "revision": "485eefdc81511595b780a372200333af"
  },
  {
    "url": "tags/index.html",
    "revision": "1556c26a06829c589762ff9a516e31c5"
  },
  {
    "url": "tags/IntelliJ IDEA/index.html",
    "revision": "f58d9ac153ac065f42e7de128ccda990"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "8562ab73c0fb901e3f4686098b9a6cd1"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "880c2c6d7c1cb2bbd53e484802f3d024"
  },
  {
    "url": "tags/JAWR/index.html",
    "revision": "53de625f88b333750b62890d9fc26f7c"
  },
  {
    "url": "tags/JSF/index.html",
    "revision": "5fd599f4171701d77646ce0d62866628"
  },
  {
    "url": "tags/Karma/index.html",
    "revision": "09d04ccf6e691bbe341842c70ce7246b"
  },
  {
    "url": "tags/Linux/index.html",
    "revision": "9655ad66442461b900b1a33f7cfbcb9a"
  },
  {
    "url": "tags/Node/index.html",
    "revision": "be01edeb9fa3dfc139ff6cf7c279fc89"
  },
  {
    "url": "tags/Oracle/index.html",
    "revision": "33d9ce16d90bad355deef5729540e1db"
  },
  {
    "url": "tags/PWA/index.html",
    "revision": "d2537a1a9bae22b21092ca9d5bb4db38"
  },
  {
    "url": "tags/Security/index.html",
    "revision": "fb2d4b41236315defff994dd2e40a785"
  },
  {
    "url": "tags/Shiro/index.html",
    "revision": "e34c84c00015ede96f01d250f60ce308"
  },
  {
    "url": "tags/Site/index.html",
    "revision": "07e41553553b3a13efa6578350f3c9a3"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "01f8e691fa58e0d98282e41ae1a7accc"
  },
  {
    "url": "tags/SpringMVC/index.html",
    "revision": "6b0835e6b89eb81a6c402273e3a89ddd"
  },
  {
    "url": "tags/Ubuntu/index.html",
    "revision": "a199d205cfe4fd2468a52ee93b4a154d"
  },
  {
    "url": "tags/VPS/index.html",
    "revision": "a339184934670214ae9bbc9f91eb4aa9"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "52492c4c8300080ffef1d4c1766f1fed"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "8377fa796a4bfff7071b7481466b60f3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
