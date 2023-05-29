import styles from '../styles/Footer.module.css';

const Footer= () => {
	return (
		<>
		<div id={styles.footer}>
			<div id={styles.dMode}>
				Activate Dark Mode:
				<input type="checkbox" id="check"></input>
			</div>
			<div id={styles.copyright}>
				© All rights reserved 2021
			</div>
			<div id={styles.socials}>
				Socials
				<div>
					<a href="https://twitter.com/Magnitopic" className="fa fa-twitter" id={styles.twitter}></a>
					<a href="https://www.youtube.com/c/alejandromagnitopic" className="fa fa-youtube-play" id={styles.youtube}></a>
					<a href="https://github.com/magnitopic" className="fa fa-github" id={styles.github}></a>
					<a href="https://www.flickr.com/photos/160405600@N04/" className="fa fa-flickr" id={styles.flickr}></a>
				</div>
			</div>
		</div>
		</>
	)
}



export default Footer