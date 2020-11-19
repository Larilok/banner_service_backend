EventBridge
===========
A serverless event bus service for AWS services, Software-as-a-Service (SaaS) applications and custom applications without writing code.

Amazon EventBridge simplifies the building and management of event-driven applications by taking care of event ingestion and delivery, security, authorization, and error-handling for you. You can choose an event source on the Amazon EventBridge console, and select a target from a number of AWS services. Events are changes in resources, such the status of a customer support ticket being updated, or a change of state of an EC2 instance.

## Event bus

An event bus receives events. When you create a rule, you associate it with a specific event bus, and the rule is matched only to events received by that event bus.

Your account has one default event bus, which receives events from AWS services. You can create custom event buses to receive events from your custom applications. You can also create partner event buses to receive events from SaaS partner applications.

## Rule

A rule matches incoming events and routes them to targets for processing. A single rule can route to multiple targets, all of which are processed in parallel. Rules aren't processed in a particular order. This enables different parts of an organization to look for and process the events that are of interest to them. A rule can customize the JSON sent to the target, by passing only certain parts or by overwriting it with a constant

## AWS event

```{
  "version": "0",
  "id": "6a7e8feb-b491-4cf7-a9f1-bf3703467718",
  "detail-type": "EC2 Instance State-change Notification",
  "source": "aws.ec2",
  "account": "111122223333",
  "time": "2017-12-22T18:43:48Z",
  "region": "us-west-1",
  "resources": [
    "arn:aws:ec2:us-west-1:123456789012:instance/i-1234567890abcdef0"
  ],
  "detail": {
    "instance-id": " i-1234567890abcdef0",
    "state": "terminated"
  }
}
```