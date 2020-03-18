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
    "url": "404.html",
    "revision": "ac770cb239285e23768c869b355bd206"
  },
  {
    "url": "api/categories.json",
    "revision": "5997f2d4611337ee042d2ad1bd0ec5bb"
  },
  {
    "url": "api/categories/blog.json",
    "revision": "526d7482d23723253eeb7db76be21460"
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
    "revision": "cecb34c2455a7df95052720060dd5c78"
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
    "revision": "69af21c750bf89badb0bc8f20e86d283"
  },
  {
    "url": "api/posts/2015/10/25/apache-shiro-spring-integration.json",
    "revision": "c271aafe7682dc74827ca368b5dc6568"
  },
  {
    "url": "api/posts/2015/11/10/beanutils-vs-reflection.json",
    "revision": "481909c92fe069a7eefcdfbc78896932"
  },
  {
    "url": "api/posts/2015/12/13/ubuntu-mean-development-environment-setup.json",
    "revision": "697a52c6bbbb318546d2dd0332077774"
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
    "revision": "1f3cfb684eea1711f4559c7b60111ae2"
  },
  {
    "url": "api/posts/2016/01/11/nodejs-oracledb-install-on-rhel-6.json",
    "revision": "852ea0ff3a44f263cd0982b14a9d732f"
  },
  {
    "url": "api/posts/2016/01/12/nodejs-oracledb-ora-21561-solution.json",
    "revision": "483e7f9081c6e0561b0cc814d462938d"
  },
  {
    "url": "api/posts/2016/03/06/site-code-structure.json",
    "revision": "f70a7b5b3954f6cca286667d31840d4b"
  },
  {
    "url": "api/posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide.json",
    "revision": "a5479076a99d505174e34f5ede05f198"
  },
  {
    "url": "api/posts/2016/04/10/google-codejam-2016-qualification-round.json",
    "revision": "31a22d89be03a126f1aef96faf37e03b"
  },
  {
    "url": "api/posts/2016/04/30/angular-ui-performance-tuning-experience.json",
    "revision": "921848498ce597c7bcdd196d532557a4"
  },
  {
    "url": "api/posts/2016/07/05/move-to-new-apartment.json",
    "revision": "63d215ad31ad8f691f92e6ea670d9994"
  },
  {
    "url": "api/posts/2017/01/01/review-2016.json",
    "revision": "de59c73602a1821f2c448d6e216cbd5c"
  },
  {
    "url": "api/posts/2017/03/12/new-version-blog-migration.json",
    "revision": "0ab38dcd047f0a073291e44327c8e066"
  },
  {
    "url": "api/posts/2017/05/05/vue-version-for-blog-app.json",
    "revision": "31a607bff403a84b7bd25ed899f6fff0"
  },
  {
    "url": "api/posts/2018/01/01/review-2017.json",
    "revision": "64fc0881df6c997e98c72941038d83dc"
  },
  {
    "url": "api/posts/2018/03/03/latest-update-on-blog-app.json",
    "revision": "df00a8ee8cc80b0ba4ad611c22bc82f0"
  },
  {
    "url": "api/posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution.json",
    "revision": "d524d398013309974ff7105007dcb0ca"
  },
  {
    "url": "api/posts/2018/04/01/karma-jawr-development-note.json",
    "revision": "6edcc355093b4d4b480432642bee1e26"
  },
  {
    "url": "api/posts/2019/07/07/github-actions-overview-and-practice.json",
    "revision": "1f9ba960bed4da86568a51feffe81631"
  },
  {
    "url": "api/posts/2019/07/23/travel-in-beijing.json",
    "revision": "d5ac20cfb0a752195e5a3dab860a9ec0"
  },
  {
    "url": "api/posts/2019/08/18/github-actions-new-yaml-syntax.json",
    "revision": "6650ee24b5cee21a9380b709ef73eabb"
  },
  {
    "url": "api/posts/2019/11/14/monorepo-practice-in-typescript-projects.json",
    "revision": "974c8836005b19d889f3850e0b6b3874"
  },
  {
    "url": "api/posts/2020/01/28/review-2019.json",
    "revision": "cbdecee3993b2588014ac84b6ec8b679"
  },
  {
    "url": "api/posts/2020/02/12/using-patch-package-patching-node-modules.json",
    "revision": "ccf5e09d6cb1b034dbe0c283cbfda097"
  },
  {
    "url": "api/posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate.json",
    "revision": "872b19a4505c555eec10d8ee6462a388"
  },
  {
    "url": "api/posts/2020/03/15/dot-ignore-management-for-npm-package.json",
    "revision": "5233d15253c5d6b72df788ccffee2b0c"
  },
  {
    "url": "api/profile.json",
    "revision": "a5d932d01e2bea6bc56e379b0937c9b7"
  },
  {
    "url": "api/tags.json",
    "revision": "4ab1b2fbfdad9681899f224a635fe386"
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
    "url": "api/tags/git.json",
    "revision": "8749b6b4677f74024f1b71f9efd77f59"
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
    "revision": "04f39cf10ef738c6e74fdab4269b3150"
  },
  {
    "url": "api/tags/npm.json",
    "revision": "a5c2738eeedd3852b72f8a8c0556b259"
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
    "url": "categories/blog/index.html",
    "revision": "94fead5c646ea7e2fa0d94f75a11ab09"
  },
  {
    "url": "categories/debug/index.html",
    "revision": "c3f7131301cd42f6c1b47d505b0163f0"
  },
  {
    "url": "categories/index.html",
    "revision": "44b682ce6a4ce3e3a5bd0e074fc97601"
  },
  {
    "url": "categories/note/index.html",
    "revision": "d4d7fc0d2dd1d82446afcc76a2ae5d9f"
  },
  {
    "url": "categories/others/index.html",
    "revision": "1ec992ad6cfd898b0a3b2f71acca2427"
  },
  {
    "url": "index.html",
    "revision": "87eced0d36444ab9f14d90069d17bef7"
  },
  {
    "url": "pages/about/about.webp",
    "revision": "414c4c6470c1f35156963c0427f97d4e"
  },
  {
    "url": "pages/about/index.html",
    "revision": "3405051101a4962174dfe0a9816686ae"
  },
  {
    "url": "pages/projects/index.html",
    "revision": "90f41e8b4063a2cf5ac84c61b6206b6d"
  },
  {
    "url": "pages/projects/projects.webp",
    "revision": "3854088a748a9cf8ee07e75e00a7ab92"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/cover.webp",
    "revision": "f7899b4ddf1f5ae1d53df8f4b00d1089"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/index.html",
    "revision": "1e50f32f8cb5b94b7d71cca9ad02df3d"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/cover.webp",
    "revision": "27d279d60cf8f2f3f3c5ef160228a7e2"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/index.html",
    "revision": "e08794f7ad92c52653f8dc64e48cf3f4"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/method-executing-time.webp",
    "revision": "de249effaf0897b3d42b2dcd003f7e90"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/add-app-launch-icon.webp",
    "revision": "7ec3862f288fdaa3d8dcf67eb87358c3"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/add-oracle-cli-global-env-var.webp",
    "revision": "973711f94005d774cb8b66934f64d021"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/check-run-configuration.webp",
    "revision": "541e18fac27c3a6d3f92845da936634d"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/config-jdk-path.webp",
    "revision": "c5ee1a17abc3b9f70127ad3605d91cb5"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/cover.webp",
    "revision": "82b11d8da0d24e605f641b00fc17e1f4"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/index.html",
    "revision": "c43021bc100feb99b2233d2862d1d8fa"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/update-nodejs.webp",
    "revision": "e99152e447936ba8ba4266c923d10206"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/cover.webp",
    "revision": "42c0728306c074aa92934b455a33c6f8"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/index.html",
    "revision": "24593680add9f22d4664207b8c85147e"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/cover.webp",
    "revision": "bc8df919c42129d27e82cf802a76e5db"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/index.html",
    "revision": "6353ae6560b8137a6e56e208c7ecd31d"
  },
  {
    "url": "posts/2016/01/01/review-2015/cover.webp",
    "revision": "a9baf6ab46fc8631bfa2fa1d7a2ac950"
  },
  {
    "url": "posts/2016/01/01/review-2015/graduaction-more.webp",
    "revision": "20a4ab3727e3fd86aec06d3608602bcf"
  },
  {
    "url": "posts/2016/01/01/review-2015/graduaction.webp",
    "revision": "308f0ce3c55a48b8994b77e6aaec720d"
  },
  {
    "url": "posts/2016/01/01/review-2015/index.html",
    "revision": "eebbd4e2477d4cc594c9931e764254bb"
  },
  {
    "url": "posts/2016/01/01/review-2015/rmbp.webp",
    "revision": "a058add589ab8b9135a4b382b82508e8"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-1.webp",
    "revision": "4b56f7ab6fb3d673bbbfc06f14478c17"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-2.webp",
    "revision": "5bf3975e2cbaae85d6c745766fb97988"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-3.webp",
    "revision": "ce315bcc2cd784faa7f11fc21fa07c0b"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-4.webp",
    "revision": "3a0c89c40828478d826ac0e70b0ea584"
  },
  {
    "url": "posts/2016/01/01/review-2015/room-5.webp",
    "revision": "d354413a6b4efce07c7d3559ef2fcbcd"
  },
  {
    "url": "posts/2016/01/01/review-2015/team-3-ita.webp",
    "revision": "64d4667e214e87e10f975ad638da909f"
  },
  {
    "url": "posts/2016/01/01/review-2015/unboxing-macbook.webp",
    "revision": "121806d45048a0f04cd13f145cd3d2a2"
  },
  {
    "url": "posts/2016/01/01/review-2015/wechat-open-account.webp",
    "revision": "978970425c26004ee8743bd1c9b0ce2b"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/cover.webp",
    "revision": "c72cc5ad291f7ce4495f7c93c4b0cb93"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/index.html",
    "revision": "6231f68ea477bb404a992b1a048e4b99"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/cover.webp",
    "revision": "37910666b2efdaf400b00d2061f4c41a"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html",
    "revision": "ffd3b8f6f8a40563176e1b04d1f7fdc2"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/update-centos-hosts.webp",
    "revision": "f03889a93d4c73dab419d04d81565d31"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/build-flow.webp",
    "revision": "ffbfdff8b8c2d81585449e1eb8bcc15f"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/cover.webp",
    "revision": "bc6a909f7309631a6b03aecd82c17467"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/index.html",
    "revision": "ddbe52bcc9552f8bb145802bc4e3cad7"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/cover.webp",
    "revision": "05618758af7e7de5158210b13e1b6977"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/data-node-information.webp",
    "revision": "591c0a0b385748771caa712abb9ff618"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/index.html",
    "revision": "46dd841b2f0b33f054d32b9b59498989"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/nodes-of-the-cluster.webp",
    "revision": "95426cb7d06416d7470401045fdb7e43"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/cover.webp",
    "revision": "4be1e4140b27f7f5a0898f0ce3f1d501"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/index.html",
    "revision": "b2db7ed59d2f49f12f3493bf66e286a5"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/cover.webp",
    "revision": "82c34fe6dc24d269af222c5886cb5557"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/index.html",
    "revision": "7c4424c4aef30e44628d4ad6c4214d93"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/notification.webp",
    "revision": "70e3a03015686c5d3d9d517b2b1ed007"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/performance.webp",
    "revision": "4c957a7c5807674b1b25b15e007d7881"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/bed.webp",
    "revision": "e7720cf9a75db38e575a7aebdda8cbb8"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/bedroom.webp",
    "revision": "e5ee0679cb0e23122cc9c0246332629f"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/clothes.webp",
    "revision": "88bc8f3b4253e34a3f231c9ad1d950fc"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/cover.webp",
    "revision": "67063e4930321488a04e57dfba0bc4b9"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/depracted-desktop.webp",
    "revision": "bda9b7c400a8ce2c2ce4e8f8b759659f"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/desktop-installation.webp",
    "revision": "85081ecbd048ffddb6c4848fc698d52d"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/desktop.webp",
    "revision": "a4b28cb611ffae746279252c69738ee5"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/index.html",
    "revision": "07ef3885e87daf367bf4d6a12dd6a475"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/kitchen.webp",
    "revision": "245ef36deea7090514346a72bcfab388"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/meeting-room.webp",
    "revision": "4e6a24c1f3ac768d3f063a3fcd73c856"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/passing-route-updated.webp",
    "revision": "a3b62b7d4661ff5dbbdb8f9cd83a588e"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/passing-route.webp",
    "revision": "4e8363e87ff0ef8c282623b8052676c4"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/room-architecture.webp",
    "revision": "69c7a26d870bb2310a5e2b95ea860e19"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/see-sea.webp",
    "revision": "d02c98376456067aed5299114ae6f526"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/sunroom.webp",
    "revision": "8edba420019da44429ef1ef066e1921b"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/wakatime-total.webp",
    "revision": "52a63e4b1e37c041cb6ed2bf85449039"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/wakatime.webp",
    "revision": "9d08ab6cf95c67c8e5497a5333cd00ca"
  },
  {
    "url": "posts/2017/01/01/review-2016/cover.webp",
    "revision": "19aca6f9dc888644bc76d441da0c86f3"
  },
  {
    "url": "posts/2017/01/01/review-2016/hardware-info.webp",
    "revision": "17f4be951155dfbd2fa663f44c7fd16d"
  },
  {
    "url": "posts/2017/01/01/review-2016/index.html",
    "revision": "09ea0a11b6cdd9b6db17fcce61fff29f"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/add-shortcut.webp",
    "revision": "c933f777cbdb5dc55fa06adff69f69cb"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/cover.webp",
    "revision": "9de8be83abd1952fb112c73079c55711"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/desktop-version-shortcut.webp",
    "revision": "e2475c73b6be148ba060e15a9b4ccb81"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/index.html",
    "revision": "7d4e6c44fdcb2b82305b7c089ab8dcbd"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/launching.webp",
    "revision": "4071e85ed69390fcb79dd56bd0d13dfd"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/shortcut.webp",
    "revision": "dd28ed39982e50b21c57d1f2ba00b155"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/cover.webp",
    "revision": "9cec7f77f285e0b345657fff32cdf189"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/index.html",
    "revision": "7db01434a737064dbce377c430466d59"
  },
  {
    "url": "posts/2018/01/01/review-2017/cover.webp",
    "revision": "192a5a50789e7bb15de8469aad1e7047"
  },
  {
    "url": "posts/2018/01/01/review-2017/index.html",
    "revision": "2cc2e04befd48b6a513f0ce128965938"
  },
  {
    "url": "posts/2018/01/01/review-2017/macbook-pro.webp",
    "revision": "d7ab2a9e891594c3aff55bfd3c7290dc"
  },
  {
    "url": "posts/2018/01/01/review-2017/mdr-1000x.webp",
    "revision": "0a1f5a3eaf461a951e8d4ce2bba90ca4"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/benchmark-blog-website.webp",
    "revision": "309fc307b2f984c40b02ecbef70dd5e2"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/blog-resource-transfer-time.webp",
    "revision": "a6d7dc00ab41be0f1a6e87f4211715af"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/cover.webp",
    "revision": "1e76915b3466a58bb7242ed79cdbf228"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/index.html",
    "revision": "212e186aefda9feeac50370b724ec62b"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/cover.webp",
    "revision": "c1566bac5de28dc40a0c1506a1107ce7"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html",
    "revision": "db852b23da591cf6dac9d6c199ff7870"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/karma-jawr-generated-index.webp",
    "revision": "ffe4011649708c90baed2f4b7e7aa21e"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/cover.webp",
    "revision": "ea9f7743b2cd84574cd22ed25942b149"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/index.html",
    "revision": "00701b6e02004cc6a26eef312eeebd19"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/create-release.webp",
    "revision": "79cabe1ec1e52c944c79da0c2b6e6a47"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/github-actions.webp",
    "revision": "0cc8fb75d850e328ce1bdb9baba80e0b"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/github-official-actions-repo.webp",
    "revision": "477605f82400f608545e3c8d08a3d807"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/index.html",
    "revision": "0b2fd1bc4cc8131a25946835abae2833"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/trigger-release-workflow.webp",
    "revision": "118070ef6ecb23b333188f5055a29b95"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-ci-overview.webp",
    "revision": "593501b6abebdb69a419e8202e963d2d"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-editor-example.webp",
    "revision": "1813366eaa17f6e019c1006fd30a61d8"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-example.webp",
    "revision": "e9c3eaef7f939a77ddad6284f3d86807"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/workflow-syntax-highlight.webp",
    "revision": "b845cce847a78b18ca5c6e35b9a0dc21"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/bird-nest-show.webp",
    "revision": "f8d0b4f6652d1451235ccf1e5a852b8b"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/bird-nest.webp",
    "revision": "96d1bcec2c67015d8cd5116b4c6a4d6e"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/great-wall-01.webp",
    "revision": "2c2ea1bfa858164937034796b48e4745"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/great-wall-02.webp",
    "revision": "3e063515d4998f7f4d98bb6efe6a475d"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/great-wall-03.webp",
    "revision": "61b7b4e82b27d3423b93647afcc90dc0"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/index.html",
    "revision": "6696b809e101b74017b07fb2ca7422c1"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/msra.webp",
    "revision": "a6ba99941ffbe026a09b995e45fca9ad"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-01.webp",
    "revision": "b7b9516065fc6dab7fee4bddba9bb804"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-02.webp",
    "revision": "ca598dbd702bd95c0465a3333329b486"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-03.webp",
    "revision": "480f7329129edcb1bdfd34d7f183f23a"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-04.webp",
    "revision": "cbd7e6af14b45b002a4a3d9a33dd708e"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/palace-museum-05.webp",
    "revision": "4abbdb640e39e46c3a2520654fa79946"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/pku-untitled-lake.webp",
    "revision": "5d7406532a4b5af864ce8c3a706a9bbf"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/water-m3.webp",
    "revision": "489c7da2b7814ff8a691b1447b69235a"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/build-log-highlight-support.webp",
    "revision": "51c049e803384d402986160009af2d93"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/index.html",
    "revision": "978c34e6433dee5c748c7dc1460778b2"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/migrating-github-actions.webp",
    "revision": "0d85ce989bedf5ed9d5010f1eb97064b"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/select-sample-workflow-for-npm.webp",
    "revision": "08647ee4856f25ff6467ad7a1f6471cd"
  },
  {
    "url": "posts/2019/11/14/monorepo-practice-in-typescript-projects/cover.webp",
    "revision": "5972a2b30409ff8ea98aefd658f679f6"
  },
  {
    "url": "posts/2019/11/14/monorepo-practice-in-typescript-projects/index.html",
    "revision": "5f7d17e1db240d276faabaef6c668dac"
  },
  {
    "url": "posts/2020/01/28/review-2019/cover.webp",
    "revision": "d31fe316bda1a37a3b8262c359ef0b07"
  },
  {
    "url": "posts/2020/01/28/review-2019/index.html",
    "revision": "076b7549f384d46a6947ec911de41cd0"
  },
  {
    "url": "posts/2020/01/28/review-2019/movement.webp",
    "revision": "414c4c6470c1f35156963c0427f97d4e"
  },
  {
    "url": "posts/2020/02/12/using-patch-package-patching-node-modules/cover.webp",
    "revision": "63078ecf97da8ff1d2e5a6e60ffdd814"
  },
  {
    "url": "posts/2020/02/12/using-patch-package-patching-node-modules/index.html",
    "revision": "0b575c046a0357dfc31b0f69c9ce727e"
  },
  {
    "url": "posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/index.html",
    "revision": "c3dd1140f179ca84f6d819914313efa8"
  },
  {
    "url": "posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/revonate-circleci-docker-image-support.webp",
    "revision": "a75f6754f1d91840199f7441990c5583"
  },
  {
    "url": "posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/revonate-setup-pull-request.webp",
    "revision": "55b434b3e7479e71e38e0ec9ee4516c2"
  },
  {
    "url": "posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/revonate.webp",
    "revision": "7727e6936b150ed77fea4325249f2664"
  },
  {
    "url": "posts/2020/03/15/dot-ignore-management-for-npm-package/gitignore.webp",
    "revision": "8cce1457913d6147e504374fa9835652"
  },
  {
    "url": "posts/2020/03/15/dot-ignore-management-for-npm-package/index.html",
    "revision": "1d9e64c2d6f18256ffc57bf8ae9fd88d"
  },
  {
    "url": "posts/index.html",
    "revision": "14072e381662177871f77dc2eaf55a18"
  },
  {
    "url": "static/css/detail.7db8822e8a85bbfa2e39.css",
    "revision": "4784b90b225073ce134e8667e56c6cfc"
  },
  {
    "url": "static/css/main.0a3c56d6c26e214343db.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "static/css/vendors.ab056999155a1ac3445b.css",
    "revision": "2af97cf84b103023b4cb97daff882b9e"
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
    "url": "static/img/manifest.json",
    "revision": "9c64b9ed3bbc8cc31b9e55e167cd3bc7"
  },
  {
    "url": "static/img/yandex-browser-manifest.json",
    "revision": "6eaeb3a52648e7bfc85f7acead8be878"
  },
  {
    "url": "static/js/detail.7db8822e8a85bbfa2e39.js",
    "revision": "8a273ea134ac4bf6a24a103654eb64c6"
  },
  {
    "url": "static/js/main.0a3c56d6c26e214343db.js",
    "revision": "a3c37413de623374945f210769660313"
  },
  {
    "url": "static/js/vendors.ab056999155a1ac3445b.js",
    "revision": "2f4cb4d57839e2676931f152d0362325"
  },
  {
    "url": "tags/actions/index.html",
    "revision": "86c984e06a861fb9fdc81fe30de81d9c"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "f75d768516dd47c4e9ee317f6f0e944c"
  },
  {
    "url": "tags/angularjs/index.html",
    "revision": "6e236d1d3ab4374c0356e7dd68fa2dfb"
  },
  {
    "url": "tags/apache/index.html",
    "revision": "c6508d32385a98f7de9ad049b0829348"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "c004f3e2ee2690fca5197ef32a89703d"
  },
  {
    "url": "tags/ci/index.html",
    "revision": "ab761c64243d7246e6b0cfd22450c45a"
  },
  {
    "url": "tags/diary/index.html",
    "revision": "a2cbe63b6339ad41e1501f01eb5e026c"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "33a4117d7171612b11c69a104f36130a"
  },
  {
    "url": "tags/extjs/index.html",
    "revision": "650e9228bb07b7c40cfa69cd9b85685b"
  },
  {
    "url": "tags/git/index.html",
    "revision": "76dd60e5c6b6a81b89e206b443124caa"
  },
  {
    "url": "tags/github/index.html",
    "revision": "419b76f6d819daa9441cbca02a70d17c"
  },
  {
    "url": "tags/google/index.html",
    "revision": "a90c8eb112dc85af55bfbaecd010c254"
  },
  {
    "url": "tags/gulp/index.html",
    "revision": "84c819f4a939f31dbb7c2bef489f9cde"
  },
  {
    "url": "tags/hadoop/index.html",
    "revision": "91c0ca1d7db0f970116430bbe2671055"
  },
  {
    "url": "tags/index.html",
    "revision": "aa88ac959ed158cf6bacaf5cc40a6698"
  },
  {
    "url": "tags/intellij-idea/index.html",
    "revision": "ebeed8a84f7893ad3ceb34bdfc5306c7"
  },
  {
    "url": "tags/java/index.html",
    "revision": "9ccf8855b6c5d04177105f2da63f8e36"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "164f47738a6f9d774f1ff1f0531892ba"
  },
  {
    "url": "tags/jawr/index.html",
    "revision": "9e4b4f73a9b4263806bf4eb42b745d72"
  },
  {
    "url": "tags/jest/index.html",
    "revision": "d842ef6bf167861a6f814806b10426d2"
  },
  {
    "url": "tags/jsf/index.html",
    "revision": "384bb9fd9729b613d361e16874adfb8d"
  },
  {
    "url": "tags/karma/index.html",
    "revision": "7f4f2bcad74222244e22eb2480e1e461"
  },
  {
    "url": "tags/lerna/index.html",
    "revision": "8dbfc98f7d8ac793cd19e31d4133cd0a"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "09ac0c119280c76f73745c5985000184"
  },
  {
    "url": "tags/monorepo/index.html",
    "revision": "488cb674ede0816d04b64c86e6d05568"
  },
  {
    "url": "tags/node/index.html",
    "revision": "0fd45061a234047f89f1563dcd0820a3"
  },
  {
    "url": "tags/npm/index.html",
    "revision": "a37cb060975ab1faf7562cb82407dbb5"
  },
  {
    "url": "tags/oracle/index.html",
    "revision": "058938b808da6fb9912a0bbea9aff23c"
  },
  {
    "url": "tags/pwa/index.html",
    "revision": "a523a254b581de1fa616440c6320043e"
  },
  {
    "url": "tags/renovate/index.html",
    "revision": "aece9c02bf40e0fb449a177c52f8bfe2"
  },
  {
    "url": "tags/security/index.html",
    "revision": "560eeb9441f73929c14b017e774967b7"
  },
  {
    "url": "tags/shiro/index.html",
    "revision": "4f71539c6247988f31beb5d6ef4da296"
  },
  {
    "url": "tags/site/index.html",
    "revision": "7090f92016d962388b9cc54903df81bc"
  },
  {
    "url": "tags/spring/index.html",
    "revision": "96d443f49ef4ad4405f505bec5a1e688"
  },
  {
    "url": "tags/springmvc/index.html",
    "revision": "77397a66460df9ef10dec6c16e96fd27"
  },
  {
    "url": "tags/travisci/index.html",
    "revision": "380e8ed91844a8c81a68207a7a7162af"
  },
  {
    "url": "tags/trips/index.html",
    "revision": "cb4bf4fba139ffcd89a5f064e8113fca"
  },
  {
    "url": "tags/typescript/index.html",
    "revision": "5b91b146f305f3da11d73433a28d5c74"
  },
  {
    "url": "tags/ubuntu/index.html",
    "revision": "efe2777fcb274093ae51182243d62e7e"
  },
  {
    "url": "tags/vps/index.html",
    "revision": "36ff8b297721ca70298ae3a64b76ad98"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "d74017070b882412de903917c4435868"
  },
  {
    "url": "tags/webpack/index.html",
    "revision": "a9bf7b33283ceb713be83c6cc470ea89"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
