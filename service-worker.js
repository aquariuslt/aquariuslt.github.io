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
    "revision": "12c13a0571fe1f7bdaeecfd790b628c6"
  },
  {
    "url": "api/categories/blog.json",
    "revision": "7822800e2e2c75847c33e142f34f2cc7"
  },
  {
    "url": "api/categories/debug.json",
    "revision": "ca67f6314fbc88a718f11400fd54f694"
  },
  {
    "url": "api/categories/note.json",
    "revision": "0870ec0bb77edb9b222d45fa9bf6343f"
  },
  {
    "url": "api/categories/others.json",
    "revision": "6085e6cb7a421a8f608f046b16f1e2cf"
  },
  {
    "url": "api/home.json",
    "revision": "9178d58eac836dcab06620a7f30d3860"
  },
  {
    "url": "api/navigation.json",
    "revision": "50e852e943669045650ba76f027cb0e3"
  },
  {
    "url": "api/posts.json",
    "revision": "2a442929b59fde76fab71cce4b5e2a26"
  },
  {
    "url": "api/posts/2015/10/25/apache-shiro-spring-integration.json",
    "revision": "32a29d794044570132f5cde6d85951b1"
  },
  {
    "url": "api/posts/2015/11/10/beanutils-vs-reflection.json",
    "revision": "379e14980a4aae56986df8c996c7510c"
  },
  {
    "url": "api/posts/2015/12/13/ubuntu-mean-development-environment-setup.json",
    "revision": "8d031f5a327a11d344a2a0a8544be179"
  },
  {
    "url": "api/posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file.json",
    "revision": "cfcf1ddfc6010ae035a8f9e87219c1a2"
  },
  {
    "url": "api/posts/2015/12/27/site-upgrade-plan.json",
    "revision": "a0d7cc05bae126626f3660ff9e991f1b"
  },
  {
    "url": "api/posts/2016/01/01/review-2015.json",
    "revision": "af3a4d80384b862a2c0ba45e831690df"
  },
  {
    "url": "api/posts/2016/01/11/nodejs-oracledb-install-on-rhel-6.json",
    "revision": "e2f0beec0e5e3506716990c33e962c46"
  },
  {
    "url": "api/posts/2016/01/12/nodejs-oracledb-ora-21561-solution.json",
    "revision": "4fba37ac5d9c7feb40ad7ba9b102e922"
  },
  {
    "url": "api/posts/2016/03/06/site-code-structure.json",
    "revision": "a3b668e145393015a2f281a099bb7899"
  },
  {
    "url": "api/posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide.json",
    "revision": "36f28caf46f8fec96a3dfb3f83489465"
  },
  {
    "url": "api/posts/2016/04/10/google-codejam-2016-qualification-round.json",
    "revision": "aeb21a5788198baaeb60c81cebb533d8"
  },
  {
    "url": "api/posts/2016/04/30/angular-ui-performance-tuning-experience.json",
    "revision": "dfdcce8dfeba7fe788dfdc12a017d7e2"
  },
  {
    "url": "api/posts/2016/07/05/move-to-new-apartment.json",
    "revision": "ac0bd82b9fa0ae3129222e0280cf3094"
  },
  {
    "url": "api/posts/2017/01/01/review-2016.json",
    "revision": "a759daf5adca2a496eeb1e8a63c4f15a"
  },
  {
    "url": "api/posts/2017/03/12/new-version-blog-migration.json",
    "revision": "4d3d5e7fa20acd9fceb8c2a363ce2746"
  },
  {
    "url": "api/posts/2017/05/05/vue-version-for-blog-app.json",
    "revision": "da22a190988a7bd6d3cc4b3e048bc7f4"
  },
  {
    "url": "api/posts/2018/01/01/review-2017.json",
    "revision": "2eecb204ff7d9e394adb00a5244a97a1"
  },
  {
    "url": "api/posts/2018/03/03/latest-update-on-blog-app.json",
    "revision": "aa5400990e37e9a002d4e215f6f2940d"
  },
  {
    "url": "api/posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution.json",
    "revision": "c792a04faf200e2718b356947fdb644c"
  },
  {
    "url": "api/posts/2018/04/01/karma-jawr-development-note.json",
    "revision": "8dd1594ff231d7ce3dffb30b6ce030bf"
  },
  {
    "url": "api/posts/2019/07/07/github-actions-overview-and-practice.json",
    "revision": "df9903689d77b22ed5170943f10aa90f"
  },
  {
    "url": "api/posts/2019/07/23/travel-in-beijing.json",
    "revision": "210ab470bec0034d822812bc3a1d62cb"
  },
  {
    "url": "api/posts/2019/08/18/github-actions-new-yaml-syntax.json",
    "revision": "170baf0d308876496dbd96a32f0f9c6d"
  },
  {
    "url": "api/profile.json",
    "revision": "a5d932d01e2bea6bc56e379b0937c9b7"
  },
  {
    "url": "api/tags.json",
    "revision": "0eac93fd2df59c3e1adb23cfad1a195b"
  },
  {
    "url": "api/tags/actions.json",
    "revision": "8554f328587b478a2aaea031350b99a7"
  },
  {
    "url": "api/tags/angular.json",
    "revision": "ad3f5eec9a0cedde6e32ec339eee9393"
  },
  {
    "url": "api/tags/angularjs.json",
    "revision": "5af93c8a49cf01edce300bf43d54528a"
  },
  {
    "url": "api/tags/apache.json",
    "revision": "de62665c9ad8e5bb8a4adecf046a9ddf"
  },
  {
    "url": "api/tags/blog.json",
    "revision": "b019383c8c2936922e1de81433b99112"
  },
  {
    "url": "api/tags/ci.json",
    "revision": "407020d87a6dcc11cf9b340c550564ae"
  },
  {
    "url": "api/tags/diary.json",
    "revision": "a4213230999b3613d216a12f16c416f9"
  },
  {
    "url": "api/tags/docker.json",
    "revision": "20b5abbd04a74dd593b2874f61830d5c"
  },
  {
    "url": "api/tags/extjs.json",
    "revision": "d325451065add715a88bede43498a49d"
  },
  {
    "url": "api/tags/github.json",
    "revision": "5005eeda6b75c8e8e008319a8df04c1b"
  },
  {
    "url": "api/tags/google.json",
    "revision": "942d75e257950347c7cfce558ea26df5"
  },
  {
    "url": "api/tags/gulp.json",
    "revision": "ca613f7a4ef2fdc9fb6db40dcf707387"
  },
  {
    "url": "api/tags/hadoop.json",
    "revision": "fbbabc00d1432125083bf26fc1a7c936"
  },
  {
    "url": "api/tags/intellij-idea.json",
    "revision": "4cd8f574a808d8d1a9d7d773aa00ce08"
  },
  {
    "url": "api/tags/java.json",
    "revision": "682a3e12d65b1068b53e5b0a078305df"
  },
  {
    "url": "api/tags/javascript.json",
    "revision": "a32be3bdd24e9801edabc7b002f9fe4a"
  },
  {
    "url": "api/tags/jawr.json",
    "revision": "dd6dc82fcb5203d31f76b0b50072be61"
  },
  {
    "url": "api/tags/jsf.json",
    "revision": "4cf71dc9bf5464f29187bb91525931b7"
  },
  {
    "url": "api/tags/karma.json",
    "revision": "dc1f37fb6b059dcbbeedff8b74142390"
  },
  {
    "url": "api/tags/linux.json",
    "revision": "45a0733bfbb5dde94044097c5af79051"
  },
  {
    "url": "api/tags/node.json",
    "revision": "6c11ca1086cd4889e5b21716d3568d80"
  },
  {
    "url": "api/tags/npm.json",
    "revision": "fa0efe9e211e07a9bac434c6569853b3"
  },
  {
    "url": "api/tags/oracle.json",
    "revision": "7a2a26230abe8bafce29fabcf3415524"
  },
  {
    "url": "api/tags/pwa.json",
    "revision": "6643bd0fd61090f2f328c3bd0ff6ee2e"
  },
  {
    "url": "api/tags/security.json",
    "revision": "2871984a7bca49c2c343774903961b45"
  },
  {
    "url": "api/tags/shiro.json",
    "revision": "37df9b2792b2347d9a7afc424243e072"
  },
  {
    "url": "api/tags/site.json",
    "revision": "e0ce45cc0fcb84b7d9612aa037c30421"
  },
  {
    "url": "api/tags/spring.json",
    "revision": "ade4af83534e580550a1e16d6122bf0b"
  },
  {
    "url": "api/tags/springmvc.json",
    "revision": "fe1a1fa7457b5305f782c7f2693ebbbf"
  },
  {
    "url": "api/tags/travisci.json",
    "revision": "146404585faa5eb3c3ddd93606cf46dc"
  },
  {
    "url": "api/tags/trips.json",
    "revision": "2932fc8f73428ef9fa44785c26c81c83"
  },
  {
    "url": "api/tags/ubuntu.json",
    "revision": "eed943f275dd07ebb180f1ff34497555"
  },
  {
    "url": "api/tags/vps.json",
    "revision": "f161d9a26c5bc91046f203f1fe0ad046"
  },
  {
    "url": "api/tags/vue.json",
    "revision": "3af92a8b9500a611f72111609e627b31"
  },
  {
    "url": "api/tags/webpack.json",
    "revision": "672ee6b70eea489fbe3ddbb561b49bdb"
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
    "url": "css/chunk-vendors.c7457377.css",
    "revision": "962c7b7b013acd1146d0b020761126e2"
  },
  {
    "url": "css/detail.550d548d.css",
    "revision": "ecfcf9cd4415cfc2736aa1003a998b34"
  },
  {
    "url": "js/about.0c790d27.js",
    "revision": "95ea226699798cfa264e0bd5418f9a9f"
  },
  {
    "url": "js/app.765b35a7.js",
    "revision": "486b2c915d86c7a40760e0f565f27b7c"
  },
  {
    "url": "js/chunk-vendors.6db92837.js",
    "revision": "dd10326c285dae391b8f0a2a96447bba"
  },
  {
    "url": "js/detail.31c13955.js",
    "revision": "8759ae7900fd51fb4c57806680dcd2f6"
  },
  {
    "url": "manifest.json",
    "revision": "e6efd2eaa0b5f132d53584845fc5a6e7"
  },
  {
    "url": "precache-manifest.28599369bbcbd18333f0fc24130aa20a.js",
    "revision": "28599369bbcbd18333f0fc24130aa20a"
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
    "revision": "364dc76efe9757e9875a5f137d1a1711"
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
    "revision": "8c2b929a10844e5aa3f480fcd904acf2"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/clothes.png",
    "revision": "82dfd6b0817462d05f66a63041bbe37a"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/cover.png",
    "revision": "bb44bca680967ae3b8bef4bc2f25707f"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/depracted-desktop.png",
    "revision": "93f840a7599c54cc84d37d191baefe98"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/desktop-installation.png",
    "revision": "4b44c85c276fc06f72e1d5dafebe92fe"
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
    "revision": "c6243476ddbfee3f6d7eb11fe5e25a17"
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
    "revision": "6a20de46807c1e2655c846c241a154e4"
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
    "revision": "05ce4ffc74f591f0e4a64eabefe6737e"
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
    "revision": "ee6a7f122a95a9b356bf434179d10485"
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
    "revision": "60130fc05c1bc43bb422f5d1ee730916"
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
    "revision": "ede4253dce2a541f04076f85d1458730"
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
    "revision": "1dfc0608b1262f9bf100c31ea7a1ca7a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.googleAnalytics.initialize({});
