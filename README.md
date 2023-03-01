<h1 align="center" style="text-align: center;">rn-customize-avatar</h1>
<p align="center" style="font-size: 1.2rem;">
  <strong>rn-customize-avatar</strong> is a customizable avatar builder for React Native, inspired by social media platforms like WhatsApp , Instagram and Snapchat. It allows you to create avatars with custom faces, hairstyles, accessories, beards, and colors.😎 Avatar Builder uses the Dicebear and Skia libraries to generate unique avatars for each user.😍 <br /><br />
  <img src="https://i.giphy.com/media/opNKRZ8Q8S9mh2E3t0/giphy.webp" alt="Global Demo of RN-Avatar Component" display="block" max-width="100%" />
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
  <a href="https://www.buymeacoffee.com/vishumadaaQ" title="If this project help you reduce time to develop, you can give me a cup of coffee :)">
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

<div>
<strong  style="color: #00FF00">Avataaars</strong><br> </br>
 <img width="100px" height="100px" src="https://api.dicebear.com/5.x/avataaars/png" display="block" />
</div>

```bash

npm i @dicebear/avataaars 

```

<div>
<strong style="color: brown">Adventurer Neutral</strong><br> </br>
 <img width="100px" height="100px" src="https://api.dicebear.com/5.x/adventurer-neutral/png" display="block" />
</div>

```bash

npm i @dicebear/adventurer-neutral 

```

<div>
  <strong style="color: orange">BigEars</strong> <br> </br>
 <img width="100px" height="100px" src="https://api.dicebear.com/5.x/big-ears/png" display="block" />
</div>

```bash

npm i @dicebear/bigEars 

```

<div>
<strong style="color: white">Lorelei</strong>
 <br> </br>
 <img width="100px" height="100px" src="https://api.dicebear.com/5.x/lorelei/png" display="block" />
</div>

```bash

npm i @dicebear/lorelei 

```
<div>
<strong style="color: Yellow">Micah</strong> 
<br> </br>
 <img width="100px" height="100px" src="https://api.dicebear.com/5.x/micah/png" display="block" />
</div>

```bash

npm i @dicebear/micah 

```

## Rest Avatar Coming Soon... ♥️


## Try it out

