import Xmark from "@assets/Xmark";

const Modal = ({ selectedImageData, setIsModalOpen }) => {
  return (
    <div className="fixed inset-0 px-5 backdrop-blur-sm z-10 text-white flex justify-center items-center sm:px-0">
      <div className="bg-black px-6 pb-8 rounded-t-sm sm:px-10">
        <div className="mx-auto max-w-md">
          <div className="flex justify-end">
            <Xmark
              className="my-3 hover:cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            />
          </div>
          <img
            className="rounded-t-sm"
            src={selectedImageData[0].url}
            alt={selectedImageData[0].title}
          />
          <div className="pt-8 flex flex-col gap-2">
            <p className="text-white font-bold text-base">
              {selectedImageData[0].title}
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedImageData[0].category.map((cat, i) => (
                <div
                  key={i}
                  className="bg-white text-black p-1 rounded-sm text-xs"
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
