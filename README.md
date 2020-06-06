# ReadHub React-Native
#VIDEO
https://youtu.be/6e-ajnzqy0Y

React-Native app for ReadHub / Redux project for the web course. UVG 2020

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

Things you need to install the software and how to install them

```
node.js
```
```
Clone or download this repository https://github.com/amado-developer/ReadHub-ReactNative.git
```
```
You need to have configurated an Android emulator
```
If you have problems with this you can see this documentation
https://reactnative.dev/docs/environment-setup

### Installing

A step by step series of examples that tell you how to get a development env running

Enter to de directory of the project

```
cd yourpath\ReadHub-ReactNative\ReadHub\
```

```
npm install
```
Install library for icons

```
yarn add react-native-elements
# or with npm
npm i react-native-elements --save
```

Link library
```
# yarn
yarn add react-native-vector-icons
# or with npm
npm i --save react-native-vector-icons

# link
react-native link react-native-vector-icons
```

Install extra library
```
npm install --save moment react-moment
```
# CASES
You have to change a configuration depending in which device you are going to run the app
### Emulator
No changes 
### Physical Device
Inside the folder
```
\ReadHub-ReactNative\ReadHub\Components\Config\index.js
```
You need to have  this variables
**You need to add your IP DIRECTION** 
export const API_BASE_URL = 'http://yourIp:8000/api/v1' 
export const HOST = 'http://yourIp:8000'

and commented the other ones

## Run App

```
npx react-native run-android
```


## Authors

* **Amado Garcia** -  - [amado-developer](https://github.com/amado-developer)
* **Sara Zavala** -  - [saritazavala](https://github.com/saritazavala)




## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details







