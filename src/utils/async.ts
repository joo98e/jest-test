
export const useFetchProduct = (error?: string) => {
  if (error === "error") {
    return Promise.reject("network error");
  }

  return Promise.resolve({
    name: "milk",
    price: "200",
  });
};
