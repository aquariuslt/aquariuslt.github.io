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
    "revision": "4d769429e6a747a64c99b915b343f6ef"
  },
  {
    "url": "api/categories.json",
    "revision": "96c0f8a1026441261e04c60b773dcf82"
  },
  {
    "url": "api/categories/blog.json",
    "revision": "5ae6a011386e501f89de9376cff7e4b8"
  },
  {
    "url": "api/categories/debug.json",
    "revision": "1fb50bde5c16f9032a2b774c45fc5057"
  },
  {
    "url": "api/categories/note.json",
    "revision": "cadf2de2f9a655eaefe8b4543ad7a19f"
  },
  {
    "url": "api/categories/others.json",
    "revision": "72d175c54df8de1d3eac90c579d6c898"
  },
  {
    "url": "api/home.json",
    "revision": "c0b6b402dff9429662f443b4e36c8970"
  },
  {
    "url": "api/navigation.json",
    "revision": "777ced3dd3855b27d95d505bf20e3351"
  },
  {
    "url": "api/pages/about.json",
    "revision": "074ca901847e561680232fb8c134944b"
  },
  {
    "url": "api/pages/projects.json",
    "revision": "cca8e7d251b8c4a71c75c94aeb5232ac"
  },
  {
    "url": "api/posts.json",
    "revision": "0dc5b135d80797d3ff4e74cee7a318d9"
  },
  {
    "url": "api/posts/2015/10/25/apache-shiro-spring-integration.json",
    "revision": "b51b945ffdf34cd4ea23149f43b67567"
  },
  {
    "url": "api/posts/2015/11/10/beanutils-vs-reflection.json",
    "revision": "9ff2818dce7053c9b23e26817f7d9089"
  },
  {
    "url": "api/posts/2015/12/13/ubuntu-mean-development-environment-setup.json",
    "revision": "c8b508811724ed156bb5805b17358c7b"
  },
  {
    "url": "api/posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file.json",
    "revision": "7e481084a0a0ed4bf0ab1934e223a52f"
  },
  {
    "url": "api/posts/2015/12/27/site-upgrade-plan.json",
    "revision": "24cdbcfe6ba40b18b8122a6d73eb4a6c"
  },
  {
    "url": "api/posts/2016/01/01/review-2015.json",
    "revision": "13c6482a8c51607937e3c1a45f66baf7"
  },
  {
    "url": "api/posts/2016/01/11/nodejs-oracledb-install-on-rhel-6.json",
    "revision": "6a9df2cd8bff0c064f289719cc64bde2"
  },
  {
    "url": "api/posts/2016/01/12/nodejs-oracledb-ora-21561-solution.json",
    "revision": "ffdbbbc318b6e024d155b1d51f3c9b91"
  },
  {
    "url": "api/posts/2016/03/06/site-code-structure.json",
    "revision": "b3e7a68c3927e117638a0af9808caf90"
  },
  {
    "url": "api/posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide.json",
    "revision": "ade1af77a433a62773f844d58be95813"
  },
  {
    "url": "api/posts/2016/04/10/google-codejam-2016-qualification-round.json",
    "revision": "448798bd905b831be75df29f35d080b0"
  },
  {
    "url": "api/posts/2016/04/30/angular-ui-performance-tuning-experience.json",
    "revision": "2b59a800928c16d88b754647ae2dee18"
  },
  {
    "url": "api/posts/2016/07/05/move-to-new-apartment.json",
    "revision": "12d8bd130b89cd37309b309d08108dbe"
  },
  {
    "url": "api/posts/2017/01/01/review-2016.json",
    "revision": "119c120165b685d9bc7cc9979fa6686c"
  },
  {
    "url": "api/posts/2017/03/12/new-version-blog-migration.json",
    "revision": "fe27d34c7503cf7799e207a90a21cc70"
  },
  {
    "url": "api/posts/2017/05/05/vue-version-for-blog-app.json",
    "revision": "4592db6c620a3b6a70e72df7800bc736"
  },
  {
    "url": "api/posts/2018/01/01/review-2017.json",
    "revision": "89418fdc80bc0e99e65e6dd2cff468f7"
  },
  {
    "url": "api/posts/2018/03/03/latest-update-on-blog-app.json",
    "revision": "d40bc4ad6258d35532aae877c924c642"
  },
  {
    "url": "api/posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution.json",
    "revision": "48697d8a6157dd4de34818103cdb8a89"
  },
  {
    "url": "api/posts/2018/04/01/karma-jawr-development-note.json",
    "revision": "84b6b265d2ade3a9b3de1ca2f64d352f"
  },
  {
    "url": "api/posts/2019/07/07/github-actions-overview-and-practice.json",
    "revision": "18528dc8a1a52334d5b0db0d04933dd2"
  },
  {
    "url": "api/posts/2019/07/23/travel-in-beijing.json",
    "revision": "6a07e014ae78e1977cf7b946281523ea"
  },
  {
    "url": "api/posts/2019/08/18/github-actions-new-yaml-syntax.json",
    "revision": "e04fc5d2122674d880d23accef1427db"
  },
  {
    "url": "api/posts/2019/11/14/monorepo-practice-in-typescript-projects.json",
    "revision": "4726f913dc0f91529e408f558dd035b7"
  },
  {
    "url": "api/posts/2020/01/28/review-2019.json",
    "revision": "4b54e6e68d06fe83914dd912e467618d"
  },
  {
    "url": "api/posts/2020/02/12/using-patch-package-patching-node-modules.json",
    "revision": "e01674dd647f7dde4b801af66640d6bc"
  },
  {
    "url": "api/posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate.json",
    "revision": "360343d3ef7e73f48bc8a7a11fec4cdc"
  },
  {
    "url": "api/posts/2020/03/15/dot-ignore-management-for-npm-package.json",
    "revision": "bcc2587dbf216a144d4aeb42c63adb19"
  },
  {
    "url": "api/posts/2020/03/28/enable-motion-sense-on-pixel-4-xl-after-march-update.json",
    "revision": "855bdeb3349442857538fcd021c285d6"
  },
  {
    "url": "api/profile.json",
    "revision": "a5d932d01e2bea6bc56e379b0937c9b7"
  },
  {
    "url": "api/tags.json",
    "revision": "357ec8ae04eb3e985e2f804984d95c98"
  },
  {
    "url": "api/tags/actions.json",
    "revision": "f1ff162a12e688aca1cc1333b7f7c5d8"
  },
  {
    "url": "api/tags/android.json",
    "revision": "885a0286ae0ab911d17e68d01778c4d4"
  },
  {
    "url": "api/tags/angular.json",
    "revision": "3fc3babc0baaf9258e5271174b10d57a"
  },
  {
    "url": "api/tags/angularjs.json",
    "revision": "bc16b5882775fc27a4990ac5bd6d40d5"
  },
  {
    "url": "api/tags/apache.json",
    "revision": "7a439f502dd3f7c9d271cbc79e593368"
  },
  {
    "url": "api/tags/blog.json",
    "revision": "ec89a069ba0e7b4edcc835ff66904be5"
  },
  {
    "url": "api/tags/ci.json",
    "revision": "315313daed171fbc5a26839318daf26a"
  },
  {
    "url": "api/tags/diary.json",
    "revision": "a2bc6920fa3ff4f1a49d05ece4a4e301"
  },
  {
    "url": "api/tags/docker.json",
    "revision": "cca9fbf43c59c9fc896d26666008dc97"
  },
  {
    "url": "api/tags/extjs.json",
    "revision": "de25dc20b43067916f612cfa4ab2a64a"
  },
  {
    "url": "api/tags/git.json",
    "revision": "831ceed530f91d695f14bd33c11067ed"
  },
  {
    "url": "api/tags/github.json",
    "revision": "56175c45797d2ec5b6f13ea25b4aacc5"
  },
  {
    "url": "api/tags/google.json",
    "revision": "a03fd6becd3d13420d0c6bc57ae68614"
  },
  {
    "url": "api/tags/gulp.json",
    "revision": "d24bff878c1508d26d10a045d6beff3d"
  },
  {
    "url": "api/tags/hadoop.json",
    "revision": "3ad0e987ea26d28b2ccf4bf3b5c100bc"
  },
  {
    "url": "api/tags/intellij-idea.json",
    "revision": "8d7b130eec19832181c91021a1bf7fd5"
  },
  {
    "url": "api/tags/java.json",
    "revision": "f0372a6b8056d53debd04cf589c65abd"
  },
  {
    "url": "api/tags/javascript.json",
    "revision": "1991ad11bda9e8982675eb4bf1eda961"
  },
  {
    "url": "api/tags/jawr.json",
    "revision": "f9546af84221493ea04170e9d93e3f24"
  },
  {
    "url": "api/tags/jest.json",
    "revision": "41adffedfc9640474f3ffaa398fba124"
  },
  {
    "url": "api/tags/jsf.json",
    "revision": "b17b2ec449e7b92a7878a370db2564ac"
  },
  {
    "url": "api/tags/karma.json",
    "revision": "dd00b357977abdf249d3fd5b5c00f978"
  },
  {
    "url": "api/tags/lerna.json",
    "revision": "80292170694745228f4c281672c9c773"
  },
  {
    "url": "api/tags/linux.json",
    "revision": "3e36722caff755975dc589ecae47730c"
  },
  {
    "url": "api/tags/monorepo.json",
    "revision": "66f7b5d0ee012ffd51ccb300e87e554e"
  },
  {
    "url": "api/tags/node.json",
    "revision": "8b9d002e3d0e1cfc9bc99c7e8f1968ac"
  },
  {
    "url": "api/tags/npm.json",
    "revision": "dcf242b877d23316ce663cf4e660d7c1"
  },
  {
    "url": "api/tags/oracle.json",
    "revision": "23f8fc7cac8f02db75d3d8ecaea21892"
  },
  {
    "url": "api/tags/pwa.json",
    "revision": "29dcd0beab3cf26623b76378ef78c334"
  },
  {
    "url": "api/tags/renovate.json",
    "revision": "ee2e221074606c50a52a8374f9d97159"
  },
  {
    "url": "api/tags/security.json",
    "revision": "ee0fa8f56ed3f7d50a16e9b853e2a93e"
  },
  {
    "url": "api/tags/shiro.json",
    "revision": "89660c81d28165ac54cc52963f576d42"
  },
  {
    "url": "api/tags/site.json",
    "revision": "58494b0bb7b71bcd273bbc334c99e028"
  },
  {
    "url": "api/tags/spring.json",
    "revision": "3ededc4cfe68fb49de79e7699a40bded"
  },
  {
    "url": "api/tags/springmvc.json",
    "revision": "ee2ef7286cf62e047e3bfa6a9d7f0dbb"
  },
  {
    "url": "api/tags/travisci.json",
    "revision": "018b93e0beab2a79d452f5940f397dc4"
  },
  {
    "url": "api/tags/trips.json",
    "revision": "d58cc6dbae2492d57fa9b14c52983bca"
  },
  {
    "url": "api/tags/typescript.json",
    "revision": "0e6086f94b70135ac389a50c1170d5fc"
  },
  {
    "url": "api/tags/ubuntu.json",
    "revision": "70d48e474b840e9894191768affc7d1b"
  },
  {
    "url": "api/tags/vps.json",
    "revision": "a757a56209ca220e4b4996f927f07011"
  },
  {
    "url": "api/tags/vue.json",
    "revision": "97071284339a26c43a556daeb3041b5f"
  },
  {
    "url": "api/tags/webpack.json",
    "revision": "e2223d3acb0780d6fe9b4ebca9fb5e80"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "e43c0bcbfad115c3d05144c08a04031e"
  },
  {
    "url": "categories/debug/index.html",
    "revision": "de20feef4ec467f3d7cbe22f7e45e409"
  },
  {
    "url": "categories/index.html",
    "revision": "960a7bb8812a7efeace1b3f8b715f5b3"
  },
  {
    "url": "categories/note/index.html",
    "revision": "43dba3d794cc37bd4a4c6ef40b83cd24"
  },
  {
    "url": "categories/others/index.html",
    "revision": "04151ab294a6705b26a0d81e08ebed97"
  },
  {
    "url": "index.html",
    "revision": "fa0624919986e2091f4c537399685fa0"
  },
  {
    "url": "pages/about/about.webp",
    "revision": "414c4c6470c1f35156963c0427f97d4e"
  },
  {
    "url": "pages/about/index.html",
    "revision": "972233c71544beb9d602fd5925a74329"
  },
  {
    "url": "pages/projects/index.html",
    "revision": "fa99164101384e428183fca6bc3fd068"
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
    "revision": "bd8239ed955a0b1be3d56b0f6f8e8e7b"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/cover.webp",
    "revision": "27d279d60cf8f2f3f3c5ef160228a7e2"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/index.html",
    "revision": "63772541c6e7a3da37acccbe4a859055"
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
    "revision": "7841d3e98538391a1da9aa7ca9dc4f50"
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
    "revision": "574e485b139262da3c43c463c4cf6e12"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/cover.webp",
    "revision": "bc8df919c42129d27e82cf802a76e5db"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/index.html",
    "revision": "67af192c6620900ead376bb5ff6ff822"
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
    "revision": "b41db64c0ec6b7653ed3dbcad86a000e"
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
    "revision": "ab5d297f8a0afb567855c137f393fc4a"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/cover.webp",
    "revision": "37910666b2efdaf400b00d2061f4c41a"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html",
    "revision": "6a0d479f470d1e6c04618555a0fea376"
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
    "revision": "aa86b842ac0742d7f78b2d84665f7bfa"
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
    "revision": "1ef05ab525f87920ebc4c0c473bf8f84"
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
    "revision": "846cf961ecf67b44f3bdf870a50e4b5f"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/cover.webp",
    "revision": "82c34fe6dc24d269af222c5886cb5557"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/index.html",
    "revision": "6b0079e0b2d5fd60905dffe2d6e29350"
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
    "revision": "be8d572059112514bcbf5f68177c7e2e"
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
    "revision": "b1680602f15b2d1c7dc272aba69ba45a"
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
    "revision": "eab74ef44330a2722d5fd8fbd708abc8"
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
    "revision": "8904d408afbe36d5e834c25868270d87"
  },
  {
    "url": "posts/2018/01/01/review-2017/cover.webp",
    "revision": "192a5a50789e7bb15de8469aad1e7047"
  },
  {
    "url": "posts/2018/01/01/review-2017/index.html",
    "revision": "7d7e1523e24712445db8b04e0052026f"
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
    "revision": "45e757776a8117b3855a13af6c5cc61e"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/cover.webp",
    "revision": "c1566bac5de28dc40a0c1506a1107ce7"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html",
    "revision": "1bee9a08bd2108376b142484701e13fc"
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
    "revision": "5ef5f0b27d79bf94e8989d14eac2266b"
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
    "revision": "5d08c981b2092797b5d334b690404e24"
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
    "revision": "c98759556425f30b9eb65873ea442356"
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
    "revision": "d1343c4967d9c7a984e5d84d1487cb7f"
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
    "revision": "5c122f1a2587f4a966309c10671d370b"
  },
  {
    "url": "posts/2020/01/28/review-2019/cover.webp",
    "revision": "d31fe316bda1a37a3b8262c359ef0b07"
  },
  {
    "url": "posts/2020/01/28/review-2019/index.html",
    "revision": "13f5801100eeba77d72688395d02072c"
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
    "revision": "e74348c4f287a240e833186d3b20b52f"
  },
  {
    "url": "posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/index.html",
    "revision": "5d5732f43613b14504f281f5b655511a"
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
    "revision": "d0487820ce1cc34fdaf109f118560085"
  },
  {
    "url": "posts/2020/03/15/dot-ignore-management-for-npm-package/index.html",
    "revision": "00cff3291cbcd722111218d6a3e59464"
  },
  {
    "url": "posts/2020/03/28/enable-motion-sense-on-pixel-4-xl-after-march-update/check-motion-sense-at-settings.webp",
    "revision": "8ac29e207069302760b90c85d1a02f00"
  },
  {
    "url": "posts/2020/03/28/enable-motion-sense-on-pixel-4-xl-after-march-update/index.html",
    "revision": "9bed1f04baae46056392fd035d433be7"
  },
  {
    "url": "posts/2020/03/28/enable-motion-sense-on-pixel-4-xl-after-march-update/magisk-patch-boot-img.webp",
    "revision": "b92c8b2f7f90e98b3151c9695ac894ef"
  },
  {
    "url": "posts/2020/03/28/enable-motion-sense-on-pixel-4-xl-after-march-update/magisk-patch-image-step-1.webp",
    "revision": "26558a34d8e0ea975ceefaedc88b488c"
  },
  {
    "url": "posts/2020/03/28/enable-motion-sense-on-pixel-4-xl-after-march-update/magisk-patch-image-step-2.webp",
    "revision": "70502f51d57552d2e14e216715fe5afd"
  },
  {
    "url": "posts/2020/03/28/enable-motion-sense-on-pixel-4-xl-after-march-update/magisk-superuser.webp",
    "revision": "df974debb093ded9daf40f824b879c92"
  },
  {
    "url": "posts/2020/03/28/enable-motion-sense-on-pixel-4-xl-after-march-update/magisk.webp",
    "revision": "a460d0c440e1db22eb64557b74e895b6"
  },
  {
    "url": "posts/2020/03/28/enable-motion-sense-on-pixel-4-xl-after-march-update/motion-sense-skip-song.webp",
    "revision": "b6c1630ed35d0845136b1b9c279f264f"
  },
  {
    "url": "posts/index.html",
    "revision": "ce44235e6e29826ac429d11048d8f23f"
  },
  {
    "url": "static/css/detail.5db018e2e0d7d5e4b89a.css",
    "revision": "4784b90b225073ce134e8667e56c6cfc"
  },
  {
    "url": "static/css/main.93191b2da8b5250f7e40.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "static/css/vendors.a4074ed6193b26caffc1.css",
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
    "revision": "1acc9f3fec8ac2be00202097e9e9991a"
  },
  {
    "url": "static/js/detail.5db018e2e0d7d5e4b89a.js",
    "revision": "dfa43a1e092c6d23b3015861c05c42d2"
  },
  {
    "url": "static/js/main.93191b2da8b5250f7e40.js",
    "revision": "d0ea160a387d60c7a217bcc3eba4d80c"
  },
  {
    "url": "static/js/vendors.a4074ed6193b26caffc1.js",
    "revision": "9a5bd3a428fc3cc02a7ffeab72f4ba89"
  },
  {
    "url": "tags/actions/index.html",
    "revision": "c6dffc882711e57e09e900e5d0090547"
  },
  {
    "url": "tags/android/index.html",
    "revision": "9130a97d461c201be17726b629ddefa7"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "25a074ad9fb24f8a6ee549faccbf7d6c"
  },
  {
    "url": "tags/angularjs/index.html",
    "revision": "d0107700bd8813615cdf430773825ee1"
  },
  {
    "url": "tags/apache/index.html",
    "revision": "2124e1f28cf03e268cb05d0d93444cf8"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "27cb217a6ed00aa6a3f16368fb08ba63"
  },
  {
    "url": "tags/ci/index.html",
    "revision": "d76ef59bdc1b08daeed2f4d0489158e0"
  },
  {
    "url": "tags/diary/index.html",
    "revision": "03e075159eb2b4f3d5a82d56eb3256cd"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "e56d98f39b052d4426b21b2de15494c9"
  },
  {
    "url": "tags/extjs/index.html",
    "revision": "b7625b24a0ef58be4e89ca0b5938581c"
  },
  {
    "url": "tags/git/index.html",
    "revision": "da5f2ad0658abb08122a8516b2a69a82"
  },
  {
    "url": "tags/github/index.html",
    "revision": "c4af3bb0ef0a26abefb871bfccde89b1"
  },
  {
    "url": "tags/google/index.html",
    "revision": "585a3cc8f64a88534ba9c38a4141577d"
  },
  {
    "url": "tags/gulp/index.html",
    "revision": "3c8224298baa44b7832e3236ac9e43a5"
  },
  {
    "url": "tags/hadoop/index.html",
    "revision": "76174f149b217c634268af2ed37a5bc4"
  },
  {
    "url": "tags/index.html",
    "revision": "099fdc08af35072b9552e87927d38193"
  },
  {
    "url": "tags/intellij-idea/index.html",
    "revision": "d0b2797a5230d85b2889e7133764b74c"
  },
  {
    "url": "tags/java/index.html",
    "revision": "b6cf13466c41997c07eb3e85b5d408d6"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "451e3edbfc688bfc76cd423655680617"
  },
  {
    "url": "tags/jawr/index.html",
    "revision": "0caac9cfdd129d8ff438eb012ba25dad"
  },
  {
    "url": "tags/jest/index.html",
    "revision": "19e8540d7940c4f1db0d0910c14d1b8b"
  },
  {
    "url": "tags/jsf/index.html",
    "revision": "2d72fcae0b17a4f8b226c65b1448e4fe"
  },
  {
    "url": "tags/karma/index.html",
    "revision": "c0f7af38da325614e1c41080c515096e"
  },
  {
    "url": "tags/lerna/index.html",
    "revision": "6951e163f283cc4f98834284ef2102c8"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "467ee31f871a2b7732c3b37e26ec0e5f"
  },
  {
    "url": "tags/monorepo/index.html",
    "revision": "cedcfe6e09639f15678a0c13d70fe99c"
  },
  {
    "url": "tags/node/index.html",
    "revision": "b7e824aa5669105f4065b32c956d9a0c"
  },
  {
    "url": "tags/npm/index.html",
    "revision": "2e21b1efb4f1bc0715225dd489514259"
  },
  {
    "url": "tags/oracle/index.html",
    "revision": "8483b48a34bcffb8c81c2cdffb60fc4f"
  },
  {
    "url": "tags/pwa/index.html",
    "revision": "f6407a726df9ce512f8c4b2d60f817ff"
  },
  {
    "url": "tags/renovate/index.html",
    "revision": "f08fc6b7036d12f6ffe1630a6cf12b92"
  },
  {
    "url": "tags/security/index.html",
    "revision": "54eb3cf804783b2bb9e33ce07c998e07"
  },
  {
    "url": "tags/shiro/index.html",
    "revision": "c54bbc40e6cd911a6377b328a5a7f250"
  },
  {
    "url": "tags/site/index.html",
    "revision": "42719c7094c03f712c5f214bc35c933a"
  },
  {
    "url": "tags/spring/index.html",
    "revision": "3e073a4972459f27b07871faae16d662"
  },
  {
    "url": "tags/springmvc/index.html",
    "revision": "dc9e142818888e7d6786d54826b05433"
  },
  {
    "url": "tags/travisci/index.html",
    "revision": "2fbd44093dafa8bc7083ff0670cfe106"
  },
  {
    "url": "tags/trips/index.html",
    "revision": "c69e2b5987565f74d408cef92be0ccd5"
  },
  {
    "url": "tags/typescript/index.html",
    "revision": "baa7ac0df355c19c5f85040e85530a93"
  },
  {
    "url": "tags/ubuntu/index.html",
    "revision": "176c056f846243688f26de23a14032a6"
  },
  {
    "url": "tags/vps/index.html",
    "revision": "160c8611f50d53bd60ab10fdb9885cff"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "3e3e82408daff54e9e98965efdaeb7b0"
  },
  {
    "url": "tags/webpack/index.html",
    "revision": "ced4ca58843d46f96869f58771850eac"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
