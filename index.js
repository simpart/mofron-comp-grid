/**
 * @file mofron-comp-grid/index.js
 * @brief grid component for mofron
 * @license MIT
 */
const Grid    = require("mofron-layout-grid");
const HrzPos  = require("mofron-effect-hrzpos");
const ConfArg = mofron.class.ConfArg;
const comutl  = mofron.util.common;

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (mixed) 
     *                key-value: component config
     * @short 
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("grid");
            
	    /* init config */
            
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    initDomConts () {
        try {
            super.initDomConts();
            this.layout(new Grid());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    column (col) {
        try {
	    if (undefined !== col) {
		let set_ratio = [];
                for (let idx=0; idx < col ;idx++) {
                    set_ratio.push(100/col);
		}
                this.layout({ "modname":"Grid" }).ratio(set_ratio);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    child (chd,idx) {
        try {
            if (undefined === chd) {
                return super.child();
            }
            
	    if (true === Array.isArray(chd)) {
                /* parameter check */
                for (let cidx in chd) {
                    this.child(chd[cidx], idx);
                }
                return;
            }
            
            let wrap = new mofron.class.Component();
	    chd.effect(new HrzPos());
	    wrap.child(chd);
	    super.child(wrap,idx);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

}
/* end of file */
