// export const sayHello = async () => {
//   "use server";
//   console.log("hello");
// };

export const addPost = async (formData) => {
  "use server";

  //   const title = formData.get("title");
  //   const desc = formData.get("desc");
  //   const slug = formData.get("slug");

  const { title, desc, slug, userId } = Object.fromEntries(formData);
  console.log(title, desc, slug, userId);
};
