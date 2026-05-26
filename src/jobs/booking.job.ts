import eventBus from './eventBus';

eventBus.on('booking.created', async (payload) => {
  console.log(`
[EMAIL SERVICE]

Booking confirmation sent

Customer ID: ${payload.customerId}

Event ID: ${payload.eventId}

Quantity: ${payload.quantity}
`);
});
