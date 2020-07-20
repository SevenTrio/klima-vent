var smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
var settings = {
    filename: "_smart-grid",
    outputStyle: 'sass', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '0px', /* gutter width px || % || rem */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1280px', /* max-width оn very large screen */
        fields: '24px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1280px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '960px'
        },
        sm: {
            width: '600px',
            // fields: '15px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '0px'
        }
        /*
        We can create any quantity of break points.

        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};

smartgrid('./src/sass', settings);