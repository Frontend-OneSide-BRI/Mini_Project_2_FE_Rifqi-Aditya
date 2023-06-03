import { imgData } from "@shared/data/data";

export default function useViewModel() {
  const getSelectedImageData = (imageId) => {
    return imgData.filter((image) => image.id === imageId);
  };

  return {
    getSelectedImageData,
  };
}
