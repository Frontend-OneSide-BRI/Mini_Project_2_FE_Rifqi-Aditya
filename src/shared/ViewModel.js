import { imgData } from "@shared/data/data";

export default function useSharedViewModel() {
  const getImageData = (category) => {
    return category === "All"
      ? imgData
      : imgData.filter(
          (img) =>
            //ignore case sensitive
            img.category
              .map((cat) => cat.toUpperCase())
              .includes(category.toUpperCase()) ||
            img.title.toLowerCase().includes(category.toLowerCase())
        );
  };

  return {
    getImageData,
  };
}
