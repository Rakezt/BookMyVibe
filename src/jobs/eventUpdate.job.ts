import eventBus from './eventBus';

eventBus.on('event.updated', async (payload) => {
  console.log(`
[NOTIFICATION SERVICE]

Customers notified about event update

Event ID: ${payload.eventId}
`);
});
