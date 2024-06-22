import { FoooterProps, Footer } from '.';
import { Meta, StoryFn } from '@storybook/react/types-6-0';

export default {
    title: 'Footer',
    component: Footer,
    args: {
        footerHtml: `<p><a>Feito por Luis Eduardo</a></p>`,
    },
} as Meta;

export const Template: StoryFn<FoooterProps> = (args) => {
    return (
        <div style={{ marginTop: '200px' }}>
            <Footer {...args} />
        </div>
    );
}
