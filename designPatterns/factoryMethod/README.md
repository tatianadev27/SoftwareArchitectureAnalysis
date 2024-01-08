# Factory Method Pattern Example in TypeScript

## Overview

This repository contains a TypeScript implementation of the Factory Method design pattern. The Factory Method pattern is a creational pattern that provides an interface for creating instances of a class, allowing subclasses to alter the type of objects that will be created.

## Implementation Details
![image](https://github.com/tatianadev27/SoftwareArchitectureAnalysis/assets/54762147/d5acc3b6-8c21-4c3a-945c-5c94b6800ced)


# Factory Method Pattern Example in TypeScript

### Step 1: Product Interface

The `INotification` interface defines the contract for notification products. It declares a `send` method that concrete products must implement.

### Step 2: Concrete Products

Three concrete classes (`EmailNotification`, `SMSNotification`, and `PushNotification`) implement the `INotification` interface, providing specific implementation details for sending different types of notifications.

### Step 3: Factory Interface and Concrete Factory

- `NotificationType` is an enumeration representing the different types of notifications (Email, SMS, Push).
- `NotificationConfig` is an interface defining the configuration required to create a specific type of notification.
- `INotificationFactory` is an interface declaring the contract for the notification factory. It includes the `createNotification` method.
- `NotificationFactory` is the concrete factory class implementing `INotificationFactory`. The factory has a static array `notificationTypes` that maps each `NotificationType` to its corresponding implementation class. The `createNotification` method uses this array to create instances of `INotification` based on the specified type.

### Step 4: Client Code

The `main` function demonstrates the use of the factory pattern. It creates instances of `INotification` using the `NotificationFactory` for Email, SMS, and Push notifications, and then calls the `send` method on each instance.


## Design Principles Used

1. **Factory Method Pattern:**
   - The code follows the Factory Method pattern, where the creation of objects is delegated to a factory class (`NotificationFactory`).
   - The factory method (`createNotification`) is responsible for creating instances of products (`INotification`), allowing flexibility in creating different types of notifications.

2. **Interface Segregation Principle (ISP):**
   - The `INotification` interface follows the Interface Segregation Principle by declaring only a single method (`send`). This ensures that classes implementing this interface are not forced to implement unnecessary methods.

3. **Open/Closed Principle (OCP):**
   - The Open/Closed Principle is respected as the client code (`main` function) is open for extension (new notification types can be added to `NotificationFactory.notificationTypes`) but closed for modification.

4. **Dependency Inversion Principle (DIP):**
   - The code adheres to the Dependency Inversion Principle by depending on abstractions (`INotification` and `INotificationFactory`) rather than concrete implementations. This allows for flexibility and ease of extension.

By applying these design principles, the code achieves modularity, flexibility, and maintainability. It separates concerns, allows for easy extension with new notification types, and promotes the use of abstractions.


