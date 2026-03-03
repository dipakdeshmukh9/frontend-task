const scans = [
  {
    id: 1,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: {
      critical: 12,
      high: 23,
      medium: 18,
      low: 4,
    },
    lastScan: "4d ago",
  },
  {
    id: 2,
    name: "IoT Devices",
    type: "Blackbox",
    status: "Failed",
    progress: 40,
    vulnerabilities: {
      critical: 3,
      high: 6,
      medium: 10,
      low: 2,
    },
    lastScan: "2d ago",
  },
  {
    id: 3,
    name: "Internal API",
    type: "Greybox",
    status: "Scheduled",
    progress: 0,
    vulnerabilities: {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0,
    },
    lastScan: "1d ago",
  },
];

export default scans;