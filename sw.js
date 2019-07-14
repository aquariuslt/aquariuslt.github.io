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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "static/css/main.9e820cef32f813507b34.css",
    "revision": "8efad7d7060b7162cc3ebdb94f967318"
  },
  {
    "url": "static/css/vendors.83469bd362f9e1162bce.css",
    "revision": "8ceacd6286906a667c21221c5bd64a42"
  },
  {
    "url": "static/js/main.9e820cef32f813507b34.js",
    "revision": "6eac0365cf76a3267de2a8d7976069cc"
  },
  {
    "url": "static/js/vendors.83469bd362f9e1162bce.js",
    "revision": "4852d7dc65262f1c74d9b7c9c22316f2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
