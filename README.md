# Google Analytics
<img width="60%" src="https://cosmic-s3.imgix.net/f37543a0-4d49-11e8-86d8-d7fbaaaa60e5-geo.PNG" />

Add the Google Analytics View ID for your wesite in your [Cosmic JS](https://cosmicjs.com) Bucket.  [Read the blog article](https://cosmicjs.com/blog/building-and-publishing-a-cosmic-js-extension-using-bitbucket-pipelines) to learn how it was built.
### Getting Started
```
git clone https://github.com/WaqasArshad777/google-analytics-app.git
cd google-analytics-app
npm install
npm run start
```
http://localhost:3000?bucket_slug=your-bucket-slug&read_key=bucket-read-key&write_key=bucket-write-key.

### Installing the Extension
To add this Extension to your Bucket simply install it from Your Bucket > Extensions > Browse Extensions and find this Extension.

Or you can upload the build as a zip file to your Bucket:
1. Zip the extension folder in the project.
2. Go to Your Bucket > Extensions > Upload Extension and drop the zip file
## Documentation
To build your own Cosmic JS Extension, [read the Cosmic JS Extensions documentation](https://cosmicjs.com/docs/extensions).
