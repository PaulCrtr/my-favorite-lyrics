// Delete an element from localstorage
const addItem = (id) => {
  let list = JSON.parse(window.localStorage.getItem("myLyrics"));
  const index = list.indexOf(list.find((element) => element.id === id));
  list.splice(index, 1);
  window.localStorage.setItem("myLyrics", JSON.stringify(list));
};

export default addItem;
