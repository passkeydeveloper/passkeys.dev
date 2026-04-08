# passkeys.dev

## Development

The following dependencies are required to work on passkeys.dev locally:

- [Golang 1.23.x](https://go.dev/dl/)
- [Hugo Extended v0.158.x](https://gohugo.io/installation/)
- [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2#install) (installed globally)
- [Dart Sass](https://github.com/sass/dart-sass?tab=readme-ov-file#using-dart-sass  )

Once these are installed, enable pre-commit linting:

1. In the project folder, run `git config core.hooksPath .git-hooks`
2. Make the hook executable: `chmod a+x .git-hooks/pre-commit`

Then run `hugo server` to start the dev server!

The site will be available locally at http://localhost:1313.

## Managing Hugo

It is recommended to use [Hugo Version Manager](https://github.com/jmooring/hvm) to ensure you're running the same version of Hugo as the server-side build process.

Installation and setup instructions here: https://github.com/jmooring/hvm

HVM will automatically pull the correct version from `.hvm`.

You can also use a more general tool like [mise](https://mise.jdx.dev/).
