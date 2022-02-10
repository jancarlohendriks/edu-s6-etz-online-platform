import ImageCircle from "../ImageCircle";
import styles from "./ProfileCard.module.scss";
import Link from "next/link";

const ProfileCard = () => {
  return (
    <Link href="/profile">
      <a className={styles.root}>
				<ImageCircle />
				<p>John Doe</p>
      </a>
    </Link>
  );
};

export default ProfileCard;
