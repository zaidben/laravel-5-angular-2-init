<html>
<head>
    <base href="/">
    <title>Angular 2 TypeScript Gulp QuickStart</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- stylesheets -->
    <link rel="stylesheet" href="admin/build/assets/css/style.css">
    <!-- // stylesheets -->

    <!-- 1. Load libraries -->
    <!-- Polyfill(s) for older browsers -->
    <script src="admin/build/lib/core-js/client/shim.min.js"></script>

    <script src="admin/build/lib/zone.js/dist/zone.js"></script>
    <script src="admin/build/lib/reflect-metadata/Reflect.js"></script>
    <script src="admin/build/lib/systemjs/dist/system.src.js"></script>

    <!-- 2. Configure SystemJS -->
    <script src="admin/build/systemjs.config.js"></script>
    <script>
        System.import('app').then(null, console.error.bind(console));
    </script>

</head>

<!-- 3. Display the application -->
<body>
<app><p class="text-center">loading..</p></app>

</body>

</html>
