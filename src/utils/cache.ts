const cache = new Map();

export const setCache = (key: string, value: any, ttl = 60) => {
  cache.set(key, {
    value,
    expiry: Date.now() + ttl * 1000,
  });
};

export const getCache = (key: string) => {
  const data = cache.get(key);

  if (!data) return null;

  if (Date.now() > data.expiry) {
    cache.delete(key);

    return null;
  }

  return data.value;
};

export const clearCache = (key: string) => {
  cache.delete(key);
};
