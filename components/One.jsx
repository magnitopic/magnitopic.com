import styles from "../styles/One.module.css";

const One = () => {
	return (
		<div id={styles.intro}>
			<div id={styles.left}>Hello World</div>
			<div id={styles.right}>
				<p>
					<b>Hey!</b> My name is Alex.
					<br />
					I&apos;m a programmer studying computer science at{" "}
					<a href="https://42.net">42Madrid</a>. Working with Java, C,
					Python and Web Development
				</p>
			</div>
		</div>
	);
};

export default One;
