const Masonry = ({ imageData, setIsModalOpen, setSelectedImageId }) => {
  return (
    <div className="columns-1 xs:columns-2 md:columns-3 lg:columns-4">
      {imageData.map((image, i) => (
        <div
          key={i}
          className="mb-4 hover:cursor-pointer"
          onClick={() => {
            setIsModalOpen(true);
            setSelectedImageId(image.id);
          }}
        >
          <div className="group bg-gradient-to-b from-black to-black relative overflow-hidden">
            <div className="transition-opacity ease-in-out duration-300 opacity-100 group-hover:opacity-80">
              <img
                className="transition ease-in-out duration-300 group-hover:scale-110"
                src={image.url}
                alt={image.title}
              />
            </div>
            <p className="absolute bottom-1 left-2 text-white text-xs sm:text-sm transition-opacity ease-in-out duration-300 opacity-0 group-hover:opacity-100">
              {image.title || ""}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;
