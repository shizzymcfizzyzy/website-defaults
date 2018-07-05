# Website defaults

Default resources for eyeo websites.

## How to use website-defaults

### In [eyeo/cms](https://gitlab.com/eyeo/websites/cms) websites

All website-default resources can be used as-if they were local resources in any [eyeo/cms](https://gitlab.com/eyeo/websites/cms) generated website by configuring `additional-paths` inside `settings.ini`.

1. Install website-defaults as a dependency

`npm i --save gitlab:eyeo/websites/website-defaults`

2. Add website-defaults dependency to `settings.ini` `additional-paths` list

```
[paths]
additional-paths =
  node_modules/website-defaults
```

### In any website

One may also choose to include the SCSS resources in `website-defaults/static/scss` into any other website build proceedure.

## Why to use website-defaults

website-defaults provides shared resources for eyeo websites.

Shared resources enable eyeo website developers to develop and maintain one copy of commonly used resources and components instead of several.

Shared resources also enable eyeo website developers to build new websites faster when they use and / or remix previously established UI patterns.

## Why not use another framework / library?

1. Because they overkill eyeo websites
1. Because we want to avoid specializing

We are not against using another framework / library when it's appropriate.

## License

- CSS Reset (scss/_reset.scss) based on [Eric Meyer's CSS Reset](http://meyerweb.com/eric/tools/css/reset/): Public Domain
- Form styles (scss/forms) based on normalize.css: [MIT License](https://github.com/necolas/normalize.css/blob/master/LICENSE.md) by Nicolas Gallagher and Jonathan Neal
