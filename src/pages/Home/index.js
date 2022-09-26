// import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BlogItem, Button, Gap } from "../../components";
import { setDataBlog } from "../../config/redux/action";
import "./home.scss";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Axios from "axios";

const Home = () => {
  const [counter, setCounter] = useState(1);
  const { dataBlog, page } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [counter, dispatch]);

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
  };

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Apakah Anda Yakin Akan Menghapus Post Ini?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            Axios.delete(`http://localhost:4000/v1/blog/post/${id}`)
              .then((res) => {
                console.log("Success Delete : ", res.data);
                dispatch(setDataBlog(counter));
              })
              .catch((err) => {
                console.log("err: ", err);
              });
          },
        },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
    });
  };

  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Link to="/create-blog">
          <Button title="Create Blog" />
        </Link>
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlog.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              image={`http://localhost:4000/${blog.image}`}
              title={blog.title}
              body={blog.body}
              name={blog.author.name}
              date={blog.createdAt}
              _id={blog._id}
              onDelete={confirmDelete}
            />
          );
        })}
      </div>
      <div className="pagination">
        <Button title="Previous" onClick={previous} />
        <Gap width={20} />
        <p className="text-page">
          {page.currentPage} / {page.totalPage}
        </p>
        <Gap width={20} />
        <Button title="Next" onClick={next} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
