export const accidentsConstants = {
    scheduler: {
        interval: '0 15 * * *'
    },
    sessionId: 480529,
    mainUrl: "https://data.ntsb.gov/carol-main-public/api/Query/Main",
    headers: {
        "content-type": "application/json"
    },
    dataKeys: [
        { key: "NtsbNo", dbKey: "ntsbNo" },
        { key: "CompletionStatus", dbKey: "completionStatus" },
        { key: "EventType", dbKey: "eventType" },
        { key: "City", dbKey: "city" },
        { key: "State", dbKey: "state" },
        { key: "Country", dbKey: "country" },
        { key: "ReportNo", dbKey: "reportNo" },
        { key: "N#", dbKey: "nNumber" },
        { key: "VehicleMake", dbKey: "make" },
        { key: "VehicleModel", dbKey: "model" },
        { key: "HighestInjuryLevel", dbKey: "highestInjuryLevel" },
        { key: "HasSafetyRec", dbKey: "hasSafetyRec" },
        { key: "Mode", dbKey: "mode" },
        { key: "ReportType", dbKey: "reportType" },
        { key: "ReportDate", dbKey: "ReportDate" }
    ]
};