Creator
====
### Problem:
- Who creates an Object? Or who should create new instance of some class?

### Solution:

Assign class B the responsibility to create an instance of class A if one of these is true
- B "contains" or compositely aggregates A.
- B records A
- B closely uses A
- B has the initializing data for A
- Decide who can be creator based on the objects association and their interaction. 

## Example

- Consider VideoStore and Video in that store.
- VideoStore has an aggregation association with Video. I.e, VideoStore is the container and the Video is the contained object.
- So, we can instantiate video object in VideoStore class

![image](Creator.png)