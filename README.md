swd-layouts is a [NodeCG](http://github.com/nodecg/nodecg) bundle.
It works with NodeCG versions which satisfy this [semver](https://docs.npmjs.com/getting-started/semantic-versioning) range: `~0.8.0`
You will need to have an appropriate version of NodeCG installed to use it.

## Installation
_If you already have NodeCG installed, skip to step #3._

1. Install [Node.js & npm](https://nodejs.org/en/).

2. Open a command prompt and run the following commands to install NodeCG.
Keep this command prompt open after NodeCG has been installed.
	```sh
	npm install -g bower
	npm install -g nodecg-cli
	mkdir nodecg
	cd nodecg
	nodecg setup
	```

3. Install swd-layouts.
	```sh
	nodecg install w1nterl0ng/swd-layouts
	```

4. Start NodeCG.
	```sh
	nodecg start
	```

### Usage
- Add [`http://localhost:9090/graphics/swd-layouts`](http://localhost:9090/graphics/swd-layouts)
(or whatever your NodeCG hostname and port are) as a Browser Source in OBS, with dimensions of 1280x760
- Use the dashboard ([`http://localhost:9090/dashboard`](http://localhost:9090/dashboard)) to set the manage the clock and player information.

### Additional Credits
- README.md and other inspiration from [Alex "Lange" Van Camp](https://github.com/lange)

### License
swd-layouts is provided under the MIT license, which is available to read in the [LICENSE][] file.
[license]: LICENSE
