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
    "url": "api/v1/categories.json",
    "revision": "ef058b94e9a3b375cf20f89dca95e155"
  },
  {
    "url": "api/v1/categories/Blog.json",
    "revision": "b9c2c0fe6ffd03de879a0cf9cde96eb2"
  },
  {
    "url": "api/v1/categories/Debug.json",
    "revision": "acc577124233f4edfea296aa2455b856"
  },
  {
    "url": "api/v1/categories/Note.json",
    "revision": "cd3980922889bc1f1121257737aa6185"
  },
  {
    "url": "api/v1/categories/Others.json",
    "revision": "88bd30c3e0e7f6774579f0f7f1376c6c"
  },
  {
    "url": "api/v1/pages.json",
    "revision": "20222472e81aa6d4089733ec62a2db65"
  },
  {
    "url": "api/v1/pages/about.json",
    "revision": "c288e85e6773b47ce8c4b9c6a7661716"
  },
  {
    "url": "api/v1/posts.json",
    "revision": "4b115ed9dc07700fbe00601bc5fe91ac"
  },
  {
    "url": "api/v1/posts/2015.json",
    "revision": "6f9330bdff3c5a696a8d2d2cdc65f605"
  },
  {
    "url": "api/v1/posts/2015/10.json",
    "revision": "5339734bba8c5f7cc71255fe96fca16a"
  },
  {
    "url": "api/v1/posts/2015/10/25.json",
    "revision": "5339734bba8c5f7cc71255fe96fca16a"
  },
  {
    "url": "api/v1/posts/2015/10/25/apache-shiro-spring-integration.json",
    "revision": "15635da2ab9ba12c871f51458f099372"
  },
  {
    "url": "api/v1/posts/2015/11.json",
    "revision": "d6b307c6e36c2c60990e77e248b2c718"
  },
  {
    "url": "api/v1/posts/2015/11/10.json",
    "revision": "d6b307c6e36c2c60990e77e248b2c718"
  },
  {
    "url": "api/v1/posts/2015/11/10/beanutils-vs-reflection.json",
    "revision": "5af082bc182f912c538697b6e9661afc"
  },
  {
    "url": "api/v1/posts/2015/12.json",
    "revision": "91c6933ab37188fa78d796b4e421176c"
  },
  {
    "url": "api/v1/posts/2015/12/13.json",
    "revision": "65f285385558e64a50eba26a0d906a8c"
  },
  {
    "url": "api/v1/posts/2015/12/13/ubuntu-mean-development-environment-setup.json",
    "revision": "dc942610bdfaf010f1e1a34ff38ce55b"
  },
  {
    "url": "api/v1/posts/2015/12/14.json",
    "revision": "93af3f2fdc5b55cfc8e6ab3112b76172"
  },
  {
    "url": "api/v1/posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file.json",
    "revision": "c93584471ff86ec20f2a919a588beff9"
  },
  {
    "url": "api/v1/posts/2015/12/27.json",
    "revision": "7ae7543fe780616fd4986eaa2ae61064"
  },
  {
    "url": "api/v1/posts/2015/12/27/site-upgrade-plan.json",
    "revision": "5d99e67cc182874d19756a6390856c08"
  },
  {
    "url": "api/v1/posts/2016.json",
    "revision": "f7e2724b9b9066f5cfd14f2ce6cf1da2"
  },
  {
    "url": "api/v1/posts/2016/01.json",
    "revision": "fe854b8ebae387ac263edf7f7faab3c6"
  },
  {
    "url": "api/v1/posts/2016/01/01.json",
    "revision": "fbc9833fa00e7850c57ca2d627262bec"
  },
  {
    "url": "api/v1/posts/2016/01/01/review-2015.json",
    "revision": "086a32441b5f2c456d79ed5a89acce6f"
  },
  {
    "url": "api/v1/posts/2016/01/11.json",
    "revision": "9c3e03cef82ef19731db376d23b004bd"
  },
  {
    "url": "api/v1/posts/2016/01/11/nodejs-oracledb-install-on-rhel-6.json",
    "revision": "4319a9a443c9ea3c440ce3a43be663d4"
  },
  {
    "url": "api/v1/posts/2016/01/12.json",
    "revision": "8da001788e452d70be02fed191034c73"
  },
  {
    "url": "api/v1/posts/2016/01/12/nodejs-oracledb-ora-21561-solution.json",
    "revision": "da440fac2e9eb87e32c5c30868d75334"
  },
  {
    "url": "api/v1/posts/2016/03.json",
    "revision": "e7c81f59e98f8341a19a736e2eedaffa"
  },
  {
    "url": "api/v1/posts/2016/03/06.json",
    "revision": "e7c81f59e98f8341a19a736e2eedaffa"
  },
  {
    "url": "api/v1/posts/2016/03/06/site-code-structure.json",
    "revision": "17730bcda37f8220ee24853561a81e1c"
  },
  {
    "url": "api/v1/posts/2016/04.json",
    "revision": "a6a8e1ba8382a43b43298303d672bf27"
  },
  {
    "url": "api/v1/posts/2016/04/09.json",
    "revision": "1bae3a42dbde7a8d9984cf32924f43da"
  },
  {
    "url": "api/v1/posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide.json",
    "revision": "7e2ff968e6711e85d1522711aa6db8bd"
  },
  {
    "url": "api/v1/posts/2016/04/10.json",
    "revision": "0d65c5801c705d661a88562dda9cb2ba"
  },
  {
    "url": "api/v1/posts/2016/04/10/google-codejam-2016-qualification-round.json",
    "revision": "bb94ccfd31c84d97349340ebf7d48a08"
  },
  {
    "url": "api/v1/posts/2016/04/30.json",
    "revision": "b1988a8bda20d5f29559f1c024ecb089"
  },
  {
    "url": "api/v1/posts/2016/04/30/angular-ui-performance-tuning-experience.json",
    "revision": "4a12060138371f13026f347e4a37dbd0"
  },
  {
    "url": "api/v1/posts/2016/07.json",
    "revision": "c520967b7a9b21d66760753237ac7efe"
  },
  {
    "url": "api/v1/posts/2016/07/05.json",
    "revision": "c520967b7a9b21d66760753237ac7efe"
  },
  {
    "url": "api/v1/posts/2016/07/05/move-to-new-apartment.json",
    "revision": "c1b752fc8c901576144020b4c8a630e2"
  },
  {
    "url": "api/v1/posts/2017.json",
    "revision": "1c2644b8ec6290d5be5733a065b942f8"
  },
  {
    "url": "api/v1/posts/2017/01.json",
    "revision": "1fc79166ee68caea6b68afd869984556"
  },
  {
    "url": "api/v1/posts/2017/01/01.json",
    "revision": "1fc79166ee68caea6b68afd869984556"
  },
  {
    "url": "api/v1/posts/2017/01/01/review-2016.json",
    "revision": "b6d1dea5bb5a01dbd8c3897a024ad2b4"
  },
  {
    "url": "api/v1/posts/2017/03.json",
    "revision": "6edb84638a1cc05eae0f8802961ef696"
  },
  {
    "url": "api/v1/posts/2017/03/12.json",
    "revision": "6edb84638a1cc05eae0f8802961ef696"
  },
  {
    "url": "api/v1/posts/2017/03/12/new-version-blog-migration.json",
    "revision": "fb1ac5e0e34275c6aded1141a25fa987"
  },
  {
    "url": "api/v1/posts/2017/05.json",
    "revision": "66ba36895c9131705fc6c7253d2ee4b0"
  },
  {
    "url": "api/v1/posts/2017/05/05.json",
    "revision": "66ba36895c9131705fc6c7253d2ee4b0"
  },
  {
    "url": "api/v1/posts/2017/05/05/vue-version-for-blog-app.json",
    "revision": "0a752e67633af2c94f17ccf9b58148c2"
  },
  {
    "url": "api/v1/posts/2018.json",
    "revision": "f0d4221a1fdbf5041237453abc7f0070"
  },
  {
    "url": "api/v1/posts/2018/01.json",
    "revision": "d9d42a88d05bca28afb0167452bcdf23"
  },
  {
    "url": "api/v1/posts/2018/01/01.json",
    "revision": "d9d42a88d05bca28afb0167452bcdf23"
  },
  {
    "url": "api/v1/posts/2018/01/01/review-2017.json",
    "revision": "1b065f2bcecd013eeb80a12bcee0f557"
  },
  {
    "url": "api/v1/posts/2018/03.json",
    "revision": "230cd1154ff04477be83359b4da7d252"
  },
  {
    "url": "api/v1/posts/2018/03/03.json",
    "revision": "1da79ea0305819c1e4d0866851b7fee0"
  },
  {
    "url": "api/v1/posts/2018/03/03/latest-update-on-blog-app.json",
    "revision": "1cfda3b7172a0627d2d49ebfab93fb14"
  },
  {
    "url": "api/v1/posts/2018/03/04.json",
    "revision": "0057dac26e8d2093010989a8e12862cf"
  },
  {
    "url": "api/v1/posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution.json",
    "revision": "6b393b00e10c32364695ea114ce75e62"
  },
  {
    "url": "api/v1/posts/2018/04.json",
    "revision": "b81a194a5a530904a4f49e7b72a59d26"
  },
  {
    "url": "api/v1/posts/2018/04/01.json",
    "revision": "b81a194a5a530904a4f49e7b72a59d26"
  },
  {
    "url": "api/v1/posts/2018/04/01/karma-jawr-development-note.json",
    "revision": "db8a0d6b4b35922676fc28498ad255f5"
  },
  {
    "url": "api/v1/posts/2019.json",
    "revision": "73c5e877f1770e338c4875e6fe012cef"
  },
  {
    "url": "api/v1/posts/2019/07.json",
    "revision": "73c5e877f1770e338c4875e6fe012cef"
  },
  {
    "url": "api/v1/posts/2019/07/07.json",
    "revision": "341d6d1b00e9d6481ae60419c6bc3a37"
  },
  {
    "url": "api/v1/posts/2019/07/07/github-actions-overview-and-practice.json",
    "revision": "f089c218c219d64fdb9c88f7a3a3ae23"
  },
  {
    "url": "api/v1/posts/2019/07/23.json",
    "revision": "b10f69bfe7fa6e6b1edf6bddb1d06e97"
  },
  {
    "url": "api/v1/posts/2019/07/23/travel-in-beijing.json",
    "revision": "48cf848f2f55f9cb7e0b96cd5157a112"
  },
  {
    "url": "api/v1/tags.json",
    "revision": "863573ec6d1c83003c85e7b398c9f4f2"
  },
  {
    "url": "api/v1/tags/Actions.json",
    "revision": "341d6d1b00e9d6481ae60419c6bc3a37"
  },
  {
    "url": "api/v1/tags/Angular.json",
    "revision": "4d8700d9c2818eb5205955d729b45ed8"
  },
  {
    "url": "api/v1/tags/AngularJS.json",
    "revision": "b81a194a5a530904a4f49e7b72a59d26"
  },
  {
    "url": "api/v1/tags/Apache.json",
    "revision": "d6b307c6e36c2c60990e77e248b2c718"
  },
  {
    "url": "api/v1/tags/Blog.json",
    "revision": "250d08fbbdcf7a104a3369a9014c99df"
  },
  {
    "url": "api/v1/tags/CI.json",
    "revision": "341d6d1b00e9d6481ae60419c6bc3a37"
  },
  {
    "url": "api/v1/tags/Diary.json",
    "revision": "6636029fab0da71ed7eca323d8f762e0"
  },
  {
    "url": "api/v1/tags/Docker.json",
    "revision": "341d6d1b00e9d6481ae60419c6bc3a37"
  },
  {
    "url": "api/v1/tags/ExtJS.json",
    "revision": "0057dac26e8d2093010989a8e12862cf"
  },
  {
    "url": "api/v1/tags/Github.json",
    "revision": "7dc9ef40ea06d8ad156501a69a297b80"
  },
  {
    "url": "api/v1/tags/Google.json",
    "revision": "0d65c5801c705d661a88562dda9cb2ba"
  },
  {
    "url": "api/v1/tags/Gulp.json",
    "revision": "1da79ea0305819c1e4d0866851b7fee0"
  },
  {
    "url": "api/v1/tags/Hadoop.json",
    "revision": "1bae3a42dbde7a8d9984cf32924f43da"
  },
  {
    "url": "api/v1/tags/IntelliJ IDEA.json",
    "revision": "65f285385558e64a50eba26a0d906a8c"
  },
  {
    "url": "api/v1/tags/Java.json",
    "revision": "96ebd0aa1e81300ea0e5e8855404c768"
  },
  {
    "url": "api/v1/tags/JavaScript.json",
    "revision": "6c996bf8a8df006c4e88b8d63094f2c2"
  },
  {
    "url": "api/v1/tags/JAWR.json",
    "revision": "3a3236d4e964f040de2dac318920152e"
  },
  {
    "url": "api/v1/tags/JSF.json",
    "revision": "0057dac26e8d2093010989a8e12862cf"
  },
  {
    "url": "api/v1/tags/Karma.json",
    "revision": "d4114c14ef2e6c0a8322bef4c044b2e3"
  },
  {
    "url": "api/v1/tags/Linux.json",
    "revision": "fba4a50d389b2c3ebddf08c666283748"
  },
  {
    "url": "api/v1/tags/Node.json",
    "revision": "b1aa39fd4ddf2ac29d960dfcb06c3bb6"
  },
  {
    "url": "api/v1/tags/NPM.json",
    "revision": "341d6d1b00e9d6481ae60419c6bc3a37"
  },
  {
    "url": "api/v1/tags/Oracle.json",
    "revision": "93af3f2fdc5b55cfc8e6ab3112b76172"
  },
  {
    "url": "api/v1/tags/PWA.json",
    "revision": "66ba36895c9131705fc6c7253d2ee4b0"
  },
  {
    "url": "api/v1/tags/Security.json",
    "revision": "5339734bba8c5f7cc71255fe96fca16a"
  },
  {
    "url": "api/v1/tags/Shiro.json",
    "revision": "5339734bba8c5f7cc71255fe96fca16a"
  },
  {
    "url": "api/v1/tags/Site.json",
    "revision": "7ae7543fe780616fd4986eaa2ae61064"
  },
  {
    "url": "api/v1/tags/Spring.json",
    "revision": "7ebb67cf02ec92c7c62005d1b64d13f7"
  },
  {
    "url": "api/v1/tags/SpringMVC.json",
    "revision": "0057dac26e8d2093010989a8e12862cf"
  },
  {
    "url": "api/v1/tags/TravisCI.json",
    "revision": "341d6d1b00e9d6481ae60419c6bc3a37"
  },
  {
    "url": "api/v1/tags/Trips.json",
    "revision": "b10f69bfe7fa6e6b1edf6bddb1d06e97"
  },
  {
    "url": "api/v1/tags/Ubuntu.json",
    "revision": "33fbea9c2c62764892ae87a67551017f"
  },
  {
    "url": "api/v1/tags/VPS.json",
    "revision": "7ae7543fe780616fd4986eaa2ae61064"
  },
  {
    "url": "api/v1/tags/Vue.json",
    "revision": "3ac767eb86c71a501fee04a2951663f9"
  },
  {
    "url": "api/v1/tags/Webpack.json",
    "revision": "230cd1154ff04477be83359b4da7d252"
  },
  {
    "url": "routes.json",
    "revision": "718ee4fe415494fdc1516d6323618dbb"
  },
  {
    "url": "static/css/main.31ae3278df59683702dd.css",
    "revision": "660c3d5fe10ded0d5b42febe95ec8170"
  },
  {
    "url": "static/css/vendors.33e73ce062a6ccbfafcc.css",
    "revision": "8ceacd6286906a667c21221c5bd64a42"
  },
  {
    "url": "static/img/manifest.json",
    "revision": "e87161a690dc254033cdfc4bfa159c2c"
  },
  {
    "url": "static/img/yandex-browser-manifest.json",
    "revision": "8644fb595f991c2bc5b2e45892e653b2"
  },
  {
    "url": "static/js/main.31ae3278df59683702dd.js",
    "revision": "acbe219fb508f609ffcb731abbcd5340"
  },
  {
    "url": "static/js/vendors.33e73ce062a6ccbfafcc.js",
    "revision": "3bc287ddfe3f5238ec42cdedc82fc43f"
  },
  {
    "url": "static/img/android-chrome-144x144.png",
    "revision": "a741b7d9d9331e5fb6ab9bfd9e15c2fc"
  },
  {
    "url": "static/img/android-chrome-192x192.png",
    "revision": "2b8032df05a293b019626775f9102acf"
  },
  {
    "url": "static/img/android-chrome-256x256.png",
    "revision": "b6050a0c6c1abb3e7d4871f0c9220b17"
  },
  {
    "url": "static/img/android-chrome-36x36.png",
    "revision": "e27d1150bd95835eaa351b1269081019"
  },
  {
    "url": "static/img/android-chrome-384x384.png",
    "revision": "e5f26481df55f87fc6ded13c7e8d20df"
  },
  {
    "url": "static/img/android-chrome-48x48.png",
    "revision": "9b0222185af4779c85bb2e5284339cac"
  },
  {
    "url": "static/img/android-chrome-512x512.png",
    "revision": "05110ea664950767409bdb28f4ea79cf"
  },
  {
    "url": "static/img/android-chrome-72x72.png",
    "revision": "0441524c2cd7e9fd75a4665b2f7db3d0"
  },
  {
    "url": "static/img/android-chrome-96x96.png",
    "revision": "70200d22d8e6972bfefccada4080ab56"
  },
  {
    "url": "static/img/apple-touch-icon-1024x1024.png",
    "revision": "91df8cd8c16053bcf628930731a7ff64"
  },
  {
    "url": "static/img/apple-touch-icon-114x114.png",
    "revision": "9c7634cd0b5996e0d53faac6dca36071"
  },
  {
    "url": "static/img/apple-touch-icon-120x120.png",
    "revision": "4938b2ade9f0ec2837593237aaebb630"
  },
  {
    "url": "static/img/apple-touch-icon-144x144.png",
    "revision": "404db2140bd1908124be5b7161735f15"
  },
  {
    "url": "static/img/apple-touch-icon-152x152.png",
    "revision": "9cd493433095213d6484bcb9ad98630b"
  },
  {
    "url": "static/img/apple-touch-icon-167x167.png",
    "revision": "fc3d7d98a99337d8a685c0004b2b5ad4"
  },
  {
    "url": "static/img/apple-touch-icon-180x180.png",
    "revision": "95be3b5e6f3e2edc53fab70f7a013f07"
  },
  {
    "url": "static/img/apple-touch-icon-57x57.png",
    "revision": "159ff560d2d613449409d0b359aae649"
  },
  {
    "url": "static/img/apple-touch-icon-60x60.png",
    "revision": "b301d5b2728e91619ce0b848af3b235d"
  },
  {
    "url": "static/img/apple-touch-icon-72x72.png",
    "revision": "b36bd27ab72c8dfe56be5ecf79152873"
  },
  {
    "url": "static/img/apple-touch-icon-76x76.png",
    "revision": "99a3ab785065ea53bdb19ee1ca466424"
  },
  {
    "url": "static/img/apple-touch-icon-precomposed.png",
    "revision": "95be3b5e6f3e2edc53fab70f7a013f07"
  },
  {
    "url": "static/img/apple-touch-icon.png",
    "revision": "95be3b5e6f3e2edc53fab70f7a013f07"
  },
  {
    "url": "static/img/apple-touch-startup-image-1182x2208.png",
    "revision": "ee78fb1ccf1b7722b24d628dd6bb03d5"
  },
  {
    "url": "static/img/apple-touch-startup-image-1242x2148.png",
    "revision": "843771002fe6e4156908974fd5940c16"
  },
  {
    "url": "static/img/apple-touch-startup-image-1496x2048.png",
    "revision": "0b1e7701d6d0e535c7154a540374349a"
  },
  {
    "url": "static/img/apple-touch-startup-image-1536x2008.png",
    "revision": "11b810a3afe75560573b22d6423cf99c"
  },
  {
    "url": "static/img/apple-touch-startup-image-320x460.png",
    "revision": "9a2776a4d74fe24efdb3ca1c05d83af4"
  },
  {
    "url": "static/img/apple-touch-startup-image-640x1096.png",
    "revision": "9977ee6d28ec5a2fe78c47ecc3473f21"
  },
  {
    "url": "static/img/apple-touch-startup-image-640x920.png",
    "revision": "8adbf61fe028a959014fc7add5f41567"
  },
  {
    "url": "static/img/apple-touch-startup-image-748x1024.png",
    "revision": "bc62d785652db4745ea4c9b0a0d38ebc"
  },
  {
    "url": "static/img/apple-touch-startup-image-750x1294.png",
    "revision": "23211cc91b6f4d9f75f23a3aa4a42da1"
  },
  {
    "url": "static/img/apple-touch-startup-image-768x1004.png",
    "revision": "b4b5d4ecf9ca53b252356839798b6683"
  },
  {
    "url": "static/img/coast-228x228.png",
    "revision": "1fed520e9ea5ee84ff2f63fff137c757"
  },
  {
    "url": "static/img/favicon-16x16.png",
    "revision": "636d03ba1f238c93219aedd4175ce374"
  },
  {
    "url": "static/img/favicon-32x32.png",
    "revision": "05abdd389cc6fbfcb5985395afcf35e8"
  },
  {
    "url": "static/img/firefox_app_128x128.png",
    "revision": "dee314639062b231dac2f0b286172427"
  },
  {
    "url": "static/img/firefox_app_512x512.png",
    "revision": "f84a6e6d2cd4cc5063ae6424beddc7be"
  },
  {
    "url": "static/img/firefox_app_60x60.png",
    "revision": "7ece99e50a2e60a4d9333a8e6a7ade17"
  },
  {
    "url": "static/img/mstile-144x144.png",
    "revision": "a741b7d9d9331e5fb6ab9bfd9e15c2fc"
  },
  {
    "url": "static/img/mstile-150x150.png",
    "revision": "4fe58f866a9582176aa2c4c3eaba06e6"
  },
  {
    "url": "static/img/mstile-310x150.png",
    "revision": "a8d0c073d0c74323d18bab292e1c2fcf"
  },
  {
    "url": "static/img/mstile-310x310.png",
    "revision": "ac5299d7804862de304989e418063534"
  },
  {
    "url": "static/img/mstile-70x70.png",
    "revision": "9d9363d484cc1140dfe4e4ae6d8643bc"
  },
  {
    "url": "static/img/yandex-browser-50x50.png",
    "revision": "1374f1157bfb5ffb967d3165216b3a44"
  },
  {
    "url": "index.html",
    "revision": "4eab068f3a27d7b4792c500aecabb3bd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
