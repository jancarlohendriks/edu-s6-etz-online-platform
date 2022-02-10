import ImageCircle from "../ImageCircle";
import styles from "./ProfileDetails.module.scss";

const ProfileDetails = () => {
	return (
		<div className={styles.root}>
			<ImageCircle />
			<span>Bellen</span>
			<span>|</span>
			<span>Toevoegen aan gesprek</span>
		</div>
	)
}

export default ProfileDetails