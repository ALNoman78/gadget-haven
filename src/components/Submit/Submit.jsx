import DynamicText from '../DynamicText/DynamicText';
import { Helmet } from 'react-helmet-async';

const Submit = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Submit Form - Gadget Haven
                </title>
            </Helmet>
            <DynamicText
                headingText={'Your Form submitted Successfully'}
                paraText={'We will contact you as soon as possible'}
            >
            </DynamicText>
        </div>
    );
};

export default Submit;