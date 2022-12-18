import { Notification } from '../entities/notification';

//Vamos implementar uma interface, mas por conta do nest vamos implementar uma classe abstrata (injeção de dependência)
export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}
