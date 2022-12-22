import { Notification } from '../entities/notification';

//Vamos implementar uma interface, mas por conta do nest vamos implementar uma classe abstrata (injeção de dependência)
export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract save(notification: Notification): Promise<void>;
  abstract countManyByRecipientId(recipientId: string): Promise<number>;
}
