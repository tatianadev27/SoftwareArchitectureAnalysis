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

// Step 3: Factory
enum NotificationType {
    Email = "email",
    SMS = "sms",
    Push = "push",
}

interface NotificationConfig {
    type: NotificationType;
    implementation: new () => INotification;
}

class NotificationFactory {
    private static notificationTypes: NotificationConfig[] = [
        { type: NotificationType.Email, implementation: EmailNotification },
        { type: NotificationType.SMS, implementation: SMSNotification },
        { type: NotificationType.Push, implementation: PushNotification },
        // Add more types here
    ];

    static createNotification(type: NotificationType): INotification {
        const config = this.notificationTypes.find((n) => n.type === type);

        if (config) {
            return new config.implementation();
        }

        throw new Error(`Invalid notification type: ${type}`);
    }
}

// Step 4: Client Code
function main() {
    const emailNotification = NotificationFactory.createNotification(NotificationType.Email);
    emailNotification.send();

    const smsNotification = NotificationFactory.createNotification(NotificationType.SMS);
    smsNotification.send();

    const pushNotification = NotificationFactory.createNotification(NotificationType.Push);
    pushNotification.send();
}

// Run the client code
main();
