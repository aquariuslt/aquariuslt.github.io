if (!self.define) {
  const e = async (e) => {
      if (
        ('require' !== e && (e += '.js'),
        !i[e] &&
        (await new Promise(async (a) => {
          if ('document' in self) {
            const i = document.createElement('script');
            (i.src = e), document.head.appendChild(i), (i.onload = a);
          } else importScripts(e), a();
        }),
          !i[e]))
      )
        throw new Error(`Module ${e} didn’t register its module`);
      return i[e];
    },
    a = async (a, i) => {
      const o = await Promise.all(a.map(e));
      i(1 === o.length ? o[0] : o);
    },
    i = { require: Promise.resolve(a) };
  self.define = (a, o, s) => {
    i[a] ||
    (i[a] = new Promise(async (i) => {
      let r = {};
      const n = { uri: location.origin + a.slice(1) },
        t = await Promise.all(o.map((a) => ('exports' === a ? r : 'module' === a ? n : e(a)))),
        c = s(...t);
      r.default || (r.default = c), i(r);
    }));
  };
}
define('./service-worker.js', ['./workbox-570e5868'], function(e) {
  'use strict';
  e.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: 'api/categories.json', revision: 'd00a738be9c8dbc22d23a33e2fd1b38f' },
        { url: 'api/categories/blog.json', revision: 'af6154212a5a7aa0d6a41b3b23037a44' },
        { url: 'api/categories/debug.json', revision: 'caab102f79c9d9453f27701f76b9b870' },
        { url: 'api/categories/note.json', revision: '1867336d2413b05747e10c1669707346' },
        { url: 'api/categories/others.json', revision: '96c1c884f6127eca7cc5095d6d34cab0' },
        { url: 'api/home.json', revision: 'ac9cbbdcd9a45e01b50372408d2a05f4' },
        { url: 'api/navigation.json', revision: '777ced3dd3855b27d95d505bf20e3351' },
        { url: 'api/pages/about.json', revision: '5aec1bf45a84301f2a7ec2247553ddc8' },
        { url: 'api/pages/projects.json', revision: '3919860b11bcf33219f7a25b38157048' },
        { url: 'api/posts.json', revision: '1ed94a4980ad720f3b8b44182d2ecc9d' },
        {
          url: 'api/posts/2015/10/25/apache-shiro-spring-integration.json',
          revision: '7c2c80630d4b21fa81510200c6041e45'
        },
        { url: 'api/posts/2015/11/10/beanutils-vs-reflection.json', revision: '2861c136874becc8c8c57874fc409954' },
        {
          url: 'api/posts/2015/12/13/ubuntu-mean-development-environment-setup.json',
          revision: '194765e8b52bcfb82fb4e52517bcb538'
        },
        {
          url: 'api/posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file.json',
          revision: '4df67d101c13fc90561072629a099772'
        },
        { url: 'api/posts/2015/12/27/site-upgrade-plan.json', revision: '392282843aa4f41881bf1d1f1fcf9ae6' },
        { url: 'api/posts/2016/01/01/review-2015.json', revision: '304c57421c101caea6aba8a48c84e65d' },
        {
          url: 'api/posts/2016/01/11/nodejs-oracledb-install-on-rhel-6.json',
          revision: 'f3ea027ea470e16ecd242544846ad7e8'
        },
        {
          url: 'api/posts/2016/01/12/nodejs-oracledb-ora-21561-solution.json',
          revision: '8994cd9a37ab9127f8805adda049ebce'
        },
        { url: 'api/posts/2016/03/06/site-code-structure.json', revision: 'd9b219147a7d7ebef2929ac22cb0928c' },
        {
          url: 'api/posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide.json',
          revision: '373ad304d6c0dafdd51c1e6a40e52907'
        },
        {
          url: 'api/posts/2016/04/10/google-codejam-2016-qualification-round.json',
          revision: '61956634f37d85f6f02fb442315a73a4'
        },
        {
          url: 'api/posts/2016/04/30/angular-ui-performance-tuning-experience.json',
          revision: '97ec508f674fcb5c8343c8e232d28b42'
        },
        { url: 'api/posts/2016/07/05/move-to-new-apartment.json', revision: '6ca2fd30e5eeed1e384829ce51e63a8d' },
        { url: 'api/posts/2017/01/01/review-2016.json', revision: 'dc591d96e43382f79a450604a7b6f4e9' },
        { url: 'api/posts/2017/03/12/new-version-blog-migration.json', revision: '13b46819de2313a6e64617246237e794' },
        { url: 'api/posts/2017/05/05/vue-version-for-blog-app.json', revision: 'd2d603e3ad03e0f1ac8573a59dfcdfe7' },
        { url: 'api/posts/2018/01/01/review-2017.json', revision: 'be5fa4eeda1705364142c797661186a4' },
        { url: 'api/posts/2018/03/03/latest-update-on-blog-app.json', revision: 'b74a4adaee258c6bfc92066a583279fc' },
        {
          url: 'api/posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution.json',
          revision: '410fd8f775d8a0ad54530b5f1578c0f9'
        },
        { url: 'api/posts/2018/04/01/karma-jawr-development-note.json', revision: '6d0644a0449ebee78bb078fdea91243f' },
        {
          url: 'api/posts/2019/07/07/github-actions-overview-and-practice.json',
          revision: '9ac7bc729cf41f9194303cb04c74ddd3'
        },
        { url: 'api/posts/2019/07/23/travel-in-beijing.json', revision: '7f108358ff893cb4e986c9b1395c81cc' },
        {
          url: 'api/posts/2019/08/18/github-actions-new-yaml-syntax.json',
          revision: 'a7d33195f289a81c3635b94ddff0b687'
        },
        {
          url: 'api/posts/2019/11/14/monorepo-practice-in-typescript-projects.json',
          revision: 'de81843f45dd15dd9ab8c194868edc46'
        },
        { url: 'api/posts/2020/01/28/review-2019.json', revision: '8692fbaef3a718044f0db7b4efd0c189' },
        {
          url: 'api/posts/2020/02/12/using-patch-package-patching-node-modules.json',
          revision: '2e049656706ed18194d31bf6a5d0fcb6'
        },
        {
          url: 'api/posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate.json',
          revision: '3c536c8fe3c40a4556a64558da234cf1'
        },
        { url: 'api/profile.json', revision: 'a5d932d01e2bea6bc56e379b0937c9b7' },
        { url: 'api/tags.json', revision: 'f30c5f2b98834409ff1a88751b7c83ea' },
        { url: 'api/tags/actions.json', revision: '8f741cc18d975f514989ea6ec0b16cb5' },
        { url: 'api/tags/angular.json', revision: 'a9f2bce051e343127bc3a9892a18da7a' },
        { url: 'api/tags/angularjs.json', revision: 'f95bfba1c3580637579912e4bf4884c6' },
        { url: 'api/tags/apache.json', revision: '5f3b82eadd493fe9c7ed07837ecfd35a' },
        { url: 'api/tags/blog.json', revision: 'f4aaefd319d7e6e7ed3dfef9e49755ad' },
        { url: 'api/tags/ci.json', revision: 'acdc50bded18054dd3b14468e32fe24b' },
        { url: 'api/tags/diary.json', revision: '1872165ba2e243fc48d126540c50439b' },
        { url: 'api/tags/docker.json', revision: 'bff973725ca3591b93b8bd0fa41582b9' },
        { url: 'api/tags/extjs.json', revision: 'b4753936d5184c117d2de812b803c4c2' },
        { url: 'api/tags/github.json', revision: '3974b5b0ed9b8e5e453cc468d0d5a986' },
        { url: 'api/tags/google.json', revision: 'ff5190410a1f3fa81230355fd975ebac' },
        { url: 'api/tags/gulp.json', revision: '8147da95cb7c79debb1315ef86b060d9' },
        { url: 'api/tags/hadoop.json', revision: '8bd5d48b55d5d1a73484b320455a8c0b' },
        { url: 'api/tags/intellij-idea.json', revision: '79102436f0f08eacc9e5c9c5f83c76ba' },
        { url: 'api/tags/java.json', revision: '8420d35ca1d12bca6c0d4f7cef2028af' },
        { url: 'api/tags/javascript.json', revision: '2dc8238917377b47bbc7e5a5d2466a61' },
        { url: 'api/tags/jawr.json', revision: '8d6d14c943eee255a80743e46de6d3f7' },
        { url: 'api/tags/jest.json', revision: 'b563164b6d929de2e4f3ed22fb0e9726' },
        { url: 'api/tags/jsf.json', revision: '047310c94a7ff04f3a3947784a9af335' },
        { url: 'api/tags/karma.json', revision: 'dab2e2724b3921b9c61ca23a1d82bbce' },
        { url: 'api/tags/lerna.json', revision: '8b1b520474ab47f27019f3bba1128c70' },
        { url: 'api/tags/linux.json', revision: '639bdabd04fbb5c4af506450f527b83e' },
        { url: 'api/tags/monorepo.json', revision: 'd1fdcceda558fa3adb45f7995b523daf' },
        { url: 'api/tags/node.json', revision: '4236662ecf2f0737662e0177ff36c12f' },
        { url: 'api/tags/npm.json', revision: '01ee76d80d59d8225e1748a60d107802' },
        { url: 'api/tags/oracle.json', revision: '4f431cbbfe0f43dfe0f738e728f9a234' },
        { url: 'api/tags/pwa.json', revision: 'ad6319dc207779688dd0858053d25aa1' },
        { url: 'api/tags/renovate.json', revision: '1bc43f8f64e7525786fd75b76fddcdfa' },
        { url: 'api/tags/security.json', revision: '5303007046823d3994cd1f230a58fa5d' },
        { url: 'api/tags/shiro.json', revision: '1bb2f394854dc57d0e64b35ee10ad738' },
        { url: 'api/tags/site.json', revision: 'f4d43a56f20b3715a30bbe2c3359a344' },
        { url: 'api/tags/spring.json', revision: 'fad70f20204d4e4fb165cdd8f5322c4f' },
        { url: 'api/tags/springmvc.json', revision: '1b50642573650607397724271a2f62e4' },
        { url: 'api/tags/travisci.json', revision: '80c95f31d760a6f3fc626fdf6dd6b4a8' },
        { url: 'api/tags/trips.json', revision: 'e66c515248f5ebe9c501bd5eb31fdb73' },
        { url: 'api/tags/typescript.json', revision: 'a26d9f54e9c90ed75f7e9af7b864729d' },
        { url: 'api/tags/ubuntu.json', revision: 'c739eca43e8cb3850d92df164fa05f98' },
        { url: 'api/tags/vps.json', revision: 'c7c7043abfe854865c94a76ac5b53125' },
        { url: 'api/tags/vue.json', revision: 'd07e3de122bcf887cb8aadf4f7041b3f' },
        { url: 'api/tags/webpack.json', revision: 'fec2c59ec4547ef4fef372625343480a' },
        { url: 'static/css/detail.fe094e49b671956d8fb1.css', revision: '4784b90b225073ce134e8667e56c6cfc' },
        { url: 'static/css/main.09526a88d8600f2df320.css', revision: 'd41d8cd98f00b204e9800998ecf8427e' },
        { url: 'static/css/vendors.1056d7a3a74e4e439ec5.css', revision: '2af97cf84b103023b4cb97daff882b9e' },
        { url: 'static/img/manifest.json', revision: '1d52b04ca6515ebbb6dec460579242a9' },
        { url: 'static/img/yandex-browser-manifest.json', revision: '917d1d4f9c3d3aa73e764aee8f440b80' },
        { url: 'static/js/detail.fe094e49b671956d8fb1.js', revision: 'abae8628463e04966b9e83a4d2b1f907' },
        { url: 'static/js/main.09526a88d8600f2df320.js', revision: '4fce8a6b0e34884e23b91088386532ed' },
        { url: 'static/js/vendors.1056d7a3a74e4e439ec5.js', revision: '4039685ccecf71f6afb6ef24ad583d66' },
        { url: 'pages/about/about.png', revision: '634937cbfde5746fe0ea0dfe17c5af62' },
        { url: 'pages/about/about.webp', revision: '414c4c6470c1f35156963c0427f97d4e' },
        { url: 'pages/projects/projects.png', revision: 'c8151243129cd518cba60b47c6571412' },
        { url: 'pages/projects/projects.webp', revision: '3854088a748a9cf8ee07e75e00a7ab92' },
        {
          url: 'posts/2015/10/25/apache-shiro-spring-integration/cover.png',
          revision: 'bf96451082f84eefae26e7ee2ee84e48'
        },
        {
          url: 'posts/2015/10/25/apache-shiro-spring-integration/cover.webp',
          revision: 'f7899b4ddf1f5ae1d53df8f4b00d1089'
        },
        { url: 'posts/2015/11/10/beanutils-vs-reflection/cover.png', revision: '1ad05d1227b446e6fdc3fb8ebd863124' },
        { url: 'posts/2015/11/10/beanutils-vs-reflection/cover.webp', revision: '27d279d60cf8f2f3f3c5ef160228a7e2' },
        {
          url: 'posts/2015/11/10/beanutils-vs-reflection/method-executing-time.png',
          revision: 'e5a7a31204dc6e1a398819bd3bd2e59a'
        },
        {
          url: 'posts/2015/11/10/beanutils-vs-reflection/method-executing-time.webp',
          revision: 'de249effaf0897b3d42b2dcd003f7e90'
        },
        {
          url: 'posts/2015/12/13/ubuntu-mean-development-environment-setup/add-app-launch-icon.png',
          revision: '23238d2e7346c56b609fc2d8d4fa89c7'
        },
        {
          url: 'posts/2015/12/13/ubuntu-mean-development-environment-setup/add-app-launch-icon.webp',
          revision: '7ec3862f288fdaa3d8dcf67eb87358c3'
        },
        {
          url: 'posts/2015/12/13/ubuntu-mean-development-environment-setup/add-oracle-cli-global-env-var.png',
          revision: '2904e14888a44eead4a2a1834a9e4e0d'
        },
        {
          url: 'posts/2015/12/13/ubuntu-mean-development-environment-setup/add-oracle-cli-global-env-var.webp',
          revision: '973711f94005d774cb8b66934f64d021'
        },
        {
          url: 'posts/2015/12/13/ubuntu-mean-development-environment-setup/check-run-configuration.png',
          revision: '1d63ae98241e35e54fe36fa18676da5e'
        },
        {
          url: 'posts/2015/12/13/ubuntu-mean-development-environment-setup/check-run-configuration.webp',
          revision: '541e18fac27c3a6d3f92845da936634d'
        },
        {
          url: 'posts/2015/12/13/ubuntu-mean-development-environment-setup/config-jdk-path.png',
          revision: '13db4713983d944a24edf08893fbc6d4'
        },
        {
          url: 'posts/2015/12/13/ubuntu-mean-development-environment-setup/config-jdk-path.webp',
          revision: 'c5ee1a17abc3b9f70127ad3605d91cb5'
        },
        {
          url: 'posts/2015/12/13/ubuntu-mean-development-environment-setup/cover.png',
          revision: '7cbf2bf363a998b21c4cf36a05a19505'
        },
        {
          url: 'posts/2015/12/13/ubuntu-mean-development-environment-setup/cover.webp',
          revision: '82b11d8da0d24e605f641b00fc17e1f4'
        },
        {
          url: 'posts/2015/12/13/ubuntu-mean-development-environment-setup/update-nodejs.png',
          revision: '31062ddeb12438bf11668119673946c5'
        },
        {
          url: 'posts/2015/12/13/ubuntu-mean-development-environment-setup/update-nodejs.webp',
          revision: 'e99152e447936ba8ba4266c923d10206'
        },
        {
          url: 'posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/cover.png',
          revision: 'd19e7bdb9aea105381eafdef3c1c2b5d'
        },
        {
          url: 'posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/cover.webp',
          revision: '42c0728306c074aa92934b455a33c6f8'
        },
        { url: 'posts/2015/12/27/site-upgrade-plan/cover.png', revision: 'b3649900dad61b35224f6d1544881a94' },
        { url: 'posts/2015/12/27/site-upgrade-plan/cover.webp', revision: 'bc8df919c42129d27e82cf802a76e5db' },
        { url: 'posts/2016/01/01/review-2015/cover.png', revision: 'bbdf9fbbe2d51ca8dba0c0fb24af3fab' },
        { url: 'posts/2016/01/01/review-2015/cover.webp', revision: 'a9baf6ab46fc8631bfa2fa1d7a2ac950' },
        { url: 'posts/2016/01/01/review-2015/graduaction-more.png', revision: '728960bf52745d3b86f6b681e7f7b9e4' },
        { url: 'posts/2016/01/01/review-2015/graduaction-more.webp', revision: '20a4ab3727e3fd86aec06d3608602bcf' },
        { url: 'posts/2016/01/01/review-2015/graduaction.png', revision: '4901e49d66a89fa8a097fa4ba5165274' },
        { url: 'posts/2016/01/01/review-2015/graduaction.webp', revision: '308f0ce3c55a48b8994b77e6aaec720d' },
        { url: 'posts/2016/01/01/review-2015/rmbp.png', revision: '129fdfa276f32c12ae05f10e1458c03e' },
        { url: 'posts/2016/01/01/review-2015/rmbp.webp', revision: 'a058add589ab8b9135a4b382b82508e8' },
        { url: 'posts/2016/01/01/review-2015/room-1.png', revision: '77f78b3390432f02fac4ad87272bb4a1' },
        { url: 'posts/2016/01/01/review-2015/room-1.webp', revision: '4b56f7ab6fb3d673bbbfc06f14478c17' },
        { url: 'posts/2016/01/01/review-2015/room-2.png', revision: '0d5bd29de4a8459550301dcd43e96def' },
        { url: 'posts/2016/01/01/review-2015/room-2.webp', revision: '5bf3975e2cbaae85d6c745766fb97988' },
        { url: 'posts/2016/01/01/review-2015/room-3.png', revision: '49043056816b212043afb6d13e13b750' },
        { url: 'posts/2016/01/01/review-2015/room-3.webp', revision: 'ce315bcc2cd784faa7f11fc21fa07c0b' },
        { url: 'posts/2016/01/01/review-2015/room-4.png', revision: 'eeb78a4e9a4cada843280a263dd9bde0' },
        { url: 'posts/2016/01/01/review-2015/room-4.webp', revision: '3a0c89c40828478d826ac0e70b0ea584' },
        { url: 'posts/2016/01/01/review-2015/room-5.png', revision: '8f85e43cf1714fcded2a0ae9984b4817' },
        { url: 'posts/2016/01/01/review-2015/room-5.webp', revision: 'd354413a6b4efce07c7d3559ef2fcbcd' },
        { url: 'posts/2016/01/01/review-2015/team-3-ita.png', revision: '364dc76efe9757e9875a5f137d1a1711' },
        { url: 'posts/2016/01/01/review-2015/team-3-ita.webp', revision: '64d4667e214e87e10f975ad638da909f' },
        { url: 'posts/2016/01/01/review-2015/unboxing-macbook.png', revision: '1ad90af955c0ca80d82f45b6c80d0562' },
        { url: 'posts/2016/01/01/review-2015/unboxing-macbook.webp', revision: '121806d45048a0f04cd13f145cd3d2a2' },
        { url: 'posts/2016/01/01/review-2015/wechat-open-account.png', revision: 'fe16414175af2109c6fc46711b927974' },
        { url: 'posts/2016/01/01/review-2015/wechat-open-account.webp', revision: '978970425c26004ee8743bd1c9b0ce2b' },
        {
          url: 'posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/cover.png',
          revision: '521c74f19c2f1e26bd34dd9278004ed2'
        },
        {
          url: 'posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/cover.webp',
          revision: 'c72cc5ad291f7ce4495f7c93c4b0cb93'
        },
        {
          url: 'posts/2016/01/12/nodejs-oracledb-ora-21561-solution/cover.png',
          revision: 'a10a3bd4c2f73b12e6045c6c3b5ee63e'
        },
        {
          url: 'posts/2016/01/12/nodejs-oracledb-ora-21561-solution/cover.webp',
          revision: '37910666b2efdaf400b00d2061f4c41a'
        },
        {
          url: 'posts/2016/01/12/nodejs-oracledb-ora-21561-solution/update-centos-hosts.png',
          revision: 'b23c28809605d5c2cf34410437fd7473'
        },
        {
          url: 'posts/2016/01/12/nodejs-oracledb-ora-21561-solution/update-centos-hosts.webp',
          revision: 'f03889a93d4c73dab419d04d81565d31'
        },
        { url: 'posts/2016/03/06/site-code-structure/build-flow.png', revision: '7cb44f64853eccb168d3c8f2b1d242b8' },
        { url: 'posts/2016/03/06/site-code-structure/build-flow.webp', revision: 'ffbfdff8b8c2d81585449e1eb8bcc15f' },
        { url: 'posts/2016/03/06/site-code-structure/cover.png', revision: 'adecd92b5e0f665ed8231933ea7060c6' },
        { url: 'posts/2016/03/06/site-code-structure/cover.webp', revision: 'bc6a909f7309631a6b03aecd82c17467' },
        {
          url: 'posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/cover.png',
          revision: 'b79c26628da4713bda986420d55040fd'
        },
        {
          url: 'posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/cover.webp',
          revision: '05618758af7e7de5158210b13e1b6977'
        },
        {
          url:
            'posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/data-node-information.png',
          revision: 'b2809f573fd029429c8f3bba1ad2c9c6'
        },
        {
          url:
            'posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/data-node-information.webp',
          revision: '591c0a0b385748771caa712abb9ff618'
        },
        {
          url: 'posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/nodes-of-the-cluster.png',
          revision: '2fbd1bf471e0f7a1310fffeca3cbc5b4'
        },
        {
          url:
            'posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/nodes-of-the-cluster.webp',
          revision: '95426cb7d06416d7470401045fdb7e43'
        },
        {
          url: 'posts/2016/04/10/google-codejam-2016-qualification-round/cover.png',
          revision: '6f979cfb503916ca33e667d8eb1d5c9d'
        },
        {
          url: 'posts/2016/04/10/google-codejam-2016-qualification-round/cover.webp',
          revision: '4be1e4140b27f7f5a0898f0ce3f1d501'
        },
        {
          url: 'posts/2016/04/30/angular-ui-performance-tuning-experience/cover.png',
          revision: 'eaf190f29c780d274bd438e4dd66ef61'
        },
        {
          url: 'posts/2016/04/30/angular-ui-performance-tuning-experience/cover.webp',
          revision: '82c34fe6dc24d269af222c5886cb5557'
        },
        {
          url: 'posts/2016/04/30/angular-ui-performance-tuning-experience/notification.png',
          revision: 'b34f317f5464f578cc6067d317afe22a'
        },
        {
          url: 'posts/2016/04/30/angular-ui-performance-tuning-experience/notification.webp',
          revision: '70e3a03015686c5d3d9d517b2b1ed007'
        },
        {
          url: 'posts/2016/04/30/angular-ui-performance-tuning-experience/performance.png',
          revision: '943a204a96f8e82ed4829c4b4b36bc8e'
        },
        {
          url: 'posts/2016/04/30/angular-ui-performance-tuning-experience/performance.webp',
          revision: '4c957a7c5807674b1b25b15e007d7881'
        },
        { url: 'posts/2016/07/05/move-to-new-apartment/bed.png', revision: 'ecafc71143263a54ce6fe060916cfab9' },
        { url: 'posts/2016/07/05/move-to-new-apartment/bed.webp', revision: 'e7720cf9a75db38e575a7aebdda8cbb8' },
        { url: 'posts/2016/07/05/move-to-new-apartment/bedroom.png', revision: '8c2b929a10844e5aa3f480fcd904acf2' },
        { url: 'posts/2016/07/05/move-to-new-apartment/bedroom.webp', revision: 'e5ee0679cb0e23122cc9c0246332629f' },
        { url: 'posts/2016/07/05/move-to-new-apartment/clothes.png', revision: '82dfd6b0817462d05f66a63041bbe37a' },
        { url: 'posts/2016/07/05/move-to-new-apartment/clothes.webp', revision: '88bc8f3b4253e34a3f231c9ad1d950fc' },
        { url: 'posts/2016/07/05/move-to-new-apartment/cover.png', revision: 'bb44bca680967ae3b8bef4bc2f25707f' },
        { url: 'posts/2016/07/05/move-to-new-apartment/cover.webp', revision: '67063e4930321488a04e57dfba0bc4b9' },
        {
          url: 'posts/2016/07/05/move-to-new-apartment/depracted-desktop.png',
          revision: '93f840a7599c54cc84d37d191baefe98'
        },
        {
          url: 'posts/2016/07/05/move-to-new-apartment/depracted-desktop.webp',
          revision: 'bda9b7c400a8ce2c2ce4e8f8b759659f'
        },
        {
          url: 'posts/2016/07/05/move-to-new-apartment/desktop-installation.png',
          revision: '4b44c85c276fc06f72e1d5dafebe92fe'
        },
        {
          url: 'posts/2016/07/05/move-to-new-apartment/desktop-installation.webp',
          revision: '85081ecbd048ffddb6c4848fc698d52d'
        },
        { url: 'posts/2016/07/05/move-to-new-apartment/desktop.png', revision: '75c4b1a2583a9612b6d2a3f060e6741c' },
        { url: 'posts/2016/07/05/move-to-new-apartment/desktop.webp', revision: 'a4b28cb611ffae746279252c69738ee5' },
        { url: 'posts/2016/07/05/move-to-new-apartment/kitchen.png', revision: 'd568cc8ac8245e00cb3a44921690e4e6' },
        { url: 'posts/2016/07/05/move-to-new-apartment/kitchen.webp', revision: '245ef36deea7090514346a72bcfab388' },
        {
          url: 'posts/2016/07/05/move-to-new-apartment/meeting-room.png',
          revision: '41b1b21ec99509c4483066da718b7983'
        },
        {
          url: 'posts/2016/07/05/move-to-new-apartment/meeting-room.webp',
          revision: '4e6a24c1f3ac768d3f063a3fcd73c856'
        },
        {
          url: 'posts/2016/07/05/move-to-new-apartment/passing-route-updated.png',
          revision: '8a9ec5e123a9b089947bf66d03078e9d'
        },
        {
          url: 'posts/2016/07/05/move-to-new-apartment/passing-route-updated.webp',
          revision: 'a3b62b7d4661ff5dbbdb8f9cd83a588e'
        },
        {
          url: 'posts/2016/07/05/move-to-new-apartment/passing-route.png',
          revision: 'c6243476ddbfee3f6d7eb11fe5e25a17'
        },
        {
          url: 'posts/2016/07/05/move-to-new-apartment/passing-route.webp',
          revision: '4e8363e87ff0ef8c282623b8052676c4'
        },
        {
          url: 'posts/2016/07/05/move-to-new-apartment/room-architecture.png',
          revision: '4cdf75bf21b165951ef08beb49322ab4'
        },
        {
          url: 'posts/2016/07/05/move-to-new-apartment/room-architecture.webp',
          revision: '69c7a26d870bb2310a5e2b95ea860e19'
        },
        { url: 'posts/2016/07/05/move-to-new-apartment/see-sea.png', revision: '6d70f828f3632f2103915a061cb8937f' },
        { url: 'posts/2016/07/05/move-to-new-apartment/see-sea.webp', revision: 'd02c98376456067aed5299114ae6f526' },
        { url: 'posts/2016/07/05/move-to-new-apartment/sunroom.png', revision: '6a20de46807c1e2655c846c241a154e4' },
        { url: 'posts/2016/07/05/move-to-new-apartment/sunroom.webp', revision: '8edba420019da44429ef1ef066e1921b' },
        {
          url: 'posts/2016/07/05/move-to-new-apartment/wakatime-total.png',
          revision: '07eb5f69cb253d00b0bcbce28976fd58'
        },
        {
          url: 'posts/2016/07/05/move-to-new-apartment/wakatime-total.webp',
          revision: '52a63e4b1e37c041cb6ed2bf85449039'
        },
        { url: 'posts/2016/07/05/move-to-new-apartment/wakatime.png', revision: '8039bffe0a0256979291b0f3bfa67aef' },
        { url: 'posts/2016/07/05/move-to-new-apartment/wakatime.webp', revision: '9d08ab6cf95c67c8e5497a5333cd00ca' },
        { url: 'posts/2017/01/01/review-2016/cover.png', revision: '28d40a65984188a82a0bc43558a7038e' },
        { url: 'posts/2017/01/01/review-2016/cover.webp', revision: '19aca6f9dc888644bc76d441da0c86f3' },
        { url: 'posts/2017/01/01/review-2016/hardware-info.png', revision: '05ce4ffc74f591f0e4a64eabefe6737e' },
        { url: 'posts/2017/01/01/review-2016/hardware-info.webp', revision: '17f4be951155dfbd2fa663f44c7fd16d' },
        {
          url: 'posts/2017/03/12/new-version-blog-migration/add-shortcut.png',
          revision: '6bd2faa31fea5101681b237692b137c0'
        },
        {
          url: 'posts/2017/03/12/new-version-blog-migration/add-shortcut.webp',
          revision: 'c933f777cbdb5dc55fa06adff69f69cb'
        },
        { url: 'posts/2017/03/12/new-version-blog-migration/cover.png', revision: 'c1f8a0ded6ef16859b54d4b46d324388' },
        { url: 'posts/2017/03/12/new-version-blog-migration/cover.webp', revision: '9de8be83abd1952fb112c73079c55711' },
        {
          url: 'posts/2017/03/12/new-version-blog-migration/desktop-version-shortcut.png',
          revision: 'd2eb0401b07ce25850e9afcde28e0d06'
        },
        {
          url: 'posts/2017/03/12/new-version-blog-migration/desktop-version-shortcut.webp',
          revision: 'e2475c73b6be148ba060e15a9b4ccb81'
        },
        {
          url: 'posts/2017/03/12/new-version-blog-migration/launching.png',
          revision: 'e51633959aabffd0d61f1323c17e26c4'
        },
        {
          url: 'posts/2017/03/12/new-version-blog-migration/launching.webp',
          revision: '4071e85ed69390fcb79dd56bd0d13dfd'
        },
        {
          url: 'posts/2017/03/12/new-version-blog-migration/shortcut.png',
          revision: 'ee6a7f122a95a9b356bf434179d10485'
        },
        {
          url: 'posts/2017/03/12/new-version-blog-migration/shortcut.webp',
          revision: 'dd28ed39982e50b21c57d1f2ba00b155'
        },
        { url: 'posts/2017/05/05/vue-version-for-blog-app/cover.png', revision: 'afe765a423b8ebac24fcaa8bbe959385' },
        { url: 'posts/2017/05/05/vue-version-for-blog-app/cover.webp', revision: '9cec7f77f285e0b345657fff32cdf189' },
        { url: 'posts/2018/01/01/review-2017/cover.png', revision: '704e5ccac667e591d333756b4037191a' },
        { url: 'posts/2018/01/01/review-2017/cover.webp', revision: '192a5a50789e7bb15de8469aad1e7047' },
        { url: 'posts/2018/01/01/review-2017/macbook-pro.png', revision: 'bb4509d155d9d5765f0128a8be8eeb6f' },
        { url: 'posts/2018/01/01/review-2017/macbook-pro.webp', revision: 'd7ab2a9e891594c3aff55bfd3c7290dc' },
        { url: 'posts/2018/01/01/review-2017/mdr-1000x.png', revision: '60130fc05c1bc43bb422f5d1ee730916' },
        { url: 'posts/2018/01/01/review-2017/mdr-1000x.webp', revision: '0a1f5a3eaf461a951e8d4ce2bba90ca4' },
        {
          url: 'posts/2018/03/03/latest-update-on-blog-app/benchmark-blog-website.png',
          revision: '06465a91d135ae1cc8b7e684d0e75cfc'
        },
        {
          url: 'posts/2018/03/03/latest-update-on-blog-app/benchmark-blog-website.webp',
          revision: '309fc307b2f984c40b02ecbef70dd5e2'
        },
        {
          url: 'posts/2018/03/03/latest-update-on-blog-app/blog-resource-transfer-time.png',
          revision: 'e314a8a59b49cd1b5ae66e4064bb9344'
        },
        {
          url: 'posts/2018/03/03/latest-update-on-blog-app/blog-resource-transfer-time.webp',
          revision: 'a6d7dc00ab41be0f1a6e87f4211715af'
        },
        { url: 'posts/2018/03/03/latest-update-on-blog-app/cover.png', revision: '43dd75bc6d7d71bf40582e567ca34d42' },
        { url: 'posts/2018/03/03/latest-update-on-blog-app/cover.webp', revision: '1e76915b3466a58bb7242ed79cdbf228' },
        {
          url: 'posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/cover.png',
          revision: '6d331f21efd7ad6dfa7a584ed3c4d3f2'
        },
        {
          url: 'posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/cover.webp',
          revision: 'c1566bac5de28dc40a0c1506a1107ce7'
        },
        {
          url:
            'posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/karma-jawr-generated-index.png',
          revision: '15c325c2b509b5771375fd17d7cbbce9'
        },
        {
          url:
            'posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/karma-jawr-generated-index.webp',
          revision: 'ffe4011649708c90baed2f4b7e7aa21e'
        },
        { url: 'posts/2018/04/01/karma-jawr-development-note/cover.png', revision: 'a58210d9a6b47fb694fe04b8cbbe312a' },
        {
          url: 'posts/2018/04/01/karma-jawr-development-note/cover.webp',
          revision: 'ea9f7743b2cd84574cd22ed25942b149'
        },
        {
          url: 'posts/2019/07/07/github-actions-overview-and-practice/create-release.png',
          revision: 'a31aa7e5e3eed42d25422c828b0f76b4'
        },
        {
          url: 'posts/2019/07/07/github-actions-overview-and-practice/create-release.webp',
          revision: '79cabe1ec1e52c944c79da0c2b6e6a47'
        },
        {
          url: 'posts/2019/07/07/github-actions-overview-and-practice/github-actions.png',
          revision: '57c065dcc456873fb4b679e42eba0495'
        },
        {
          url: 'posts/2019/07/07/github-actions-overview-and-practice/github-actions.webp',
          revision: '0cc8fb75d850e328ce1bdb9baba80e0b'
        },
        {
          url: 'posts/2019/07/07/github-actions-overview-and-practice/github-official-actions-repo.png',
          revision: '9c6586057b46232199b096558fe54f06'
        },
        {
          url: 'posts/2019/07/07/github-actions-overview-and-practice/github-official-actions-repo.webp',
          revision: '477605f82400f608545e3c8d08a3d807'
        },
        {
          url: 'posts/2019/07/07/github-actions-overview-and-practice/trigger-release-workflow.png',
          revision: '5824c20beadbe9cdd32e5018232dce33'
        },
        {
          url: 'posts/2019/07/07/github-actions-overview-and-practice/trigger-release-workflow.webp',
          revision: '118070ef6ecb23b333188f5055a29b95'
        },
        {
          url: 'posts/2019/07/07/github-actions-overview-and-practice/workflow-ci-overview.png',
          revision: '13fdd8e7c2c2c70882bbe8421bae0525'
        },
        {
          url: 'posts/2019/07/07/github-actions-overview-and-practice/workflow-ci-overview.webp',
          revision: '593501b6abebdb69a419e8202e963d2d'
        },
        {
          url: 'posts/2019/07/07/github-actions-overview-and-practice/workflow-editor-example.png',
          revision: '752eba3537312d54d6e4d8d3477e2df5'
        },
        {
          url: 'posts/2019/07/07/github-actions-overview-and-practice/workflow-editor-example.webp',
          revision: '1813366eaa17f6e019c1006fd30a61d8'
        },
        {
          url: 'posts/2019/07/07/github-actions-overview-and-practice/workflow-example.png',
          revision: '88b11a11cb40a1fe0b886ebb585abd55'
        },
        {
          url: 'posts/2019/07/07/github-actions-overview-and-practice/workflow-example.webp',
          revision: 'e9c3eaef7f939a77ddad6284f3d86807'
        },
        {
          url: 'posts/2019/07/07/github-actions-overview-and-practice/workflow-syntax-highlight.png',
          revision: '2e373fece1c8043329fa614febf8b5e9'
        },
        {
          url: 'posts/2019/07/07/github-actions-overview-and-practice/workflow-syntax-highlight.webp',
          revision: 'b845cce847a78b18ca5c6e35b9a0dc21'
        },
        { url: 'posts/2019/07/23/travel-in-beijing/bird-nest-show.png', revision: 'f9618cb46aa1723b3b80f3b174e79f56' },
        { url: 'posts/2019/07/23/travel-in-beijing/bird-nest-show.webp', revision: 'f8d0b4f6652d1451235ccf1e5a852b8b' },
        { url: 'posts/2019/07/23/travel-in-beijing/bird-nest.png', revision: 'b7133799f9dd8a63a902b87c3995f7ce' },
        { url: 'posts/2019/07/23/travel-in-beijing/bird-nest.webp', revision: '96d1bcec2c67015d8cd5116b4c6a4d6e' },
        { url: 'posts/2019/07/23/travel-in-beijing/great-wall-01.png', revision: 'adb0ae824da742473c0f2033e6f00ecb' },
        { url: 'posts/2019/07/23/travel-in-beijing/great-wall-01.webp', revision: '2c2ea1bfa858164937034796b48e4745' },
        { url: 'posts/2019/07/23/travel-in-beijing/great-wall-02.png', revision: '4b7a9084843e76909c32d57aa243a502' },
        { url: 'posts/2019/07/23/travel-in-beijing/great-wall-02.webp', revision: '3e063515d4998f7f4d98bb6efe6a475d' },
        { url: 'posts/2019/07/23/travel-in-beijing/great-wall-03.png', revision: '015b81210929f3a1b197877115c7bf7a' },
        { url: 'posts/2019/07/23/travel-in-beijing/great-wall-03.webp', revision: '61b7b4e82b27d3423b93647afcc90dc0' },
        { url: 'posts/2019/07/23/travel-in-beijing/msra.png', revision: 'afc4329118048573fb01812a2f5d61b9' },
        { url: 'posts/2019/07/23/travel-in-beijing/msra.webp', revision: 'a6ba99941ffbe026a09b995e45fca9ad' },
        {
          url: 'posts/2019/07/23/travel-in-beijing/palace-museum-01.png',
          revision: '6c0734ee3229249adcafb500257cb7d1'
        },
        {
          url: 'posts/2019/07/23/travel-in-beijing/palace-museum-01.webp',
          revision: 'b7b9516065fc6dab7fee4bddba9bb804'
        },
        {
          url: 'posts/2019/07/23/travel-in-beijing/palace-museum-02.png',
          revision: '8cd6615c70a506d2af0fb6be36c39d5d'
        },
        {
          url: 'posts/2019/07/23/travel-in-beijing/palace-museum-02.webp',
          revision: 'ca598dbd702bd95c0465a3333329b486'
        },
        {
          url: 'posts/2019/07/23/travel-in-beijing/palace-museum-03.png',
          revision: 'cc8ee643d3e8fac1967950f8a6a87899'
        },
        {
          url: 'posts/2019/07/23/travel-in-beijing/palace-museum-03.webp',
          revision: '480f7329129edcb1bdfd34d7f183f23a'
        },
        {
          url: 'posts/2019/07/23/travel-in-beijing/palace-museum-04.png',
          revision: '8185a188a530fbbdc4d825d08bc8b862'
        },
        {
          url: 'posts/2019/07/23/travel-in-beijing/palace-museum-04.webp',
          revision: 'cbd7e6af14b45b002a4a3d9a33dd708e'
        },
        {
          url: 'posts/2019/07/23/travel-in-beijing/palace-museum-05.png',
          revision: '24b0c92caed88f3a7d38fed2f3d1ad82'
        },
        {
          url: 'posts/2019/07/23/travel-in-beijing/palace-museum-05.webp',
          revision: '4abbdb640e39e46c3a2520654fa79946'
        },
        {
          url: 'posts/2019/07/23/travel-in-beijing/pku-untitled-lake.png',
          revision: '2e02e242aeff1319b2e9e208f93f2fe9'
        },
        {
          url: 'posts/2019/07/23/travel-in-beijing/pku-untitled-lake.webp',
          revision: '5d7406532a4b5af864ce8c3a706a9bbf'
        },
        { url: 'posts/2019/07/23/travel-in-beijing/water-m3.png', revision: '2d1b87575cdb798406a8c00be94fac7a' },
        { url: 'posts/2019/07/23/travel-in-beijing/water-m3.webp', revision: '489c7da2b7814ff8a691b1447b69235a' },
        {
          url: 'posts/2019/08/18/github-actions-new-yaml-syntax/build-log-highlight-support.png',
          revision: '319248b963ccff9351786ba6752cde06'
        },
        {
          url: 'posts/2019/08/18/github-actions-new-yaml-syntax/build-log-highlight-support.webp',
          revision: '51c049e803384d402986160009af2d93'
        },
        {
          url: 'posts/2019/08/18/github-actions-new-yaml-syntax/migrating-github-actions.png',
          revision: 'e0a8656ec13e06f6b039ac6e13b743d2'
        },
        {
          url: 'posts/2019/08/18/github-actions-new-yaml-syntax/migrating-github-actions.webp',
          revision: '0d85ce989bedf5ed9d5010f1eb97064b'
        },
        {
          url: 'posts/2019/08/18/github-actions-new-yaml-syntax/select-sample-workflow-for-npm.png',
          revision: 'ad0df58b3619051a7ea4ee5713a77a6a'
        },
        {
          url: 'posts/2019/08/18/github-actions-new-yaml-syntax/select-sample-workflow-for-npm.webp',
          revision: '08647ee4856f25ff6467ad7a1f6471cd'
        },
        {
          url: 'posts/2019/11/14/monorepo-practice-in-typescript-projects/cover.png',
          revision: '0190666a7dc832afd1d7d47aa9461e84'
        },
        {
          url: 'posts/2019/11/14/monorepo-practice-in-typescript-projects/cover.webp',
          revision: '5972a2b30409ff8ea98aefd658f679f6'
        },
        { url: 'posts/2020/01/28/review-2019/cover.png', revision: 'b3308f43eaad42c9fdbb81dba58f0484' },
        { url: 'posts/2020/01/28/review-2019/cover.webp', revision: 'd31fe316bda1a37a3b8262c359ef0b07' },
        { url: 'posts/2020/01/28/review-2019/movement.png', revision: '634937cbfde5746fe0ea0dfe17c5af62' },
        { url: 'posts/2020/01/28/review-2019/movement.webp', revision: '414c4c6470c1f35156963c0427f97d4e' },
        {
          url: 'posts/2020/02/12/using-patch-package-patching-node-modules/cover.png',
          revision: '7a9a90412638d7d085b14e095089040e'
        },
        {
          url: 'posts/2020/02/12/using-patch-package-patching-node-modules/cover.webp',
          revision: '63078ecf97da8ff1d2e5a6e60ffdd814'
        },
        {
          url:
            'posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/revonate-circleci-docker-image-support.png',
          revision: '6edc02e8a91038750a2525377e10f1b9'
        },
        {
          url:
            'posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/revonate-circleci-docker-image-support.webp',
          revision: 'a75f6754f1d91840199f7441990c5583'
        },
        {
          url: 'posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/revonate-setup-pull-request.png',
          revision: '3ed163533a58e6989a782845bdd07979'
        },
        {
          url: 'posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/revonate-setup-pull-request.webp',
          revision: '55b434b3e7479e71e38e0ec9ee4516c2'
        },
        {
          url: 'posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/revonate.png',
          revision: '76a04e4304e765706fedabad3186606a'
        },
        {
          url: 'posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/revonate.webp',
          revision: '7727e6936b150ed77fea4325249f2664'
        },
        { url: 'static/img/android-chrome-144x144.png', revision: '8bc62b2b6849e956715372c2e680530e' },
        { url: 'static/img/android-chrome-192x192.png', revision: '67e7b67f62f2348c613168d4ec9d07bc' },
        { url: 'static/img/android-chrome-256x256.png', revision: 'f853ef7b313aea2e85229f5bf0ef430a' },
        { url: 'static/img/android-chrome-36x36.png', revision: 'd9356f81965328e13976651d8abc2224' },
        { url: 'static/img/android-chrome-384x384.png', revision: 'c4ea489cbcc904e6a242969d2f92a923' },
        { url: 'static/img/android-chrome-48x48.png', revision: '0dbbf98a448f8f7aa3d2421a893b5e9c' },
        { url: 'static/img/android-chrome-512x512.png', revision: '6fc48856e2a0303c25307c67da11a8ab' },
        { url: 'static/img/android-chrome-72x72.png', revision: 'f7235c1942364d7dc1df8513ce20b924' },
        { url: 'static/img/android-chrome-96x96.png', revision: '3892e73d9e5a7a1b31161ccfa60e0840' },
        { url: 'static/img/apple-touch-icon-1024x1024.png', revision: '9b2ab35db513331fc22a527d7423a05c' },
        { url: 'static/img/apple-touch-icon-114x114.png', revision: '562ccc95fd61296a478220b86d7f990c' },
        { url: 'static/img/apple-touch-icon-120x120.png', revision: '2d147ecd2dc51eb1d7830fd565a5e63e' },
        { url: 'static/img/apple-touch-icon-144x144.png', revision: 'd718a71e74d35ed42ab8e513847f5a5f' },
        { url: 'static/img/apple-touch-icon-152x152.png', revision: '12bd40b067747fd4fd0a39c7a100100b' },
        { url: 'static/img/apple-touch-icon-167x167.png', revision: 'dba187e9e3f17e9f27544ac77e5bcf1b' },
        { url: 'static/img/apple-touch-icon-180x180.png', revision: 'b1ab86db849ed8b11d8956500c449a31' },
        { url: 'static/img/apple-touch-icon-57x57.png', revision: '0d3c252001bca659f75d77158869f042' },
        { url: 'static/img/apple-touch-icon-60x60.png', revision: '35bd5028057ac2a0a3df03ad71083c79' },
        { url: 'static/img/apple-touch-icon-72x72.png', revision: '7b2b2144d2062b0e405dea53af97862e' },
        { url: 'static/img/apple-touch-icon-76x76.png', revision: 'c491c1ad442875c6a81a5d682c5574d9' },
        { url: 'static/img/apple-touch-icon-precomposed.png', revision: 'b1ab86db849ed8b11d8956500c449a31' },
        { url: 'static/img/apple-touch-icon.png', revision: 'b1ab86db849ed8b11d8956500c449a31' },
        { url: 'static/img/apple-touch-startup-image-1125x2436.png', revision: '5f316a4e96763f26d115a1c8f2029a2e' },
        { url: 'static/img/apple-touch-startup-image-1136x640.png', revision: 'f645878f69e207d17bcdeca59a726d3f' },
        { url: 'static/img/apple-touch-startup-image-1242x2208.png', revision: '90b49442dbce17aebba05c976f21cbe8' },
        { url: 'static/img/apple-touch-startup-image-1242x2688.png', revision: '08e85805f4adb6d2a42b99f70eae6dc8' },
        { url: 'static/img/apple-touch-startup-image-1334x750.png', revision: '3020acbc73ef920fa2efe91f1feecfc2' },
        { url: 'static/img/apple-touch-startup-image-1536x2048.png', revision: 'c2de8a8f8eb1a4c56a3c18ef0618855e' },
        { url: 'static/img/apple-touch-startup-image-1620x2160.png', revision: '32d7aeb06baa1168487564e5a6254412' },
        { url: 'static/img/apple-touch-startup-image-1668x2224.png', revision: 'c94a1f1a229efeed3399b2afff85e6f8' },
        { url: 'static/img/apple-touch-startup-image-1668x2388.png', revision: '0fd5b16bedd767d92cc1ecd63b94dcf4' },
        { url: 'static/img/apple-touch-startup-image-1792x828.png', revision: 'b6bb1deb6327939fac3769386afd7fa4' },
        { url: 'static/img/apple-touch-startup-image-2048x1536.png', revision: 'bf7030d8103b1bb07a54dfa5311d659a' },
        { url: 'static/img/apple-touch-startup-image-2048x2732.png', revision: 'fa1e4f591a2dbbc4cda7e717ec17a75b' },
        { url: 'static/img/apple-touch-startup-image-2160x1620.png', revision: '8af3feb2f71aa68bed7d7ef1d99ff709' },
        { url: 'static/img/apple-touch-startup-image-2208x1242.png', revision: 'c349f00f76cfc1a358a716cd2b78e8ab' },
        { url: 'static/img/apple-touch-startup-image-2224x1668.png', revision: 'c2dd3ceb0deb96fc6ce0c32a77dfd123' },
        { url: 'static/img/apple-touch-startup-image-2388x1668.png', revision: 'f43f6c5d9a08cc4071b0169afc21345f' },
        { url: 'static/img/apple-touch-startup-image-2436x1125.png', revision: '2b8c2c58c01dec4609cad039df3ad999' },
        { url: 'static/img/apple-touch-startup-image-2688x1242.png', revision: 'a9397fc2e39437a253291341706f6f48' },
        { url: 'static/img/apple-touch-startup-image-2732x2048.png', revision: 'ca938ac7df471eba6adcee498c4cff17' },
        { url: 'static/img/apple-touch-startup-image-640x1136.png', revision: '9d273f64610e5dc01a04e2a2b5360898' },
        { url: 'static/img/apple-touch-startup-image-750x1334.png', revision: 'afd509978979eea2d9215b6fbf5f84b6' },
        { url: 'static/img/apple-touch-startup-image-828x1792.png', revision: '5dec74615eb862fa21d711e5dbc6da89' },
        { url: 'static/img/coast-228x228.png', revision: '0b4e56c64b09ab61c21977f215451a1a' },
        { url: 'static/img/favicon-16x16.png', revision: 'eab4c21a59ded16f7ae43254fdc6401b' },
        { url: 'static/img/favicon-32x32.png', revision: 'e92aeec058380d5f19eb42096d650568' },
        { url: 'static/img/favicon-48x48.png', revision: '0dbbf98a448f8f7aa3d2421a893b5e9c' },
        { url: 'static/img/firefox_app_128x128.png', revision: 'e89bdcc4942c84ba65607f2c87b1c852' },
        { url: 'static/img/firefox_app_512x512.png', revision: '72bc00f3327509f6475f85606de7d93d' },
        { url: 'static/img/firefox_app_60x60.png', revision: '8887bd7ed471391b15d9e66230faa242' },
        { url: 'static/img/mstile-144x144.png', revision: '8bc62b2b6849e956715372c2e680530e' },
        { url: 'static/img/mstile-150x150.png', revision: 'fcfc7f928a3333112d50548d12214db6' },
        { url: 'static/img/mstile-310x150.png', revision: '90bfe7ebf5be1bc280eba691a1e3f6e0' },
        { url: 'static/img/mstile-310x310.png', revision: 'efddab14ea811bbe5b774687293e4f45' },
        { url: 'static/img/mstile-70x70.png', revision: '215049d2f8ab74a8c81ef70251b3f8f9' },
        { url: 'static/img/yandex-browser-50x50.png', revision: '942af22509298a93af5169b1a4c2a733' },
        { url: 'static/fonts/roboto-latin-100.woff', revision: '5cb7edfceb233100075dc9a1e12e8da3' },
        { url: 'static/fonts/roboto-latin-100.woff2', revision: '7370c3679472e9560965ff48a4399d0b' },
        { url: 'static/fonts/roboto-latin-100italic.woff', revision: 'f9e8e590b4e0f1ff83469bb2a55b8488' },
        { url: 'static/fonts/roboto-latin-100italic.woff2', revision: 'f8b1df51ba843179fa1cc9b53d58127a' },
        { url: 'static/fonts/roboto-latin-300.woff', revision: 'b00849e00f4c2331cddd8ffb44a6720b' },
        { url: 'static/fonts/roboto-latin-300.woff2', revision: 'ef7c6637c68f269a882e73bcb57a7f6a' },
        { url: 'static/fonts/roboto-latin-300italic.woff', revision: '4df32891a5f2f98a363314f595482e08' },
        { url: 'static/fonts/roboto-latin-300italic.woff2', revision: '14286f3ba79c6627433572dfa925202e' },
        { url: 'static/fonts/roboto-latin-400.woff', revision: '60fa3c0614b8fb2f394fa29944c21540' },
        { url: 'static/fonts/roboto-latin-400.woff2', revision: '479970ffb74f2117317f9d24d9e317fe' },
        { url: 'static/fonts/roboto-latin-400italic.woff', revision: 'fe65b8335ee19dd944289f9ed3178c78' },
        { url: 'static/fonts/roboto-latin-400italic.woff2', revision: '51521a2a8da71e50d871ac6fd2187e87' },
        { url: 'static/fonts/roboto-latin-500.woff', revision: '87284894879f5b1c229cb49c8ff6decc' },
        { url: 'static/fonts/roboto-latin-500.woff2', revision: '020c97dc8e0463259c2f9df929bb0c69' },
        { url: 'static/fonts/roboto-latin-500italic.woff', revision: '288ad9c6e8b43cf02443a1f499bdf67e' },
        { url: 'static/fonts/roboto-latin-500italic.woff2', revision: 'db4a2a231f52e497c0191e8966b0ee58' },
        { url: 'static/fonts/roboto-latin-700.woff', revision: 'adcde98f1d584de52060ad7b16373da3' },
        { url: 'static/fonts/roboto-latin-700.woff2', revision: '2735a3a69b509faf3577afd25bdf552e' },
        { url: 'static/fonts/roboto-latin-700italic.woff', revision: '81f57861ed4ac74741f5671e1dff2fd9' },
        { url: 'static/fonts/roboto-latin-700italic.woff2', revision: 'da0e717829e033a69dec97f1e155ae42' },
        { url: 'static/fonts/roboto-latin-900.woff', revision: 'bb1e4dc6333675d11ada2e857e7f95d7' },
        { url: 'static/fonts/roboto-latin-900.woff2', revision: '9b3766ef4a402ad3fdeef7501a456512' },
        { url: 'static/fonts/roboto-latin-900italic.woff', revision: '28f9151055c950874d2c6803a39b425b' },
        { url: 'static/fonts/roboto-latin-900italic.woff2', revision: 'ebf6d1640ccddb99fb49f73c052c55a8' },
        { url: '404.html', revision: '586659e40d1165018f2b2efb24d32548' },
        { url: 'categories/blog/index.html', revision: 'aec3574420830ff53694c863b41f60cb' },
        { url: 'categories/debug/index.html', revision: 'cf6c78ab174130cc800699b99616428f' },
        { url: 'categories/index.html', revision: '7cc3e31f3b5abcd6153c5d040f57f4ef' },
        { url: 'categories/note/index.html', revision: '2973306b16c2a6e4b8dba8ae7c77643b' },
        { url: 'categories/others/index.html', revision: '2bc8eeebf7bdf89dce5c9839963fb279' },
        { url: 'index.html', revision: '013bfc0e1031be850e5c2914595a3e54' },
        { url: 'pages/about/index.html', revision: '20ccced36d2790fa4bb532a6c5b3cf95' },
        { url: 'pages/projects/index.html', revision: 'f4f8537d82d72e27ccf590a7df551862' },
        {
          url: 'posts/2015/10/25/apache-shiro-spring-integration/index.html',
          revision: '13d663d392900caa6f96f18e97f4ba67'
        },
        { url: 'posts/2015/11/10/beanutils-vs-reflection/index.html', revision: '3fee10cb9705df185c93166958077e74' },
        {
          url: 'posts/2015/12/13/ubuntu-mean-development-environment-setup/index.html',
          revision: '243bd322b6f1307d3cc7331344b738bd'
        },
        {
          url: 'posts/2015/12/14/nodejs-libclntsh-so-11-1-cannot-open-shared-object-file/index.html',
          revision: 'c981c354356868e3d0c76f242a4f1a48'
        },
        { url: 'posts/2015/12/27/site-upgrade-plan/index.html', revision: 'fe1056cc10c86fd4e516238ff1507be2' },
        { url: 'posts/2016/01/01/review-2015/index.html', revision: 'ce622d883e342de28fa24839e58362e2' },
        {
          url: 'posts/2016/01/11/nodejs-oracledb-install-on-rhel-6/index.html',
          revision: '0cbe339ac5de325835dfef44ef0c6248'
        },
        {
          url: 'posts/2016/01/12/nodejs-oracledb-ora-21561-solution/index.html',
          revision: '90ee00983d8d1de731e0ec0e1188f237'
        },
        { url: 'posts/2016/03/06/site-code-structure/index.html', revision: '6cbf85e6ad3044769ba4897547f1bf1c' },
        {
          url: 'posts/2016/04/09/hadoop-2-7-2-single-node-and-cluster-mode-installation-guide/index.html',
          revision: 'd7f38e8d3d94513981b58d4f79bc0c39'
        },
        {
          url: 'posts/2016/04/10/google-codejam-2016-qualification-round/index.html',
          revision: 'f80b37a4a9bebf412c9359de30f74703'
        },
        {
          url: 'posts/2016/04/30/angular-ui-performance-tuning-experience/index.html',
          revision: 'da42302dec6855ec44cd15cce622c0f2'
        },
        { url: 'posts/2016/07/05/move-to-new-apartment/index.html', revision: '8e1e886e6afe804dbc7baf508ddaa11e' },
        { url: 'posts/2017/01/01/review-2016/index.html', revision: '5fa9ce8253b709682c25d0603058b6ad' },
        { url: 'posts/2017/03/12/new-version-blog-migration/index.html', revision: '624cc2e9cf8f6517a21b93a14e5a164b' },
        { url: 'posts/2017/05/05/vue-version-for-blog-app/index.html', revision: '4ac4e7d720630ca80ebf8110f4e4895d' },
        { url: 'posts/2018/01/01/review-2017/index.html', revision: 'ade6a486d4eebf33dd9cbe6274269cc6' },
        { url: 'posts/2018/03/03/latest-update-on-blog-app/index.html', revision: '99697f306e87d96d7c7f919de469f82c' },
        {
          url: 'posts/2018/03/04/karma-based-traditional-java-web-frontend-unittest-solution/index.html',
          revision: '7d409cd88b47f883914550d1c95c21d6'
        },
        {
          url: 'posts/2018/04/01/karma-jawr-development-note/index.html',
          revision: '9e617a6a8140384d0112454ccc04808b'
        },
        {
          url: 'posts/2019/07/07/github-actions-overview-and-practice/index.html',
          revision: '5de8c9b1c0e919d93f8229e3c4a5b6ad'
        },
        { url: 'posts/2019/07/23/travel-in-beijing/index.html', revision: '460ada0294b060c846177d325b08b0d8' },
        {
          url: 'posts/2019/08/18/github-actions-new-yaml-syntax/index.html',
          revision: 'eaceac8c63cf763592bbc36f287f5b99'
        },
        {
          url: 'posts/2019/11/14/monorepo-practice-in-typescript-projects/index.html',
          revision: 'd6a3edbfadd0bf4bdecc33e6262d0398'
        },
        { url: 'posts/2020/01/28/review-2019/index.html', revision: '6ea6e0f1ce756038e2a9186d56c520f4' },
        {
          url: 'posts/2020/02/12/using-patch-package-patching-node-modules/index.html',
          revision: '712cc984867fc11790aaf18e4e490df5'
        },
        {
          url: 'posts/2020/03/01/keep-your-repo-dependencies-up-to-date-with-renovate/index.html',
          revision: '275ad57980dfc85bab95f1a813920103'
        },
        { url: 'posts/index.html', revision: '3ac736d95874ad6bf56f273e88e1d894' },
        { url: 'tags/actions/index.html', revision: 'b76fa2f8a8cb66ce320d597759c464d0' },
        { url: 'tags/angular/index.html', revision: '666675ba0206bed8fb8be519bc5511da' },
        { url: 'tags/angularjs/index.html', revision: 'abf14c019c7ee0a2cb61974fa88de8d9' },
        { url: 'tags/apache/index.html', revision: '9cf6bc06a3f8487cc6a92b5ba6367d84' },
        { url: 'tags/blog/index.html', revision: '22afd9b597536c2fdf7db1b5afced21c' },
        { url: 'tags/ci/index.html', revision: 'f05d197a976b31a48c7d7d955975ee4e' },
        { url: 'tags/diary/index.html', revision: 'f84d1bb2bb8a34276073eab46c5790cb' },
        { url: 'tags/docker/index.html', revision: 'bf6ba3cfe4d25b9db2367d350123d089' },
        { url: 'tags/extjs/index.html', revision: '77e01e5d4d2a2674ea0c8ae33fe7fb4b' },
        { url: 'tags/github/index.html', revision: 'd23220ba8f987c1db627244eebc421f2' },
        { url: 'tags/google/index.html', revision: '2b5dcfda440da9dd3703f05e5ff0076f' },
        { url: 'tags/gulp/index.html', revision: '8d530e411b2913b9091b0a572ed50c93' },
        { url: 'tags/hadoop/index.html', revision: 'acb1cdba0cfbc0d756a5efdf44bb2c6b' },
        { url: 'tags/index.html', revision: 'f2e389a5914e1e2a0b738fd8c50c5108' },
        { url: 'tags/intellij-idea/index.html', revision: 'e7c53e0c4353d427ee1038f24385fbbb' },
        { url: 'tags/java/index.html', revision: 'ab342bd0acbe1c18a11eb4ed0a520293' },
        { url: 'tags/javascript/index.html', revision: '5d774bb124c3b69f343283cfba819f69' },
        { url: 'tags/jawr/index.html', revision: '9a10125226d0b160e23c08420cd1a495' },
        { url: 'tags/jest/index.html', revision: '19bbb637edd872119f0dc2ebb16a0c41' },
        { url: 'tags/jsf/index.html', revision: '468d3c9baa768da288f8e72661c3585c' },
        { url: 'tags/karma/index.html', revision: '08c259a8b1bff3a4009e4ff5625707ca' },
        { url: 'tags/lerna/index.html', revision: '1e2b876962789d40f446d173773a6364' },
        { url: 'tags/linux/index.html', revision: '3d886f76f2a26c4cdeec2a0da9aa0a43' },
        { url: 'tags/monorepo/index.html', revision: '58681f170cdbfef05e5309c037535633' },
        { url: 'tags/node/index.html', revision: 'd9d8463646bbe40c13102f60c923c908' },
        { url: 'tags/npm/index.html', revision: 'b0d8a9267356f372121a1d4e9d40b0de' },
        { url: 'tags/oracle/index.html', revision: 'c66040739fce5a67b2b59b5e5867bec4' },
        { url: 'tags/pwa/index.html', revision: '251068a1463eee0afae20780948bb84c' },
        { url: 'tags/renovate/index.html', revision: '6774284cccf066b1e33c8108a484dc88' },
        { url: 'tags/security/index.html', revision: 'b93601070322dfa218221791969dd21a' },
        { url: 'tags/shiro/index.html', revision: 'aafbac6274ed550246a94f1281702723' },
        { url: 'tags/site/index.html', revision: 'b50cfdca480a4b7421374afbe84d7cd0' },
        { url: 'tags/spring/index.html', revision: '7c927549b8e86fbc38c216c5e5002a95' },
        { url: 'tags/springmvc/index.html', revision: '18901b52f7ff833122e7d2060cd60c35' },
        { url: 'tags/travisci/index.html', revision: 'cc8450cb4176ce3452196fcf143c1e19' },
        { url: 'tags/trips/index.html', revision: '06ba1eb78bc0b06eefb346c7e6817a79' },
        { url: 'tags/typescript/index.html', revision: '010bd6e9bf1492bb5619674bccfa0838' },
        { url: 'tags/ubuntu/index.html', revision: '804f4e2ce3766b73140f54351ac7976f' },
        { url: 'tags/vps/index.html', revision: '0384953e5961504ebc2e5b5f57cf2302' },
        { url: 'tags/vue/index.html', revision: '67913d8194b62db686d8a312cbed4ccb' },
        { url: 'tags/webpack/index.html', revision: '812f518237c0d113721c9fee4b495c6a' }
      ],
      {}
    );
});
//# sourceMappingURL=service-worker.js.map
