SQS
========

It provides an HTTP API over which applications can submit items into and read items out of a queue

The messages that SQS handles can be
- unformatted strings
- XML 
- JSON.

## Why not to use an HTTP Endpoint

A messaging queue is more lightweight. In particular, SQS also handles things like automated retries, preserving queue state across multiple availability zones in AWS, and keeping track of expiration timeouts on all messages.

------

SQS can act as an AWS Lambda event source

## Pros
- Scalability (all the scaling and performance-at-scale aspects are taken care of by AWS)
- Customization (You can store the contents of messages larger than 256 KB using Amazon Simple Storage Service (Amazon S3) or Amazon DynamoDB, with Amazon SQS holding a pointer to the Amazon S3 object, or you can split a large message into smaller messages.)
- Pay for what you use
- Ease of setup
- Options for Standard and FIFO queues
- Automatic deduplication for FIFO queues (where it’s critical to have each task done exactly once)


## Cons 

- High cost at scale 
- Lack of support for broadcast messages(“exactly once” delivery)
- Reduced control over performance 

##  What is used for
- Decoupling microservices(communication between different parts of the system)
- Sending tasks between different parts of your system
- Distributing workloads from a central node to worker nodes
- Scheduling batch jobs