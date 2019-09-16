import * as YAML from 'yamljs';
import * as fs from 'fs-extra';

// activate();
// function activate(){
//     const yml = fs.readFileSync('./profile.yml').toString();
//     const json = YAML.parse(yml);
//     console.log(json.Timeline_2.sections);
// }

createYML();
function createYML() {

    const landing = fs.readFileSync('./.vuepress/components/Landing.vue').toString();
    const timelines = landing.match(/(\<Timeline[\w\W]+?Timeline\>)/g);

    let str = String().concat('Timelines:', '\n');
    timelines.map((timeline, index) => {
        if (index > 1) {
            return;
        }

        const timelineAttributes = getTimelineAttributes(timeline);
        str = str.concat('  -', '\n');
        str = str.concat('   timeline: ', timelineAttributes.timeline, '\n');
        str = str.concat('   heading: ', timelineAttributes.heading, '\n');
        // str = str.concat('   content: ', '"', timelineAttributes.content, '"', '\n');

        const sections = getSectionsFromTimeline(timeline) || [];
        if (sections.length) str = str.concat('   sections:', '\n');

        sections.map((section) => {
            const sectionAttributes = getSectionAttributes(section);
            str = str.concat('    -', '\n');
            str = str.concat('        flare: ', `"${sectionAttributes.flare}"`, '\n');
            str = str.concat('        heading: ', sectionAttributes.heading, '\n');
            str = str.concat('        index: ', sectionAttributes.index, '\n');
            str = str.concat('        learnMoreLink: ', sectionAttributes.learnMoreLink, '\n');
            str = str.concat('        side: ', sectionAttributes.side, '\n');
            str = str.concat('        slot: ', `"${sectionAttributes.slot}"`, '\n');
        });
    });


    fs.writeFileSync('./generated.yml', str);

    function getSectionsFromTimeline(timeline: string): string[] {
        const sections = timeline.match(/(\<heroSection[\w\W]+?heroSection\>)/g);
        return sections;
    }

    function getTimelineAttributes(section: string): TimelineAttributes {
        const timeline = section.match(/timeline="([\w\W]+?)"/)[1];
        const heading = section.match(/heading="([\w\W]+?)"/)[1];
        const content = section.match(/content="([\w\W]+?)"/)[1];
        return {
            timeline, heading, content
        }
    }

    function getSectionAttributes(section: string): SectionAttributes {
        const side = (section.match(/side="([\w\W]+?)"/) || [])[1];
        const index = (section.match(/index="([\w\W]+?)"/) || [])[1];
        const flare = (section.match(/flare="([\w\W]+?)"/) || [])[1];
        const heading = (section.match(/heading="([\w\W]+?)"/) || [])[1];
        const content = (section.match(/content="([\w\W]+?)"/) || [])[1];
        const learnMoreLink = (section.match(/learnMoreLink="([\w\W]+?)"/) || [])[1];
        const slot = section.match(/<heroSection[\w\W]+?>([\w\W]+?)<\/heroSection>/)[0].replace(/"/g, '\\"');
        return {
            side, index, flare, heading, content, learnMoreLink, slot
        }
    }
}

interface TimelineAttributes {
    timeline: string;
    heading: string;
    content: string;
}

interface SectionAttributes {
    side: string;
    heading: string;
    content: string;
    learnMoreLink: string;
    index: string;
    flare: string;
    slot: string;
}