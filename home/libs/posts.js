var posts = [
    { imgPath: "images/projects/experiment1.jpg",  link: "http://domenicobrz.github.io/webgl/projects/experiment1/", description: "", tags: ["webgl", "threejs"] },
    { imgPath: "images/projects/c2-renderer.jpg",  link: "https://github.com/Domenicobrz/C2-Renderer", description: "", tags: ["webgpu", "threejs"] },
    { imgPath: "images/projects/recursive.jpg",  link: "http://domenicobrz.github.io/webgl/projects/recursive/", description: "", tags: ["webgl", "threejs"] },
    { imgPath: "images/projects/ssgi-2.jpg",  link: "https://domenicobrz.github.io/webgl/projects/SSGI-2/", description: "", tags: ["threejs", "webgl"] },
    { imgPath: "images/projects/ssr2.jpg",  link: "http://domenicobrz.github.io/webgl/projects/SSR2/", description: "", tags: ["webgl", "threejs"] },
    { imgPath: "images/projects/lumen2d.jpg",  link: "https://github.com/Domenicobrz/Lumen-2D", description: "", tags: ["geometry", "misc"] },
    { imgPath: "images/projects/ssrefractiondepthpeeling.jpg",  link: "http://domenicobrz.github.io/webgl/projects/SSRefractionDepthPeeling/", description: "", tags: ["webgl", "threejs"] },
    { imgPath: "images/projects/caustics.jpg",  link: "http://domenicobrz.github.io/webgl/projects/dispersion-caustics/", description: "", tags: ["webgl"] },
    { imgPath: "images/projects/frontend2.jpg",  link: "http://domenicobrz.github.io/webgl/projects/frontend 2/", description: "", tags: ["threejs", "misc"] },
    { imgPath: "images/projects/rtptcornellbox.jpg",  link: "http://domenicobrz.github.io/webgl/projects/RTPTCornellBox/", description: "", tags: ["threejs", "webgl"] },
    { imgPath: "images/projects/volumetricart.png",  link: "http://domenicobrz.github.io/webgl/projects/Volumetric art/", description: "", tags: ["webgl"] },
    { imgPath: "images/projects/blurryspider.jpg",  link: "https://domenicobrz.github.io/webgl/projects/blurry-web-spider/", description: "", tags: ["webgl", "threejs"] },
    { imgPath: "images/projects/doflines.jpg",  link: "http://domenicobrz.github.io/webgl/projects/DOF lines/", description: "", tags: ["webgl", "threejs"] },
    { imgPath: "images/projects/ssgi.jpg",  link: "http://domenicobrz.github.io/webgl/projects/SSGI/", description: "", tags: ["threejs", "webgl"] },

    { imgPath: "images/projects/thematrix.jpg",  link: "http://domenicobrz.github.io/webgl/projects/enter the matrix/", description: "", tags: ["webgl"] },
    { imgPath: "images/projects/doflinesrenderer2.jpg",  link: "http://domenicobrz.github.io/webgl/projects/DOFlines-2/", description: "", tags: ["webgl", "threejs"] },
    { imgPath: "images/projects/gpu-fluid-sim.jpg",  link: "http://domenicobrz.github.io/webgl/projects/gpu-fluid-sim/", description: "", tags: ["webgl", "threejs"] },

    { imgPath: "images/projects/circle-packing-mm.jpg",  link: "http://domenicobrz.github.io/webgl/projects/circle-packing/", description: "", tags: ["webgl", "threejs", "geometry"] },
    { imgPath: "images/projects/phys-fluid-sim.jpg",  link: "https://domenicobrz.github.io/webgl/projects/Physarum-fluid-2/", description: "", tags: ["webgl", "threejs"] },
    { imgPath: "images/projects/webglheader.jpg",  link: "http://domenicobrz.github.io/webgl/projects/webgl header/", description: "", tags: ["webgl"] },
    { imgPath: "images/projects/wolfheader.jpg",  link: "http://domenicobrz.github.io/webgl/projects/wolf-header/", description: "", tags: ["threejs"] },
    { imgPath: "images/projects/doflinesrenderer.jpg",  link: "http://domenicobrz.github.io/webgl/projects/DOFlinesrenderer/", description: "", tags: ["threejs", "geometry"] },
    { imgPath: "images/projects/sidescroller.jpg",  link: "http://domenicobrz.github.io/webgl/projects/Sidescroller anim/", description: "", tags: ["webgl"] },

    { imgPath: "images/projects/ssr.png",  link: "http://domenicobrz.github.io/webgl/projects/SSR/", description: "", tags: ["webgl"] },
    { imgPath: "images/projects/glassabsorption.jpg",  link: "http://domenicobrz.github.io/webgl/projects/glass-absorption/", description: "", tags: ["threejs"] },

    { imgPath: "images/projects/flyingsimulator.jpg",  link: "http://domenicobrz.github.io/webgl/projects/flying simulation/", description: "", tags: ["webgl"] },
    { imgPath: "images/projects/legendarycursor.jpg",  link: "https://github.com/Domenicobrz/legendary-cursor", description: "", tags: ["webgl", "threejs"] },
    { imgPath: "images/projects/2dsoftshadows.jpg",  link: "http://domenicobrz.github.io/webgl/projects/2D soft shadows/", description: "", tags: ["webgl", "geometry"] },
    { imgPath: "images/projects/marchingcubes.jpg",  link: "http://domenicobrz.github.io/webgl/projects/marching cubes/", description: "", tags: ["webgl", "geometry"] },
    
   
    { imgPath: "images/projects/cpufluid.jpg",  link: "http://domenicobrz.github.io/webgl/projects/CPU Fluid simulation/", description: "", tags: ["webgl"] },
    
    { imgPath: "images/projects/audiowaves.jpg", link: "http://domenicobrz.github.io/webgl/projects/Wavelengths visualizer/", description: "", tags: ["webgl"] },
    { imgPath: "images/projects/reflections.jpg",  link: "http://domenicobrz.github.io/webgl/projects/Reflections/", description: "", tags: ["webgl"] },
    { imgPath: "images/projects/dxfparser.jpg", link: "http://domenicobrz.github.io/webgl/projects/DXF-Parser/", description: "", tags: ["webgl"] },
    { imgPath: "images/projects/marblenoise.jpg", link: "http://domenicobrz.github.io/webgl/projects/Marble noise experiment/", description: "", tags: ["webgl"] },
    { imgPath: "images/projects/noisefield.jpg", link: "http://domenicobrz.github.io/webgl/projects/Noisefield/", description: "", tags: ["webgl"] },
    { imgPath: "images/projects/tdv.jpg", link: "http://domenicobrz.github.io/webgl/projects/Thomas de vos/", description: "", tags: ["webgl"] },
    { imgPath: "images/projects/mainpage1.jpg", link: "http://domenicobrz.github.io/webgl/projects/testportfolio/", description: "", tags: ["webgl", "geometry", "misc"] },

    { imgPath: "images/projects/mainpage2.jpg", link: "http://domenicobrz.github.io/webgl/projects/testportfolio2/", description: "", tags: ["webgl", "geometry"] },
    { imgPath: "images/projects/dofcannon.jpg", link: "http://domenicobrz.github.io/webgl/projects/Physics Mouse/", description: "", tags: ["threejs"] },
    { imgPath: "images/projects/threedof.jpg", link: "http://domenicobrz.github.io/webgl/projects/threejs DOF/", description: "", tags: ["threejs"] },
   
    { imgPath: "images/projects/threetest1.jpg", link: "http://domenicobrz.github.io/webgl/projects/ValueNoiseModel/", description: "", tags: ["threejs", "misc"] },
    { imgPath: "images/projects/variablelines.jpg", link: "https://github.com/Domenicobrz/Variable-width-lines-algorithm", description: "", tags: ["webgl", "geometry"] },

    { imgPath: "images/projects/webglclock.jpg", link: "https://github.com/Domenicobrz/WebGL-clock-widget", description: "", tags: ["webgl", "misc"] },
    { imgPath: "images/projects/bpshadows.jpg", link: "https://github.com/Domenicobrz/WebGL-Soft-shadows-through-backprojection", description: "", tags: ["webgl"] },
    { imgPath: "images/projects/dualcontouring.jpg", link: "https://github.com/Domenicobrz/Dual-Contouring-javascript-implementation", description: "", tags: ["webgl", "misc", "geometry"] },
    { imgPath: "images/projects/webglpathtracer.jpg", link: "http://domenicobrz.github.io/webgl/projects/RTgpu/", description: "", tags: ["webgl"] },
    { imgPath: "images/projects/lineint.jpg", link: "https://github.com/Domenicobrz/Line-Integral-Convolution", description: "", tags: ["webgl", "misc"] },

];


var selectedPosts = posts;


function onTagChange(activeTag) {
    selectedPosts = [];

    if (activeTag == "all") {
        // safe to do since selectedPosts is currently read-only
        selectedPosts = posts;
        return;
    }

    for (var i = 0; i < posts.length; i++)
        if(posts[i].tags.includes(activeTag))
            selectedPosts.push(posts[i]);
}


export { onTagChange, selectedPosts };