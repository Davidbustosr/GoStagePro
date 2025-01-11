import ButtonPrimary from "../buttons/ButtonPrimary";
import Link from "next/link";
import Image from "next/image";

const BlogCard3 = ({ blog, blogsType, bg }) => {
  const { id, title, img, desc, audioUrl } = blog; // Cambié publishDate por audioUrl.

  return (
    <div
      className={` ${
        bg === "pink"
          ? "col-xl-6 col-lg-6 col-md-12 col-sm-12"
          : "col-xl-4 col-lg-4 col-md-6 col-sm-6"
      }  col-12`}
      data-aos="fade-up"
    >
      <div
        className={`blog__4__single ${
          blogsType === 4 ? "" : " blog__3__single"
        } single__transform ${bg === "pink" ? "bg__pink" : ""}`}
      >
        {/* Imagen del blog */}
        <div className="blog__4__img">
          <Image src={img} alt="" placeholder="blur" />
        </div>

        {/* Reproductor de audio reemplazando la fecha */}
        <div className="blog__4__time">
          {audioUrl ? (
            <audio controls>
              <source src={audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          ) : (
            <p>No audio available</p>
          )}
        </div>

        {/* Título del blog */}
        <div className="blog__4__heading">
          <h6>
            <Link className="text-uppercase" href={`/blogs/${id}`}>
              {title?.length > 18 ? title?.slice(0, 18) + "..." : title}
            </Link>
          </h6>
        </div>

        {/* Descripción del blog */}
        <div className="blog__4__text">
          <p>{desc}</p>
        </div>

        {/* Botón "Read More" */}
        <div className="blog__4__button">
          <ButtonPrimary
            text={"READ MORE"}
            path={`/blogs/${id}`}
            button={blogsType === 4 || bg === "pink" ? "" : "black"}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard3;