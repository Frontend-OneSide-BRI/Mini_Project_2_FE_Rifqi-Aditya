import Xmark from "@assets/Xmark";

const Modal = ({
  selectedImageData,
  setIsModalOpen,
  setImageData,
  getImageData,
  setActiveCategory,
}) => {
  return (
    <div
      className="fixed inset-0 px-5 backdrop-blur-sm z-10 text-white flex justify-center items-center sm:px-0 overflow-auto"
      onClick={(e) => {
        //close modal when clicking outside of it
        e.stopPropagation();
        setIsModalOpen(false);
      }}
    >
      <div
        className="bg-white border border-black px-6 pb-8 rounded-t-sm sm:px-10 "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto max-w-md">
          <div className="flex justify-end">
            <Xmark
              className="my-3 hover:cursor-pointer"
              fill={"#000000"}
              onClick={() => setIsModalOpen(false)}
            />
          </div>
          <img
            className="rounded-t-sm max-h-96 w-full object-cover"
            src={selectedImageData[0].url}
            alt={selectedImageData[0].title}
          />
          <div className="pt-8 flex flex-col gap-2">
            <p className="text-black text-xl">{selectedImageData[0].title}</p>
            <div className="flex flex-wrap gap-2">
              {selectedImageData[0].category.map((cat, i) => (
                <div
                  key={i}
                  className="bg-black text-white p-1 rounded-sm text-xs hover:cursor-pointer transition-shadow ease-in hover:shadow-md hover:shadow-gray-500"
                  onClick={(e) => {
                    setActiveCategory(e.target.innerText);
                    setIsModalOpen(false);
                    setImageData(getImageData(e.target.innerText));
                  }}
                >
                  <p>{cat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
