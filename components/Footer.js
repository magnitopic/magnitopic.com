import styles from '../styles/Footer.module.css';

const Footer= () => {
	return (
		<>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
		<div id={styles.footer}>
			<div id={styles.dMode}>
				<p id={styles.text} >Activate Dark Mode:</p>
				<input type="checkbox" id="check" onclick="changeStatus()"></input>
			</div>
			<div id={styles.copyright}>
			<p>© Al rights reserved 2021</p>
			</div>
			<div id={styles.socials}>
				<p>Socials</p>
				<div>
					<a href="https://twitter.com/Magnitopic" class="fa fa-twitter" id={styles.twitter}></a>
					<a href="https://www.youtube.com/c/alejandromagnitopic" class="fa fa-youtube-play" id={styles.youtube}></a>
					<a href="https://github.com/magnitopic" class="fa fa-github" id={styles.github}></a>
					<a href="https://www.flickr.com/photos/160405600@N04/" class="fa fa-flickr" id={styles.flickr}></a>
					<a href="#" class="fa fa-envelope" id={styles.mail}></a>
					
				</div>
			</div>
		</div>
		</>
	)
}



export default Footer