export const syncStorageKeyWithStore = (key, action) => {
  addStorageListener(localStorageKeyPredicate(key), (value) => {
    action(value)
  });
};

function localStorageKeyPredicate(keyString) {
  return ({ key, storageArea }) => (
    key === keyString && storageArea === localStorage
  );
}

function addStorageListener(predicate, cb) {
  window.addEventListener('storage', (event) => {
    console.log(event);
    if (predicate(event)) {
        cb(event.value);
    }
  }, false);
}