You can try out the [DiceBear](https://dicebear.com/) website to get a tease of the functionalities in this lib.

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

## Common Props in all Avatars

| Property               | Default                  | Optional | Description                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------- | ------------------------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| backgroundColor            | `red`                   | Yes               | Use to Change the Color of Avatar Background Container                                                                                                                                                                                                                                                                                                                                                                                      |
| svgWidth                | `280`                   | Yes               | `svgWidth` increase the width of Avatar                                                                                                                                                                                                                                                                                                                                                                                               |
| svgHeight            | `280`                   | Yes               | `svgHeight` increase the height of  Avatar                                                                                                                                                                                                                                                                                                                                                                                           |
| defaultAvatar               | `CustomAvatar`                   | Yes               | If you want to change the look to default avatar use can use this props                                                                                                                                                                                                                                                                                                                                                                         |
| listBgColor      | `grey`                    | Yes               | `listBgColor` Change the background color of list                                                                                                                                                                                                                                                                                                                                                                                                                |
| cancelBtnStyle               | `Style`                   | Yes               | Change the style of cancel Button `cancelBtnStyle` time                                                                                                                                                                                                                                                                                                                                                                 |
| doneBtnStyle               | `Style`                   | Yes               | `doneBtnStyle` Change the style of done Button                                                                                                                                                                                                                                                                                                                                                        |
| chipStyle          | `Style`                  | Yes               | Use to Change the container Style of slider option item`chipStyle`                                                                                                                                                                                                                                                                                                   |
| chipText        | `TextStyle`                   | Yes               | Use this to change the style of text inside option chip container                                                                                                                                                                                                                                                                                                                                        |
| onDone               | `(base64) => {}`                  | Yes               | The `onDone` _prop is a callback it is used to get the final avatar in the form of base64                                                                                                                                                                                                                                                                                                                                       |
| onCancel               | `() => {}`                    | Yes               | The `onCancel` is a callback use to cancel go back                                                                                                                                                                                                                                            
| flatListProps              | `FlatListStyle`                   | Yes               | Apply a custom style object in Flatlist                                                                                                                                                                                                                                        

## Avataaars

These are some props that are related to Avataaars

|               `Props`                    |                 `Usage`                     |
| ---------------------------------------- | --------------------------------------------|
| `skinTonColorList`                       | Add custom colors in the `skinTonColorList` |
| `hairColorList`                          | Add custom colors in the `hairColorList`    |
| `backgroundColorList`                    | Add custom colors in the `backgroundColorList`    |
| `accessoriesColorList`                   | Add custom colors in the `accessoriesColorList`    |
| `facialHairColorList`                    | Add custom colors in the `facialHairColorList`    |
| `hatColorList`                           | Add custom colors in the `hatColorList`    |
| `clothColorList`                         | Add custom colors in the `clothColorList`    |

# Example 

color should be add without `#` otherwise it's not visible in the list

```jsx
import React from "react";
import { View } from "react-native";
import {Avataars} from 'rn-customize-avatar';

function App() {
  return (
    <View style={{flex : 1}}>
      <Avataars backgroundColor="grey" hairColorList={["433333", "000000"]} />
    </View>
  );
}
```

## Adventurer Neutral 

These are some props that are related to Adventurer Neutral 

|               `Props`                    |                 `Usage`                     |
| ---------------------------------------- | --------------------------------------------|
| `backgroundColorList`                       | Add custom colors in the `backgroundColorList` |

# Example 

color should be add without `#` otherwise it's not visible in the list

```jsx
import React from "react";
import { View } from "react-native";
import {AdventureNeutral} from 'rn-customize-avatar';

function App() {
  return (
    <View style={{flex : 1}}>
      <AdventureNeutral backgroundColor="grey" backgroundColorList={["433333", "000000"]} />
    </View>
  );
}

```

## Rest of the Avatars have a similar props used to pass the custom colors in the list (If you find any issue in it please comment)


## Coming to Advance Options 

If you want to make your own screen with different ui you can. 😎

Suppose you have to change the UI of Avataars Component. You can export the following functions to get the SVG's

These are some functions that are related to `Avataar` 

|               `Functions`                    |                 `Usage`                 |
| ---------------------------------------- | --------------------------------------------|
| `createOwnAvatar`                        | `return the SkSVG `, by props you can change the style of avatar                                     |
| `getListOfOptions`                       | `return the Array<string>` list of category  |
| `getSkinTon`                             | `return Array<string>` list of default colors   |
| `getMouthSvg`                            | `return Array<Item>` Item is basically object includes SkSVG and value use to get the list of SVG's and value
| `getEyesSvg`                              | `return Array<Item>` Item is basically object includes SkSVG and value use to get the list of eyes 
| `getClothingSvg`                          | `return Array<Item>` Item is basically object includes SkSVG and value use to get the list of clothes 
| `getClothingGraphicsSvg`                  | `return Array<Item>` Item is basically object includes SkSVG and value use to get the list of clothing graphics
| `getAccessoriesSvg`                       | `return Array<Item>` Item is basically object includes SkSVG and value use to get the list of accessories
| `etc.`                       |`Please check other props it's same as following pros with same return type just return different SVG's according with there name.♥️ `


These are some functions that are related to `BigEars` 

|               `Functions`                    |                 `Usage`                 |
| ---------------------------------------- | --------------------------------------------|
| `createOwnAvatar`                        | `return the SkSVG `, by props you can change the style of BigEars                                     |
| `getListOfOptions`                       | `return the Array<string>` list of category  |
| `getSkinTon`                             | `return Array<string>` list of default colors   |
| `getMouthSvg`                            | `return Array<Item>` Item is basically object includes SkSVG and value use to get the list of SVG's and value
| `getEyesSvg`                              | `return Array<Item>` Item is basically object includes SkSVG and value use to get the list of eyes 
| `getEarsSvg`                          | `return Array<Item>` Item is basically object includes SkSVG and value use to get the list of ears 
| `getFaceSvg`                  | `return Array<Item>` Item is basically object includes SkSVG and value use to get the list of faces graphics
| `getSideBurnSvg`                       | `return Array<Item>` Item is basically object includes SkSVG and value use to get the list of side Burn 
| `etc.`                       |`Please check other props it's same as following pros with same return type just return different SVG's according with there name.♥️ `

## Rest of the avatar's have a similar type of function you can check in the codebase. If you are facing any issue please contact me in my email mention in the contact section. ✌️


## IMPORTANT
What is the use case of SKSVG ?

SkSVG is like a svg basically generated by `Skia`. To render the SKSVG you can use the following component.
I have create a custom component by this you can render SkSVG.

## Example 

```jsx
import React from "react";
import { View } from "react-native";
import {SkSvgView} from 'rn-customize-avatar';

function App() {
  return (
    <View style={{flex : 1}}>
      <SkSvgView  svg={createOwnAvatar({})}>
    </View>
  );
}

```

## 

## License

[MIT](https://choosealicense.com/licenses/mit/)