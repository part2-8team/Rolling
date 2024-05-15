import ProfileUser from './ProfileUser';

function Profile({ profileUrl, peopleNum }) {
  const urls = profileUrl || [];

  return (
    <>
      {urls.map((userUrl, index) => {
        const last = index === urls.length - 1;

        return (
          <ProfileUser
            key={userUrl - index}
            src={userUrl}
            peopleNum={last ? `+${peopleNum - 3}` : null}
            last={last}
          />
        );
      })}
    </>
  );
}

export default Profile;
