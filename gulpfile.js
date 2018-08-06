//Elixir gulpfile.js

var elixir = require('laravel-elixir');

elixir(function (mix) {
    mix
    // App
        .sass('./assets/sass/app.scss', './dist/css/app.min.css')

        // Website
        .sass('./assets/sass/pages/website/website-style.scss', './dist/css/website-style.min.css')

        // Components
        .sass('./assets/sass/components/base-components.scss', './dist/css/components.min.css')

        // Layouts
        .sass('./assets/sass/layouts/base-layouts.scss', './dist/css/layouts.min.css')

        // Mixins
        .sass('./assets/sass/mixins/base-mixins.scss', './dist/css/mixins.min.css')

        // Utilities
        .sass('./assets/sass/utilities/base-utilities.scss', './dist/css/utilities.min.css')

        //Fonts
        .styles(
            [
                './dist/fonts/flaticon/css/flaticon.css',
                './dist/fonts/line-awesome/css/line-awesome.css',
                './dist/fonts/line-awesome/css/line-awesome-font-awesome.css'
            ],
            './dist/css/fonts.min.css'
        )

        //Vendor-CSS
        .styles(
            [
                './assets/sass/vendor-css/normalize/normalize.css'
            ],
            './dist/css/vendor.min.css'
        );

    mix.scripts('./assets/js/script.js', './dist/js/app.min.js');
    // mix.scripts(
    //   [
    //     './assets/js/vendor-js/jquery-3.3.1.min.js',
    //     './assets/js/vendor-js/modernizr-3.5.0.min.js'
    //   ],
    //   './dist/js/vendor.min.js'
    // );
});
