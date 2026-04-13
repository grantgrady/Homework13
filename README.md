# Homework 13: 3D Models, Textures & Interaction

## Name: Grant Grady

## Project Overview
This is an interactive 3D artwork featuring an imported 3D model at the center, surrounded by five textured orbiting geometric forms. The piece explores spatial relationships and user interaction through mouse clicks that reposition objects randomly.

### Features
- **Imported 3D Model** | Central octahedron loaded from OBJ file |
- **5 Textured 3D Objects** | Array-based orbiting forms: box, sphere, cylinder, cone, torus |
- **Textures** | 5 custom-generated procedural textures |
- **Rotation & Motion** | Continuous rotation on multiple axes for all objects |
- **Mouse Interaction** | Click to move at least two objects to new random positions |
- **Title Display** | "INTERSTELLAR CRYSTAL" displayed prominently |
- **Name Display** | Name shown in overlay |

## Technical Implementation

### Imported Model:
- **OBJ File** - Simple octahedron geometry loaded with `loadModel()` and displayed with `model()`

### 3D Objects Used:
1. **Box** - Textured cube orbiting the center
2. **Sphere** - Textured sphere with procedural patterns
3. **Cylinder** - Textured cylindrical form
4. **Cone** - Textured conical shape
5. **Torus** - Textured ring geometry

### Materials & Lighting:
- **ambientMaterial()** - Applied to all orbiting objects
- **normalMaterial()** - Used for the central model
- **Lighting Setup** - Ambient, point, and directional lights for depth

### Interaction:
- **mouseClicked()** - Randomly selects and repositions at least two orbiting objects

## Reflection

### Development Process

This project builds on previous 3D work by incorporating an imported model and interactive elements. The central crystal concept emerged from exploring geometric forms in space, with orbiting elements creating dynamic visual interest.

### Use of Generative AI

I used Generative AI (specifically DeepSeek) as a **learning tool** and a **development assistant** throughout this project. Here's how I used it:

1. **Model Creation**: Generating a simple OBJ file for the central model
2. **Texture Generation**: Ideas for procedural texture patterns
3. **Interaction Logic**: Implementing mouse click repositioning of objects
4. **Material Properties**: Learning the differences between ambientMaterial, specularMaterial, and normalMaterial

**Benefits:**
- Accelerated learning of 3D concepts in p5.js
- Better understanding of transformation matrices (push/pop)
- Efficient problem-solving for complex rotation systems
- Inspiration for creative color combinations

**Challenges:**
- The AI couldn't preview visual results, so I had to iterate manually
- Understanding coordinate systems required experimentation
- Balancing performance with visual complexity

### Use of Others' Code

I referenced:
- **p5.js WEBGL Examples**: Official examples for lighting and materials
- **Coding Train (Daniel Shiffman)**: Videos on 3D rendering and camera controls
- **p5.js Reference**: Official documentation for all 3D primitive functions

All code was written by me, with AI assistance for debugging and conceptual guidance. The texture generation and particle system were adapted from common patterns but customized for this specific artwork.
