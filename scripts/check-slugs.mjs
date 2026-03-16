
import { getCollection } from 'astro:content';

async function checkSlugs() {
    try {
        const courses = await getCollection('courses');
        courses.forEach(c => console.log(c.slug));
    } catch (e) {
        console.error(e);
    }
}

checkSlugs();
