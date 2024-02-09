import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchBlogs } from "../redux/blogsSlice";
import 'ldrs/ring'
import { lineSpinner } from "ldrs";
const Blogs = () => {
  lineSpinner.register();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const navigate = useNavigate();
  const blog = useSelector((state) => state);
  const dispatch = useDispatch();
  // const [blog, setBlog] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setBlog(res.data));
  // }, []);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  const images = [
    "https://zeynproduksiyon.b-cdn.net/wp-content/uploads/2018/12/1000_fotografci_zeynproduksiyon_mobilyafotograflari_yatas_1_result.jpg",
    "https://media.istockphoto.com/id/1293762741/tr/foto%C4%9Fraf/modern-oturma-odas%C4%B1-i%C3%A7-3d-render.jpg?s=612x612&w=0&k=20&c=XnnApGYyp9z6XaOKM8F1JjefB4pCKNkynZw1YBkHggg=",
    "https://media.istockphoto.com/id/1308740147/tr/foto%C4%9Fraf/ah%C5%9Fap-tv-kabini-i%C3%A7-duvar-mockup-modern-bo%C5%9F-odada-minimal-tasar%C4%B1m.jpg?s=612x612&w=0&k=20&c=YdnrtVmiR_Y0Yvf09H_IAArt5tbppQYHwoVXg0pSS24=",
    "https://us.123rf.com/450wm/andreyeremenko/andreyeremenko2305/andreyeremenko230500940/203896346-mock-up-poster-frame-in-classic-interior-background.jpg?ver=6",
    "https://us.123rf.com/450wm/creativelittlebird/creativelittlebird2211/creativelittlebird221100034/193583667-empty-white-wall-in-modern-child-room-mock-up-interior-in-scandinavian-style-copy-space-for-your.jpg?ver=6",
    "https://static5.depositphotos.com/1028404/501/i/450/depositphotos_5016122-stock-photo-modern-house-living-room-with.jpg",
    "https://static5.depositphotos.com/1028404/501/i/450/depositphotos_5016162-stock-photo-modern-house-living-room-with.jpg",
    "https://st3.depositphotos.com/1009647/17720/i/450/depositphotos_177209562-stock-photo-modern-kitchen-interior-design-3d.jpg",
  ];

  const sliceBlog = blog.blogs.slice(0, 8);
  return (
    <div>
      <div className="blogs">
        {blog?.loading && (
          <l-line-spinner
            size="40"
            stroke="3"
            speed="1"
            color="black"
          ></l-line-spinner>
        )}
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {sliceBlog?.map((el) => (
            <Carousel.Item onClick={() => navigate(`/blog/${el.id}`)}>
              <img src={images[el.id - 1]} />
              <Carousel.Caption>
                <h3>{el.title}</h3>
                <p>{el.body}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Blogs;
