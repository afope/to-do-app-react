import React from 'react';

import FormInput from './components/FormInput';
import './HomePageLayout.css';

const HomePageLayout = (props) => (
    <div>
        <div>
            <FormInput {...props} />
        </div>
    </div>
);

export default HomePageLayout;
