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
    "revision": "1ac005166423f4991d79010abf108db1"
  },
  {
    "url": "api/categories/blog.json",
    "revision": "8b627fa8883d364f0761e62b9290b99a"
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
    "revision": "46d6c10f8ff7d88bf84e193fa4e95566"
  },
  {
    "url": "api/navigation.json",
    "revision": "201f19f6843bdbc78a163971b2fa5667"
  },
  {
    "url": "api/pages/about.json",
    "revision": "5aec1bf45a84301f2a7ec2247553ddc8"
  },
  {
    "url": "api/posts.json",
    "revision": "ea7da637879cbba77a95fd0d9ae1a1d9"
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
    "revision": "d9b219147a7d7ebef2929ac22cb0928c"
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
    "revision": "6d0644a0449ebee78bb078fdea91243f"
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
    "revision": "de81843f45dd15dd9ab8c194868edc46"
  },
  {
    "url": "api/posts/2020/01/28/review-2019.json",
    "revision": "8692fbaef3a718044f0db7b4efd0c189"
  },
  {
    "url": "api/profile.json",
    "revision": "a5d932d01e2bea6bc56e379b0937c9b7"
  },
  {
    "url": "api/tags.json",
    "revision": "70c9051129e18d322a8798822bd2dd23"
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
    "revision": "ff208f1edb2a8a49e5f290a8d7273d41"
  },
  {
    "url": "api/tags/diary.json",
    "revision": "1872165ba2e243fc48d126540c50439b"
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
    "revision": "b563164b6d929de2e4f3ed22fb0e9726"
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
    "revision": "8b1b520474ab47f27019f3bba1128c70"
  },
  {
    "url": "api/tags/linux.json",
    "revision": "639bdabd04fbb5c4af506450f527b83e"
  },
  {
    "url": "api/tags/monorepo.json",
    "revision": "d1fdcceda558fa3adb45f7995b523daf"
  },
  {
    "url": "api/tags/node.json",
    "revision": "78b0a84bbbd47230695ca4ae3206d9e9"
  },
  {
    "url": "api/tags/npm.json",
    "revision": "b36b757972dd2c03a8f8a4cfbf488fd3"
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
    "revision": "a26d9f54e9c90ed75f7e9af7b864729d"
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
    "url": "static/css/detail.086cac399703f366458a.css",
    "revision": "89b75f8528cbaa587cba7d2163f8b001"
  },
  {
    "url": "static/css/main.2eeb53bd82d4c236f2d6.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "static/css/vendors.21cdea061c0a78b61a66.css",
    "revision": "2af97cf84b103023b4cb97daff882b9e"
  },
  {
    "url": "static/img/manifest.json",
    "revision": "37afcb01d0640b6635a9e318429bb03b"
  },
  {
    "url": "static/img/yandex-browser-manifest.json",
    "revision": "a52e7e2385486830b87fbcdf54110ad6"
  },
  {
    "url": "static/js/detail.086cac399703f366458a.js",
    "revision": "1e95228099d6440a38aeb5fb5892df9a"
  },
  {
    "url": "static/js/main.2eeb53bd82d4c236f2d6.js",
    "revision": "a7fbad58b5587d017da8e18b068ac9b2"
  },
  {
    "url": "static/js/vendors.21cdea061c0a78b61a66.js",
    "revision": "28629fa656b85c0ecd91d6245d0cf0f5"
  },
  {
    "url": "pages/about/about.png",
    "revision": "de2dd42557492de7467227a9c157c073"
  },
  {
    "url": "pages/about/about.webp",
    "revision": "cff7467a5ecd3e2cb833f221ff36b685"
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
    "revision": "aa01e793d68d5ca1990e8c473a005c17"
  },
  {
    "url": "posts/2020/01/28/review-2019/cover.webp",
    "revision": "9fdb8f31ee8e28d8be9a3f5dda97c518"
  },
  {
    "url": "posts/2020/01/28/review-2019/movement.png",
    "revision": "decf038cdfff7b2b5497644b8b0609c5"
  },
  {
    "url": "posts/2020/01/28/review-2019/movement.webp",
    "revision": "d36eac83ee693ad78f1cb9f6f5eb5846"
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
    "revision": "03bf032aa70dbb44b445ae815b517ab0"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "0724ee17e8cfb59a3299a081d1f26905"
  },
  {
    "url": "categories/debug/index.html",
    "revision": "8fa36e9b62212b5ab0b5508b8e94e223"
  },
  {
    "url": "categories/index.html",
    "revision": "837dd2d1923b443458cce5c4a61e069d"
  },
  {
    "url": "categories/note/index.html",
    "revision": "67da5e66299261d34ffe7d1276b719c9"
  },
  {
    "url": "categories/others/index.html",
    "revision": "8864f64471d857e804cc35933e669820"
  },
  {
    "url": "index.html",
    "revision": "d6d30b7ad560ddc0c885e4b898343e8c"
  },
  {
    "url": "pages/about/index.html",
    "revision": "e7beefe9d81b70dbd91e74a5ce9107a5"
  },
  {
    "url": "posts/2015/10/25/apache-shiro-spring-integration/index.html",
    "revision": "077172b2de2a2a7fdb96334e52e1fe23"
  },
  {
    "url": "posts/2015/11/10/beanutils-vs-reflection/index.html",
    "revision": "7784556b40469237315e9c40365e1b1e"
  },
  {
    "url": "posts/2015/12/13/ubuntu-mean-development-environment-setup/index.html",
    "revision": "4f511aebca42f7554bba754881218c54"
  },
  {
    "url": "posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/index.html",
    "revision": "3f98bdaedc4b5c78bdb877cbdaf9a7db"
  },
  {
    "url": "posts/2015/12/27/site-upgrade-plan/index.html",
    "revision": "5c8761c0856c743b1ae21d0ff9c42ad0"
  },
  {
    "url": "posts/2016/01/01/review-2015/index.html",
    "revision": "4af51279ea8176bad638a1a12a989a2d"
  },
  {
    "url": "posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/index.html",
    "revision": "54ff471263e9577045238b2b20604ca7"
  },
  {
    "url": "posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html",
    "revision": "a10400df745616f1a368faaec21103c4"
  },
  {
    "url": "posts/2016/03/06/site-code-structure/index.html",
    "revision": "a8ddefc886e37422d4a9866a3c240180"
  },
  {
    "url": "posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/index.html",
    "revision": "53c753566a795903d929bd7abf58bc73"
  },
  {
    "url": "posts/2016/04/10/google-codejam-2016-qualification-round/index.html",
    "revision": "63fe14dce243843dab72173885ecbe01"
  },
  {
    "url": "posts/2016/04/30/angular-ui-performance-tuning-experience/index.html",
    "revision": "193157477c14dcad6c4a44ff748949b4"
  },
  {
    "url": "posts/2016/07/05/move-to-new-apartment/index.html",
    "revision": "dcd35c1bdcac481149e86ba6d880d9d8"
  },
  {
    "url": "posts/2017/01/01/review-2016/index.html",
    "revision": "8ef5c1fa539b6b588924548650859c18"
  },
  {
    "url": "posts/2017/03/12/new-version-blog-migration/index.html",
    "revision": "c682f50710a2f4be908d03df365d9d54"
  },
  {
    "url": "posts/2017/05/05/vue-version-for-blog-app/index.html",
    "revision": "e6070d5a1758c46fae3a502432ccbe2a"
  },
  {
    "url": "posts/2018/01/01/review-2017/index.html",
    "revision": "384f01902ac1ab0d9c67388c917a9c21"
  },
  {
    "url": "posts/2018/03/03/latest-update-on-blog-app/index.html",
    "revision": "bcd463d8e36f22ea3b90fb06975e0be2"
  },
  {
    "url": "posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html",
    "revision": "d60c0ab2e42d55af430fe42d809a103e"
  },
  {
    "url": "posts/2018/04/01/karma-jawr-development-note/index.html",
    "revision": "cf665765cf144f0b1188d5645d8a3133"
  },
  {
    "url": "posts/2019/07/07/github-actions-overview-and-practice/index.html",
    "revision": "ffe1e3bb995a21e638532c39a01aea66"
  },
  {
    "url": "posts/2019/07/23/travel-in-beijing/index.html",
    "revision": "d392903de96fd2b1acb23ba3e6cabdc0"
  },
  {
    "url": "posts/2019/08/18/github-actions-new-yaml-syntax/index.html",
    "revision": "7ed2b869c18dfb6f74886b968b7ff75e"
  },
  {
    "url": "posts/2019/11/14/monorepo-practice-in-typescript-projects/index.html",
    "revision": "91830e3a4ac5bcf1c71d75ac5af8de1d"
  },
  {
    "url": "posts/2020/01/28/review-2019/index.html",
    "revision": "dda457077fedc8d12f473b319cb72193"
  },
  {
    "url": "posts/index.html",
    "revision": "864dea36fd0579b6107362d0d42e14ef"
  },
  {
    "url": "tags/actions/index.html",
    "revision": "12a46c0af669ba57a7a9a195a0181dd1"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "32ef4c38114c983d2d681677b675016a"
  },
  {
    "url": "tags/angularjs/index.html",
    "revision": "e36b99169d66b191867ff9eedee9ca55"
  },
  {
    "url": "tags/apache/index.html",
    "revision": "187b15eeaaeb6a6f499f8a6804aa3c9d"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "7687412d05983a12e6c306ea384561cd"
  },
  {
    "url": "tags/ci/index.html",
    "revision": "e1f01f230bf1e2d091b69db75af72a31"
  },
  {
    "url": "tags/diary/index.html",
    "revision": "2aebe5054b12209143b743115577037a"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "54ceb989541c28f0e343f5a14f1a5d55"
  },
  {
    "url": "tags/extjs/index.html",
    "revision": "34409821963d41daa2ba8d64bd6f3add"
  },
  {
    "url": "tags/github/index.html",
    "revision": "e807288b5c6d8cf5a9f63e64f73e6a31"
  },
  {
    "url": "tags/google/index.html",
    "revision": "98e6202664d8d1a5c1010976c8d7798b"
  },
  {
    "url": "tags/gulp/index.html",
    "revision": "d7b6ca938e77ccb8a63a34c033b3b4d6"
  },
  {
    "url": "tags/hadoop/index.html",
    "revision": "75a13b0ffe6469eb73cc7b1958961ed3"
  },
  {
    "url": "tags/index.html",
    "revision": "72f2cfcb0e855bdcfe2d15fa6045c27a"
  },
  {
    "url": "tags/intellij-idea/index.html",
    "revision": "21a958d7be0566e1462d265f5d1ef000"
  },
  {
    "url": "tags/java/index.html",
    "revision": "32d37c648437bf31d0b74cce2e7acc24"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "1902bc644d9419db74b5b35f6b82d2a6"
  },
  {
    "url": "tags/jawr/index.html",
    "revision": "a8159a9e96e3361c633b506cffdccbb5"
  },
  {
    "url": "tags/jest/index.html",
    "revision": "7f08274fcd45ddcc74c2098577726637"
  },
  {
    "url": "tags/jsf/index.html",
    "revision": "38b577da0f32705698706689fc28b48e"
  },
  {
    "url": "tags/karma/index.html",
    "revision": "a33276f852ee9930b126bf08e48da996"
  },
  {
    "url": "tags/lerna/index.html",
    "revision": "2d094a104151b24bf720ab1ecabe8406"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "77a37d4c0f0223b8a261b2312bf00081"
  },
  {
    "url": "tags/monorepo/index.html",
    "revision": "88a966f6b5a3c3d4541f9ca7bf605ed1"
  },
  {
    "url": "tags/node/index.html",
    "revision": "e8c9be8778919fd72b07487c5ef6381c"
  },
  {
    "url": "tags/npm/index.html",
    "revision": "ff0e71fb18c0586dab8622066aaadf8d"
  },
  {
    "url": "tags/oracle/index.html",
    "revision": "b00067841c005a30e410ff3d6d0832b7"
  },
  {
    "url": "tags/pwa/index.html",
    "revision": "aaf632b1269de22c2eb55c41cc8273c4"
  },
  {
    "url": "tags/security/index.html",
    "revision": "011075d2099557945700adefe7467fd3"
  },
  {
    "url": "tags/shiro/index.html",
    "revision": "e77ac4af0fb839d00577ec9ee3e2c787"
  },
  {
    "url": "tags/site/index.html",
    "revision": "dbe16170045d23fb249f48d01e16469a"
  },
  {
    "url": "tags/spring/index.html",
    "revision": "60edeb3ad065972e0cc0b34148bac472"
  },
  {
    "url": "tags/springmvc/index.html",
    "revision": "beae668e940c75da2ceb986e5208df9d"
  },
  {
    "url": "tags/travisci/index.html",
    "revision": "6a2ad77beec07fd1eb9bf53c9214d970"
  },
  {
    "url": "tags/trips/index.html",
    "revision": "b383cd42cbe7d6e09a06773db7e4b2b9"
  },
  {
    "url": "tags/typescript/index.html",
    "revision": "f87b0133fb1a0ada189efe3b69a822af"
  },
  {
    "url": "tags/ubuntu/index.html",
    "revision": "db4fa55747e70c9b453e93d18d0963d9"
  },
  {
    "url": "tags/vps/index.html",
    "revision": "d7c0ee63762ad57d78c7d46c064fc0a5"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "a6d9e8c53dcb29c24e6cea31cd35eba5"
  },
  {
    "url": "tags/webpack/index.html",
    "revision": "9ed49adc799af2a2931aaeed1fc78b56"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
