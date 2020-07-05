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

export default groupList;
