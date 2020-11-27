CORS
==========

Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any other origins (domain, scheme, or port) than its own from which a browser should permit loading of resources


## Why?
The web pages you visit make frequent requests to load assets like images, fonts, and more, from many different places across the Internet. If these requests for assets go unchecked, the security of your browser may be at risk.

As a result, many modern browsers follow security policies to mitigate such risks.

## Security policy

When you use a web browser, you are likely attempting to access a distinct website. Security policies on servers mitigate the risks associated with requesting assets hosted on different server.

## Same origin

Let’s take a look at an example of a security policy: same-origin. The same-origin policy enforces that documents that interact with each other have the same origin.
Origin: the protocol, host, and port number

URL1: http://www.example.com/foo-bar.html

If you used a web browser to navigate from URL1 to http://www.example.com/hello-world.html, you would be allowed to do so because the protocol (HTTP), host (example.com), and port (80) of each URL match one another

Navigating to https://www.en.example.com/hello.html from URL1, however, would not be allowed because of the different protocol (HTTPS) and host (en.example.com).

Thankfully, there are security policies that strike a mix of both, like cross-origin, which has evolved into the cross-origin resource sharing standard, often abbreviated as CORS.

## CORS

Unlike same-origin, navigating to https://www.ejemplo.com/hola.html from URL1 could be allowed with CORS.

## Why is CORS necessary?

It specifies WHO and HOW can access the assets.

Cross-origin requests are made using the standard HTTP request methods.

Cross-origin requests are made using the standard HTTP request methods. Most servers will allow GET requests, meaning they will allow resources from external origins (say, a web page) to read their assets. HTTP requests methods like PATCH, PUT, or DELETE, however, may be denied to prevent malicious behavior. For many servers, this is intentional. For example, it is likely that server A does not want servers B, C, or D to edit or delete its assets.

With CORS, a server can specify who can access its assets and which HTTP request methods are allowed from external resources.

## How does CORS manage requests from external resources?

Through an HTTP header.
The following are the new HTTP headers added by the CORS standard:

- Access-Control-Allow-Origin
- Access-Control-Allow-Credentials
- Access-Control-Allow-Headers
- Access-Control-Allow-Methods
- Access-Control-Expose-Headers
- Access-Control-Max-Age
- Access-Control-Request-Headers
- Access-Control-Request-Method
- Origin

## Pre-flight Requests
When a request is made using any of the following HTTP request methods, a standard preflight request will be made before the original request.
- PUT
- DELETE
- CONNECT
- OPTIONS
- TRACE
- PATCH

## What requests use CORS?

- Invocations of the XMLHttpRequest or Fetch APIs, as discussed above.
- Web Fonts (for cross-domain font usage in @font-face within CSS), so that servers can deploy TrueType fonts that can only be cross-site loaded and used by web sites that are permitted to do so.
- WebGL textures.
- Images/video frames drawn to a canvas using drawImage().
- CSS Shapes from images.
