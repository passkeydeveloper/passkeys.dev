# passkeys.dev

## Development

The following dependencies are required to work on passkeys.dev locally:

- [Golang 1.23.x](https://go.dev/dl/)
- [Hugo v0.140.x](https://gohugo.io/installation/)
- [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2#install) (installed globally)

Once these are installed, enable pre-commit linting:

1. In the project folder, run `git config core.hooksPath .git-hooks`
2. Make the hook executable: `chmod a+x .git-hooks/pre-commit`

Then run `hugo server` to start the dev server!

The site will be available locally at http://localhost:1313.
