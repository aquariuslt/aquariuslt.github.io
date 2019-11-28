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
    "revision": "7e80be837c2b5469b74f38229aecb685"
  },
  {
    "url": "api/categories/blog.json",
    "revision": "6d1c256f8bd0c5734c7d6122b3cc7505"
  },
  {
    "url": "api/categories/debug.json",
    "revision": "caab102f79c9d9453f27701f76b9b870"
  },
  {
    "url": "api/categories/note.json",
    "revision": "1867336d2413b05747e10c1669707346"
  },
  {
    "url": "api/categories/others.json",
    "revision": "96c1c884f6127eca7cc5095d6d34cab0"
  },
  {
    "url": "api/home.json",
    "revision": "413ead487734d813e18b6fe2ac14ba77"
  },
  {
    "url": "api/navigation.json",
    "revision": "201f19f6843bdbc78a163971b2fa5667"
  },
  {
    "url": "api/pages/about.json",
    "revision": "767db23807af6cc8976292777bbd63bf"
  },
  {
    "url": "api/posts.json",
    "revision": "1b56fb14cf04c1d72607064b1d6ca6ca"
  },
  {
    "url": "api/posts/2015/10/25/apache-shiro-spring-integration.json",
    "revision": "7c2c80630d4b21fa81510200c6041e45"
  },
  {
    "url": "api/posts/2015/11/10/beanutils-vs-reflection.json",
    "revision": "2861c136874becc8c8c57874fc409954"
  },
  {
    "url": "api/posts/2015/12/13/ubuntu-mean-development-environment-setup.json",
    "revision": "194765e8b52bcfb82fb4e52517bcb538"
  },
  {
    "url": "api/posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file.json",
    "revision": "4df67d101c13fc90561072629a099772"
  },
  {
    "url": "api/posts/2015/12/27/site-upgrade-plan.json",
    "revision": "392282843aa4f41881bf1d1f1fcf9ae6"
  },
  {
    "url": "api/posts/2016/01/01/review-2015.json",
    "revision": "304c57421c101caea6aba8a48c84e65d"
  },
  {
    "url": "api/posts/2016/01/11/nodejs-oracledb-install-on-rhel-6.json",
    "revision": "f3ea027ea470e16ecd242544846ad7e8"
  },
  {
    "url": "api/posts/2016/01/12/nodejs-oracledb-ora-21561-solution.json",
    "revision": "8994cd9a37ab9127f8805adda049ebce"
  },
  {
    "url": "api/posts/2016/03/06/site-code-structure.json",
    "revision": "127a8c2fc94b7b6810e4c0c72d179c13"
  },
  {
    "url": "api/posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide.json",
    "revision": "373ad304d6c0dafdd51c1e6a40e52907"
  },
  {
    "url": "api/posts/2016/04/10/google-codejam-2016-qualification-round.json",
    "revision": "61956634f37d85f6f02fb442315a73a4"
  },
  {
    "url": "api/posts/2016/04/30/angular-ui-performance-tuning-experience.json",
    "revision": "97ec508f674fcb5c8343c8e232d28b42"
  },
  {
    "url": "api/posts/2016/07/05/move-to-new-apartment.json",
    "revision": "6ca2fd30e5eeed1e384829ce51e63a8d"
  },
  {
    "url": "api/posts/2017/01/01/review-2016.json",
    "revision": "dc591d96e43382f79a450604a7b6f4e9"
  },
  {
    "url": "api/posts/2017/03/12/new-version-blog-migration.json",
    "revision": "13b46819de2313a6e64617246237e794"
  },
  {
    "url": "api/posts/2017/05/05/vue-version-for-blog-app.json",
    "revision": "d2d603e3ad03e0f1ac8573a59dfcdfe7"
  },
  {
    "url": "api/posts/2018/01/01/review-2017.json",
    "revision": "be5fa4eeda1705364142c797661186a4"
  },
  {
    "url": "api/posts/2018/03/03/latest-update-on-blog-app.json",
    "revision": "b74a4adaee258c6bfc92066a583279fc"
  },
  {
    "url": "api/posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution.json",
    "revision": "410fd8f775d8a0ad54530b5f1578c0f9"
  },
  {
    "url": "api/posts/2018/04/01/karma-jawr-development-note.json",
    "revision": "747d4528e9dcc06db5e3e8ae09e20460"
  },
  {
    "url": "api/posts/2019/07/07/github-actions-overview-and-practice.json",
    "revision": "9ac7bc729cf41f9194303cb04c74ddd3"
  },
  {
    "url": "api/posts/2019/07/23/travel-in-beijing.json",
    "revision": "7f108358ff893cb4e986c9b1395c81cc"
  },
  {
    "url": "api/posts/2019/08/18/github-actions-new-yaml-syntax.json",
    "revision": "a7d33195f289a81c3635b94ddff0b687"
  },
  {
    "url": "api/posts/2019/11/14/monorepo-practice-in-typescript-projects.json",
    "revision": "fc025c3b67ccfca5a3d502f48f490a25"
  },
  {
    "url": "api/profile.json",
    "revision": "a5d932d01e2bea6bc56e379b0937c9b7"
  },
  {
    "url": "api/tags.json",
    "revision": "cce86a2994f164d31307350c1022871f"
  },
  {
    "url": "api/tags/actions.json",
    "revision": "8f741cc18d975f514989ea6ec0b16cb5"
  },
  {
    "url": "api/tags/angular.json",
    "revision": "a9f2bce051e343127bc3a9892a18da7a"
  },
  {
    "url": "api/tags/angularjs.json",
    "revision": "f95bfba1c3580637579912e4bf4884c6"
  },
  {
    "url": "api/tags/apache.json",
    "revision": "5f3b82eadd493fe9c7ed07837ecfd35a"
  },
  {
    "url": "api/tags/blog.json",
    "revision": "f4aaefd319d7e6e7ed3dfef9e49755ad"
  },
  {
    "url": "api/tags/ci.json",
    "revision": "4ff3e654183e91dccfe3fabf47ebf47f"
  },
  {
    "url": "api/tags/diary.json",
    "revision": "5727be141445d1c683521cb1a8a1469c"
  },
  {
    "url": "api/tags/docker.json",
    "revision": "bff973725ca3591b93b8bd0fa41582b9"
  },
  {
    "url": "api/tags/extjs.json",
    "revision": "b4753936d5184c117d2de812b803c4c2"
  },
  {
    "url": "api/tags/github.json",
    "revision": "ea52e0cd7d4c3165a54a733f40b7b165"
  },
  {
    "url": "api/tags/google.json",
    "revision": "ff5190410a1f3fa81230355fd975ebac"
  },
  {
    "url": "api/tags/gulp.json",
    "revision": "8147da95cb7c79debb1315ef86b060d9"
  },
  {
    "url": "api/tags/hadoop.json",
    "revision": "8bd5d48b55d5d1a73484b320455a8c0b"
  },
  {
    "url": "api/tags/intellij-idea.json",
    "revision": "79102436f0f08eacc9e5c9c5f83c76ba"
  },
  {
    "url": "api/tags/java.json",
    "revision": "8420d35ca1d12bca6c0d4f7cef2028af"
  },
  {
    "url": "api/tags/javascript.json",
    "revision": "2dc8238917377b47bbc7e5a5d2466a61"
  },
  {
    "url": "api/tags/jawr.json",
    "revision": "8d6d14c943eee255a80743e46de6d3f7"
  },
  {
    "url": "api/tags/jest.json",
    "revision": "11e27988b1731d2dbb673ad07b3eac3a"
  },
  {
    "url": "api/tags/jsf.json",
    "revision": "047310c94a7ff04f3a3947784a9af335"
  },
  {
    "url": "api/tags/karma.json",
    "revision": "dab2e2724b3921b9c61ca23a1d82bbce"
  },
  {
    "url": "api/tags/lerna.json",
    "revision": "b986e542067deee3660a78872918d4e4"
  },
  {
    "url": "api/tags/linux.json",
    "revision": "639bdabd04fbb5c4af506450f527b83e"
  },
  {
    "url": "api/tags/monorepo.json",
    "revision": "7eaaf8715f28fcec01ae2b041db324e4"
  },
  {
    "url": "api/tags/node.json",
    "revision": "78b0a84bbbd47230695ca4ae3206d9e9"
  },
  {
    "url": "api/tags/npm.json",
    "revision": "84ff3acaa64b630d247749f7c458095d"
  },
  {
    "url": "api/tags/oracle.json",
    "revision": "4f431cbbfe0f43dfe0f738e728f9a234"
  },
  {
    "url": "api/tags/pwa.json",
    "revision": "ad6319dc207779688dd0858053d25aa1"
  },
  {
    "url": "api/tags/security.json",
    "revision": "5303007046823d3994cd1f230a58fa5d"
  },
  {
    "url": "api/tags/shiro.json",
    "revision": "1bb2f394854dc57d0e64b35ee10ad738"
  },
  {
    "url": "api/tags/site.json",
    "revision": "f4d43a56f20b3715a30bbe2c3359a344"
  },
  {
    "url": "api/tags/spring.json",
    "revision": "fad70f20204d4e4fb165cdd8f5322c4f"
  },
  {
    "url": "api/tags/springmvc.json",
    "revision": "1b50642573650607397724271a2f62e4"
  },
  {
    "url": "api/tags/travisci.json",
    "revision": "80c95f31d760a6f3fc626fdf6dd6b4a8"
  },
  {
    "url": "api/tags/trips.json",
    "revision": "e66c515248f5ebe9c501bd5eb31fdb73"
  },
  {
    "url": "api/tags/typescript.json",
    "revision": "2f0a3a2c59e43a0bd533f1cd8c4b44fe"
  },
  {
    "url": "api/tags/ubuntu.json",
    "revision": "c739eca43e8cb3850d92df164fa05f98"
  },
  {
    "url": "api/tags/vps.json",
    "revision": "c7c7043abfe854865c94a76ac5b53125"
  },
  {
    "url": "api/tags/vue.json",
    "revision": "d07e3de122bcf887cb8aadf4f7041b3f"
  },
  {
    "url": "api/tags/webpack.json",
    "revision": "fec2c59ec4547ef4fef372625343480a"
  },
  {
    "url": "static/css/detail.b07d4d6b858eec98e10d.css",
    "revision": "89b75f8528cbaa587cba7d2163f8b001"
  },
  {
    "url": "static/css/main.6c25a742a59cc6a10434.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "static/css/vendors.178c4c93919df014651c.css",
    "revision": "2af97cf84b103023b4cb97daff882b9e"
  },
  {
    "url": "static/img/manifest.json",
    "revision": "37afcb01d0640b6635a9e318429bb03b"
  },
  {
    "url": "static/img/yandex-browser-manifest.json",
    "revision": "d1951bfdebdc43f2ee4ae1edfaff1990"
  },
  {
    "url": "static/js/detail.b07d4d6b858eec98e10d.js",
    "revision": "7580d40bf495b0fe45a79452dd6dd128"
  },
  {
    "url": "static/js/main.6c25a742a59cc6a10434.js",
    "revision": "e120d932dff6970511f08356319eac1a"
  },
  {
    "url": "static/js/vendors.178c4c93919df014651c.js",
    "revision": "08083439131c05c39745122a0d20617e"
  },
  {
    "url": "pages/about/about.png",
    "revision": "630026ceb9ed8d111831a9abec7b7598"
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
    "revision": "a58210d9a6b47fb694fe04b8cbbe312a"
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
    "revision": "6c0734ee3229249adcafb500257cb7d1"
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
    "revision": "e0a8656ec13e06f6b039ac6e13b743d2"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/select-sample-workflow-for-npm.png",
    "revision": "ad0df58b3619051a7ea4ee5713a77a6a"
  },
  {
    "url": "posts/2019/11/14/monorepo-practice-in-typescript-projects/cover.png",
    "revision": "0190666a7dc832afd1d7d47aa9461e84"
  },
  {
    "url": "static/img/android-chrome-144x144.png",
    "revision": "8bc62b2b6849e956715372c2e680530e"
  },
  {
    "url": "static/img/android-chrome-192x192.png",
    "revision": "67e7b67f62f2348c613168d4ec9d07bc"
  },
  {
    "url": "static/img/android-chrome-256x256.png",
    "revision": "f853ef7b313aea2e85229f5bf0ef430a"
  },
  {
    "url": "static/img/android-chrome-36x36.png",
    "revision": "d9356f81965328e13976651d8abc2224"
  },
  {
    "url": "static/img/android-chrome-384x384.png",
    "revision": "c4ea489cbcc904e6a242969d2f92a923"
  },
  {
    "url": "static/img/android-chrome-48x48.png",
    "revision": "0dbbf98a448f8f7aa3d2421a893b5e9c"
  },
  {
    "url": "static/img/android-chrome-512x512.png",
    "revision": "6fc48856e2a0303c25307c67da11a8ab"
  },
  {
    "url": "static/img/android-chrome-72x72.png",
    "revision": "f7235c1942364d7dc1df8513ce20b924"
  },
  {
    "url": "static/img/android-chrome-96x96.png",
    "revision": "3892e73d9e5a7a1b31161ccfa60e0840"
  },
  {
    "url": "static/img/apple-touch-icon-1024x1024.png",
    "revision": "55be9183f8b83c6145fe25f10fe436cd"
  },
  {
    "url": "static/img/apple-touch-icon-114x114.png",
    "revision": "ca1cc7fe32854558a9ec898c3dad63b7"
  },
  {
    "url": "static/img/apple-touch-icon-120x120.png",
    "revision": "33aa6e43be540c97e4aa40cd361c7868"
  },
  {
    "url": "static/img/apple-touch-icon-144x144.png",
    "revision": "33da0ebbd467d41630c659d8fafbca30"
  },
  {
    "url": "static/img/apple-touch-icon-152x152.png",
    "revision": "b52e6d6e9beeb880d947401976ccc97c"
  },
  {
    "url": "static/img/apple-touch-icon-167x167.png",
    "revision": "af77ec70ee708c12dec4756d59892c0a"
  },
  {
    "url": "static/img/apple-touch-icon-180x180.png",
    "revision": "d711e2db98d11d3a4d951c88eb4239c4"
  },
  {
    "url": "static/img/apple-touch-icon-57x57.png",
    "revision": "1f51e7dd2a9a637b4533188550f75201"
  },
  {
    "url": "static/img/apple-touch-icon-60x60.png",
    "revision": "1ce93c9ec151aae1efa388d0cde8cc44"
  },
  {
    "url": "static/img/apple-touch-icon-72x72.png",
    "revision": "54f709c4b501f72851ddbf8dbc748c0b"
  },
  {
    "url": "static/img/apple-touch-icon-76x76.png",
    "revision": "e3025e7ec955a1c4749078e7f171dc6d"
  },
  {
    "url": "static/img/apple-touch-icon-precomposed.png",
    "revision": "d711e2db98d11d3a4d951c88eb4239c4"
  },
  {
    "url": "static/img/apple-touch-icon.png",
    "revision": "d711e2db98d11d3a4d951c88eb4239c4"
  },
  {
    "url": "static/img/apple-touch-startup-image-1182x2208.png",
    "revision": "d9461752e72f9ad876191f4789bc9a46"
  },
  {
    "url": "static/img/apple-touch-startup-image-1242x2148.png",
    "revision": "74760b8b75180f3d70f2297818a14479"
  },
  {
    "url": "static/img/apple-touch-startup-image-1496x2048.png",
    "revision": "abee5ef96ab63544ef98086cf96d5bd8"
  },
  {
    "url": "static/img/apple-touch-startup-image-1536x2008.png",
    "revision": "29572a06d7a370770bb57cebc9b1dccd"
  },
  {
    "url": "static/img/apple-touch-startup-image-320x460.png",
    "revision": "f8aae8231166e549797e10150a4e109d"
  },
  {
    "url": "static/img/apple-touch-startup-image-640x1096.png",
    "revision": "9908075c32b50b05aa53e65258e391f0"
  },
  {
    "url": "static/img/apple-touch-startup-image-640x920.png",
    "revision": "8875c0b4cc9549f86d2715c924c5ff65"
  },
  {
    "url": "static/img/apple-touch-startup-image-748x1024.png",
    "revision": "ecdc6e89a75eeabd121bdef870c0f96f"
  },
  {
    "url": "static/img/apple-touch-startup-image-750x1294.png",
    "revision": "6fe6059b1bc480589f8c63f244c1582c"
  },
  {
    "url": "static/img/apple-touch-startup-image-768x1004.png",
    "revision": "b472048f5ef1e4ab0e71c5b4b200d00a"
  },
  {
    "url": "static/img/coast-228x228.png",
    "revision": "b96779ef4851a34855491b652367a933"
  },
  {
    "url": "static/img/favicon-16x16.png",
    "revision": "eab4c21a59ded16f7ae43254fdc6401b"
  },
  {
    "url": "static/img/favicon-32x32.png",
    "revision": "e92aeec058380d5f19eb42096d650568"
  },
  {
    "url": "static/img/firefox_app_128x128.png",
    "revision": "5bad7b3b4a7f307018f569bbf4c9d038"
  },
  {
    "url": "static/img/firefox_app_512x512.png",
    "revision": "72bc00f3327509f6475f85606de7d93d"
  },
  {
    "url": "static/img/firefox_app_60x60.png",
    "revision": "91c4c7e39a84f07e4ec31951159a36b7"
  },
  {
    "url": "static/img/mstile-144x144.png",
    "revision": "8bc62b2b6849e956715372c2e680530e"
  },
  {
    "url": "static/img/mstile-150x150.png",
    "revision": "a77dc994c566e7dcaa539252016c6a3c"
  },
  {
    "url": "static/img/mstile-310x150.png",
    "revision": "4db4984ca6f5221626672121544c981a"
  },
  {
    "url": "static/img/mstile-310x310.png",
    "revision": "cc883201f81b3856702d08926f46175f"
  },
  {
    "url": "static/img/mstile-70x70.png",
    "revision": "67c87fbbba6cda1ddd4b7400cf342f97"
  },
  {
    "url": "static/img/yandex-browser-50x50.png",
    "revision": "942af22509298a93af5169b1a4c2a733"
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
    "revision": "aa18732051d93c859db0d5c2b47bc8a0"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "0a3b3c208ca344f1a6146231ae8f2010"
  },
  {
    "url": "categories/debug/index.html",
    "revision": "0a262afae46521a2b60ec5dbc50d3d24"
  },
  {
    "url": "categories/index.html",
    "revision": "df90d04b00aa2233472bb48ca15a2311"
  },
  {
    "url": "categories/note/index.html",
    "revision": "09685546c81295f6e6d07e81ed79754c"
  },
  {
    "url": "categories/others/index.html",
    "revision": "e25761b2ddf484c3d3b3d924e3b60f22"
  },
  {
    "url": "index.html",
    "revision": "e6c7496e1d755781095b556c26195f80"
  },
  {
    "url": "pages/about/index.html",
    "revision": "6a2f9cfeaf4ab366efda939e2f786a6d"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/index.html",
    "revision": "40163efe7df0242ad097c906ba22faad"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/index.html",
    "revision": "0504fd928eb28261ac513a0cf3656475"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/index.html",
    "revision": "b8b3e77ebd5673413d8290d7773da225"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/index.html",
    "revision": "006eef1936daf34b519a4de0795a31c4"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/index.html",
    "revision": "75c6301e277dee2dc59c4086614bee5a"
  },
  {
    "url": "posts/2016/01/01/review-2015/index.html",
    "revision": "b23a58d8d6ce50975de4afacb0be78d2"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/index.html",
    "revision": "48087980f02f7f905250b449f931688f"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html",
    "revision": "38b4ea08cfde02e6dfcf6511d595a9b7"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/index.html",
    "revision": "153d2a0cd5f15e1cf1b0463ad1fb9363"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/index.html",
    "revision": "5bdc28054af4f96fdab694b5e737c258"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/index.html",
    "revision": "5939774ea45f0781cc9c92f9137e3f07"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/index.html",
    "revision": "ead17149cffef9dfb7eb7bb3a2ae5470"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/index.html",
    "revision": "b3836aa4127957675aaf39aa4e9ee1c6"
  },
  {
    "url": "posts/2017/01/01/review-2016/index.html",
    "revision": "f5f1c6c6f37a80736167d4f3dd3fcc65"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/index.html",
    "revision": "1f26936772a9a37a37511199224ba8b4"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/index.html",
    "revision": "b6a6f1900204533ddd606adce264c50f"
  },
  {
    "url": "posts/2018/01/01/review-2017/index.html",
    "revision": "805c5e5f8d2f53a11071371ab63aa9a2"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/index.html",
    "revision": "f5c1796c54498897406700b3c9dbdc61"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html",
    "revision": "15b07681ec1c704109090ead5df8a76b"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/index.html",
    "revision": "e6e93a9c8f8db08db19dfbba1cbd606e"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/index.html",
    "revision": "a3516fd4d20acbde2acaf036f7602107"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/index.html",
    "revision": "129c7df57069652819bb8448c0a7ad3f"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/index.html",
    "revision": "c702aaeaee884f4654f848fe98636ca3"
  },
  {
    "url": "posts/2019/11/14/monorepo-practice-in-typescript-projects/index.html",
    "revision": "f07e6d4cb54ac7c95f235af8f093b2d7"
  },
  {
    "url": "posts/index.html",
    "revision": "eea2367789b1cf383308ba4705ad484a"
  },
  {
    "url": "tags/actions/index.html",
    "revision": "c749fe56bec7132899e98971004a64d0"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "dce963aebe64a49197e463b3a3b414ac"
  },
  {
    "url": "tags/angularjs/index.html",
    "revision": "7af9c31ce62fdba675e48d4c167964b8"
  },
  {
    "url": "tags/apache/index.html",
    "revision": "45c7bbf7ec7f3bdea076dcb81af23e4f"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "c1ccdd48f80952282746ebf1fd5cec5c"
  },
  {
    "url": "tags/ci/index.html",
    "revision": "7770285bde6cb2525f5cdb075b22a1c1"
  },
  {
    "url": "tags/diary/index.html",
    "revision": "20ddc59c41a86742757f3679d1f49d28"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "7c2e1df4d198b87acf8a02e409d3de8d"
  },
  {
    "url": "tags/extjs/index.html",
    "revision": "4fb8708f8fa2c068f24b3992e48572ca"
  },
  {
    "url": "tags/github/index.html",
    "revision": "e3ff47fad3b7635fa1e776e3f62ea011"
  },
  {
    "url": "tags/google/index.html",
    "revision": "67d64778a203118395e3e9b209060fa1"
  },
  {
    "url": "tags/gulp/index.html",
    "revision": "b11754c44a1e38346e1bbdc7d51be7c4"
  },
  {
    "url": "tags/hadoop/index.html",
    "revision": "e397fda0b8383a1bbf8d2d0b42516d5b"
  },
  {
    "url": "tags/index.html",
    "revision": "903e0a5e4d0f72015c2037c2b8d5af0f"
  },
  {
    "url": "tags/intellij-idea/index.html",
    "revision": "922d2c7e510854efcad8d53e6c96f8c3"
  },
  {
    "url": "tags/java/index.html",
    "revision": "f3b112553073332087db8b36713e47d6"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "613c57c7f2a0920230a1e782fd87e983"
  },
  {
    "url": "tags/jawr/index.html",
    "revision": "57e18bb09b4f1dbc2e5e44a68b7ee484"
  },
  {
    "url": "tags/jest/index.html",
    "revision": "e62dea4f5ceaa2311819cb0f5b52a008"
  },
  {
    "url": "tags/jsf/index.html",
    "revision": "1d67da48cc4a607c344959775f5be4e8"
  },
  {
    "url": "tags/karma/index.html",
    "revision": "92319e9e74517d750342da63764b7a08"
  },
  {
    "url": "tags/lerna/index.html",
    "revision": "d05c3f9219e7d66fc32dc4dd0043d9e8"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "667e4f8eeec31f502beb55c080b32982"
  },
  {
    "url": "tags/monorepo/index.html",
    "revision": "ea95a2c04cc37f4eed3807b1fc41436c"
  },
  {
    "url": "tags/node/index.html",
    "revision": "dbb09e181ef3b75301b15f4b809f44af"
  },
  {
    "url": "tags/npm/index.html",
    "revision": "2382d36b6aa8f27c32a89ce0080b5808"
  },
  {
    "url": "tags/oracle/index.html",
    "revision": "9eb88867b9b1d48bb6eaa922ee724646"
  },
  {
    "url": "tags/pwa/index.html",
    "revision": "07c3a0e9d26def360bb8c45f57b4a328"
  },
  {
    "url": "tags/security/index.html",
    "revision": "9374ca08da7ac387f8c4a02f3a13d374"
  },
  {
    "url": "tags/shiro/index.html",
    "revision": "8dbf1fb295a16d213a16b76937c6c3a7"
  },
  {
    "url": "tags/site/index.html",
    "revision": "4130d7d3ac52166cc10e61042ef47bfd"
  },
  {
    "url": "tags/spring/index.html",
    "revision": "b3ecb59953655e20ccff2f5113bd2619"
  },
  {
    "url": "tags/springmvc/index.html",
    "revision": "31a318e3ca093caa014ab6ed63c54ccd"
  },
  {
    "url": "tags/travisci/index.html",
    "revision": "151818ee864f6c02264436c82b20227c"
  },
  {
    "url": "tags/trips/index.html",
    "revision": "5e828fd6f196e6c4cc93ac3df78a3364"
  },
  {
    "url": "tags/typescript/index.html",
    "revision": "de32075b711bd245840e2cf5e20e40fb"
  },
  {
    "url": "tags/ubuntu/index.html",
    "revision": "ca3e9d4cc21e7dd7671f20db8502cd1d"
  },
  {
    "url": "tags/vps/index.html",
    "revision": "ce240d395fd814c8ac532b935d1d503b"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "15a48129617763019278f373a16976bd"
  },
  {
    "url": "tags/webpack/index.html",
    "revision": "f3525fcb026822a2119202a337742322"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.googleAnalytics.initialize({});
