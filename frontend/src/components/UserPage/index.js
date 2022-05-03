import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { loadImages, loadDetails } from "../../store/profile";
import UserPageHeader from "../UserPageHeader";
import UserPageNavBar from "../UserPageNavBar";
import ImageCard from "../ImageCard";
import "./UserPage.css";

const UserPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const { id } = useParams();
  const images = useSelector((state) => state.profile.profileImages);
  const imageObjects = Object.values(images);
  const details = useSelector((state) => state.profile.profileDetails);

  if (!sessionUser) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(loadImages(id));
    dispatch(loadDetails(id));
  }, [dispatch]);
  return (
    <div className="user-page-container">
      <UserPageHeader details={details} />
      <UserPageNavBar />
      <div className="user-page-body">
        <div className="inner-container">
          {imageObjects?.map((img) => (
            <ImageCard key={img.id} image={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
