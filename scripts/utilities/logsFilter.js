export function getOldestLogsPerState(logs) {
    let ordersStateArray = ["pending_payment_confirm", "taken_in_charge", "delivering", "delivered"]
    let ordersStateMap = ordersStateArray.reduce((res, item, index) => res.set(item, index), new Map())
    let logsMap =  logs.reduce((res, log) => {
        if (!res.get(log.state) || res.get(log.state).timestamp < log.timestamp) {
            res.set(log.state, log)
        }
        return res
    }, new Map())
    let lastLog = logsMap.get("pending_payment_confirm")
    logsMap.forEach((value, key) => {
        if(value.timestamp > lastLog.timestamp){
            lastLog = value
        }
    })
    return new Map([...logsMap]
        .filter(([key, value]) => ordersStateMap.get(lastLog.state) >= ordersStateMap.get(value.state))
        .sort((a, b) => {
            if (ordersStateMap.get(a[0]) < ordersStateMap.get(b[0])) {
                return -1;
            }
            if (ordersStateMap.get(a[0]) > ordersStateMap.get(b[0])) {
                return 1;
            }
            // a must be equal to b
            return 0;
        }))
}