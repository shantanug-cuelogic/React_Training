import React from 'react';
import Aux from '../../hoc/Aux';

const layout = () => (
    <Aux>
    <div> xyz </div>
    <main>
        {props.children}
    </main>
    </Aux>
);

export default layout; 