CloudFront
=======

Amazon CloudFront is a content delivery network (CDN) service that allows Lambda functions to be executed at edge locations.

Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content, such as .html, .css, .js, and image files, to your users. CloudFront delivers your content through a worldwide network of data centers called edge locations. When a user requests content that you're serving with CloudFront, the user is routed to the edge location that provides the lowest latency (time delay), so that content is delivered with the best possible performance.


Using the AWS network dramatically reduces the number of networks that your users' requests must pass through, which improves performance. Users get lower latency—the time it takes to load the first byte of the file—and higher data transfer rates.
You also get increased reliability and availability because copies of your files (also known as objects) are now held (or cached) in multiple edge locations around the world.

## Use cases
1. Accelerate static website content delivery
2. Serve video on demand or live streaming video
3. Encrypt specific fields throughout system processing(add a public key to CloudFront, and then specify the set of fields that you want to be encrypted with the key)
4. Customize at the edge

## Configure CloudFront 
1. Specify origin servers, like an Amazon S3 bucket or your own HTTP server, from which CloudFront gets your files which will then be distributed from CloudFront edge locations all over the world
2. Upload your files to origin servers. 
3. Create a CloudFront distribution, which tells CloudFront which origin servers to get your files from when users request the files through your web site or application
4. CloudFront assigns a domain name to your new distribution 
5. CloudFront sends your distribution's configuration (but not your content) to all of its edge locations

Transfer from aws origin to CloudFront Edge is free.

## Lambda@Edge
Lambda@Edge is an extension of AWS Lambda, a compute service that lets you execute functions that customize the content that CloudFront delivers. 
You can execute Lambda functions when the following CloudFront events occur:
- When CloudFront receives a request from a viewer (viewer request)
- Before CloudFront forwards a request to the origin (origin request)
- When CloudFront receives a response from the origin (origin response)
- Before CloudFront returns the response to the viewer (viewer response)
 
### Use cases
- CloudFront can return different objects to viewers based on the device they're using by checking the User-Agent header, which includes information about the devices.
- Or you could check cookies for other criteria.(if you use cookies to indicate which color a user chose for a jacket) 
- A Lambda function can generate HTTP responses when CloudFront viewer request or origin request events occur.
- A function can inspect headers or authorization tokens, and insert a header to control access to your content before CloudFront forwards the request to your origin.
- A Lambda function can also make network calls to external resources to confirm user credentials, or fetch additional content to customize a response.