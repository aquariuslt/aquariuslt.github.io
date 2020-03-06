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
    "url": "api/categories.json",
    "revision": "a0a6906bc32b21a8171c960777e84798"
  },
  {
    "url": "api/categories/blog.json",
    "revision": "a8f451381f84d1247edd450d9c653765"
  },
  {
    "url": "api/categories/debug.json",
    "revision": "90d4e5ae7370a509aee7b9ab4bb13f97"
  },
  {
    "url": "api/categories/note.json",
    "revision": "6452617aa2dfeec0005c6081d88de0d2"
  },
  {
    "url": "api/categories/others.json",
    "revision": "2dcf3bcdfb4fe8cb80001c5c8f2037f2"
  },
  {
    "url": "api/home.json",
    "revision": "ba76538d4eeb74a380062ec68ccd0d55"
  },
  {
    "url": "api/navigation.json",
    "revision": "777ced3dd3855b27d95d505bf20e3351"
  },
  {
    "url": "api/pages/about.json",
    "revision": "77d5d943389b2d7c1454c0151621e59f"
  },
  {
    "url": "api/pages/projects.json",
    "revision": "924e2a5326d5baa455890d3cbe8c9eb6"
  },
  {
    "url": "api/posts.json",
    "revision": "2d44fcbb02e3e2bbf1f401558a2184fd"
  },
  {
    "url": "api/posts/2015/10/25/apache-shiro-spring-integration.json",
    "revision": "e507b734a313c170a85f589623c194bb"
  },
  {
    "url": "api/posts/2015/11/10/beanutils-vs-reflection.json",
    "revision": "bde1b6cf71ec573dfc16f9319bab2fc6"
  },
  {
    "url": "api/posts/2015/12/13/ubuntu-mean-development-environment-setup.json",
    "revision": "65397049bb8b077d9cc1df887cef90f1"
  },
  {
    "url": "api/posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file.json",
    "revision": "2413efe9a9cd56e96416c9170cdbaf1e"
  },
  {
    "url": "api/posts/2015/12/27/site-upgrade-plan.json",
    "revision": "69c4f5f9e3659f4243bbcf2b598659d1"
  },
  {
    "url": "api/posts/2016/01/01/review-2015.json",
    "revision": "dccec76b1f8165d7fd5d6ba11c3b35ab"
  },
  {
    "url": "api/posts/2016/01/11/nodejs-oracledb-install-on-rhel-6.json",
    "revision": "0d147e3fdaa39ecb01e9396c331359ec"
  },
  {
    "url": "api/posts/2016/01/12/nodejs-oracledb-ora-21561-solution.json",
    "revision": "68746ad95b314fe84d98dc3dae69914f"
  },
  {
    "url": "api/posts/2016/03/06/site-code-structure.json",
    "revision": "d8897391fcaf5f2d923e0116e12a2020"
  },
  {
    "url": "api/posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide.json",
    "revision": "a3cd43df9438fa460d4e28d945cb2f2e"
  },
  {
    "url": "api/posts/2016/04/10/google-codejam-2016-qualification-round.json",
    "revision": "d13bb7a953513915b440e5ba1fe5334f"
  },
  {
    "url": "api/posts/2016/04/30/angular-ui-performance-tuning-experience.json",
    "revision": "15da1270cf749d7408e61e1000a86ee9"
  },
  {
    "url": "api/posts/2016/07/05/move-to-new-apartment.json",
    "revision": "7a63a48b4dd555fa0706892fd84eecaa"
  },
  {
    "url": "api/posts/2017/01/01/review-2016.json",
    "revision": "c9df5032106562f0061a7fac80544ba1"
  },
  {
    "url": "api/posts/2017/03/12/new-version-blog-migration.json",
    "revision": "34faabfd74fcdba9dbb32cef679fea41"
  },
  {
    "url": "api/posts/2017/05/05/vue-version-for-blog-app.json",
    "revision": "fea912e07cb0efe81416e28aa744e5c7"
  },
  {
    "url": "api/posts/2018/01/01/review-2017.json",
    "revision": "3a19be3cc41a02221b327c0bc193a26d"
  },
  {
    "url": "api/posts/2018/03/03/latest-update-on-blog-app.json",
    "revision": "ef47cfd3ba4444472f629860963c8529"
  },
  {
    "url": "api/posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution.json",
    "revision": "56a661828309f0923234f0878bee6d15"
  },
  {
    "url": "api/posts/2018/04/01/karma-jawr-development-note.json",
    "revision": "9f4e4fb519232256e6346ddeffac5fe4"
  },
  {
    "url": "api/posts/2019/07/07/github-actions-overview-and-practice.json",
    "revision": "0078ed8648a5e8eb2ba3068c9c2f9225"
  },
  {
    "url": "api/posts/2019/07/23/travel-in-beijing.json",
    "revision": "5c080c1f8cce680ca8ae3e2d164b8f6c"
  },
  {
    "url": "api/posts/2019/08/18/github-actions-new-yaml-syntax.json",
    "revision": "439199a53a84e210ade936bbcda3bc68"
  },
  {
    "url": "api/posts/2019/11/14/monorepo-practice-in-typescript-projects.json",
    "revision": "aa58a8b2faff626dbca24a126e2cf155"
  },
  {
    "url": "api/posts/2020/01/28/review-2019.json",
    "revision": "898d81f8a07e325429d39f32b3e81550"
  },
  {
    "url": "api/posts/2020/02/12/using-patch-package-patching-node-modules.json",
    "revision": "9e0c43bc8406b2657ab75b9cb7653906"
  },
  {
    "url": "api/posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate.json",
    "revision": "b6f66e7b305d4db496fa5670606490e3"
  },
  {
    "url": "api/profile.json",
    "revision": "a5d932d01e2bea6bc56e379b0937c9b7"
  },
  {
    "url": "api/tags.json",
    "revision": "0816f3e41440a5f013af4d62bd4ea955"
  },
  {
    "url": "api/tags/actions.json",
    "revision": "8bb019f210d74af8e95e3e9ec42ff062"
  },
  {
    "url": "api/tags/angular.json",
    "revision": "f5e568b09093cbd010db9b234ef788a2"
  },
  {
    "url": "api/tags/angularjs.json",
    "revision": "adba33cbf2cdcbe015aba638299fd789"
  },
  {
    "url": "api/tags/apache.json",
    "revision": "7c65229896ba5a2aba2c288f50c82413"
  },
  {
    "url": "api/tags/blog.json",
    "revision": "0136af3c5959fc6eb3deb4c888744be5"
  },
  {
    "url": "api/tags/ci.json",
    "revision": "4ddad7fce7a4cdb9948b7911d8c3dcc2"
  },
  {
    "url": "api/tags/diary.json",
    "revision": "fc16f311fb1cfeded0374e63dee9d772"
  },
  {
    "url": "api/tags/docker.json",
    "revision": "87ff24c5a12c46ba333407460e6ce977"
  },
  {
    "url": "api/tags/extjs.json",
    "revision": "95e2b6d6d0c8eab54f3596118e2ae103"
  },
  {
    "url": "api/tags/github.json",
    "revision": "5a2c2772f5479a379ee05c0896297688"
  },
  {
    "url": "api/tags/google.json",
    "revision": "bd8ed6ca323444f08d8260a91468e7c8"
  },
  {
    "url": "api/tags/gulp.json",
    "revision": "a885d3366810be0567ddf16aa404553e"
  },
  {
    "url": "api/tags/hadoop.json",
    "revision": "fe50666bc6d99ab5cb023ff35dbdbfaa"
  },
  {
    "url": "api/tags/intellij-idea.json",
    "revision": "d33dc9f87d5b4bd776b1681f0a6fb7a2"
  },
  {
    "url": "api/tags/java.json",
    "revision": "f635c177e791594f3ae4f8664c2deedd"
  },
  {
    "url": "api/tags/javascript.json",
    "revision": "3a08f05ec27ac654bbb1e46dd2b5c11c"
  },
  {
    "url": "api/tags/jawr.json",
    "revision": "a541e89742b2982c814534e5b4c612af"
  },
  {
    "url": "api/tags/jest.json",
    "revision": "3b1d954b6953bcb5760bdc6b5f8f330a"
  },
  {
    "url": "api/tags/jsf.json",
    "revision": "fe0609b1ce6b28441f5865189e011761"
  },
  {
    "url": "api/tags/karma.json",
    "revision": "38ba9bc2f7acc333a707010d1a8dff8b"
  },
  {
    "url": "api/tags/lerna.json",
    "revision": "31c088a7c5ff1c8465b7c92ff9730bc2"
  },
  {
    "url": "api/tags/linux.json",
    "revision": "a072197b09efb08a8465782c42998ad3"
  },
  {
    "url": "api/tags/monorepo.json",
    "revision": "10811541ec22beb41b4dc449f55b5bdb"
  },
  {
    "url": "api/tags/node.json",
    "revision": "40aa68a0a09660e0a5863f30ff0bbed6"
  },
  {
    "url": "api/tags/npm.json",
    "revision": "8655b33acfde7c5b6e72da5f6bc7d945"
  },
  {
    "url": "api/tags/oracle.json",
    "revision": "4a03278d3020b3670afa2ad82758d4e4"
  },
  {
    "url": "api/tags/pwa.json",
    "revision": "301e23857d3ad7eb6d13fdd97b404154"
  },
  {
    "url": "api/tags/renovate.json",
    "revision": "e007053447c3e511b33c057b1f56c97f"
  },
  {
    "url": "api/tags/security.json",
    "revision": "5ee14199a33db7abc2030ab7474fc223"
  },
  {
    "url": "api/tags/shiro.json",
    "revision": "bf71d64d79e4442b87e09c058a342771"
  },
  {
    "url": "api/tags/site.json",
    "revision": "ad0b611d87ccc15a70f630fdbe43ca78"
  },
  {
    "url": "api/tags/spring.json",
    "revision": "0e3cceb568fe47b61dcca923bb7d6f39"
  },
  {
    "url": "api/tags/springmvc.json",
    "revision": "45b65dc76ffe5cab1d1ccf2974eb8fa8"
  },
  {
    "url": "api/tags/travisci.json",
    "revision": "462f5045e3ce57014deef26d02440c69"
  },
  {
    "url": "api/tags/trips.json",
    "revision": "2723fee8af9bed8c50ee39d3f556f1b7"
  },
  {
    "url": "api/tags/typescript.json",
    "revision": "91e0be9c87e2c9920c990aa86607e321"
  },
  {
    "url": "api/tags/ubuntu.json",
    "revision": "cd220008e20f834b4c48ab72a9e3e765"
  },
  {
    "url": "api/tags/vps.json",
    "revision": "ef35193d9b0548cf7f4e8aa1021cb297"
  },
  {
    "url": "api/tags/vue.json",
    "revision": "d1ac5b4538235ae9aa5142b3ccce8d3b"
  },
  {
    "url": "api/tags/webpack.json",
    "revision": "8b57595437d547187a9c1c06c58a9521"
  },
  {
    "url": "static/css/detail.b145bdf8916d95eebe70.css",
    "revision": "4784b90b225073ce134e8667e56c6cfc"
  },
  {
    "url": "static/css/main.6be2918a893463abfdcd.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "static/css/vendors.7ea6cf4fdfece9a7f459.css",
    "revision": "2af97cf84b103023b4cb97daff882b9e"
  },
  {
    "url": "static/img/manifest.json",
    "revision": "9c64b9ed3bbc8cc31b9e55e167cd3bc7"
  },
  {
    "url": "static/img/yandex-browser-manifest.json",
    "revision": "2ed78b5eeb1ab4f2bfacdb8c3d6f48c6"
  },
  {
    "url": "static/js/detail.b145bdf8916d95eebe70.js",
    "revision": "d133a31cc92bb0b519329d24ff1d65d5"
  },
  {
    "url": "static/js/main.6be2918a893463abfdcd.js",
    "revision": "15a2a05fe7c2a5cc34ee198470684e54"
  },
  {
    "url": "static/js/vendors.7ea6cf4fdfece9a7f459.js",
    "revision": "eed0e7392118af8de06f552951bb7614"
  },
  {
    "url": "favicon.png",
    "revision": "85e4aec7f51704350e2e00081be991cf"
  },
  {
    "url": "pages/about/about.png",
    "revision": "634937cbfde5746fe0ea0dfe17c5af62"
  },
  {
    "url": "pages/about/about.webp",
    "revision": "414c4c6470c1f35156963c0427f97d4e"
  },
  {
    "url": "pages/projects/projects.png",
    "revision": "c8151243129cd518cba60b47c6571412"
  },
  {
    "url": "pages/projects/projects.webp",
    "revision": "3854088a748a9cf8ee07e75e00a7ab92"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/cover.png",
    "revision": "bf96451082f84eefae26e7ee2ee84e48"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/cover.webp",
    "revision": "f7899b4ddf1f5ae1d53df8f4b00d1089"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/cover.png",
    "revision": "1ad05d1227b446e6fdc3fb8ebd863124"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/cover.webp",
    "revision": "27d279d60cf8f2f3f3c5ef160228a7e2"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/method-executing-time.png",
    "revision": "e5a7a31204dc6e1a398819bd3bd2e59a"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/method-executing-time.webp",
    "revision": "de249effaf0897b3d42b2dcd003f7e90"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/add-app-launch-icon.png",
    "revision": "23238d2e7346c56b609fc2d8d4fa89c7"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/add-app-launch-icon.webp",
    "revision": "7ec3862f288fdaa3d8dcf67eb87358c3"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/add-oracle-cli-global-env-var.png",
    "revision": "2904e14888a44eead4a2a1834a9e4e0d"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/add-oracle-cli-global-env-var.webp",
    "revision": "973711f94005d774cb8b66934f64d021"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/check-run-configuration.png",
    "revision": "1d63ae98241e35e54fe36fa18676da5e"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/check-run-configuration.webp",
    "revision": "541e18fac27c3a6d3f92845da936634d"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/config-jdk-path.png",
    "revision": "13db4713983d944a24edf08893fbc6d4"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/config-jdk-path.webp",
    "revision": "c5ee1a17abc3b9f70127ad3605d91cb5"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/cover.png",
    "revision": "7cbf2bf363a998b21c4cf36a05a19505"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/cover.webp",
    "revision": "82b11d8da0d24e605f641b00fc17e1f4"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/update-nodejs.png",
    "revision": "31062ddeb12438bf11668119673946c5"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/update-nodejs.webp",
    "revision": "e99152e447936ba8ba4266c923d10206"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/cover.png",
    "revision": "d19e7bdb9aea105381eafdef3c1c2b5d"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/cover.webp",
    "revision": "42c0728306c074aa92934b455a33c6f8"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/cover.png",
    "revision": "b3649900dad61b35224f6d1544881a94"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/cover.webp",
    "revision": "bc8df919c42129d27e82cf802a76e5db"
  },
  {
    "url": "posts/2016/01/01/review-2015/cover.png",
    "revision": "bbdf9fbbe2d51ca8dba0c0fb24af3fab"
  },
  {
    "url": "posts/2016/01/01/review-2015/cover.webp",
    "revision": "a9baf6ab46fc8631bfa2fa1d7a2ac950"
  },
  {
    "url": "posts/2016/01/01/review-2015/graduaction-more.png",
    "revision": "728960bf52745d3b86f6b681e7f7b9e4"
  },
  {
    "url": "posts/2016/01/01/review-2015/graduaction-more.webp",
    "revision": "20a4ab3727e3fd86aec06d3608602bcf"
  },
  {
    "url": "posts/2016/01/01/review-2015/graduaction.png",
    "revision": "4901e49d66a89fa8a097fa4ba5165274"
  },
  {
    "url": "posts/2016/01/01/review-2015/graduaction.webp",
    "revision": "308f0ce3c55a48b8994b77e6aaec720d"
  },
  {
    "url": "posts/2016/01/01/review-2015/rmbp.png",
    "revision": "129fdfa276f32c12ae05f10e1458c03e"
  },
  {
    "url": "posts/2016/01/01/review-2015/rmbp.webp",
    "revision": "a058add589ab8b9135a4b382b82508e8"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-1.png",
    "revision": "77f78b3390432f02fac4ad87272bb4a1"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-1.webp",
    "revision": "4b56f7ab6fb3d673bbbfc06f14478c17"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-2.png",
    "revision": "0d5bd29de4a8459550301dcd43e96def"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-2.webp",
    "revision": "5bf3975e2cbaae85d6c745766fb97988"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-3.png",
    "revision": "49043056816b212043afb6d13e13b750"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-3.webp",
    "revision": "ce315bcc2cd784faa7f11fc21fa07c0b"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-4.png",
    "revision": "eeb78a4e9a4cada843280a263dd9bde0"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-4.webp",
    "revision": "3a0c89c40828478d826ac0e70b0ea584"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-5.png",
    "revision": "8f85e43cf1714fcded2a0ae9984b4817"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-5.webp",
    "revision": "d354413a6b4efce07c7d3559ef2fcbcd"
  },
  {
    "url": "posts/2016/01/01/review-2015/team-3-ita.png",
    "revision": "364dc76efe9757e9875a5f137d1a1711"
  },
  {
    "url": "posts/2016/01/01/review-2015/team-3-ita.webp",
    "revision": "64d4667e214e87e10f975ad638da909f"
  },
  {
    "url": "posts/2016/01/01/review-2015/unboxing-macbook.png",
    "revision": "1ad90af955c0ca80d82f45b6c80d0562"
  },
  {
    "url": "posts/2016/01/01/review-2015/unboxing-macbook.webp",
    "revision": "121806d45048a0f04cd13f145cd3d2a2"
  },
  {
    "url": "posts/2016/01/01/review-2015/wechat-open-account.png",
    "revision": "fe16414175af2109c6fc46711b927974"
  },
  {
    "url": "posts/2016/01/01/review-2015/wechat-open-account.webp",
    "revision": "978970425c26004ee8743bd1c9b0ce2b"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/cover.png",
    "revision": "521c74f19c2f1e26bd34dd9278004ed2"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/cover.webp",
    "revision": "c72cc5ad291f7ce4495f7c93c4b0cb93"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/cover.png",
    "revision": "a10a3bd4c2f73b12e6045c6c3b5ee63e"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/cover.webp",
    "revision": "37910666b2efdaf400b00d2061f4c41a"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/update-centos-hosts.png",
    "revision": "b23c28809605d5c2cf34410437fd7473"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/update-centos-hosts.webp",
    "revision": "f03889a93d4c73dab419d04d81565d31"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/build-flow.png",
    "revision": "7cb44f64853eccb168d3c8f2b1d242b8"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/build-flow.webp",
    "revision": "ffbfdff8b8c2d81585449e1eb8bcc15f"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/cover.png",
    "revision": "adecd92b5e0f665ed8231933ea7060c6"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/cover.webp",
    "revision": "bc6a909f7309631a6b03aecd82c17467"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/cover.png",
    "revision": "b79c26628da4713bda986420d55040fd"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/cover.webp",
    "revision": "05618758af7e7de5158210b13e1b6977"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/data-node-information.png",
    "revision": "b2809f573fd029429c8f3bba1ad2c9c6"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/data-node-information.webp",
    "revision": "591c0a0b385748771caa712abb9ff618"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/nodes-of-the-cluster.png",
    "revision": "2fbd1bf471e0f7a1310fffeca3cbc5b4"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/nodes-of-the-cluster.webp",
    "revision": "95426cb7d06416d7470401045fdb7e43"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/cover.png",
    "revision": "6f979cfb503916ca33e667d8eb1d5c9d"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/cover.webp",
    "revision": "4be1e4140b27f7f5a0898f0ce3f1d501"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/cover.png",
    "revision": "eaf190f29c780d274bd438e4dd66ef61"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/cover.webp",
    "revision": "82c34fe6dc24d269af222c5886cb5557"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/notification.png",
    "revision": "b34f317f5464f578cc6067d317afe22a"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/notification.webp",
    "revision": "70e3a03015686c5d3d9d517b2b1ed007"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/performance.png",
    "revision": "943a204a96f8e82ed4829c4b4b36bc8e"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/performance.webp",
    "revision": "4c957a7c5807674b1b25b15e007d7881"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/bed.png",
    "revision": "ecafc71143263a54ce6fe060916cfab9"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/bed.webp",
    "revision": "e7720cf9a75db38e575a7aebdda8cbb8"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/bedroom.png",
    "revision": "8c2b929a10844e5aa3f480fcd904acf2"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/bedroom.webp",
    "revision": "e5ee0679cb0e23122cc9c0246332629f"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/clothes.png",
    "revision": "82dfd6b0817462d05f66a63041bbe37a"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/clothes.webp",
    "revision": "88bc8f3b4253e34a3f231c9ad1d950fc"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/cover.png",
    "revision": "bb44bca680967ae3b8bef4bc2f25707f"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/cover.webp",
    "revision": "67063e4930321488a04e57dfba0bc4b9"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/depracted-desktop.png",
    "revision": "93f840a7599c54cc84d37d191baefe98"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/depracted-desktop.webp",
    "revision": "bda9b7c400a8ce2c2ce4e8f8b759659f"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/desktop-installation.png",
    "revision": "4b44c85c276fc06f72e1d5dafebe92fe"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/desktop-installation.webp",
    "revision": "85081ecbd048ffddb6c4848fc698d52d"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/desktop.png",
    "revision": "75c4b1a2583a9612b6d2a3f060e6741c"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/desktop.webp",
    "revision": "a4b28cb611ffae746279252c69738ee5"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/kitchen.png",
    "revision": "d568cc8ac8245e00cb3a44921690e4e6"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/kitchen.webp",
    "revision": "245ef36deea7090514346a72bcfab388"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/meeting-room.png",
    "revision": "41b1b21ec99509c4483066da718b7983"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/meeting-room.webp",
    "revision": "4e6a24c1f3ac768d3f063a3fcd73c856"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/passing-route-updated.png",
    "revision": "8a9ec5e123a9b089947bf66d03078e9d"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/passing-route-updated.webp",
    "revision": "a3b62b7d4661ff5dbbdb8f9cd83a588e"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/passing-route.png",
    "revision": "c6243476ddbfee3f6d7eb11fe5e25a17"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/passing-route.webp",
    "revision": "4e8363e87ff0ef8c282623b8052676c4"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/room-architecture.png",
    "revision": "4cdf75bf21b165951ef08beb49322ab4"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/room-architecture.webp",
    "revision": "69c7a26d870bb2310a5e2b95ea860e19"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/see-sea.png",
    "revision": "6d70f828f3632f2103915a061cb8937f"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/see-sea.webp",
    "revision": "d02c98376456067aed5299114ae6f526"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/sunroom.png",
    "revision": "6a20de46807c1e2655c846c241a154e4"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/sunroom.webp",
    "revision": "8edba420019da44429ef1ef066e1921b"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/wakatime-total.png",
    "revision": "07eb5f69cb253d00b0bcbce28976fd58"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/wakatime-total.webp",
    "revision": "52a63e4b1e37c041cb6ed2bf85449039"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/wakatime.png",
    "revision": "8039bffe0a0256979291b0f3bfa67aef"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/wakatime.webp",
    "revision": "9d08ab6cf95c67c8e5497a5333cd00ca"
  },
  {
    "url": "posts/2017/01/01/review-2016/cover.png",
    "revision": "28d40a65984188a82a0bc43558a7038e"
  },
  {
    "url": "posts/2017/01/01/review-2016/cover.webp",
    "revision": "19aca6f9dc888644bc76d441da0c86f3"
  },
  {
    "url": "posts/2017/01/01/review-2016/hardware-info.png",
    "revision": "05ce4ffc74f591f0e4a64eabefe6737e"
  },
  {
    "url": "posts/2017/01/01/review-2016/hardware-info.webp",
    "revision": "17f4be951155dfbd2fa663f44c7fd16d"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/add-shortcut.png",
    "revision": "6bd2faa31fea5101681b237692b137c0"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/add-shortcut.webp",
    "revision": "c933f777cbdb5dc55fa06adff69f69cb"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/cover.png",
    "revision": "c1f8a0ded6ef16859b54d4b46d324388"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/cover.webp",
    "revision": "9de8be83abd1952fb112c73079c55711"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/desktop-version-shortcut.png",
    "revision": "d2eb0401b07ce25850e9afcde28e0d06"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/desktop-version-shortcut.webp",
    "revision": "e2475c73b6be148ba060e15a9b4ccb81"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/launching.png",
    "revision": "e51633959aabffd0d61f1323c17e26c4"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/launching.webp",
    "revision": "4071e85ed69390fcb79dd56bd0d13dfd"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/shortcut.png",
    "revision": "ee6a7f122a95a9b356bf434179d10485"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/shortcut.webp",
    "revision": "dd28ed39982e50b21c57d1f2ba00b155"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/cover.png",
    "revision": "afe765a423b8ebac24fcaa8bbe959385"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/cover.webp",
    "revision": "9cec7f77f285e0b345657fff32cdf189"
  },
  {
    "url": "posts/2018/01/01/review-2017/cover.png",
    "revision": "704e5ccac667e591d333756b4037191a"
  },
  {
    "url": "posts/2018/01/01/review-2017/cover.webp",
    "revision": "192a5a50789e7bb15de8469aad1e7047"
  },
  {
    "url": "posts/2018/01/01/review-2017/macbook-pro.png",
    "revision": "bb4509d155d9d5765f0128a8be8eeb6f"
  },
  {
    "url": "posts/2018/01/01/review-2017/macbook-pro.webp",
    "revision": "d7ab2a9e891594c3aff55bfd3c7290dc"
  },
  {
    "url": "posts/2018/01/01/review-2017/mdr-1000x.png",
    "revision": "60130fc05c1bc43bb422f5d1ee730916"
  },
  {
    "url": "posts/2018/01/01/review-2017/mdr-1000x.webp",
    "revision": "0a1f5a3eaf461a951e8d4ce2bba90ca4"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/benchmark-blog-website.png",
    "revision": "06465a91d135ae1cc8b7e684d0e75cfc"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/benchmark-blog-website.webp",
    "revision": "309fc307b2f984c40b02ecbef70dd5e2"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/blog-resource-transfer-time.png",
    "revision": "e314a8a59b49cd1b5ae66e4064bb9344"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/blog-resource-transfer-time.webp",
    "revision": "a6d7dc00ab41be0f1a6e87f4211715af"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/cover.png",
    "revision": "43dd75bc6d7d71bf40582e567ca34d42"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/cover.webp",
    "revision": "1e76915b3466a58bb7242ed79cdbf228"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/cover.png",
    "revision": "6d331f21efd7ad6dfa7a584ed3c4d3f2"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/cover.webp",
    "revision": "c1566bac5de28dc40a0c1506a1107ce7"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/karma-jawr-generated-index.png",
    "revision": "15c325c2b509b5771375fd17d7cbbce9"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/karma-jawr-generated-index.webp",
    "revision": "ffe4011649708c90baed2f4b7e7aa21e"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/cover.png",
    "revision": "a58210d9a6b47fb694fe04b8cbbe312a"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/cover.webp",
    "revision": "ea9f7743b2cd84574cd22ed25942b149"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/create-release.png",
    "revision": "a31aa7e5e3eed42d25422c828b0f76b4"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/create-release.webp",
    "revision": "79cabe1ec1e52c944c79da0c2b6e6a47"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/github-actions.png",
    "revision": "57c065dcc456873fb4b679e42eba0495"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/github-actions.webp",
    "revision": "0cc8fb75d850e328ce1bdb9baba80e0b"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/github-official-actions-repo.png",
    "revision": "9c6586057b46232199b096558fe54f06"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/github-official-actions-repo.webp",
    "revision": "477605f82400f608545e3c8d08a3d807"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/trigger-release-workflow.png",
    "revision": "5824c20beadbe9cdd32e5018232dce33"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/trigger-release-workflow.webp",
    "revision": "118070ef6ecb23b333188f5055a29b95"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-ci-overview.png",
    "revision": "13fdd8e7c2c2c70882bbe8421bae0525"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-ci-overview.webp",
    "revision": "593501b6abebdb69a419e8202e963d2d"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-editor-example.png",
    "revision": "752eba3537312d54d6e4d8d3477e2df5"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-editor-example.webp",
    "revision": "1813366eaa17f6e019c1006fd30a61d8"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-example.png",
    "revision": "88b11a11cb40a1fe0b886ebb585abd55"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-example.webp",
    "revision": "e9c3eaef7f939a77ddad6284f3d86807"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-syntax-highlight.png",
    "revision": "2e373fece1c8043329fa614febf8b5e9"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-syntax-highlight.webp",
    "revision": "b845cce847a78b18ca5c6e35b9a0dc21"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/bird-nest-show.png",
    "revision": "f9618cb46aa1723b3b80f3b174e79f56"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/bird-nest-show.webp",
    "revision": "f8d0b4f6652d1451235ccf1e5a852b8b"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/bird-nest.png",
    "revision": "b7133799f9dd8a63a902b87c3995f7ce"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/bird-nest.webp",
    "revision": "96d1bcec2c67015d8cd5116b4c6a4d6e"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/great-wall-01.png",
    "revision": "adb0ae824da742473c0f2033e6f00ecb"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/great-wall-01.webp",
    "revision": "2c2ea1bfa858164937034796b48e4745"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/great-wall-02.png",
    "revision": "4b7a9084843e76909c32d57aa243a502"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/great-wall-02.webp",
    "revision": "3e063515d4998f7f4d98bb6efe6a475d"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/great-wall-03.png",
    "revision": "015b81210929f3a1b197877115c7bf7a"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/great-wall-03.webp",
    "revision": "61b7b4e82b27d3423b93647afcc90dc0"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/msra.png",
    "revision": "afc4329118048573fb01812a2f5d61b9"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/msra.webp",
    "revision": "a6ba99941ffbe026a09b995e45fca9ad"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-01.png",
    "revision": "6c0734ee3229249adcafb500257cb7d1"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-01.webp",
    "revision": "b7b9516065fc6dab7fee4bddba9bb804"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-02.png",
    "revision": "8cd6615c70a506d2af0fb6be36c39d5d"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-02.webp",
    "revision": "ca598dbd702bd95c0465a3333329b486"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-03.png",
    "revision": "cc8ee643d3e8fac1967950f8a6a87899"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-03.webp",
    "revision": "480f7329129edcb1bdfd34d7f183f23a"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-04.png",
    "revision": "8185a188a530fbbdc4d825d08bc8b862"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-04.webp",
    "revision": "cbd7e6af14b45b002a4a3d9a33dd708e"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-05.png",
    "revision": "24b0c92caed88f3a7d38fed2f3d1ad82"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-05.webp",
    "revision": "4abbdb640e39e46c3a2520654fa79946"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/pku-untitled-lake.png",
    "revision": "2e02e242aeff1319b2e9e208f93f2fe9"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/pku-untitled-lake.webp",
    "revision": "5d7406532a4b5af864ce8c3a706a9bbf"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/water-m3.png",
    "revision": "2d1b87575cdb798406a8c00be94fac7a"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/water-m3.webp",
    "revision": "489c7da2b7814ff8a691b1447b69235a"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/build-log-highlight-support.png",
    "revision": "319248b963ccff9351786ba6752cde06"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/build-log-highlight-support.webp",
    "revision": "51c049e803384d402986160009af2d93"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/migrating-github-actions.png",
    "revision": "e0a8656ec13e06f6b039ac6e13b743d2"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/migrating-github-actions.webp",
    "revision": "0d85ce989bedf5ed9d5010f1eb97064b"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/select-sample-workflow-for-npm.png",
    "revision": "ad0df58b3619051a7ea4ee5713a77a6a"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/select-sample-workflow-for-npm.webp",
    "revision": "08647ee4856f25ff6467ad7a1f6471cd"
  },
  {
    "url": "posts/2019/11/14/monorepo-practice-in-typescript-projects/cover.png",
    "revision": "0190666a7dc832afd1d7d47aa9461e84"
  },
  {
    "url": "posts/2019/11/14/monorepo-practice-in-typescript-projects/cover.webp",
    "revision": "5972a2b30409ff8ea98aefd658f679f6"
  },
  {
    "url": "posts/2020/01/28/review-2019/cover.png",
    "revision": "b3308f43eaad42c9fdbb81dba58f0484"
  },
  {
    "url": "posts/2020/01/28/review-2019/cover.webp",
    "revision": "d31fe316bda1a37a3b8262c359ef0b07"
  },
  {
    "url": "posts/2020/01/28/review-2019/movement.png",
    "revision": "634937cbfde5746fe0ea0dfe17c5af62"
  },
  {
    "url": "posts/2020/01/28/review-2019/movement.webp",
    "revision": "414c4c6470c1f35156963c0427f97d4e"
  },
  {
    "url": "posts/2020/02/12/using-patch-package-patching-node-modules/cover.png",
    "revision": "7a9a90412638d7d085b14e095089040e"
  },
  {
    "url": "posts/2020/02/12/using-patch-package-patching-node-modules/cover.webp",
    "revision": "63078ecf97da8ff1d2e5a6e60ffdd814"
  },
  {
    "url": "posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/revonate-circleci-docker-image-support.png",
    "revision": "6edc02e8a91038750a2525377e10f1b9"
  },
  {
    "url": "posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/revonate-circleci-docker-image-support.webp",
    "revision": "a75f6754f1d91840199f7441990c5583"
  },
  {
    "url": "posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/revonate-setup-pull-request.png",
    "revision": "3ed163533a58e6989a782845bdd07979"
  },
  {
    "url": "posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/revonate-setup-pull-request.webp",
    "revision": "55b434b3e7479e71e38e0ec9ee4516c2"
  },
  {
    "url": "posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/revonate.png",
    "revision": "76a04e4304e765706fedabad3186606a"
  },
  {
    "url": "posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/revonate.webp",
    "revision": "7727e6936b150ed77fea4325249f2664"
  },
  {
    "url": "static/img/android-chrome-144x144.png",
    "revision": "2d2f9e46432ff4b4e84482b2fc9f4e42"
  },
  {
    "url": "static/img/android-chrome-192x192.png",
    "revision": "e84f50a6e43ae5118212ab2f7d1de8d6"
  },
  {
    "url": "static/img/android-chrome-256x256.png",
    "revision": "2ae24ca974b66993f967b89ecf72a46b"
  },
  {
    "url": "static/img/android-chrome-36x36.png",
    "revision": "930826062eed7ac6451825ccac167bc4"
  },
  {
    "url": "static/img/android-chrome-384x384.png",
    "revision": "86c5d56a7c541e1111947cb54f78a89f"
  },
  {
    "url": "static/img/android-chrome-48x48.png",
    "revision": "995cf964d644a94c44b123159d36d049"
  },
  {
    "url": "static/img/android-chrome-512x512.png",
    "revision": "a5f6c6125a0b7790ba197ff5d13195bb"
  },
  {
    "url": "static/img/android-chrome-72x72.png",
    "revision": "2b09ac6712bc8dc1f2beea79030522f3"
  },
  {
    "url": "static/img/android-chrome-96x96.png",
    "revision": "f23010504c70455632df71e95e56115f"
  },
  {
    "url": "static/img/apple-touch-icon-1024x1024.png",
    "revision": "fd260c89bf768e4ecd198e0e67f4a008"
  },
  {
    "url": "static/img/apple-touch-icon-114x114.png",
    "revision": "5e76b9ddfe890d82b2c667d52078415b"
  },
  {
    "url": "static/img/apple-touch-icon-120x120.png",
    "revision": "90dcca978b856b59db32827ffe88a503"
  },
  {
    "url": "static/img/apple-touch-icon-144x144.png",
    "revision": "20eb4c352a3ab364afd22b545572dd98"
  },
  {
    "url": "static/img/apple-touch-icon-152x152.png",
    "revision": "72f414e16997ed94c54bc71502bd441e"
  },
  {
    "url": "static/img/apple-touch-icon-167x167.png",
    "revision": "966aed2c51aec99b91d70ab96af8a237"
  },
  {
    "url": "static/img/apple-touch-icon-180x180.png",
    "revision": "f1685a7bf33614ab1d000cc970e2092c"
  },
  {
    "url": "static/img/apple-touch-icon-57x57.png",
    "revision": "4c92f5e0290abf06250f373ba8bf2b63"
  },
  {
    "url": "static/img/apple-touch-icon-60x60.png",
    "revision": "b94cb858512c17db87d95d8ced0109b4"
  },
  {
    "url": "static/img/apple-touch-icon-72x72.png",
    "revision": "6f8ac8aa5c40111312ac286ff2217017"
  },
  {
    "url": "static/img/apple-touch-icon-76x76.png",
    "revision": "ff483b4d4cd43bbc2623b03ee36e9eef"
  },
  {
    "url": "static/img/apple-touch-icon-precomposed.png",
    "revision": "f1685a7bf33614ab1d000cc970e2092c"
  },
  {
    "url": "static/img/apple-touch-icon.png",
    "revision": "f1685a7bf33614ab1d000cc970e2092c"
  },
  {
    "url": "static/img/apple-touch-startup-image-1125x2436.png",
    "revision": "9a5db482de95c12b46990ae90b12bafd"
  },
  {
    "url": "static/img/apple-touch-startup-image-1136x640.png",
    "revision": "26d8b9e51e49ac335b76e2a5708fc2ad"
  },
  {
    "url": "static/img/apple-touch-startup-image-1242x2208.png",
    "revision": "f77100dbea265e785ea8275f898f5be0"
  },
  {
    "url": "static/img/apple-touch-startup-image-1242x2688.png",
    "revision": "137d98d3567e9eb43e5082a323370b78"
  },
  {
    "url": "static/img/apple-touch-startup-image-1334x750.png",
    "revision": "364770127e0bebd1bbed09981f32d934"
  },
  {
    "url": "static/img/apple-touch-startup-image-1536x2048.png",
    "revision": "b735d14562873f76ac08b9a48e8386cc"
  },
  {
    "url": "static/img/apple-touch-startup-image-1620x2160.png",
    "revision": "5fc00113c2002a972b277b1de206c504"
  },
  {
    "url": "static/img/apple-touch-startup-image-1668x2224.png",
    "revision": "14ca17f9bf868e8ccd420a058f37f6e6"
  },
  {
    "url": "static/img/apple-touch-startup-image-1668x2388.png",
    "revision": "da7aebfedba2c09b1697028fe1cc48bb"
  },
  {
    "url": "static/img/apple-touch-startup-image-1792x828.png",
    "revision": "ab301940d5aed021a9896c4eb26ee0fb"
  },
  {
    "url": "static/img/apple-touch-startup-image-2048x1536.png",
    "revision": "2183ce3b3bea517bbed4839b7576bb70"
  },
  {
    "url": "static/img/apple-touch-startup-image-2048x2732.png",
    "revision": "bd675ab7b8da6ad6e090d4fe46d71006"
  },
  {
    "url": "static/img/apple-touch-startup-image-2160x1620.png",
    "revision": "e0b1e912ee9d356959b0d7183691c94b"
  },
  {
    "url": "static/img/apple-touch-startup-image-2208x1242.png",
    "revision": "c1cc7512b374135ca187ab1c36942864"
  },
  {
    "url": "static/img/apple-touch-startup-image-2224x1668.png",
    "revision": "46947a36a190282552eec02bd73d069e"
  },
  {
    "url": "static/img/apple-touch-startup-image-2388x1668.png",
    "revision": "79d67f8ca267a42a45aa975b23cf5d21"
  },
  {
    "url": "static/img/apple-touch-startup-image-2436x1125.png",
    "revision": "eed57a3eaf095163ea6269ee50d78752"
  },
  {
    "url": "static/img/apple-touch-startup-image-2688x1242.png",
    "revision": "311e27aa6f4c75488b4fa98048957216"
  },
  {
    "url": "static/img/apple-touch-startup-image-2732x2048.png",
    "revision": "03371255276941f1af203eeec250a0af"
  },
  {
    "url": "static/img/apple-touch-startup-image-640x1136.png",
    "revision": "a78558c245024b0a13e9e2790f86205c"
  },
  {
    "url": "static/img/apple-touch-startup-image-750x1334.png",
    "revision": "e44c423a5b70d025a04e9071029142be"
  },
  {
    "url": "static/img/apple-touch-startup-image-828x1792.png",
    "revision": "2972143102aa1dcae340f80101754455"
  },
  {
    "url": "static/img/coast-228x228.png",
    "revision": "5ec118845bd4db0ab2b91012999619ff"
  },
  {
    "url": "static/img/favicon-16x16.png",
    "revision": "db58c39dcf28ce4f937faadd251c60a4"
  },
  {
    "url": "static/img/favicon-32x32.png",
    "revision": "3b4227c8ea559794be5b9f0b0ba3a38e"
  },
  {
    "url": "static/img/favicon-48x48.png",
    "revision": "995cf964d644a94c44b123159d36d049"
  },
  {
    "url": "static/img/firefox_app_128x128.png",
    "revision": "67b6ae09586684f6d0dc7791346cb748"
  },
  {
    "url": "static/img/firefox_app_512x512.png",
    "revision": "6fa6acb8100f9889d52c1688b8f48bc6"
  },
  {
    "url": "static/img/firefox_app_60x60.png",
    "revision": "6031a452e7ed12a79ea605bed9be726f"
  },
  {
    "url": "static/img/mstile-144x144.png",
    "revision": "2d2f9e46432ff4b4e84482b2fc9f4e42"
  },
  {
    "url": "static/img/mstile-150x150.png",
    "revision": "a9475b0a3fb98bac520a55f0ee5d214f"
  },
  {
    "url": "static/img/mstile-310x150.png",
    "revision": "3ce2839fd5a671cd726eae48009836a0"
  },
  {
    "url": "static/img/mstile-310x310.png",
    "revision": "015adb94afc5aa41241aea5cba3e1a42"
  },
  {
    "url": "static/img/mstile-70x70.png",
    "revision": "036a2648fab31aca4fd489096b4ac934"
  },
  {
    "url": "static/img/yandex-browser-50x50.png",
    "revision": "e4388bea0f53a907451384497db24f3c"
  },
  {
    "url": "static/fonts/roboto-latin-100.woff",
    "revision": "5cb7edfceb233100075dc9a1e12e8da3"
  },
  {
    "url": "static/fonts/roboto-latin-100.woff2",
    "revision": "7370c3679472e9560965ff48a4399d0b"
  },
  {
    "url": "static/fonts/roboto-latin-100italic.woff",
    "revision": "f9e8e590b4e0f1ff83469bb2a55b8488"
  },
  {
    "url": "static/fonts/roboto-latin-100italic.woff2",
    "revision": "f8b1df51ba843179fa1cc9b53d58127a"
  },
  {
    "url": "static/fonts/roboto-latin-300.woff",
    "revision": "b00849e00f4c2331cddd8ffb44a6720b"
  },
  {
    "url": "static/fonts/roboto-latin-300.woff2",
    "revision": "ef7c6637c68f269a882e73bcb57a7f6a"
  },
  {
    "url": "static/fonts/roboto-latin-300italic.woff",
    "revision": "4df32891a5f2f98a363314f595482e08"
  },
  {
    "url": "static/fonts/roboto-latin-300italic.woff2",
    "revision": "14286f3ba79c6627433572dfa925202e"
  },
  {
    "url": "static/fonts/roboto-latin-400.woff",
    "revision": "60fa3c0614b8fb2f394fa29944c21540"
  },
  {
    "url": "static/fonts/roboto-latin-400.woff2",
    "revision": "479970ffb74f2117317f9d24d9e317fe"
  },
  {
    "url": "static/fonts/roboto-latin-400italic.woff",
    "revision": "fe65b8335ee19dd944289f9ed3178c78"
  },
  {
    "url": "static/fonts/roboto-latin-400italic.woff2",
    "revision": "51521a2a8da71e50d871ac6fd2187e87"
  },
  {
    "url": "static/fonts/roboto-latin-500.woff",
    "revision": "87284894879f5b1c229cb49c8ff6decc"
  },
  {
    "url": "static/fonts/roboto-latin-500.woff2",
    "revision": "020c97dc8e0463259c2f9df929bb0c69"
  },
  {
    "url": "static/fonts/roboto-latin-500italic.woff",
    "revision": "288ad9c6e8b43cf02443a1f499bdf67e"
  },
  {
    "url": "static/fonts/roboto-latin-500italic.woff2",
    "revision": "db4a2a231f52e497c0191e8966b0ee58"
  },
  {
    "url": "static/fonts/roboto-latin-700.woff",
    "revision": "adcde98f1d584de52060ad7b16373da3"
  },
  {
    "url": "static/fonts/roboto-latin-700.woff2",
    "revision": "2735a3a69b509faf3577afd25bdf552e"
  },
  {
    "url": "static/fonts/roboto-latin-700italic.woff",
    "revision": "81f57861ed4ac74741f5671e1dff2fd9"
  },
  {
    "url": "static/fonts/roboto-latin-700italic.woff2",
    "revision": "da0e717829e033a69dec97f1e155ae42"
  },
  {
    "url": "static/fonts/roboto-latin-900.woff",
    "revision": "bb1e4dc6333675d11ada2e857e7f95d7"
  },
  {
    "url": "static/fonts/roboto-latin-900.woff2",
    "revision": "9b3766ef4a402ad3fdeef7501a456512"
  },
  {
    "url": "static/fonts/roboto-latin-900italic.woff",
    "revision": "28f9151055c950874d2c6803a39b425b"
  },
  {
    "url": "static/fonts/roboto-latin-900italic.woff2",
    "revision": "ebf6d1640ccddb99fb49f73c052c55a8"
  },
  {
    "url": "404.html",
    "revision": "c0dfc2b668862e7ad8f3ccbae57ff172"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "0bcdb3a4ead3a9dfa3070125a0c29a02"
  },
  {
    "url": "categories/debug/index.html",
    "revision": "a12b405bad213358d4afd15662dd3166"
  },
  {
    "url": "categories/index.html",
    "revision": "3235f56815975c835280867f3929005e"
  },
  {
    "url": "categories/note/index.html",
    "revision": "bd9bc334e702d6e14db6d73de8050f84"
  },
  {
    "url": "categories/others/index.html",
    "revision": "1dc92f6db9e190d06f52af35229faac8"
  },
  {
    "url": "index.html",
    "revision": "4265df7b201a0fdc42c278128fc8d8f4"
  },
  {
    "url": "pages/about/index.html",
    "revision": "fac1203eee79dd8c6621728ad6e4b10f"
  },
  {
    "url": "pages/projects/index.html",
    "revision": "d444bafefbe746c42b0707c1d72fa566"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/index.html",
    "revision": "754de38ed1775e7ef6757b9e9afbb420"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/index.html",
    "revision": "87a5af77a46963228aa48b57781367cb"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/index.html",
    "revision": "0718a6d88a48460b761bf880d2ca908a"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/index.html",
    "revision": "3e2ada5252333de1542cb339c94fd85c"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/index.html",
    "revision": "13d401ad4016a469c2766f7e29321220"
  },
  {
    "url": "posts/2016/01/01/review-2015/index.html",
    "revision": "4613aead851558bd4983b2c4bc2ba38b"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/index.html",
    "revision": "8ae7a5859a74fc8ff39ecfbe05f021b1"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html",
    "revision": "590e99371ab754680b9d48527871fd25"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/index.html",
    "revision": "0fe01a597992431a402d397a02e2a3c5"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/index.html",
    "revision": "d7495b66a1b2792ed7fe7fa9edba1ce9"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/index.html",
    "revision": "5385f297a16217e8177d2b09be872ca6"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/index.html",
    "revision": "002d3e62604783f146f6a93c2a5d9a8b"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/index.html",
    "revision": "e49cc7bacd6ce6c3a25567a56edbec22"
  },
  {
    "url": "posts/2017/01/01/review-2016/index.html",
    "revision": "45b589a6f5b2427e01fbaf2410989c6f"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/index.html",
    "revision": "8212c5058aa8c2c608a3e9caf6e7fa5d"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/index.html",
    "revision": "22123a72881eaa70767dfa9b80c90a54"
  },
  {
    "url": "posts/2018/01/01/review-2017/index.html",
    "revision": "50e0de899e40af6c1abb47a089a284d9"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/index.html",
    "revision": "d92d8da4392c7b039651aeb3221a8f44"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html",
    "revision": "c60b073b8617bc002a68b068507f0a41"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/index.html",
    "revision": "e1a2062ea667f24c4c3afb8eead662a0"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/index.html",
    "revision": "6349da78c4bb902b39c917ba7f34cc08"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/index.html",
    "revision": "004d77ff58d45437b5c24856b8aca937"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/index.html",
    "revision": "bf516eaab0673e0bc8aada120e207954"
  },
  {
    "url": "posts/2019/11/14/monorepo-practice-in-typescript-projects/index.html",
    "revision": "ddd1edc73e0d0be1dd34779d6424aa92"
  },
  {
    "url": "posts/2020/01/28/review-2019/index.html",
    "revision": "d4ef513f3d0abb6b91e80f62f949ce93"
  },
  {
    "url": "posts/2020/02/12/using-patch-package-patching-node-modules/index.html",
    "revision": "5db622da607f90a94e3c1489ccb9f7d5"
  },
  {
    "url": "posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/index.html",
    "revision": "33671668f0c1f89102109f7396935f60"
  },
  {
    "url": "posts/index.html",
    "revision": "aa8b89c8d3bf47b640a80d2f3e086d52"
  },
  {
    "url": "tags/actions/index.html",
    "revision": "4fd399c267705a38b5c5fa4bbf5f3f9a"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "ada9f75461b3db4a57f30b7a219194c0"
  },
  {
    "url": "tags/angularjs/index.html",
    "revision": "8519f522d4cb9a388fbfadb033a1e24d"
  },
  {
    "url": "tags/apache/index.html",
    "revision": "f8873ca47c1e4197bec222b59396f6d8"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "483b788ca5de991758e7f01868fda5a8"
  },
  {
    "url": "tags/ci/index.html",
    "revision": "71d9eafe834564f5ba352fa2316a6c9a"
  },
  {
    "url": "tags/diary/index.html",
    "revision": "dee468457c7b3811f70a691a47c3fc64"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "71257416491d5130021f1b0a2f8a29c8"
  },
  {
    "url": "tags/extjs/index.html",
    "revision": "da5fae8510750db56735adc084950326"
  },
  {
    "url": "tags/github/index.html",
    "revision": "95a76a966111c82f6d76f52f604ce391"
  },
  {
    "url": "tags/google/index.html",
    "revision": "5d3e6d630821e7b342b6240afeb7e482"
  },
  {
    "url": "tags/gulp/index.html",
    "revision": "7b63f1cc0e98f1832ce10d1ace125043"
  },
  {
    "url": "tags/hadoop/index.html",
    "revision": "e64a5558618592b7475159dbd7a92404"
  },
  {
    "url": "tags/index.html",
    "revision": "1fcbd0760729651e2c81e72c85f7d2aa"
  },
  {
    "url": "tags/intellij-idea/index.html",
    "revision": "3439fe2f49b6ade909427c3d3ced47ba"
  },
  {
    "url": "tags/java/index.html",
    "revision": "44a3b551e1a1e590d4be588bcaaec275"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "fc17eee68c8889c8692fe2f225408a4e"
  },
  {
    "url": "tags/jawr/index.html",
    "revision": "1d126d84e871b89fd708cef243bddf1a"
  },
  {
    "url": "tags/jest/index.html",
    "revision": "16c3ed1539818709db7c919d4b6f7d8b"
  },
  {
    "url": "tags/jsf/index.html",
    "revision": "0695d2913096a5f1ab2ef2b0d0865933"
  },
  {
    "url": "tags/karma/index.html",
    "revision": "3a80f71768e7137ee16e59121c80bb2a"
  },
  {
    "url": "tags/lerna/index.html",
    "revision": "903cc28e8a643eb91b065a985b0948d0"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "451193ec6b4101224ae0bc0fd3aca0a3"
  },
  {
    "url": "tags/monorepo/index.html",
    "revision": "2028c8ef5fefbbe63083c8ef1d8d75c9"
  },
  {
    "url": "tags/node/index.html",
    "revision": "dbcd51e78ead79b5fe60041696166124"
  },
  {
    "url": "tags/npm/index.html",
    "revision": "28f22b0fe85ab591a7e450c04769fd23"
  },
  {
    "url": "tags/oracle/index.html",
    "revision": "a1f36ab994dfa2eee0e25d45245d9351"
  },
  {
    "url": "tags/pwa/index.html",
    "revision": "0608b17ea027c43be5d19620b8edbe4c"
  },
  {
    "url": "tags/renovate/index.html",
    "revision": "9230e5beebda1dd3e14c22ad5d77e9fe"
  },
  {
    "url": "tags/security/index.html",
    "revision": "a7045ada7af4d20d6e158e505bcb9225"
  },
  {
    "url": "tags/shiro/index.html",
    "revision": "31f64e444fba755a0add8abe075d1c4a"
  },
  {
    "url": "tags/site/index.html",
    "revision": "e6197c13b56f2dc5b9c321905808c6ad"
  },
  {
    "url": "tags/spring/index.html",
    "revision": "bac001b3202060c22cc45741483dd4e5"
  },
  {
    "url": "tags/springmvc/index.html",
    "revision": "b0bdbbd556abfe899c29c1410d8f25dc"
  },
  {
    "url": "tags/travisci/index.html",
    "revision": "fc5bd833d19414e68a02422d89407774"
  },
  {
    "url": "tags/trips/index.html",
    "revision": "a77b2b4be461df8eec18c0f0c9c815b2"
  },
  {
    "url": "tags/typescript/index.html",
    "revision": "cb6ef0ab7bbcf78ce0c14ea0c20ef9c6"
  },
  {
    "url": "tags/ubuntu/index.html",
    "revision": "e387a6db330f8e446e483262045fba7b"
  },
  {
    "url": "tags/vps/index.html",
    "revision": "9c631f64d157494ad0203614a152f183"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "5870024e3f11850f506aeb7784cdbbf4"
  },
  {
    "url": "tags/webpack/index.html",
    "revision": "d8decda736c849e47c866bb4841bc641"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
