import './ProfileHeading.css';
import EditProfileButton from '../components/EditProfileButton';
import
  import ProfileAvatar from './ProfilleAvatar';

export default function ProfileHeading(props) {
  const backgroundImage = 'url("https://assets.fireforeffect.live/banners/banner.jpg")';
  const styles = {
    backgroundImage: backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
  <div className='activity_feed_heading profile_heading'>
    <div className='title'>{props.profile.display_name}</div>
    <div className="cruds_count">{props.profile.cruds_count} Cruds</div>
    <div className="banner" style={styles} >
    <ProfileAvatar id={props.profile.cognito_user_uuid} />
      <div className="avatar">
        <img src="https://assets.fireforeffect.live/avatars/processed/Spok.jpg"></img>
      </div>
    </div>
    <div className="info">
      <div className='id'>
        <div className="display_name">{props.profile.display_name}</div>
        <div className="handle">@{props.profile.handle}</div>
      </div>
      <EditProfileButton setPopped={props.setPopped} />
    </div>
    <div className="bio">{props.profile.bio}</div>

  </div>
  );
}