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
    "url": "js/about.e47c9de7.js",
    "revision": "237b6fa5e768ee504564da44366ebf91"
  },
  {
    "url": "js/app.1b239682.js",
    "revision": "45008febc101f221974d59337083cf0e"
  },
  {
    "url": "js/chunk-vendors.948d257a.js",
    "revision": "39a00e30d6621676b7fdbf779624a769"
  },
  {
    "url": "js/detail.5bc4fecd.js",
    "revision": "b2a494894348070732fcf89f8eead28b"
  },
  {
    "url": "manifest.json",
    "revision": "e6efd2eaa0b5f132d53584845fc5a6e7"
  },
  {
    "url": "precache-manifest.f03b99e34c658cb92bc976feeed1b89f.js",
    "revision": "f03b99e34c658cb92bc976feeed1b89f"
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
    "revision": "0ad802aac5dbc6c911e7dacd607eab4c"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/cover.png",
    "revision": "f3dafc2c3cddeb004855418db7ed8048"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/method-executing-time.png",
    "revision": "99cf443faf429831e407b83a58fe1c02"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/add-app-launch-icon.png",
    "revision": "d7f5b6899d0bb20d45d69a131d9bb360"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/add-oracle-cli-global-env-var.png",
    "revision": "2e1ec0ba7153fddfe451e4456e15d3b7"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/check-run-configuration.png",
    "revision": "7b46a5aa4ecd176b742dfa4ac70202da"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/config-jdk-path.png",
    "revision": "f086f1a9b39adc2b176f29ca679a690b"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/cover.png",
    "revision": "4f21f6106aaca6f7b3735a56f99562df"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/update-nodejs.png",
    "revision": "8f722f2bab66d69514e58cafa498fd32"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/cover.png",
    "revision": "79db171e54b7b0d777b2a999f2ab348c"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/cover.png",
    "revision": "91c5c48ad51d319407182fe8e0d96496"
  },
  {
    "url": "posts/2016/01/01/review-2015/cover.png",
    "revision": "c9023678c8cb7510632ec8dd812cdf7d"
  },
  {
    "url": "posts/2016/01/01/review-2015/graduaction-more.png",
    "revision": "f9de5f387772a2c940bf4af8133a4566"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-1.png",
    "revision": "99de614380784a7bea8c94a001096659"
  },
  {
    "url": "posts/2016/01/01/review-2015/wechat-open-account.png",
    "revision": "a274acfb49b2046ee726eb324a131d09"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/cover.png",
    "revision": "f79763cb7c626a768a3a20f0bccaf426"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/cover.png",
    "revision": "36754efa92f1712ce37d9c06341abc09"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/update-centos-hosts.png",
    "revision": "e993adc371c4bbb25f6cab4773e5e14f"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/build-flow.png",
    "revision": "55bee9440b753a050ca06429699be7eb"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/cover.png",
    "revision": "64a6a394daf36687333d854668936f8b"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/cover.png",
    "revision": "e8d9e49319b0fd80ba4772fc7254baa4"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/data-node-information.png",
    "revision": "c40171a7398937431aaec72620ce6fda"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/nodes-of-the-cluster.png",
    "revision": "3ce7a2820ecdad8a5553c5f0fbcd4525"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/cover.png",
    "revision": "3eeabb26eede8ab444669591299f2841"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/cover.png",
    "revision": "9a10e23f4226ef23e7d9fa440dd098c4"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/notification.png",
    "revision": "1daf1d5590ad2fa329ee9dd1e0421bb7"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/performance.png",
    "revision": "15ad5861898590c583cb9d11f885074d"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/cover.png",
    "revision": "efc394cbdda3cf5edbca188d32a58eaf"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/room-architecture.png",
    "revision": "e6b8adf40a42b6fd2a4dafcf624f6fcf"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/wakatime-total.png",
    "revision": "9e406965c671bede9fe7b494f644b978"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/wakatime.png",
    "revision": "a0ae249731e266ea91306e8b53413286"
  },
  {
    "url": "posts/2017/01/01/review-2016/cover.png",
    "revision": "a309ddb3de9bf7b2d9015f93edb45749"
  },
  {
    "url": "posts/2017/01/01/review-2016/hardware-info.png",
    "revision": "e6062669c4f3a7784983936e34c7f5e9"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/add-shortcut.png",
    "revision": "398e98f5e8875a454583c3571b87fbe0"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/cover.png",
    "revision": "3f79d7c0c465c7ee33e5556bfed955d0"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/desktop-version-shortcut.png",
    "revision": "7e6f60e5e5c74677f5df9b73404dc4ff"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/launching.png",
    "revision": "48deda5cd45851823eef3fc19a7acd15"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/shortcut.png",
    "revision": "2bf48596f94397d1dc115a8e4cf6f241"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/cover.png",
    "revision": "23d480ef607c2336c94c2ef2daa9d8a9"
  },
  {
    "url": "posts/2018/01/01/review-2017/cover.png",
    "revision": "b32990fe8cc7f3ccc938aba259769ad3"
  },
  {
    "url": "posts/2018/01/01/review-2017/mdr-1000x.png",
    "revision": "8fae7b3fd1e6b8c0523ba173027c7615"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/benchmark-blog-website.png",
    "revision": "c26db9a545d3b4c47506b922b7b02f41"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/blog-resource-transfer-time.png",
    "revision": "be1af35bc5f615e3409341bc82f62dac"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/cover.png",
    "revision": "eaaf4ffb4e25f6de13ad0b5cbfae6a56"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/cover.png",
    "revision": "916389240ebf911ba44fc26eadc53994"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/karma-jawr-generated-index.png",
    "revision": "0c3e981a9f1b1634ecd7006b4c81de54"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/cover.png",
    "revision": "137d10ba625a75e43f326c7b3b999fb4"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/create-release.png",
    "revision": "37da7ea4b7fe57b71ebbde53fb3b8857"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/github-actions.png",
    "revision": "ff8131d6e5212fdddaddb1f20be4e03e"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/github-official-actions-repo.png",
    "revision": "f5797772cb3a0059803487001bfc401e"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/trigger-release-workflow.png",
    "revision": "b48419465d27a10d403a172db47aa95a"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-ci-overview.png",
    "revision": "5f8a82b21e6324442b3dff187f7504ce"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-editor-example.png",
    "revision": "1e477978ecf89395549129b10105bae4"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-example.png",
    "revision": "3950147e8d2e55c44e2a49dd8bfe89d9"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-syntax-highlight.png",
    "revision": "c76233b84b68da3d106f8bc7752a2710"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-01.png",
    "revision": "9feaae09dcdc1d2e8035b0d2b6d96721"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/water-m3.png",
    "revision": "5f11da50b140591bc33541ded7d6b7f0"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/build-log-highlight-support.png",
    "revision": "41234f97f9fc260e311f3b93f63d878a"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/migrating-github-actions.png",
    "revision": "b46179103b1b56e7517e21e5587037d7"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/select-sample-workflow-for-npm.png",
    "revision": "84c2e29ecc8cf9d3972e843a70392271"
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
    "revision": "0008cc65ee36c6b69b4bb752767308bc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
