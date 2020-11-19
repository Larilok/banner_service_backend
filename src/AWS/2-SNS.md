SNS
===================
The fundamental idea of a publish/subscribe system is to allow communication between systems that are not directly connected by having one side publish messages to a shared location, called a "topic" in SNS, and having the other side subscribe to the messages from this location.

To publish a message to an SNS topic, a message producer must use the SNS HTTP API. Once the message is published, all subscribers receive a copy of the message over the channel through which they established their subscription.

SNS provides an HTTP API over which messages can be published to an SNS topic.

When a message published to a topic 

- HTTP(S) endpoints using webhooks
- email
- Amazon SQS
- AWS Lambda
- SMS
- Application(
  - Amazon Device Messaging (ADM) for Amazon devices
  - Apple Push Notification Service (APNs) for both iOS/iPadOS/tvOS/watchOS and macOS devices
  - Baidu Cloud Push (Baidu): multi-platform
  - Firebase Cloud Messaging (FCM): Android, iOS, web, and desktop
  - Microsoft Push Notification Service for Windows Phone (MPNS)
  - Windows Push Notification Services (WNS): Universal Windows Platform applications)

## Pros
- Scalability(any number of publishers, subscribers and messages)
- Ease of setup( setting it up requires zero infrastructure work)
- Multiple notification formats supported

## Cons

- High cost at scale(you pay for exactly what you use)
- Not much control over performance

## What is used for

- Sending events to clients via push notification services
- Sending events between system elements that don’t require exactly-once processing 
- One-to-many notifications
- Sending transactional email or SMS notifications