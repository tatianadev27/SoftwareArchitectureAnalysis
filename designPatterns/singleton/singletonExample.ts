// Single Responsibility Principle (SRP)
// This class has the single responsibility of managing the singleton instance.

class SingletonManager {
    private static instance: SingletonManager | null = null;
  
    private constructor() {}
  
    // Open/Closed Principle (OCP)
    // The getInstance method provides a well-defined extension point for obtaining the singleton instance.
    public static getInstance(): SingletonManager {
      if (!SingletonManager.instance) {
        SingletonManager.instance = new SingletonManager();
      }
      return SingletonManager.instance;
    }
  
    // Additional methods can be added here as needed, keeping the single responsibility.
    public showMessage(): void {
      console.log("Singleton instance is ready to use.");
    }
  }
  
  // Usage example:
  
  function main() {
    // Dependency Inversion Principle (DIP)
    // The client code depends on abstractions (SingletonManager), not concrete implementations.
    const singletonInstance = SingletonManager.getInstance();
  
    // Interface Segregation Principle (ISP)
    // Clients use only the methods they are interested in, avoiding unnecessary dependencies.
    singletonInstance.showMessage();
  }
  
  // Run the client code
  main();
  