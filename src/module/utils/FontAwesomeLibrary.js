import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

const initializeIconLibrary = () => {
    library.add(fas);
    library.add(far);
    library.add(fal);
    library.add(fab);
};

export default initializeIconLibrary;