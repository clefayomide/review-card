import "./App.css";
import React, { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  // eslint-disable-next-line
  const [reviews, setReviews] = useState([
    {
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      name: "Bill Anderson",
      position: "the boss",
      text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      name: "Susan Smith",
      position: "web developer",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      name: "anna johnson",
      position: "web designer",
      text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      name: "peter jones",
      position: "intern",
      text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [postPerPage, setPostPerPage] = useState(1);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = reviews.slice(indexOfFirstPost, indexOfLastPost);

  const handleNext = (index) => {
    if (currentPage >= 1 && currentPage <= reviews.length - 1) {
      setCurrentPage(currentPage + index);
    }
  };

  const handlePrev = (index) => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - index);
    }
  };

  const handleRandom = (index) => {
    setCurrentPage(Math.floor(Math.random() * reviews.length) + index);
  };
  return (
    <div className="App">
      <Header />
      {currentPost.map((post, index) => {
        return (
          <Card
            review={post}
            key={index}
            next={handleNext}
            prev={handlePrev}
            random={handleRandom}
          />
        );
      })}
    </div>
  );
}

export default App;
