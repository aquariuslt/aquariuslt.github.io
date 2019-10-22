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

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "api/categories.json",
    "revision": "ae09abe71b056461b94c6bf4dabd0360"
  },
  {
    "url": "api/categories/blog.json",
    "revision": "ac714b032a901c577307ccfc6d4713c4"
  },
  {
    "url": "api/categories/debug.json",
    "revision": "7c60d1aa60401d65dce4805a2849d838"
  },
  {
    "url": "api/categories/note.json",
    "revision": "2d81b1b9341106631a4128f84eff7af5"
  },
  {
    "url": "api/categories/others.json",
    "revision": "ba02e578684fb635f1b1b9ff5aa357a4"
  },
  {
    "url": "api/home.json",
    "revision": "94497088f8ee47cc42e3dd9e26bc5ab9"
  },
  {
    "url": "api/navigation.json",
    "revision": "50e852e943669045650ba76f027cb0e3"
  },
  {
    "url": "api/posts.json",
    "revision": "92d9f218684d0ba3e6fa2302a0f0c44a"
  },
  {
    "url": "api/posts/2015/10/25/apache-shiro-spring-integration.json",
    "revision": "e5e5f5dcc107f16722d81a1198305619"
  },
  {
    "url": "api/posts/2015/11/10/beanutils-vs-reflection.json",
    "revision": "6651b3eade8e4eba2b680ae58a2b04f3"
  },
  {
    "url": "api/posts/2015/12/13/ubuntu-mean-development-environment-setup.json",
    "revision": "a38a66a98183e5fc5a66274ddc407324"
  },
  {
    "url": "api/posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file.json",
    "revision": "a61ba755f1c7714c6bf5f45514e72458"
  },
  {
    "url": "api/posts/2015/12/27/site-upgrade-plan.json",
    "revision": "9a06821b53e2856e8bf4bfd390739d6e"
  },
  {
    "url": "api/posts/2016/01/01/review-2015.json",
    "revision": "cc7dc131c197b61d29a8f4274f35ea5e"
  },
  {
    "url": "api/posts/2016/01/11/nodejs-oracledb-install-on-rhel-6.json",
    "revision": "570b263516ae265b8fefbf07e2b20185"
  },
  {
    "url": "api/posts/2016/01/12/nodejs-oracledb-ora-21561-solution.json",
    "revision": "9b42ffd3e4d4c5d5a30acbdd4f35ba8b"
  },
  {
    "url": "api/posts/2016/03/06/site-code-structure.json",
    "revision": "d55f7f19c9fa8de20089278039d461e8"
  },
  {
    "url": "api/posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide.json",
    "revision": "9c033ca3e9032b83797749ee93760fdb"
  },
  {
    "url": "api/posts/2016/04/10/google-codejam-2016-qualification-round.json",
    "revision": "fc2a353e54c0c53033bf1646fee8f5eb"
  },
  {
    "url": "api/posts/2016/04/30/angular-ui-performance-tuning-experience.json",
    "revision": "719a6428c9718d3d4e4d038e04983464"
  },
  {
    "url": "api/posts/2016/07/05/move-to-new-apartment.json",
    "revision": "201f77370718e85b6fcd61015ed863a0"
  },
  {
    "url": "api/posts/2017/01/01/review-2016.json",
    "revision": "85c16a82aefcd82905a69b234bf1c1b5"
  },
  {
    "url": "api/posts/2017/03/12/new-version-blog-migration.json",
    "revision": "86954489b03198902118263b526ce861"
  },
  {
    "url": "api/posts/2017/05/05/vue-version-for-blog-app.json",
    "revision": "f6cb95e1216be70f7e5e4f9f3fb69ba1"
  },
  {
    "url": "api/posts/2018/01/01/review-2017.json",
    "revision": "84d9d46fd9718e894f0929716e8b2b9a"
  },
  {
    "url": "api/posts/2018/03/03/latest-update-on-blog-app.json",
    "revision": "5b8718791cc2383bbdfb8c39303ae885"
  },
  {
    "url": "api/posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution.json",
    "revision": "92ef82b79e2a01d010cae64ebad5cd0e"
  },
  {
    "url": "api/posts/2018/04/01/karma-jawr-development-note.json",
    "revision": "cc2291211d85799ee0e74b216fba38ee"
  },
  {
    "url": "api/posts/2019/07/07/github-actions-overview-and-practice.json",
    "revision": "3cdf1d26098b400b837614c6d83ba944"
  },
  {
    "url": "api/posts/2019/07/23/travel-in-beijing.json",
    "revision": "93d19efc62a7118ef620657281957be0"
  },
  {
    "url": "api/posts/2019/08/18/github-actions-new-yaml-syntax.json",
    "revision": "bc4dd270372728e773cea92e1bde6cbf"
  },
  {
    "url": "api/profile.json",
    "revision": "a5d932d01e2bea6bc56e379b0937c9b7"
  },
  {
    "url": "api/tags.json",
    "revision": "f7537346c3833a4ad6965491c28128d4"
  },
  {
    "url": "api/tags/actions.json",
    "revision": "1ca45b6837fe23e1c7fec74dc96929a5"
  },
  {
    "url": "api/tags/angular.json",
    "revision": "062d44bdd5d7f9638d57c0dbf3c7c2fa"
  },
  {
    "url": "api/tags/angularjs.json",
    "revision": "1ac1ad18b481c8fad7eecfbd2c82736e"
  },
  {
    "url": "api/tags/apache.json",
    "revision": "92fa53ed741749d5189c6dc6a42dd07f"
  },
  {
    "url": "api/tags/blog.json",
    "revision": "6f7d527b9961db38e8ab3c86e9688aa9"
  },
  {
    "url": "api/tags/ci.json",
    "revision": "61476ae62bca1fb6aa30da8bd789321f"
  },
  {
    "url": "api/tags/diary.json",
    "revision": "14f8d82a23bdea27f61321cb2dd6d94b"
  },
  {
    "url": "api/tags/docker.json",
    "revision": "1f21c26142419d343220d75e31ba86c2"
  },
  {
    "url": "api/tags/extjs.json",
    "revision": "663ba0306bedbe0a9c79406ae2d2765c"
  },
  {
    "url": "api/tags/github.json",
    "revision": "8244bd9574e467730a48fbfc16c5fdc2"
  },
  {
    "url": "api/tags/google.json",
    "revision": "cf8cb76c98b5a3f72ae3ebca5d2a7c65"
  },
  {
    "url": "api/tags/gulp.json",
    "revision": "1ae081ef76356f951658516cecf5893b"
  },
  {
    "url": "api/tags/hadoop.json",
    "revision": "6bebcb6754e1624c8ee055155dd06f53"
  },
  {
    "url": "api/tags/intellij-idea.json",
    "revision": "c74a639c5b142f5a0d859129a49d5f10"
  },
  {
    "url": "api/tags/java.json",
    "revision": "790f5b786e273fa4312ab4167a011358"
  },
  {
    "url": "api/tags/javascript.json",
    "revision": "4c774d4fc41041c4d3ed1e0013579cf9"
  },
  {
    "url": "api/tags/jawr.json",
    "revision": "e8d1e8404ef4cb8a02cae9c63d5af3a2"
  },
  {
    "url": "api/tags/jsf.json",
    "revision": "9ec21bf7ed301e64b5f8df342aa74080"
  },
  {
    "url": "api/tags/karma.json",
    "revision": "bcd73f249d79435d3a3db473700db1dd"
  },
  {
    "url": "api/tags/linux.json",
    "revision": "a05efaa10e6c0e520090fe725f1257e0"
  },
  {
    "url": "api/tags/node.json",
    "revision": "f429a3802fabaf80634c960f8ee88dc9"
  },
  {
    "url": "api/tags/npm.json",
    "revision": "d09759b2f7716d350ade994d781d9952"
  },
  {
    "url": "api/tags/oracle.json",
    "revision": "1fab1b09704ca781ad6820ee59fe38c9"
  },
  {
    "url": "api/tags/pwa.json",
    "revision": "d63842805a8a328e7faa53a2f0f825a2"
  },
  {
    "url": "api/tags/security.json",
    "revision": "be07d3f73e0d68e0fd631dd7077cfc18"
  },
  {
    "url": "api/tags/shiro.json",
    "revision": "a9acb353c70df0188e9cb7c80b85bce5"
  },
  {
    "url": "api/tags/site.json",
    "revision": "6556994152e4c8c8e473bf30014aff02"
  },
  {
    "url": "api/tags/spring.json",
    "revision": "cb19c96a2bf3bb44ba87a9662084861e"
  },
  {
    "url": "api/tags/springmvc.json",
    "revision": "efedcc6c6189cca708a5584b22ea76b0"
  },
  {
    "url": "api/tags/travisci.json",
    "revision": "2458583c606cb8b1f80290aea6b50896"
  },
  {
    "url": "api/tags/trips.json",
    "revision": "95b4546e391a5097798fe2726c8f0f04"
  },
  {
    "url": "api/tags/ubuntu.json",
    "revision": "17d1f192903a252d12bdba0a1d2e698a"
  },
  {
    "url": "api/tags/vps.json",
    "revision": "5461126da91ab898baa5f4095d7254e6"
  },
  {
    "url": "api/tags/vue.json",
    "revision": "a3c885e5891c2e2d4c7d2367f694b462"
  },
  {
    "url": "api/tags/webpack.json",
    "revision": "0511582173307212aeb6436492e7e926"
  },
  {
    "url": "css/about.f196d9fa.css",
    "revision": "59d671d1c0bd29f1d16e9428d7b2bd74"
  },
  {
    "url": "css/app.4df1cf9a.css",
    "revision": "f3a365ba235ce37a05007150d39b7a17"
  },
  {
    "url": "css/chunk-vendors.9bb7e852.css",
    "revision": "219ab343d21fec76c0526b933c340c38"
  },
  {
    "url": "css/detail.550d548d.css",
    "revision": "ecfcf9cd4415cfc2736aa1003a998b34"
  },
  {
    "url": "js/about.422601b0.js",
    "revision": "fb1d8f3c50afc534155e8a4dfeba6201"
  },
  {
    "url": "js/app.7132209f.js",
    "revision": "c94ee9e85f53935ca565d2157cd2b0e4"
  },
  {
    "url": "js/chunk-vendors.bfcb72a3.js",
    "revision": "2253d69921e336c6a68a07008dfe30d9"
  },
  {
    "url": "js/detail.17fcad8e.js",
    "revision": "89ab0f72852c675d041b60e77cc343d6"
  },
  {
    "url": "manifest.json",
    "revision": "e6efd2eaa0b5f132d53584845fc5a6e7"
  },
  {
    "url": "precache-manifest.eda2c9271fdd81830c5734df810d1837.js",
    "revision": "eda2c9271fdd81830c5734df810d1837"
  },
  {
    "url": "img/icons/android-chrome-192x192.png",
    "revision": "b3409523f31434ac67699e07f3b27634"
  },
  {
    "url": "img/icons/android-chrome-512x512.png",
    "revision": "6f1e733b04d367ca7c9321846b422a2e"
  },
  {
    "url": "img/icons/apple-touch-icon-120x120.png",
    "revision": "42de0ffe5cc5624b9950b59f9f2a0e2c"
  },
  {
    "url": "img/icons/apple-touch-icon-152x152.png",
    "revision": "3e79e573b0522e513c93aee4b02bb8e0"
  },
  {
    "url": "img/icons/apple-touch-icon-180x180.png",
    "revision": "31588024424fde4698f9de27373c93c7"
  },
  {
    "url": "img/icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "img/icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "img/icons/apple-touch-icon.png",
    "revision": "31588024424fde4698f9de27373c93c7"
  },
  {
    "url": "img/icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "img/icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "img/icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "img/icons/mstile-150x150.png",
    "revision": "e2dfbc7649896961834803ffe3c8f03e"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/cover.png",
    "revision": "23a10368b971b102ccb1fb19d467e3ee"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/cover.png",
    "revision": "aad2756dd6295f2052f1af5b93d6cd99"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/method-executing-time.png",
    "revision": "d7cfc2d16e1f230c7a11f1b7d12c611f"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/add-app-launch-icon.png",
    "revision": "0d73623f57e99b9f1cffcadc27556d00"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/add-oracle-cli-global-env-var.png",
    "revision": "7a1b15a1803409655be303e96df325d2"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/check-run-configuration.png",
    "revision": "9598a9b8abab387cb5b19d5e9c078918"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/config-jdk-path.png",
    "revision": "aae1ab41104608f5dec77041b654ce6a"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/cover.png",
    "revision": "aca9f7c525429c2c3bf360789a929756"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/update-nodejs.png",
    "revision": "837f1096e4eb156c06a5dea37da84b70"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/cover.png",
    "revision": "879c12cb79b6d941a94aa272b29cab8e"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/cover.png",
    "revision": "1be7561aff97444fbd4220a05a5c5b1a"
  },
  {
    "url": "posts/2016/01/01/review-2015/cover.png",
    "revision": "021023aaedcb47c6e49b1be19b45e899"
  },
  {
    "url": "posts/2016/01/01/review-2015/graduaction-more.png",
    "revision": "ee82ccb5ecd0546c69ddbe11a3546fb0"
  },
  {
    "url": "posts/2016/01/01/review-2015/graduaction.png",
    "revision": "7322ee820170cfb5df3ddcf1fa9b1815"
  },
  {
    "url": "posts/2016/01/01/review-2015/rmbp.png",
    "revision": "200146fa90e2a42f25b5725ca206697a"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-1.png",
    "revision": "1fa8b625351e19e624f8cbb4bba23e20"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-2.png",
    "revision": "3b953860c3a540942ff0f960838d52cd"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-3.png",
    "revision": "966115420a65a59b3eb41ecbc2c2a96b"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-4.png",
    "revision": "405d34d5bad689ede3378b9b833d2616"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-5.png",
    "revision": "7f4da9acd4b38e32266dbfe87d68bdc0"
  },
  {
    "url": "posts/2016/01/01/review-2015/team-3-ita.png",
    "revision": "a6108d00534956e663f1daebdb844b4e"
  },
  {
    "url": "posts/2016/01/01/review-2015/unboxing-macbook.png",
    "revision": "4b3d5ad5ef80f21be2859cb951a35ec0"
  },
  {
    "url": "posts/2016/01/01/review-2015/wechat-open-account.png",
    "revision": "da40733e1f31bdfb9a4aa18fa7c8c925"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/cover.png",
    "revision": "783f15d83c19ec36e505ce3a389e182e"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/cover.png",
    "revision": "9374c86fdc36600dec0fe7543ff665cf"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/update-centos-hosts.png",
    "revision": "fd6188ed361aef5813dca35488084c6d"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/build-flow.png",
    "revision": "c072df370c0c4a0f72a6c350a9f50479"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/cover.png",
    "revision": "a4ff8b1919be7640266714fb422504ca"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/cover.png",
    "revision": "035c930fba05fd89742c64bf91afaedc"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/data-node-information.png",
    "revision": "33f284225da8026d0d696aa3a4d9278a"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/nodes-of-the-cluster.png",
    "revision": "07208fd01699933900d395d4afc111a5"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/cover.png",
    "revision": "4898566bd2d5ea72b027839cdfccc181"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/cover.png",
    "revision": "c5141e261453d7516993dafffdf139d0"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/notification.png",
    "revision": "8eff6634c734f3450b5134857f2275a3"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/performance.png",
    "revision": "4a912261a558215afdb6ecf1e630e1b2"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/bed.png",
    "revision": "befcd2c709add8a6a0626f4809f60ad3"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/bedroom.png",
    "revision": "22c55f1d073b925445379d3f33389fd3"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/clothes.png",
    "revision": "7f0ade42dbf2312e3d592caeb855f2fc"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/cover.png",
    "revision": "180e4c2ca6f36705e22fb306b1275bbf"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/depracted-desktop.png",
    "revision": "d4c2770e3d49ead779ccfdcb5514b092"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/desktop-installation.png",
    "revision": "117fdd8fd3a09a08d00f4ff3cade9a2f"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/desktop.png",
    "revision": "3eff4c035233042aa9b5b2dfda0c2885"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/kitchen.png",
    "revision": "07398aaf20fb573605e478f2357d4df9"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/meeting-room.png",
    "revision": "fc9de3dcb2c3a9b0fb5341a2054feea5"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/passing-route-updated.png",
    "revision": "18c0ceb8444030f6d58a66be42fedd77"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/passing-route.png",
    "revision": "a9a40fb9e2d77308e772400567bc0e6e"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/room-architecture.png",
    "revision": "447cf81af9ea8ae80dffd76ee9339a8e"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/see-sea.png",
    "revision": "175aa60862b37f6b2a43387606fcff4d"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/sunroom.png",
    "revision": "4a569a7cca8163afa4069164a015669c"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/wakatime-total.png",
    "revision": "6af03d51d89ba39ac12587db0f9ffa15"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/wakatime.png",
    "revision": "6cef4e54bf01658174262865c54af2da"
  },
  {
    "url": "posts/2017/01/01/review-2016/cover.png",
    "revision": "adb7834d3179caa87d04c4b8b85bc396"
  },
  {
    "url": "posts/2017/01/01/review-2016/hardware-info.png",
    "revision": "50bf9a7b3b2fa336fcd6d3a6fb0e2b81"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/add-shortcut.png",
    "revision": "9a396e12408319cd4d41e8a9f09a7607"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/cover.png",
    "revision": "0a8a11eac19cdfa0ad55faec8d310fdc"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/desktop-version-shortcut.png",
    "revision": "2c0c8b2226814073274c600ca258986a"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/launching.png",
    "revision": "56ff5fe8bf7785f2a6225bd22ec804e5"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/shortcut.png",
    "revision": "1a578c047579f68481fd81cad8996dcc"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/cover.png",
    "revision": "77c6d144a2616afc72bd7dedf99948f0"
  },
  {
    "url": "posts/2018/01/01/review-2017/cover.png",
    "revision": "a3e2cd2c2e92310d50110dacee8a2594"
  },
  {
    "url": "posts/2018/01/01/review-2017/macbook-pro.png",
    "revision": "efc1d41196ed5ebb1d13f414a03ccbce"
  },
  {
    "url": "posts/2018/01/01/review-2017/mdr-1000x.png",
    "revision": "2d11e9a02d35d6a5286f010e8be84c47"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/benchmark-blog-website.png",
    "revision": "d7189c4938da3b51417922cfa3336dd0"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/blog-resource-transfer-time.png",
    "revision": "e98ce9d297e2655e863e35bfaafed076"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/cover.png",
    "revision": "0424fad6b98ba78fea4ed1d019ef0cec"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/cover.png",
    "revision": "995e4df73ec2167bc4f70612cf6171f3"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/karma-jawr-generated-index.png",
    "revision": "81503846d1e977b7982046128c585628"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/cover.png",
    "revision": "7c4078cdd83cf2537eed701aadbb51d1"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/create-release.png",
    "revision": "5a06d53bea0c233f153d5911bdcdb8cd"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/github-actions.png",
    "revision": "4f8110e2a64732dfacf50947a5d9341b"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/github-official-actions-repo.png",
    "revision": "5512e6c9cc5b67271098f3001f652cd8"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/trigger-release-workflow.png",
    "revision": "593268a4a4eca41d4a8423f42a14887e"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-ci-overview.png",
    "revision": "b28c14bb5fd2a7d2666b4f5eb18baf00"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-editor-example.png",
    "revision": "1f5c1ddc927198b8336c404383cd849a"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-example.png",
    "revision": "3be6294658b3518c2083d3647928218d"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-syntax-highlight.png",
    "revision": "b7406511d6d0552c7566d6553869aaab"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/bird-nest-show.png",
    "revision": "17b5ff8a373eedb3a1c8cb8b83fad90e"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/bird-nest.png",
    "revision": "a2d831a7b27e0d9b28c3a3f4372f02ac"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/great-wall-01.png",
    "revision": "376312f231c680cccd2b86221f546210"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/great-wall-02.png",
    "revision": "0fac4ba2492bd307cd25944ad3b94318"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/great-wall-03.png",
    "revision": "5dbc465d9559a575c2aff97ab99004b0"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/msra.png",
    "revision": "b32fcbfd8a5f089bc46fbfb53f288a20"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-01.png",
    "revision": "bc29c13e4ffeadcd1d072ca29b26028e"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-02.png",
    "revision": "39d300c5c7f4c2d313c5fa191e32810e"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-03.png",
    "revision": "dd77b7a1a5d5681e8d685f8f6de674d5"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-04.png",
    "revision": "a4f1931576693a0fae84fbce35eba755"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-05.png",
    "revision": "2363c32aa1bcfda5ee13e2f802ca5f0c"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/pku-untitled-lake.png",
    "revision": "30566489a39176e2f43110cb3087e764"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/water-m3.png",
    "revision": "d6c628402e89f7bb855473b390f74f35"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/build-log-highlight-support.png",
    "revision": "ae76ca063503325cde01eaac910109a4"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/migrating-github-actions.png",
    "revision": "a20ad7b6c3b8cfefe9e313a98d9f45d4"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/select-sample-workflow-for-npm.png",
    "revision": "1b74ec39a35a141244c4f6c97f38bae6"
  },
  {
    "url": "fonts/materialdesignicons-webfont.043774d1.woff",
    "revision": "043774d1de6da96b11c8ade1a61c60cb"
  },
  {
    "url": "fonts/materialdesignicons-webfont.27cb2cf1.woff2",
    "revision": "27cb2cf143cf204f7cfc210089fd10e8"
  },
  {
    "url": "fonts/materialdesignicons-webfont.9bfeb985.ttf",
    "revision": "9bfeb985a91e5545d78b906676d8e6fb"
  },
  {
    "url": "fonts/materialdesignicons-webfont.e971abae.eot",
    "revision": "e971abae304374a81d9f7cea55039de8"
  },
  {
    "url": "index.html",
    "revision": "71477155e88a200ccff9e3bed7aa3abd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
