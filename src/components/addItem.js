const addItem = (item) => {
  let list = JSON.parse(window.localStorage.getItem("myLyrics")) || [];
  list.push(item);
  window.localStorage.setItem("myLyrics", JSON.stringify(list));
};

export default addItem;
