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
    "revision": "6ee0b94936bdf969e5b8f0c7e9d28ec7"
  },
  {
    "url": "api/categories/blog.json",
    "revision": "b9fdd62d8fbeb9d869f65793d62c82d6"
  },
  {
    "url": "api/categories/debug.json",
    "revision": "169a1857229a0e99ae60b96e09b72054"
  },
  {
    "url": "api/categories/note.json",
    "revision": "a600af9f4194d72a227a5aed66634cea"
  },
  {
    "url": "api/categories/others.json",
    "revision": "80ec52390016c99ef4143b42ecef7e89"
  },
  {
    "url": "api/home.json",
    "revision": "243684c89fdcb4deb0577619174d9969"
  },
  {
    "url": "api/navigation.json",
    "revision": "50e852e943669045650ba76f027cb0e3"
  },
  {
    "url": "api/posts.json",
    "revision": "8c165f3eb114eed40d01592c0a68ba39"
  },
  {
    "url": "api/posts/2015/10/25/apache-shiro-spring-integration.json",
    "revision": "387ac5f462e76b56de4315c21517c7ea"
  },
  {
    "url": "api/posts/2015/11/10/beanutils-vs-reflection.json",
    "revision": "e006ce00e5dd9cd1af80d64bb2a048ed"
  },
  {
    "url": "api/posts/2015/12/13/ubuntu-mean-development-environment-setup.json",
    "revision": "9a93dbce24160c1d444ca6da67404a01"
  },
  {
    "url": "api/posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file.json",
    "revision": "13e0787a32141c4ee0cd4fdd273d8a0b"
  },
  {
    "url": "api/posts/2015/12/27/site-upgrade-plan.json",
    "revision": "7cf34950f50d5a1ab0a4b1c4f2567f28"
  },
  {
    "url": "api/posts/2016/01/01/review-2015.json",
    "revision": "eecdcec655f66446a31554bd6541870d"
  },
  {
    "url": "api/posts/2016/01/11/nodejs-oracledb-install-on-rhel-6.json",
    "revision": "07052c911bcaacf9646cab1c99717730"
  },
  {
    "url": "api/posts/2016/01/12/nodejs-oracledb-ora-21561-solution.json",
    "revision": "0cb56de8947fcddf875b64176b4bb1e1"
  },
  {
    "url": "api/posts/2016/03/06/site-code-structure.json",
    "revision": "402c520b7446e2cfafd64055709b0690"
  },
  {
    "url": "api/posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide.json",
    "revision": "d38e4a958f76abdfa776ac80da279d4e"
  },
  {
    "url": "api/posts/2016/04/10/google-codejam-2016-qualification-round.json",
    "revision": "1d9f37139cd9ef2bc7d92044164ed6df"
  },
  {
    "url": "api/posts/2016/04/30/angular-ui-performance-tuning-experience.json",
    "revision": "5fafa1d12b3408d0f9142c4f4881fa1e"
  },
  {
    "url": "api/posts/2016/07/05/move-to-new-apartment.json",
    "revision": "827468b7991ac97adceb00fa72701718"
  },
  {
    "url": "api/posts/2017/01/01/review-2016.json",
    "revision": "6edd2b734aacf32b48c03c13ff64afa1"
  },
  {
    "url": "api/posts/2017/03/12/new-version-blog-migration.json",
    "revision": "dd1dc06c9fc75ad91e7637018aca44fc"
  },
  {
    "url": "api/posts/2017/05/05/vue-version-for-blog-app.json",
    "revision": "79d2a984ca5efbcb7304c317b4b320d7"
  },
  {
    "url": "api/posts/2018/01/01/review-2017.json",
    "revision": "154c95f2c0388e7a498a6121821579a8"
  },
  {
    "url": "api/posts/2018/03/03/latest-update-on-blog-app.json",
    "revision": "7abf2cb05f7eabfc102109f1e42b0aa7"
  },
  {
    "url": "api/posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution.json",
    "revision": "e714be34775dd52745ed71cc1d89e03e"
  },
  {
    "url": "api/posts/2018/04/01/karma-jawr-development-note.json",
    "revision": "802af0e57c6adf743abf9e50673d6387"
  },
  {
    "url": "api/posts/2019/07/07/github-actions-overview-and-practice.json",
    "revision": "2b4f9882fa821efb7a0c7040eee3720a"
  },
  {
    "url": "api/posts/2019/07/23/travel-in-beijing.json",
    "revision": "4e6e25eea1f300ba1044ca3fba4345af"
  },
  {
    "url": "api/posts/2019/08/18/github-actions-new-yaml-syntax.json",
    "revision": "1eb16fd1a2822bb828055c9720f0b3a0"
  },
  {
    "url": "api/profile.json",
    "revision": "a5d932d01e2bea6bc56e379b0937c9b7"
  },
  {
    "url": "api/tags.json",
    "revision": "d902a4746dc972b87319e65c70affb96"
  },
  {
    "url": "api/tags/actions.json",
    "revision": "596d4dfc9297999f32f83a6c6fea5685"
  },
  {
    "url": "api/tags/angular.json",
    "revision": "592dbcf64889e44bae400814ff438339"
  },
  {
    "url": "api/tags/angularjs.json",
    "revision": "da375b8170a7717def8b6d986b52419f"
  },
  {
    "url": "api/tags/apache.json",
    "revision": "7f286184a55c558dbfea073ca4f1ba42"
  },
  {
    "url": "api/tags/blog.json",
    "revision": "60641c7e93624f0465d94a9b866fe534"
  },
  {
    "url": "api/tags/ci.json",
    "revision": "8ffe8f5435a863d38f4d0e3bf82be883"
  },
  {
    "url": "api/tags/diary.json",
    "revision": "72e7e748807a9495df26ff3828db5d0a"
  },
  {
    "url": "api/tags/docker.json",
    "revision": "768a9fc5a9b0790e83907d65a2c2dd02"
  },
  {
    "url": "api/tags/extjs.json",
    "revision": "317c3213ff11b189306b4d6eef0f987a"
  },
  {
    "url": "api/tags/github.json",
    "revision": "8417e67f55437c5d8d397765a626b45a"
  },
  {
    "url": "api/tags/google.json",
    "revision": "fdba8d18571ab3409965b27885e23ecf"
  },
  {
    "url": "api/tags/gulp.json",
    "revision": "3bf88dd7453b59fc60f14ee60589d5ff"
  },
  {
    "url": "api/tags/hadoop.json",
    "revision": "b29a190b3bc63b471aa6c0f2e752c59c"
  },
  {
    "url": "api/tags/intellij-idea.json",
    "revision": "97fc257fd99f9a4b889de1915b0aadf9"
  },
  {
    "url": "api/tags/java.json",
    "revision": "a2dc1440ca4d905b5d52d51716a65808"
  },
  {
    "url": "api/tags/javascript.json",
    "revision": "35e59329deb4822515ac5cbb16252fc9"
  },
  {
    "url": "api/tags/jawr.json",
    "revision": "a5f6193c3d5c5c4cb8db01b16333cd44"
  },
  {
    "url": "api/tags/jsf.json",
    "revision": "43c4a3813d55fe7f82ed20021e50b065"
  },
  {
    "url": "api/tags/karma.json",
    "revision": "2114ff8e4e9336a62aa57c28795f839c"
  },
  {
    "url": "api/tags/linux.json",
    "revision": "8cb35b0ec3779e5a8af27fa36335345a"
  },
  {
    "url": "api/tags/node.json",
    "revision": "f081911ce241f473ebb9b80828fcf5b9"
  },
  {
    "url": "api/tags/npm.json",
    "revision": "7f8ca95a89650379132110a98a81b957"
  },
  {
    "url": "api/tags/oracle.json",
    "revision": "7adb6b641209e626d098a84d63e3dd50"
  },
  {
    "url": "api/tags/pwa.json",
    "revision": "29a8888549b9682c727ede4afab102a2"
  },
  {
    "url": "api/tags/security.json",
    "revision": "5a8d80924d0083cde865ffafafd12628"
  },
  {
    "url": "api/tags/shiro.json",
    "revision": "edd7eb999dd7ea0d40fda5b55fed91cf"
  },
  {
    "url": "api/tags/site.json",
    "revision": "748a29e068c1759acaeb7089fb06b87d"
  },
  {
    "url": "api/tags/spring.json",
    "revision": "5c6064505b47a6593d60ee7693fb4521"
  },
  {
    "url": "api/tags/springmvc.json",
    "revision": "581de7c98ae4289a348a63bf2eb6e266"
  },
  {
    "url": "api/tags/travisci.json",
    "revision": "f234eb666bcdc5dad2ee942d777b04d6"
  },
  {
    "url": "api/tags/trips.json",
    "revision": "d0738643ed48312e31a1ac9a901eaf0d"
  },
  {
    "url": "api/tags/ubuntu.json",
    "revision": "def11e63abc1b79d39733f036991e0cc"
  },
  {
    "url": "api/tags/vps.json",
    "revision": "a679c5d96a6bf4cc74e99e492a860ab4"
  },
  {
    "url": "api/tags/vue.json",
    "revision": "e7fd4b7407e0dbfdffe3f9a095b50ed3"
  },
  {
    "url": "api/tags/webpack.json",
    "revision": "e642be069ada6bc79efbe075b2fce956"
  },
  {
    "url": "static/css/1.23e68cd7207381cfcf59.css",
    "revision": "8ceacd6286906a667c21221c5bd64a42"
  },
  {
    "url": "static/css/main.6aa4ca9df6338470bcee.css",
    "revision": "1c88b0307f7fb4f0cdce3ca0c6617faf"
  },
  {
    "url": "static/img/manifest.json",
    "revision": "37afcb01d0640b6635a9e318429bb03b"
  },
  {
    "url": "static/img/yandex-browser-manifest.json",
    "revision": "82004d35bbd955731f48d16793e92155"
  },
  {
    "url": "static/js/main.6aa4ca9df6338470bcee.js",
    "revision": "d873bf27cbfbd244521df40b955f248e"
  },
  {
    "url": "static/js/vendor.23e68cd7207381cfcf59.js",
    "revision": "a06d35aef21389455ed0206e753d15a4"
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
    "revision": "58469ef5d640e66d24a345337e365e14"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "73f0ce887d290944a6478fc2af06d74f"
  },
  {
    "url": "categories/debug/index.html",
    "revision": "7e04be42a840a1bfdd7eeff7a908a446"
  },
  {
    "url": "categories/index.html",
    "revision": "eba5c07f9aa31eab957cd061a769215a"
  },
  {
    "url": "categories/note/index.html",
    "revision": "40c2d1634fca4be0530a5cfbed149f60"
  },
  {
    "url": "categories/others/index.html",
    "revision": "cf3dba57ea3576966f439262ce1e2ee3"
  },
  {
    "url": "index.html",
    "revision": "c566c202e5e0d874094da04ddb6a543e"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/index.html",
    "revision": "a46fa52a5fbcba803c5b0e1efb57a7ad"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/index.html",
    "revision": "f46b02dbe6d869482069c902cc427c72"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/index.html",
    "revision": "3452beb975bf2fe86360508141920724"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/index.html",
    "revision": "d85012f620eaf6c442af3c9ad2212b3c"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/index.html",
    "revision": "5b8735447d0c49dcfafb294de3c54220"
  },
  {
    "url": "posts/2016/01/01/review-2015/index.html",
    "revision": "115d7175d155dc116eb9b6191ac40c73"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/index.html",
    "revision": "5162414daed317c50f320f93a951d70d"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html",
    "revision": "ae92b2cd6cb438e1c8e47f6be309ee46"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/index.html",
    "revision": "79e9796900b8b5767844b05bd7b7a20d"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/index.html",
    "revision": "be2946be581b6d9e729c4281d648ddd5"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/index.html",
    "revision": "51fb3c1344d0793e213abe7e7ed386a7"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/index.html",
    "revision": "02e9775738d9bb268d8713647b4fd468"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/index.html",
    "revision": "9b1e49045287c622a4c14918dec7d897"
  },
  {
    "url": "posts/2017/01/01/review-2016/index.html",
    "revision": "3933870748ebbf3338277e9efadb612d"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/index.html",
    "revision": "08210c661554e9a14ad133e5d4abd86a"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/index.html",
    "revision": "1d338404fab4c5c3b085bef3e1752e96"
  },
  {
    "url": "posts/2018/01/01/review-2017/index.html",
    "revision": "e8aa7893c4dc1042908e05e1e1dd1805"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/index.html",
    "revision": "115c9f09886486c6235fbafa87fd3fe0"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html",
    "revision": "5a2b5fa64112b0c81924ff801f8eacf7"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/index.html",
    "revision": "2330035e2feee3288a8d1f8029b23644"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/index.html",
    "revision": "6c82d9fe2de2971cb9c9cae745947a8c"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/index.html",
    "revision": "2fa27b1fcacfd0019d3c23518766d6e1"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/index.html",
    "revision": "1ad9102aaab1aa725faafc93d84074d8"
  },
  {
    "url": "posts/index.html",
    "revision": "7cc30cda3a6706f5c9c4edb165919d5c"
  },
  {
    "url": "tags/actions/index.html",
    "revision": "47e92e8ab79c2114fd6cc40b34a0702a"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "a60d8f64dc95e67119b2b73e75e928a1"
  },
  {
    "url": "tags/angularjs/index.html",
    "revision": "babf3a72ef9dec76e6fd5647de9dc01a"
  },
  {
    "url": "tags/apache/index.html",
    "revision": "eec8cfa8a697913d1b8a902e3e47bdc4"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "2f60e775edf2fc3fe1851b35b9f9ad8b"
  },
  {
    "url": "tags/ci/index.html",
    "revision": "8330dccd30ae8959f2deea5fbf11af1f"
  },
  {
    "url": "tags/diary/index.html",
    "revision": "f8bfd69461a5bf1a98b987abdc6b580c"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "916a4bf51458496c723e0b8218c00813"
  },
  {
    "url": "tags/extjs/index.html",
    "revision": "6922985b6252d07a84e7e98b779e719a"
  },
  {
    "url": "tags/github/index.html",
    "revision": "0b7a014c0a06f719f966e413991982e4"
  },
  {
    "url": "tags/google/index.html",
    "revision": "7db8ddcb70191c07c26bfa7c497246e3"
  },
  {
    "url": "tags/gulp/index.html",
    "revision": "431867e6a59bb3f60064b18bf4965759"
  },
  {
    "url": "tags/hadoop/index.html",
    "revision": "00b0976ae924df9e86baeae3f1bc6042"
  },
  {
    "url": "tags/index.html",
    "revision": "2efced08e2f4d7f5e843fbeb2e18de6b"
  },
  {
    "url": "tags/intellij-idea/index.html",
    "revision": "9739ccc85e785a043d0bc2d44f6e40a4"
  },
  {
    "url": "tags/java/index.html",
    "revision": "d3982109de39a3ba59650f00197cd37c"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "b67f2aa59fbe78902ba157edcdcf5867"
  },
  {
    "url": "tags/jawr/index.html",
    "revision": "fe79987fe3a3913ce24df970aab9b626"
  },
  {
    "url": "tags/jsf/index.html",
    "revision": "8d1f4a21dd5d356a19091e65a568f3a7"
  },
  {
    "url": "tags/karma/index.html",
    "revision": "8b9bf87ddca6a22aef9ed673c25da23c"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "b1a1551bfe4fed02ce1e88e1a6cf0a4f"
  },
  {
    "url": "tags/node/index.html",
    "revision": "711b60dba84322a1f54a77e0b599d1bf"
  },
  {
    "url": "tags/npm/index.html",
    "revision": "03c4ceb616592fff303d4b3cc0d558eb"
  },
  {
    "url": "tags/oracle/index.html",
    "revision": "f385b1b8d4540314cc982df468668862"
  },
  {
    "url": "tags/pwa/index.html",
    "revision": "33b62a8a687c9dfca781acba492d500e"
  },
  {
    "url": "tags/security/index.html",
    "revision": "78ceb4e2f1efe8dd77270e118140a2c8"
  },
  {
    "url": "tags/shiro/index.html",
    "revision": "87c30feeb6e5235ea8c0c83f1ca6847c"
  },
  {
    "url": "tags/site/index.html",
    "revision": "951197e1cdc822e93f2a975bab3e3398"
  },
  {
    "url": "tags/spring/index.html",
    "revision": "89287aaf2878db515aaca372f65cf58d"
  },
  {
    "url": "tags/springmvc/index.html",
    "revision": "1b447758c643bf05a33242ee080c2b83"
  },
  {
    "url": "tags/travisci/index.html",
    "revision": "8c66ce90885eeb25949d1241c61d81c8"
  },
  {
    "url": "tags/trips/index.html",
    "revision": "7f1efa82871d15c6d22eecc0a9c59ea9"
  },
  {
    "url": "tags/ubuntu/index.html",
    "revision": "94a5d025b6bf53a7afe27b2c85ea2642"
  },
  {
    "url": "tags/vps/index.html",
    "revision": "ffff66176558dbf4f753f39cf25e7c7e"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "7ddeabac80e41d65bfb60f8ab51c61c4"
  },
  {
    "url": "tags/webpack/index.html",
    "revision": "64425466ec9072398a346a221cbc5d7f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.googleAnalytics.initialize({});
