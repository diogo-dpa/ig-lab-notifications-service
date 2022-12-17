import { Content } from '../entities/content';
import { Notification } from '../entities/notification';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificaitonResponse {
  notification: Notification;
}

export class SendNotification {
  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificaitonResponse> {
    const { recipientId, category, content } = request;

    const notification = new Notification({
      recipientId,
      category,
      content: new Content(content),
    });

    return {
      notification,
    };
  }
}
