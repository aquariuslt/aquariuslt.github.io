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
    "revision": "cf0a664ac931976ff8c2a339cf40cde7"
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
    "revision": "a255665bdc1051b45d07f1a3fd8534a3"
  },
  {
    "url": "api/v1/pages/about.json",
    "revision": "1bc13cfaa464ac140d38e25b54d6aac0"
  },
  {
    "url": "api/v1/posts.json",
    "revision": "ac259aca8eb0b392708250865fd21f05"
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
    "revision": "a5a53f3e4fc35be35cc365482627f818"
  },
  {
    "url": "api/v1/posts/2019/07.json",
    "revision": "a5a53f3e4fc35be35cc365482627f818"
  },
  {
    "url": "api/v1/posts/2019/07/07.json",
    "revision": "a33bf5c139c77e480c7cad3a1827d421"
  },
  {
    "url": "api/v1/posts/2019/07/07/github-actions-overview-and-practice.json",
    "revision": "17e754285104bc409b45616256983aa9"
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
    "revision": "a33bf5c139c77e480c7cad3a1827d421"
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
    "revision": "a33bf5c139c77e480c7cad3a1827d421"
  },
  {
    "url": "api/v1/tags/Diary.json",
    "revision": "6636029fab0da71ed7eca323d8f762e0"
  },
  {
    "url": "api/v1/tags/Docker.json",
    "revision": "a33bf5c139c77e480c7cad3a1827d421"
  },
  {
    "url": "api/v1/tags/ExtJS.json",
    "revision": "0057dac26e8d2093010989a8e12862cf"
  },
  {
    "url": "api/v1/tags/Github.json",
    "revision": "baa393657bdd97ad4c7afde0085c1719"
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
    "revision": "a33bf5c139c77e480c7cad3a1827d421"
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
    "revision": "a33bf5c139c77e480c7cad3a1827d421"
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
    "url": "static/css/main.b5467e9dccb0c72f9170.css",
    "revision": "8efad7d7060b7162cc3ebdb94f967318"
  },
  {
    "url": "static/css/vendors.e1722bf03242643b3a5c.css",
    "revision": "8ceacd6286906a667c21221c5bd64a42"
  },
  {
    "url": "static/js/main.b5467e9dccb0c72f9170.js",
    "revision": "69a52847a552d89d45edbb4427dc0459"
  },
  {
    "url": "static/js/vendors.e1722bf03242643b3a5c.js",
    "revision": "5e08033eb935f912272b7ee498fbb4a5"
  },
  {
    "url": "static/manifest/manifest.json",
    "revision": "c3eb252dfbcdaa0c4104ead9247e092e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
