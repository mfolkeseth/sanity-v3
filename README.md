# sanity-v3

Trying to set up expected `basePath` to work across Sanity v3 instance.

## Setup 

1. 
```bash
cd sanitypathtest
```

2. 
```bash
npm i
```

3. 
```bash
npm run build
```

4. Host some kind of independent http server which has `/dist` as root. I have used `http-server dist` for this test.

5. Open independent http server in browser

6. Experience unexpected static path

<img width="644" alt="image" src="https://user-images.githubusercontent.com/7047431/224268816-12093d96-cf6a-43ed-b849-e694f31204f3.png">


