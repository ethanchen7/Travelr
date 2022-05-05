import ImageCard from "../ImageCard";

const UserPageFavorites = ({ favorites, sessionUser, userPageId }) => {
  return (
    <>
      {favorites.length ? (
        <div className="inner-container">
          {favorites?.map((fav) => (
            <ImageCard key={fav.id} image={fav.Image} explorePage={false} />
          ))}
        </div>
      ) : (
        <div className="empty-photo-container">
          {sessionUser.id === parseInt(userPageId) ? (
            <>
              <img src="/images/travelrblack.png" />
              <h1>Oops, looks like you don't have any favorites yet.</h1>
              <h3>Explore and add some favorites!</h3>
            </>
          ) : (
            <h1>Oops, looks like this user doesn't have any favorites yet.</h1>
          )}
        </div>
      )}
    </>
  );
};

export default UserPageFavorites;
