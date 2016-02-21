'use strict';

angular.module('cipNowBrandCoach', ['ngAnimate', 'ngCookies', 'ngTouch',
    'ngSanitize', 'ui.router', 'ngMaterial', 'nvd3', 'app'])
    .config(function($mdThemingProvider){
        var _theme = $mdThemingProvider.theme();
    })
    .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider,
                      $mdIconProvider) {
        $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'app/views/main.html',
                controller: 'MainController',
                controllerAs: 'vm',
                abstract: true
            })
            .state('home.dashboard', {
                url: '/dashboard',
                templateUrl: 'app/views/dashboard.html',
                data: {
                    title: 'Dashboard'
                }
            })
            .state('home.profile', {
                url: '/profile',
                templateUrl: 'app/views/profile.html',
                controller: 'ProfileController',
                controllerAs: 'vm',
                data: {
                    title: 'Profile'
                }
            })
            .state('home.retailers', {
                url: '/retailers',
                controller: 'RetailersController',
                controllerAs: 'vm',
                templateUrl: 'app/views/retailers.html',
                data: {
                    title: 'Retailer'
                }
            })
            .state('home.dates', {
                url: '/dates',
                controller: 'DatesController',
                controllerAs: 'vm',
                templateUrl: 'app/views/dates.html',
                data: {
                    title: 'Dates'
                }
            })
            .state('home.appointments', {
                url: '/appointments',
                controller: 'AppointmentsController',
                controllerAs: 'vm',
                templateUrl: 'app/views/appointments.html',
                data: {
                    title: 'Appointments'
                }
            });

        $urlRouterProvider.otherwise('/dashboard');

        $mdThemingProvider
            .theme('default')
            .primaryPalette('cipGrey', {
                'default': '700'
            })
            .accentPalette('cipGreen', {
                'default': '500'
            })
            .warnPalette('cipWarn');

        $mdThemingProvider.theme('dark', 'default')
            .primaryPalette('defaultPrimary')
            .dark();

        $mdThemingProvider.theme('grey', 'default')
            .primaryPalette('grey');

        $mdThemingProvider.theme('custom', 'default')
            .primaryPalette('defaultPrimary', {
                'hue-1': '50'
            });

        $mdThemingProvider.definePalette('defaultPrimary', {
            '50': '#FFFFFF',
            '100': 'rgb(255, 198, 197)',
            '200': '#E75753',
            '300': '#E75753',
            '400': '#E75753',
            '500': '#E75753',
            '600': '#E75753',
            '700': '#E75753',
            '800': '#E75753',
            '900': '#E75753',
            'A100': '#E75753',
            'A200': '#E75753',
            'A400': '#E75753',
            'A700': '#E75753'
        });
        $mdThemingProvider.definePalette('cipGreen', {
            '50': '#fdfefe',
            '100': '#c6e8e7',
            '200': '#9ed8d6',
            '300': '#6bc4c0',
            '400': '#55bbb6',
            '500': '#45ada8',
            '600': '#3c9793',
            '700': '#34817e',
            '800': '#2b6b68',
            '900': '#225553',
            'A100': '#fdfefe',
            'A200': '#c6e8e7',
            'A400': '#55bbb6',
            'A700': '#34817e',
            'contrastDefaultColor': 'light',
            'contrastDarkColors': '50 100 200 300 400 500 A100 A200 A400'
        });
       /* $mdThemingProvider.definePalette('cipGrey', {
            '50': '#f8fafa',
            '100': '#cbd8da',
            '200': '#abc0c3',
            '300': '#81a1a5',
            '400': '#6f9398',
            '500': '#618388',
            '600': '#547276',
            '700': '#486164',
            '800': '#3b4f52',
            '900': '#2e3e41',
            'A100': '#f8fafa',
            'A200': '#cbd8da',
            'A400': '#6f9398',
            'A700': '#486164',
            'contrastDefaultColor': 'light',
            'contrastDarkColors': '50 100 200 300 400 A100 A200 A400'
        });*/
        $mdThemingProvider.definePalette('cipGrey', {
            '50': '#d9d7d7',
            '100': '#b3afb0',
            '200': '#989394',
            '300': '#746f70',
            '400': '#656061',
            '500': '#555152',
            '600': '#454243',
            '700': '#363334',
            '800': '#262425',
            '900': '#161516',
            'A100': '#d9d7d7',
            'A200': '#b3afb0',
            'A400': '#656061',
            'A700': '#363334',
            'contrastDefaultColor': 'light',
            'contrastDarkColors': '50 100 200 A100 A200'
        });

        $mdThemingProvider.definePalette('cipWarn', {
            '50': '#ffffff',
            '100': '#f5d9db',
            '200': '#e9adb2',
            '300': '#d9757d',
            '400': '#d35d67',
            '500': '#cc4550',
            '600': '#be343f',
            '700': '#a62e37',
            '800': '#8e272f',
            '900': '#762027',
            'A100': '#ffffff',
            'A200': '#f5d9db',
            'A400': '#d35d67',
            'A700': '#a62e37',
            'contrastDefaultColor': 'light',
            'contrastDarkColors': '50 100 200 300 400 A100 A200 A400'
        });

        $mdIconProvider.icon('user', 'assets/images/user.svg', 64);
    });
