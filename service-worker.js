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
    "revision": "ab3e5c6c136874c731371ca854887168"
  },
  {
    "url": "api/categories/blog.json",
    "revision": "01aae2bfd21db342a0ade88b12ad089c"
  },
  {
    "url": "api/categories/debug.json",
    "revision": "53dbd684cc3b6222e65ef81c6ced6fc4"
  },
  {
    "url": "api/categories/note.json",
    "revision": "79afec1f1607c233420aa4dd1329d873"
  },
  {
    "url": "api/categories/others.json",
    "revision": "a06e94a58928db3b510d3550fd04c276"
  },
  {
    "url": "api/home.json",
    "revision": "c1ddc4f8d2e915db28387e271e0e0e51"
  },
  {
    "url": "api/navigation.json",
    "revision": "777ced3dd3855b27d95d505bf20e3351"
  },
  {
    "url": "api/pages/about.json",
    "revision": "c11c25ce5290a0769a36a25ab3d52bce"
  },
  {
    "url": "api/pages/projects.json",
    "revision": "15ded71ef50657830c87fb89ef5eb888"
  },
  {
    "url": "api/posts.json",
    "revision": "abb9c4d9ba75a753a9d21a8ffd9c278a"
  },
  {
    "url": "api/posts/2015/10/25/apache-shiro-spring-integration.json",
    "revision": "c271aafe7682dc74827ca368b5dc6568"
  },
  {
    "url": "api/posts/2015/11/10/beanutils-vs-reflection.json",
    "revision": "a22baee238b0eabd17426ee470cd1e68"
  },
  {
    "url": "api/posts/2015/12/13/ubuntu-mean-development-environment-setup.json",
    "revision": "ac9dda4cb59d202cab5a456f322e920b"
  },
  {
    "url": "api/posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file.json",
    "revision": "e127c8edc6fb4eded1ba6e46de85421b"
  },
  {
    "url": "api/posts/2015/12/27/site-upgrade-plan.json",
    "revision": "f5cdc3bf1439ae6d67c766f248960c49"
  },
  {
    "url": "api/posts/2016/01/01/review-2015.json",
    "revision": "468e37fccff34895902d32895c6db217"
  },
  {
    "url": "api/posts/2016/01/11/nodejs-oracledb-install-on-rhel-6.json",
    "revision": "852ea0ff3a44f263cd0982b14a9d732f"
  },
  {
    "url": "api/posts/2016/01/12/nodejs-oracledb-ora-21561-solution.json",
    "revision": "bab0032cd6b3ef92f56543804f93bff7"
  },
  {
    "url": "api/posts/2016/03/06/site-code-structure.json",
    "revision": "c9bcf18cc6b87ff9fbf3b184d85c3700"
  },
  {
    "url": "api/posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide.json",
    "revision": "09421283ae85d27309694f1ca1c08b05"
  },
  {
    "url": "api/posts/2016/04/10/google-codejam-2016-qualification-round.json",
    "revision": "31a22d89be03a126f1aef96faf37e03b"
  },
  {
    "url": "api/posts/2016/04/30/angular-ui-performance-tuning-experience.json",
    "revision": "656e6894ff2dbe6be4aa74adfe76718a"
  },
  {
    "url": "api/posts/2016/07/05/move-to-new-apartment.json",
    "revision": "c5ce355a8752ff8ef294bc695857cced"
  },
  {
    "url": "api/posts/2017/01/01/review-2016.json",
    "revision": "118fe671b40539844dd0983bd7e8f4c7"
  },
  {
    "url": "api/posts/2017/03/12/new-version-blog-migration.json",
    "revision": "2e99eadc2325f0f25c306cacc72dad96"
  },
  {
    "url": "api/posts/2017/05/05/vue-version-for-blog-app.json",
    "revision": "31a607bff403a84b7bd25ed899f6fff0"
  },
  {
    "url": "api/posts/2018/01/01/review-2017.json",
    "revision": "ecb859fca70ad1d85712b818c504143a"
  },
  {
    "url": "api/posts/2018/03/03/latest-update-on-blog-app.json",
    "revision": "0165066d391c344ab1bda42996bb1510"
  },
  {
    "url": "api/posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution.json",
    "revision": "d474efd29094e9577061589f90a14757"
  },
  {
    "url": "api/posts/2018/04/01/karma-jawr-development-note.json",
    "revision": "6edcc355093b4d4b480432642bee1e26"
  },
  {
    "url": "api/posts/2019/07/07/github-actions-overview-and-practice.json",
    "revision": "da2800f2ce6e3c80d7e73bb5f2abfe08"
  },
  {
    "url": "api/posts/2019/07/23/travel-in-beijing.json",
    "revision": "aee7799ae1cdb801ed2fa002289aecd8"
  },
  {
    "url": "api/posts/2019/08/18/github-actions-new-yaml-syntax.json",
    "revision": "dfe2d58dd412559421caab0d7d1d722d"
  },
  {
    "url": "api/posts/2019/11/14/monorepo-practice-in-typescript-projects.json",
    "revision": "974c8836005b19d889f3850e0b6b3874"
  },
  {
    "url": "api/posts/2020/01/28/review-2019.json",
    "revision": "f28bc51185716d2e7234ce3c095e9343"
  },
  {
    "url": "api/posts/2020/02/12/using-patch-package-patching-node-modules.json",
    "revision": "ccf5e09d6cb1b034dbe0c283cbfda097"
  },
  {
    "url": "api/posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate.json",
    "revision": "84a8e6d719fa1d734aadb9635e11b753"
  },
  {
    "url": "api/profile.json",
    "revision": "a5d932d01e2bea6bc56e379b0937c9b7"
  },
  {
    "url": "api/tags.json",
    "revision": "b3eba89ed14a22c4cdc21ac898ec7d65"
  },
  {
    "url": "api/tags/actions.json",
    "revision": "6034c46189984eb93facad235bd44abd"
  },
  {
    "url": "api/tags/angular.json",
    "revision": "af5b473f1e07f36e3894099f18aea275"
  },
  {
    "url": "api/tags/angularjs.json",
    "revision": "4fdaabd9eed61937de9d9e418a6323f2"
  },
  {
    "url": "api/tags/apache.json",
    "revision": "074144400d1328e9eaff5f85d07a7f60"
  },
  {
    "url": "api/tags/blog.json",
    "revision": "f9666df38304d00f4ddc81f6f749c558"
  },
  {
    "url": "api/tags/ci.json",
    "revision": "0f004ea775a2193411847beead8e06cb"
  },
  {
    "url": "api/tags/diary.json",
    "revision": "f222a85c8363288a0d81413a6403e495"
  },
  {
    "url": "api/tags/docker.json",
    "revision": "f6461b4696d9cf63196f296723afd1a3"
  },
  {
    "url": "api/tags/extjs.json",
    "revision": "0554403a63a5ce0e91d8c023de275ba2"
  },
  {
    "url": "api/tags/github.json",
    "revision": "5fce995118072615f46381a000d14b35"
  },
  {
    "url": "api/tags/google.json",
    "revision": "f7e87d50a5536cf2755450b7e8263baf"
  },
  {
    "url": "api/tags/gulp.json",
    "revision": "bfaeed88a0325389d117eeaff2488edc"
  },
  {
    "url": "api/tags/hadoop.json",
    "revision": "15b9d2dc9b320bf3a16efa018343b3c1"
  },
  {
    "url": "api/tags/intellij-idea.json",
    "revision": "1effdb536c637d296a129646305ab14f"
  },
  {
    "url": "api/tags/java.json",
    "revision": "1b5a798fe6cd2b89ec223f9ed6882a3a"
  },
  {
    "url": "api/tags/javascript.json",
    "revision": "6cc036514fac923cbe7476e636d8c6f3"
  },
  {
    "url": "api/tags/jawr.json",
    "revision": "dc1e062f03c25071e9b38784fc2d03ef"
  },
  {
    "url": "api/tags/jest.json",
    "revision": "d6c45f8c38bc50bf6a61e53fb79ce513"
  },
  {
    "url": "api/tags/jsf.json",
    "revision": "72180bc8105f55686774140e77cd3b42"
  },
  {
    "url": "api/tags/karma.json",
    "revision": "e38d27a4d506deeb23ee267026413bca"
  },
  {
    "url": "api/tags/lerna.json",
    "revision": "e168c9ff2c197ed9a823a4b6d1992de5"
  },
  {
    "url": "api/tags/linux.json",
    "revision": "9ed1bb0109e662a4b226fcd740e2d5f8"
  },
  {
    "url": "api/tags/monorepo.json",
    "revision": "d6329ef22d5f816b71ec7b6b19396d2e"
  },
  {
    "url": "api/tags/node.json",
    "revision": "5af9be6628440f5330593c25d7893421"
  },
  {
    "url": "api/tags/npm.json",
    "revision": "946d218c6042c9fba6ec5bbe27305057"
  },
  {
    "url": "api/tags/oracle.json",
    "revision": "17a7002fc6a2ab5c56ba391148bdf1e2"
  },
  {
    "url": "api/tags/pwa.json",
    "revision": "ee4bf73f0e1c28ba8a8cc9b911008218"
  },
  {
    "url": "api/tags/renovate.json",
    "revision": "9c69e97d106a0cf06279b9a02b1eea84"
  },
  {
    "url": "api/tags/security.json",
    "revision": "148236072ffba6a5674ff40d8c3805ca"
  },
  {
    "url": "api/tags/shiro.json",
    "revision": "01a9fe6dba262808e6558dd627e5f8c5"
  },
  {
    "url": "api/tags/site.json",
    "revision": "158a0b9973cf892c160747ca1b25b619"
  },
  {
    "url": "api/tags/spring.json",
    "revision": "867fcb31063456af59010e4364eba524"
  },
  {
    "url": "api/tags/springmvc.json",
    "revision": "2ed337abf62be930c652699da2123f05"
  },
  {
    "url": "api/tags/travisci.json",
    "revision": "e02981aa620466f601173ab398686c38"
  },
  {
    "url": "api/tags/trips.json",
    "revision": "55da16bbaa5d0d2a4f44adf7109f025f"
  },
  {
    "url": "api/tags/typescript.json",
    "revision": "246b22be71d31ef308b16e6bc650a9ff"
  },
  {
    "url": "api/tags/ubuntu.json",
    "revision": "0c6323d49da7222ba1365095fb96754f"
  },
  {
    "url": "api/tags/vps.json",
    "revision": "be56eb017fda1ae1ad7bea95fc06a578"
  },
  {
    "url": "api/tags/vue.json",
    "revision": "3bdb145effa4019856d5bd4c179f2a2b"
  },
  {
    "url": "api/tags/webpack.json",
    "revision": "446af3bf4c63a582f09036e979d31655"
  },
  {
    "url": "static/css/detail.eb8af859e0544926c632.css",
    "revision": "4784b90b225073ce134e8667e56c6cfc"
  },
  {
    "url": "static/css/main.f0d79c1b677fb068d5f6.css",
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
    "revision": "3044c1656b0db8833756604a059bd1a8"
  },
  {
    "url": "static/js/detail.eb8af859e0544926c632.js",
    "revision": "223c9bc5e51c706356d0d30139c8dddb"
  },
  {
    "url": "static/js/main.f0d79c1b677fb068d5f6.js",
    "revision": "477ebb15f9ee6dec04506a986c3160eb"
  },
  {
    "url": "static/js/vendors.7ea6cf4fdfece9a7f459.js",
    "revision": "eed0e7392118af8de06f552951bb7614"
  },
  {
    "url": "favicon.png",
    "revision": "cca8cd95d4d50db2a5f71923002f6d9e"
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
    "revision": "5cdc2f933b5d657dea81cf7b7ba3adcb"
  },
  {
    "url": "static/img/android-chrome-192x192.png",
    "revision": "ab595df71196603dd2fe38bee859b95d"
  },
  {
    "url": "static/img/android-chrome-256x256.png",
    "revision": "5661b45d035dbaf4c1931c32d10449d9"
  },
  {
    "url": "static/img/android-chrome-36x36.png",
    "revision": "19ea0ac7a2b248b2a037f106ff170ec3"
  },
  {
    "url": "static/img/android-chrome-384x384.png",
    "revision": "a8594b59d4d71cfbb5fc1df8705a7279"
  },
  {
    "url": "static/img/android-chrome-48x48.png",
    "revision": "d352a713e6de3dbbccb60ee595c453fe"
  },
  {
    "url": "static/img/android-chrome-512x512.png",
    "revision": "663ec7cd4e5d7d133c2312791dadc9fc"
  },
  {
    "url": "static/img/android-chrome-72x72.png",
    "revision": "39dc57f3f7066c1476cdf38611d281c9"
  },
  {
    "url": "static/img/android-chrome-96x96.png",
    "revision": "54870c35e47d500e24cdfa10adef3101"
  },
  {
    "url": "static/img/apple-touch-icon-1024x1024.png",
    "revision": "3b758eb46876a63bbe890212cad11cd3"
  },
  {
    "url": "static/img/apple-touch-icon-114x114.png",
    "revision": "655f7c68043e3c31bd3796c2c50fefea"
  },
  {
    "url": "static/img/apple-touch-icon-120x120.png",
    "revision": "cf6bcbeba73055c89bda4a3cc5faad8c"
  },
  {
    "url": "static/img/apple-touch-icon-144x144.png",
    "revision": "700e3fec0e76b04c3d5ab8807829a246"
  },
  {
    "url": "static/img/apple-touch-icon-152x152.png",
    "revision": "e59d44cee4849624591a1697ff30dbed"
  },
  {
    "url": "static/img/apple-touch-icon-167x167.png",
    "revision": "f3eae9019ec7fa4026a4a426aa9aa7d7"
  },
  {
    "url": "static/img/apple-touch-icon-180x180.png",
    "revision": "538601538d5dc91e75ee046b1c768bba"
  },
  {
    "url": "static/img/apple-touch-icon-57x57.png",
    "revision": "7c24a7c58f0d70ca9312f108b3c187c8"
  },
  {
    "url": "static/img/apple-touch-icon-60x60.png",
    "revision": "2fc415168c4b46439340824a30aeee1e"
  },
  {
    "url": "static/img/apple-touch-icon-72x72.png",
    "revision": "e63dba2c0227c9c6454b8c56ff0f845c"
  },
  {
    "url": "static/img/apple-touch-icon-76x76.png",
    "revision": "2e6820187de54d97de32070d8cdb30ac"
  },
  {
    "url": "static/img/apple-touch-icon-precomposed.png",
    "revision": "538601538d5dc91e75ee046b1c768bba"
  },
  {
    "url": "static/img/apple-touch-icon.png",
    "revision": "538601538d5dc91e75ee046b1c768bba"
  },
  {
    "url": "static/img/apple-touch-startup-image-1125x2436.png",
    "revision": "f5fdd4c8f1c9d3133499e124c7e22688"
  },
  {
    "url": "static/img/apple-touch-startup-image-1136x640.png",
    "revision": "4ca8f68c8473aed79ad6de60c8452003"
  },
  {
    "url": "static/img/apple-touch-startup-image-1242x2208.png",
    "revision": "1f76a303b78f26c2f28dacba8d2a0293"
  },
  {
    "url": "static/img/apple-touch-startup-image-1242x2688.png",
    "revision": "1b2a8366bf612f688201a954f82acf50"
  },
  {
    "url": "static/img/apple-touch-startup-image-1334x750.png",
    "revision": "2d91cbb765fdcd6c8844d5bfd9e5b9f4"
  },
  {
    "url": "static/img/apple-touch-startup-image-1536x2048.png",
    "revision": "12088a9b5b2ab50d612cf910f877ab75"
  },
  {
    "url": "static/img/apple-touch-startup-image-1620x2160.png",
    "revision": "35b6d52d926ba1ca78d3c5c9d89a3478"
  },
  {
    "url": "static/img/apple-touch-startup-image-1668x2224.png",
    "revision": "bc43f2a3a5d47355e0d0734e643e5938"
  },
  {
    "url": "static/img/apple-touch-startup-image-1668x2388.png",
    "revision": "05785e157e98247b75256e12a0a9f356"
  },
  {
    "url": "static/img/apple-touch-startup-image-1792x828.png",
    "revision": "f5c038b98befe79e014cc1e38669cf0c"
  },
  {
    "url": "static/img/apple-touch-startup-image-2048x1536.png",
    "revision": "b16691db3d49b91b65b9a68f74e299a2"
  },
  {
    "url": "static/img/apple-touch-startup-image-2048x2732.png",
    "revision": "d1cd1f0a497d2bf95fdeb956a0337349"
  },
  {
    "url": "static/img/apple-touch-startup-image-2160x1620.png",
    "revision": "925d0295038d7ea25366357c1c948fe9"
  },
  {
    "url": "static/img/apple-touch-startup-image-2208x1242.png",
    "revision": "3f4268ed81f9fa2caa7f80d390a4388f"
  },
  {
    "url": "static/img/apple-touch-startup-image-2224x1668.png",
    "revision": "79c72b74363fa7401e8fe15d3e89d9d0"
  },
  {
    "url": "static/img/apple-touch-startup-image-2388x1668.png",
    "revision": "290c7f98ce165f70676733fde439cb91"
  },
  {
    "url": "static/img/apple-touch-startup-image-2436x1125.png",
    "revision": "cc91b42de6100be59c3f1b17d1f07c82"
  },
  {
    "url": "static/img/apple-touch-startup-image-2688x1242.png",
    "revision": "7afd49b7fcaafc90b962a7fc900e75cf"
  },
  {
    "url": "static/img/apple-touch-startup-image-2732x2048.png",
    "revision": "3c80c284168b9b8c87258531065f532a"
  },
  {
    "url": "static/img/apple-touch-startup-image-640x1136.png",
    "revision": "bef5521750b29b3bb51ff0211ea10809"
  },
  {
    "url": "static/img/apple-touch-startup-image-750x1334.png",
    "revision": "f1076f6d37190462e6d48df2304c417f"
  },
  {
    "url": "static/img/apple-touch-startup-image-828x1792.png",
    "revision": "6fbbad9e606ee2d1e080ecd91dcfabde"
  },
  {
    "url": "static/img/coast-228x228.png",
    "revision": "7252ccc5b0573c0d2f4e39aaa25c7f3d"
  },
  {
    "url": "static/img/favicon-16x16.png",
    "revision": "0ee3f98e4a2a1342f4e8018805e777a4"
  },
  {
    "url": "static/img/favicon-32x32.png",
    "revision": "33f1fc07dab93d7baaab02f8a7977630"
  },
  {
    "url": "static/img/favicon-48x48.png",
    "revision": "d352a713e6de3dbbccb60ee595c453fe"
  },
  {
    "url": "static/img/firefox_app_128x128.png",
    "revision": "97814ab02445b6eaa70ccc94287b9ca3"
  },
  {
    "url": "static/img/firefox_app_512x512.png",
    "revision": "7f6afb78526789399abb7d4171852a76"
  },
  {
    "url": "static/img/firefox_app_60x60.png",
    "revision": "a0ef0751f985796a4bff0ed96180a428"
  },
  {
    "url": "static/img/mstile-144x144.png",
    "revision": "5cdc2f933b5d657dea81cf7b7ba3adcb"
  },
  {
    "url": "static/img/mstile-150x150.png",
    "revision": "b305d46b799aa337fad2dd200ae0efe0"
  },
  {
    "url": "static/img/mstile-310x150.png",
    "revision": "782e0f135f3df71752349a8655cc4946"
  },
  {
    "url": "static/img/mstile-310x310.png",
    "revision": "38af91ca4ae03ea3a77c4faaddcf3d65"
  },
  {
    "url": "static/img/mstile-70x70.png",
    "revision": "a239ca4bcfd8da33471e839cd73684d6"
  },
  {
    "url": "static/img/yandex-browser-50x50.png",
    "revision": "dda6cdef5cec47b9a391af6458ff70bd"
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
    "revision": "f58ba17b65578c1b2113fe11447f9799"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "fd76ed432089fdceba8f407ab519ef2c"
  },
  {
    "url": "categories/debug/index.html",
    "revision": "1ec4ab2dd635e2673451971b4dc1106b"
  },
  {
    "url": "categories/index.html",
    "revision": "65d6677fcb3073f468dc888ab1c4bc93"
  },
  {
    "url": "categories/note/index.html",
    "revision": "895cefc94f64c0f953527d69b97249b6"
  },
  {
    "url": "categories/others/index.html",
    "revision": "c6fb5b2821441794b44262e35b41eb9e"
  },
  {
    "url": "index.html",
    "revision": "f157d41522ff321f91067d1013e11a7c"
  },
  {
    "url": "pages/about/index.html",
    "revision": "2cf76c07272d3bf1c4722836b4311dfc"
  },
  {
    "url": "pages/projects/index.html",
    "revision": "901e244c63a181f72a34611d1064fc8a"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/index.html",
    "revision": "3d269f97632cb283bfdb7fcef4047e1a"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/index.html",
    "revision": "790feef58b05d19a9ad7b244c2c43db6"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/index.html",
    "revision": "dfea0dc232a0806beba8b009b7bb4ada"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/index.html",
    "revision": "8dc5d26cc3adc4f27532c6dfba286c73"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/index.html",
    "revision": "1f8ba553a818fd0bf889eabd0c04e563"
  },
  {
    "url": "posts/2016/01/01/review-2015/index.html",
    "revision": "23b42c98aac26afff157c75229aeed81"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/index.html",
    "revision": "1a6a54833e834216731ba9a2a71086d0"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html",
    "revision": "7cdd7cc7e1fbba59238541d2887bd186"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/index.html",
    "revision": "0ae949eb96c686f5de335bebfba9ca04"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/index.html",
    "revision": "db8eb4f7dcfcff267cc61fb54d5736fc"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/index.html",
    "revision": "f80d81af1a63fb3102ec956610307462"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/index.html",
    "revision": "7e835c8b7a8c187a8c780bbf3090cdc2"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/index.html",
    "revision": "fb4559090a8a4195bc74be1fa50884bc"
  },
  {
    "url": "posts/2017/01/01/review-2016/index.html",
    "revision": "f2bde077e9da17753f0951586f03b403"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/index.html",
    "revision": "501ce4a54dfbaca13ec9856b0799c207"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/index.html",
    "revision": "9a75f7b8568e8892b6f4ce8a2ab548ce"
  },
  {
    "url": "posts/2018/01/01/review-2017/index.html",
    "revision": "de770b373224be8d9f098b793a66d11b"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/index.html",
    "revision": "06be2078c5c2f7b6d459cb43b6037628"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html",
    "revision": "3ab8cb80ce98f9d8899a36b508300b53"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/index.html",
    "revision": "32689369ef557072ae85fcc82f0ac073"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/index.html",
    "revision": "18623c77ac39a3080b15777122cf7f66"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/index.html",
    "revision": "6b196c1334054e638efa6f8c494e0272"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/index.html",
    "revision": "9bdf8d3b8eae02a7c05d0095d6fd9997"
  },
  {
    "url": "posts/2019/11/14/monorepo-practice-in-typescript-projects/index.html",
    "revision": "268ff0e77f2911b9c1e63ab4a42ebb53"
  },
  {
    "url": "posts/2020/01/28/review-2019/index.html",
    "revision": "e69c5342c7f30bff622f3174a2f6adf3"
  },
  {
    "url": "posts/2020/02/12/using-patch-package-patching-node-modules/index.html",
    "revision": "b5cba3dcec3c42a15731c3d0cf8dfb53"
  },
  {
    "url": "posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/index.html",
    "revision": "d2ca085974fea8ee6ec5f5fcc9bf3c20"
  },
  {
    "url": "posts/index.html",
    "revision": "478b9a805ecd50ecd62fe4d1f46de3a8"
  },
  {
    "url": "tags/actions/index.html",
    "revision": "d74ddab7b097a79a4ed7a7cb62c32ecf"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "84b4fddfd5994fa9209d4a3f80b6ef6f"
  },
  {
    "url": "tags/angularjs/index.html",
    "revision": "3812668503fb8cec0021c513dc7f75d1"
  },
  {
    "url": "tags/apache/index.html",
    "revision": "4ba6b8d3a97fd15c4848d39807ee616d"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "b6fc1caf9b9ea04e2c11271455d347a2"
  },
  {
    "url": "tags/ci/index.html",
    "revision": "9bf16c5aae62a1adbc67393f33fe696b"
  },
  {
    "url": "tags/diary/index.html",
    "revision": "4636f871bf37ba32a714c83ae0429106"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "77d9e540bfd4d770782b988b6ef54b61"
  },
  {
    "url": "tags/extjs/index.html",
    "revision": "9ca7df2b8acdae8523cf9a00f3e1b8ca"
  },
  {
    "url": "tags/github/index.html",
    "revision": "09ed008e7b17ac1dda6cbcf2972869ab"
  },
  {
    "url": "tags/google/index.html",
    "revision": "1acc5316d1bc26a2e7e9c17172b37a09"
  },
  {
    "url": "tags/gulp/index.html",
    "revision": "a3600ec3171bb3e840f949f9abc4d201"
  },
  {
    "url": "tags/hadoop/index.html",
    "revision": "dcf95c923abc2ccea3d22562f303e8fd"
  },
  {
    "url": "tags/index.html",
    "revision": "0aa97908ae83a0f6b47ea3d3508b25e1"
  },
  {
    "url": "tags/intellij-idea/index.html",
    "revision": "26161c8c3a9773caa28af8b46f2e470f"
  },
  {
    "url": "tags/java/index.html",
    "revision": "fe769f09f9a61bb09b17b5f16d34903c"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "92cd5150108bd8cc71cd93ba30cec092"
  },
  {
    "url": "tags/jawr/index.html",
    "revision": "d50e8a1a81108ec0e4375045eb82b9f0"
  },
  {
    "url": "tags/jest/index.html",
    "revision": "feca19965893df81a085a4595da639f3"
  },
  {
    "url": "tags/jsf/index.html",
    "revision": "1e39604b4d8e4820fe92534a13c0f2f5"
  },
  {
    "url": "tags/karma/index.html",
    "revision": "47a286892642d31c851b0204267c6871"
  },
  {
    "url": "tags/lerna/index.html",
    "revision": "aee541d2456d5e8ff637e48ee164e857"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "42eaa56a2ecdb97ae3b71fcb77bd4c33"
  },
  {
    "url": "tags/monorepo/index.html",
    "revision": "29d3045bbed8b674202c8a8fee0c2d5c"
  },
  {
    "url": "tags/node/index.html",
    "revision": "bed7326465cf0799ba4f962743ae2112"
  },
  {
    "url": "tags/npm/index.html",
    "revision": "36f7d1a4aeb7ec43a27338cdd94544b0"
  },
  {
    "url": "tags/oracle/index.html",
    "revision": "3c0bb9647fb10e1d4ca716e760419ff7"
  },
  {
    "url": "tags/pwa/index.html",
    "revision": "5d554367f770280a16e345131ec24f24"
  },
  {
    "url": "tags/renovate/index.html",
    "revision": "57f6dc7631dab8101c5c87aa48b99a94"
  },
  {
    "url": "tags/security/index.html",
    "revision": "106d83d5b3f9cf7c03c3d11d71e82bdf"
  },
  {
    "url": "tags/shiro/index.html",
    "revision": "c0266ae92a2225257d02907cc6d5f4eb"
  },
  {
    "url": "tags/site/index.html",
    "revision": "5ce1f3e2ce529be82310ef3305b88b99"
  },
  {
    "url": "tags/spring/index.html",
    "revision": "17b50c19d80cd5de9d6bb22802149f0c"
  },
  {
    "url": "tags/springmvc/index.html",
    "revision": "446935e6f37c8e00d02d5553cc2458e9"
  },
  {
    "url": "tags/travisci/index.html",
    "revision": "5deb0e423b98c3437549b3e6fcf58d63"
  },
  {
    "url": "tags/trips/index.html",
    "revision": "edb6ccb1b83ce09d1d01fdb2ef90070a"
  },
  {
    "url": "tags/typescript/index.html",
    "revision": "eefa4e015031cdb565264f996dd28d08"
  },
  {
    "url": "tags/ubuntu/index.html",
    "revision": "a1e9ddae6e891e1e94c522076b858bca"
  },
  {
    "url": "tags/vps/index.html",
    "revision": "9957bb05b42eb286500aa77609eec674"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "fcb0fb74e90f33cbb6a92601fdb5cd1b"
  },
  {
    "url": "tags/webpack/index.html",
    "revision": "2921d0c2e2f6828da948900a724f174b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
