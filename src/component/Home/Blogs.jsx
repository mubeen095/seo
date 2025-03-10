import React from "react";

function Blogs() {
  return (
    <div className="blog-section">
      <p className="blog-para">BLOGS</p>
      <h5 className="blog-heading">Insights &amp; Stories</h5>
      <div className=" flex md:flex-row flex-col  w-full items-center justify-center md:justify-between gap-4 mt-[80px]">
        <a className="blog-card1" href="/blog/1">
          <div className="blog-card1-head">
            <p className="blog-card-para">BLOGS</p>
            <h6 className="blog-card-title">Blog title</h6>
          </div>
          <p className="blog-card-para-grey">IT Nova · 10 Mar, 2024</p>
        </a>
        <a className="blog-card1" href="/blog/2">
          <div className="blog-card2-head">
            <p className="blog-card-para">BLOGS</p>
            <h6 className="blog-card-title">Blog title</h6>
          </div>
          <p className="blog-card-para-grey">IT Nova · 3 Feb, 2022</p>
        </a>
        <a className="blog-card1" href="/blog/3">
          <div className="blog-card3-head">
            <p className="blog-card-para">BLOGS</p>
            <h6 className="blog-card-title">Blog title</h6>
          </div>
          <p className="blog-card-para-grey">IT Nova · 1 Jan, 2024</p>
        </a>
      </div>
    </div>
  );
}

export default Blogs;
