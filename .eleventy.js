const moment = require('moment');
const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
moment.locale('en');
const now = new Date();
const livePosts = p => p.date <= now;
const pluginPWA = require("eleventy-plugin-pwa");

module.exports = function(eleventyConfig) {
eleventyConfig.addFilter('dateIso', date => {
    return moment(date).toISOString();
  });
 
  eleventyConfig.addFilter('dateReadable', date => {
    return moment(date).format('DD MMM YYYY'); // E.g. May 31, 2019
  });

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.addFilter('status', (collection) => {
    return collection.filter(livePosts).reverse()

  });

  /*
   *Plugins
   *
   *
   */
  eleventyConfig.addPlugin(pluginPWA);
  eleventyConfig.addPlugin(pluginRss);

  /**
   * ShortCodes
   * 
   * 
   */
  eleventyConfig.addShortcode("tick", function() { 
    return '<svg class="icon icon-wrench inline" width="32" height="32" viewBox="0 0 32 32"><use fill="green" xlink:href="/symbol-defs.svg#icon-checkmark"></use></svg>'
   });

  eleventyConfig.addShortcode('year', function(){
    return moment().format("YYYY");
  })
/**
 * SSL For Weather API leave for now
 * 
 *
   eleventyConfig.setBrowserSyncConfig({
     https: {
     key: '/home/robert/localhost.key',
     cert: '/home/robert/localhost.crt'
     }
   });

 /**
  * PASSTHROUGH
  * 
  */
eleventyConfig.addPassthroughCopy('symbol-defs.svg')
eleventyConfig.addPassthroughCopy('favicon-16x16.png')
eleventyConfig.addPassthroughCopy('favicon.ico')
eleventyConfig.addPassthroughCopy('apple-touch-icon.png')
eleventyConfig.addPassthroughCopy('android-chrome-192x192.png')
eleventyConfig.addPassthroughCopy('android-chrome-384x384.png')
eleventyConfig.addPassthroughCopy('browserconfig.xml')
eleventyConfig.addPassthroughCopy('favicon-32x32.png')
eleventyConfig.addPassthroughCopy('icon-512x512.png')
eleventyConfig.addPassthroughCopy('mstile-150x150.png')
eleventyConfig.addPassthroughCopy('manifest.webmanifest')
eleventyConfig.addPassthroughCopy('googlecc34e0826a64c2b1.html')
//eleventyConfig.addPassthroughCopy('sw.min.js')
//eleventyConfig.addPassthroughCopy('css/styles.css')
eleventyConfig.addPassthroughCopy('js')
//eleventyConfig.addPassthroughCopy('fonts')
eleventyConfig.addPassthroughCopy('img')
//eleventyConfig.addPassthroughCopy('offline')
eleventyConfig.addPassthroughCopy('robots.txt')
  return {
    passthroughFileCopy: true
  }



}
