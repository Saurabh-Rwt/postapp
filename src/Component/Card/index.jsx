import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { fetchPost } from "../../Api/data";
import { connect } from "react-redux";
import img01 from "../../Assets/image/cards/img-01.png";
import img02 from "../../Assets/image/cards/img-02.png";
import img03 from "../../Assets/image/cards/img-03.png";
import img04 from "../../Assets/image/cards/img-04.png";
import img05 from "../../Assets/image/cards/img-05.png";
import img06 from "../../Assets/image/cards/img-06.png";

const Card = ({ isFirstButtonActive }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    fetchPost(60)
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleRemove = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);

    const totalPosts = updatedPosts.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const newCurrentPage = Math.min(currentPage, totalPages);
    setCurrentPage(newCurrentPage);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  function truncateText(text, maxWords) {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="card-wrapper">
      <Row className={`${isFirstButtonActive ? "active" : ""}`}>
        {currentPosts.map((post) => (
          <Col lg={4} key={post.id}>
            <div className="card">
              <button className="cross" onClick={() => handleRemove(post.id)}>
                X
              </button>
              <div className="card-body">
                <h3 className="title">{truncateText(post.title, 3)}</h3>
                <p className="text">{truncateText(post.body, 5)}</p>
                <span className="time">Mon, 21 Dec 2020 14:57 GMT</span>
                <img src={img01} alt="" className="img-fluid" />
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <Row className={`${!isFirstButtonActive ? "active" : ""}`}>
        {currentPosts.map((post) => (
            <Col lg={12} key={post.id}>
                <div className="post-wrap">
                    <img src={img01} alt="" className="img-fluid" />

                    <div className="content">
                        <h3 className="title">{truncateText(post.title, 5)}</h3>
                        <p className="text">{truncateText(post.body, 5)}</p>
                        <span className="time">Mon, 21 Dec 2020 14:57 GMT</span>
                    </div>

                    <button className="cross" onClick={() => handleRemove(post.id)}>X</button>
                </div>
            </Col>
        ))}
      </Row>

      <ul className="pagination">
        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map(
          (_, index) => (
            <li
              key={index}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              <button onClick={() => paginate(index + 1)} className="page-btn">
                {index + 1}
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFirstButtonActive: state.isFirstButtonActive,
});

export default connect(mapStateToProps)(Card); // Connect the component to Redux
