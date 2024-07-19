import {initializeBlock} from '@airtable/blocks/ui';
import React from 'react';

function HelloWorldApp() {
    // UPDATE
    return <div>Hello world 🚀</div>;
}

initializeBlock(() => <HelloWorldApp />);
