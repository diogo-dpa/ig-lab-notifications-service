import { Notification } from '@application/entities/notification';

export class PrismaNotificationMapper {
  // criado como static para não precisar instanciar a classe para usar
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }
}
