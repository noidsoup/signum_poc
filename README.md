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

Using Netlify offers the benefit of a [contentful Netlify plugin](https://www.contentful.com/developers/docs/extensibility/apps/netlify), allowing you to update the site on the contentful side by clicking a "build website" button on any of your published content types.

## Notes about the charts

Quote fuse liquidity doughnut chart: In the original app this chart had a "market" variable hardcoded as "SP500", and it used this variable to filter data received from the Quote_Fuse_Liquidity.csv by stock market index. We have also hardcoded this string in the "formQuoteFuseDoughnutData" function of main.js.

Quote Fuse line chart: In the original app this chart was not depending on an API call to receive its data. We have copied the hardcoded "dataChartQuoteFuseLine" object and are using it to populate the line chart.

## Notes about the Insight posts
There's no pagination function at the moment; the main Insight page and category pages will just grow as long as their content. That may need to be revisited in the future.

Currently, the "You might also like these insights" carousel at the end of a single Insight article page shows the 5 most recent posts (excluding the one you're on).

If you'd rather show insights only from the same category, replace this (in `themes/signum/layouts/insights/single.html`):
```
{{ range first 5 (where .Site.Pages "Type" "insights") }}
```
...with this:
```
{{ range first 5 (where (where .Site.Pages "Type" "insights")  "Params.category.id" "=" $currentInsightCategoryId) }}
```
