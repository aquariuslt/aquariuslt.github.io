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
    "revision": "3182354fac15f18e8a01816a3a545fc1"
  },
  {
    "url": "categories/Debug/index.html",
    "revision": "fc79dcae1b4561e2c3d8290d050510ed"
  },
  {
    "url": "categories/index.html",
    "revision": "9c8987841ab2f54b1ee0d5b74beb77ee"
  },
  {
    "url": "categories/Note/index.html",
    "revision": "f2a9bfdf605c5d57690be826416db5b5"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "260f9341f10373fea29a802d61ddecb7"
  },
  {
    "url": "index.html",
    "revision": "01e66d9f9e788a25f9c239f27bce2041"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/index.html",
    "revision": "8f42ef9960007c1ac2d4a052f4961946"
  },
  {
    "url": "posts/2015/10/25/index.html",
    "revision": "a67ba26015054a8500a3d2c67c7a098c"
  },
  {
    "url": "posts/2015/10/index.html",
    "revision": "ef5d0b1197e606d187aa1bee17432779"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/index.html",
    "revision": "7c5dbd41b95b599a7fb4e659730b4170"
  },
  {
    "url": "posts/2015/11/10/index.html",
    "revision": "fa20a12566dec2c4a456d51ed2147a58"
  },
  {
    "url": "posts/2015/11/index.html",
    "revision": "d5fa8cf2e12ca6666542d4bd7b058949"
  },
  {
    "url": "posts/2015/12/13/index.html",
    "revision": "5ad5728a6d7f36fd4490a886b1fbc071"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/index.html",
    "revision": "bba6f39f11ecce6f3aa22873c0422513"
  },
  {
    "url": "posts/2015/12/14/index.html",
    "revision": "a41aa03ecd9962c29ea77403a76c7c73"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/index.html",
    "revision": "331019ddb3b4a9264636442e24906849"
  },
  {
    "url": "posts/2015/12/27/index.html",
    "revision": "c3185b1cd661c706ba240dab4755922e"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/index.html",
    "revision": "61494aff9a679894f1a91d0b55ac748c"
  },
  {
    "url": "posts/2015/12/index.html",
    "revision": "0ec8ad93c701ee5ddb60703ed08f245c"
  },
  {
    "url": "posts/2015/index.html",
    "revision": "515599fe90a9c00a7912828902dc799d"
  },
  {
    "url": "posts/2016/01/01/index.html",
    "revision": "2ded995fd37e022232490369702e9f41"
  },
  {
    "url": "posts/2016/01/01/review-2015/index.html",
    "revision": "3e23b57b168f4133be270fd64007ca7c"
  },
  {
    "url": "posts/2016/01/11/index.html",
    "revision": "2e7a7b5550ccaa1958f2ed6adad26a30"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/index.html",
    "revision": "17a216408b19b3338b70b2fda4119182"
  },
  {
    "url": "posts/2016/01/12/index.html",
    "revision": "8343abfc10e99ecf4f1170e996867c24"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html",
    "revision": "013481164e62b29217129f436a9d7ae2"
  },
  {
    "url": "posts/2016/01/index.html",
    "revision": "7f580721538bce91b3680ad7aad5598a"
  },
  {
    "url": "posts/2016/03/06/index.html",
    "revision": "17d029d05b01351a7963d231f52b7c99"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/index.html",
    "revision": "04e585dfa66e41a017252cdb1481e27e"
  },
  {
    "url": "posts/2016/03/index.html",
    "revision": "6221df380f549f70dd853186a8237684"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/index.html",
    "revision": "9d55bb09f1e1dba95e326e642164a52e"
  },
  {
    "url": "posts/2016/04/09/index.html",
    "revision": "8d352d5aa30869441b022123a755d646"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/index.html",
    "revision": "e3e7cb8cdc151706295153f5281d0745"
  },
  {
    "url": "posts/2016/04/10/index.html",
    "revision": "580afb5472a8dfd03056b12b30abeedc"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/index.html",
    "revision": "297c89186a806db9d318525d4b55a610"
  },
  {
    "url": "posts/2016/04/30/index.html",
    "revision": "4230b6247e5c8863db1f087718e4f691"
  },
  {
    "url": "posts/2016/04/index.html",
    "revision": "1f873d1fa5b19ebeea63796ba61f6fc9"
  },
  {
    "url": "posts/2016/07/05/index.html",
    "revision": "dbfa173315b2b177670c492d0d35d9e7"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/index.html",
    "revision": "69e4a48c1333f664feaa622217487209"
  },
  {
    "url": "posts/2016/07/index.html",
    "revision": "8cdeeaa75ef166ed43a8d14d9fff4dc8"
  },
  {
    "url": "posts/2016/index.html",
    "revision": "485c4d12e210f9bc9e2b2978d5ead5c2"
  },
  {
    "url": "posts/2017/01/01/index.html",
    "revision": "cb3e08682b47b6dd09c10f9b1788ebea"
  },
  {
    "url": "posts/2017/01/01/review-2016/index.html",
    "revision": "10efb396723eaa3ae30fe35c719d5a54"
  },
  {
    "url": "posts/2017/01/index.html",
    "revision": "0b2c044fd163f6cf2997d3b9accd26b1"
  },
  {
    "url": "posts/2017/03/12/index.html",
    "revision": "d4abc54b1c7eeb782f6a77686925aa9e"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/index.html",
    "revision": "934d451ae1b061b320f4513e255617f8"
  },
  {
    "url": "posts/2017/03/index.html",
    "revision": "f5c8d64d30502556ad261a6863e89b70"
  },
  {
    "url": "posts/2017/05/05/index.html",
    "revision": "991dfc0eda516cbc4a5526580aeae84a"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/index.html",
    "revision": "be6a44768455ea83c65069fb864885a3"
  },
  {
    "url": "posts/2017/05/index.html",
    "revision": "5e977b6849adadd73fc9bdce8afc9a3d"
  },
  {
    "url": "posts/2017/index.html",
    "revision": "c01789ac26a1448a071e11ea2b7b59e5"
  },
  {
    "url": "posts/2018/01/01/index.html",
    "revision": "27a0387203f11d78292a99ab5e908347"
  },
  {
    "url": "posts/2018/01/01/review-2017/index.html",
    "revision": "9f3915a96ffd6a5f54531e0b7cbe3fc0"
  },
  {
    "url": "posts/2018/01/index.html",
    "revision": "db1478db8ed16192ce0814e7a42f1747"
  },
  {
    "url": "posts/2018/03/03/index.html",
    "revision": "d88bc2a72d203178dbe0445e6de993a1"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/index.html",
    "revision": "eddf38070924b2544627cdf7f05972e7"
  },
  {
    "url": "posts/2018/03/04/index.html",
    "revision": "e9f181f5364a5b8143ffbc3d94cf3b1c"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html",
    "revision": "d6fd7418170212894b7438e7b05a9a6a"
  },
  {
    "url": "posts/2018/03/index.html",
    "revision": "1f51a4e25f71dc2376213feeeef1168a"
  },
  {
    "url": "posts/2018/04/01/index.html",
    "revision": "0a18d0849658871e7211cc98454312e3"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/index.html",
    "revision": "9461721f7397dcfc916eea197e7efb60"
  },
  {
    "url": "posts/2018/04/index.html",
    "revision": "ccb5be36f54f4f4ce1fa020386ab3875"
  },
  {
    "url": "posts/2018/index.html",
    "revision": "08e0fd6f3c130d554419e8b6e143b170"
  },
  {
    "url": "posts/index.html",
    "revision": "0423634604fc770bc721a3a95f6f82a8"
  },
  {
    "url": "static/css/main.5f7854065537e65dcda5.css",
    "revision": "8efad7d7060b7162cc3ebdb94f967318"
  },
  {
    "url": "static/css/vendors.569f11f768053d56b7e4.css",
    "revision": "8ceacd6286906a667c21221c5bd64a42"
  },
  {
    "url": "static/js/main.5f7854065537e65dcda5.js",
    "revision": "fae46ecb5f886e9dad7edfda55922230"
  },
  {
    "url": "static/js/vendors.569f11f768053d56b7e4.js",
    "revision": "6e15a9a6023bbcd8572b7da468881b00"
  },
  {
    "url": "tags/Angular/index.html",
    "revision": "5749f6ff1c76e11fcd49e1b9a59ef22e"
  },
  {
    "url": "tags/AngularJS/index.html",
    "revision": "efeb0c71e1bc8caaba6d438049764804"
  },
  {
    "url": "tags/Apache/index.html",
    "revision": "5854c722a4f77858619fbca8d8ef53ad"
  },
  {
    "url": "tags/Blog/index.html",
    "revision": "ee894ecb5210e73890c30eaab536b55b"
  },
  {
    "url": "tags/Diary/index.html",
    "revision": "3e1f48140f64b3238ce47c0859c61689"
  },
  {
    "url": "tags/ExtJS/index.html",
    "revision": "eeb72f5f2f6306d7c81bf9e5fdfcc3ff"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "65e57b02d9632a65f22ffed78a543683"
  },
  {
    "url": "tags/Google/index.html",
    "revision": "02bee8bb637ceb509670c7480c4861a5"
  },
  {
    "url": "tags/Gulp/index.html",
    "revision": "15a1b068266f9692883c148050f87f60"
  },
  {
    "url": "tags/Hadoop/index.html",
    "revision": "fed33bcbfed5880f1660fecbd9fbd0d0"
  },
  {
    "url": "tags/index.html",
    "revision": "9c8987841ab2f54b1ee0d5b74beb77ee"
  },
  {
    "url": "tags/IntelliJ IDEA/index.html",
    "revision": "ddbefd4b07b1c9a38319fb9304c165c9"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "730561240abbf12384f8ebf917c00a54"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "923557d31b876de8b25b9c16dcb56a43"
  },
  {
    "url": "tags/JAWR/index.html",
    "revision": "02dcf841b8b56595e03495912ca4c87f"
  },
  {
    "url": "tags/JSF/index.html",
    "revision": "2baf89dba1a948605ec3999c52250b5e"
  },
  {
    "url": "tags/Karma/index.html",
    "revision": "2527bc21761868e85d4720bd45a3eb46"
  },
  {
    "url": "tags/Linux/index.html",
    "revision": "0fe2db4c0879dbe24ff1de50708f2a99"
  },
  {
    "url": "tags/Node/index.html",
    "revision": "e0830800a5265cfab1b53ea06c1d11f9"
  },
  {
    "url": "tags/Oracle/index.html",
    "revision": "2b768835418698aee617c8bd2552efc4"
  },
  {
    "url": "tags/PWA/index.html",
    "revision": "7b1703810cdc8881653770695538b46f"
  },
  {
    "url": "tags/Security/index.html",
    "revision": "b8ce6ae85c8826f764a3de9940a804b0"
  },
  {
    "url": "tags/Shiro/index.html",
    "revision": "f800f34a040a8d834cb1e499129d874d"
  },
  {
    "url": "tags/Site/index.html",
    "revision": "746f23674dc165cacb3f47f255175684"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "69daeaf4baf02f6c69f653be4a5a340f"
  },
  {
    "url": "tags/SpringMVC/index.html",
    "revision": "dfceaa8c76af2b76a5ea0ae360ab5900"
  },
  {
    "url": "tags/Ubuntu/index.html",
    "revision": "3ce659e6a445ddede6db1b048dde3551"
  },
  {
    "url": "tags/VPS/index.html",
    "revision": "03196820fe131e9f492c5bdfb93a7407"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "64ee0ec516c19ba3897dc184e8d40add"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "c1134ae9cf79aabff1e24aefc9838a0a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
