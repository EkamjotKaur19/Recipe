import React from 'react';
import photo from '../Images/img1.webp'

export default function About() {
  return (
    <div>
        <div id="about">
            <div className="about-text">
                <h1>Let's Cook</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consequuntur at saepe similique ad labore odio quaerat eveniet, maiores, magni, enim error delectus consequatur temporibus veritatis! Voluptatibus, eius soluta. Delectus porro repudiandae vero asperiores fuga accusamus veniam modi tenetur facere voluptate, iusto neque hic? Consectetur similique fugit vero impedit distinctio.</p>
                <button>Read More</button>
            </div>
            <div className="about-image">
                <img src={photo} alt=""/>
            </div>
        </div>
    </div>
  )
}
