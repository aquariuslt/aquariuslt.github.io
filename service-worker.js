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
    "url": "css/app.04d20f47.css",
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
    "url": "js/app.e0028c10.js",
    "revision": "d506c4a449319eef0b21cc72d06cd141"
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
    "url": "precache-manifest.cd51d2c25a9240c3464332bc0cc4bd93.js",
    "revision": "cd51d2c25a9240c3464332bc0cc4bd93"
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
    "revision": "bf96451082f84eefae26e7ee2ee84e48"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/cover.png",
    "revision": "1ad05d1227b446e6fdc3fb8ebd863124"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/method-executing-time.png",
    "revision": "e5a7a31204dc6e1a398819bd3bd2e59a"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/add-app-launch-icon.png",
    "revision": "23238d2e7346c56b609fc2d8d4fa89c7"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/add-oracle-cli-global-env-var.png",
    "revision": "2904e14888a44eead4a2a1834a9e4e0d"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/check-run-configuration.png",
    "revision": "1d63ae98241e35e54fe36fa18676da5e"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/config-jdk-path.png",
    "revision": "13db4713983d944a24edf08893fbc6d4"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/cover.png",
    "revision": "7cbf2bf363a998b21c4cf36a05a19505"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/update-nodejs.png",
    "revision": "31062ddeb12438bf11668119673946c5"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/cover.png",
    "revision": "d19e7bdb9aea105381eafdef3c1c2b5d"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/cover.png",
    "revision": "b3649900dad61b35224f6d1544881a94"
  },
  {
    "url": "posts/2016/01/01/review-2015/cover.png",
    "revision": "bbdf9fbbe2d51ca8dba0c0fb24af3fab"
  },
  {
    "url": "posts/2016/01/01/review-2015/graduaction-more.png",
    "revision": "728960bf52745d3b86f6b681e7f7b9e4"
  },
  {
    "url": "posts/2016/01/01/review-2015/graduaction.png",
    "revision": "4901e49d66a89fa8a097fa4ba5165274"
  },
  {
    "url": "posts/2016/01/01/review-2015/rmbp.png",
    "revision": "129fdfa276f32c12ae05f10e1458c03e"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-1.png",
    "revision": "77f78b3390432f02fac4ad87272bb4a1"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-2.png",
    "revision": "0d5bd29de4a8459550301dcd43e96def"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-3.png",
    "revision": "49043056816b212043afb6d13e13b750"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-4.png",
    "revision": "eeb78a4e9a4cada843280a263dd9bde0"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-5.png",
    "revision": "8f85e43cf1714fcded2a0ae9984b4817"
  },
  {
    "url": "posts/2016/01/01/review-2015/team-3-ita.png",
    "revision": "b81266fa35bec7a97b9692d27c876130"
  },
  {
    "url": "posts/2016/01/01/review-2015/unboxing-macbook.png",
    "revision": "1ad90af955c0ca80d82f45b6c80d0562"
  },
  {
    "url": "posts/2016/01/01/review-2015/wechat-open-account.png",
    "revision": "fe16414175af2109c6fc46711b927974"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/cover.png",
    "revision": "521c74f19c2f1e26bd34dd9278004ed2"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/cover.png",
    "revision": "a10a3bd4c2f73b12e6045c6c3b5ee63e"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/update-centos-hosts.png",
    "revision": "b23c28809605d5c2cf34410437fd7473"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/build-flow.png",
    "revision": "7cb44f64853eccb168d3c8f2b1d242b8"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/cover.png",
    "revision": "adecd92b5e0f665ed8231933ea7060c6"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/cover.png",
    "revision": "b79c26628da4713bda986420d55040fd"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/data-node-information.png",
    "revision": "b2809f573fd029429c8f3bba1ad2c9c6"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/nodes-of-the-cluster.png",
    "revision": "2fbd1bf471e0f7a1310fffeca3cbc5b4"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/cover.png",
    "revision": "6f979cfb503916ca33e667d8eb1d5c9d"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/cover.png",
    "revision": "eaf190f29c780d274bd438e4dd66ef61"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/notification.png",
    "revision": "b34f317f5464f578cc6067d317afe22a"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/performance.png",
    "revision": "943a204a96f8e82ed4829c4b4b36bc8e"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/bed.png",
    "revision": "ecafc71143263a54ce6fe060916cfab9"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/bedroom.png",
    "revision": "50994181cf4126d117c09a7b13f42391"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/clothes.png",
    "revision": "82dfd6b0817462d05f66a63041bbe37a"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/cover.png",
    "revision": "828087b8b2858755d1302fb132b68a0c"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/depracted-desktop.png",
    "revision": "93f840a7599c54cc84d37d191baefe98"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/desktop-installation.png",
    "revision": "98b1f3a928cc17e2ae87047cd0aa476b"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/desktop.png",
    "revision": "75c4b1a2583a9612b6d2a3f060e6741c"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/kitchen.png",
    "revision": "d568cc8ac8245e00cb3a44921690e4e6"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/meeting-room.png",
    "revision": "41b1b21ec99509c4483066da718b7983"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/passing-route-updated.png",
    "revision": "8a9ec5e123a9b089947bf66d03078e9d"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/passing-route.png",
    "revision": "9830785fd8a2a38a69d7a8128a70c930"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/room-architecture.png",
    "revision": "4cdf75bf21b165951ef08beb49322ab4"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/see-sea.png",
    "revision": "6d70f828f3632f2103915a061cb8937f"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/sunroom.png",
    "revision": "d736c31ff589081df5fc03098a55368b"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/wakatime-total.png",
    "revision": "07eb5f69cb253d00b0bcbce28976fd58"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/wakatime.png",
    "revision": "8039bffe0a0256979291b0f3bfa67aef"
  },
  {
    "url": "posts/2017/01/01/review-2016/cover.png",
    "revision": "28d40a65984188a82a0bc43558a7038e"
  },
  {
    "url": "posts/2017/01/01/review-2016/hardware-info.png",
    "revision": "50f5a1ce697b734618185d9a482851fc"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/add-shortcut.png",
    "revision": "6bd2faa31fea5101681b237692b137c0"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/cover.png",
    "revision": "c1f8a0ded6ef16859b54d4b46d324388"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/desktop-version-shortcut.png",
    "revision": "d2eb0401b07ce25850e9afcde28e0d06"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/launching.png",
    "revision": "e51633959aabffd0d61f1323c17e26c4"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/shortcut.png",
    "revision": "dccfa6bd43c3735ec1d1bf65e182942e"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/cover.png",
    "revision": "afe765a423b8ebac24fcaa8bbe959385"
  },
  {
    "url": "posts/2018/01/01/review-2017/cover.png",
    "revision": "704e5ccac667e591d333756b4037191a"
  },
  {
    "url": "posts/2018/01/01/review-2017/macbook-pro.png",
    "revision": "bb4509d155d9d5765f0128a8be8eeb6f"
  },
  {
    "url": "posts/2018/01/01/review-2017/mdr-1000x.png",
    "revision": "5bea63e317e87b5400d5620dc58af324"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/benchmark-blog-website.png",
    "revision": "06465a91d135ae1cc8b7e684d0e75cfc"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/blog-resource-transfer-time.png",
    "revision": "e314a8a59b49cd1b5ae66e4064bb9344"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/cover.png",
    "revision": "43dd75bc6d7d71bf40582e567ca34d42"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/cover.png",
    "revision": "6d331f21efd7ad6dfa7a584ed3c4d3f2"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/karma-jawr-generated-index.png",
    "revision": "15c325c2b509b5771375fd17d7cbbce9"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/cover.png",
    "revision": "1c7aaf78302d0af6e0502d49f8ce82fe"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/create-release.png",
    "revision": "a31aa7e5e3eed42d25422c828b0f76b4"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/github-actions.png",
    "revision": "57c065dcc456873fb4b679e42eba0495"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/github-official-actions-repo.png",
    "revision": "9c6586057b46232199b096558fe54f06"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/trigger-release-workflow.png",
    "revision": "5824c20beadbe9cdd32e5018232dce33"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-ci-overview.png",
    "revision": "13fdd8e7c2c2c70882bbe8421bae0525"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-editor-example.png",
    "revision": "752eba3537312d54d6e4d8d3477e2df5"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-example.png",
    "revision": "88b11a11cb40a1fe0b886ebb585abd55"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-syntax-highlight.png",
    "revision": "2e373fece1c8043329fa614febf8b5e9"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/bird-nest-show.png",
    "revision": "f9618cb46aa1723b3b80f3b174e79f56"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/bird-nest.png",
    "revision": "b7133799f9dd8a63a902b87c3995f7ce"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/great-wall-01.png",
    "revision": "adb0ae824da742473c0f2033e6f00ecb"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/great-wall-02.png",
    "revision": "4b7a9084843e76909c32d57aa243a502"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/great-wall-03.png",
    "revision": "015b81210929f3a1b197877115c7bf7a"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/msra.png",
    "revision": "afc4329118048573fb01812a2f5d61b9"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-01.png",
    "revision": "6298ec98bcf0916a518e9d9fa1472963"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-02.png",
    "revision": "8cd6615c70a506d2af0fb6be36c39d5d"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-03.png",
    "revision": "cc8ee643d3e8fac1967950f8a6a87899"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-04.png",
    "revision": "8185a188a530fbbdc4d825d08bc8b862"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-05.png",
    "revision": "24b0c92caed88f3a7d38fed2f3d1ad82"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/pku-untitled-lake.png",
    "revision": "2e02e242aeff1319b2e9e208f93f2fe9"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/water-m3.png",
    "revision": "2d1b87575cdb798406a8c00be94fac7a"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/build-log-highlight-support.png",
    "revision": "319248b963ccff9351786ba6752cde06"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/migrating-github-actions.png",
    "revision": "7e1078afc3bfc02b767f24d6bf7fa343"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/select-sample-workflow-for-npm.png",
    "revision": "ad0df58b3619051a7ea4ee5713a77a6a"
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
    "revision": "c6257f84f6e3bc2ee38e3bd0078fa3d6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
