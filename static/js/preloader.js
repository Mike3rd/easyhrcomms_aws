/* ===================================================================
 * Mike Turko 1.0.0 - Preloader JS
 *
 *
 * ------------------------------------------------------------------- */

(function(html) {

    'use strict';

   /* preloader
    * -------------------------------------------------- */
    const ssPreloader = function() {

        const preloader = document.querySelector('#preloader');
        if (!preloader) return;

        html.classList.add('ss-preload');
        
        window.addEventListener('load', function() {
            html.classList.remove('ss-preload');
            html.classList.add('ss-loaded');
            tl.play();
        });

    }; // end ssPreloader

   /* initialize
    * ------------------------------------------------------ */
    (function ssInit() {

        ssPreloader();


    });

})(document.documentElement);