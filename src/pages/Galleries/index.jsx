import { useState } from "react";
import { categoryData } from "@shared/data/data";
import Layout from "@shared/components/Layout";
import useSharedViewModel from "@shared/ViewModel";
import Masonry from "./components/Masonry";
import Modal from "@shared/components/Modal";
import SearchIcon from "@assets/SearchIcon";
import useViewModel from "./ViewModel";
import "swiper/css";
import "./galleries.css";

const Galleries = () => {
  const { getImageData } = useSharedViewModel();
  const { getSelectedImageData } = useViewModel();

  const [imageData, setImageData] = useState(getImageData("All"));
  const [activeCategory, setActiveCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState(0);

  return (
    <Layout>
      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          selectedImageData={getSelectedImageData(selectedImageId)}
          setImageData={setImageData}
          getImageData={getImageData}
          setActiveCategory={setActiveCategory}
        />
      )}
      <header className="flex flex-col justify-center items-center mb-10 sm:mb-14">
        <h1 className="mb-5 text-lg sm:mb-2 sm:text-xl md:text-2xl lg:text-3xl">
          Our Collection
        </h1>
        <p className="text-center text-sm hidden mb-5 text-stone-600 lg:mb-8 sm:inline lg:text-base">
          Step into our virtual gallery and enjoy a seamless browsing
          experience, where you can admire each artwork up close and personal.
        </p>
        <div className="flex gap-5 border border-black p-3 mb-5 w-full sm:max-w-lg">
          <SearchIcon className="w-6 h-6" />
          <input
            className="w-full"
            type="text"
            placeholder="Search for stunning images from the people"
            onChange={(e) => {
              setActiveCategory(e.target.value === "" ? "All" : e.target.value);
              setImageData(
                getImageData(e.target.value === "" ? "All" : e.target.value)
              );
            }}
          />
        </div>
        <div className="flex flex-col w-full gap-y-3 items-center sm:justify-between sm:flex-row sm:max-w-lg">
          {categoryData.map((cat, i) => (
            <div
              key={i}
              className={`hover:cursor-pointer ${
                activeCategory === cat && "category-active"
              }`}
              onClick={() => {
                setImageData(getImageData(cat));
                setActiveCategory(cat);
              }}
            >
              <p className="category w-fit text-sm p-1 lg:text-base">{cat}</p>
            </div>
          ))}
        </div>
      </header>
      <section>
        {imageData.length === 0 ? (
          <p className="text-center">No Data Found</p>
        ) : (
          <>
            <p className="text-sm mb-2">
              {`Showing ${imageData.length} Images for `}
              <strong>{activeCategory}</strong>
            </p>
            <Masonry
              imageData={imageData}
              setIsModalOpen={setIsModalOpen}
              setSelectedImageId={setSelectedImageId}
            />
          </>
        )}
      </section>
    </Layout>
  );
};

export default Galleries;
