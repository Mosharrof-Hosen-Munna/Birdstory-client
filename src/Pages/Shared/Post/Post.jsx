import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faThumbsUp,
  faThumbsDown,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import "./Post.css";

const Post = () => {
  const [isShow, setIsShow] = useState(false);
  const [isMention, setIsMention] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  const handleMention = () => {
    setIsMention(true);
  };

  return (
    <Card className="my-2 border-0 shadow-sm">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            className="post-pic mx-3 my-2"
            src="https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-1/c80.0.320.320a/p320x320/248430183_726337181659242_4371244059268715231_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeHhDaENlRX2wc0eccIQdcVXiH3Pj0s566OIfc-PSznroyWN-eG4hJhTyLmarBFoSWWxgfPTMUvZ3WUrgW5tHR3e&_nc_ohc=uARngyySUXoAX_peyvb&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_C7_5SGmY8ab1wjtQLj3gSMwPogVz0j-tb3DOYdPCdoQ&oe=61C0DCD2"
            alt=""
          />
          <div>
            <h6 className="m-0">Pinominal Munna</h6>
            <p className="m-0">Web developer</p>
          </div>
        </div>
        <div className="me-3 text-end">
          <FontAwesomeIcon className="" icon={faEllipsisH} />
          <p className="m-0">6h ago</p>
        </div>
      </div>
      {/* post body */}
      <div
        className={`p-3 mb-3 ${isShow ? "" : "post-body"} position-relative`}
      >
        <div onClick={handleShow}>
          ব্যাচ-৪ স্ট্রাইকস !!! এইখানে যাদের নাম বা ছবি আছে শুধু তারা না। বরং
          তারা ছাড়াও আরো অনেক অনেক ব্যাচ-৪ এর স্টুডেন্ট আছে যারা ডেইলি ডেইলি
          কষ্ট করে যাচ্ছে। চেষ্টা চালিয়ে যাচ্ছে। ডেইলি ডেইলি সময় দিচ্ছে। বুঝতে
          না পারলে বুঝে নেয়ার চেষ্টা করতেছে। প্রজেক্ট করতেছে। প্রাকটিস করতেছে।
          তারা তাদের কষ্টের ফল পাবেই। অর্থাৎ যারা লেগে আছে তারা আজ না হয় কাল
          তাদের টার্গেট এচিভ করবেই। সেটা নিয়ে আমাদের কোন সন্দেহ নাই। হয়তো, "লাক
          বা টাইমিং" এর কারণে কারো দুই-এক মাস আগে হবে। বা দুই-এক মাস পরে হবে। এর
          চাইতে বেশি কিছু না। . যাদের ছবি দেখতেছো তাদের অর্জনের কৃতিত্ব তাদেরই।
          হয়তো সাইডে থেকে প্রোগ্রামিং হিরো হালকা একটু হেল্প করতে পারে। গাইড করতে
          পারে। ডেইলি ডেইলি লেগে থাকার, লার্নিং হ্যাবিট তৈরি করার একটা সিস্টেম
          তৈরি করে দিতে পারে। প্রব্লেম হলে ডেইলি তিনটা সাপোর্ট সেশন; যারা একটু
          পিছিয়ে যায় তাদের একটু স্পেশাল কন্সেপচুয়াল সেশন; প্রাকটিস সেশন দিতে
          পারে। কিন্তু চাইলেই আমরা (প্রোগ্রামিং হিরো) যে কাউকে ওয়েব ডেভেলপার
          বানিয়ে ফেলতে পারবো না। যে ওয়েব ডেভেলপার হবে তাকে ওয়েব ডেভেলপার হতে হবে
          তার নিজের চেষ্টায়। সে চেষ্টা করলে আমাদের প্রসেস তাকে কিছুটা লাইনে
          রাখবে। একটা ফ্লো এর মধ্যে রাখবে। তবে শেখার মেইন কাজটা তাকেই করতে হবে।
          . প্রোগ্রামিং শেখার মতো চাকরি পাওয়ার ক্ষেত্রেও মেইন কাজটা ওদেরকেই করতে
          হয়। প্রোগ্রামিং হিরো শুধু SCIC তে নিয়ে স্পেশাল গাইড করতে পারে। টাস্ক
          দিতে পারে। তার পাশাপাশি কিছু কোম্পানিতে সিভি/রেজুমি রিকমেন্ড করতে
          পারে। পাশে থেকে বিভিন্ন এঙ্গেলে ইন্টার্ন/জব হান্টিং টেকনিক বলতে পারে।
          মাগার সিভি/রেজুমি বানানোর কাজ, এপ্লাই করার কাজ, ইন্টারভিউ দেয়ার কাজ
          কিন্তু তাদেরকেই করতে হয়। সেই কারণে-- কষ্ট ওদের, অর্জনও ওদের। . আর এখন
          যেহেতু এনরোলমেন্ট চলতেছে। তাই তোমরা যারা আগ্রহী তারা কোন অবস্থাতেই
          ভাইবো না, প্রোগ্রামিং হিরো এর কোর্স এ জয়েন করলে সবাই অটো প্রোগ্রামার
          হয়ে যাবে। ১০০% সবার অটো চাকরি হয়ে যাবে। সেটা চিন্তা করার কোন কারণ নাই।
          তবে যেটা চিন্তা করতে পারো। সেটা হচ্ছে-- তুমি যদি শেখার কাজে, লেগে
          থাকার কাজে নিজের সর্বোচ্চ নিয়ে লেগে থাকো। আমরাও তোমাকে শেখানোর, গাইড
          করার পিছনে আমাদের সর্বোচ্চ দিয়ে সাপোর্ট করে যাবো। . বাকিটা তোমার
          হার্ডওয়ার্ক, তোমার চেষ্টা আর তোমার লাক এর কম্বিনেশন।
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <div
          onClick={handleShow}
          className="fw-bold  text-start d-flex rounded p-1 me-2 shadow-sm text-hover d-inline-block pointer bg-light"
          style={{ marginTop: "-40px", position: "absolute" }}
        >
          {isShow ? "See less.." : "See more.."}
        </div>
      </div>
      <img
        className="img-fluid"
        src="https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/248371655_726338244992469_5362424120908875208_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFjNz6J5lrLW18yxj610ffk7QOxJJCBoCHtA7EkkIGgIXP9Ulnmkr5HZn2dplFh4lwfgW7tGkrN3lHXkRAbJrkt&_nc_ohc=Ywqph6ddQeoAX-ZJkI2&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_sYb1wC99Aha_ujC2JMBGfKb4_BevxVnx_UKdFxP7t0A&oe=61BFFC31"
        alt=""
      />
      <Card.Footer>
        <div className="d-flex align-items-center justify-content-between">
          <div>5230 likes</div>
          <div>5230 dislikes</div>
          <div>5230 mentions</div>
        </div>
        <hr className="m-1" />
        <div className="d-flex justify-content-around">
          <h6 className="pointer rounded px-2 d-flex align-items-center px-md-1 text-hover py-2 mb-0">
            <FontAwesomeIcon className="me-2" icon={faThumbsUp} />
            Like
          </h6>
          <h6 className="pointer rounded px-2 px-md-1 d-flex align-items-center text-hover py-2 mb-0">
            <FontAwesomeIcon className="me-2" icon={faThumbsDown} />
            Dislike
          </h6>
          <h6
            onClick={handleMention}
            className="pointer rounded px-2 px-md-1 d-flex align-items-center text-hover py-2 mb-0"
          >
            <FontAwesomeIcon className="me-2" icon={faComment} />
            Mention
          </h6>
        </div>
        <hr className="m-1" />

        {isMention && (
          <>
            {" "}
            <div className="text-blue-green text-center pointer">
              See All Mentions
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <img
                className="comment-pic me-3 my-2"
                src="https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-1/c80.0.320.320a/p320x320/248430183_726337181659242_4371244059268715231_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeHhDaENlRX2wc0eccIQdcVXiH3Pj0s566OIfc-PSznroyWN-eG4hJhTyLmarBFoSWWxgfPTMUvZ3WUrgW5tHR3e&_nc_ohc=uARngyySUXoAX_peyvb&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_C7_5SGmY8ab1wjtQLj3gSMwPogVz0j-tb3DOYdPCdoQ&oe=61C0DCD2"
                alt=""
              />
              <input
                className="form-control"
                placeholder="Leave a mention.."
                type="text"
              />
              <button className="btn-blue-green ms-1 py-2">Submit</button>
            </div>
          </>
        )}
      </Card.Footer>
    </Card>
  );
};

export default Post;
