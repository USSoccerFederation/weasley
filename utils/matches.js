import fetch from 'node-fetch'

async function fetchMatches() {
    const url = "https://ussf-opta-api-prod.azurewebsites.net/api/optaproxy?route=match%2F1svofrzot823s1rmatl9zhxqe8%3F_fmt%3Djson%26_rt%3Db%26comp%3D2bmwykmdlcc2u1c40ytoc39vy";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

export default fetchMatches;