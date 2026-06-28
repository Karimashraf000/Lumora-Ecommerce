export const setItemInLocalStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(e);
  }
}
export const getItemFromLocalStorage=(key, value) => {
  try {
   return JSON.parse(window.localStorage.getItem(key)) ?? null;
  } catch (e) {
    console.error(e);
  }
}
export const removeItemFromLocalStorage = (key, value) =>{
  try {
    window.localStorage.removeItem(key, value);
  } catch (e) {
    console.error(e);
  }
}
