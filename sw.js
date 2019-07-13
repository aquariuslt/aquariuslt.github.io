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
    "revision": "bf87cec31ea6d10a2144a3eb001694bc"
  },
  {
    "url": "categories/Debug/index.html",
    "revision": "fb6a2bd1d1b6914c59cce64071739b28"
  },
  {
    "url": "categories/index.html",
    "revision": "d4cb37dc5682f8b5751f639fe1f9091f"
  },
  {
    "url": "categories/Note/index.html",
    "revision": "9d94f17887e8e623df1382ee95f540c7"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "45da7b616c0ad002f0e0daff54f95b31"
  },
  {
    "url": "index.html",
    "revision": "7a91b324b2b0b26d0e982676b3318eef"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/index.html",
    "revision": "37c0e5e4910a03d09f6912ab97be07ba"
  },
  {
    "url": "posts/2015/10/25/index.html",
    "revision": "021348c6a87363cea74023c771bb4d75"
  },
  {
    "url": "posts/2015/10/index.html",
    "revision": "473f19026fb7218a03c7d4353784ce57"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/index.html",
    "revision": "e6070c371f75d80315c4f3b7600e3e4a"
  },
  {
    "url": "posts/2015/11/10/index.html",
    "revision": "ef6d215d4ad32cbc551267736fe15dd5"
  },
  {
    "url": "posts/2015/11/index.html",
    "revision": "4460990ff337408f4a50a7e23b34ddaf"
  },
  {
    "url": "posts/2015/12/13/index.html",
    "revision": "7ef5f891df8d7e18d1eb8ed828ead026"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/index.html",
    "revision": "819c651b53ecaf9319ff71a32ff7f9d6"
  },
  {
    "url": "posts/2015/12/14/index.html",
    "revision": "e5a7f28c004906a91702ab644a6a7d02"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/index.html",
    "revision": "c71d73435942cbfb0b28e379933ef746"
  },
  {
    "url": "posts/2015/12/27/index.html",
    "revision": "11dbb523b3b1a611bd8e364293bccfee"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/index.html",
    "revision": "f8741ef15432c3e5c429169421d2a85a"
  },
  {
    "url": "posts/2015/12/index.html",
    "revision": "866a944a3529772bce1de721c4f49c5a"
  },
  {
    "url": "posts/2015/index.html",
    "revision": "a8f5faa5da78c46b466563c6d4a973cc"
  },
  {
    "url": "posts/2016/01/01/index.html",
    "revision": "c5aadf8f66e55d311ee24729a5538ead"
  },
  {
    "url": "posts/2016/01/01/review-2015/index.html",
    "revision": "307701ca9cfcd536dfc8c318377b3c9e"
  },
  {
    "url": "posts/2016/01/11/index.html",
    "revision": "1d525fb787a52051a3f3be95eb137ed4"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/index.html",
    "revision": "89d7a04e9382cae1fab61190077907bd"
  },
  {
    "url": "posts/2016/01/12/index.html",
    "revision": "78964bd7670def62089298a419b301ce"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html",
    "revision": "db78a2d1d2b06fa3622f3b35c8e133fd"
  },
  {
    "url": "posts/2016/01/index.html",
    "revision": "2d9449d5ed65f85b0d8c714535027477"
  },
  {
    "url": "posts/2016/03/06/index.html",
    "revision": "c15fb0f22ad1e9183c7b40f6c1679492"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/index.html",
    "revision": "81f4db937b910f495fc9a4f37a93c880"
  },
  {
    "url": "posts/2016/03/index.html",
    "revision": "205ce760a7f1f8c363690cad9bd1314c"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/index.html",
    "revision": "2c5f89a5c3b9e2349c4d6f13a606d782"
  },
  {
    "url": "posts/2016/04/09/index.html",
    "revision": "50802938090950331c29b8f6423bd0b1"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/index.html",
    "revision": "66fc8fd912dc6afe121e0dbf5dd56f7f"
  },
  {
    "url": "posts/2016/04/10/index.html",
    "revision": "3c4cf35b5b2c2b0221eee403aa9c8531"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/index.html",
    "revision": "9ef7764efe216307a003a9e088e9baef"
  },
  {
    "url": "posts/2016/04/30/index.html",
    "revision": "673a05cf4ddb6c28dd5760b08529423a"
  },
  {
    "url": "posts/2016/04/index.html",
    "revision": "219cf1a8b9eb17263810dd0a94b01655"
  },
  {
    "url": "posts/2016/07/05/index.html",
    "revision": "2d46ce19344bfaccb04939e593c4b019"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/index.html",
    "revision": "7903f26bdd7a4149fea0cd0b0e58b45a"
  },
  {
    "url": "posts/2016/07/index.html",
    "revision": "6e2ceafd024f73c956259bf9be1396de"
  },
  {
    "url": "posts/2016/index.html",
    "revision": "2ac32fd163472c1e044d711c5cff150d"
  },
  {
    "url": "posts/2017/01/01/index.html",
    "revision": "071cc43e79eb2d665302db78947e0598"
  },
  {
    "url": "posts/2017/01/01/review-2016/index.html",
    "revision": "e12bcdda3aab8f5b7f757329ddec75f0"
  },
  {
    "url": "posts/2017/01/index.html",
    "revision": "8eb748435b9054b93d60506844fa9963"
  },
  {
    "url": "posts/2017/03/12/index.html",
    "revision": "0de1a53f8b6be0020b16c6786640a2ba"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/index.html",
    "revision": "34c8cf0d812369d8e5fb44a0608efc36"
  },
  {
    "url": "posts/2017/03/index.html",
    "revision": "17809e95e997edb8767a92408189984b"
  },
  {
    "url": "posts/2017/05/05/index.html",
    "revision": "d77e5cc5f5d3d45966020828258a847b"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/index.html",
    "revision": "febc5575c58f0f2267dabef43fde41f7"
  },
  {
    "url": "posts/2017/05/index.html",
    "revision": "a1e1f43d48c5a7d6a394d698f07fd9ae"
  },
  {
    "url": "posts/2017/index.html",
    "revision": "43b6fb3ec51d90fddf596430acd8577a"
  },
  {
    "url": "posts/2018/01/01/index.html",
    "revision": "08b2cd49a709f2293c1675701692532d"
  },
  {
    "url": "posts/2018/01/01/review-2017/index.html",
    "revision": "7cbd0372c74f62842f3620f6aefefee7"
  },
  {
    "url": "posts/2018/01/index.html",
    "revision": "4bdf9b07a1988b4df52c144657457282"
  },
  {
    "url": "posts/2018/03/03/index.html",
    "revision": "f04ad7f40221562e1a307348159e5792"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/index.html",
    "revision": "4863bb8a687f2fb207d3afe72b006da8"
  },
  {
    "url": "posts/2018/03/04/index.html",
    "revision": "43a0b0b6c1a3751bbcde660722f98f98"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html",
    "revision": "094795876a532ca1000b5da4d319a8d1"
  },
  {
    "url": "posts/2018/03/index.html",
    "revision": "76dc1a617eb221a6e896e62b2dce36cc"
  },
  {
    "url": "posts/2018/04/01/index.html",
    "revision": "4b5177a0990ae062f01c9838ec4b2b29"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/index.html",
    "revision": "fc8bedcf70d0bc37403343be6ec60f5c"
  },
  {
    "url": "posts/2018/04/index.html",
    "revision": "a494204f56619cef6026eacbed8e8088"
  },
  {
    "url": "posts/2018/index.html",
    "revision": "b5c48693aabfe23d1d61514a5d7c9469"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/index.html",
    "revision": "ba6abdb7f9ff3b9d7f672ce074ff827d"
  },
  {
    "url": "posts/2019/07/07/index.html",
    "revision": "01e83c5834be4d67be6022b9a19e2a3e"
  },
  {
    "url": "posts/2019/07/index.html",
    "revision": "d30ad5f900e6ee7c21d5508e4b0198dd"
  },
  {
    "url": "posts/2019/index.html",
    "revision": "21d31f7927deb0432a79388b0a235d42"
  },
  {
    "url": "posts/index.html",
    "revision": "8bafff4e3fc7f10913df2bfc9d583e0b"
  },
  {
    "url": "static/css/main.b5bc720a72b975add458.css",
    "revision": "8efad7d7060b7162cc3ebdb94f967318"
  },
  {
    "url": "static/css/vendors.78f244274365385882e2.css",
    "revision": "8ceacd6286906a667c21221c5bd64a42"
  },
  {
    "url": "static/js/main.b5bc720a72b975add458.js",
    "revision": "6678b712eec087f7416118bde798f3d5"
  },
  {
    "url": "static/js/vendors.78f244274365385882e2.js",
    "revision": "c74a8551cc4cb99abe2481beb7c6a91d"
  },
  {
    "url": "tags/Actions/index.html",
    "revision": "bec963c7b970d60e8058cf77eaa38623"
  },
  {
    "url": "tags/Angular/index.html",
    "revision": "24344ab7f219a1afb04a79cd907d86ac"
  },
  {
    "url": "tags/AngularJS/index.html",
    "revision": "aae5d28664547bcb241f760ff1be9ad6"
  },
  {
    "url": "tags/Apache/index.html",
    "revision": "91deec1b5ce29d2d3ffe422962d3be45"
  },
  {
    "url": "tags/Blog/index.html",
    "revision": "01e2853637be793de3d1f8817835d010"
  },
  {
    "url": "tags/CI/index.html",
    "revision": "a23bab87601cdd4f187cca778c2c39a3"
  },
  {
    "url": "tags/Diary/index.html",
    "revision": "0321542cab0e52a40898d45f788bab09"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "dcd7ccf3b2cb1a33ab3d189f256957cf"
  },
  {
    "url": "tags/ExtJS/index.html",
    "revision": "58d7956961142fe4890561326ea6412a"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "e399d7f2d39ec7914af1b6223d1fdc5c"
  },
  {
    "url": "tags/Google/index.html",
    "revision": "71bae7824588d859da72d4a65c7d2779"
  },
  {
    "url": "tags/Gulp/index.html",
    "revision": "8e1ac24daa83aac247704c4fb4f81ed7"
  },
  {
    "url": "tags/Hadoop/index.html",
    "revision": "10ad3b60ab5feeaf23013e2585593ab9"
  },
  {
    "url": "tags/index.html",
    "revision": "d4cb37dc5682f8b5751f639fe1f9091f"
  },
  {
    "url": "tags/IntelliJ IDEA/index.html",
    "revision": "14ee8805b1535f2a02fdfb553a693baa"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "b3c16ab3bd330eaa8bd45f9f64f55c85"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "5fa0718d33125b7429fbeddf31bb99a3"
  },
  {
    "url": "tags/JAWR/index.html",
    "revision": "e41528072375b30fb1869a027dd83c64"
  },
  {
    "url": "tags/JSF/index.html",
    "revision": "fb791275da92efac4de51ad8de7e97d9"
  },
  {
    "url": "tags/Karma/index.html",
    "revision": "52c0591f769ef99b5d9eff2fac2a0d04"
  },
  {
    "url": "tags/Linux/index.html",
    "revision": "84d930fea9badd2336a937bec76bf785"
  },
  {
    "url": "tags/Node/index.html",
    "revision": "925e524732472f7e57be2bea88484b18"
  },
  {
    "url": "tags/NPM/index.html",
    "revision": "0cb95fa96faceed900269e9bb2a7d019"
  },
  {
    "url": "tags/Oracle/index.html",
    "revision": "b4fb2a292a3241cf4abdb243ae57d54d"
  },
  {
    "url": "tags/PWA/index.html",
    "revision": "4abfe1d08f98ef3233d427ef3a3eacbe"
  },
  {
    "url": "tags/Security/index.html",
    "revision": "1b6dd2484c466fb662c868f2e565aec2"
  },
  {
    "url": "tags/Shiro/index.html",
    "revision": "fcad2fb482d5d423324877eae5177c26"
  },
  {
    "url": "tags/Site/index.html",
    "revision": "42b46d63b233f97ea2b880f7f178c709"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "9cb7e0b51231e633d2df71e57d26bcb7"
  },
  {
    "url": "tags/SpringMVC/index.html",
    "revision": "e4149a9ba15d263c0310ad196814e0cd"
  },
  {
    "url": "tags/TravisCI/index.html",
    "revision": "d97f1fad3890bf2e994b4e9a919ce8ef"
  },
  {
    "url": "tags/Ubuntu/index.html",
    "revision": "0c9b488a1da71f4abc9f17998a7f109f"
  },
  {
    "url": "tags/VPS/index.html",
    "revision": "4bad30f420b96a6a2a19c9373952335e"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "dba152337705da7fff56e5d32596e138"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "4f82bf31a44df19516180fa11cf6d5d0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
