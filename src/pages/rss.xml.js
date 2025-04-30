import rss,  { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';


export async function GET(context){
    const posts = await getCollection('tips');

    const rssFeed = await rss({
        title: "AstroBuild.Tips",
        description: "My First Page",
        site: context.site,
        //items: await pagesGlobToRssItems(import.meta.glob(`./posts/${post.slug}`)),
        customData: `<language>es-CO</language>`,
        items: posts.map((post) =>({
            ...post.data,
            link: `./posts/${post.slug}`,
        })),
    });

    return new Response(rssFeed,{
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}