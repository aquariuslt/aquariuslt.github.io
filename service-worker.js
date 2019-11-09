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
    "revision": "c8004d1d33b7d6bb58c991d4527e53a7"
  },
  {
    "url": "api/categories/debug.json",
    "revision": "d495de795487013cefd6400dc0db9b6a"
  },
  {
    "url": "api/categories/note.json",
    "revision": "9d449bbc262bb5c806ed1bc7ef056a77"
  },
  {
    "url": "api/categories/others.json",
    "revision": "58b75e41ece1bce24d2a3851ced7de5c"
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
    "revision": "7a2b55d34053c51adf3e361993121b1f"
  },
  {
    "url": "api/posts/2015/11/10/beanutils-vs-reflection.json",
    "revision": "6de79d5c43b36040f1272c9d995ff237"
  },
  {
    "url": "api/posts/2015/12/13/ubuntu-mean-development-environment-setup.json",
    "revision": "5e29604955f9ba48e83e672287f9f19f"
  },
  {
    "url": "api/posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file.json",
    "revision": "846fda16bb2525bdcd5658d9eac2bd57"
  },
  {
    "url": "api/posts/2015/12/27/site-upgrade-plan.json",
    "revision": "01e652fb1e0e315423e08ef49312a644"
  },
  {
    "url": "api/posts/2016/01/01/review-2015.json",
    "revision": "19208606a7785ff535532c7097f26cdd"
  },
  {
    "url": "api/posts/2016/01/11/nodejs-oracledb-install-on-rhel-6.json",
    "revision": "a1006a6d4b31289d5254111ac11299c9"
  },
  {
    "url": "api/posts/2016/01/12/nodejs-oracledb-ora-21561-solution.json",
    "revision": "0cb7f90c5a3abb5715e78d440e0e77de"
  },
  {
    "url": "api/posts/2016/03/06/site-code-structure.json",
    "revision": "ebdbdf00de6c0248af561585e53dcc41"
  },
  {
    "url": "api/posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide.json",
    "revision": "199f411b0eee959496e3c04c889a3963"
  },
  {
    "url": "api/posts/2016/04/10/google-codejam-2016-qualification-round.json",
    "revision": "f1f733a1bf3625097ff895b9796bfcfb"
  },
  {
    "url": "api/posts/2016/04/30/angular-ui-performance-tuning-experience.json",
    "revision": "188f9b3e00229937ce817a5526dab451"
  },
  {
    "url": "api/posts/2016/07/05/move-to-new-apartment.json",
    "revision": "9855ad50e9f5db3b318123af317d7fc4"
  },
  {
    "url": "api/posts/2017/01/01/review-2016.json",
    "revision": "2adaf2fc12445e545ce308a751608363"
  },
  {
    "url": "api/posts/2017/03/12/new-version-blog-migration.json",
    "revision": "dcac894f3c7ab76596db79684a3f0852"
  },
  {
    "url": "api/posts/2017/05/05/vue-version-for-blog-app.json",
    "revision": "4c64db729b1179bb566df7a71adbf8d0"
  },
  {
    "url": "api/posts/2018/01/01/review-2017.json",
    "revision": "84e3e4bbcd5d1fed0247c7072160dbe9"
  },
  {
    "url": "api/posts/2018/03/03/latest-update-on-blog-app.json",
    "revision": "fd55341e61ed3f58bc0f455f3b289f43"
  },
  {
    "url": "api/posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution.json",
    "revision": "9be4929d0f0752e96953e28d9752359c"
  },
  {
    "url": "api/posts/2018/04/01/karma-jawr-development-note.json",
    "revision": "0c3605366e31948e0067574e47e88427"
  },
  {
    "url": "api/posts/2019/07/07/github-actions-overview-and-practice.json",
    "revision": "3d292305acd32403bfd9d098c5db88ea"
  },
  {
    "url": "api/posts/2019/07/23/travel-in-beijing.json",
    "revision": "5099e63a0c845ead4560cb0b4e724f44"
  },
  {
    "url": "api/posts/2019/08/18/github-actions-new-yaml-syntax.json",
    "revision": "a1ed0cce0e8d924c045b854886b0eccf"
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
    "revision": "7a05995add29fccc16e2e80315de1c50"
  },
  {
    "url": "api/tags/angular.json",
    "revision": "af8ae26945b7bd39388a50f13b4e6190"
  },
  {
    "url": "api/tags/angularjs.json",
    "revision": "a977a3c8dd3f60203cc22cb628a74dcf"
  },
  {
    "url": "api/tags/apache.json",
    "revision": "9de0f4725045602499b8df251bbd682a"
  },
  {
    "url": "api/tags/blog.json",
    "revision": "295181d090d94a68b88e82721d24f14a"
  },
  {
    "url": "api/tags/ci.json",
    "revision": "8d795e50e5e9a9fb52f1a52a05036e3e"
  },
  {
    "url": "api/tags/diary.json",
    "revision": "b24aa3b76c63dad98ba489dde1f5a8b4"
  },
  {
    "url": "api/tags/docker.json",
    "revision": "290b04d23130a2cb18e809665d1043c8"
  },
  {
    "url": "api/tags/extjs.json",
    "revision": "39a14200c178d2739505e4ca8de4b977"
  },
  {
    "url": "api/tags/github.json",
    "revision": "e29495b5dd5bf58ff7acd5ded9f92d84"
  },
  {
    "url": "api/tags/google.json",
    "revision": "8aa47ab1345d10302da8abe762d72c50"
  },
  {
    "url": "api/tags/gulp.json",
    "revision": "c2dd39293f5df4351de19162f0ec5a92"
  },
  {
    "url": "api/tags/hadoop.json",
    "revision": "e59de3ea0bc18bd0c8577041c64753f9"
  },
  {
    "url": "api/tags/intellij-idea.json",
    "revision": "4d9b14dada0e427ba6a7badc5be96f1b"
  },
  {
    "url": "api/tags/java.json",
    "revision": "b41a109959f86f99076ca5b3e8f8a8f5"
  },
  {
    "url": "api/tags/javascript.json",
    "revision": "3da2b762e48e464ce86ed909d44f2f15"
  },
  {
    "url": "api/tags/jawr.json",
    "revision": "44fe5f784c9c3f1801fb2a23426e55da"
  },
  {
    "url": "api/tags/jsf.json",
    "revision": "dc4b97d914f102fa42b4aef592c0ea64"
  },
  {
    "url": "api/tags/karma.json",
    "revision": "e9f4aa1cd77d34b976af43691669693b"
  },
  {
    "url": "api/tags/linux.json",
    "revision": "60ba15be2e78b14d381096995f0e5f27"
  },
  {
    "url": "api/tags/node.json",
    "revision": "02228d4bec0439666bfb0140722185fb"
  },
  {
    "url": "api/tags/npm.json",
    "revision": "73ea098f5c33d311a1581da2c92a7912"
  },
  {
    "url": "api/tags/oracle.json",
    "revision": "24541660ec31a4eebe1ba1393754be4e"
  },
  {
    "url": "api/tags/pwa.json",
    "revision": "a3f04f6ef576369dae56530d77aa2c35"
  },
  {
    "url": "api/tags/security.json",
    "revision": "a0f6ef45ac67f0e70726d39cd033c95c"
  },
  {
    "url": "api/tags/shiro.json",
    "revision": "fa0bfa8c26922e5632e6a8d79685867f"
  },
  {
    "url": "api/tags/site.json",
    "revision": "0e32f1a438e59d694a45072a7c0f19e5"
  },
  {
    "url": "api/tags/spring.json",
    "revision": "bf0b7e601d8dbc2fc90a679556523547"
  },
  {
    "url": "api/tags/springmvc.json",
    "revision": "a431faa84df059a3d4d807c5cf624a75"
  },
  {
    "url": "api/tags/travisci.json",
    "revision": "51940efe9e819725405e7a9a436efa98"
  },
  {
    "url": "api/tags/trips.json",
    "revision": "9522db7b80d72d2a3370a77e2a08edec"
  },
  {
    "url": "api/tags/ubuntu.json",
    "revision": "85a1ead934fef63f1a7035ce9632ca89"
  },
  {
    "url": "api/tags/vps.json",
    "revision": "e0a5359df9ed982e7047f5cb999e3c17"
  },
  {
    "url": "api/tags/vue.json",
    "revision": "1c76a2b11a2044f48d004cf62c3a7179"
  },
  {
    "url": "api/tags/webpack.json",
    "revision": "0598aafc8e4cbade1edf66243850e311"
  },
  {
    "url": "static/css/main.44eef965413198f486f8.css",
    "revision": "1c88b0307f7fb4f0cdce3ca0c6617faf"
  },
  {
    "url": "static/css/vendors.ca69ba2f13a46f89d211.css",
    "revision": "8ceacd6286906a667c21221c5bd64a42"
  },
  {
    "url": "static/img/manifest.json",
    "revision": "37afcb01d0640b6635a9e318429bb03b"
  },
  {
    "url": "static/img/yandex-browser-manifest.json",
    "revision": "6931f0504f0ac48687247529f8bed093"
  },
  {
    "url": "static/js/main.44eef965413198f486f8.js",
    "revision": "04acf87b28c893edf49182e5848f9fe6"
  },
  {
    "url": "static/js/vendors.ca69ba2f13a46f89d211.js",
    "revision": "0d58d95098053e0bc598d94a841b849e"
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
    "revision": "3cf3545fb4a0b33753cec3e4fc151998"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "5221edc394a47cceb579290952fe400c"
  },
  {
    "url": "categories/debug/index.html",
    "revision": "1b2ab4d0cb24f7fe01fc483954ed6b5f"
  },
  {
    "url": "categories/index.html",
    "revision": "c960246e660dd8f35d5f4dbad5318dd0"
  },
  {
    "url": "categories/note/index.html",
    "revision": "fd4efab60f3a46a42fb842a56ced0053"
  },
  {
    "url": "categories/others/index.html",
    "revision": "4e088075d0422e00e338a487e442f9a9"
  },
  {
    "url": "index.html",
    "revision": "9bf54ce09a9ab91b2bf674d3bab9d318"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/index.html",
    "revision": "36e5273bdccca2dc4010f149f1dfe85a"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/index.html",
    "revision": "82ea64b6adcfb4e984f5c56e58c6a4ce"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/index.html",
    "revision": "3709197add97d7d63689e3af39923506"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/index.html",
    "revision": "5e8e43143255bf0af1fdb7e1e4f2c408"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/index.html",
    "revision": "3a68049c2757910f38c255104ec4ae41"
  },
  {
    "url": "posts/2016/01/01/review-2015/index.html",
    "revision": "876d71e839e2a5e6e325682dbbd578bf"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/index.html",
    "revision": "96537ec28256fc4da57c84852ab4e6cf"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html",
    "revision": "44dad49b90e4024a1327b9fc8f6fd390"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/index.html",
    "revision": "ed55813547e7120df745a009920c318e"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/index.html",
    "revision": "2b031a55662bdd5ae72d85cbc017eb44"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/index.html",
    "revision": "35d36d31258fa4f89506979e86b53827"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/index.html",
    "revision": "e62b68404d6befa326ed0cc660dd2015"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/index.html",
    "revision": "7e685ea35666a42b8dc14e3ec1a780e1"
  },
  {
    "url": "posts/2017/01/01/review-2016/index.html",
    "revision": "c5ba0b428f54940a5f4d30b9e3f160c7"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/index.html",
    "revision": "930ea072572fcc113552a2a40382d11b"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/index.html",
    "revision": "f7170d7591aa70d63639994634cac1cc"
  },
  {
    "url": "posts/2018/01/01/review-2017/index.html",
    "revision": "0fa1e88333175cab5baae94d1f1812a4"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/index.html",
    "revision": "34f9c3d77e945c0e38dab55f2501109d"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html",
    "revision": "80d2e6bc6c2287ee4cffda4dc5f7cfee"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/index.html",
    "revision": "5e85fb80d44f3f1f195578fd5ed3b4a9"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/index.html",
    "revision": "861a1949a7a0ca95e067bc317eed9337"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/index.html",
    "revision": "5f42ebd7f76e08437605a0bde31bc44c"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/index.html",
    "revision": "4bcf6d53d3df7485d6869cb15781d223"
  },
  {
    "url": "posts/index.html",
    "revision": "a6c8f432d6e6756041d9c9eccd2cdef6"
  },
  {
    "url": "tags/actions/index.html",
    "revision": "9bc78acfa93de93da61d0c85d98c6560"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "6af98bf659e9d573f2ec28529b653709"
  },
  {
    "url": "tags/angularjs/index.html",
    "revision": "c33b288d9f3f25016cadac44295a593b"
  },
  {
    "url": "tags/apache/index.html",
    "revision": "cf1bce83ed5e10b0dbfef7b3606f65e0"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "0667336b38aa8bdd37f73c7b12c18e95"
  },
  {
    "url": "tags/ci/index.html",
    "revision": "c42aa5577ad8c4295a5d10da12c98d3b"
  },
  {
    "url": "tags/diary/index.html",
    "revision": "8362d3a1cb240ee0fe3d9dba4cdeaa84"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "5a44ea80783b58031ebae2b3930a3629"
  },
  {
    "url": "tags/extjs/index.html",
    "revision": "9d2b1c40bada2f1a698a9f3d3f713426"
  },
  {
    "url": "tags/github/index.html",
    "revision": "fc8f570824dfc3cfe59206e681b30981"
  },
  {
    "url": "tags/google/index.html",
    "revision": "0a70c3f543cc4f8ad2a4513d14a13e93"
  },
  {
    "url": "tags/gulp/index.html",
    "revision": "1545e14df5995ff56afa94cf7523a01f"
  },
  {
    "url": "tags/hadoop/index.html",
    "revision": "97258319331862134423bcea169b84b1"
  },
  {
    "url": "tags/index.html",
    "revision": "fb02d723d976c94995d4fcad78e11301"
  },
  {
    "url": "tags/intellij-idea/index.html",
    "revision": "a3b5282da71f30874394a11186c92b56"
  },
  {
    "url": "tags/java/index.html",
    "revision": "5655a78ae637c2105fc7846a3c51dba3"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "0d71c86123c33b2b16390853510d5e78"
  },
  {
    "url": "tags/jawr/index.html",
    "revision": "7b404a171c17df3fac3537633bffed9a"
  },
  {
    "url": "tags/jsf/index.html",
    "revision": "daacb72742f14c4b2faac50f6c54d924"
  },
  {
    "url": "tags/karma/index.html",
    "revision": "ecab6bcd348f63679a64f8ab4cf7bb02"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "4ad535e845260d0b4e00063a08d23e99"
  },
  {
    "url": "tags/node/index.html",
    "revision": "d0be40d02f8798113cd7b633605baa2b"
  },
  {
    "url": "tags/npm/index.html",
    "revision": "7281efa52345e475eb20f060bed5be4f"
  },
  {
    "url": "tags/oracle/index.html",
    "revision": "2bbf03586b3229e47cff2e552bf253f1"
  },
  {
    "url": "tags/pwa/index.html",
    "revision": "644cc59a24f1d37520f4d0e0f783d1cd"
  },
  {
    "url": "tags/security/index.html",
    "revision": "432dbcf0773074ee59f6edcac4d7fffa"
  },
  {
    "url": "tags/shiro/index.html",
    "revision": "ba805ebe3f8aa6bfdcedc0c26d90c911"
  },
  {
    "url": "tags/site/index.html",
    "revision": "5eda415721c3c0c826753d1c9604c634"
  },
  {
    "url": "tags/spring/index.html",
    "revision": "a99c68071d31e08726a66a81c0190421"
  },
  {
    "url": "tags/springmvc/index.html",
    "revision": "2ff30ebce6ea81937d61c4956a1eeb16"
  },
  {
    "url": "tags/travisci/index.html",
    "revision": "27213e85ebc0b826613cb2105b43e862"
  },
  {
    "url": "tags/trips/index.html",
    "revision": "b4565c29536238afd6196efb5d17166c"
  },
  {
    "url": "tags/ubuntu/index.html",
    "revision": "92c33e401e44e33b7a8d83c221a8d126"
  },
  {
    "url": "tags/vps/index.html",
    "revision": "255afdff63243252c91c0b57e77f59fb"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "99dfc73fdfe70be80cceeb498101e2c2"
  },
  {
    "url": "tags/webpack/index.html",
    "revision": "8c32385695ba805779e9e9160e537f1b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.googleAnalytics.initialize({});
