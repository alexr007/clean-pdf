### Fetching
```bash
$ git clone https://github.com/alexr007/clean-pdf.git
```

### Installing NodeJS
```bash
$ sudo apt install nodejs
```

### Installing missing libraries
```bash
$ sudo apt install libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 libnss3
```

### Building, running application
```bash
$ cd clean-pdf/
$ npm install
$ npm start
```

### Checking whether it works
```bash
$ curl http://localhost:3000
```
> Hi
```bash
$ curl http://localhost:3000/inv/10
```
> 1.814s

**file_10.pdf** should be generated in application root folder 
```bash
$ ls -la *.pdf
```
> file_10.pdf

how to download this file:
```bash
$ curl -OJ http://localhost:3000/pdf/10
```
**file_10.pdf** should be downloaded to your local folder

