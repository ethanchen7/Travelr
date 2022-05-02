import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { loadImages } from "../../store/profile";
import UserPageHeader from "../UserPageHeader";
import UserPageNavBar from "../UserPageNavBar";
import UserPagePhotoStream from "../UserPagePhotoStream";
import ImageCard from "../ImageCard";
import "./UserPage.css";

const UserPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const { id } = useParams();
  //   const images = useSelector((state) => state.profile.profileImages);

  if (!sessionUser) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(loadImages(id));
  }, [dispatch]);

  return (
    <div className="user-page-container">
      <UserPageHeader />
      <UserPageNavBar />
      <div className="user-page-body">
        <div className="inner-container"></div>
      </div>
    </div>
  );
};

export default UserPage;
