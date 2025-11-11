import React from "react";
import { FaClock, FaUser } from "react-icons/fa";
import { useLoaderData } from "react-router";
import SideBar from "../components/SideBar";

const SingleBlog = () => {
  const blog = useLoaderData();
  const { title, image, author, published_date, reading_time, content } = blog;
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h1 className=" text-5xl lg:text-7xl font-bold leading-snug mb-5">
          Single Blog Page
        </h1>
      </div>
      {/* blogs details */}

      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="text-2xl lg:w-3/4 mx-auto leading-snug">
          <div>
            <img src={image} alt="" className="w-full mx-auto rounded" />
          </div>
          <p className="text-2xl font-bold mb-4 text-blue-500 mt-8 cursor-pointer">
            {title}
          </p>
          <p className="mb-3 text-gray-500">
            <FaUser className="inline-flex items-center mr-2" />
            {author} | {published_date}
          </p>
          <p className="mb-3 text-gray-500">
            <FaClock className="inline-flex items-center mr-2" />
            {reading_time}
          </p>
          <p className="text-base text-gray-500 mb-5">{content}</p>
          <div className="text-base text-gray-500">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              sapiente quam, impedit delectus rerum assumenda pariatur tempora
              ut eligendi facilis non porro veniam ratione minima illum nihil
              voluptate ad quas quisquam? Sapiente ducimus hic maiores unde
              nesciunt veritatis dignissimos in dolor consectetur voluptas
              delectus amet impedit facere aperiam animi architecto, asperiores
              inventore deserunt atque minus. Voluptatum nobis, ex rem tenetur
              laborum aut totam mollitia recusandae odit fugit quae quod sit
              quam deserunt excepturi odio porro! Ex excepturi consectetur,
              placeat distinctio ut assumenda facere? Eligendi amet harum
              repudiandae ut reprehenderit, labore exercitationem. Facere modi
              reiciendis ipsam nihil soluta corrupti quia quaerat.
            </p>{" "}
            <br />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              officia. Dignissimos placeat molestiae veritatis excepturi autem
              voluptas? Cumque deserunt repudiandae expedita quos voluptate
              pariatur accusantium consequuntur delectus asperiores, rerum quo
              commodi molestias voluptatem quisquam, corporis sapiente dicta
              itaque libero ducimus incidunt dolorum. Dolorem corrupti adipisci
              aut autem expedita aliquid magni?
            </p>{" "}
            <br /> <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
              provident. Ducimus vero soluta harum non suscipit ipsum
              laboriosam, ullam qui natus ab vitae nostrum mollitia. Sequi
              voluptate culpa facilis aliquam?
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 ">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
