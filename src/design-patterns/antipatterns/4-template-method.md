template method
===
### Refresh
To refresh your memory, the Template Method pattern is when you encapsulate the outline of an algorithm or lifecycle in an abstract class, but define certain specific steps as abstract methods. This class then forms a “template” that others can subclass, only supplying the details that are different.

## Difficult to compose functionality
When inheritance is used as the way to add new functionality, it becomes impossible to add functionality in more than one axis at the same time without defining more and more classes. So, say you have a ConnectionPool and you start by having an OracleConnectionPool and DB2ConnectionPool and so on. But then you also need the ability to create XAConnections sometimes. So you then need to create OracleXAConnectionPool and DB2XAConnectionPool and so on. The per-DB pools share some functionality and the XA pools share functionality but can’t inherit from both. This typically leads to a lot of duplication and an explosion in implementations.

##  Difficult to comprehend program flow
In my experience it takes very few levels of template methods and inheritance to make debugging or understand the sequence of method calls difficult (as few as 2 or 3). When template methods are really pushed (lots of abstract methods at multiple levels), it can become painful to debug this kind of a system.

# What to use instead
Define an interface for each kind of functionality and inject an instance for each
```
public abstract class ConnectionPool {
  ...

  // Public API
  public Connection obtain() { ... }
  public void release(Connection conn) { ... }

  // template methods
  protected abstract Connection createConnection();
  protected abstract boolean isAlive(Connection connection);
  protected abstract void closeConnection(Connection connection);
}
```
```
public class ConnectionPool {
  private ConnectionFactory connFactory;
  public ConnectionPool(ConnectionFactory factory, EvictionPolicy policy, ...) {
    // store subcomponent instances
  } 

  // Public API is the same, template methods are gone
}

// Move template methods into a pluggable factory
public interface ConnectionFactory {
  Connection createConnection();
  boolean isAlive(Connection connection);
  void closeConnection(Connection connection);
}
```