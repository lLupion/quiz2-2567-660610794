"use client";
export default function PostOwnner(postprop:any) {
  if (postprop.like !== "0"){
    return (<div className="vstack gap-3">
    <div className="d-flex align-items-center gap-3">
      <img
        src="/profileImages/5e7ce82a-c110-432b-b249-970b82416283.jpg"
        width="48"
        height="48"
        className="rounded-circle"
        style={{ objectFit: "cover" }}
      />
      <span className="fw-semibold fs-5 text-white">
        {postprop.name}
      </span>
    </div>

    <span className="text-white">
      {postprop.text}
    </span>
    <div className="d-flex align-items-center gap-1">
      <img src="/like.svg" width={20}></img>
      <span style={{ color: "#B0B3B8" }}>
        {postprop.like} คน
      </span>
    </div>
    <hr className="m-0 border" />
  </div>);
  } else {
    return (<div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src="public/profileImages/5e7ce82a-c110-432b-b249-970b82416283.jpg"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5 text-white">
          {postprop.name}
        </span>
      </div>
  
      <span className="text-white">
        {postprop.text}
      </span>
      <hr className="m-0 border" />
    </div>);

  }
  
}
