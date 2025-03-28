

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col items-center">
                    <h2 className="text-lg font-bold">MyWebsite</h2>
                    <p className="mt-4 mb-6">© 2023 MyWebsite. All rights reserved.</p>
                    <nav className="flex space-x-4 mb-4">
                        <a href="/about" className="hover:text-white">About</a>
                        <a href="/contact" className="hover:text-white">Contact</a>
                        <a href="/privacy" className="hover:text-white">Privacy Policy</a>
                    </nav>
                    <div className="flex space-x-4">
                        <a href="src/components#" className="text-gray-300 hover:text-white">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.478 2 2 6.478 2 12c0 5.52 4.478 10 10 10 5.52 0 10-4.48 10-10S17.52 2 12 2zM12 22c-5.13 0-9-3.87-9-9s3.87-9 9-9 9 3.87 9 9-3.87 9-9 9zm5-14h-2.5v-1c0-.48.22-.75.8-.75h1.2V7h-1.5c-1.05 0-1.5.53-1.5 1.5v1.5H12V10h1.5V16h-1.5v1.5h-1.5V16h-1.5v-1.5H10V10h1V8.5c0-1.94 1.93-3 4-3h1.5v2.75h-1.2c-.49 0-.75.27-.75.75V10h2.5l-.5 3H12V22h1.5v-8h3l.5-3z" />
                            </svg>
                        </a>
                        <a href="src/components#" className="text-gray-300 hover:text-white">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.5C6.13 2.5 1 7.63 1 13.5c0 5.11 3.17 9.37 7.63 10.57.56.1.77-.23.77-.51 0-.25-.01-1.06-.01-1.93-3.13.68-3.79-1.51-3.79-1.51A4.9 4.9 0 0 1 6.2 18c-.98-1.45-.76-3.22-.76-3.22C7.34 12.78 9 12 9 12s1.68-.04 3.15 1.25c1.31 1.17 2.23 2.81 2.23 5.1 0 2.92-1.02 5.4-3.23 5.4-1.68 0-3.09-1.24-3.09-1.24a3.702 3.702 0 0 1-1.61.4c-.86 0-1.66-.34-2.27-.9a4.749 4.749 0 0 1-1.67-3.59c0-2.45 1.4-4.56 3.55-5.56.1-.04.21-.08.31-.12h.04c-.04.06-.08.13-.12.19.23-.1.45-.16.69-.22.22-.06.45 0 .36.18a13.152 13.152 0 0 1-1.16-1.81c-.33-.45-.91-.34-1.2.11-.22.35-.18.85.12 1.14 0 0 .36.6 1 1C6.5 16.5 6 17.5 6 18.5c0 .67.27 1.18.75 1.51C5.59 20.56 3 21 1.37 21c-.98 0-.24-2.74 0-5.08.44-4.66 3.93-8.56 8.63-8.56h7c.01-.06.02-.13.03-.19C16 6.84 12.99 4.5 11.33 4.5z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;