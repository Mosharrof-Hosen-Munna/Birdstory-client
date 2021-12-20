import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import "./ProfileHeader.css";
const ProfileHeader = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <section>
      <Container>
        <div className="mt-2  profile-header ">
          <div>
            <img
              className="profile-cover-photo"
              src="https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/248371655_726338244992469_5362424120908875208_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFjNz6J5lrLW18yxj610ffk7QOxJJCBoCHtA7EkkIGgIXP9Ulnmkr5HZn2dplFh4lwfgW7tGkrN3lHXkRAbJrkt&_nc_ohc=Ywqph6ddQeoAX-ZJkI2&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_sYb1wC99Aha_ujC2JMBGfKb4_BevxVnx_UKdFxP7t0A&oe=61BFFC31"
              alt=""
            />
            <div className="overflow-hidden"></div>
          </div>

          <div className="d-flex justify-content-between">
            <h6 className="text-hover  fw-bold pointer m-3 text-blue-green rounded bg-white d-inline-block">
              New Blogs
            </h6>
            <Link
              className="text-hover  fw-bold pointer m-3 text-blue-green rounded bg-white d-inline-block"
              to="/update-profile"
            >
              <h6 className="mb-0">Edit Profile</h6>
            </Link>
          </div>
          <div className="d-flex justify-content-center">
            <img
              className="profile-pic"
              src="https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-1/c80.0.320.320a/p320x320/248430183_726337181659242_4371244059268715231_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeHhDaENlRX2wc0eccIQdcVXiH3Pj0s566OIfc-PSznroyWN-eG4hJhTyLmarBFoSWWxgfPTMUvZ3WUrgW5tHR3e&_nc_ohc=uARngyySUXoAX_peyvb&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_C7_5SGmY8ab1wjtQLj3gSMwPogVz0j-tb3DOYdPCdoQ&oe=61C0DCD2"
              alt=""
            />
          </div>
          <div className="text-center text-light">
            <h2>{user.displayName}</h2>
            <p className="text-light pb-3 profile-bio">
              ******* Full Stack Web Developer ******* ❤️❤️বাবা- মার ছোট ছেলে
              ❤️❤️ ❤️❤️Emotional Boy❤️❤️
            </p>
          </div>
          <div className="d-block d-md-none">
            <ProfileInfo></ProfileInfo>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProfileHeader;
