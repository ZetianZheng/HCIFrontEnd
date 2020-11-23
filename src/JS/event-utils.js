let eventGuid = 0
// let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
    {
        id: createEventId(),
        title: 'All-day event',
        start: todayStr()
    },
    {
        id: createEventId(),
        title: 'Timed event',
        start: todayStr() + 'T12:00:00'
    }
]

export function createEventId() {
    return String(eventGuid++)
}

export function todayStr(){
    return new Date().toISOString().replace(/T.*$/, '')
}

export const TEST_EVENT_DATA = [
    {id:1, title:'events 1', content:'event content1',
        start_time:'18:00:00', end_time:'20:00:00'},
    {id:2, title:'events 2', content:'event content2',
        start_time:'18:00:00', end_time:'20:00:00',
        subevent:[
            {id:1, title:'subevents 2', content:'subevent content1'},
            {id:2, title:'subevents 2', content:'subevent content2'},
            {id:3, title:'subevents 2', content:'subevent content3'},
        ]
    },
    {id:3, title:'events 3', content:'event content3',
        start_time:'18:00:00', end_time:'20:00:00'},
    {id:4, title:'events 4', content:'event content4',
        start_time:'18:00:00', end_time:'20:00:00'},
]