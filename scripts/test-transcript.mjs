import { YoutubeTranscript } from 'youtube-transcript';

async function test() {
    try {
        const transcript = await YoutubeTranscript.fetchTranscript('rTkfR9GGmnw', { lang: 'zh-Hant' });
        console.log('Transcript length:', transcript.length);
        console.log('First bit:', transcript[0]);
        console.log('Full text preview:', transcript.slice(0, 10).map(t => t.text).join(' '));
    } catch (e) {
        console.error('Failed to fetch transcript:', e.message);
    }
}

test();
