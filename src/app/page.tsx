"use client";

import Comment from '../components/Comment';
import PostOwnner from '../components/PostOwnner';
import Reply from '../components/Reply';
//import comments from '../libs/comments';

export default function Home() {
  return (
    <div 
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3" 
      >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwnner name="Wichuda Rotna 660610794" text ="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207" like="100"/>

        {/* Comment Example */}
        <Comment/>

        {/* Reply Example */}
        <Reply/>

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
