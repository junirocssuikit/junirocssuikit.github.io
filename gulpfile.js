//Elixir gulpfile.js

var elixir = require('laravel-elixir');

elixir(function (mix) {
    mix
        .sass(
            './assets/sass/app.scss', './dist/css/app.min.css'
        )

        .sass(
            './assets/sass/pages/website/website-style.scss', './dist/css/website-style.min.css'
        )

        .sass(
            [
                './assets/sass/helpers/base-helpers.scss',
                './assets/sass/components/base-components.scss'
            ], './dist/css/components.min.css')

        .styles(
            ['./assets/sass/vendor-css/normalize/normalize.css'],
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
