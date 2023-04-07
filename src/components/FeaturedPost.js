import React from "react";

const FeaturedPost = () => {
  return (
    <div className="featured-post">
      <h2>Wyróżniony artykuł</h2>
      <div className="post-image">
        <img src="https://e1.pngegg.com/pngimages/743/652/png-clipart-spongebob-s-spongebob-squarepants-illustration-thumbnail.png" alt="Wyróżniony artykuł"/>
      </div>
      <div className="post-content">
        <h3>Nagłówek artykułu</h3>
        <p>
        SpongeBob to fikcyjna postać z popularnego serialu animowanego dla dzieci.
         Mieszka w ananasie na dnie oceanu, pracuje w restauracji i uwielbia swoich przyjaciół.
        Jego niezwykła osobowość i niekończąca się energia przyciągają uwagę widzów na całym świecie.
        </p>
        <a href="https://en.wikipedia.org/wiki/SpongeBob_SquarePants">Czytaj więcej</a>
      </div>
    </div>
  );
};

export default FeaturedPost;
