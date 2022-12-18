import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notification-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const sendNotificaiton = new SendNotification(notificationsRepository);

    const { notification } = await sendNotificaiton.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
