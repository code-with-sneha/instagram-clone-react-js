import React from "react";
import '../components/Reels.css';
import Video from "../components/Video/Video";

import Vid1 from "../videos/vid1.mp4";
import Vid2 from "../videos/vid2.mp4";
import Vid3 from "../videos/vid3.mp4";

import '../components/Reels.css';

export default function Reels() {
  const data = [
    {
      channel: "rand",
      song: "play-1",
      url: Vid1,
      likes: "32",
      comment: "2",
      shares: "23",
    },
    {
      channel: "rand",
      song: "play-2",
      url: Vid2,
      likes: "3",
      comment: "22",
      shares: "23",
    },
    {
      channel: "rand",
      song: "play-3",
      url: Vid3,
      likes: "89",
      comment: "23",
      shares: "29",
    },
  ];

  return (
    <div className="App-frt">
      <div className="bground">
      <center>
        <h3 style={{color: 'black'}}>Reels</h3>
        {/*  */}

        <div className="video-container" id="video-container">
          {/*  */}

          {data.map((list, i) => (
            <Video
              key={i}
              channel={list.channel}
              song={list.song}
              url={list.url}
              likes={list.likes}
              comment={list.comment}
              shares={list.shares}
            />
          ))}

          {/*  */}
        </div>
      </center>
    </div>
    </div>
  );
}
