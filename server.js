const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const vehicleData = [
    {"latitude": 17.385044, "longitude": 78.486671, "timestamp": "2024-07-20T10:00:00Z"},
    {"latitude": 17.385045, "longitude": 78.486672, "timestamp": "2024-07-20T10:00:05Z"},
    {"latitude": 17.385046, "longitude": 78.486673, "timestamp": "2024-07-20T10:00:10Z"},
    {"latitude": 17.385047, "longitude": 78.486674, "timestamp": "2024-07-20T10:00:15Z"},
    {"latitude": 17.385048, "longitude": 78.486675, "timestamp": "2024-07-20T10:00:20Z"},
    {"latitude": 17.385049, "longitude": 78.486676, "timestamp": "2024-07-20T10:00:25Z"},
    {"latitude": 17.385050, "longitude": 78.486677, "timestamp": "2024-07-20T10:00:30Z"},
    {"latitude": 17.385051, "longitude": 78.486678, "timestamp": "2024-07-20T10:00:35Z"},
    {"latitude": 17.385052, "longitude": 78.486679, "timestamp": "2024-07-20T10:00:40Z"},
    {"latitude": 17.385053, "longitude": 78.486680, "timestamp": "2024-07-20T10:00:45Z"},
    {"latitude": 17.385054, "longitude": 78.486681, "timestamp": "2024-07-20T10:00:50Z"},
    {"latitude": 17.385055, "longitude": 78.486682, "timestamp": "2024-07-20T10:00:55Z"},
    {"latitude": 17.385056, "longitude": 78.486683, "timestamp": "2024-07-20T10:01:00Z"},
    {"latitude": 17.385057, "longitude": 78.486684, "timestamp": "2024-07-20T10:01:05Z"},
    {"latitude": 17.385058, "longitude": 78.486685, "timestamp": "2024-07-20T10:01:10Z"},
    {"latitude": 17.385059, "longitude": 78.486686, "timestamp": "2024-07-20T10:01:15Z"},
    {"latitude": 17.385060, "longitude": 78.486687, "timestamp": "2024-07-20T10:01:20Z"},
    {"latitude": 17.385061, "longitude": 78.486688, "timestamp": "2024-07-20T10:01:25Z"},
    {"latitude": 17.385062, "longitude": 78.486689, "timestamp": "2024-07-20T10:01:30Z"}
];



app.get('/', (req, res) => {
    res.send('Server is running');
});


app.get('/api/vehicle', (req, res) => {
    const now = new Date();
    const index = Math.floor(Math.random() * vehicleData.length);
    console.log(`Selected index: ${index}`); // Log the index
    const data = vehicleData[index];
    data.timestamp = now.toISOString();
    console.log(`Selected data: ${JSON.stringify(data)}`); // Log the data
    res.json(data);
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
