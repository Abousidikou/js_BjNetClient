# ndt_server
This is javascript client for Background Network Testing.
This execute script at page loading and lauch test on https://monitor.uac.bj:4444

# Deployment on web site

## Prepare the runtime environment
In your root of your website, create assets/js 

```bash
cd "root path of your website"
sudo mkdir -p assets/js
```

## Clone repository
```bash
git clone https://github.com/Abousidikou/ndt_server.git && cd ndt_server
```
## Copy BNM files from ndt_server to assets/js
```bash
sudo cp ./BNM* "root path of your website"/assets/js
```

## Import script in your index file
```bash
<script type="module" src="assets/js/BNM-SpeedTest.js"></script>
```


