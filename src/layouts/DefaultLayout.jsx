import styles from "./DefaultLayout.module.scss";
import Sidebar from "@/components/Sidebar";

export default function DefaultLayout({ children }) {
  return (
    <div className={styles.dashboard}>
			<aside className={styles.aside}>
      	<Sidebar />
			</aside>
      <main className={styles.main}>{children}</main>
    </div>
  )
}