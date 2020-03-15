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
    "revision": "48088f55fd1d2dafbc4fc7e71d63de50"
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
    "revision": "e1480b6d9e090cfb2548a3de29ff2f7e"
  },
  {
    "url": "categories/debug/index.html",
    "revision": "ecae150abbab49978af5a642032cd822"
  },
  {
    "url": "categories/index.html",
    "revision": "2837a656195c4980360678d695192b1c"
  },
  {
    "url": "categories/note/index.html",
    "revision": "6fb8101b78445293aece4a6535bf519b"
  },
  {
    "url": "categories/others/index.html",
    "revision": "5ee332c6c8f5c38926dccf4cc9a705b3"
  },
  {
    "url": "index.html",
    "revision": "9fcaa51fca5715b5d9494b540885acd6"
  },
  {
    "url": "pages/about/about.webp",
    "revision": "414c4c6470c1f35156963c0427f97d4e"
  },
  {
    "url": "pages/about/index.html",
    "revision": "016a53a412c6769f2cd793c7ae90f02c"
  },
  {
    "url": "pages/projects/index.html",
    "revision": "3c5c18415596eeee37c706306975677e"
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
    "revision": "2a2ad7b59de5c4cc608601702425aa81"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/cover.webp",
    "revision": "27d279d60cf8f2f3f3c5ef160228a7e2"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/index.html",
    "revision": "e7c8026fc22de73336ee4d632fe038bb"
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
    "revision": "9497008745dc1f7f27aa640a00b5ac19"
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
    "revision": "0c3e3827262086b10312b9628a8a282b"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/cover.webp",
    "revision": "bc8df919c42129d27e82cf802a76e5db"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/index.html",
    "revision": "3b1eb98a4ce044023454d0d2ef14addf"
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
    "revision": "e2f1feb1175798cedbcba44a9a667777"
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
    "revision": "93f30b344d19eb0f861763d2db452652"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/cover.webp",
    "revision": "37910666b2efdaf400b00d2061f4c41a"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html",
    "revision": "fd21e0cd92cd58d6334f09ecee25e26d"
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
    "revision": "291bd9245ecdfba00dfe415779a73fa2"
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
    "revision": "6746e33687a14a99060f6de1da2335a4"
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
    "revision": "2a1d721a7bc94f158c0871a2967ebac5"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/cover.webp",
    "revision": "82c34fe6dc24d269af222c5886cb5557"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/index.html",
    "revision": "4993ef7e03d15e0c69b282d352068982"
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
    "revision": "a108b1cd009fb6484e683e433c01f926"
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
    "revision": "aea7756360186db65270ae2f2fb0d929"
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
    "revision": "e19e3ea4abb5f526e1e02406353ffe94"
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
    "revision": "c70e23eaa59eeffb156a1a2ce01911c8"
  },
  {
    "url": "posts/2018/01/01/review-2017/cover.webp",
    "revision": "192a5a50789e7bb15de8469aad1e7047"
  },
  {
    "url": "posts/2018/01/01/review-2017/index.html",
    "revision": "85b5a003833d7117cc705a461f46503c"
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
    "revision": "40c18ef0c4ba46b9a034f939542e4997"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/cover.webp",
    "revision": "c1566bac5de28dc40a0c1506a1107ce7"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html",
    "revision": "531c51eda2e9ebf8b6b56d4520117b60"
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
    "revision": "dff52c353c4c4359ceb3282820de65b3"
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
    "revision": "7ae51966b85f32476e159f0a0afb461b"
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
    "revision": "f1a58fe02fcc825a6f6c1060de14cdca"
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
    "revision": "d9bb9b37304ecf16ab724171ceae6ad1"
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
    "revision": "05a92c0870e91266512bac222dbcc65e"
  },
  {
    "url": "posts/2020/01/28/review-2019/cover.webp",
    "revision": "d31fe316bda1a37a3b8262c359ef0b07"
  },
  {
    "url": "posts/2020/01/28/review-2019/index.html",
    "revision": "3f420e59b2bf078b04b48ca6760fec58"
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
    "revision": "8216924f912b037810350ef1f8616009"
  },
  {
    "url": "posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/index.html",
    "revision": "2f1a27392d83ae22b3c176c623a68b18"
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
    "revision": "97c7792623d2a4a74af54ccf0a5f2c95"
  },
  {
    "url": "posts/index.html",
    "revision": "b56f9afaf504e4afa9b1f3a6872f3f31"
  },
  {
    "url": "static/css/detail.4f94a8315f4dac8c0424.css",
    "revision": "4784b90b225073ce134e8667e56c6cfc"
  },
  {
    "url": "static/css/main.b636f5f36c2526a2f168.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "static/css/vendors.9ed8ed5cc27a92a4084a.css",
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
    "revision": "cac873dc1ea09011c747fdd55271866b"
  },
  {
    "url": "static/js/detail.4f94a8315f4dac8c0424.js",
    "revision": "45572cec4d8fe99e01070c08312788e6"
  },
  {
    "url": "static/js/main.b636f5f36c2526a2f168.js",
    "revision": "0fae50de0af14f6f62cb095fdad9bcd3"
  },
  {
    "url": "static/js/vendors.9ed8ed5cc27a92a4084a.js",
    "revision": "d341014d5c34335ef95d63971adab3a0"
  },
  {
    "url": "tags/actions/index.html",
    "revision": "72a7924a89c12550b076852a7beddac5"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "98b9849db3b51d05435ef41c98bb0b17"
  },
  {
    "url": "tags/angularjs/index.html",
    "revision": "4724164124296b2d9a22fa66ea3a4b84"
  },
  {
    "url": "tags/apache/index.html",
    "revision": "cbba865edb79d56ec417abf6fea23483"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "9a9c79c6a7defab8a0a542a492765789"
  },
  {
    "url": "tags/ci/index.html",
    "revision": "d39ffccdb6c03412b5d081ce6c398811"
  },
  {
    "url": "tags/diary/index.html",
    "revision": "8f90141c4c8dfa899f278bbbaebdb13e"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "1c2c186798d37c7979bb0a6fc203549f"
  },
  {
    "url": "tags/extjs/index.html",
    "revision": "9d716d3b6217dcb7ea8730ecc8b50a5f"
  },
  {
    "url": "tags/git/index.html",
    "revision": "00441ecc108ef3608c9aa23548d61c29"
  },
  {
    "url": "tags/github/index.html",
    "revision": "0313c8f44f365f70662a047dfa942916"
  },
  {
    "url": "tags/google/index.html",
    "revision": "d17ab6ebc2e68a90dfd659e0ab627dc5"
  },
  {
    "url": "tags/gulp/index.html",
    "revision": "ff1c36fded1acab2a8c78884f72ad3f2"
  },
  {
    "url": "tags/hadoop/index.html",
    "revision": "6a0cb608886b18e1c97b4b65b15847b3"
  },
  {
    "url": "tags/index.html",
    "revision": "15f93be68eeba596e10865eb93b5a573"
  },
  {
    "url": "tags/intellij-idea/index.html",
    "revision": "cc80ba8894d753a9745b6b5150ad0487"
  },
  {
    "url": "tags/java/index.html",
    "revision": "7ccf95b22111f71012e70f042e8803ea"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "e024d092575e10a3faf85f4ff2130786"
  },
  {
    "url": "tags/jawr/index.html",
    "revision": "0eac83faacf5e0d8e8058ae139709f27"
  },
  {
    "url": "tags/jest/index.html",
    "revision": "b5126313c1aecea0801a37ba122678bc"
  },
  {
    "url": "tags/jsf/index.html",
    "revision": "75399cf7eff7275989845cea9a5ee7e7"
  },
  {
    "url": "tags/karma/index.html",
    "revision": "1dec1cca5eb81e18e8ff4806259e0a8e"
  },
  {
    "url": "tags/lerna/index.html",
    "revision": "d2a8be8f8c72f5e8c6a1755b01e3e445"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "365dcefceb9cce7999ba6689e1ea0cd6"
  },
  {
    "url": "tags/monorepo/index.html",
    "revision": "e78a5cabbab24604162917597503983d"
  },
  {
    "url": "tags/node/index.html",
    "revision": "28a4f1ac38d653c3b28445f5ee478a8d"
  },
  {
    "url": "tags/npm/index.html",
    "revision": "1453107e7635fef1ab741db203a56254"
  },
  {
    "url": "tags/oracle/index.html",
    "revision": "92dd5b33cdaea3b14dc21cb71be575e3"
  },
  {
    "url": "tags/pwa/index.html",
    "revision": "9305b5fd21648fe165d77e14304e03aa"
  },
  {
    "url": "tags/renovate/index.html",
    "revision": "f867d707c37a6f94edcb793ef4a19936"
  },
  {
    "url": "tags/security/index.html",
    "revision": "9810971ae33ee8d45f8579ca65c092c5"
  },
  {
    "url": "tags/shiro/index.html",
    "revision": "9e3d80d3e0ca3de17f744eb501c4abf3"
  },
  {
    "url": "tags/site/index.html",
    "revision": "388e36e55d1aa49ddfa5e7ba26c9e1e8"
  },
  {
    "url": "tags/spring/index.html",
    "revision": "5e504faf64fce613c924989702bfcebc"
  },
  {
    "url": "tags/springmvc/index.html",
    "revision": "90be81971fa7d0ac21a03250f971ec33"
  },
  {
    "url": "tags/travisci/index.html",
    "revision": "7cd94e8c5b2855619a2c423cd8a4d0b7"
  },
  {
    "url": "tags/trips/index.html",
    "revision": "0be545834e9e898de7ed9df0fe7741ec"
  },
  {
    "url": "tags/typescript/index.html",
    "revision": "90a17845f4999919231091fddd84049a"
  },
  {
    "url": "tags/ubuntu/index.html",
    "revision": "8c702e8a4efe7795686a60e44ae3c5e3"
  },
  {
    "url": "tags/vps/index.html",
    "revision": "dce91a2de4fd888a10857064c5e7e328"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "e490bc7e5554222281f471a58aba5781"
  },
  {
    "url": "tags/webpack/index.html",
    "revision": "7a6dd886f9bc4a2de615604d8c46ecfa"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
