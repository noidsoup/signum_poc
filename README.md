# Getting Started

## Install Hugo
The Signum website is built with Hugo, so before you do anything you'll want to [install it](https://gohugo.io/getting-started/installing/). You'll need the Extended version, since we're using SASS.

Building a local environment also requires [node](https://nodejs.org/en/download/).

## Make a .env file

You will need your contentful space ID and API token. This information is available in the Settings page of your contentful space, under the link titled "API Keys".

Make a new file at the root of your project and title it ".env"
Enter the following information into the file:

```
CONTENTFUL_SPACE = {Your Contentful space ID}
CONTENTFUL_TOKEN = {Your Contentful API token}
```

## Install dependencies and run

```
npm i
```
```
npm start
```

## Updating content

This project relies on the [contentful-hugo](https://www.npmjs.com/package/contentful-hugo) npm plugin. Running "npm start" will launch a script that pulls the latest data from contentful into your top level "content folder" as markdown files.

The "contentful-settings.yaml" file controls what content to pull from your contentful account.

## Hosting content

Netlify offers an easy process to host hugo sites. Extensive documentation can be found [here](https://gohugo.io/hosting-and-deployment/hosting-on-netlify/)

Using Netlify offers the benefit of a contentful Netlify plugin, allowing you to update the site on the contentful side by clicking a "build website" on any of your published content types.

