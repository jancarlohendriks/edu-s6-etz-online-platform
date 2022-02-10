import { useRouter } from 'next/router'
import styles from "./PageHeader.module.scss";

const PageHeader = ({title}) => {
	const router = useRouter()

	return (
		<div className={styles.root}>
			<span onClick={() => router.back()}>Terug</span>
			<h2>{title}</h2>
		</div>
	)
}

export default PageHeader