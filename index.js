import  *as THREE from "https://cdn.skypack.dev/three@0.132.2"; 

// In order for us to create anything on screen we all need scene,camera and renderer

// How to create the scene 
const scene =new THREE.Scene();

// How to create the camera and should know that are  different camera

const camera = new THREE.PerspectiveCamera( 75,window.innerWidth/window.innerHeight,0.1,1000);

// How to create the renderer to render the object on the screen
const  renderer=new THREE.WebGLRenderer();


//Now render the 3D canvas

document.body.appendChild( renderer.domElement);

//Set up  size of the 3d canvas 
renderer.setSize(window.innerWidth,window.innerHeight)

// make it responsible
window.addEventListener('resize', () => {
    // update display width and height
    width = window.innerWidth
    height = window.innerHeight
    // update camera aspect
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    // update renderer
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.render(scene, camera)
 })





