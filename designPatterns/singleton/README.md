# Singleton Pattern Example in TypeScript

## Overview

This repository contains a TypeScript implementation of the Singleton Pattern, a design pattern that ensures a class has only one instance and provides a global point of access to it. The example follows SOLID principles, including the Single Responsibility Principle (SRP), Open/Closed Principle (OCP), Dependency Inversion Principle (DIP), and Interface Segregation Principle (ISP).

## Implementation Details
![image](https://github.com/tatianadev27/SoftwareArchitectureAnalysis/assets/54762147/e55ce60b-9299-4ca7-92a9-baf3e53a0120)


# Singleton Method Pattern Example in TypeScript

### Singleton Manager

The `SingletonManager` class is responsible for managing the singleton instance. It includes a private constructor to prevent direct instantiation and a static method (`getInstance`) to obtain the singleton instance. The example showcases adherence to SOLID principles.


## Design Principles Used

1. **Single Responsibility Principle (SRP):**
   - The SingletonManager class has a single responsibility: managing the singleton instance.

2. **Open/Closed Principle (OCP):**
   - The getInstance method provides a well-defined extension point for obtaining the singleton instance.

3. **Dependency Inversion Principle (DIP):**
   - The client code depends on the abstraction (SingletonManager), promoting flexibility and ease of testing.

4. **Interface Segregation Principle (ISP):**
   - The SingletonManager class provides a minimal and specific set of methods, allowing clients to use only what they need.

By following these SOLID principles, the Singleton Pattern implementation in this project achieves modularity, maintainability, and flexibility in managing a single instance throughout the application.


