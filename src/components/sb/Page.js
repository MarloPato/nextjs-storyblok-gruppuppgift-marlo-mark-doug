import {
    storyblokEditable,
} from '@storyblok/react/rsc';

import ServerComponent from './ServerComponent';
    
export default function Page({ blok }) {

    return (
        <main {...storyblokEditable(blok)}>
            {blok.body?.map((nestedBlok) => (
                <ServerComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </main>
    );
}