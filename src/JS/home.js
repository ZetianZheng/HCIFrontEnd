import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {INITIAL_EVENTS, createEventId} from '../JS/event-utils'
import eventDialog from '../components/event'

export default {
    name: 'appHome',
    components: {
        FullCalendar, // make the <FullCalendar> tag available
        eventDialog,
    },
    data() {
        return {
            dialogFormVisible: false,
            calendarOptions: {
                plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                initialView: 'dayGridMonth',
                initialEvents: INITIAL_EVENTS,
                editable: true,
                selectable: true,
                selectMirror: true,
                dayMaxEvents: true,
                weekends: true,
                eventClick: this.handleEventClick,
                eventsSet: this.handleEvents,
                dateClick: this.handleDateClick,
            },
            currentEvents: [],
            info: null
        }
    },

    methods: {
        handleDateClick: function (selectInfo) {
            let title = prompt('please enter a new event')
            let calendarApi = selectInfo.view.calendar

            calendarApi.unselect() // clear date selection

            if (title) {
                calendarApi.addEvent({
                    id: createEventId(),
                    title: title,
                    start: selectInfo.dateStr,
                    end: selectInfo.endStr,
                    allDay: selectInfo.allDay
                })
            }
        },
        handleEventClick() {
            this.dialogFormVisible = true;
        },
        handleEvents(events) {
            this.currentEvents = events
        },
        deleteEvent(Info) {
            Info.event.remove()
        },
        closeDialog() {
            this.dialogFormVisible = false;
        }
    },
    mounted() {
        this.axios
            .get('http://localhost:8080/hello/',{
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
                proxy:{
                    host:'192.168.1.156',
                    port: '8080'
                }
            })
            .then(response => {(this.info = response.data);
                console.log(this.info)})
            .catch(function (error) { // 请求失败处理
                console.log(error);
            });
    }
}