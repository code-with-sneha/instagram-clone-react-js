import React from "react";

import { Button } from "@material-ui/core";

import { Favorite, Comment, Send } from "@material-ui/icons";

import "../Footer/Footer.css";

export default function Footer({ channel, song, likes, comment, shares }) {
  return (
    <div className="video-footer">
      <div className="video-text">
        <h6>
          {channel} . ({song})
          <Button>
            <h6 style={{ color: "white", fontSize: '10px',border: '1.5px solid white',padding: '3px'}}>Follow</h6>
          </Button>
        </h6>
      </div>
      {/*  */}
      <div className="footer-buttons">
        <div className="flex-box">
          <Favorite />
          {likes}
        </div>
        {/*  */}
        <div className="flex-box">
          <Comment />
          {comment}
        </div>
        {/*  */}
        <div className="flex-box">
          <Send />
          {shares}
        </div>
        <div className="dot">...</div>
      </div>
    </div>
  );
}
