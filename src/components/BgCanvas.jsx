"use client";
import React, { useRef, useEffect } from "react";

const AdvancedGridWarpCanvas = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");

		// Set canvas to full window size
		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			drawGrid();
		};

		// Initial resize
		resizeCanvas();

		// Handle window resize
		window.addEventListener("resize", resizeCanvas);

		// Draw the warped grid
		function drawGrid() {
			context.clearRect(0, 0, canvas.width, canvas.height);

			// Background - dark purple like in the image
			context.fillStyle = "#0a0015";
			context.fillRect(0, 0, canvas.width, canvas.height);

			// Grid settings
			const gridSpacingX = 35;
			const gridSpacingY = 35;
			const lineWidth = 0.6;
			context.lineWidth = lineWidth;
			context.strokeStyle = "rgba(150, 150, 190, 0.25)";

			// Warp parameters
			const centerX = canvas.width / 2;
			const centerY = canvas.height / 2;
			const warpStrengthX = 0.15; // How much the grid warps horizontally
			const warpStrengthY = 0.1; // How much the grid warps vertically
			const warpScale = Math.min(canvas.width, canvas.height) * 0.8;

			// Draw vertical lines with perspective warp
			for (let x = 0; x <= canvas.width; x += gridSpacingX) {
				context.beginPath();

				for (let y = 0; y <= canvas.height; y += 3) {
					// Calculate normalized coordinates (-1 to 1)
					const nx = (x - centerX) / (canvas.width / 2);
					const ny = (y - centerY) / (canvas.height / 2);

					// Apply bulging/pinching effect
					const distanceFromCenter = Math.sqrt(nx * nx + ny * ny);

					// Perspective effect - lines should converge toward the center
					const perspectiveWarp =
						Math.pow(distanceFromCenter, 2) *
						nx *
						warpStrengthX *
						warpScale;

					if (y === 0) {
						context.moveTo(x + perspectiveWarp, y);
					} else {
						context.lineTo(x + perspectiveWarp, y);
					}
				}

				context.stroke();
			}

			// Draw horizontal lines with perspective warp
			for (let y = 0; y <= canvas.height; y += gridSpacingY) {
				context.beginPath();

				for (let x = 0; x <= canvas.width; x += 3) {
					// Calculate normalized coordinates (-1 to 1)
					const nx = (x - centerX) / (canvas.width / 2);
					const ny = (y - centerY) / (canvas.height / 2);

					// Apply bulging/pinching effect
					const distanceFromCenter = Math.sqrt(nx * nx + ny * ny);

					// Perspective effect
					const perspectiveWarp =
						Math.pow(distanceFromCenter, 2) *
						ny *
						warpStrengthY *
						warpScale;

					if (x === 0) {
						context.moveTo(x, y + perspectiveWarp);
					} else {
						context.lineTo(x, y + perspectiveWarp);
					}
				}

				context.stroke();
			}
		}

		// Optional animation loop for subtle movement
		let animationFrameId;
		let time = 0;

		const animate = () => {
			drawGrid();
			animationFrameId = window.requestAnimationFrame(animate);
		};

		animate();

		// Cleanup
		return () => {
			window.removeEventListener("resize", resizeCanvas);
			window.cancelAnimationFrame(animationFrameId);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="fixed top-0 left-0 w-full h-full z-0"
		/>
	);
};

export default AdvancedGridWarpCanvas;
