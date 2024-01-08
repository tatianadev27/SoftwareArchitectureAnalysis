# Factory Method Pattern Example in TypeScript

## Overview

This repository contains a TypeScript implementation of the Factory Method design pattern. The Factory Method pattern is a creational pattern that provides an interface for creating instances of a class, allowing subclasses to alter the type of objects that will be created.

![image](https://github.com/tatianadev27/SoftwareArchitectureAnalysis/assets/54762147/adec4e86-c8ad-493e-9d70-e5a369c6ef5f)


## Implementation Details

### Step 1: Product Interface

The `INotification` interface defines the contract for notification products. It declares a `send` method that concrete products must implement.

### Step 2: Concrete Products

Three concrete classes (`EmailNotification`, `SMSNotification`, and `PushNotification`) implement the `INotification` interface, providing specific implementation details for sending different types of notifications.

### Step 3: Factory

- `NotificationType` is an enumeration representing the different types of notifications (Email, SMS, Push).
- `NotificationConfig` is an interface defining the configuration required to create a specific type of notification. It includes the notification type and a constructor function for the corresponding implementation class.
- `NotificationFactory` is the factory class responsible for creating instances of `INotification` based on the specified type. It contains a static array of `NotificationConfig` objects for each notification type.

### Step 4: Client Code

The `main` function demonstrates the use of the factory pattern. It creates instances of `INotification` using the `NotificationFactory` for Email, SMS, and Push notifications, and then calls the `send` method on each instance.


