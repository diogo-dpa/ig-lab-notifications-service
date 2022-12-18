import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificaitonResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificaitonResponse> {
    const { recipientId, category, content } = request;

    const notification = new Notification({
      recipientId,
      category,
      content: new Content(content),
    });

    // Persistir a notificação no banco
    await this.notificationsRepository.create(notification);

    return {
      notification,
    };
  }
}
