import styles from "./DefaultLayout.module.scss";
import Sidebar from "@/components/Sidebar";
import ImageRectangle from "@/components/ImageRectangle";

export default function DefaultLayout({ children }) {
  return (
    <div className={styles.dashboard}>
			<aside className={styles.aside}>
      	<Sidebar />
			</aside>
      <main className={styles.main}>
				<div className={styles.content}>
					{children}
				</div>
				<div className={styles.calls}>
					<ImageRectangle />
				</div>
			</main>
    </div>
  )
}