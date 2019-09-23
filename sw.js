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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

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
    "revision": "56c68d5a0d4bc1bf28385388151fdadc"
  },
  {
    "url": "api/v1/categories/Blog.json",
    "revision": "fb6e994753c0253f0da36ed51cd28515"
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
    "revision": "83818007b7e1f5a6afc2e8137f4cf26f"
  },
  {
    "url": "api/v1/pages.json",
    "revision": "2f08852fd0b204edfa312f7702380dfc"
  },
  {
    "url": "api/v1/pages/about.json",
    "revision": "77454502c58232f7f81ac03dfa578165"
  },
  {
    "url": "api/v1/posts.json",
    "revision": "fe6e583f14feae14f674e12cfb41f493"
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
    "revision": "b21dcd69d9a076ea09b716063b5460ea"
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
    "revision": "5c8bd7fb5b10118e1094469b6d9e4a9f"
  },
  {
    "url": "api/v1/posts/2017/03/12.json",
    "revision": "5c8bd7fb5b10118e1094469b6d9e4a9f"
  },
  {
    "url": "api/v1/posts/2017/03/12/new-version-blog-migration.json",
    "revision": "2e6c25b30dc059fa23cbb15545d5bf2b"
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
    "revision": "10e129c6457220d2f632a01203d694df"
  },
  {
    "url": "api/v1/posts/2018/01.json",
    "revision": "5fc549f33c8106df0f5bf7eb4813ca71"
  },
  {
    "url": "api/v1/posts/2018/01/01.json",
    "revision": "5fc549f33c8106df0f5bf7eb4813ca71"
  },
  {
    "url": "api/v1/posts/2018/01/01/review-2017.json",
    "revision": "82286517d7cb43cc8f884a23ea1188a1"
  },
  {
    "url": "api/v1/posts/2018/03.json",
    "revision": "e19c9eef9fc78bf965bfa2fc3e7b025c"
  },
  {
    "url": "api/v1/posts/2018/03/03.json",
    "revision": "2f01ebe933236717eddcdbf6252d0daa"
  },
  {
    "url": "api/v1/posts/2018/03/03/latest-update-on-blog-app.json",
    "revision": "cf9646d5754edb0fdbd374ae7132a55e"
  },
  {
    "url": "api/v1/posts/2018/03/04.json",
    "revision": "82b9ce5ac903e13f2783b50437795659"
  },
  {
    "url": "api/v1/posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution.json",
    "revision": "26a26f7c2b818e0750b90fc4b4c2fd30"
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
    "revision": "cff7bde5f862a9c39d10eb9bc790bcfe"
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
    "revision": "5dc9656d30ae33c95a895305d70a7fe7"
  },
  {
    "url": "api/v1/posts/2019/08.json",
    "revision": "c6f3fdcf9133b74a80fe2ad0cc2d14af"
  },
  {
    "url": "api/v1/posts/2019/08/18.json",
    "revision": "c6f3fdcf9133b74a80fe2ad0cc2d14af"
  },
  {
    "url": "api/v1/posts/2019/08/18/github-actions-new-yaml-syntax.json",
    "revision": "e8a863ca34bd079e9c8e76409e5f8542"
  },
  {
    "url": "api/v1/tags.json",
    "revision": "348721d761dbf46c867eb464afcf3cf3"
  },
  {
    "url": "api/v1/tags/Actions.json",
    "revision": "fc69786b32c22c655771231f193bd61b"
  },
  {
    "url": "api/v1/tags/Angular.json",
    "revision": "8673a06225747076899624d55890cbc7"
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
    "revision": "752f96481c8e0cbfbbb39ff4ab9d8e24"
  },
  {
    "url": "api/v1/tags/CI.json",
    "revision": "fc69786b32c22c655771231f193bd61b"
  },
  {
    "url": "api/v1/tags/Diary.json",
    "revision": "4a7de4aee8c2c86db281bf162673bd16"
  },
  {
    "url": "api/v1/tags/Docker.json",
    "revision": "fc69786b32c22c655771231f193bd61b"
  },
  {
    "url": "api/v1/tags/ExtJS.json",
    "revision": "82b9ce5ac903e13f2783b50437795659"
  },
  {
    "url": "api/v1/tags/Github.json",
    "revision": "48d03d5aac2c634de3b57c7985b0f9e0"
  },
  {
    "url": "api/v1/tags/Google.json",
    "revision": "0d65c5801c705d661a88562dda9cb2ba"
  },
  {
    "url": "api/v1/tags/Gulp.json",
    "revision": "2f01ebe933236717eddcdbf6252d0daa"
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
    "revision": "a5e05d018a3d88f7becaed324027b5ca"
  },
  {
    "url": "api/v1/tags/JavaScript.json",
    "revision": "53270c4deb99ff8f445b813e7aa7ae3e"
  },
  {
    "url": "api/v1/tags/JAWR.json",
    "revision": "665f5efbbe0f9907bfc69b58492df833"
  },
  {
    "url": "api/v1/tags/JSF.json",
    "revision": "82b9ce5ac903e13f2783b50437795659"
  },
  {
    "url": "api/v1/tags/Karma.json",
    "revision": "851bd6f91baf98434634343a6c097633"
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
    "revision": "fc69786b32c22c655771231f193bd61b"
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
    "revision": "09a67e97f466d03e52aaf003b4249371"
  },
  {
    "url": "api/v1/tags/SpringMVC.json",
    "revision": "82b9ce5ac903e13f2783b50437795659"
  },
  {
    "url": "api/v1/tags/TravisCI.json",
    "revision": "fc69786b32c22c655771231f193bd61b"
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
    "revision": "197a6e42c8004abfe5f87455035c8ec9"
  },
  {
    "url": "api/v1/tags/Webpack.json",
    "revision": "e19c9eef9fc78bf965bfa2fc3e7b025c"
  },
  {
    "url": "routes.json",
    "revision": "fbffd99b5062c736ba663ec8f2d531dc"
  },
  {
    "url": "static/css/main.35ffc3c9b3b152416191.css",
    "revision": "660c3d5fe10ded0d5b42febe95ec8170"
  },
  {
    "url": "static/css/vendors.e1df8ef3df206b07b7d4.css",
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
    "url": "static/js/main.35ffc3c9b3b152416191.js",
    "revision": "766466a5b46bf22ac1bdddba63574958"
  },
  {
    "url": "static/js/vendors.e1df8ef3df206b07b7d4.js",
    "revision": "ae0e3a0fadc6ee6f3225a3010e3febc4"
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
    "revision": "81d4cf68fac5423163257b829cb79dcb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
