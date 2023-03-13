# sanity-v3

Trying to set up expected `basePath` to work across Sanity v3 instance.

## Setup

1.

```bash
cd sanitypathtest
```

2.

```bash
npm ci
```

3.

```bash
npm run build:docker
```

4.

```bash
npm run start:docker
```

5. open http://localhost:3333/mynamespace/desk/

I don't have access to the project/dataset, but after logging in I get the following results in my network tab

<img width="540" alt="image" src="https://user-images.githubusercontent.com/1043634/224470987-2540872f-f5cd-42bd-b6ec-94633ab1fe56.png">

This is due to the fact that all favicons are referenced to a `/static` basepath - which is not available when the app is running behind a reverse proxy (ie. the frontend doesn't have access to files hosted on `/static/` - only `/mynamespace`

<img width="622" alt="image" src="https://user-images.githubusercontent.com/1043634/224471043-75bf4e7b-7976-41dc-b0ad-f8483a99104f.png">

The app itself on the other hand (.js) is available on the path - as instructed to vite

<img width="527" alt="image" src="https://user-images.githubusercontent.com/1043634/224471067-7afe027c-1494-4b49-8f3b-1aa4f1594e86.png">

If we change the cli config either as such

```js
  project: {
    basePath: '/mynamespace',
  },
```

or

```js
  project: {
    basePath: '/mynamespace',
  },
  vite: (prevConfig) => {
    return {
      ...prevConfig,
      build: {
        ...prevConfig.build,
        assetsDir: 'mynamespace',
      },
    };
  },
```

the hosting errors are reversed: the favicons will be hosted from `/mynamespace` - but the script file is hosted from `/static`

```js

```
