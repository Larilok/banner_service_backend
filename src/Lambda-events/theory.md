Lambda function
===
## Context
Context methods
- getRemainingTimeInMillis() – Returns the number of milliseconds left before the execution times out.

Context properties

- functionName – The name of the Lambda function.

- functionVersion – The version of the function.

- invokedFunctionArn – The Amazon Resource Name (ARN) that's used to invoke the function. Indicates if the invoker specified a version number or alias.

- memoryLimitInMB – The amount of memory that's allocated for the function.

- awsRequestId – The identifier of the invocation request.

- logGroupName – The log group for the function.

- logStreamName – The log stream for the function instance.

- identity – (mobile apps) Information about the Amazon Cognito identity that authorized the request.

  - cognitoIdentityId – The authenticated Amazon Cognito identity.

  - cognitoIdentityPoolId – The Amazon Cognito identity pool that authorized the invocation.

- clientContext – (mobile apps) Client context that's provided to Lambda by the client application.

  - client.installation_id

  - client.app_title

  - client.app_version_name

  - client.app_version_code

  - client.app_package_name

  - env.platform_version

  - env.platform

  - env.make

  - env.model

  - env.locale

  - Custom – Custom values that are set by the mobile application.

- callbackWaitsForEmptyEventLoop – Set to false to send the response right away when the callback runs, instead of waiting for the Node.js event loop to be empty. If this is false, any outstanding events continue to run during the next invocation.
## Event
The data will depend on the event source connected to your Lambda function.
https://docs.aws.amazon.com/lambda/latest/dg/lambda-services.html#eventsources-sns

## Callback
For non-async handlers, function execution continues until the event loop is empty or the function times out. The response isn't sent to the invoker until all event loop tasks are finished. If the function times out, an error is returned instead.
```
const AWS = require('aws-sdk')
const s3 = new AWS.S3()

exports.handler = function(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false
  s3.listBuckets(null, callback)
  setTimeout(function () {
    console.log('Timeout complete.')
  }, 5000)
}
```
```
const callback = function(err, result) {
  if (err)
    console.log(err);
  if (result)
    console.log(result);
  // Terminate execution once done
  process.exit(0);
}
```