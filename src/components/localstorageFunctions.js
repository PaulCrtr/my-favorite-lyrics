// Init locatstorage so list is not NULL
const initStorage = () => {
  let list = JSON.parse(window.localStorage.getItem("myLyrics")) || [];
  window.localStorage.setItem("myLyrics", JSON.stringify(list));
};

// Add an element to localstorage
const addItem = (item) => {
  let list = JSON.parse(window.localStorage.getItem("myLyrics")) || [];
  list.push(item);
  window.localStorage.setItem("myLyrics", JSON.stringify(list));
};

// Delete an element from localstorage
const deleteItem = (id) => {
  let list = JSON.parse(window.localStorage.getItem("myLyrics"));
  const index = list.indexOf(list.find((element) => element.id === id));
  list.splice(index, 1);
  window.localStorage.setItem("myLyrics", JSON.stringify(list));
};

// Songs grouped by artists
const groupList = () => {
  return JSON.parse(window.localStorage.getItem("myLyrics")).reduce(
    (element, { artist, id, title, picture, lyrics }) => {
      (element[artist] = element[artist] || []).push({
        id,
        title,
        picture,
        lyrics,
        artist,
      });
      return element;
    },
    {}
  );
};

export { initStorage, addItem, deleteItem, groupList };
