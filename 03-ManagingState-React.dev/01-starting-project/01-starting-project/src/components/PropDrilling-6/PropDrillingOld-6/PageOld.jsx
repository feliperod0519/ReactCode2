import Heading from "./Heading";
import Section from "./Section";

export default function PageOld(){
    return (
        <Section>
        <Heading level={1}>Title</Heading>
        <Section>
            <Heading level={2}>Heading</Heading>
            <Heading level={2}>Heading</Heading>
            <Heading level={2}>Heading</Heading>
            <Section>
            <Heading level={3}>Sub-heading</Heading>
            <Heading level={3}>Sub-heading</Heading>
            <Heading level={3}>Sub-heading</Heading>
            <Section>
                <Heading level={4}>Sub-sub-heading</Heading>
                <Heading level={4}>Sub-sub-heading</Heading>
                <Heading level={4}>Sub-sub-heading</Heading>
            </Section>
            </Section>
        </Section>
        </Section>
    );
}