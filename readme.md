[//]: # (header-start)


<h1 align="center">
	<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
		Axway Amplify End-of-Life Announcement
	</a>	
</h1>
<h2 align="center">
	👇 &nbsp; See API FAQ below  &nbsp; 👇
</h2>	


<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		<img src="https://cdn.secure-api.org/images/RIP-Axway-Amplify-Titanium.png" alt="RIP Axway Amplify Titanium (2010 - 2022)" width="80%" />
	</p>
</a>	
<p align="center">
	<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
			🪦 &nbsp; RIP Axway Amplify Titanium (2010 - 2022)
	</a>
</p>
<p align="center">
	<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
			🪦 &nbsp; RIP Axway Amplify Cloud Services (2012 - 2022)
	</a>
</p>

<hr>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<h4 align="center">
🛑 &nbsp;&nbsp; All products affected by the announcements will not be supported by Axway effective their EOL dates in 2022.
</h4>

<h4 align="center">
Some Open-Source versions of Axway products will live on after End-of-Life (EOL) Axway Amplify product announcements.  However, some products are closed-source and will NOT continue after the shut down in 2022.  
	</h4>
</a>
<p>&nbsp;</p>

> 👉 &nbsp;&nbsp; Stay tuned for more info as plans are being made to save the Titanium project and move it under the control of a independent group of developers.

<p>&nbsp;</p>
<hr>

## API FAQ:

* [API Best Practices](https://brenton.house)
* [What is API Security?](https://brenton.house/what-is-api-security-5ca8117d4911)
* [Top API Trends for 2022](https://brenton.house/top-10-api-integration-trends-for-2022-49b05f2ef299)
* [What is a Frankenstein API?](https://brenton.house/what-is-a-frankenstein-api-4d6e59fca6)
* [What is a Zombie API?](https://brenton.house/what-is-a-zombie-api-6e5427c39b6a)
* [API Developer Experience](https://brenton.house/keys-to-winning-with-an-awesome-api-developer-experience-62dd2fa668f4)
* [API Cybersecurity 101](https://brenton.house/what-is-api-security-5ca8117d4911)
* [YouTube API Videos](https://youtube.com/brentonhouse)
* [YouTube API Shorts Videos](https://youtube.com/apishorts)



<p>&nbsp;</p>
<hr>

<p>&nbsp;</p>
<p>&nbsp;</p>

[//]: # (header-end)


# @titanium/polyfill

[![@titanium/polyfill](https://img.shields.io/npm/v/@titanium/polyfill.png)](https://www.npmjs.com/package/@titanium/polyfill)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=brentonhouse/titanium-polyfill)](https://dependabot.com)


> Titanium native mobile polyfills for some Node.js core and global modules

## 📝 Description

For use with requesting data on the internet with Titanium Native mobile apps

## ✨ Features

### Polyfills added by Titanium Core

* [X] Polyfill for Node.js `assert`
* [X] Polyfill for Node.js `events`
* [X] Polyfill for Node.js `fs`
* [X] Polyfill for Node.js `os`
* [X] Polyfill for Node.js `process`
* [X] Polyfill for Node.js `string_decoder`
* [X] Polyfill for Node.js `tty`
* [X] Polyfill for Node.js `util`


### Polyfills added by Titanium Core (but having compatibility issues)

* [X] Polyfill for Node.js `buffer`  **- Does not work with packages expecting Node.js buffer**
* [X] Polyfill for Node.js `path`  **- Some functions not working**


### Polyfills added by @titanium/polyfill package


* [X] Polyfill for Node.js `events` - Uses eventemitter2 for extra features
* [X] Polyfill for Node.js `buffer`
* [X] Polyfill for Node.js `querystring`
* [X] Polyfill for Node.js `crypto`
* [ ] Polyfill for Node.js `http`
* [ ] Polyfill for Node.js `https`
* [X] Polyfill for Node.js `punycode`
* [X] Polyfill for Node.js `URL` [whatwg-url v8.4.0]
* [X] Polyfill for Node.js `path`

## 🚀 Getting Started

### Installing

> Please ensure there is a package.json file in the target directory.  If there is not one present, you can create one with `npm init`.


If you wish to install this in an app using Titanium Turbo, you can execute this in the project root directory:

```bash
npm install @titanium/polyfill
```

### Usage

```javascript
const buffer = require('assert');
const buffer = require('buffer');
const crypto = require('crypto');
const events = require('events');
const querystring = require('querystring');
const path = require('path');
const path = require('punycode');

require('URL');  // This is a global variable in Node.js
```


## 🔗 Related Links

⭐  [Titanium Turbo](https://www.npmjs.com/package/@titanium/turbo) - Variation of **`Titanium Alloy`** that adds some enhancements and customizations for rapid development.
⭐  [Geek Mobile Toolkit](https://www.npmjs.com/package/@geek/mobile) - Toolkit for creating, building, and managing mobile app projects.   
⭐  [Titanium Turbo Template (Default)](https://www.npmjs.com/package/@titanium/template-turbo-default) - Template for default Turbo app.  Based on the basic Alloy Template + some extra goodies.   
⭐  [Titanium Turbo Template (Next)](https://www.npmjs.com/package/@titanium/template-turbo-next) - Template for Turbo app (with extras).  Based on the default Turbo Template + some extras.   
⭐  [Titanium Turbo Template (Fully Loaded)](https://www.npmjs.com/package/@titanium/template-turbo-fully-loaded) - Template for Turbo app (with all the bells and whistles).  Based on the Turbo Template (Next) + some extras.   
⭐  [Titanium Alloy Template (Basic)](https://www.npmjs.com/package/@titanium/template-alloy-basic) - Basic Alloy app.  What you get when creating new app project with Titanium CLI.
⭐  [Titanium Mobile](https://www.npmjs.com/package/titanium) - Open-source tool for building powerful, cross-platform native apps with JavaScript.   
⭐  [Alloy](https://www.npmjs.com/package/alloy) - MVC framework built on top of Titanium Mobile.   
⭐  [Appcelerator](https://www.npmjs.com/package/appcelerator) - Installer for the Appcelerator Platform tool   

## 📚Learn More

⭐  [Axway Developer Blog](https://devblog.axway.com)   
⭐  [Axway Developer YouTube Channel](https://youtube.com/axwaydev)   
⭐  [Axway Developer Portal](https://developer.axway.com)   

## 📣 Feedback

Have an idea or a comment?  [Join in the conversation here](https://github.com/brentonhouse/titanium-polyfill/issues)! 
