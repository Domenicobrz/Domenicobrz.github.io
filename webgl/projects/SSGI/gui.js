import * as dat from './dependencies/dat.gui.js';
import { atrousMaterial } from "./main.js";
import { switchSceneLights } from "./scene.js";

let controller;
function initGUI() {

    var gui = new dat.GUI();

    var GUIcontroller = function() {
        this.c_phi = 105;
        this.n_phi = 0.007;
        this.p_phi = 0.15;
        this.h_phi = 1;

        this.c_phiMultPerIt = 1;

        this.stepMultiplier = 1.4;
        this.iterations = 10;

        this.atrous5x5 = true;

        this.maxFramesHistory = 5;
        this.filterHistoryModulation = 0.88;
        this.feedbackLoopFactor = 0.3;
        this.exposure = -1;
        this.spp = 3;
        this.lowhsspp = 0;

        this.ssrQuality = 2;
        this.ssrSteps   = 15;
        this.ssrBinarySteps = 5;
        this.ssrJitter = 0;
        this.ssrBounces = 3;
        this.ssrStepMult = 1.375;
        this.ssrStartingStep = 0.1;
        this.maxIntersectionDepthDistance = 0.5;

        this.radianceLambdaFix_ = 1;
        this.radianceLambdaFix = true;

        this.lowest = function() {
            this.c_phi = 105;
            this.n_phi = 0.007;
            this.p_phi = 0.15;
            this.h_phi = 1;
    
            this.ssrQuality = 0;
            this.maxIntersectionDepthDistance = 0.15;
          
            this.c_phiMultPerIt = 1;
    
            this.stepMultiplier = 1.4;
            this.iterations = 10;
    
            this.atrous5x5 = true;
    
            this.maxFramesHistory = 12;
            this.filterHistoryModulation = 0.85;
            this.spp = 1;

            this.radianceLambdaFix_ = 1;
            this.radianceLambdaFix  = true;

            this.feedbackLoopFactor = 1;

            this.updateGUI();
        }

        this.low = function() {
            this.c_phi = 105;
            this.n_phi = 0.007;
            this.p_phi = 0.15;
            this.h_phi = 1;
    
            this.ssrQuality = 1;
            this.maxIntersectionDepthDistance = 0.24;
          
            this.c_phiMultPerIt = 1;
    
            this.stepMultiplier = 1.4;
            this.iterations = 10;
    
            this.atrous5x5 = true;
    
            this.maxFramesHistory = 5;
            this.filterHistoryModulation = 0.78;
            this.spp = 2;

            this.radianceLambdaFix_ = 1;
            this.radianceLambdaFix  = true;

            this.feedbackLoopFactor = 0.32;

            this.updateGUI();
        }

        this.medium = function() {
            this.c_phi = 105;
            this.n_phi = 0.007;
            this.p_phi = 0.15;
            this.h_phi = 1;

            this.ssrQuality = 2;
            this.maxIntersectionDepthDistance = 0.5;
    
            this.c_phiMultPerIt = 1;
    
            this.stepMultiplier = 1.4;
            this.iterations = 10;
    
            this.atrous5x5 = true;
    
            this.maxFramesHistory = 5;
            this.filterHistoryModulation = 0.85;
            this.spp = 3;

            this.radianceLambdaFix_ = 1;
            this.radianceLambdaFix  = true;

            this.feedbackLoopFactor = 0.3;

            this.updateGUI();
        }

        this.high = function() {
            this.c_phi = 105;
            this.n_phi = 0.007;
            this.p_phi = 0.15;
            this.h_phi = 1;
    
            this.ssrQuality = 3;
            this.maxIntersectionDepthDistance = 0.25;

            this.c_phiMultPerIt = 1;
    
            this.stepMultiplier = 1.4;
            this.iterations = 8;
    
            this.atrous5x5 = true;
    
            this.maxFramesHistory = 4;
            this.filterHistoryModulation = 0.79;
            this.spp = 6;

            this.radianceLambdaFix_ = 1;
            this.radianceLambdaFix  = true;

            this.feedbackLoopFactor = 1;

            this.updateGUI();
        }

        this.iCantEvenTestThisProperly = function() {
            this.c_phi = 105;
            this.n_phi = 0.007;
            this.p_phi = 0.15;
            this.h_phi = 1;
    
            this.ssrQuality = 3;
            this.maxIntersectionDepthDistance = 0.25;

            this.c_phiMultPerIt = 1;
    
            this.stepMultiplier = 1.4;
            this.iterations = 8;
    
            this.atrous5x5 = true;
    
            this.maxFramesHistory = 4;
            this.filterHistoryModulation = 0.85;
            this.spp = 10;

            this.radianceLambdaFix_ = 1;
            this.radianceLambdaFix  = true;

            this.feedbackLoopFactor = 0.6;

            this.updateGUI();
        }

        this.switchLights = function() {
            switchSceneLights();
        }

        this.updateGUI = function() {
            for(let folder in gui.__folders) {
                if(!gui.__folders.hasOwnProperty(folder)) continue;
        
                for(let j = 0; j < gui.__folders[folder].__controllers.length; j++) {
                    let property = gui.__folders[folder].__controllers[j].property;
        
                    if(controller.hasOwnProperty(property)) {
                        gui.__folders[folder].__controllers[j].setValue(controller[property]);
                    }
                }
            }
        };

    };    

    controller = new GUIcontroller();


    var wff = gui.addFolder('Wavelet Filter');
    var rmf = gui.addFolder('Ray Marcher');
    var rpf = gui.addFolder('Reprojection Params');
    var qpf = gui.addFolder('Quality Presets');
    var fff = gui.addFolder('For fun');

    wff.add(controller, 'c_phi', 0, 2000).onChange(function(value) {
        atrousMaterial.uniforms.uC_phi.value = value;
    });
    wff.add(controller, 'n_phi', 0.001, 30).onChange(function(value) {
        atrousMaterial.uniforms.uN_phi.value = value;
    }); 
    wff.add(controller, 'p_phi', 0, 30).onChange(function(value) {
        atrousMaterial.uniforms.uP_phi.value = value;
    }); 
    wff.add(controller, 'h_phi', 0, 30).onChange(function(value) {
        atrousMaterial.uniforms.uH_phi.value = value;
    }); 
    wff.add(controller, 'c_phiMultPerIt', 0, 4);
    wff.add(controller, 'stepMultiplier', 0, 5);
    wff.add(controller, 'iterations', 0, 20).step(1);
    wff.add(controller, 'feedbackLoopFactor', 0, 1);
    wff.add(controller, 'atrous5x5').onChange(function(value) {
        if(value) {
            atrousMaterial.defines = {
                "atrous5x5": true,
            };
        } else {
            atrousMaterial.defines = {
                "atrous3x3": true,
            };
        }

        atrousMaterial.needsUpdate = true;
    });

    rmf.add(controller, 'exposure', -10, 10);
    rmf.add(controller, 'spp', 1, 15).step(1);
    rmf.add(controller, 'lowhsspp', 0, 10).step(1);

    rmf.add(controller, 'ssrQuality', 0, 5).step(1);
    rmf.add(controller, 'ssrSteps', 1, 50).step(1);
    rmf.add(controller, 'ssrBinarySteps', 1, 20).step(1);
    rmf.add(controller, 'ssrBounces', 0, 5).step(1);
    rmf.add(controller, 'ssrJitter', 0, 1);
    rmf.add(controller, 'ssrStepMult', 1, 4);
    rmf.add(controller, 'ssrStartingStep', 0, 1);
    rmf.add(controller, 'maxIntersectionDepthDistance', 0, 5);


    rpf.add(controller, 'maxFramesHistory', 0, 20).step(1);
    rpf.add(controller, 'filterHistoryModulation', 0, 1);
    rpf.add(controller, 'radianceLambdaFix').onChange(() => {
        controller.radianceLambdaFix_ = controller.radianceLambdaFix ? 1 : 0;
    });

    qpf.add(controller, 'lowest');
    qpf.add(controller, 'low');
    qpf.add(controller, 'medium');
    qpf.add(controller, 'high');
    qpf.add(controller, 'iCantEvenTestThisProperly');

    fff.add(controller, 'switchLights');

    // wff.open();
    // ptf.open();
    // rpf.open();
    // ssrf.open();
    qpf.open();
    fff.open();


    controller.medium();
}

export { controller, initGUI };