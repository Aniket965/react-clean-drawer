# react-clean-drawer
> Simple and clean Drawer Component for React.js
> [NPM](https://www.npmjs.com/package/react-clean-drawer)
### Installing

```sh
npm install --save react-clean-drawer
```

### Usage

```js
// Import css and Drawer Component
import Drawer from 'react-clean-drawer'
import 'react-clean-drawer/lib/react-clean-drawer.css'
```

> Example Usage.
```js
import React, { Component } from 'react'

import Drawer from 'react-clean-drawer'
import 'react-clean-drawer/lib/react-clean-drawer.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={open:null}
  }
  render() {
    return (
      <div className="App">
          <button onClick={()=>this.setState({open:!this.state.open})}>Toggle</button>
        <Drawer open={this.state.open} ></Drawer>
      </div>
    );
  }
}

export default App;

```

### Development

```sh
git clone https://github.com/Aniket965/react-clean-drawer.git
cd react-clean-drawer
```
>Install Dependices

```sh
yarn
```
> Build

```sh
yarn build
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **aniket965** - *Initial work* - [aniket965](https://github.com/aniket965)

See also the list of [contributors](https://github.com/aniket965/react-clean-drawer/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
