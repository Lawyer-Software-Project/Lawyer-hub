<<<<<<< HEAD
import './bootstrap';
=======
>>>>>>> ef65a5bcd0d2f26f888a72e1b0b2337ca0d30b80
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

<<<<<<< HEAD
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
=======
const appName = import.meta.env.VITE_APP_NAME || "Lawyer's";
>>>>>>> ef65a5bcd0d2f26f888a72e1b0b2337ca0d30b80

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
<<<<<<< HEAD
    progress: {
        color: '#4B5563',
    },
=======
>>>>>>> ef65a5bcd0d2f26f888a72e1b0b2337ca0d30b80
});
