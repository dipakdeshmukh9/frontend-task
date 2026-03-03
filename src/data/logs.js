const logs = [
  { id: 1, type: "info", message: "Starting spidering process..." },
  { id: 2, type: "url", message: "Discovered endpoint: /api/v1/users" },
  { id: 3, type: "info", message: "Mapping internal routes..." },
  { id: 4, type: "warning", message: "Potential XSS vulnerability detected" },
  { id: 5, type: "success", message: "Validation completed successfully" },
  { id: 6, type: "error", message: "SQL Injection detected at /login" },
];

export default logs;