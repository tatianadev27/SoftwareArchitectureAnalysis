// Step 1: Product Interface
interface INotification {
    send(): void;
}

// Step 2: Concrete Products
class EmailNotification implements INotification {
    send(): void {
        console.log("Sending an email notification...");
        // Email notification specific logic
    }
}

class SMSNotification implements INotification {
    send(): void {
        console.log("Sending an SMS notification...");
        // SMS notification specific logic
    }
}

class PushNotification implements INotification {
    send(): void {
        console.log("Sending a push notification...");
        // Push notification specific logic
    }
}

// Step 3: Factory Interface
enum NotificationType {
    Email = "email",
    SMS = "sms",
    Push = "push",
}

interface NotificationConfig {
    type: NotificationType;
    implementation: new () => INotification;
}

interface INotificationFactory {
    createNotification(type: NotificationType): INotification;
}

// Step 3: Concrete Factory
class NotificationFactory implements INotificationFactory {
    private static notificationTypes: NotificationConfig[] = [
        { type: NotificationType.Email, implementation: EmailNotification },
        { type: NotificationType.SMS, implementation: SMSNotification },
        { type: NotificationType.Push, implementation: PushNotification },
        // Add more types here
    ];

    createNotification(type: NotificationType): INotification {
        const config = NotificationFactory.notificationTypes.find((n) => n.type === type);

        if (config) {
            return new config.implementation();
        }

        throw new Error(`Invalid notification type: ${type}`);
    }
}

// Step 4: Client Code
function main(notificationFactory: INotificationFactory) {
    // Create instances using the factory
    const emailNotification = notificationFactory.createNotification(NotificationType.Email);
    const smsNotification = notificationFactory.createNotification(NotificationType.SMS);
    const pushNotification = notificationFactory.createNotification(NotificationType.Push);

    // Use the created instances
    emailNotification.send();
    smsNotification.send();
    pushNotification.send();
}

// Run the client code with the NotificationFactory
const notificationFactory = new NotificationFactory();
main(notificationFactory);


// Run the client code
main();
