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
          <div className="relative">
            <img src={image.url} alt={image.title} />
            <p className="absolute bottom-1 left-2 text-white text-sm">
              {image.title || ""}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;
