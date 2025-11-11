import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setcurrentpage] = useState(1);
  const pageSize = 12;
  const [selectCategory, setSelectCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5173/blogsData.json?page=${currentPage}&limit=${pageSize}`;
      //   filter by Category...

      if (selectCategory) {
        url += `&category=${selectCategory}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setBlogs(data);
    }
    fetchBlogs();
  }, [currentPage, pageSize, selectCategory]);

  //   page changing btn
  const handlePageChange = (pageNaumber) => {
    setcurrentpage(pageNaumber);
  };
  const handleCategoryChange = (category) => {
    setSelectCategory(category);
    setcurrentpage(1);
    setActiveCategory(category);
  };

  return (
    <div>
      {/* category section */}
      <div>
        <CategorySelection
          onSelectCategory={handleCategoryChange}
          selectCategory={selectCategory}
          activeCategory={activeCategory}
        />
      </div>
      {/* blogs section */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* blogs card components */}
        <BlogCards
          blogs={blogs}
          currentPage={currentPage}
          selectCategory={selectCategory}
          pageSize={pageSize}
        />
        {/* sideBar components */}

        <div>
          <SideBar />
        </div>
      </div>
      {/* pagination section */}
      <div>
        <Pagination
          onPageChange={handlePageChange}
          blogs={blogs}
          pageSize={pageSize}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default BlogPage;
