var posts = [
    { imgPath: "images/caustics.jpg",  link: "http://domenicobrz.github.io/webgl/projects/dispersion-caustics/", description: "", tags: ["webgl"] },
    { imgPath: "images/sidescroller.jpg",  link: "http://domenicobrz.github.io/webgl/projects/Sidescroller anim/", description: "", tags: ["webgl"] },
    { imgPath: "images/webglheader.jpg",  link: "http://domenicobrz.github.io/webgl/projects/webgl header/", description: "", tags: ["webgl"] },
    { imgPath: "images/wolfheader.jpg",  link: "http://domenicobrz.github.io/webgl/projects/wolf-header/", description: "", tags: ["threejs"] },
    { imgPath: "images/thematrix.jpg",  link: "http://domenicobrz.github.io/webgl/projects/enter the matrix/", description: "", tags: ["webgl"] },

    { imgPath: "images/ssr.png",  link: "http://domenicobrz.github.io/webgl/projects/SSR/", description: "", tags: ["webgl"] },

    { imgPath: "images/2dsoftshadows.jpg",  link: "http://domenicobrz.github.io/webgl/projects/2D soft shadows/", description: "", tags: ["webgl", "geometry"] },
    { imgPath: "images/flyingsimulator.jpg",  link: "http://domenicobrz.github.io/webgl/projects/flying simulation/", description: "", tags: ["webgl"] },
    { imgPath: "images/marchingcubes.jpg",  link: "http://domenicobrz.github.io/webgl/projects/marching cubes/", description: "", tags: ["webgl", "geometry"] },
    { imgPath: "images/cpufluid.jpg",  link: "http://domenicobrz.github.io/webgl/projects/CPU Fluid simulation/", description: "", tags: ["webgl"] },
    
    { imgPath: "images/audiowaves.jpg", link: "http://domenicobrz.github.io/webgl/projects/Wavelengths visualizer/", description: "", tags: ["webgl"] },
    { imgPath: "images/reflections.jpg",  link: "http://domenicobrz.github.io/webgl/projects/Reflections/", description: "", tags: ["webgl"] },
    { imgPath: "images/dxfparser.jpg", link: "http://domenicobrz.github.io/webgl/projects/DXF-Parser/", description: "", tags: ["webgl"] },
    { imgPath: "images/marblenoise.jpg", link: "http://domenicobrz.github.io/webgl/projects/Marble noise experiment/", description: "", tags: ["webgl"] },
    { imgPath: "images/noisefield.jpg", link: "http://domenicobrz.github.io/webgl/projects/Noisefield/", description: "", tags: ["webgl"] },
    { imgPath: "images/tdv.jpg", link: "http://domenicobrz.github.io/webgl/projects/Thomas de vos/", description: "", tags: ["webgl"] },
    { imgPath: "images/mainpage1.jpg", link: "http://domenicobrz.github.io/webgl/projects/testportfolio/", description: "", tags: ["webgl", "geometry", "misc"] },

    { imgPath: "images/mainpage2.jpg", link: "http://domenicobrz.github.io/webgl/projects/testportfolio2/", description: "", tags: ["webgl", "geometry"] },
    { imgPath: "images/dofcannon.jpg", link: "http://domenicobrz.github.io/webgl/projects/Physics Mouse/", description: "", tags: ["threejs"] },
    { imgPath: "images/threedof.jpg", link: "http://domenicobrz.github.io/webgl/projects/threejs DOF/", description: "", tags: ["threejs"] },
    { imgPath: "images/threetest1.jpg", link: "http://domenicobrz.github.io/webgl/projects/ValueNoiseModel/", description: "", tags: ["threejs", "misc"] },
    { imgPath: "images/variablelines.jpg", link: "https://github.com/Domenicobrz/Variable-width-lines-algorithm", description: "", tags: ["webgl", "geometry"] },

    { imgPath: "images/webglclock.jpg", link: "https://github.com/Domenicobrz/WebGL-clock-widget", description: "", tags: ["webgl", "misc"] },
    { imgPath: "images/bpshadows.jpg", link: "https://github.com/Domenicobrz/WebGL-Soft-shadows-through-backprojection", description: "", tags: ["webgl"] },
    { imgPath: "images/dualcontouring.jpg", link: "https://github.com/Domenicobrz/Dual-Contouring-javascript-implementation", description: "", tags: ["webgl", "misc", "geometry"] },
    { imgPath: "images/webglpathtracer.jpg", link: "http://domenicobrz.github.io/webgl/projects/RTgpu/", description: "", tags: ["webgl"] },
    { imgPath: "images/lineint.jpg", link: "https://github.com/Domenicobrz/Line-Integral-Convolution", description: "", tags: ["webgl", "misc"] },

    // { imgPath: "/images/26.jpg", title: "helloworld", description: "", tags: ["webgl"] },
    // { imgPath: "/images/27.jpg", title: "helloworld", description: "", tags: ["webgl", "visualization"] },
    // { imgPath: "/images/28.jpg", title: "helloworld", description: "", tags: ["webgl", "visualization"] },
    // { imgPath: "/images/29.jpg", title: "helloworld", description: "", tags: ["webgl", "visualization"] },
    // { imgPath: "/images/30.jpg", title: "helloworld", description: "", tags: ["webgl", "visualization"] },

    // { imgPath: "/images/31.jpg", title: "helloworld", description: "", tags: ["webgl", "visualization"] },
    // { imgPath: "/images/32.jpg", title: "helloworld", description: "", tags: ["webgl", "visualization"] },
    // { imgPath: "/images/33.jpg", title: "helloworld", description: "", tags: ["webgl", "visualization"] },
    // { imgPath: "/images/34.jpg", title: "helloworld", description: "", tags: ["webgl", "visualization"] },
    // { imgPath: "/images/35.jpg", title: "helloworld", description: "" },
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