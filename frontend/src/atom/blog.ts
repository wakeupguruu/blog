import { atom } from 'recoil';

export const blogListState = atom({
  key: 'blogListState',
  default: [], // empty means we haven't loaded anything yet
});


export const singleBlogState = atom({
    key:"singleBlogState",
    default:{
        date: "",
        id: "",
        authorName: "",
        title: "",
        content: "",
    },
})