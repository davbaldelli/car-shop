export function getOldestLogsPerState(logs) {
    return logs.reduce((res, log) => {
        if (!res.get(log.state) || res.get(log.state).timestamp < log.timestamp) {
            res.set(log.state, log)
        }
        return res
    }, new Map())
}