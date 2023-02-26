<h1 align="center" style="text-align: center;">rn-customize-avatar</h1>
<p align="center" style="font-size: 1.2rem;">
  <strong>Avatar</strong> is a customizable avatar builder for React Native, inspired by social media platforms like WhatsApp , Instagram and Snapchat. It allows you to create avatars with custom faces, hairstyles, accessories, beards, and colors.😎 Avatar  Builder uses the Dicebear and Skia libraries to generate unique avatars for each user.😍 <br /><br />
  <div styl="">
  <img src="https://i.giphy.com/media/opNKRZ8Q8S9mh2E3t0/giphy.webp" alt="Global Demo of RN-Avatar Component" display="block" max-width="100%" />
  <div>
</p>

<p align="center" style="font-size: 1.2rem;">
  <a href="https://npmjs.org/package/rn-customize-avatar" title="View this project on npm">
    <img src="http://img.shields.io/npm/v/rn-customize-avatar.svg?style=flat-square" alt="npm version" />
  </a>
  <a href="https://npmjs.org/package/rn-customize-avatar" title="View this project on npm">
    <img src="http://img.shields.io/npm/dm/rn-customize-avatar.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://npmjs.org/package/rn-customize-avatar" title="View this project on npm">
    <img src="http://img.shields.io/npm/l/rn-customize-avatar.svg?style=flat-square" alt="npm licence" />
  </a>
  <a href="https://www.paypal.com/donate?business=ZMAJTXD5HYWCQ&item_name=open-source+dev+flash+message&currency_code=USD" title="If this project help you reduce time to develop, you can give me a cup of coffee :)">
    <img src="https://img.shields.io/badge/Donate-PayPal-green.svg?style=flat-square" alt="help this project" />
  </a>
</p>

## Installation

Since the library is a JS-based solution, to install the latest version of `rn-customize-avatar`:

```bash
npm install --save rn-customize-avatar @shopifyreact-native-skia
```
## Alert

You have to install any one of them npm according to your need.

<p>
<strong> If you want to use Adventurer-neutral run </strong>
 <img src="https://api.dicebear.com/5.x/avataaars/png" display="block" alt="npm version" />
</p>
```bash
npm i @dicebear/adventurer-neutral 
```

```bash

If you want to use Avataaars run 

npm i @dicebear/avataaars

If you want to use BigEars run 

npm i @dicebear/bigEars 

If you want to use Lorelei run 

npm i @dicebear/lorelei

If you want to use Micah run

npm i @dicebear/micah 

Rest Coming Soon...
```
## Try it out

You can try out the [DiceBear website you will get the idea of this library](https://dicebear.com/) to get a tease of the functionalities in this lib.

## Basic Usage

The Basic use of Avataars container. That's Simple 😬
```jsx
import React from "react";
import { View } from "react-native";
import {Avataars} from 'rn-customize-avatar';

function App() {
  return (
    <View style={{flex : 1}}>
      <Avataars backgroundColor="grey" />
    </View>
  );
}
```
## License

[MIT](https://choosealicense.com/licenses/mit/)