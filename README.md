## 3D Pulsating Structure with Confetti Animation

This project involves creating a 3D pulsating structure with a grid of boxes and falling confetti animation using p5.js.

### Steps to Complete

#### Step 1: Grid of Boxes
- Use a nested `for` loop to create a grid of boxes (size: 50x50x50) within the coordinates (-400 to 400) on the x-axis and (-400 to 400) on the z-axis. Place the camera at (800, -600, 800) and make it point towards the center of the scene.

#### Step 2: Set Material and Stroke
- Set the material to normal and stroke to zero with a stroke weight of two to distinguish the boxes.

#### Step 3: Create Wavy Structure
- Calculate the distance of each box from the center using `dist()`.
- Modulate the box height using `sin()` based on the distance, creating a wavy structure with heights ranging from 100 to 300. Use `frameCount` to animate the wave.

#### Step 4: Camera Animation
- Implement camera movement to fly in a circle around the structure continuously, similar to the demo animation.

#### Step 5: Confetti Generation
- Create arrays `confLocs` and `confTheta` to store confetti locations and angles.
- Generate 200 3D vectors for confetti locations with random values within specified ranges.
- Populate `confTheta` with random angles for initial rotation.

#### Step 6: Confetti Animation
- Implement animation for confetti to fall downwards (`y` coordinate decrement) and rotate (`theta` increment).
- Reset confetti position to the top when it reaches the middle of the scene (`y = 0`).

#### Step 7: Customization and Further Development
- Customize the sketch by experimenting with different materials and lights, affecting only cubes or confetti.
- Implement dynamic variables using p5.js sliders to adjust cube heights, sine wave speed, or other parameters.

### Usage

1. Clone or download the project repository.
2. Open the `index.html` file in a web browser to run the p5.js sketch.
3. Interact with the sketch using the implemented camera movement and observe the falling confetti animation.

### Files Included

- `index.html`: HTML file containing the canvas and script links.
- `sketch.js`: p5.js script file containing the 3D structure and animation logic.

### Technologies Used

- **p5.js**: JavaScript library for creative coding and visualization.
