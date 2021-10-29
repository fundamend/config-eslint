# config-eslint

_config-eslint_ is a configuration preset for [ESLint] used by the [fundamend.dev] ecosystem.

## Installation

Use your favorite Node.js package manager, for example [npm], like so:

    npm install --save-dev @fundamend/config-eslint

... or [yarn], like so:

    yarn add --dev @fundamend/config-eslint

## Usage

In your [.eslintrc.js], import _config-eslint_ and spread it into the exported object, like so:

```js
const config = require('@fundamend/config-eslint');

module.exports = {
	...config
};
```

You can extend the imported preset by adding additional [configuration options] to the exported configuration object, for example like this:

```js
const config = require('@fundamend/config-eslint');

module.exports = {
	...config,
	rules: {
		'no-console': 1
	}
};
```

Settings that already exist in the configuration preset will be overwritten.

## License

[MIT]

[configuration options]: https://eslint.org/docs/user-guide/configuring
[eslint]: https://eslint.org
[.eslintrc.js]: https://eslint.org/docs/user-guide/configuring#configuration-file-formats
[fundamend.dev]: https://fundamend.dev
[mit]: https://choosealicense.com/licenses/mit/
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
