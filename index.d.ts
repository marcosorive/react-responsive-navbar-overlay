import React from 'react';

interface NavbarProps {
    backgroundColor?: String,
    fontColor?: String,
    brand?: String,
    links?: Array<{text: String, link: String}>
}

declare module '.'{
    export const Navbar: React.FC<NavbarProps>
}
