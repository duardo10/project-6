import { Meta, StoryFn } from '@storybook/react/types-6-0';
import { LogoLink, LogoLinkProps } from '.';

export default {
    title: 'LogoLink',
    component: LogoLink,
    args: {
        text: 'LogoLink',
        srcImg: 'assets/images/WIN_20240209_12_24_12_Pro.jpg',
        link: 'https://localhost',
        newTab: false,
    },
} as Meta;

export const ImageOnly: StoryFn<LogoLinkProps> = (args) => {
    return (
        <div>
            <LogoLink {...args} />
        </div>
    );
};

export const TextOnly: StoryFn<LogoLinkProps> = (args) => {
    return (
        <div>
            <LogoLink {...args} />
        </div>
    );
};

TextOnly.args = {
    srcImg: ''
};