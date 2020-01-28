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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9e25f27521d24114aac6f826ae9da746"
  },
  {
    "url": "all/index.html",
    "revision": "bef16f4d94fc74b933b8efcdaa0a889d"
  },
  {
    "url": "assets/css/0.styles.0bd87432.css",
    "revision": "055e6c8e4b67263af2e9b122e23b8870"
  },
  {
    "url": "assets/custom.css",
    "revision": "67cff54b14216ed941b6d81f0cd02ccb"
  },
  {
    "url": "assets/eina-700.woff2",
    "revision": "36b55fefa94a4001f0a29baef41f530f"
  },
  {
    "url": "assets/fonts/eina-700.36b55fef.woff2",
    "revision": "36b55fefa94a4001f0a29baef41f530f"
  },
  {
    "url": "assets/fonts/material-icons.d7e60f9d.woff2",
    "revision": "d7e60f9d1433a45ed71817f6d23abeca"
  },
  {
    "url": "assets/img/arduino-dash.50016f39.png",
    "revision": "e1a5b7a54ba5bad804d5dd4bf4c95142"
  },
  {
    "url": "assets/img/avatar.4521ac73.jpg",
    "revision": "d61d53e5c5d8ce683431db6829759e4c"
  },
  {
    "url": "assets/img/daq-1.7feb55d2.jpg",
    "revision": "9df0170fa085d94a3f57e4bc44e27abc"
  },
  {
    "url": "assets/img/dr16-1.f69a19f6.jpg",
    "revision": "2db35222e76630f7face4684d6597e84"
  },
  {
    "url": "assets/img/dr16-2.ff71b8eb.jpg",
    "revision": "6935bc67038fc35c3ee9f4011c47ad4d"
  },
  {
    "url": "assets/img/dr16-3.587f7ec1.jpg",
    "revision": "1a7a9a0b46d7f2a308c8ea08e7b96aa4"
  },
  {
    "url": "assets/img/dr16-4.b45b2b57.jpg",
    "revision": "e49535cd9e3d27ccc01baefc7a2bfb2e"
  },
  {
    "url": "assets/img/dr16-5.ef8dd5fd.jpg",
    "revision": "7d9ee715980ab4d7398acd86729c05e2"
  },
  {
    "url": "assets/img/dr16-6.01597d99.jpg",
    "revision": "eb2bcc05c61c9f29b6d80ce9c2f5c348"
  },
  {
    "url": "assets/img/dr16-7.5af06bf5.jpg",
    "revision": "15169bc4fd5d4e4d3e0a134a061d8b25"
  },
  {
    "url": "assets/img/dr16-8.8499961e.jpg",
    "revision": "f37c24da4d8fa0939579c7448716c91b"
  },
  {
    "url": "assets/img/dr17-1.a436d1d9.jpg",
    "revision": "48e60ba6540fad9354385acc8de08a8e"
  },
  {
    "url": "assets/img/dr17-10.a160aba9.jpg",
    "revision": "8a66be8d176cdba913c18801a97f88d9"
  },
  {
    "url": "assets/img/dr17-11.b22b4e32.jpg",
    "revision": "df438ad4d0e54530f0e617964798365d"
  },
  {
    "url": "assets/img/dr17-12.642bf06e.jpg",
    "revision": "330a3c187fe3a789087b473910d06b2e"
  },
  {
    "url": "assets/img/dr17-13.69eddf4f.jpg",
    "revision": "0cf288102a68b2248dcc2376709185c7"
  },
  {
    "url": "assets/img/dr17-2.51e3f997.jpg",
    "revision": "cc5f2b03e92ff7fdde7fd44126ef74cb"
  },
  {
    "url": "assets/img/dr17-3.0d3a341f.jpg",
    "revision": "1afbc4f5f36b7450ce21d48abe201ca5"
  },
  {
    "url": "assets/img/dr17-4.a066b3e4.jpg",
    "revision": "f8322db63cf0affa383fd4c37806aad2"
  },
  {
    "url": "assets/img/dr17-6.33869993.jpg",
    "revision": "fd6609871d4ea0093f2b21d66c74d869"
  },
  {
    "url": "assets/img/dr17-8.d078eb10.jpg",
    "revision": "6acc859efba493ba02e13898c825eb59"
  },
  {
    "url": "assets/img/dr17-9.b132803e.jpg",
    "revision": "1566570da5381380ccb8382e9a62741c"
  },
  {
    "url": "assets/img/dyno-1.24a5b2c0.jpg",
    "revision": "29017a063e999c75875f7c5064650d5f"
  },
  {
    "url": "assets/img/dyno-2.8bbb671d.jpg",
    "revision": "694aafed00e116571bb0cb5583ca839a"
  },
  {
    "url": "assets/img/dyno-3.b4196aa5.jpg",
    "revision": "9519d718e774f4130feac398f925ab92"
  },
  {
    "url": "assets/img/dyno-4.078d0947.jpg",
    "revision": "8dd7cab76319fc73b1c8a4a294b090f0"
  },
  {
    "url": "assets/img/dyno-5.1a7a1644.png",
    "revision": "33f894b71911447b8478152c9c1beef1"
  },
  {
    "url": "assets/img/dyno-6.997a4da8.png",
    "revision": "728f63f4afb236ee3077cf4285a803a6"
  },
  {
    "url": "assets/img/engine-1.e3939b7d.jpg",
    "revision": "c19df7a91e25982db34ea8603f8208d2"
  },
  {
    "url": "assets/img/engine-2.b992c55d.jpg",
    "revision": "98b0958253463b53952d6aa43a287fd2"
  },
  {
    "url": "assets/img/engine-3.46844a8b.jpg",
    "revision": "cbdf89a958ad924ba2924421311dd658"
  },
  {
    "url": "assets/img/fms-1.76417cee.jpg",
    "revision": "3b3f986d7cb39f6ec71feeeb0569fa10"
  },
  {
    "url": "assets/img/fms-2.68e2da8d.jpg",
    "revision": "06c810e73f347a379a97e4f023b3ef6a"
  },
  {
    "url": "assets/img/fms-3.45d71414.jpg",
    "revision": "b27f1dd90d25c39be63f535f74fbb025"
  },
  {
    "url": "assets/img/hello-world-intro.0b7e2f44.png",
    "revision": "7f1fa5f7293fdca938dae8246dc5477a"
  },
  {
    "url": "assets/img/introduction.eae735b9.png",
    "revision": "e3b9c10f3cc7676bf0a7d326c018b51d"
  },
  {
    "url": "assets/img/misc-1.97735c2d.jpg",
    "revision": "9affd87714094ce5f404716fec789311"
  },
  {
    "url": "assets/img/misc-2.ab814c0a.jpg",
    "revision": "63eed56e845043c2c79ac5c1b5429fe8"
  },
  {
    "url": "assets/img/misc-3.def43c96.jpg",
    "revision": "b45005fe11e32ced69a5622766a1b75c"
  },
  {
    "url": "assets/img/quark-1.e1b03e9f.jpg",
    "revision": "38f3d363fc280a975f13855c4294635e"
  },
  {
    "url": "assets/img/quark-2.83f9de13.jpg",
    "revision": "a2358c8ba1be09096b596e6d954da183"
  },
  {
    "url": "assets/img/quark-3.e64b5d8e.jpg",
    "revision": "8a942798d9054d86f8828ea1cfdaad15"
  },
  {
    "url": "assets/img/quark-4.bfdbf74a.jpg",
    "revision": "2682d47621e34c018a89e8befc746ee7"
  },
  {
    "url": "assets/img/quark-5.c0193fa4.jpg",
    "revision": "7a3a528f848cd1b21971180129d5e1da"
  },
  {
    "url": "assets/img/radiator-1.9259bee6.jpg",
    "revision": "b29c2e9c0de7462555d2dac888201cbd"
  },
  {
    "url": "assets/img/radiator-2.2ab96619.jpg",
    "revision": "d75b5a773f443698f547ff6f9bec5e08"
  },
  {
    "url": "assets/img/radiator-3.9ad753e5.jpg",
    "revision": "bd57f5398bf214fef7f2ea52e7119ea0"
  },
  {
    "url": "assets/img/radiator-4.258f6d8f.jpg",
    "revision": "f65b8ccab0df9b11cec9ca50ddfb6f42"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "0fdc32cc2aed91e46a8b7950f9962c9c"
  },
  {
    "url": "assets/img/steering-wheel-0.77efd552.png",
    "revision": "03e2c6b76b33c2bb6db7cd90a150db3a"
  },
  {
    "url": "assets/img/steering-wheel-1.a0766a3d.jpg",
    "revision": "b3c607d258bfaa13dba8b313b02d062d"
  },
  {
    "url": "assets/img/steering-wheel-2.23790c93.jpg",
    "revision": "86ac23f14de10c4f9c53a4b2fc0aa71c"
  },
  {
    "url": "assets/img/steering-wheel-3.e42df382.jpg",
    "revision": "c3aa17fc5a2cabd23f38dfae17fbf1c2"
  },
  {
    "url": "assets/img/steering-wheel-4.6a481569.png",
    "revision": "4e964163868dd64557a590ebfa7b00f5"
  },
  {
    "url": "assets/img/steering-wheel-5.1aa52c21.png",
    "revision": "44681177f09101adf604930938421a74"
  },
  {
    "url": "assets/img/subsystems-1.2084c3ee.jpg",
    "revision": "19e0aa7b67c7cdc5db9c3ca80798e09e"
  },
  {
    "url": "assets/img/subsystems-2.cbf36f41.jpg",
    "revision": "30aacf789557b03e8087c0336d092bb7"
  },
  {
    "url": "assets/img/subsystems-3.bf128e29.jpg",
    "revision": "35177779b42405a97d2fcc9a409ea6aa"
  },
  {
    "url": "assets/img/subsystems-4.b1ed16bc.jpg",
    "revision": "05a44d607fc1e36d75abeb2fc015eaeb"
  },
  {
    "url": "assets/img/subsystems-5.07dea267.jpg",
    "revision": "befca1328b57537fbdb30965f57b9094"
  },
  {
    "url": "assets/img/subsystems-6.fca87a15.jpg",
    "revision": "5fe3a3148c7118a2fe4f2ebf7c72fd29"
  },
  {
    "url": "assets/img/subsystems-7.ba2251bb.jpg",
    "revision": "17edc8b7ba4140f98cf4b861faeaeeec"
  },
  {
    "url": "assets/img/subsystems-8.b421f5dd.jpg",
    "revision": "b63d6086549f95c6f086d9edd782f83d"
  },
  {
    "url": "assets/img/system-monitor.32cc471f.png",
    "revision": "9272468b5abe81d4910f450f0f0146ea"
  },
  {
    "url": "assets/img/vgim-1.86212bbf.jpg",
    "revision": "5b8b77ca92464a81e3dcb916378cfbdd"
  },
  {
    "url": "assets/img/vgim-13.33cb7159.jpg",
    "revision": "40488eb61e9306b297f046afc0743e96"
  },
  {
    "url": "assets/img/vgim-14.c72a6d7a.jpg",
    "revision": "e3c5da5a15895a4675c7c3d01950b105"
  },
  {
    "url": "assets/img/vgim-2.849f906d.jpg",
    "revision": "ef9dc1633d88392d9a2c370cf0a65687"
  },
  {
    "url": "assets/img/vgim-3.c5655354.jpg",
    "revision": "42b32bd9eb62df88314ab3a9fd251eb5"
  },
  {
    "url": "assets/img/vgim-4.e7402a60.jpg",
    "revision": "3ac19622f83171b1499a485529b83935"
  },
  {
    "url": "assets/img/vgim-5.5f99b086.jpg",
    "revision": "dc365c136be29de6062eb39fe6c7b218"
  },
  {
    "url": "assets/img/vgim-6.8e944741.jpg",
    "revision": "12d7e7787aad4db470b59a4b00bbb2c4"
  },
  {
    "url": "assets/img/vgim-7.193ae550.png",
    "revision": "16c2d3ca522c85f353f0593ef9b1c73d"
  },
  {
    "url": "assets/img/vgim-8.ba8a7469.jpg",
    "revision": "69c1fee1860b225bbe6f027a48c26e4d"
  },
  {
    "url": "assets/img/vgim-9.2fb48ac7.png",
    "revision": "1885df985fd883ccd104196730f1fc55"
  },
  {
    "url": "assets/ionic-prism.css",
    "revision": "95fe584f5a961018f48f7cd53514c30d"
  },
  {
    "url": "assets/ionic.css",
    "revision": "2812006fb2a233b149dd6c22925722b3"
  },
  {
    "url": "assets/js/10.e31b7df6.js",
    "revision": "d26041c06b7a739c7514bfdae6f4d1aa"
  },
  {
    "url": "assets/js/11.918c3438.js",
    "revision": "001c8bc35ae848099997bfdf07e40eec"
  },
  {
    "url": "assets/js/12.adbfd73e.js",
    "revision": "2a4b3f405b90e5f3064658fe410e34ec"
  },
  {
    "url": "assets/js/13.a9d4519c.js",
    "revision": "7cac83757d06fb4b4e407190adc67b10"
  },
  {
    "url": "assets/js/14.475589b0.js",
    "revision": "750978bc9662fd54604fd13dc5e77cbc"
  },
  {
    "url": "assets/js/15.5519bdc2.js",
    "revision": "f07514b52fc2a6a3e7225fdbb5265bfb"
  },
  {
    "url": "assets/js/16.fb673d88.js",
    "revision": "3bf78a6fb633a092bf25e9df4d1ca813"
  },
  {
    "url": "assets/js/17.7ac87521.js",
    "revision": "10149cdda8be65a81d8e939dc4e83102"
  },
  {
    "url": "assets/js/18.ab162630.js",
    "revision": "c3b5fed1f264a3c815910ad260065257"
  },
  {
    "url": "assets/js/19.a862ae85.js",
    "revision": "9d9f04b807bde68302a18d1625a62ac7"
  },
  {
    "url": "assets/js/2.f9876139.js",
    "revision": "25dc8fc140ea9ecb1d1c3cacb6eba4b6"
  },
  {
    "url": "assets/js/20.c07f9b8e.js",
    "revision": "049912f6297ebc656f8b89ff98e226e2"
  },
  {
    "url": "assets/js/21.b89e34d6.js",
    "revision": "436ae211de1b55dcb3e146deec099280"
  },
  {
    "url": "assets/js/22.9f6cc0ac.js",
    "revision": "0bca6d0284d4893118bba0dabc7c3b4a"
  },
  {
    "url": "assets/js/23.a1cd8e20.js",
    "revision": "c0bc7f6e718159cd8e82d5e6400a9990"
  },
  {
    "url": "assets/js/24.d75fa360.js",
    "revision": "44caa23b4ac7547fbc2a08a9d88ef0db"
  },
  {
    "url": "assets/js/25.fa2f8555.js",
    "revision": "35f00a0b99e49d3f7d028aac71af6f6c"
  },
  {
    "url": "assets/js/26.d5c80ed4.js",
    "revision": "18d93f7310a0cfd96fcf35f7281e4e4c"
  },
  {
    "url": "assets/js/27.1a1241a7.js",
    "revision": "849ffc1fd3ec3b562d9adb7b1ea9bacf"
  },
  {
    "url": "assets/js/28.30567bcb.js",
    "revision": "36b9866fb06cfeedee4b6c22b82223c4"
  },
  {
    "url": "assets/js/29.74003102.js",
    "revision": "16c5c89a60d9f97f861702e65a244280"
  },
  {
    "url": "assets/js/3.8d39d107.js",
    "revision": "69eeb8dae7834b6e3afc20e5550e1b36"
  },
  {
    "url": "assets/js/30.ca8954f4.js",
    "revision": "5c7b1d7bcce34bc1cf15214cb9846d28"
  },
  {
    "url": "assets/js/31.dbfb41bd.js",
    "revision": "57f5dcd6bbd24a508546c2eef4793441"
  },
  {
    "url": "assets/js/32.913eaa0d.js",
    "revision": "b49dfd2fda2b4122f7c87ae5311a9c91"
  },
  {
    "url": "assets/js/33.ac085520.js",
    "revision": "4712f9e16070f70ce0c10d1816da4b28"
  },
  {
    "url": "assets/js/34.d2172028.js",
    "revision": "3e1820dbdf6d534fd8d2dd76891089bc"
  },
  {
    "url": "assets/js/35.8e87cf39.js",
    "revision": "72e587a3ae230299fc5e2ad2cc140508"
  },
  {
    "url": "assets/js/36.c9bdcf70.js",
    "revision": "4c210ff474ed51c102c8d3bb5ea54663"
  },
  {
    "url": "assets/js/37.ae039dc3.js",
    "revision": "af87ab020da79beb56a7fefd5ec25482"
  },
  {
    "url": "assets/js/38.8e9afa0f.js",
    "revision": "7b347ede43465aaa1381ecb7d913a02d"
  },
  {
    "url": "assets/js/39.15c653f0.js",
    "revision": "7a3cee1e31425f5f9c52ecca7d5e16e0"
  },
  {
    "url": "assets/js/4.99f5b441.js",
    "revision": "3ab977049682fa978dddea48af2031c0"
  },
  {
    "url": "assets/js/40.6d1511a9.js",
    "revision": "2ae84094ff387752abed39ae44fa643f"
  },
  {
    "url": "assets/js/41.17bc97f7.js",
    "revision": "649d7c845174fe6d3afae84c527be540"
  },
  {
    "url": "assets/js/42.111cf5f5.js",
    "revision": "230984a512f378117f3ea1b6dfeb38fb"
  },
  {
    "url": "assets/js/43.438e23e8.js",
    "revision": "6a7f0d1e1a37df7813ec46ed2ce8af74"
  },
  {
    "url": "assets/js/44.caf03fa8.js",
    "revision": "406ba80b63e4abfa5c1a77156ef4b0d5"
  },
  {
    "url": "assets/js/45.b9e0bd3b.js",
    "revision": "6bad0a7b9cc4c20332571ed19942ec67"
  },
  {
    "url": "assets/js/46.3ffe5424.js",
    "revision": "16569f5de8de99ee59fc78a7fa981017"
  },
  {
    "url": "assets/js/47.4fcf71c6.js",
    "revision": "965c04142adb0cd4218039b822dab2ba"
  },
  {
    "url": "assets/js/48.4af1b41a.js",
    "revision": "acee428133d59491cb90d09bef12253a"
  },
  {
    "url": "assets/js/49.6ae4dc3f.js",
    "revision": "6bb71a07ceb786f611dd0b4154fdbedc"
  },
  {
    "url": "assets/js/5.bc74060b.js",
    "revision": "1b5b93edeebd9ce69ffbfdc6411b428d"
  },
  {
    "url": "assets/js/50.b5a6fd24.js",
    "revision": "05625b42207ca40ced6bc07e561d0b9a"
  },
  {
    "url": "assets/js/51.ebd90862.js",
    "revision": "676796c22ec69e527c54c9f901c81d2a"
  },
  {
    "url": "assets/js/52.c984cb2d.js",
    "revision": "c70147bca27e8ccd9d5f3ff195e7a93e"
  },
  {
    "url": "assets/js/53.099c3219.js",
    "revision": "0639dda46d7bfca35386e4bc24bcae20"
  },
  {
    "url": "assets/js/54.39d0b3f7.js",
    "revision": "f91dc639af862f38342136a581ddef3d"
  },
  {
    "url": "assets/js/55.b25d9cbf.js",
    "revision": "08609bf9d6c5f522850fe1847744136b"
  },
  {
    "url": "assets/js/56.82c79624.js",
    "revision": "9c7baa3c40fb67d6afbae63c75f6a4e1"
  },
  {
    "url": "assets/js/6.c1bf031f.js",
    "revision": "72e336e11fc5410d288598b39bcf6489"
  },
  {
    "url": "assets/js/7.69eba87b.js",
    "revision": "c78ad9ffed4985b72ca5249c552d8f92"
  },
  {
    "url": "assets/js/8.bb8515be.js",
    "revision": "c176d4d539c6545035b4dcc56adc8c38"
  },
  {
    "url": "assets/js/9.636ccea3.js",
    "revision": "ee75c0d474f9ac5656635d20df29d7c1"
  },
  {
    "url": "assets/js/app.acd09644.js",
    "revision": "41554932376e89c86dafb0d4a4e9dad0"
  },
  {
    "url": "assets/material-icons.woff2",
    "revision": "d7e60f9d1433a45ed71817f6d23abeca"
  },
  {
    "url": "categories/electronics.html",
    "revision": "6a21d82bcc2b8927e4e075782d176e7b"
  },
  {
    "url": "categories/mechanical.html",
    "revision": "c43348b3bd9d75ce127e54a2c0567b13"
  },
  {
    "url": "categories/software.html",
    "revision": "93e98fe438d0a12a9f8f58a4ba7e5ca6"
  },
  {
    "url": "images/apple-logo.svg",
    "revision": "9b77a8a09b5eeda84c2a39380e13e83f"
  },
  {
    "url": "images/arrow.svg",
    "revision": "7263e94fedf8e3642f9a71ffce663f0d"
  },
  {
    "url": "images/background-base.svg",
    "revision": "b43b24c3724d7f505085f0875a511596"
  },
  {
    "url": "images/background.svg",
    "revision": "d2ee1a6bab4e3f8aaf50f1d0e8c309ee"
  },
  {
    "url": "images/dots-small.svg",
    "revision": "1739bea3bf961fc4f071fbbb9a816152"
  },
  {
    "url": "images/download.svg",
    "revision": "9b1afdda9429f4b8fd2d7004bec0c630"
  },
  {
    "url": "images/icon-svg.svg",
    "revision": "9f9c31f1ea08370afa765560bd87bed4"
  },
  {
    "url": "images/icon.png",
    "revision": "9b8d5171a653ffa199e943aad739fd35"
  },
  {
    "url": "index.html",
    "revision": "1f3df071e4e17b46b0286afce1eebac0"
  },
  {
    "url": "logos/css.svg",
    "revision": "242fa1c5f93ac10968b08e814ca25bfd"
  },
  {
    "url": "logos/javascript.svg",
    "revision": "d33783fc2190a17324c65c5682677a39"
  },
  {
    "url": "logos/nodejs.svg",
    "revision": "d8f3b1b10bc507014166818faaa4a16f"
  },
  {
    "url": "logos/npm.svg",
    "revision": "9b56cfe9c7c003e07d92e0cc2fef3b09"
  },
  {
    "url": "logos/react_ts.svg",
    "revision": "dffa02581529155e00b5355af40178a8"
  },
  {
    "url": "logos/stylus.svg",
    "revision": "fd43bbb328592e425406144d5792f1a1"
  },
  {
    "url": "logos/typescript.svg",
    "revision": "63f6eba02514d80e0838d7926648f6a7"
  },
  {
    "url": "logos/webpack.svg",
    "revision": "ca36863b0c2a725b16883c8201076479"
  },
  {
    "url": "projects/daq.html",
    "revision": "a82f22e483a658690e90a67476570135"
  },
  {
    "url": "projects/dr16.html",
    "revision": "2f10b7fb47d6d9b73c13fdd82d7fd041"
  },
  {
    "url": "projects/dr17.html",
    "revision": "91997456651ee6a5b43e01ebf6d8964a"
  },
  {
    "url": "projects/dyno.html",
    "revision": "b0948b5c8860d39beb3ace31ca33c5c3"
  },
  {
    "url": "projects/fms.html",
    "revision": "5dd8d874479fff576763abe800f4db1d"
  },
  {
    "url": "projects/index.html",
    "revision": "dff662baace6b0feb7a1fab7990fd54f"
  },
  {
    "url": "projects/quark-appstore.html",
    "revision": "12a992d84afb0ce1973b1efb02ebaf52"
  },
  {
    "url": "projects/quark.html",
    "revision": "ba20269852e547c455691043ba72be8f"
  },
  {
    "url": "projects/radiator-design.html",
    "revision": "cf411513e5eb8e75c0720f2b450472f8"
  },
  {
    "url": "projects/steering-wheel.html",
    "revision": "9bb7d70820ac51588abe0bc5ab8148f0"
  },
  {
    "url": "projects/vgim.html",
    "revision": "bcc42df1a8b028babae8c608963c7d36"
  },
  {
    "url": "pwa/images/icons/icon-128x128.png",
    "revision": "b2ec04f759a8602014814eebc8755d70"
  },
  {
    "url": "pwa/images/icons/icon-144x144.png",
    "revision": "3d9fedd4d5bdea48e2a17a08189a74e2"
  },
  {
    "url": "pwa/images/icons/icon-152x152.png",
    "revision": "5441775bfc981223625c3a742738f7c5"
  },
  {
    "url": "pwa/images/icons/icon-192x192.png",
    "revision": "d78e24557e88c50ab129b34b2a312349"
  },
  {
    "url": "pwa/images/icons/icon-384x384.png",
    "revision": "8b97b9eb7b49e4e524e281c4f1e544e8"
  },
  {
    "url": "pwa/images/icons/icon-512x512.png",
    "revision": "deb7b634232fb6844e49e7b278d6d5dd"
  },
  {
    "url": "pwa/images/icons/icon-72x72.png",
    "revision": "ac5d7e13b5647074b9790002d6ce67b0"
  },
  {
    "url": "pwa/images/icons/icon-96x96.png",
    "revision": "6ee4aa6924c82a089f410e3187527784"
  },
  {
    "url": "resume/index.html",
    "revision": "fe5731f4e8df92fd8eb8d974e73f3869"
  },
  {
    "url": "tags/api.html",
    "revision": "53e475be8536f9f5a6e3b5b11c9a204a"
  },
  {
    "url": "tags/arduino.html",
    "revision": "e8212fcd4567c44f16531ee7bef1f027"
  },
  {
    "url": "tags/faq.html",
    "revision": "359d4e484286106e18251ba1324659a8"
  },
  {
    "url": "tags/guide.html",
    "revision": "3f0615cb4e38c1ac66cf3a01fbdf994e"
  },
  {
    "url": "tags/index.html",
    "revision": "c7fce330783c704d072885e1da3deedd"
  },
  {
    "url": "tags/javascript.html",
    "revision": "f9c29a4ad378630e0652ffbebf0552d0"
  },
  {
    "url": "tags/nodejs.html",
    "revision": "7e95d60d3ab2e5c4871763653fe18d73"
  },
  {
    "url": "tags/references.html",
    "revision": "fe9cfa2d3af83830b7d8103568f42f5f"
  },
  {
    "url": "tags/structures.html",
    "revision": "a12de57ed86aa8ade9a0673ac85fe02f"
  },
  {
    "url": "tags/typescript.html",
    "revision": "51e729100b6608d0d1c68be874c1d02f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);

workbox.routing.registerRoute(
    new RegExp('/__/'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'firebase',
    })
);

workbox.routing.registerRoute(
    /^https:\/\/google-analytics\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'google-analytics',
    })
);

workbox.routing.registerRoute(
    /^https:\/\/static\.hotjat\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'hotjar',
    })
);

// imgur images
workbox.routing.registerRoute(
    /^https:.*imgur.*\.(png|jpg|jpeg|gif)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'imgur-images',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7,
                maxEntries: 30,
            })
        ]
    })
);

// imgur videos
workbox.routing.registerRoute(
    /^https:.*imgur.*\.(mp4)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'imgur-videos',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [200],
            }),
            new workbox.rangeRequests.Plugin(),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7,
                maxEntries: 30,
            })
        ]
    })
);

// https://developers.google.com/web/tools/workbox/guides/advanced-recipes#cached-av
workbox.routing.registerRoute(
    // new RegExp('.(mp4)$'),
    // /.*\.mp4/,//
    /.*quarkjs.*\.mp4/,//
    new workbox.strategies.CacheFirst({
        cacheName: 'videos',
        plugins: [
            new workbox.cacheableResponse.Plugin({ statuses: [200] }),
            new workbox.rangeRequests.Plugin(),
        ],
    })
);