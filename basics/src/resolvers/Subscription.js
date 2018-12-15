const Subscription = {
  count: {
    subscribe(parent, args, { pubsub }, info) {
      let count = 0;

      setInterval(() => {
        count++;
        // 'channel name' {data to send}
        pubsub.publish('count', {
          // data we're sending
          count,
        });
      }, 1000);

      // 'channel name'
      return pubsub.asyncIterator('count');
    },
  },
};

export { Subscription as default };
