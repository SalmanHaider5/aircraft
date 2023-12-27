# Aircrafts Information System

## Getting Started
To get you started you can simply clone the repository

```
git clone https://github.com/SalmanHaider5/aircraft
```
and install the dependencies
```
npm install
```

### Prerequisites
```
Node V20.1.0
NPM V9.6.4
MongoDB
```

### Environment Variables
Create a `.env` file in root directory and add following parameters:
```shell
PORT=
MONGO_URL=
DB_NAME=
ENVIRONMENT=
RAPID_API_KEY=
```

### Run the Application
```
npm run start
```

### Schedulers
There are 3 schedulers running for different jobs:
```
1. Accidents Data - Once a month [Day 1, 11:00AM]
2. Stock API - Once a day [03:00 PM]
3. News API - Thrice a day [10:00AM, 02:00PM, 06:00PM]
```

### APIs
1. FAA Registrations Data
```shell
GET /aircraft/registrations?records=10&page=1
# Add excel sheet in form data with request
POST /aircraft/airports/create
```
2. Accidents Data
```
GET /aircraft/accidents?records=10&page=1
```
3. Stocks Data
```
GET /aircraft/stocks?records=10&page=1
```
4. News Data
```
GET /aircraft/news?records=10&page=1
```
5. AirportsData
```shell
GET /aircraft/airports?records=10&page=1
# Add excel sheet in form data with request
POST /aircraft/airports/create
```