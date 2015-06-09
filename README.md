# Elemental Layout

Elemental Layout is an experimental layout engine for Ember.js apps. It surfaces
`flexbox` for components.

![Preview](preview.png)

## Usage

You can make use of Layout with the provided `el-layout` component:

```handlebars
{{#el-layout elLayout='horizontal' elAlign='center'}}
  <div>Some content</div>
{{/el-layout}}
```

Or import the available Mixins:

```js
// app/components/my-component.js
import Ember from 'ember';
import Layout from 'elemental-layout/mixins/layout';

export default Ember.Component.extend(
  Layout, {

  someProp: 'beep boop'
});
```

```handlebars
{{#my-component elLayout='vertical' elFit=true}}
  <div>Some content</div>
{{/my-component}}
```

### Ember 2.0

Once angle bracket components are available things will look much cleaner:

```html
<el-layout layout='horizontal' align='center'>
  <div>Some content</div>
</el-layout>
```

```html
<my-component layout='vertical' fit>
  <div>Some content</div>
</my-component>
```

> With angle bracket components we can use the currently reserved property
`layout` as well as attributes without values (e.g. `fit`).

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
