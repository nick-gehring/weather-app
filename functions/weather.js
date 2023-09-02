import axios from 'axios';

export async function handler(event, context) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=41.136391&lon=-81.484253&units=imperial&exclude=alerts&appid=${process.env.WEATHER_API_KEY}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = response.data;

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: error.response ? error.response.status : 500,
            body: JSON.stringify({
                message: error.message,
            }),
        };
    }
}
