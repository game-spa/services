import storage from 'good-storage'

export function add(key, val) {
  storage.set(key, val);
}

export function get(key) {
  return storage.get(key);
}