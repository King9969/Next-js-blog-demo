import React from 'react';
import LeftContent from './functionalities/LeftContent';
import RightContent from './functionalities/RightContent';

const MainContent = () => {
  const mainContentData = [
      {
        title: "Far far away, behind the word mountains",
        date: "August 15, 2019",
        duration: "2 min read",
        category: "MusicTechnologyTravel",
        author: "Jonathan Doe",
        image: "https://picsum.photos/1000/1000?random=1",
        description:
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden..."
      },
      {
        title: "Another Post Title",
        date: "September 10, 2020",
        duration: "3 min read",
        category: "ArtCultureLifestyle",
        author: "Jane Smith",
        image: "https://picsum.photos/1000/1000?random=2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."
      },
      {
        title: "Another Post Title",
        date: "September 10, 2020",
        duration: "3 min read",
        category: "ArtCultureLifestyle",
        author: "Jane Smith",
        image: "https://picsum.photos/1000/1000?random=25",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."
      },
      {
        title: "Another Post Title",
        date: "September 10, 2020",
        duration: "3 min read",
        category: "ArtCultureLifestyle",
        author: "Jane Smith",
        image: "https://picsum.photos/1000/1000?random=22",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."
      },
      {
        title: "Another Post Title",
        date: "September 10, 2020",
        duration: "3 min read",
        category: "ArtCultureLifestyle",
        author: "Jane Smith",
        image: "https://picsum.photos/1000/1000?random=12",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."
      },
      // Add more data objects if needed
    ];
    

 
  return (
    <main>
      <div className='maincontainer'>
      <LeftContent data={mainContentData} />
      <div className='container'>
      <RightContent recentPosts={mainContentData} />
      </div>
      </div>

    </main>
  );
};  

export default MainContent;
